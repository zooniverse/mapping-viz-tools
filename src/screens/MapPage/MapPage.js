import React from 'react'
import { Box, Layer } from 'grommet'
import MapDetail from 'components/MapDetail'
import styled from 'styled-components'
import STATUS from 'helpers/asyncStatus'
import { getSubjects } from 'helpers/client'
import DrawingOverlay from 'components/DrawingOverlay'
import SidePanel from './components/SidePanel'
import { MapContainer, TileLayer } from 'react-leaflet'

export const MiniMapContext = React.createContext({
  map: null,
  setMap: () => {}
})

const Relative = styled.div`
  position: relative;
  width: 100%;
`

// use to keep MapDetail open while editing
const defaultCoords = {
  northEast: {
    lat: -51.34401520040366,
    lng: -57.813190743327155,
  },
  southWest: {
    lat: -51.45852322420228,
    lng: -57.941539138555534,
  },
  width: '100%',
  height: '100%',
}

export default function MapPage() {
  const [canDraw, changeDrawing] = React.useState(false)
  const [miniMapCoords, setCoords] = React.useState(defaultCoords)
  const [subjects, setSubjects] = React.useState([])
  const [asyncStatus, setAsyncStatus] = React.useState(STATUS.LOADING)
  const [miniMap, setMiniMap] = React.useState(null)


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
        <MapContainer
          center={[-51.75, -59.5]}
          doubleClickZoom={false}
          dragging={false}
          scrollWheelZoom={false}
          style={{ width: '100%', height: '100%', position: 'absolute' }}
          zoom={8}
        >
          <TileLayer
            attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <DrawingOverlay
            canDraw={canDraw}
            changeDrawing={changeDrawing}
            setCoords={setCoords}
          />
        </MapContainer>
      </Relative>

      {miniMapCoords && (
        <Layer>
          <MiniMapContext.Provider value={{ miniMap, setMiniMap }}>
            <MapDetail
              asyncStatus={asyncStatus}
              coordinates={miniMapCoords}
              onClose={() => setCoords(null)}
              subjects={subjects}
            />
          </MiniMapContext.Provider>
        </Layer>
      )}
    </Box>
  )
}
