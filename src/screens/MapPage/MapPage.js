import React from 'react'
import { Box } from 'grommet'
import SidePanel from './components/SidePanel'
import BaseMap from 'components/BaseMap'
import styled from 'styled-components'
import DrawingOverlay from 'components/DrawingOverlay'

const Relative = styled.div`
    position: relative;
    width: 100%;
`

export default function MapPage() {
  const [canDraw, changeDrawing] = React.useState(false)
  const [popupCoords, setCoords] = React.useState(null)
  const mapRef = React.useRef(null)

  return (
    <Box direction='row' height={{ min: '100%' }}>
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
        />
      </Relative>
    </Box>
  )
}
