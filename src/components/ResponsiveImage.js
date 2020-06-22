import React from 'react'
import { Box, Image } from 'grommet'
import styled, { css } from 'styled-components'
import { object, string } from 'prop-types'

const StyledBox = styled(Box)`
  display: inline;
`

const StyledImage = styled(Image)`
  height: auto;
  max-width: 100%;
  ${props => props.border && css`border: 1px solid black;`}
  ${props => props.maxHeight && css`max-height: ${props.maxHeight};`}
`

export default function ResponsiveImage({ border, height, margin, maxHeight, src, width }) {
  return (
    <StyledBox height={height} margin={margin} width={width}>
      <StyledImage border={border} fit='contain' maxHeight={maxHeight} src={src} />
    </StyledBox>
  )
}

ResponsiveImage.defaultProps = {
}

ResponsiveImage.propTypes = {
  height: string,
  margin: object,
  maxHeight: string,
  src: string.isRequired
}

ResponsiveImage.defaultProps = {
  height: 'auto',
  margin: 0,
  maxHeight: '100%'
}
