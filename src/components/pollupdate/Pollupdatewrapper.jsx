import { Card, Tabs, Text } from '@mantine/core'
import React, { useCallback, useEffect, useState } from 'react'
import Telanganapollupdate from './parts/Telanganapollupdate'
import Madhyapradeshpollupdate from './parts/Madhyapradeshpollupdate'
import Chhattisgarhpollupdate from './parts/Chhattisgarhpollupdate'
import Rajasthanpollupdate from './parts/Rajasthanpollupdate'
import Mizorampolluppdate from './parts/Mizorampolluppdate'
import { getDatabase, onValue, ref, set } from 'firebase/database'
import app from '../firebase'
import { notifications } from '@mantine/notifications'

function Pollupdatewrapper() {
    const [isLoadingEffect, setIsLoadingEffect] = useState(false)
    const db = getDatabase(app)
    const [activetTab, setActiveTab] = useState('Telangana')
    const updateTab = (value) => {
        setActiveTab(value)
    }
    const [totalseats, setTotalseats] = useState(null)
    useEffect(() => {
        setIsLoadingEffect(true)
        const starCountRef = ref(db, `${activetTab}/totalseats`)
        onValue(starCountRef, (snapshot) => {
            setIsLoadingEffect(false)
            const res = snapshot.val();
            if (res) {
                setTotalseats(res.totalseats || '')
            } else {
                setTotalseats('')
            }
        });
    }, [activetTab])

    const getTotalseats = useCallback((value) => {
        setIsLoadingEffect(true)
        set(ref(db, `${activetTab}/totalseats`), {
            totalseats:value
        })
            .then((res) => {
                setIsLoadingEffect(false)
                console.log('data is submitted', res)
                notifications.show({
                    title: 'Success',
                    message: 'Details are updated',
                    color: 'green',
                    zIndex: 9999999,
                })
            })
            .catch((error) => {
                setIsLoadingEffect(false)
                console.log('error', error)
            })
    }, [activetTab])
    
    return (
        <Card withBorder mt={20}>
            <Tabs variant="pills" color='#00cc62' value={activetTab} onChange={updateTab}>
                <Tabs.List>
                    <Tabs.Tab value="Telangana" >
                        <Text size="xs" fw={700}>TS</Text>
                    </Tabs.Tab>
                    <Tabs.Tab value="Madhyapradesh">
                        <Text size="xs" fw={700}>MP</Text>
                    </Tabs.Tab>
                    <Tabs.Tab value="Chhattisgarh">
                        <Text size="xs" fw={700}>CG</Text>
                    </Tabs.Tab>
                    <Tabs.Tab value="Rajasthan">
                        <Text size="xs" fw={700}>RJ</Text>
                    </Tabs.Tab>
                    <Tabs.Tab value="Mizoram">
                        <Text size="xs" fw={700}>MZ</Text>
                    </Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="Telangana" mt={20}>
                    <Telanganapollupdate
                        state="Telangana"
                        totalseats={totalseats}
                        getTotalseats={getTotalseats}
                        isLoadingEffect = {isLoadingEffect}
                    />
                </Tabs.Panel>
                <Tabs.Panel value="Madhyapradesh" mt={20}>
                    <Madhyapradeshpollupdate
                        state="Madhyapradesh" 
                        totalseats={totalseats}
                        getTotalseats={getTotalseats}
                        isLoadingEffect = {isLoadingEffect}
                    />
                </Tabs.Panel>
                <Tabs.Panel value="Chhattisgarh" mt={20}>
                    <Chhattisgarhpollupdate
                        state="Chhattisgarh"
                        totalseats={totalseats}
                        getTotalseats={getTotalseats}
                        isLoadingEffect = {isLoadingEffect}
                    />
                </Tabs.Panel>
                <Tabs.Panel value="Rajasthan" mt={20}>
                    <Rajasthanpollupdate
                        state="Rajasthan"
                        totalseats={totalseats}
                        getTotalseats={getTotalseats}
                        isLoadingEffect = {isLoadingEffect}
                    />
                </Tabs.Panel>
                <Tabs.Panel value="Mizoram" mt={20}>
                    <Mizorampolluppdate
                        state="Mizoram"
                        totalseats={totalseats}
                        getTotalseats={getTotalseats}
                        isLoadingEffect = {isLoadingEffect}
                    />
                </Tabs.Panel>
            </Tabs>
        </Card>
    )
}

export default Pollupdatewrapper