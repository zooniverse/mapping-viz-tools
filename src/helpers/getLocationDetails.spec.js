import { getArea, getLocationDetails } from './getLocationDetails'

describe('Helper > getArea', () => {
  const defaultCoords = {
    northEast: {
      lat: -51.4,
      lng: -59.5,
    },
    southWest: {
      lat: -52,
      lng: -60.7,
    },
    height: '100%',
    width: '100%',
  }

  const expectedArea = {
    kms: "5554",
    miles: "3451",
  }

  it('should return the correct area', () => {
    const coordinates = defaultCoords
    const result = getArea(coordinates)
    expect(result).toEqual(expectedArea)
  })
})

describe('Helper > getLocationDetails', () => {
  const defaultCenter = {
    lat: -51.8043230913624,
    lng: -59.428923446685076,
  }

  const expectedLatLocation = {
    degrees: '-51',
    direction: 'S',
    minutes: '80',
  }
  const expectedLngLocation = {
    degrees: '-59',
    direction: 'W',
    minutes: '42',
  }

  it('should return latitude in degrees, direction, and minutes', () => {
    const center = defaultCenter
    const result = getLocationDetails(center.lat, 'lat')
    expect(result).toEqual(expectedLatLocation)
  })

  it('should return longitude in degrees, direction, and minutes', () => {
    const center = defaultCenter
    const result = getLocationDetails(center.lng, 'lng')
    expect(result).toEqual(expectedLngLocation)
  })

  it('should return correct cardinal direction', () => {
    const negativeLat = -50.1234
    const positiveLat = 50.1234

    const negativeLng = -60.1234
    const positiveLng = 60.1234

    expect(getLocationDetails(negativeLat, 'lat').direction).toEqual('S')
    expect(getLocationDetails(positiveLat, 'lat').direction).toEqual('N')
    expect(getLocationDetails(negativeLng, 'lng').direction).toEqual('W')
    expect(getLocationDetails(positiveLng, 'lng').direction).toEqual('E')
  })
})
