import { mean } from 'lodash'

export default function getAverage(data = [], years = []) {
  // create a map keeping track of years with data

  const yearMap = years.reduce((acc, current) => {
    acc[current] = null
    return acc
  }, {})

  data.forEach(subject => {
    if (!yearMap[subject.x]) yearMap[subject.x] = [parseFloat(subject.y)]
    else yearMap[subject.x].push(parseFloat(subject.y))
  })

  const yearKeys = Object.keys(yearMap)
  const averages = yearKeys.reduce((acc, current) => {
		const average = yearMap[current] ? mean(yearMap[current]) : null
    acc.push({ x: parseInt(current), y: average })
    return acc
  }, [])

  return averages
}
