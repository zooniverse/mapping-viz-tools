import React from 'react'
import {
  Box,
  Button,
  CheckBox,
  Image,
  Text
} from 'grommet'
import Logo from 'images/logo.png'
import RectangleIcon from 'images/rectangle_icon.svg'
import Map from 'images/map.png'
import styled from 'styled-components'
import LocationDrop from '../LocationDrop'

const Uppercase = styled(Text)`
  text-transform: uppercase;
`

const StyledButton = styled(Button)`
  background: white;
  box-shadow: 0px 2.5px 5px gray;
  padding: 0.5em;
  width: 10rem;
`

const StyledText = styled(Text)`
  font-family: 'Neuton-Light';
`

export default function SidePanel() {
  return (
    <Box
      as='aside'
      background='sand'
      border={{ color: 'kelp', side: 'right', size: 'xsmall' }}
      height={{ min: '100%' }}
      pad='small'
      width='15rem'
    >
      <Box gap='xsmall' margin={{ bottom: 'small' }} width='10rem'>
        <Image
          alt='Floating Forests logo'
          fit='contain'
          margin={{ right: 'auto' }}
          src={Logo}
        />
        <StyledText color='kelp' size='xlarge'>
          Falkland Islands
        </StyledText>
        <LocationDrop />
      </Box>

      <Box
        border={{ color: 'kelp', side: 'horizontal', size: 'xsmall' }}
        gap='xsmall'
        pad={{ vertical: 'small' }}
      >
        <Text color='kelp'>Getting started</Text>
        <Text size='xsmall'>
          Use the rectangle tool to draw a box around the
          area of the map you'd like to learn more about
        </Text>
        <StyledButton
          color='kelp'
          gap='xsmall'
          hoverIndicator={{ color: 'indiglo' }}
          icon={<Image alt='Rectangle tool icon' src={RectangleIcon} />}
          label={<Uppercase size='xsmall'>Rectangle Tool</Uppercase>}
          plain
        />
      </Box>

      <Box gap='xsmall' margin={{ vertical: 'small' }}>
        <Text color='kelp'>Dig deeper</Text>
        <Text size='xsmall'>
          Toggle additional data layers to see how environmental factors affect
          kelp forests.
        </Text>
        <CheckBox label={<Uppercase color='kelp' size='xsmall'>Wind Speed</Uppercase>} />
        <CheckBox label={<Uppercase color='kelp' size='xsmall'>Temperature Data</Uppercase>} />
        <CheckBox label={<Uppercase color='kelp' size='xsmall'>Wind Data</Uppercase>} />
        <CheckBox label={<Uppercase color='kelp' size='xsmall'>Satellite Imagery</Uppercase>} />
      </Box>

      <Box border={{ color: 'kelp', side: 'top' }} gap='xsmall'>
        <Text color='kelp' margin={{ top: 'small' }}>World map</Text>
        <Image alt='Current location on a world map' src={Map} />
      </Box>
    </Box>
  )
}
