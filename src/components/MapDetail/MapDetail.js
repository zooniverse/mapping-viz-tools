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
import { func, number, shape, string } from 'prop-types'
import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import AssociatedSubjects from './components/AssociatedSubjects'
import Charts from './components/Charts'
import Timeline from './components/Timeline'
import data from './mockData'

const StyledHeading = styled(Heading)`
  font-family: Neuton;
`

const StyledMap = styled(Map)`
  .leaflet-control-zoom {
    display: none;
  }
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
        <Box basis='60%' gap='xsmall'>
          <HeadingTwo
            color='kelp'
            level='2'
            margin='none'
          >
            Falkland Islands
          </HeadingTwo>
          <Box align='center' direction='row' justify='between'>
            <Box direction='row' gap='xsmall'>
              <Uppercase color='kelp' size='0.75rem'>51&#176;42'S 57&#176;51'W</Uppercase>
              <Uppercase color='kelp' size='0.75rem'>3492 SQ MI / 9044 SQ KM</Uppercase>
            </Box>
            <CheckBox label={<Uppercase color='kelp' size='0.75rem'>Subject Grid</Uppercase>} />
          </Box>
          <Box
            align='center'
            background='gray'
            border={{ color: 'kelp' }}
            flex
            justify='center'
            style={{ position: 'relative' }}
          >
            <StyledMap 
              bounds={[coordinates.southWest, coordinates.northEast]}
              doubleClickZoom={false}
              dragging={false}
              scrollWheelZoom={false}
              style={{ width: coordinates.width, height: coordinates.height }}
              zoomSnap={0}
            >
              <TileLayer
                attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </StyledMap>
          </Box>
          <Timeline />
        </Box>

        <Box basis='40%' gap='xsmall'>
          <Text color='kelp'>Additional data</Text>
          <StyledText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          </StyledText>
          <Charts />
          <AssociatedSubjects subjects={data} />
        </Box>
      </Box>
    </Box>
  )
}

MapDetail.defaultProps = {
  coordinates: {
    northEast: {
      lat: -51.4,
      lng: -59.5
    },
    southWest: {
      lat: -52,
      lng: -60.7
    },
    height: '100%',
    width: '100%'
  },
  onClose: () => {}
}

MapDetail.propTypes = {
  coordinates: shape({
    northEast: shape({
      lat: number,
      lng: number
    }),
    southWest: shape({
      lat: number,
      lng: number
    }),
    height: string,
    width: string
  }),
  onClose: func
}