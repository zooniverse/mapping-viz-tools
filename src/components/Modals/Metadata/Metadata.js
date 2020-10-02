import React from 'react'
import { Box, DataTable, Image, Text } from 'grommet'
import { Close } from 'grommet-icons'
import styled from 'styled-components'
import { PlainButton } from '@zooniverse/react-components'
import { func, shape, string } from 'prop-types'
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

export default function Metadata({
  onClose = () => {},
  subject = {
    subjectMetadata: {}
  }
}) {
  const privateChars = ['#', '//', '!']
  const filteredData = Object.keys(subject.subjectMetadata).reduce((acc, key) => {
    if (!privateChars.includes(key[0])) {
      acc.push({
        key,
        value: subject.subjectMetadata[key]
      })
    }
    return acc
  }, [])

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
          onClick={() => onClose()}
          text='Close'
          reverse
        />
      </Box>
      <Box
        background='sand'
        border={{ color: 'kelp' }}
        height={{ max: '16rem' }}
      >
        <Image
          alt='Satellite Map of Falklands'
          fit='contain'
          src={`//${subject.subjectMediaLocation}`}
        />
      </Box>
      <Box overflow={{ vertical: 'auto' }}>
        <StyledDataTable
          columns={columns}
          data={filteredData}
          pad={{ horizontal: 'xxsmall' }}
        />
      </Box>
    </Box>
  )
}

Metadata.propTypes = {
  onClose: func,
  subject: shape({
    subjectMediaLocation: string,
    subjectMetadata: shape()
  })
}
