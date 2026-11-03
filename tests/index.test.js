// tests/index.test.js
const ( sumar ) = require('../src/index');

test('sumar function should return the sum of two numbers', () => {
  const a = 5;
  const b = 3;
  const expectedSum = 8;
  expect(sumar(a, b)).toBe(expectedSum);
});

const ( restar ) = require('../src/index');
test('restar function should return the difference of two numbers', () => {
  const a = 5;
  const b = 3;
  const expectedDifference = 2;
  expect(restar(a, b)).toBe(expectedDifference);
});