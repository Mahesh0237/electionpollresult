import React from 'react'
import logo from '../assets/election_logo.png'
import { Group, Image } from '@mantine/core'
function Header() {
    return (
        <Group  justify='center' pt={10}>
            <Image src={logo} alt='logo' h={50} w="auto" />
        </Group>
    )
}

export default Header