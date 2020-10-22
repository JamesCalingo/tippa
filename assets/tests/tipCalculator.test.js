const { expect } = require('@jest/globals')
const { string } = require('yargs')
const getRoomcode = require('../js/tipCalculator')
test ('calculates proper tip', () =>{
  expect(calculateTip(10.00, 15, 1)).toBe(1.50)
})