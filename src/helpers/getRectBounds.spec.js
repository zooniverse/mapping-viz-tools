import getRectBounds, { getAspectSize } from './getRectBounds'

let mockCoords = { lat: 100, lon: 100 }

const mapRef = {
  current: {
    leafletElement: {
      layerPointToLatLng: () => mockCoords
    }
  }
}

describe('Helper > getRectBounds', function () {
  describe('with valid input', function () {
    it('should return valid coordinates', function () {
      const validRect = { width: 100, height: 100 }
      const result = getRectBounds(mapRef, validRect)
      const expectation = {
        northEast: mockCoords,
        southWest: mockCoords,
        height: '100%',
        width: '100%'
      }
      expect(result).toEqual(expectation)
    })
  })
})

describe('Helper > getAspectSize', function () {
  it('should return a full height with a smaller width', function () {
    const tallRect = { height: 100, width: 50 }
    const result = getAspectSize(tallRect)
    const expectation = { height:  '100%', width: '50%' }
    expect(result).toEqual(expectation)
  })

  it('should return a full width with a smaller height', function () {
    const wideRect = { height: 50, width: 100 }
    const result = getAspectSize(wideRect)
    const expectation = { height:  '50%', width: '100%' }
    expect(result).toEqual(expectation)
  })
})