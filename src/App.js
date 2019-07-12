import React from 'react'
import _ from 'lodash'

import { ThemeProvider } from 'styled-components'
import { Box, Flex } from 'rebass'
import { theme } from './styles/theme'

import { IoMdPlay } from 'react-icons/io'

import './App.scss'

import { Navbar } from './components/Navbar'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Flex className='app'>
                <Box width={1 / 12} color='magenta' bg='#FF7575'>
                    <Navbar />
                </Box>
                <Box p={0} width={5 / 12} color='white' bg='white'>
                    <Box p={6} className='todo' bg='#FF7575'>
                        <Box
                            p={3}
                            bg='white'
                            color='primary'
                            className='todo-process'
                        >
                            <ul>
                                <li>
                                    <div className='now-node'>
                                        <IoMdPlay />
                                    </div>
                                    <p className='now-todo'>The First Thing</p>
                                </li>
                                <li>
                                    <div className='divider' />
                                </li>
                                {_.times(4, () => {
                                    return (
                                        <>
                                            <li>
                                                <div className='node' />
                                                <p>The First Thing</p>
                                            </li>
                                            <li>
                                                <div className='divider' />
                                            </li>
                                        </>
                                    )
                                })}
                            </ul>
                        </Box>
                        <Box bg='white' p={4} className='todo-create'>
                            <div className='textarea-block'>
                                <textarea
                                    cols='50'
                                    rows='5'
                                    placeholder='+ 增加新任務'
                                />
                            </div>
                        </Box>
                    </Box>
                </Box>
                <Box p={0} width={6 / 12} color='white' bg='grey'>
                    Box
                </Box>
            </Flex>
        </ThemeProvider>
    )
}

export default App
