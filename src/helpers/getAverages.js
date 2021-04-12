import { mean } from 'lodash'

export default function getAverage(data = []) {
  let yearMap = {}

  data.forEach(subject => {
    if (!yearMap[subject.x]) yearMap[subject.x] = [parseFloat(subject.y)]
    else yearMap[subject.x].push(parseFloat(subject.y))
  })

  const yearKeys = Object.keys(yearMap)
  const averages = yearKeys.reduce((acc, current) => {
		const average = mean(yearMap[current])
    acc.push({ x: parseInt(current), y: average })
    return acc
  }, [])

  return averages
}
