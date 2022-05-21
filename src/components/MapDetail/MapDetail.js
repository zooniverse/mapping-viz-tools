/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Box, Button, CheckBox, Heading, Text } from 'grommet'
import styled from 'styled-components'
import { Close } from 'grommet-icons'
import { arrayOf, func, number, shape, string } from 'prop-types'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import STATUS from 'helpers/asyncStatus'

import Loading from './components/Loading'
import AssociatedSubjects from './components/AssociatedSubjects'
import Charts from './components/Charts'
import Timeline from './components/Timeline'
import MetadataModal from '../../components/Modals/Metadata'
import SubjectsModal from '../../components/Modals/Subjects'
import LocationDetails from './components/LocationDetails'

const StyledHeading = styled(Heading)`
  font-family: Neuton;
`

const HeadingTwo = styled(StyledHeading)`
  font-size: 2.5rem;
  font-weight: 300;
`

export const Uppercase = styled(Text)`
  letter-spacing: 1.23px;
  text-transform: uppercase;
`

// rendering multiple Grommet Layer components causes infinite loop of body overflow styling
const CustomLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1001;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

const MapDetail = ({
  asyncStatus,
  coordinates,
  onClose = () => {},
  subjects,
  subjectsErrorUI
}) => {
  const [mapCenterLat, setMapCenterLat] = React.useState(null)
  const [mapCenterLng, setMapCenterLng] = React.useState(null)
  const [showSubjects, setShowSubjects] = React.useState(false)
  const [activeSubject, setActiveSubject] = React.useState(null)
  const [showSubjectsModal, setShowSubjectsModal] = React.useState(false)
  const [year, setYear] = React.useState(2005)
  const [filteredSubjects, setFilteredSubjects] = React.useState([])

  const kelpLayerRef = React.useRef()

  const miniMap = React.useMemo(
    () => (
      <MapContainer
        bounds={[coordinates.southWest, coordinates.northEast]}
        doubleClickZoom={false}
        dragging={false}
        scrollWheelZoom={false}
        style={{ width: coordinates.width, height: coordinates.height }}
        zoomControl={false}
        whenCreated={mapInstance => {
          setMapCenterLat(mapInstance.getCenter().lat)
          setMapCenterLng(mapInstance.getCenter().lng)
        }}
      >
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <TileLayer
          ref={kelpLayerRef}
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={`https://static.zooniverse.org/mapping-viz-tiles/falklands/${year}/{z}/{x}/{y}.png`}
        />
        {showSubjects &&
          filteredSubjects.map((subject, i) => (
            <Marker
              eventHandlers={{ click: () => setActiveSubject(subject) }}
              key={`SUBJECT_MARKER_${subject.id}`}
              position={[subject.latitude, subject.longitude]}
            />
          ))}
      </MapContainer>
    ),
    [coordinates, showSubjects, filteredSubjects]
  )

  React.useEffect(() => {
    if (kelpLayerRef?.current) {
      kelpLayerRef.current.setUrl(
        `https://static.zooniverse.org/mapping-viz-tiles/falklands/${year}/{z}/{x}/{y}.png`
      )
    }
  }, [year])

  // adjust x-axis range for both Charts and Timeline
  const yearsArray = (start, end) => {
    let newArray = []
    for (let year = start; year <= end; year++) {
      newArray.push(year)
    }
    return newArray
  }
  const years = yearsArray(1995, 2018)

  const filterByYear = () => {
    const newSubjects = subjects.reduce((acc, current) => {
      if (parseInt(current.date.substring(0, 4)) === year) {
        acc.push(current)
      }
      return acc
    }, [])
    setFilteredSubjects(newSubjects)
  }

  React.useEffect(function onMount() {
      filterByYear()
    }, [asyncStatus, year])

  return (
    <Box
      background='sand'
      border={{ color: 'kelp' }}
      gap='medium'
      overflow='auto'
      pad={{ horizontal: 'large', vertical: 'small' }}
      width='60rem'
    >
      {asyncStatus === STATUS.LOADING ? (
        <Loading />
      ) : (
        <Box>
          <Box
            border={{ color: 'kelp', side: 'bottom' }}
            direction='row'
            justify='between'
            alignContent='center'
            pad={{ bottom: 'small' }}
            margin={{ bottom: 'small' }}
          >
            <StyledHeading color='kelp' level='4' margin='0'>
              Map Detail
            </StyledHeading>
            <Button
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
            <Box basis='63%' gap='xsmall'>
              <HeadingTwo color='kelp' level='2' margin='none'>
                Falkland Islands
              </HeadingTwo>
              <Box align='center' direction='row' justify='between'>
                <LocationDetails
                  coordinates={coordinates}
                  mapCenterLat={mapCenterLat}
                  mapCenterLng={mapCenterLng}
                />
                <CheckBox
                  checked={showSubjects}
                  label={
                    <Uppercase color='kelp' size='0.75rem'>
                      Subjects
                    </Uppercase>
                  }
                  onChange={() => setShowSubjects(!showSubjects)}
                />
              </Box>
              <Box
                align='center'
                background='gray'
                border={{ color: 'kelp' }}
                flex
                justify='center'
                style={{ position: 'relative' }}
              >
                {miniMap}
              </Box>
              <Timeline year={year} years={years} setYear={setYear} />
            </Box>

            <Box basis='37%' gap='xsmall'>
              <Heading level='6' color='kelp'>
                Additional Data
              </Heading>
              <Charts subjects={subjects} year={year} years={years} />
              <AssociatedSubjects
                setActiveSubject={setActiveSubject}
                setShowSubjectsModal={setShowSubjectsModal}
                subjects={filteredSubjects}
                subjectsErrorUI={subjectsErrorUI}
              />
            </Box>
          </Box>

          {activeSubject && (
            <CustomLayer>
              <MetadataModal
                onClose={setActiveSubject}
                subject={activeSubject}
              />
            </CustomLayer>
          )}

          {showSubjectsModal && (
            <CustomLayer>
              <SubjectsModal
                onClose={setShowSubjectsModal}
                onSelectSubject={setActiveSubject}
                subjects={filteredSubjects}
              />
            </CustomLayer>
          )}
        </Box>
      )}
    </Box>
  )
}

export default MapDetail

MapDetail.propTypes = {
  coordinates: shape({
    northEast: shape({
      lat: number,
      lng: number,
    }),
    southWest: shape({
      lat: number,
      lng: number,
    }),
    height: string,
    width: string,
  }),
  onClose: func,
  subjects: arrayOf(
    shape({
      id: number,
      latitude: string,
      longitude: string,
    })
  ),
}
