import React from 'react'
import { Box, Layer, Text } from 'grommet'
import MapDetail from 'components/MapDetail'
import styled from 'styled-components'
import STATUS from 'helpers/asyncStatus'
import { getSubjects } from 'helpers/client'
import DrawingOverlay from 'components/DrawingOverlay'
import SidePanel from './components/SidePanel'
import { MapContainer, TileLayer } from 'react-leaflet'
import yearsArray from 'helpers/yearsArray'



const Relative = styled.div`
  position: relative;
  width: 100%;
`

// use to keep MapDetail open while editing
// const defaultCoords = {
//   northEast: {
//     lat: -51.34401520040366,
//     lng: -57.813190743327155
//   },
//   southWest: {
//     lat: -51.45852322420228,
//     lng: -57.941539138555534
//   },
//   width: "100%",
//   height: "100%"
// }

export default function MapPage() {
  const [canDraw, changeDrawing] = React.useState(false)
  const [miniMapCoords, setCoords] = React.useState(null)
  const [subjects, setSubjects] = React.useState([])
  const [subjectsErrorUI, setSubjectsErrorUI] = React.useState(false)
  const [asyncStatus, setAsyncStatus] = React.useState(STATUS.LOADING)

  const [showKelpLayers, setKelpLayers] = React.useState(true)
  const [baseLayer, setBaseLayer] = React.useState(0)

  React.useEffect(() => {
    async function fetchSubjects() {
      if (miniMapCoords) {
        const subjectsInCoords = await getSubjects(miniMapCoords)
        if (subjectsInCoords?.message === 'subjects client error') {
          setSubjectsErrorUI(true) // display an error message in AssociatedSubjects
          setSubjects([]) // clear any subjects that might've been fetched before the subjects API failed
          setAsyncStatus(STATUS.READY)
        } else {
          if (subjectsErrorUI) setSubjectsErrorUI(false)
          setSubjects(subjectsInCoords)
          setAsyncStatus(STATUS.READY)
        }
      } else {
        setAsyncStatus(STATUS.LOADING)
      }
    }
    fetchSubjects()
  }, [miniMapCoords, subjectsErrorUI])

  const toggleKelp = () => {
    setKelpLayers(!showKelpLayers)
  }

  // adjust as needed for data that exists in static.zooniverse.org
  const yearsOfKelpData = yearsArray(1997, 2016)

  return (
    <Box direction='row' height={{ min: '100%' }}>
      <SidePanel
        changeDrawing={changeDrawing}
        isDrawing={canDraw}
        setBaseLayer={setBaseLayer}
        showKelpLayers={showKelpLayers}
        toggleKelp={toggleKelp}
      />

      <Relative>
        <MapContainer
          center={[-51.75, -59.5]}
          doubleClickZoom={false}
          dragging={false}
          scrollWheelZoom={false}
          style={{ width: '100%', height: '100%', position: 'absolute' }}
          zoom={8}
        >
          {baseLayer === 0 && <TileLayer
            attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            name="Open Street Maps"
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />}
          {baseLayer === 1 && <TileLayer
            attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            name="Satellite"
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />}
          {yearsOfKelpData?.length &&
            showKelpLayers &&
            yearsOfKelpData.map(year => (
              <TileLayer
                key={year}
                attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url={`https://static.zooniverse.org/mapping-viz-tiles/falklands/${year}/{z}/{x}/{y}.png`}
              />
            ))}
          <DrawingOverlay
            canDraw={canDraw}
            changeDrawing={changeDrawing}
            setCoords={setCoords}
          />
          {/** This is a hack to style a legend exactly like the leaflet attribution */}
          {showKelpLayers && (
            <div className='leaflet-control-container'>
              <div className='leaflet-bottom leaflet-left'>
                <div className='leaflet-control-attribution leaflet-control'>
                  <Box
                    align='center'
                    direction='row'
                    gap='xxsmall'
                    justify='center'
                    pad={{ vertical: '2px' }}
                  >
                    <Box
                      height='0.6rem'
                      width='0.6rem'
                      background='#589454'
                      border={{ color: 'black' }}
                    />
                    <Text size='11px'>{`= Sum of Kelp from ${
                      yearsOfKelpData[0]
                    } to ${yearsOfKelpData[yearsOfKelpData.length - 1]}`}</Text>
                  </Box>
                </div>
              </div>
            </div>
          )}
        </MapContainer>
      </Relative>

      {miniMapCoords && (
        <Layer>
          <MapDetail
            asyncStatus={asyncStatus}
            coordinates={miniMapCoords}
            onClose={() => setCoords(null)}
            subjects={subjects}
            subjectsErrorUI={subjectsErrorUI}
          />
        </Layer>
      )}
    </Box>
  )
}
