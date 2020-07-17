import React from 'react'
import { Box, Text } from 'grommet'
import SidePanel from './components/SidePanel'

export default function MapPage() {
  return (
    <Box direction='row' fill>
      <SidePanel />
      <Box>
        <Text>I am a map</Text>
      </Box>
    </Box>
  )
}
