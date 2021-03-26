function getDistance(lat1, lng1, lat2, lng2) {
  const r = 6371.0 // approx. radius of earth in km
  const lat1Radians = (lat1 * Math.PI) / 180.0
  const lng1Radians = (lng1 * Math.PI) / 180.0
  const lat2Radians = (lat2 * Math.PI) / 180.0
  const lng2Radians = (lng2 * Math.PI) / 180.0
  const radianDiff = lng2Radians - lng1Radians
  const d = r * Math.acos(Math.cos(lat1Radians) * Math.cos(lat2Radians) * Math.cos(radianDiff) + (Math.sin(lat1Radians) * Math.sin(lat2Radians)))
  return d
}

function getAreaSquared(lat1, lng1, lat2, lng2) {
  const height = getDistance(lat1, lng1, lat2, lng1)
  const width = getDistance(lat1, lng1, lat1, lng2)
  return (height * width).toFixed()
}

function getArea(coordinates) {
  const { northEast, southWest } = coordinates
  const kms = getAreaSquared(northEast.lat, northEast.lng, southWest.lat, southWest.lng)
  const miles = (kms * 0.621371).toFixed() // conversion factor
  return { kms, miles }
}

function getLocationDetails(location, type = 'lat') {
  let direction = type === 'lat' ? 'S' : 'W'
  if (location > 0) {
    direction = type === 'lat' ? 'N' : 'E'
  }

  let [degrees, minutes] = location.toString().split('.')
  minutes = minutes.substr(0,2)
  return { degrees, direction, minutes }
}

export {
  getArea,
  getLocationDetails
}