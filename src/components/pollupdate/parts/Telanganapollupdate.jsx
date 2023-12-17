import { Button, Card, Group, LoadingOverlay, Text, TextInput } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import Pollupdateform from '../Pollupdateform'

function Telanganapollupdate({ state, totalseats,isLoadingEffect, getTotalseats }) {
    const [seats, setSeats] = useState('')
    const updateTotalseats = (e) => {
        setSeats(e.currentTarget.value)
    }
    
    const handleSubmit = () => {
        getTotalseats(seats)
    }

    useEffect(() => {
        setSeats(totalseats)
    }, [totalseats])

    return (
        <>
            <Card withBorder>
                <Card.Section inheritPadding py={10} withBorder>
                    <Text fw={700} size="xs">BRS:</Text>
                    <Pollupdateform
                        state={state}
                        partyname="BRS"
                    />
                </Card.Section>
                <Card.Section inheritPadding py={10} withBorder>
                    <Text fw={700} size="xs">CONG+CPI:</Text>
                    <Pollupdateform
                        state={state}
                        partyname="CONG+CPI"
                    />
                </Card.Section>
                <Card.Section inheritPadding py={10} withBorder>
                    <Text fw={700} size="xs">BJP+JSP:</Text>
                    <Pollupdateform
                        state={state}
                        partyname="BJP+JSP"
                    />
                </Card.Section>
                <Card.Section inheritPadding py={10} withBorder>
                    <Text fw={700} size="xs">MIM:</Text>
                    <Pollupdateform
                        state={state}
                        partyname="MIM"
                    />
                </Card.Section>
                <Card.Section inheritPadding py={10} withBorder>
                    <Text fw={700} size="xs">BSP:</Text>
                    <Pollupdateform
                        state={state}
                        partyname="BSP"
                    />
                </Card.Section>
                <Card.Section inheritPadding py={10} withBorder>
                    <Text fw={700} size="xs">CPM:</Text>
                    <Pollupdateform
                        state={state}
                        partyname="CPM"
                    />
                </Card.Section>

                <Card.Section inheritPadding py={10} withBorder>
                    <Text fw={700} size="xs">OTH:</Text>
                    <Pollupdateform
                        state={state}
                        partyname="OTH"
                    />
                </Card.Section>
                <Card.Section inheritPadding py={10} >
                    <Text fw={700} size="xs">Total Seats:</Text>
                    <Group position='apart' grow>
                        <TextInput
                            placeholder='total seats'
                            value={seats}
                            onChange={updateTotalseats}
                        />
                        <Button size="sm" color='red' onClick={handleSubmit} >Submit</Button>
                    </Group>
                </Card.Section>
                <LoadingOverlay visible={isLoadingEffect} loaderProps={{ size: 'md', color: 'green', variant: 'bars' }} />
            </Card>
        </>
    )
}

export default Telanganapollupdate