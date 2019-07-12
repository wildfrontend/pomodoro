import React from 'react'
import _ from 'lodash'

import { ThemeProvider } from 'styled-components'
import { Box, Flex } from 'rebass'
import { theme } from './styles/theme'

import './App.scss'

import { Navbar } from './components/Navbar'
import { ProcessTask } from './components/ProcessTask'
import { CreateTask } from './components/CreateTask'
import { TaskMission } from './components/TaskMission'
import { TaskClock } from './components/TaskClock'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Flex className='app'>
                <Box width={1 / 12} color='magenta' bg='#FF7575'>
                    <Navbar />
                </Box>
                <Box p={0} width={5 / 12} color='white' bg='white'>
                    <Box p={6} className='todo'>
                        <ProcessTask />
                        <CreateTask />
                    </Box>
                </Box>
                <Box p={0} width={6 / 12} color='white' bg='grey'>
                    <TaskMission />
                    <TaskClock />
                </Box>
            </Flex>
        </ThemeProvider>
    )
}

export default App
