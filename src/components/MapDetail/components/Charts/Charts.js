import React from 'react'
import { Grid } from 'grommet'
import Chart from './Chart'

export default function Charts() {
  return (
    <Grid
      areas={[
        { name: 'Graph1', start: [0, 0], end: [0, 0] },
        { name: 'Graph2', start: [0, 1], end: [0, 1] },
        { name: 'Graph3', start: [1, 0], end: [1, 0] },
        { name: 'Graph4', start: [1, 1], end: [1, 1] },
      ]}
      columns={['auto', 'auto']}
      gap='xsmall'
      margin={{ bottom: 'xxsmall' }}
      rows={['auto', 'auto']}
    >
      <Chart gridArea="Graph1" text='Kelp Over Time' />
      <Chart gridArea="Graph2" text='Wind Patterns' />
      <Chart gridArea="Graph3" text='Temperature' />
      <Chart gridArea="Graph4" text='Wave Patterns' />
    </Grid>
  )
}
