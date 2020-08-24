import React from 'react'
import { Box } from 'grommet'
import { Line } from '@nivo/line'

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
	width: 400,
	height: 200,
	margin: {
		top: 20,
		right: 20,
		bottom: 60,
		left: 80
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

export default function Plot() {
	const averages = getAverages(mockData)

	return (
		<div>
			<Box width='5em' height='5em'>
				<Line
					{...commonProperties}
					axisLeft={{
						orient: 'left',
						legend: 'temperature',
						legendOffset: -40,
						legendPosition: 'middle',
						tickValues: 5
					}}
					yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false }}
					axisBottom={{
           	orient: 'bottom',
						legend: 'time',
						legendOffset: 36,
						legendPosition: 'middle'
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
				/>
			</Box>
		</div>
	)
}