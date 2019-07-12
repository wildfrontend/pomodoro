import React, { Fragment, useState } from 'react'
import { FaStopCircle, FaTimes, FaPlay } from 'react-icons/fa'

import './TaskClock.scss'

export const TaskClock = props => {
    const [pause, setPause] = useState(false)
    return (
        <Fragment>
            <div className='task-clock'>
                <div className='clock-info'>
                    <span className='reciprocal'>12:35</span>
                    <div className='control'>
                        {pause ? (
                            <>
                                <div
                                    className='left'
                                    onClick={() => setPause(false)}
                                >
                                    <FaStopCircle />
                                    <span>暫停</span>
                                </div>
                                <div className='right'>
                                    <FaTimes />
                                    <span>作廢</span>
                                </div>
                            </>
                        ) : (
                            <div onClick={() => setPause(true)}>
                                <span>開始</span>
                                <FaPlay />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
