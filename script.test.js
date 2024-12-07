const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require('./script.js')

test('Capitalizer:', () => {
  expect(capitalize('test')).toBe('Test')
})

test('Reverser:', () => {
  expect(reverseString('test')).toBe('tset')
})

test('Calculator add:', () => {
  expect(calculator().add(1, 2)).toBe(3)
})

test('Calculator substract:', () => {
  expect(calculator().substract(1, 2)).toBe(-1)
})

test('Calculator divide:', () => {
  expect(calculator().divide(1, 2)).toBe(0.5)
})

test('Calculator multiply:', () => {
  expect(calculator().multiply(1, 2)).toBe(2)
})

test('Caesar Cipher:', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})

test('Array Analyzer:', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  })
})
