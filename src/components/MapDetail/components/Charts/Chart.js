import React from 'react'
import { Box, Text } from 'grommet'
import Graph from 'images/graph.png'
import { string } from 'prop-types'
import styled from 'styled-components'
import ResponsiveImage from 'components/ResponsiveImage'

const Uppercase = styled(Text)`
  text-transform: uppercase;
`

export default function Chart({ text = '' }) {
  return (
    <Box gap='xxsmall'>
      <ResponsiveImage border src={Graph} />
      <Uppercase color='kelp'>{text}</Uppercase>
    </Box>
  )
}

Chart.propTypes = {
  text: string
}
