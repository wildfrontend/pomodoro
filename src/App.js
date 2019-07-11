import React from 'react'

import { ThemeProvider } from 'styled-components'
import { Box, Flex } from 'rebass'
import { theme } from './styles/theme'

import './App.scss'

import { Navbar } from './components/Navbar'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Flex className='app'>
                <Box width={1 / 12} color='magenta' bg='#FF7575'>
                    <Navbar />
                </Box>
                <Box p={3} width={5 / 12} color='white' bg='white'>
                    Box
                </Box>
                <Box p={3} width={6 / 12} color='white' bg='grey'>
                    Box
                </Box>
            </Flex>
        </ThemeProvider>
    )
}

export default App
