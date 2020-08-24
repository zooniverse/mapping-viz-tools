import React from 'react'
import { Grid } from 'grommet'
import Chart from './Chart'
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
      rows={['flex', 'flex']}
    >
      <Plot gridArea="Graph1" text='Kelp Over Time' />
      <Plot gridArea="Graph2" text='Wind Patterns' />
      <Plot gridArea="Graph3" text='Temperature' />
      <Plot gridArea="Graph4" text='Wave Patterns' />
    </Grid>
  )
}
