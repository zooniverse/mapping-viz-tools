import React from 'react'
import { Box, Image } from 'grommet'
import styled, { css, withTheme } from 'styled-components'
import { shape, string } from 'prop-types'
import { withResponsiveContext } from '@zooniverse/react-components'
import { Link } from 'react-router-dom'

const DisabledLink = styled(Box)`
  white-space: nowrap;
  position: relative;

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
`

export const LinkStyle = styled(Box)`
  white-space: nowrap;
  position: relative;

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
  width: 190px;
`

export const StyledImage = styled(Image)`
  ${props =>
    css`
      border: 1px solid ${props.theme.global.colors.brand};
    `}
`

const MapLabel = ({ disabled, location, screenSize, theme }) => {
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

  return !disabled ? (
    <Relative direction='row' margin={{ bottom: 'xsmall' }} mobile={mobile}>
      <LinkStyle
        onBlur={deactivate}
        onFocus={activate}
        onMouseEnter={activate}
        onMouseLeave={deactivate}
      >
        <Link
          to='/map'
          style={{ color: theme.global.colors.brand, textDecoration: 'none' }}
        >
          {location.label}
        </Link>
      </LinkStyle>
      {isHovered && !mobile && (
        <Thumbnail>
          <StyledImage
            a11yTitle={`Map of ${location.label}`}
            src={location.map}
          />
        </Thumbnail>
      )}
    </Relative>
  ) : (
    <Box direction='row' margin={{ bottom: 'xsmall' }} style={{ opacity: 0.4 }}>
      <DisabledLink>
        <Link
          to=''
          style={{
            color: theme.global.colors.brand,
            textDecoration: 'none',
            pointerEvents: 'none',
          }}
        >
          {location.label}
        </Link>
      </DisabledLink>
    </Box>
  )
}

MapLabel.propTypes = {
  location: shape({
    label: string,
    map: string,
  }).isRequired,
}

export default withTheme(withResponsiveContext(MapLabel))
export { MapLabel }
