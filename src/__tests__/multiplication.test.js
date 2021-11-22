const actions = require('../actions');

test('multiplicate 1 * 1 to equal 1', () => {
  expect(actions.multi(1, 1)).toBe(1);
});

test('multiplicate -1 * 1 to equal -1', () => {
  expect(actions.multi(-1, 1)).toBe(-1);
});

test('multiplicate -1 * -1 to equal 1', () => {
  expect(actions.multi(-1, -1)).toBe(1);
});

test('multiplicate 0 * 1 to equal 0', () => {
  expect(actions.multi(0, 1)).toBe(0);
});

test('multiplicate -1 * 0 to equal 0', () => {
  expect(actions.multi(-1, 0)).toBe(0);
});

test('multiplicate 0.5 * 0.5 to equal 0.25', () => {
  expect(actions.multi(0.5, 0.5)).toBe(0.25);
});
