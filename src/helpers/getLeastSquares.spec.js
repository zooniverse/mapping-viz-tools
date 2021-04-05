import getLeastSquares from './getLeastSquares'

describe('Helper > getLeastSquares', () => {
  const mockXValues = [
    2006,
    2004,
    2005,
    2005,
    2008,
    2007,
    2006,
    2004,
    2003,
    2006,
    2006,
    2004,
    2001,
    2002,
    2006,
    2005,
    1999,
  ]

  const mockYValues = [
    2.144,
    4.6721,
    3.8967,
    5.1372,
    1.9937,
    2.3625,
    1.3945,
    7.0671,
    4.1056,
    0.0002,
    1.7695,
    7.0399,
    0.2366,
    2.8216,
    0.6754,
    0.6009,
    1.2891,
  ]

  const expectedLeastSquares = [
    { x: 2006, y: 2.683305007152356 },
    { x: 2004, y: 2.81053819742516 },
    { x: 2005, y: 2.746921602288765 },
    { x: 2005, y: 2.746921602288765 },
    { x: 2008, y: 2.556071816879566 },
    { x: 2007, y: 2.619688412015961 },
    { x: 2006, y: 2.683305007152356 },
    { x: 2004, y: 2.81053819742516 },
    { x: 2003, y: 2.874154792561555 },
    { x: 2006, y: 2.683305007152356 },
    { x: 2006, y: 2.683305007152356 },
    { x: 2004, y: 2.81053819742516 },
    { x: 2001, y: 3.001387982834359 },
    { x: 2002, y: 2.93777138769795 },
    { x: 2006, y: 2.683305007152356 },
    { x: 2005, y: 2.746921602288765 },
    { x: 1999, y: 3.128621173107149 },
  ]

  it('should return an empty array without data', () => {
    const result = getLeastSquares()
    expect(result).toStrictEqual([[], []])
  })

  it('should calculate data points for a least squares regression line', () => {
    const result = getLeastSquares(mockXValues, mockYValues)
    expect(result).toStrictEqual(expectedLeastSquares)
  })
})
