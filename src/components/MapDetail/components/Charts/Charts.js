import React from 'react'
import { Grid } from 'grommet'
import Plot from '../Plot'

export default function Charts() {
  return (
    <Grid
      areas={[
        { name: 'Graph1', start: [0, 0], end: [0, 0] },
        { name: 'Graph2', start: [0, 1], end: [0, 1] },
        { name: 'Graph3', start: [1, 0], end: [1, 0] },
        { name: 'Graph4', start: [1, 1], end: [1, 1] },
      ]}
      columns={['1/2', '1/2']}
      gap='xxsmall'
      margin={{ bottom: 'xxsmall' }}
      rows={['auto', 'auto']}
    >
      <Plot gridArea="Graph1" title='Kelp Over Time' />
      <Plot gridArea="Graph2" title='Wind Patterns' />
      <Plot gridArea="Graph3" title='Temperature' />
      <Plot gridArea="Graph4" title='Wave Patterns' />
    </Grid>
  )
}
