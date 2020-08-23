import React from 'react'
import { Box } from 'grommet'
import { Line } from '@nivo/line'

function getAverages() {
	
}

const commonProperties = {
	width: 900,
	height: 400,
	margin: { top: 20, right: 20, bottom: 60, left: 80 },
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

export default function Plot() {
	const average = getAverages(mockData)
	
	return (
		<div>
			<Box width='5em' height='5em'>
				<Line
					{...commonProperties}
					isInteractive={false}
					axisLeft={{
            orient: 'left',
						legend: 'temperature',
						legendOffset: -40,
						legendPosition: 'middle'
					}}
					axisBottom={{
            orient: 'bottom',
						legend: 'time',
						legendOffset: 36,
            legendPosition: 'middle'
					}}
					data={[
						{
							id: 'bing bong land',
							data: [
								{ x: '1980', y: 60 },
								{ x: '1985', y: 65 },
								{ x: '1990', y: 62 },
								{ x: '1995', y: 64 },
								{ x: '2000', y: 69 },
								{ x: '2005', y: 63 },
								{ x: '2010', y: 77 },
								{ x: '2015', y: 79 },
								{ x: '2020', y: 84 },
							]
						},
						{
							id: 'fake corp. B',
							data: mockData,
						},
					]}
				/>
			</Box>
		</div>
	)
}