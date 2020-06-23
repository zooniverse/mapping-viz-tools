import React from 'react'
import { Box, Button } from 'grommet'
import styled from 'styled-components'
import { func, string } from 'prop-types'

export const StyledButton = styled(Button)`
  padding: 0.5em;
  white-space: nowrap;

  :hover {
    background: white;
    text-decoration: underline;
  }
`

export const StyledHr = styled.hr`
  border-top: 1px solid black;
  margin: auto;
  width: 100%;
`

export default function MapLabel({ location, map, onActivate }) {
  const [isHovered, onHover] = React.useState(false)

  return (
    <Box direction='row'>
      <StyledButton
        label={location}
        onMouseEnter={() => {
          onHover(true)
          onActivate(map)
        }}
        onMouseLeave={() => {
          onHover(false)
          onActivate(null)
        }}
        plain
      />
      {isHovered && <StyledHr />}
    </Box>
  )
}

MapLabel.propTypes = {
  location: string.isRequired,
  map: string.isRequired,
  onActivate: func
}

MapLabel.defaultProp = {
  onActivate: () => {}
}
