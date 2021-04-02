import React from 'react'
import { Box, Layer } from 'grommet'
import BaseMap from 'components/BaseMap'
import MapDetail from 'components/MapDetail'
import styled from 'styled-components'
import STATUS from 'helpers/asyncStatus'
import { getSubjects } from 'helpers/client'
import DrawingOverlay from 'components/DrawingOverlay'
import SidePanel from './components/SidePanel'

const Relative = styled.div`
  position: relative;
  width: 100%;
`

const defaultCoords = {
  northEast: {
    lat: -51.34401520040366,
    lng: -57.813190743327155
  },
  southWest: {
    lat: -51.45852322420228,
    lng: -57.941539138555534
  },
  width: "100%",
  height: "100%"
}

export default function MapPage() {
  const [canDraw, changeDrawing] = React.useState(false)
  const [miniMapCoords, setCoords] = React.useState(defaultCoords)
  const [subjects, setSubjects] = React.useState([])
  const [asyncStatus, setAsyncStatus] = React.useState(STATUS.LOADING)
  const mapRef = React.useRef(null)

  React.useEffect(() => {
    async function fetchSubjects() {
      if (miniMapCoords) {
        const subjectsInCoords = await getSubjects(miniMapCoords)
        setSubjects(subjectsInCoords)
        setAsyncStatus(STATUS.READY)
      } else {
        setAsyncStatus(STATUS.LOADING)
      }
    }
    fetchSubjects()
  }, [miniMapCoords])

  return (
    <Box direction='row' height={{ min: '100%' }}>
      <SidePanel changeDrawing={changeDrawing} isDrawing={canDraw} />

      <Relative>
        <BaseMap ref={mapRef} />
        <DrawingOverlay
          canDraw={canDraw}
          changeDrawing={changeDrawing}
          mapRef={mapRef}
          setCoords={setCoords}
        />
      </Relative>

      {miniMapCoords && (
        <Layer>
          <MapDetail
            asyncStatus={asyncStatus}
            coordinates={miniMapCoords}
            onClose={() => setCoords(null)}
            subjects={subjects}
          />
        </Layer>
      )}
    </Box>
  )
}
