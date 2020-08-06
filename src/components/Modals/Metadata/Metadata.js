import React from 'react'
import { Box, Button, Image, Text } from 'grommet'
import { Close } from 'grommet-icons'
import styled from 'styled-components'
import data from './mockData'
import Satellite from 'images/satellite_map.png'
import ConditionalLink from './components/ConditionalLink'

const Uppercase = styled(Text)`
  text-transform: uppercase;
`

export default function Metadata() {
  return (
    <Box
      border={{ color: 'kelp' }}
      elevation='small'
      gap='small'
      pad='medium'
      width={{ max: '35rem' }}
    >
      <Box direction='row' justify='between'>
        <Text>Subject Metadata</Text>
        <Button
          gap='xsmall'
          icon={<Close color='black' size='small' />}
          label={<Uppercase color='kelp' size='small'>Close</Uppercase>}
          onClick={() => console.log('Close the modal')}
          plain
          reverse
        />
      </Box>
      <Box
        background='sand'
        border={{ color: 'kelp' }}
      >
        <Image fit='contain' src={Satellite} />
      </Box>
      <Box gap='xsmall' overflow={{ vertical: 'auto' }}>
        {Object.entries(data).map(datum => {
          const [key, value] = datum
          return (
            <Box direction='row' gap='xsmall'>
              <Box align='end' basis='1/3'>
                <Uppercase color='kelp'>{key}</Uppercase>
              </Box>
              <Box basis='2/3'>
                <ConditionalLink color='kelp' text={value} />
              </Box>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
