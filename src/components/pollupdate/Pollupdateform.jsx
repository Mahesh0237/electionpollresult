import { Button, Group, LoadingOverlay, TextInput } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { getDatabase, onValue, ref, set } from 'firebase/database';
import { notifications } from '@mantine/notifications';
import app from '../firebase';

function Pollupdateform({ state, partyname }) {
    const db = getDatabase(app)
    const [partylead, setpPartylead] = useState('')
    const [partyOwn, setPartyOwn] = useState('')
    const [isLoadingEffect, setIsLoadingEffect] = useState(false)
    const updateCompanyoneLead = (e) => {
        setpPartylead(e.currentTarget.value)
    }
    const updateCompanyoneOwn = (e) => {
        setPartyOwn(e.currentTarget.value)
    }
    const handleSubmit = () => {
        setIsLoadingEffect(true)
        set(ref(db, `${state}/${partyname}`), {
            partylead,
            partyOwn
        })
            .then((res) => {
                console.log('data is submitted', res)
                setIsLoadingEffect(false)
                notifications.show({
                    title: 'Success',
                    message: 'Details are updated',
                    color: 'green',
                    zIndex: 9999999,
                })
            })
            .catch((error) => {
                setIsLoadingEffect(false)
                console.log('error at companyone', error)
            })
    }

    useEffect(() => {
        setIsLoadingEffect(true)
        const starCountRef = ref(db, `${state}/${partyname}`)
        onValue(starCountRef, (snapshot) => {
            setIsLoadingEffect(false)
            const user_data = snapshot.val();
            if (user_data) {
                setpPartylead(user_data.partylead || '')
                setPartyOwn(user_data.partyOwn || '')
            } else {
                setpPartylead('');
                setPartyOwn('');
            }
        });
    }, [state, partyname])

    return (
        <>
            <Group position='apart' grow>
                <TextInput
                    label="leads:"
                    size="xs"
                    placeholder='leads'
                    value={partylead}
                    onChange={updateCompanyoneLead}
                />
                <TextInput
                    label="own:"
                    size="xs"
                    placeholder='own'
                    value={partyOwn}
                    onChange={updateCompanyoneOwn}
                />
                <Button onClick={handleSubmit} size="xs" color='#00cc62' mt={32}>Submit</Button>
            </Group>
            <LoadingOverlay visible={isLoadingEffect} loaderProps={{ size: 'md', color: 'green', variant: 'bars' }} />
        </>
    )
}

export default Pollupdateform