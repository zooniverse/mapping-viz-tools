import React from 'react'
import {
  Anchor,
  Box,
  Button,
  CheckBox,
  Image,
  Text,
  RadioButtonGroup,
} from 'grommet'
import Logo from 'images/logo.png'
import RectangleIcon from 'images/rectangle_icon.svg'
import Map from 'images/sat-world-map.jpg'
import styled, { css } from 'styled-components'
import { bool, func, number } from 'prop-types'
// import LocationDrop from '../LocationDrop'

const Uppercase = styled(Text)`
  text-transform: uppercase;
`

export const StyledButton = styled(Button)`
  ${props =>
    props.isDrawing
      ? css`
          background: #EEFEC0;
        `
      : css`
          background: white;
        `}
  box-shadow: 0px 2.5px 5px gray;
  padding: 0.5em;
  width: 10rem;
`

const StyledText = styled(Text)`
  font-family: 'Neuton-Light';
`

const radioOptions = [
  {
    value: 0,
    label: (
      <Uppercase color='kelp' size='xsmall'>
        Open Street Maps
      </Uppercase>
    ),
  },
  {
    value: 1,
    label: (
      <Uppercase color='kelp' size='xsmall'>
        Satellite Imagery
      </Uppercase>
    ),
  },
  {
    value: 2,
    label: (
      <Uppercase color='kelp' size='xsmall'>
        ZooMapper Tiles
      </Uppercase>
    ),
  },
]

export default function SidePanel({
  baseLayer = 0,
  changeDrawing = () => {},
  isDrawing = false,
  setBaseLayer = () => {},
  showKelpLayers,
  toggleKelp = () => {},
}) {
  return (
    <Box
      as='aside'
      background='sand'
      border={{ color: 'kelp', side: 'right', size: 'xsmall' }}
      height={{ min: '100%' }}
      pad='small'
      width='16rem'
    >
      <Box gap='xxsmall' margin={{ bottom: 'small' }}>
        <Anchor href='/'>
          <Image
            alt='Floating Forests logo'
            fit='contain'
            margin={{ right: 'auto' }}
            src={Logo}
          />
        </Anchor>
        <StyledText color='kelp' size='xlarge'>
          Falkland Islands
        </StyledText>
        {/* <LocationDrop /> */}
      </Box>

      <Box
        border={{ color: 'kelp', side: 'horizontal', size: 'xsmall' }}
        gap='xsmall'
        pad={{ vertical: 'small' }}
      >
        <Text color='kelp'>Getting started</Text>
        <Text size='xsmall'>
          Use the rectangle tool to draw a box around the area of the map you'd
          like to learn more about
        </Text>
        <StyledButton
          aria-checked={isDrawing}
          color='kelp'
          gap='xsmall'
          hoverIndicator={{ color: 'indiglo' }}
          icon={<Image alt='Rectangle tool icon' src={RectangleIcon} />}
          isDrawing={isDrawing}
          label={<Uppercase size='xsmall'>Rectangle Tool</Uppercase>}
          onClick={() => changeDrawing(!isDrawing)}
          plain
          role='checkbox'
        />
      </Box>

      <Box gap='xsmall' margin={{ vertical: 'small' }}>
        <Text color='kelp'>Dig deeper</Text>
        {/* <Text size='xsmall'>
          Toggle additional data layers.
        </Text> */}
        <CheckBox
          checked={showKelpLayers}
          onChange={toggleKelp}
          label={
            <Uppercase color='kelp' size='xsmall' margin={{ left: '20px' }}>
              Kelp Layer
            </Uppercase>
          }
        />
        <Text color='kelp'>Base Layer</Text>
        <RadioButtonGroup
          gap='xsmall'
          name='Base Layer Toggle'
          onChange={e => setBaseLayer(parseInt(e.target.value))}
          options={radioOptions}
          value={baseLayer}
        />
      </Box>

      <Box border={{ color: 'kelp', side: 'top' }} gap='xsmall'>
        <Text color='kelp' margin={{ top: 'small' }}>
          World map
        </Text>
        <Image fit='contain' alt='Current location on a world map' src={Map} />
      </Box>
    </Box>
  )
}

SidePanel.propTypes = {
  baseLayer: number,
  changeDrawing: func,
  isDrawing: bool,
  setBaseLayer: func,
  showKelpLayers: bool,
  toggleKelp: func
}
