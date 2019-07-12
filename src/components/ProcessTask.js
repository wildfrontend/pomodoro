import React from 'react'
import { FaCaretRight } from 'react-icons/fa'
import './ProcessTask.scss'

export const ProcessTask = props => {
    return (
        <ul className='process-task'>
            <li>
                <div className='node doing-now'>
                    <FaCaretRight size='auto' color='#ff6d6d' />
                </div>
                <div className='title doing-now-title'>The First Thing</div>
            </li>
            <li>
                <div className='divider' />
            </li>
            <li>
                <div className='node' />
                <div className='title'>The First Thing</div>
            </li>
            <li>
                <div className='divider' />
            </li>
            <li>
                <div className='node ralex' />
                <div className='title ralex-title'>The Ralex Thing</div>
            </li>
            <li>
                <div className='divider ralex' />
            </li>
            <li>
                <div className='node' />
                <div className='title'>The First Thing</div>
            </li>
            <li>
                <div className='divider' />
            </li>
        </ul>
    )
}
