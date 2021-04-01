import React from 'react'
import { Grid } from 'grommet'
import Plot from '../Plot'
import mockChartData from '../Charts/mockChartData'
import getAverages from 'helpers/getAverages'

const Charts = ({ year, subjects }) => {
  const kelpData = subjects.reduce((accumulator, currentSubject) => {
    accumulator.push({
      x: parseInt(currentSubject.date.substring(0, 4)),
      y: currentSubject.kelp_km2,
    })

    return accumulator
  }, [])

  // console.log(getAverages(kelpData))

  const tempData = subjects.reduce((accumulator, currentSubject) => {
    accumulator.push({
      x: parseInt(currentSubject.date.substring(0, 4)),
      y: currentSubject.temperature_grid_index,
    })

    return accumulator
  }, [])

  return (
    <Grid gap='xsmall'>
      <Plot data={kelpData} title='Kelp Over Time' year={year} yAxis='Kelp (km sq)' />
      <Plot data={mockChartData} title='Temperature' year={year} yAxis='Temp (F)' />
    </Grid>
  )
}

export default Charts
