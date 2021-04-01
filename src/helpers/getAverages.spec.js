import getAverages from './getAverages'

describe('Helper > getAverages', () => {
  const mockData = [
    { x: 2006, y: '2.144' },
    { x: 2004, y: '4.6721' },
    { x: 2005, y: '3.8967' },
    { x: 2005, y: '5.1372' },
    { x: 2008, y: '1.9937' },
    { x: 2007, y: '2.3625' },
    { x: 2006, y: '1.3945' },
    { x: 2004, y: '7.0671' },
    { x: 2003, y: '4.1056' },
    { x: 2006, y: '0.0002' },
    { x: 2006, y: '1.7695' },
    { x: 2004, y: '7.0399' },
    { x: 2001, y: '0.2366' },
    { x: 2002, y: '2.8216' },
    { x: 2006, y: '0.6754' },
    { x: 2005, y: '0.6009' },
    { x: 1999, y: '1.2891' },
  ]

  const expectedAverages = [
    { x: 1999, y: 1.2891 },
    { x: 2001, y: 0.2366 },
    { x: 2002, y: 2.8216 },
    { x: 2003, y: 4.1056 },
    { x: 2004, y: 6.2597 },
    { x: 2005, y: 3.2115999999999993 },
    { x: 2006, y: 1.19672 },
    { x: 2007, y: 2.3625 },
    { x: 2008, y: 1.9937 },
  ]

  it('should return an empty string without data', () => {
    const result = getAverages()
    expect(result).toStrictEqual([])
  })

  it('should return an array of averages grouped by year', () => {
    const result = getAverages(mockData)
    expect(result).toEqual(expectedAverages)
  })
})
