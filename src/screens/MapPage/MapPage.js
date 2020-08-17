import React from 'react'
import { Box } from 'grommet'
import SidePanel from './components/SidePanel'
import BaseMap from 'components/BaseMap'

export default function MapPage() {
  return (
    <Box direction='row' height={{ min: '100%' }}>
      <SidePanel />
      <BaseMap />
    </Box>
  )
}
