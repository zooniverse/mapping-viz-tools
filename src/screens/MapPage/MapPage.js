import React from 'react'
import { Box, Layer } from 'grommet'
import SidePanel from './components/SidePanel'
import BaseMap from 'components/BaseMap'
import MapDetail from 'components/MapDetail'
import styled from 'styled-components'
import DrawingOverlay from 'components/DrawingOverlay'
import MetadataModal from '../../components/Modals/Metadata'
import SubjectsModal from '../../components/Modals/Subjects'
import mockData from '../../components/MapDetail/mockData'

const Relative = styled.div`
    position: relative;
    width: 100%;
`

export default function MapPage() {
  const [canDraw, changeDrawing] = React.useState(false)
  const [miniMapCoords, setCoords] = React.useState(null)
  const [activeSubject, setActiveSubject] = React.useState(null)
  const [showSubjectsModal, setShowSubjectsModal] = React.useState(false)
  const mapRef = React.useRef(null)

  return (
    <Box direction='row' height={{ min: '100%' }}>
      {miniMapCoords && (
        <Layer>
          <MapDetail
            coordinates={miniMapCoords}
            onClose={() => setCoords(null)}
            setActiveSubject={setActiveSubject}
            setShowSubjectsModal={setShowSubjectsModal}
          />
        </Layer>
      )}

      {activeSubject && (
        <Layer>
          <MetadataModal
            onClose={setActiveSubject}
            subject={activeSubject}
          />
        </Layer>
      )}

      {showSubjectsModal && (
        <Layer>
          <SubjectsModal
            onClose={setShowSubjectsModal}
            onSelectSubject={setActiveSubject}
            subjects={mockData}
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
