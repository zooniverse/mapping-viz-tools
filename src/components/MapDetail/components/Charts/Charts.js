import React from 'react'
import { Grid } from 'grommet'
import Plot from '../Plot'
import mockChartData from '../Charts/mockChartData'
import getAverages from 'helpers/getAverages'

const Charts = ({ subjects, year, years, }) => {
  const kelpData = subjects.reduce((accumulator, currentSubject) => {
    accumulator.push({
      x: parseInt(currentSubject.date.substring(0, 4)),
      y: currentSubject.kelp_km2,
    })

    return accumulator
  }, [])

  const tempData = subjects.reduce((accumulator, currentSubject) => {
    accumulator.push({
      x: parseInt(currentSubject.date.substring(0, 4)),
      y: currentSubject.temperature_grid_index,
    })

    return accumulator
  }, [])

  const kelpAverages = getAverages(kelpData, years)

  return (
    <Grid gap='xsmall'>
      <Plot data={kelpAverages} title='Kelp Over Time' year={year} yAxis='Avg Kelp (km sq)' />
      <Plot data={mockChartData} title='Temperature' year={year} yAxis='Avg Temp (F)' />
    </Grid>
  )
}

export default Charts
