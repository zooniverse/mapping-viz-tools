import React from 'react'
import { Box, Text } from 'grommet'
import { ResponsiveScatterPlot } from '@nivo/scatterplot'
import { string } from 'prop-types'
import styled from 'styled-components'
import getLeastSquares from 'helpers/getLeastSquares'

export const Uppercase = styled(Text)`
  text-transform: uppercase;
`

const commonProperties = {
  margin: {
    top: 5,
    right: 12,
    bottom: 24,
    left: 25,
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
  let leastSquares = []

  if (data) {
    let xValues = []
    let yValues = []
    data.forEach(subject => {
      if (subject.y) {
        xValues.push(subject.x)
        yValues.push(subject.y)
      }
    })

    leastSquares = getLeastSquares(xValues, yValues)
  }

  const plotData = [
    {
      id: title,
      data: data,
    },
    // {
    //   id: 'Linear Regression',
    //   data: leastSquares,
    // },
  ]

  // TO DO: adjust these hardcoded dimensions
  return (
    <Box>
      <Box background='white' border={{ color: 'kelp' }} height='5em'>
        {data ? (
          <ResponsiveScatterPlot
            {...commonProperties}
            isInteractive={false}
            useMesh={false}
            animate={false}
            xScale={{
              type: 'linear',
              min: 'auto',
              max: 'auto',
            }}
            axisBottom={{
              orient: 'bottom',
              legend: 'Time',
              legendOffset: 20,
              legendPosition: 'middle',
              tickSize: 0,
              tickValues: [
                '1985',
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
            data={plotData}
            theme={theme}
            nodeSize={6}
            colors='black'
          />
        ) : (
          <Box align='center' justify='center' height='100%' id='plot-no-data'>
            <Text>
              No Subject Data
            </Text>
          </Box>
        )}
      </Box>
      <Uppercase color='kelp'>{title}</Uppercase>
    </Box>
  )
}

export default Plot

Plot.propTypes = {
  title: string,
}
