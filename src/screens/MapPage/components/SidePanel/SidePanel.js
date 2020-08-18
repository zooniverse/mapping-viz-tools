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
import styled, { css } from 'styled-components'
import { bool, func } from 'prop-types'
import LocationDrop from '../LocationDrop'

const Uppercase = styled(Text)`
  text-transform: uppercase;
`

export const StyledButton = styled(Button)`
  ${props => props.isDrawing ? css`background: #EEFEC0;` : css`background: white;`}
  box-shadow: 0px 2.5px 5px gray;
  padding: 0.5em;
  width: 10rem;
`

const StyledText = styled(Text)`
  font-family: 'Neuton-Light';
`

export default function SidePanel({ changeDrawing = () => {}, isDrawing = false }) {
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
        <Image fit='contain' margin={{ right: 'auto' }} src={Logo} />
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
          icon={<Image src={RectangleIcon} />}
          isDrawing={isDrawing}
          label={<Uppercase size='xsmall'>Rectangle Tool</Uppercase>}
          onClick={() => changeDrawing(!isDrawing)}
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
        <Image src={Map} />
      </Box>
    </Box>
  )
}

SidePanel.propTypes = {
  changeDrawing: func,
  isDrawing: bool
}
