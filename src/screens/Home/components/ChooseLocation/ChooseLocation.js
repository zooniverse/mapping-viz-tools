import React from 'react'
import { Anchor, Box, Text } from 'grommet'
import styled from 'styled-components'
import withThemeContext from 'helpers/withThemeContext'
import Map from 'images/hover-map.png'
import ResponsiveImage from 'components/ResponsiveImage'
import theme from './theme'

const StyledAnchor = styled(Anchor)`
  padding: 0.5em;
  white-space: nowrap;

  :hover {
    background: white;
  }
`

const StyledHr = styled.hr`
  border-top: 1px solid black;
  margin: auto;
  width: 100%;
`

const ChooseLocation = function() {
  return (
    <Box direction='row'>
      <Box width='100%'>
        <Text margin='0.5em' size='medium' weight='bold'>Choose a location to begin</Text>
        <Box direction='row'>
          <StyledAnchor size='small' label='Falkland Islands' pad='small' />
          <StyledHr />
        </Box>
        <Box direction='row'>
          <StyledAnchor size='small' label='Baja, California' pad='small' />
          <StyledHr />
        </Box>
        <Box direction='row'>
          <StyledAnchor size='small' label='Tasmania, Australia' />
          <StyledHr />
        </Box>
      </Box>
      <Box margin={{ left: 'small', right: 'medium' }}>
        <ResponsiveImage src={Map} />
      </Box>
    </Box>
  )
}

export default withThemeContext(ChooseLocation, theme)
