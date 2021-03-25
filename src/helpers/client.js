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
      .then(response => response.json())
      .then(data => data)
    return response
  } catch (error) {
    console.log(error)
  }
}

export { getSubjects }
// mapping-viz-functions returns 422 if missing any coordinate parameters
// responds with 500 if database error
// could check response is okay in a 200 range
