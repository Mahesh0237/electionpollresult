import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loader, Stack, Text } from '@mantine/core';
const Homepage = lazy(() => import('./pages/Homepage'))
const Pollupdatepage = lazy(() => import('./pages/Pollupdatepage'))
function Approuter() {
    return (
        <BrowserRouter>
            <Suspense fallback={
                <Stack align='center' justify='center' style={{ height: "100vh" }}>
                    <Loader variant="bars" color="green" />
                    <Text size={15} weight={600} c="white">Loading please wait....</Text>
                </Stack>
            }>
                <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route path='/pollupdate' element={<Pollupdatepage />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Approuter