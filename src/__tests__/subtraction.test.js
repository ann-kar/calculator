const actions = require('../actions');

test('subtract 3 - 1 equals 2', () => {
  expect(actions.sub(3, 1)).toBe(2);
});

test('subtract 3 - 3 equals 0', () => {
  expect(actions.sub(3, 3)).toBe(0);
});

test('subtract 1 - 3 equals -2', () => {
  expect(actions.sub(1, 3)).toBe(-2);
});

test('subtract -1 - 3 equals -4', () => {
  expect(actions.sub(-1, 3)).toBe(-4);
});

test('subtract -3 - (-1) equals -2', () => {
  expect(actions.sub(-3, -1)).toBe(-2);
});

test('subtract 0.3 - 0.2 equals 0.1', () => {
  expect(actions.sub(0.3, 0.2)).toBeCloseTo(0.1, 1);
});

test('subtract 0.03 - 0.002 equals 0.028', () => {
  expect(actions.sub(0.03, 0.002)).toBeCloseTo(0.028, 3);
});

test('subtract 0.1 - 0.1 equals 0', () => {
  expect(actions.sub(0.1, 0.1)).toBe(0);
});

test('subtract 0.1 - 0.3 equals -0.2', () => {
  expect(actions.sub(0.1, 0.3)).toBeCloseTo(-0.2, 2);
});

test('subtract 0.001 - 0.03 equals -0.029', () => {
  expect(actions.sub(0.001, 0.03)).toBeCloseTo(-0.029, 3);
});

test('subtract -0.1 - 0.3 equals -0.4', () => {
  expect(actions.sub(-0.1, 0.3)).toBeCloseTo(-0.4, 1);
});

test('subtract -0.3 - (-0.1) equals -0.2', () => {
  expect(actions.sub(-0.3, -0.1)).toBeCloseTo(-0.2, 1);
});
