import { config } from '../config'

async function getSubjects(coordinates) {
  try {
    const { northEast, southWest } = coordinates
    const minLat = southWest.lat
    const maxLat = northEast.lat
    const minLon = southWest.lng
    const maxLon = northEast.lng
    const endpoint = `${config.dbEndpoint}/subjects?minLat=${minLat}&minLon=${minLon}&maxLat=${maxLat}&maxLon=${maxLon}`
    const response = await fetch(endpoint)
      .then(response => {
        if (response.status === 500) {
          return { statusCode: 500, title: 'Error connecting to database' }
        }
        if (response.status === 422) {
          return { statusCode: 422, title: 'Missing one of parameters: minLat, maxLat, minLon, maxLon' }
        }
        if (response.ok) return response.json()
      })
      .then(data => data)
    return response
  } catch (error) {
    console.error(error)
  }
}

export { getSubjects }
