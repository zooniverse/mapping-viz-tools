import React from 'react'
import { Grid } from 'grommet'
import Plot from '../Plot'
import getAverages from 'helpers/getAverages'
import { number, arrayOf, shape, string } from 'prop-types'

const Charts = ({ subjects = [], year, years = [] }) => {
  const [kelpAverages, setKelpAverages] = React.useState(null)
  const [tempAverages, setTempAverages] = React.useState(null)

  React.useEffect(() => {
    if (subjects?.length) {
      const kelpData = subjects.reduce((accumulator, currentSubject) => {
        accumulator.push({
          x: parseInt(currentSubject.date.substring(0, 4)),
          y: currentSubject.kelp_km2,
        })

        return accumulator
      }, [])
      setKelpAverages(getAverages(kelpData))

      const tempData = subjects?.reduce((accumulator, currentSubject) => {
        accumulator.push({
          x: parseInt(currentSubject.date.substring(0, 4)),
          y: currentSubject.temp_celsius,
        })

        return accumulator
      }, [])
      setTempAverages(getAverages(tempData))
    }
  }, [subjects])

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
        data={tempAverages}
        title='Temperature'
        year={year}
        yAxis='Avg Temp (C)'
        years={years}
      />
    </Grid>
  )
}

export default Charts

Charts.propTypes = {
  subjects: arrayOf(shape({
    date: string,
    kelp_km2: string
  })),
  year: number,
  years: arrayOf(number)
}