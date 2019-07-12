import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Welcome } from '@storybook/react/demo'

import { ProcessTask } from '../components/ProcessTask'
import { CreateTask } from '../components/CreateTask'
import { TaskMisson } from '../components/TaskMission'
import { TaskClock } from '../components/TaskClock'

storiesOf('Welcome', module).add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
))

storiesOf('Task', module)
    .add('Todolist', () => <ProcessTask />)
    .add('Create Task', () => <CreateTask />)

storiesOf('Task Mission', module)
    .addParameters({
        backgrounds: [{ name: 'time-clock', value: '#FF7575 ', default: true }]
    })
    .add('TaskMission', () => <TaskMisson />)
    .add('TaskClock', () => <TaskClock />)
