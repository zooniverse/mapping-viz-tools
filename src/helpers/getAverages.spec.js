import getAverages from './getAverages'

describe('Helper > getAverages', function () {
  it('should return an empty string without data', function () {
    const result = getAverages()
    expect(result).toStrictEqual([])
  })

  it('should return the correct averages', function () {
    const input = [
      { x: 0, y: 0 },
      { x: 0, y: 100 },
      { x: 0, y: 100 },
      { x: 0, y: 100 },
    ]
    const expectation = [
      { x: 0, y: 0 },
      { x: 0, y: 50 },
      { x: 0, y: 66.67 },
      { x: 0, y: 75 },
    ]
    const result = getAverages(input)
    expect(result).toStrictEqual(expectation)
  })
})