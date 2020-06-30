import React from 'react'
import { Image } from 'grommet'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

export const StyledImage = styled(Image)`
  ${props => props.border && css`border: 1px solid black;`}
  ${props => props.height && css`height: ${props.height};`}
  max-width: 100%;
`

export default function ResponsiveImage({ border = false, height = 'auto', src }) {
  return (
    <div>
      <StyledImage border={border} height={height} fit='contain' src={src} />
    </div>
  )
}

ResponsiveImage.propTypes = {
  height: PropTypes.string,
  margin: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ]),
  src: PropTypes.string.isRequired
}
