import React from 'react'
import {
  Box,
  Button,
  CheckBox,
  Heading,
  Image,
  Text
} from 'grommet'
import styled from 'styled-components'
import { Close } from 'grommet-icons'
import FalklandsMap from 'images/falk_map.png'
import Charts from './components/Charts'

const StyledText = styled(Text)`
  font-family: Neuton;
`

export default function MapDetail() {
  return (
    <Box
      background='sand'
      border='kelp'
      gap='medium'
      pad={{ horizontal: 'medium', vertical: 'small' }}
    >
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

      <Box direction='row' gap='medium'>
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
            <Box border={{ color: 'kelp' }} elevation='small'>
              <Image src={FalklandsMap} />
            </Box>
          </Box>
        </Box>

        <Box basis='1/3' gap='small'>
          <Text color='kelp'>Additional data</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          </Text>
          <Charts />
        </Box>
      </Box>
    </Box>
  )
}
