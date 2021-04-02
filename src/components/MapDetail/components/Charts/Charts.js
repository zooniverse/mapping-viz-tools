import React from 'react'
import { Grid } from 'grommet'
import Plot from '../Plot'
import { mockChartData } from '../Charts/mockChartData'
import getAverages from 'helpers/getAverages'

const Charts = ({ subjects = [], year, years = [] }) => {
  const [kelpAverages, setKelpAverages] = React.useState(null)

  React.useEffect(() => {
    if (subjects.length) {
      const kelpData = subjects.reduce((accumulator, currentSubject) => {
        accumulator.push({
          x: parseInt(currentSubject.date.substring(0, 4)),
          y: currentSubject.kelp_km2,
        })

        return accumulator
      }, [])
      setKelpAverages(getAverages(kelpData, years))

      // TO DO: add similar data handling for subject.temperature_grid_index,
    }
  }, [subjects, years])

  return (
    <Grid gap='xsmall'>
      <Plot
        data={kelpAverages}
        title='Kelp Over Time'
        year={year}
        yAxis='Avg Kelp (km sq)'
        years={years}
      />
      <Plot
        data={mockChartData}
        title='Temperature'
        year={year}
        yAxis='Avg Temp (F)'
        years={years}
      />
    </Grid>
  )
}

export default Charts
