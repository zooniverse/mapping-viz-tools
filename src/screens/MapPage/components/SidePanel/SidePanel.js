import React from 'react'
import {
  Box,
  Button,
  CheckBox,
  Image,
  Menu,
  Text
} from 'grommet'
import Logo from 'images/logo.png'
import RectangleIcon from 'images/rectangle_icon.svg'
import Map from 'images/map.png'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  background: #EEFEC0;
  box-shadow: 0px 2.5px 5px gray;
  padding: 0.5em;
  width: 10rem;
`

const StyledMenu = styled(Menu)`
  div {
    padding: 0;
  }
`

const StyledText = styled(Text)`
  font-family: 'Neuton-Light';
`

export default function SidePanel() {
  return (
    <Box
      background='sand'
      border={{ color: 'kelp', side: 'right', size: 'xsmall' }}
      pad='small'
      width='15rem'
    >
      <Box margin={{ bottom: 'xsmall' }} width='10rem'>
        <Image fit='contain' margin={{ right: 'auto' }} src={Logo} />
        <StyledText color='kelp' size='xlarge'>
          Falkland Islands
        </StyledText>
        <StyledMenu color='kelp' label='Choose Location' />
      </Box>

      <Box
        border={{ color: 'kelp', side: 'horizontal', size: 'xsmall' }}
        gap='0.25rem'
        pad={{ vertical: 'small' }}
      >
        <Text color='kelp'>Getting started</Text>
        <Text size='xsmall'>
          Use the rectangle tool to draw a box around the
          area of the map you'd like to learn more about
        </Text>
        <StyledButton
          color='indiglo'
          gap='xsmall'
          icon={<Image src={RectangleIcon} />}
          label={<Text size='xsmall'>RECTANGLE TOOL</Text>}
        />
      </Box>

      <Box gap='0.25rem' margin={{ vertical: 'small' }}>
        <Text color='kelp'>Dig deeper</Text>
        <Text size='xsmall'>
          Toggle additional data layers to see how environmental factors affect
          kelp forests.
        </Text>
        <CheckBox label={<Text color='kelp' size='xsmall'>WIND SPEED</Text>} />
        <CheckBox label={<Text color='kelp' size='xsmall'>TEMPERATURE DATA</Text>} />
        <CheckBox label={<Text color='kelp' size='xsmall'>WIND DATA</Text>} />
        <CheckBox label={<Text color='kelp' size='xsmall'>SATELLITE IMAGERY</Text>} />
      </Box>

      <Box border={{ color: 'kelp', side: 'top' }}>
        <Text color='kelp' margin={{ top: 'xsmall' }}>World map</Text>
        <Image src={Map} />
      </Box>
    </Box>
  )
}
