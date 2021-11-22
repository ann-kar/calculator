const actions = require('../actions');

test('add 1 + 1 to equal 2', () => {
  expect(actions.sum(1, 1)).toBe(2);
});

test('add -1 + 1 to equal 0', () => {
  expect(actions.sum(-1, 1)).toBe(0);
});

test('add -1 + -1 to equal -2', () => {
  expect(actions.sum(-1, -1)).toBe(-2);
});

test('add -1 + 2 to equal 1', () => {
  expect(actions.sum(-1, 2)).toBe(1);
});

test('add 0.5 + 2 to equal 2.5', () => {
  expect(actions.sum(0.5, 2)).toBe(2.5);
});

test('add 0.5 + 0.5 to equal 1', () => {
  expect(actions.sum(0.5, 0.5)).toBe(1);
})
