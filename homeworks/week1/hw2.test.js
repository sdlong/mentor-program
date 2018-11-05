import {capitalize} from './hw2'

describe("hw2", () => {
  it("should return correct answer when str = nick", () => {
    expect(capitalize('nick')).toBe('Nick')
  })
  it("should return correct answer when str = will", () => {
    expect(capitalize('will')).toBe('Will')
  })
  it("should return correct answer when str = ,sam", () => {
    expect(capitalize(',sam')).toBe(',sam')
  })
})
