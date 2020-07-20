import React from 'react'
import { Anchor, Box } from 'grommet'
import styled from 'styled-components'
import { func, shape, string } from 'prop-types'

export const StyledAnchor = styled(Anchor)`
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

export default function MapLabel({ location, onActivate }) {
  const [isHovered, onHover] = React.useState(false)
  const activate = () => {
    onHover(true)
    onActivate(location)
  }

  const deactivate = () => {
    onHover(false)
    onActivate(null)
  }

  return (
    <Box direction='row'>
      <StyledAnchor
        href='/map'
        label={location.label}
        onBlur={deactivate}
        onFocus={activate}
        onMouseEnter={activate}
        onMouseLeave={deactivate}
      />
      {isHovered && <StyledHr />}
    </Box>
  )
}

MapLabel.propTypes = {
  location: shape({
    label: string,
    map: string
  }).isRequired,
  onActivate: func
}

MapLabel.defaultProp = {
  onActivate: () => {}
}
