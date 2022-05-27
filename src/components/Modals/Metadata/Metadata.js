import React from 'react'
import { Anchor, Box, DataTable, Image, Text } from 'grommet'
import { Close } from 'grommet-icons'
import styled from 'styled-components'
import { PlainButton } from '@zooniverse/react-components'
import { func, shape, string } from 'prop-types'

const StyledAnchor = styled(Anchor)`
  word-break: break-all;
`

const StyledDataTable = styled(DataTable)`
  width: 100%;

  thead {
    display: none;
  }
  th {
    text-align: right;
  }
`

const Uppercase = styled(Text)`
  text-transform: uppercase;
`

const columns = [
  {
    property: 'key',
    render: datum => (
      <Uppercase color='kelp' weight='bold'>
        {datum.key}
      </Uppercase>
    ),
  },
  {
    property: 'value',
    render: datum =>
      datum.key === 'map_link' ? (
        <StyledAnchor
          href={datum.value}
          color='kelp'
          size='small'
          target='_blank'
        >
          Google Maps
        </StyledAnchor>
      ) : (
        <Text>{datum.value}</Text>
      ),
  },
]

export default function Metadata({
  onClose = () => {},
  subject = {
    metadata: {},
  },
}) {
  const privateChars = ['#', '//']
  const filteredData = Object.keys(subject.metadata).reduce((acc, key) => {
    if (!privateChars.includes(key[0])) {
      const displayKey = str => (str[0] === '!' ? str.substr(1) : str)
      acc.push({
        key: displayKey(key),
        value: subject.metadata[key],
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
      background='sand'
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
          src={`//${subject.media_location}`}
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
    media_location: string,
    metadata: shape(),
  }),
}
