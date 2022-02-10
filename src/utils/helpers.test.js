import { isOdd } from './helpers'

describe('helpers', () => {
  describe('isOdd', () => {
    it('return false', () => {
      expect(isOdd(2)).toEqual(false)
    })

    it('return true', () => {
      expect(isOdd(5)).toEqual(true)
    })
  })
})
