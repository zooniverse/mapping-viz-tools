import React from 'react'
import { Anchor, Box, Heading } from 'grommet'
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
    <Box direction='row' width='100%'>
      <Box fill='horizontal'>
        <Heading level='4' margin={{ bottom: 'xsmall', horizontal: 'xxsmall', top: 'none' }}>Choose a location to begin</Heading>
        <Box direction='row'>
          <StyledAnchor label='Falkland Islands' />
          <StyledHr />
        </Box>
        <Box direction='row'>
          <StyledAnchor label='Baja, California' />
          <StyledHr />
        </Box>
        <Box direction='row'>
          <StyledAnchor label='Tasmania, Australia' />
          <StyledHr />
        </Box>
      </Box>
      <Box margin={{ left: 'small', right: 'medium' }}>
        <ResponsiveImage border src={Map} />
      </Box>
    </Box>
  )
}

export default withThemeContext(ChooseLocation, theme)
