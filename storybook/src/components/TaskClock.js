import React, { Fragment, useState, useEffect } from 'react'
import { FaStopCircle, FaTimes, FaPlay } from 'react-icons/fa'

import './TaskClock.scss'

export const TaskClock = props => {
    const [pause, setPause] = useState(true)
    const [seconds, setSeconds] = useState(25 * 60)
    useEffect(() => {
        const int = setInterval(() => {
            console.log(`${Date.now()} - pause: ${pause}`)
            if (!pause) {
                setSeconds(s => s - 1)
            }
        }, 1000)
        return () => {
            clearInterval(int)
        }
    }, [pause])

    const startTimer = () => {
        setPause(false)
    }
    const pauseTimer = () => {
        setPause(true)
    }
    const resetTimer = () => {
        setPause(true)
        setSeconds(25 * 60)
    }
    return (
        <Fragment>
            <div className='task-clock'>
                <div className='clock-info'>
                    <span className='reciprocal'>{`${Math.floor(
                        seconds / 60
                    )}:${('00' + (seconds % 60)).slice(-2)}`}</span>
                    <div className='control'>
                        {pause ? (
                            <div onClick={() => startTimer()}>
                                <span>開始</span>
                                <FaPlay />
                            </div>
                        ) : (
                            <>
                                <div
                                    className='left'
                                    onClick={() => pauseTimer()}
                                >
                                    <FaStopCircle />
                                    <span>暫停</span>
                                </div>
                                <div className='right'>
                                    <FaTimes />
                                    <span>作廢</span>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
