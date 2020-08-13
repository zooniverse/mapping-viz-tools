import React from 'react'
import { Box, DataTable, Image, Text } from 'grommet'
import { Close } from 'grommet-icons'
import styled from 'styled-components'
import { PlainButton } from '@zooniverse/react-components'
import data from './mockData'
import Satellite from 'images/satellite_map.png'
import ConditionalLink from './components/ConditionalLink'

const StyledDataTable = styled(DataTable)`
  width: 100%;

  thead { display: none; }
  th { text-align: right; }
`

const Uppercase = styled(Text)`
  text-transform: uppercase;
`

const columns = [{
  property: 'key',
  render: datum => <Uppercase color='kelp' weight='bold'>{datum.key}</Uppercase>
}, {
  property: 'value',
  render: datum => <ConditionalLink color='kelp' text={datum.value} />
}]

export default function Metadata() {
  console.log(PlainButton);
  return (
    <Box
      border={{ color: 'kelp' }}
      elevation='small'
      gap='xsmall'
      height='32rem'
      pad={{ horizontal: 'medium', vertical: 'small' }}
      width='27rem'
    >
      <Box direction='row' justify='between'>
        <Text color='kelp'>Subject Metadata</Text>
        <PlainButton
          icon={<Close color='black' size='small' />}
          onClick={() => console.log('Close the modal')}
          text='Close'
          reverse
        />
      </Box>
      <Box
        background='sand'
        border={{ color: 'kelp' }}
        height={{ max: '16rem' }}
      >
        <Image fit='contain' src={Satellite} />
      </Box>
      <Box overflow={{ vertical: 'auto' }}>
        <StyledDataTable
          columns={columns}
          data={data}
          pad={{ horizontal: 'xxsmall' }}
        />
      </Box>
    </Box>
  )
}
