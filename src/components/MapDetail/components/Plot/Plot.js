import React from 'react'
import { Box } from 'grommet'
import { Line, ResponsiveLine } from '@nivo/line'

function getAverages(data) {
	let pos = 0
	let total = 0

	return data.map(datum => {
		total += datum.y
		pos += 1
		return {
			x: datum.x,
			y: Math.round((total / pos) * 100) / 100 
		}
	})
}

const commonProperties = {
	margin: {
		top: 5,
		right: 12,
		bottom: 24,
		left: 25
	}
}

const mockData = [
	{ x: '1980', y: 70 },
	{ x: '1985', y: 75 },
	{ x: '1990', y: 72 },
	{ x: '1995', y: 74 },
	{ x: '2000', y: 79 },
	{ x: '2005', y: 83 },
	{ x: '2010', y: 77 },
	{ x: '2015', y: 79 },
	{ x: '2020', y: 84 },
]

const years = ['1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015', '2020']

const theme = {
	fontSize: 8,
	axis: {
		legend: {
			text: {
				fontSize: 8
			}
		}
	}
};

export default function Plot() {
	const averages = getAverages(mockData)

	return (
		<div>
			<Box background='white' border={{ color: 'kelp' }} width='100%' height='5em'>
				<ResponsiveLine
					{...commonProperties}
					axisLeft={{
						orient: 'left',
						legend: 'temp',
						legendOffset: -20,
						legendPosition: 'middle',
						tickSize: 0,
						tickValues: 4
					}}
					yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false }}
					yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false }}
					axisBottom={{
						orient: 'bottom',
						legend: 'time',
						legendOffset: 18,
						legendPosition: 'middle',
						tickSize: 0,
						tickValues: ['1980', '2000', '2020']
					}}
					data={[
						{
							id: 'Average',
							data: averages
						},
						{
							id: 'Temperature',
							data: mockData,
						},
					]}
					theme={theme}
				/>
			</Box>
		</div>
	)
}