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
import AssociatedSubjects from './components/AssociatedSubjects'
import Charts from './components/Charts'
import Timeline from './components/Timeline'

const StyledHeading = styled(Heading)`
  font-family: Neuton;
`

const StyledText = styled(Text)`
  font-family: Neuton;
`

const HeadingTwo = styled(StyledHeading)`
  font-size: 2.5rem;
  font-weight: 300;
`

const Uppercase = styled(Text)`
  text-transform: uppercase;
`

export default function MapDetail() {
  return (
    <Box
      background='sand'
      border={{ color: 'kelp' }}
      gap='medium'
      pad={{ horizontal: 'medium', vertical: 'small' }}
    >
      <Box
        border={{ color: 'kelp', side: 'bottom' }}
        direction='row'
        justify='between'
        pad={{ vertical: 'small' }}
      >
        <StyledHeading
          color='kelp'
          level='4'
          margin='none'
        >
          Map Detail
        </StyledHeading>
        <Button
          alignSelf='end'
          color='kelp'
          gap='xsmall'
          icon={<Close color='black' size='small' />}
          label={<Uppercase size='xsmall'>Close</Uppercase>}
          plain
          reverse
        />
      </Box>

      <Box direction='row' gap='medium'>
        <Box basis='2/3' gap='xsmall'>
          <Box gap='xsmall'>
            <HeadingTwo
              color='kelp'
              level='2'
              margin='none'
            >
              Falkland Islands
            </HeadingTwo>
            <Box align='center' direction='row' justify='between'>
              <Box direction='row' gap='small'>
                <Text color='kelp'>51&#176;42'S 57&#176;51'W</Text>
                <Text color='kelp'>3492 SQ MI / 9044 SQ KM</Text>
              </Box>
              <CheckBox label={<Uppercase color='kelp'>Subject Grid</Uppercase>} />
            </Box>
            <Box border={{ color: 'kelp' }} elevation='small'>
              <Image src={FalklandsMap} />
            </Box>
          </Box>
          <Timeline />
        </Box>

        <Box basis='1/3' gap='xsmall'>
          <Text color='kelp'>Additional data</Text>
          <StyledText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          </StyledText>
          <Charts />
          <AssociatedSubjects />
        </Box>
      </Box>
    </Box>
  )
}
