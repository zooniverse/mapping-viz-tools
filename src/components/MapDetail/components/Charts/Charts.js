import React from 'react'
import { Grid } from 'grommet'
import Plot from '../Plot'

const Charts = ({ year }) => {
  return (
    <Grid gap="xsmall">
      <Plot title='Kelp Over Time' year={year} />
      <Plot title='Wind Patterns' year={year} />
    </Grid>
  )
}

export default Charts
