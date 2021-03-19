import React from 'react'
import { Box, Layer } from 'grommet'
import BaseMap from 'components/BaseMap'
import MapDetail from 'components/MapDetail'
import styled from 'styled-components'
import STATUS from 'helpers/asyncStatus'
import { getSubjects } from 'helpers/client'
import DrawingOverlay from 'components/DrawingOverlay'
import SidePanel from './components/SidePanel'
import MetadataModal from '../../components/Modals/Metadata'
import SubjectsModal from '../../components/Modals/Subjects'

const Relative = styled.div`
  position: relative;
  width: 100%;
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

export default function MapPage() {
  const [canDraw, changeDrawing] = React.useState(false)
  const [miniMapCoords, setCoords] = React.useState(null)
  const [activeSubject, setActiveSubject] = React.useState(null)
  const [showSubjectsModal, setShowSubjectsModal] = React.useState(false)
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
            setActiveSubject={setActiveSubject}
            setShowSubjectsModal={setShowSubjectsModal}
            subjects={subjects}
          />
        </Layer>
      )}

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
