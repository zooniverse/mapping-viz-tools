import { config } from 'config'

async function getSubjects(coordinates) {
  const { northEast, southWest } = coordinates
  const minLat = southWest.lat
  const maxLat = northEast.lat
  const minLon = southWest.lng
  const maxLon = northEast.lng
  const endpoint = `${config.dbEndpoint}/subjects?minLat=${minLat}&minLon=${minLon}&maxLat=${maxLat}&maxLon=${maxLon}`
  const response = await fetch(endpoint)
    .then(response => response.json())
    .then(data => data);
  return response
}

export {
  getSubjects
}