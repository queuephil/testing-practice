function capitalize(string) {
  array = string.split('')
  array[0] = array[0].toUpperCase()
  return array.join('')
}
function reverseString(string) {
  array = string.split('')
  array = array.reverse()
  return array.join('')
}
const calculator = (a, b) => {
  return {
    add(a, b) {
      return a + b
    },
    substract(a, b) {
      return a - b
    },
    divide(a, b) {
      return a / b
    },
    multiply(a, b) {
      return a * b
    },
  }
}
function caesarCipher(string, shiftFactor) {
  array = string.split('').map((letter) => {
    l = letter.charCodeAt(0)
    if (65 <= l && l <= 90) {
      return l + shiftFactor <= 90 ? l + shiftFactor : l - 26 + 1
    }
    if (97 <= l && l <= 122) {
      return l + shiftFactor <= 122 ? l + shiftFactor : l - 26 + 1
    }
    return l
  })

  return String.fromCharCode(...array)
}
function analyzeArray(array) {
  const sum = array.reduce((acc, val) => acc + val, 0)

  return {
    average: sum / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  }
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
}
