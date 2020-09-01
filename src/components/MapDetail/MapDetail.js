import React from 'react'
import {
  Box,
  Button,
  CheckBox,
  Heading,
  Text
} from 'grommet'
import styled from 'styled-components'
import { Close } from 'grommet-icons'
import { func, number, shape } from 'prop-types'
import AssociatedSubjects from './components/AssociatedSubjects'
import Charts from './components/Charts'
import Timeline from './components/Timeline'
import { Map, TileLayer } from 'react-leaflet'

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
  letter-spacing: 1.23px;
  text-transform: uppercase;
`

export default function MapDetail({ coordinates, onClose = () => {} }) {
  return (
    <Box
      background='sand'
      border={{ color: 'kelp' }}
      gap='medium'
      overflow='auto'
      pad={{ horizontal: 'large', vertical: 'xsmall' }}
      width="60rem"
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
          onClick={onClose}
          plain
          reverse
        />
      </Box>

      <Box direction='row' gap='medium'>
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
              <Uppercase color='kelp'>51&#176;42'S 57&#176;51'W</Uppercase>
              <Uppercase color='kelp'>3492 SQ MI / 9044 SQ KM</Uppercase>
            </Box>
            <CheckBox label={<Uppercase color='kelp'>Subject Grid</Uppercase>} />
          </Box>
          <Box
            align='center'
            background='gray'
            border={{ color: 'kelp' }}
            flex
            justify='center'
            style={{ position: 'relative' }}
          >
            <Map 
              bounds={[coordinates.southWest, coordinates.northEast]}
              style={{ width: coordinates.width, height: coordinates.height }}
              zoomSnap={0}
            >
              <TileLayer
                attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </Map>
          </Box>
          <Timeline />
        </Box>

        <Box basis='45%' gap='xsmall'>
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

MapDetail.defaultProps = {
  coordinates: {
    southWest: 0,
    northEast: 0,
    height: 0,
    width: 0
  },
  onClose: () => {}
}

MapDetail.propTypes = {
  coordinates: shape({
    southWest: number,
    northEast: number,
    height: number,
    width: number
  }),
  onClose: func
}