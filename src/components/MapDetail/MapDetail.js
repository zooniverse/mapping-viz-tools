import React from 'react'
import { Box, Button, CheckBox, Heading, Text } from 'grommet'
import styled from 'styled-components'
import { Close } from 'grommet-icons'

const StyledText = styled(Text)`
  font-family: Neuton;
`

export default function MapDetail() {
  return (
    <Box background='sand' border='kelp' pad={{ horizontal: 'medium', vertical: 'small' }}>
      <Box
        border={{ color: 'kelp', side: 'bottom' }}
        direction='row'
        justify='between'
        pad={{ vertical: 'small' }}
      >
        <StyledText size='large'>Map Detail</StyledText>
        <Button
          alignSelf='end'
          color='kelp'
          gap='xsmall'
          icon={<Close color='black' size='small' />}
          label={<Text size='xsmall'>Close</Text>}
          plain
          reverse
        />
      </Box>

      <Box>
        <Box basis='2/3'>
          <Box>
            <Heading level='4'>Falkland Islands</Heading>
            <Box direction='row' justify='between'>
              <Box direction='row' gap='small'>
                <Text>51&#176;42'S 57&#176;51'W</Text>
                <Text>3492 SQ MI / 9044 SQ KM</Text>
              </Box>
              <CheckBox label='SUBJECT GRID' />
            </Box>
          </Box>
        </Box>

        <Box background='red' basis='1/3'></Box>
      </Box>
    </Box>
  )
}
