import React from 'react'

import { ThemeProvider } from 'styled-components'
import { Box, Flex, Text } from 'rebass'
import { theme } from './styles/theme'

import { FiList, FiBarChart, FiMusic } from 'react-icons/fi'

import './App.scss'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Flex className='app'>
                <Box  width={1 / 12} color='magenta' bg='#FF7575'>
                    <Box p={4} fontSize={4} color='white' bg='#CB2424'>
                        <FiList size='3rem' />
                    </Box>
                    <Box p={4} fontSize={4} color='white' bg='#E54343'>
                        <FiBarChart size='3rem' />
                    </Box>
                    <Box p={4} fontSize={4} color='white' bg='#F85A5A'>
                        <FiMusic size='3rem' />
                    </Box>

                    <Text
                        color='white '
                        fontSize={6}
                        callName='logo-name'
                        className='nav-logoname'
                    >
                        Pomotoro
                    </Text>
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
