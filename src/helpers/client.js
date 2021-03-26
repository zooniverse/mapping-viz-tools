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
    if (!response.ok) {
      throw response
    }
    return response.json()
  } catch (error) {
    console.error(error)
    // UI error response handling to be added
  }
}

export { getSubjects }
