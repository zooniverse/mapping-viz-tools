import React from 'react'
import { Box, Image } from 'grommet'
import styled from 'styled-components'
import { object, string } from 'prop-types'

const StyledBox = styled(Box)`
  display: inline;
`

const StyledImage = styled(Image)`
  height: auto;
  max-height: 100%;
  max-width: 100%;
`

export default function ResponsiveImage({ height, margin, src }) {
  return (
    <StyledBox height={height} margin={margin} >
      <StyledImage fit='contain' src={src} />
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
