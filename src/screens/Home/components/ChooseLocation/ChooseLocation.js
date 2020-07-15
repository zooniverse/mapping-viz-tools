import React from 'react'
import { Box, Text } from 'grommet'
import styled from 'styled-components'
import withThemeContext from 'helpers/withThemeContext'
import Map from 'images/hover-map.png'
import ResponsiveImage from 'components/ResponsiveImage'
import MapLabel from './components/MapLabel'
import theme from './theme'

const StyledText = styled(Text)`
  font-family: Neuton;
`

const OPTIONS = [
  { label: 'Falkland Islands', map: Map},
  { label: 'Baja, California', map: Map},
  { label: 'Tasmania, Australia', map: Map}
]

function ChooseLocation() {
  const [activeMap, setActiveMap] = React.useState(null)

  return (
    <Box
      direction='row'
      wrap
    >
      <Box flex='grow'>
        <StyledText
          margin='xxsmall'
          size='1.25rem'
        >
          Choose a location to begin
        </StyledText>
        {OPTIONS.map((location, i) => {
          return (
            <MapLabel
              key={location.label}
              location={location.label}
              map={location.map}
              onActivate={setActiveMap}
            />
        )})}
      </Box>
      <Box align='center' flex='grow' pad='xxsmall'>
        {activeMap && <ResponsiveImage border height='8em' src={activeMap} />}
      </Box>
    </Box>
  )
}

export default withThemeContext(ChooseLocation, theme)
export { ChooseLocation }