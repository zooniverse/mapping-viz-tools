import React from 'react'
import { Box, Text } from 'grommet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const StyledText = styled(Text)`
  font-family: Neuton;
`

export default function Loading() {
  return (
    <Box margin='auto'>
      <Box margin={{ horizontal: 'auto', vertical: 'small' }}>
        <FontAwesomeIcon
          color='#113E3B'
          icon={faSpinner}
          size='2x'
          spin
        />
      </Box>
      <StyledText
        color='kelp'
        size='large'
      >
        Map detail loading...
      </StyledText>
    </Box>
  )
}