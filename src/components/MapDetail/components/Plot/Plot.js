import React from 'react'
import { Box, Text } from 'grommet'
import { ResponsiveLine } from '@nivo/line'
import { string } from 'prop-types'
import getAverages from 'helpers/getAverages'
import styled from 'styled-components'

// This should probably be changed to data Points because Line implies we know what happens between dates

const Uppercase = styled(Text)`
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

const mockData = [
  { x: '1985', y: 75 },
  { x: '1986', y: 72 },
  { x: '1987', y: 74 },
  { x: '1988', y: 79 },
  { x: '1989', y: 83 },
  { x: '1990', y: 77 },
  { x: '1991', y: 79 },
  { x: '1992', y: 84 },
  { x: '1993', y: 70 },
  { x: '1994', y: 75 },
  { x: '1995', y: 72 },
  { x: '1996', y: 74 },
  { x: '1997', y: 79 },
  { x: '1998', y: 83 },
  { x: '1999', y: 77 },
  { x: '2000', y: 79 },
  { x: '2001', y: 84 },
  { x: '2002', y: 79 },
  { x: '2003', y: 73 },
  { x: '2004', y: 79 },
  { x: '2005', y: 90 },
  { x: '2006', y: 79 },
  { x: '2007', y: 84 },
  { x: '2008', y: 84 },
  { x: '2009', y: 79 },
  { x: '2010', y: 73 },
  { x: '2011', y: 79 },
  { x: '2012', y: 90 },
  { x: '2013', y: 79 },
  { x: '2014', y: 84 },
  { x: '2015', y: 84 },
  { x: '2016', y: 79 },
  { x: '2017', y: 73 },
  { x: '2018', y: 79 },
]

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

const Plot = ({ title = '', year }) => {
  const averages = getAverages(mockData)
  // TO DO: adjust these hardcoded dimensions
  return (
    <Box>
      <Box background='white' border={{ color: 'kelp' }} height='5em'>
        <ResponsiveLine
          {...commonProperties}
          axisLeft={{
            orient: 'left',
            legend: 'Temp',
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
              id: 'Average',
              data: averages,
            },
            {
              id: 'Temperature',
              data: mockData,
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
