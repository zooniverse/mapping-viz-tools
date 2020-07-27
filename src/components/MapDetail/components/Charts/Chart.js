import React from 'react'
import { Box, Image, Text } from 'grommet'
import Graph from 'images/graph.png'
import { string } from 'prop-types'
import styled from 'styled-components'

const Uppercase = styled(Text)`
  text-transform: uppercase;
`

export default function Chart({ text = '' }) {
  return (
    <Box gap='xsmall'>
      <Box border={{ color: 'kelp' }}>
        <Image src={Graph} />
      </Box>
      <Uppercase color='kelp'>{text}</Uppercase>
    </Box>
  )
}

Chart.propTypes = {
  text: string
}
