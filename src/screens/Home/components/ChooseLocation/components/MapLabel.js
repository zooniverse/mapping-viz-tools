import React from 'react'
import { Anchor, Box } from 'grommet'
import styled from 'styled-components'
import { func, shape, string } from 'prop-types'
import { withResponsiveContext } from '@zooniverse/react-components'

export const StyledAnchor = styled(Anchor)`
  white-space: nowrap;
  
`

// refactor this as absolute positioned
export const StyledHr = styled.hr`
  border-top: 1px solid black;
  margin: auto;
  width: 100%;
`

const Relative = styled(Box)`
  position: relative;
`

const MapLabel = ({ location, onActivate, screenSize }) => {
  const mobile = screenSize === 'small'

  const [isHovered, onHover] = React.useState(false)
  const activate = () => {
    if (mobile) return
    onHover(true)
    onActivate(location)
  }

  const deactivate = () => {
    if (mobile) return
    onHover(false)
    onActivate(null)
  }

  return (
    <Relative direction='row'>
      <StyledAnchor
        href='/map'
        label={location.label}
        onBlur={deactivate}
        onFocus={activate}
        onMouseEnter={activate}
        onMouseLeave={deactivate}
        margin={{ bottom: 'small' }}
      />
      {isHovered && <StyledHr />}
    </Relative>
  )
}

MapLabel.propTypes = {
  location: shape({
    label: string,
    map: string,
  }).isRequired,
  onActivate: func,
}

MapLabel.defaultProp = {
  onActivate: () => {},
}

export default withResponsiveContext(MapLabel)
