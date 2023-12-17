import React from 'react'
import Pollupdatewrapper from '../components/pollupdate/Pollupdatewrapper'
import { Box, Container, Group, Image } from '@mantine/core'
import logo from '../assets/election_logo.png'
function Pollupdatepage() {
    return (
        <Container size={400}>
            <Group justify='center' pt={10}>
                <a href='/'>
                <Image src={logo} alt='logo' h={50} w="auto" />
                </a>
            </Group>
            <Pollupdatewrapper />
            <Box p={20}>

            </Box>
        </Container>
    )
}

export default Pollupdatepage