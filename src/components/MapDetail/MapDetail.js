/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Box, Button, CheckBox, Heading, Text } from 'grommet'
import styled from 'styled-components'
import { Close } from 'grommet-icons'
import { getArea, getLocationDetails } from 'helpers/getLocationDetails'
import { arrayOf, func, number, shape, string } from 'prop-types'
import { Map, Marker, TileLayer } from 'react-leaflet'
import STATUS from 'helpers/asyncStatus'
import Loading from './components/Loading'
import AssociatedSubjects from './components/AssociatedSubjects'
import Charts from './components/Charts'
import Timeline from './components/Timeline'
import MetadataModal from '../../components/Modals/Metadata'
import SubjectsModal from '../../components/Modals/Subjects'

const StyledHeading = styled(Heading)`
  font-family: Neuton;
`

const StyledMap = styled(Map)`
  .leaflet-control-zoom {
    display: none;
  }
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

export default function MapDetail({
  asyncStatus,
  coordinates,
  onClose = () => {},
  subjects,
}) {
  const mapRef = React.useRef(null)
  const [centerLat, setCenterLat] = React.useState(null)
  const [centerLng, setCenterLng] = React.useState(null)
  const [area, setArea] = React.useState(null)
  const [showSubjects, setShowSubjects] = React.useState(false)
  const [activeSubject, setActiveSubject] = React.useState(null)
  const [showSubjectsModal, setShowSubjectsModal] = React.useState(false)
  const [year, setYear] = React.useState(2000)
  const [filteredSubjects, setFilteredSubjects] = React.useState([])

  // adjust x-axis range for both Charts and Timeline
  const yearsArray = (start, end) => {
    let newArray = []
    for (let year = start; year <= end; year++) {
      newArray.push(year)
    }
    return newArray
  }
  const years = yearsArray(1995, 2018)

  React.useEffect(() => {
    const leaflet = mapRef?.current?.leafletElement
    const center = leaflet?.getCenter()
    if (center) {
      setArea(getArea(coordinates))
      setCenterLat(getLocationDetails(center.lat, 'lat'))
      setCenterLng(getLocationDetails(center.lng, 'lng'))
    }
    filterByYear()
  }, [coordinates, mapRef, asyncStatus])

  React.useEffect(() => {
    filterByYear()
  }, [year])

  const filterByYear = () => {
    const newSubjects = subjects.reduce((acc, current) => {
      if (parseInt(current.date.substring(0, 4)) === year) {
        acc.push(current)
      }
      return acc
    }, [])
    setFilteredSubjects(newSubjects)
  }

  const Content = () => {
    return (
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
          <Box basis='60%' gap='xsmall'>
            <HeadingTwo color='kelp' level='2' margin='none'>
              Falkland Islands
            </HeadingTwo>
            <Box align='center' direction='row' justify='between'>
              <Box direction='row' gap='xsmall'>
                <Uppercase color='kelp' size='0.75rem'>
                  {centerLat?.degrees}&#176;{centerLat?.minutes}'
                  {centerLat?.direction} {centerLng?.degrees}&#176;
                  {centerLng?.minutes}'{centerLng?.direction}
                </Uppercase>
                <Uppercase color='kelp' size='0.75rem'>
                  {area?.miles} SQ MI / {area?.kms} SQ KM
                </Uppercase>
              </Box>
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
              <StyledMap
                bounds={[coordinates.southWest, coordinates.northEast]}
                doubleClickZoom={false}
                dragging={false}
                ref={mapRef}
                scrollWheelZoom={false}
                style={{ width: coordinates.width, height: coordinates.height }}
                zoomSnap={0}
              >
                <TileLayer
                  attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                {showSubjects &&
                  filteredSubjects.map((subject, i) => (
                    <Marker
                      key={`SUBJECT_MARKER_${subject.id}`}
                      onClick={() => setActiveSubject(subject)}
                      position={[subject.latitude, subject.longitude]}
                    />
                  ))}
              </StyledMap>
            </Box>
            <Timeline year={year} years={years} setYear={setYear} />
          </Box>

          <Box basis='40%' gap='xsmall'>
            <Heading level='6' color='kelp'>Additional Data</Heading>
            <Charts subjects={subjects} year={year} years={years} />
            <AssociatedSubjects
              setActiveSubject={setActiveSubject}
              setShowSubjectsModal={setShowSubjectsModal}
              subjects={filteredSubjects}
            />
          </Box>
        </Box>

        {activeSubject && (
          <CustomLayer>
            <MetadataModal onClose={setActiveSubject} subject={activeSubject} />
          </CustomLayer>
        )}

        {showSubjectsModal && (
          <CustomLayer>
            <SubjectsModal
              onClose={setShowSubjectsModal}
              onSelectSubject={setActiveSubject}
              subjects={subjects}
            />
          </CustomLayer>
        )}
      </Box>
    )
  }

  return (
    <Box
      background='sand'
      border={{ color: 'kelp' }}
      gap='medium'
      overflow='auto'
      pad={{ horizontal: 'large', vertical: 'small' }}
      width='60rem'
    >
      {asyncStatus === STATUS.LOADING ? <Loading /> : <Content />}
    </Box>
  )
}

MapDetail.defaultProps = {
  coordinates: {
    northEast: {
      lat: -51.4,
      lng: -59.5,
    },
    southWest: {
      lat: -52,
      lng: -60.7,
    },
    height: '100%',
    width: '100%',
  },
}

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
  data: arrayOf(
    shape({
      subjectMediaLocation: string,
    })
  ),
  onClose: func,
  setActiveSubject: func,
  setShowSubjectsModal: func,
}
