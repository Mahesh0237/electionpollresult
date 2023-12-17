import { Container, Tabs, Text } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { getDatabase, onValue, ref } from 'firebase/database'
import app from '../firebase'
import Telanagana from './parts/Telanagana'
import Madhyapradesh from './parts/Madhyapradesh'
import Chhattisgarh from './parts/Chhattisgarh'
import Rajasthan from './parts/Rajasthan'
import Mizoram from './parts/Mizoram'
function Pollreadingwrapper() {
    const db = getDatabase(app)
    const [isLoadingEffect, setIsLoadingEffect] = useState(false)
    const [activetTab, setActiveTab] = useState("Telangana")
    const updateTab = (value) => {
        setActiveTab(value)
        if (value === 'Telangana') {
            setIsLoadingEffect(true)
            getTelanganaData()
        } else if (value === "Madhyapradesh") {
            setIsLoadingEffect(true)
            getMadhyapradeshData()
        } else if (value === 'Chhattisgarh') {
            setIsLoadingEffect(true)
            getChhattisgarh()
        } else if (value === "Rajasthan") {
            setIsLoadingEffect(true)
            getRajasthanData()
        } else if (value === "Mizoram") {
            setIsLoadingEffect(true)
            getMizoramData()
        }
    }

    const [telanganaData, setTelanganaData] = useState(null)
    const getTelanganaData = () => {
        const starCountRef = ref(db, 'Telangana');
        onValue(starCountRef, (snapshot) => {
            const res = snapshot.val();
            if (res) {
                setIsLoadingEffect(false)
                setTelanganaData(res)
            } else {
                setIsLoadingEffect(false)
                setTelanganaData(null)
            }
        });
    }

    const [madhyapradeshData, setMadhyaprdeshData] = useState(null)
    const getMadhyapradeshData = () => {
        const starCountRef = ref(db, 'Madhyapradesh')
        onValue(starCountRef, (snapshot) => {
            const res = snapshot.val();
            if (res) {
                setIsLoadingEffect(false)
                setMadhyaprdeshData(res)
            } else {
                setIsLoadingEffect(false)
                setMadhyaprdeshData(null)
            }
        })
    }
    const [chhattisgarh, setChhattisgarh] = useState(null)
    const getChhattisgarh = () => {
        const starCountRef = ref(db, 'Chhattisgarh')
        onValue(starCountRef, (snapshot) => {
            const res = snapshot.val();
            if (res) {
                setIsLoadingEffect(false)
                setChhattisgarh(res)
            } else {
                setIsLoadingEffect(false)
                setChhattisgarh(null)
            }
        })
    }
    const [rajasthanData, setRajasthanData] = useState(null)
    const getRajasthanData = () => {
        const starCountRef = ref(db, 'Rajasthan');
        onValue(starCountRef, (snapshot) => {
            const res = snapshot.val();
            if (res) {
                setIsLoadingEffect(false)
                setRajasthanData(res)
            } else {
                setIsLoadingEffect(false)
                setRajasthanData(null)
            }
        });
    }
    const [mizoramData, setMizoramData] = useState(null)
    const getMizoramData = () => {
        const starCountRef = ref(db, 'Mizoram');
        onValue(starCountRef, (snapshot) => {
            const res = snapshot.val();
            if (res) {
                setIsLoadingEffect(false)
                setMizoramData(res)
            } else {
                setIsLoadingEffect(false)
                setMizoramData(null)
            }
        });
    }

    useEffect(() => {
        setIsLoadingEffect(true)
        getTelanganaData()
    }, [])
    
    const [totalseats, setTotalseats] = useState(null)
    useEffect(() => {
        const starCountRef = ref(db, `${activetTab}/totalseats`)
        onValue(starCountRef, (snapshot) => {
            const res = snapshot.val()
            if (res) {
                setTotalseats(res.totalseats || '')
            } else {
                setTotalseats('')
            }
        })
    }, [activetTab])

    return (
        <>
            <Container size={350} p={20} className='pollreading'>
                <Tabs color="gray" variant="pills" onChange={updateTab} value={activetTab}>
                    <Tabs.List>
                        <Tabs.Tab value="Telangana">
                            <Text fw={700}>TS</Text>
                        </Tabs.Tab>
                        <Tabs.Tab value="Madhyapradesh" >
                            <Text fw={700}>MP</Text>
                        </Tabs.Tab>
                        <Tabs.Tab value="Chhattisgarh" >
                            <Text fw={700}>CG</Text>
                        </Tabs.Tab>
                        <Tabs.Tab value="Rajasthan" >
                            <Text fw={700}>RJ</Text>
                        </Tabs.Tab>
                        <Tabs.Tab value="Mizoram" >
                            <Text fw={700}>MZ</Text>
                        </Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="Telangana">
                        {
                            activetTab === "Telangana" &&
                            <Telanagana
                                totalseats={totalseats}
                                telanganaData={telanganaData}
                                isLoadingEffect={isLoadingEffect}
                            />
                        }
                    </Tabs.Panel>

                    <Tabs.Panel value="Madhyapradesh">
                        {
                            activetTab === "Madhyapradesh" &&
                            <Madhyapradesh
                                totalseats={totalseats}
                                madhyapradeshData={madhyapradeshData}
                                isLoadingEffect={isLoadingEffect}
                            />
                        }
                    </Tabs.Panel>

                    <Tabs.Panel value="Chhattisgarh">
                        {
                            activetTab === "Chhattisgarh" &&
                            <Chhattisgarh
                                totalseats={totalseats}
                                chhattisgarh={chhattisgarh}
                                isLoadingEffect={isLoadingEffect}
                            />
                        }
                    </Tabs.Panel>

                    <Tabs.Panel value="Rajasthan">
                        {
                            activetTab === "Rajasthan" &&
                            <Rajasthan
                                totalseats={totalseats}
                                rajasthanData={rajasthanData}
                                isLoadingEffect={isLoadingEffect}
                            />
                        }
                    </Tabs.Panel>

                    <Tabs.Panel value="Mizoram">
                        {
                            activetTab === "Mizoram" &&
                            <Mizoram
                                totalseats={totalseats}
                                mizoramData={mizoramData}
                                isLoadingEffect={isLoadingEffect}
                            />
                        }
                    </Tabs.Panel>
                </Tabs>
            </Container>
        </>
    )
}

export default Pollreadingwrapper