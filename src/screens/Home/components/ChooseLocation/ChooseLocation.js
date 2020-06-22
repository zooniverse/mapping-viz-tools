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

const BasisBox = styled(Box)`
  flex: 1 1 175px;
`

const ChooseLocation = function() {
  return (
    <Box direction='row' width='100%' wrap>
      <BasisBox fill='horizontal' margin={{ right: 'small' }} width={{ min: '50%' }}>
        <Heading
          level='4'
          margin={{ bottom: 'xsmall', horizontal: 'xxsmall', top: 'none' }}
        >
          Choose a location to begin
        </Heading>
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
      </BasisBox>
      <BasisBox margin='small'>
        <ResponsiveImage border maxHeight='8em' src={Map} />
      </BasisBox>
    </Box>
  )
}

export default withThemeContext(ChooseLocation, theme)
