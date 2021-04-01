import React from 'react'
import { Grid } from 'grommet'
import Plot from '../Plot'

export default function Charts() {
  return (
    <Grid gap="xsmall">
      <Plot gridArea='Graph1' title='Kelp Over Time' />
      <Plot gridArea='Graph2' title='Wind Patterns' />
    </Grid>
  )
}
