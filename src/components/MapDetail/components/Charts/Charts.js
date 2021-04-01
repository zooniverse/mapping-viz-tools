import React from 'react'
import { Grid } from 'grommet'
import Plot from '../Plot'
import mockChartData from '../Charts/mockChartData'
import getAverages from 'helpers/getAverages'

const mockData = [
  { x: 2006, y: '2.144' },
  { x: 2004, y: '4.6721' },
  { x: 2005, y: '3.8967' },
  { x: 2005, y: '5.1372' },
  { x: 2008, y: '1.9937' },
  { x: 2007, y: '2.3625' },
  { x: 2006, y: '1.3945' },
  { x: 2004, y: '7.0671' },
  { x: 2003, y: '4.1056' },
  { x: 2006, y: '0.0002' },
  { x: 2006, y: '1.7695' },
  { x: 2004, y: '7.0399' },
  { x: 2001, y: '0.2366' },
  { x: 2002, y: '2.8216' },
  { x: 2006, y: '0.6754' },
  { x: 2005, y: '0.6009' },
  { x: 1999, y: '1.2891' },
]

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
