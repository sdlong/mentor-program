import {isPrime} from './hw3'

describe("hw3", () => {
  it("should return correct answer when n = 1", () => {
    expect(isPrime(1)).toBe(false)
  })
  it("should return correct answer when n = 2", () => {
    expect(isPrime(2)).toBe(true)
  })
  it("should return correct answer when n = 3", () => {
    expect(isPrime(3)).toBe(true)
  })
  it("should return correct answer when n = 5", () => {
    expect(isPrime(5)).toBe(true)
  })
  it("should return correct answer when n = 50", () => {
    expect(isPrime(50)).toBe(false)
  })
  it("should return correct answer when n = 31", () => {
    expect(isPrime(31)).toBe(true)
  })
})
