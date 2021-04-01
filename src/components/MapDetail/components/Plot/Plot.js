import React from 'react'
import { Box, Text } from 'grommet'
import { ResponsiveLine } from '@nivo/line'
import { string } from 'prop-types'
import styled from 'styled-components'

// This should probably be changed to data Points because Line implies we know what happens between dates

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

const Plot = ({ data, title = '', year, yAxis }) => {
  // TO DO: adjust these hardcoded dimensions
  return (
    <Box>
      <Box background='white' border={{ color: 'kelp' }} height='5em'>
        <ResponsiveLine
          {...commonProperties}
          axisLeft={{
            orient: 'left',
            legend: yAxis,
            legendOffset: -20,
            legendPosition: 'middle',
            tickSize: 0,
            tickValues: 4,
          }}
          yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false }}
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
          data={[
            {
              id: 'Temperature',
              data: data,
            },
          ]}
          theme={theme}
        />
      </Box>
      <Uppercase color='kelp'>{title}</Uppercase>
    </Box>
  )
}

export default Plot

Plot.propTypes = {
  title: string,
}
