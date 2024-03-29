import React from 'react'
import { Box, Text } from 'grommet'
import styled from 'styled-components'
import { withThemeContext } from '@zooniverse/react-components'
import Map from 'images/hover-map.png'
import MapLabel from './components/MapLabel'
import theme from './theme'

const StyledText = styled(Text)`
  font-family: Neuton;
`

const OPTIONS = [
  { label: 'Falkland Islands', map: Map, disabled: false },
  { label: 'Baja, California', map: Map, disabled: true },
  { label: 'Tasmania, Australia', map: Map, disabled: true }
]

const ChooseLocation = () => {
  return (
    <Box direction='row'>
      <Box margin={{ bottom: 'small' }}>
        <StyledText size='1.25rem' margin={{ bottom: 'small' }}>
          Choose a location to begin
        </StyledText>
        {OPTIONS.map((location, i) => {
          return (
            <MapLabel
              disabled={location.disabled}
              key={location.label}
              location={location}
            />
          )
        })}
      </Box>
    </Box>
  )
}

export default withThemeContext(ChooseLocation, theme)
export { ChooseLocation }
