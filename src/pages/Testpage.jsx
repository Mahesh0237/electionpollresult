import { Button, Container } from '@mantine/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateDecrement, updateIncrement } from '../redux/actions'
import { useStore } from 'zustand'

function Testpage() {
    // const dispatch = useDispatch()
    // const value = useSelector((state) => state.changeTheNumber)
    const {count,increment} = useStore()
    return (
        <Container>
            <button onClick={() => { dispatch(updateIncrement()) }}>+</button>
            <input type='text' value={value} />
            <button onClick={() => { dispatch(updateDecrement()) }}>-</button>
        </Container>
    )
}

export default Testpage