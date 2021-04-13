import React from 'react'
import { Box, Text } from 'grommet'
import styled from 'styled-components'
import {
  withThemeContext,
  withResponsiveContext,
} from '@zooniverse/react-components'
import Map from 'images/hover-map.png'
import ResponsiveImage from 'components/ResponsiveImage'
import MapLabel from './components/MapLabel'
import theme from './theme'

const StyledText = styled(Text)`
  font-family: Neuton;
`

const OPTIONS = [
  { label: 'Falkland Islands', map: Map },
  // { label: 'Baja, California', map: Map},
  // { label: 'Tasmania, Australia', map: Map}
]

const ChooseLocation = ({ screenSize }) => {
  const mobile = screenSize === 'small'

  const [activeLocation, setActiveLocation] = React.useState(null)

  return (
    <Box direction='row'>
      <Box>
        <StyledText size='1.25rem' margin={{ bottom: 'small' }}>
          Choose a location to begin
        </StyledText>
        {OPTIONS.map((location, i) => {
          return (
            <MapLabel
              key={location.label}
              location={location}
              onActivate={setActiveLocation}
            />
          )
        })}
      </Box>
      {!mobile && (
        <Box align='center' flex='grow' pad='xxsmall'>
          {activeLocation && (
            <ResponsiveImage
              a11yTitle={`Map of ${activeLocation.label}`}
              border
              height='8em'
              src={activeLocation.map}
            />
          )}
        </Box>
      )}
    </Box>
  )
}

export default withResponsiveContext(withThemeContext(ChooseLocation, theme))
export { ChooseLocation }
