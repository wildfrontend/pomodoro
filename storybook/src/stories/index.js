import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Welcome } from '@storybook/react/demo'

import { ProcessTask } from '../components/ProcessTask'
import { CreateTask } from '../components/CreateTask'

storiesOf('Welcome', module).add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
))

storiesOf('Task', module)
    .add('Todolist', () => <ProcessTask />)
    .add('Create Task', () => <CreateTask />)
