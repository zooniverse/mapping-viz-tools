import React from 'react'
import { Image } from 'grommet'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

export const StyledDiv = styled.div`
  ${props => props.border && css`border: 1px solid black;`}
`

export const StyledImage = styled(Image)`
  ${props => props.height && css`height: ${props.height};`}
  max-width: 100%;
`

export default function ResponsiveImage({ border = false, height = 'auto', src }) {
  return (
    <StyledDiv border={border}>
      <StyledImage height={height} fit='contain' src={src} />
    </StyledDiv>
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
