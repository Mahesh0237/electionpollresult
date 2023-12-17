import { Button, Card, Group, Text, TextInput } from '@mantine/core'
import React from 'react'
import Pollupdateform from '../Pollupdateform'

function Resultcard({state}) {
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
                    <Text fw={700} size="xs">CONG:</Text>
                    <Pollupdateform
                        state={state}
                        partyname="CONG"
                    />
                </Card.Section>
                <Card.Section inheritPadding py={10} withBorder>
                    <Text fw={700} size="xs">BJP:</Text>
                    <Pollupdateform
                        state={state}
                        partyname="BJP"
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
                        partyname="BSp"
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
            </Card>
        </>
    )
}

export default Resultcard