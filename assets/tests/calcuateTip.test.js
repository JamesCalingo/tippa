const { expect } = require('@jest/globals')
const calculateTip = require('../js/calculateTip')
test ('calculates proper tip', () =>{
  expect(calculateTip(10.00, 15, 1)).toBe(1.50)
})