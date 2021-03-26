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

export default function MapPage() {
  const [canDraw, changeDrawing] = React.useState(false)
  const [miniMapCoords, setCoords] = React.useState(null)
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
