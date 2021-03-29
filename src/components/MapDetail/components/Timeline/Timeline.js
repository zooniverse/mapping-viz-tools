import React, { useState } from 'react'
import { Box, Text } from 'grommet'
import styled from 'styled-components'

const Relative = styled(Box)`
  position: relative;
`

const Circle = styled(Box)`
  border-radius: 50%;
`

const Year = styled(Text)`
  position: absolute;
  top: 14px;
  left: 50%;
  transform: translateX(-50%);
`

export default function Timeline() {
  const [year, setYear] = useState(0)

  return (
    <Box direction='column'>
      <Text color='kelp'>Time</Text>
      <Box>
        <Relative background='#b1bdba' direction='row' justify='between' margin={{ bottom: 'small' }}>
          <Relative>
            <Circle background='#113E3B' height='8px' width='8px' margin={{ vertical: '2px' }} />
            <Year color='#113E3B'>1980</Year>
          </Relative>
          <Relative>
            <Circle background='#113E3B' height='8px' width='8px' margin={{ vertical: '2px' }} />
            <Year color='#113E3B'>1990</Year>
          </Relative>
          <Relative>
            <Circle background='#113E3B' height='8px' width='8px' margin={{ vertical: '2px' }} />
            <Year color='#113E3B'>2000</Year>
          </Relative>
          <Relative>
            <Circle background='#113E3B' height='8px' width='8px' margin={{ vertical: '2px' }} />
            <Year color='#113E3B'>2010</Year>
          </Relative>
          <Relative>
            <Circle background='#113E3B' height='8px' width='8px' margin={{ vertical: '2px' }} />
            <Year color='#113E3B'>2020</Year>
          </Relative>
        </Relative>
      </Box>
    </Box>
  )
}
