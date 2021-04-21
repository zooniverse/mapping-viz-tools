import React from 'react'
import { Anchor, Box, Image } from 'grommet'
import styled, { css, withTheme } from 'styled-components'
import { func, shape, string } from 'prop-types'
import { withResponsiveContext } from '@zooniverse/react-components'

export const StyledAnchor = styled(Anchor)`
  white-space: nowrap;
  position: relative;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    ${props =>
      css`
        background: ${props.theme.global.colors.brand};
      `}
  }

  &:hover {
    text-decoration: none;
  }
`

const Relative = styled(Box)`
  position: relative;

  ${props =>
    props.mobile
      ? null
      : css`
          &:hover {
            &::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              width: 110%;
              height: 1px;
              ${props =>
                css`
                  background: ${props.theme.global.colors.brand};
                `}
            }
          }
        `}
`

const Thumbnail = styled(Box)`
  position: absolute;
  left: 110%;
  top: 50%;
  transform: translateY(-50%);
`

export const StyledImage = styled(Image)`
  ${props =>
    css`
      border: 1px solid ${props.theme.global.colors.brand};
    `}
`

const MapLabel = ({ location, screenSize }) => {
  const mobile = screenSize === 'small'

  const [isHovered, onHover] = React.useState(false)
  const activate = () => {
    if (mobile) return
    onHover(true)
  }

  const deactivate = () => {
    if (mobile) return
    onHover(false)
  }

  return (
    <Relative direction='row' margin={{ bottom: 'xsmall' }} mobile={mobile}>
      <StyledAnchor
        href='/map'
        label={location.label}
        onBlur={deactivate}
        onFocus={activate}
        onMouseEnter={activate}
        onMouseLeave={deactivate}
      />
      {isHovered && !mobile && (
        <Thumbnail>
          <StyledImage
            a11yTitle={`Map of ${location.label}`}
            src={location.map}
          />
        </Thumbnail>
      )}
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

export default withTheme(withResponsiveContext(MapLabel))
