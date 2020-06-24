import React from 'react'
import { Box, Button } from 'grommet'
import styled from 'styled-components'
import { func, string } from 'prop-types'

export const StyledButton = styled(Button)`
  padding: 0.5em;
  white-space: nowrap;

  :focus, :hover {
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
  const activate = () => {
    onHover(true)
    onActivate(map)
  }

  const deactivate = () => {
    onHover(false)
    onActivate(null)
  }

  return (
    <Box direction='row'>
      <StyledButton
        label={location}
        onBlur={deactivate}
        onFocus={activate}
        onMouseEnter={activate}
        onMouseLeave={deactivate}
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
