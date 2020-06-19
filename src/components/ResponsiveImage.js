import React from 'react'
import { Box, Image } from 'grommet'
import styled, { css } from 'styled-components'
import { object, string } from 'prop-types'

const StyledBox = styled(Box)`
  display: inline;
`

const StyledImage = styled(Image)`
  ${props => props.border && css`border: 1px solid black;`}
  height: auto;
  max-height: 100%;
  max-width: 100%;
`

export default function ResponsiveImage({ border, height, margin, src, width }) {
  return (
    <StyledBox height={height} margin={margin} width={width}>
      <StyledImage border={border} fit='contain' src={src} />
    </StyledBox>
  )
}

ResponsiveImage.propTypes = {
  height: string,
  margin: object,
  src: string.isRequired
}

ResponsiveImage.defaultProps = {
  height: 'auto',
  margin: 0
}
