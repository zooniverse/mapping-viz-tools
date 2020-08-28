import React from 'react'
import { Box, Text } from 'grommet'
import styled from 'styled-components'

const StyledSVG = styled.svg`
  display: block;
`

export default function Timeline() {
  return (
    <Box direction='column'>
      <Text color='kelp'>Time</Text>
      <StyledSVG
        height='100%'
        viewBox='0 0 200 8'
        width='100%'
      >
        <g>
          <line
            x1='0' x2='200'
            y1='2' y2='2'
            stroke='#b1bdba'
            strokeWidth='2'
          />
          <circle cx='0' cy='2' fill='#113E3B' r='1' />
          <circle cx='50' cy='2' fill='#113E3B' r='1' />
          <circle cx='100' cy='2' fill='#113E3B' r='1' />
          <circle cx='150' cy='2' fill='#113E3B' r='1' />
          <circle cx='200' cy='2' fill='#113E3B' r='1' />

          <line
            x1='150' x2='150'
            y1='0' y2='4'
            stroke='black'
            strokeWidth='1'
          />

          <text fill='#113E3B' fontSize='4' y='8'>1980</text>
          <text fill='#113E3B' fontSize='4' textAnchor='middle' x='150' y='8'>2010</text>
          <text fill='#113E3B' fontSize='4' textAnchor='end' x='200' y='8'>2020</text>
        </g>
      </StyledSVG>
    </Box>
  )
}
