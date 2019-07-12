import React from 'react'
import './TaskMission.scss'

export const TaskMisson = props => {
    return (
        <div className='task-mission'>
            <div className='mission-done'>
                <div>今天任務已完成</div>
                <div className='content'>4/15</div>
            </div>
            <div className='mission-time'>
                <div>2019/07/09</div>
                <div className='content'>13:00</div>
            </div>
        </div>
    )
}
