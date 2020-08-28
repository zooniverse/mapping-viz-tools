export default function getAverages(data = []) {
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