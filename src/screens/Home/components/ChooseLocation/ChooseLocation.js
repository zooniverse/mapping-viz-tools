import React from 'react'
import { Box, Heading } from 'grommet'
import styled from 'styled-components'
import withThemeContext from 'helpers/withThemeContext'
import Map from 'images/hover-map.png'
import ResponsiveImage from 'components/ResponsiveImage'
import MapLabel from './components/MapLabel'
import theme from './theme'

const BasisBox = styled(Box)`
  flex: 1 1 175px;
`

const OPTIONS = [
  { label: 'Falkland Islands', map: Map},
  { label: 'Baja, California', map: Map},
  { label: 'Tasmania, Australia', map: Map}
]

function ChooseLocation() {
  const [activeMap, setActiveMap] = React.useState(null)

  return (
    <Box direction='row' width='100%' wrap>
      <BasisBox fill='horizontal' margin={{ right: 'small' }} width={{ min: '50%' }}>
        <Heading
          level='4'
          margin={{ bottom: 'xsmall', horizontal: 'xxsmall', top: 'none' }}
        >
          Choose a location to begin
        </Heading>
        {OPTIONS.map((location, i) => {
          return (
            <MapLabel
              key={`MAP_LABEL_${i}`}
              location={location.label}
              map={location.map}
              onActivate={setActiveMap}
            />
        )})}
      </BasisBox>
      <BasisBox align='center' margin='small' height='8em'>
        {activeMap && <ResponsiveImage border maxHeight='8em' src={activeMap} />}
      </BasisBox>
    </Box>
  )
}

export default withThemeContext(ChooseLocation, theme)
export { ChooseLocation }
