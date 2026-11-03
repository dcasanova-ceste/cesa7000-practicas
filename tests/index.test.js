// tests/index.test.js
const ( greet ) = require('../src/index');

test('greet function should return a greeting message', () => {
  const name = 'Diana';
  const expectedGreeting = `Hello, ${name}!`;
  expect(greet(name)).toBe(expectedGreeting);
});