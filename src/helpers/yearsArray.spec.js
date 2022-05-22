import yearsArray from './yearsArray'

describe('Helper > yearsArray', function () {
  describe('with valid input yearsArrayu(a, b)', function () {
    it('should populate and return an array with all whole numbers in order between a and b ', function () {
      const testArray = yearsArray(1000, 1005)
      const expectedReturn = [1000, 1001, 1002, 1003, 1004, 1005]
      expect(testArray).toEqual(expectedReturn)
    })
  })
})