import React, { Fragment } from 'react'

import { Box, Text } from 'rebass'
import { FiList, FiBarChart, FiMusic } from 'react-icons/fi'

export const Navbar = props => {
    return (
        <Fragment>
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
        </Fragment>
    )
}
