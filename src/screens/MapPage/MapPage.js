import React from 'react'
import { Box, Layer } from 'grommet'
import SidePanel from './components/SidePanel'
import BaseMap from 'components/BaseMap'
import MapDetail from 'components/MapDetail'
import styled from 'styled-components'
import DrawingOverlay from 'components/DrawingOverlay'

const Relative = styled.div`
    position: relative;
    width: 100%;
`

export default function MapPage() {
  const [canDraw, changeDrawing] = React.useState(false)
  const [miniMapCoords, setCoords] = React.useState(null)
  const mapRef = React.useRef(null)

  return (
    <Box direction='row' height={{ min: '100%' }}>
      {miniMapCoords && (
        <Layer>
          <MapDetail
            onClose={() => setCoords(null)}
          />
        </Layer>
      )}

      <SidePanel
        changeDrawing={changeDrawing}
        isDrawing={canDraw}
      />

      <Relative>
        <BaseMap ref={mapRef} />
        <DrawingOverlay
          canDraw={canDraw}
          changeDrawing={changeDrawing}
          mapRef={mapRef}
          setCoords={setCoords}
        />
      </Relative>
    </Box>
  )
}
