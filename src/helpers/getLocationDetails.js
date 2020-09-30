export default function getLocationDetails(location, type = 'lat') {
  let direction = type === 'lat' ? 'S' : 'W'
  if (location > 0) {
    direction = type === 'lat' ? 'N' : 'E'
  }

  location = Math.abs(location)
  let [degrees, minutes] = location.toString().split('.')
  minutes = minutes.substr(0,2)
  return { degrees, direction, minutes }
}