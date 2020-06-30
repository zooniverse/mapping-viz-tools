import React from 'react'
import { Box, Text } from 'grommet'
import styled from 'styled-components'
import withThemeContext from 'helpers/withThemeContext'
import Map from 'images/hover-map.png'
import ResponsiveImage from 'components/ResponsiveImage'
import MapLabel from './components/MapLabel'
import theme from './theme'

const BasisBox = styled(Box)`
  flex: 1 1 175px;
`

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
    <Box direction='row' gap='small' wrap>
      <BasisBox fill='horizontal' width={{ min: '50%' }}>
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
      </BasisBox>
      <BasisBox align='start'>
        {activeMap && <ResponsiveImage border src={activeMap} />}
      </BasisBox>
    </Box>
  )
}

export default withThemeContext(ChooseLocation, theme)
export { ChooseLocation }
