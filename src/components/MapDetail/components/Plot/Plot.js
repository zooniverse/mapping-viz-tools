import React from 'react'
import { Box, Text } from 'grommet'
import { ResponsiveScatterPlot } from '@nivo/scatterplot'
import { line } from 'd3-shape'
import { arrayOf, number, shape, string } from 'prop-types'
import styled from 'styled-components'
import getLeastSquares from 'helpers/getLeastSquares'
import { min, max } from 'lodash'

export const Uppercase = styled(Text)`
  text-transform: uppercase;
`

const commonProperties = {
  margin: {
    top: 5,
    right: 5,
    bottom: 26,
    left: 26,
  },
}

const theme = {
  fontSize: 8,
  axis: {
    legend: {
      text: {
        fontSize: 8,
      },
    },
  },
}

const Plot = ({ data, title = '', year, yAxis, years }) => {
  const [minY, setMinY] = React.useState(null)
  const [maxY, setMaxY] = React.useState(null)
  const [leastSquares, setLeastSquares] = React.useState([])

  React.useEffect(() => {
    let xValues = []
    let yValues = []
    if (data) {
      data.forEach(subject => {
        xValues.push(subject.x)
        yValues.push(subject.y)
      })

      setLeastSquares(getLeastSquares(xValues, yValues))
      setMinY(min(yValues))
      setMaxY(max(yValues))
    }
  }, [data])

  const RegressionLayer = ({ xScale, yScale }) => {
    const lineGenerator = line()
      .x(d => xScale(d.x))
      .y(d => yScale(d.y))

    return (
      <path
        id='regression-line'
        d={lineGenerator([
          leastSquares[0],
          leastSquares[leastSquares.length - 1],
        ])}
        strokeWidth={1}
        stroke='black'
      />
    )
  }

  const CurrentYear = ({ xScale, yScale }) => {
    const lineGenerator = line()
      .x(d => xScale(d.x))
      .y(d => yScale(d.y))

    return (
      <path
        id='current-year-line'
        d={lineGenerator([
          { x: year, y: minY },
          { x: year, y: maxY },
        ])}
        strokeWidth={4}
        stroke='#113E3B'
        opacity={0.4}
      />
    )
  }

  return (
    <Box>
      <Box background='white' border={{ color: 'kelp' }} height='5.5em'>
        {data ? (
          <ResponsiveScatterPlot
            {...commonProperties}
            isInteractive={false}
            useMesh={false}
            animate={false}
            xScale={{
              type: 'linear',
              min: years[0],
              max: years[years.length - 1],
            }}
            axisBottom={{
              orient: 'bottom',
              legend: 'Time',
              legendOffset: 20,
              legendPosition: 'middle',
              tickSize: 0,
              tickValues: [
                '1990',
                '1995',
                '2000',
                '2005',
                '2010',
                '2015',
              ],
            }}
            gridXValues={years}
            yScale={{
              type: 'linear',
              min: 'auto',
              max: 'auto',
              stacked: false,
            }}
            axisLeft={{
              orient: 'left',
              legend: yAxis,
              legendOffset: -20,
              legendPosition: 'middle',
              tickSize: 0,
              tickValues: 4,
            }}
            data={[
              {
                id: title,
                data: data,
              },
            ]}
            theme={theme}
            nodeSize={4}
            colors='black'
            layers={['grid', 'axes', 'nodes', RegressionLayer, CurrentYear]}
          />
        ) : (
          <Box align='center' justify='center' height='100%' id='plot-no-data'>
            <Text>No Subject Data</Text>
          </Box>
        )}
      </Box>
      <Uppercase color='kelp'>{title}</Uppercase>
    </Box>
  )
}

export default Plot

Plot.propTypes = {
  data: arrayOf(shape({
    x: number,
    y: number
  })),
  title: string,
  yAxis: string,
  year: number,
  years: arrayOf(number)
}
