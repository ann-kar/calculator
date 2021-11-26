import actions from '../actions';

test('divide 6 / 0 throws error: You cannot divide by zero', () => {
  function divByZero() {
    actions.div(6, 0);
  }
  expect(divByZero).toThrowError('You cannot divide by zero');
});

test('divide -6 / 0 throws error: You cannot divide by zero', () => {
  function divByZero() {
    actions.div(-6, 0);
  }
  expect(divByZero).toThrowError('You cannot divide by zero');
});

test('divide 6 / 3 equals 2', () => {
  expect(actions.div(6, 3)).toBe(2);
});

test('divide 2 / 6 equals 0.(3)', () => {
  expect(actions.div(2, 6)).toBeCloseTo(0.3333333333, 10);
});

test('divide -6 / 3 equals -2', () => {
  expect(actions.div(-6, 3)).toBe(-2);
});

test('divide 2 / -6 equals equals -0.(3)', () => {
  expect(actions.div(2, -6)).toBeCloseTo(-0.3333333333, 10);
});

test('divide -2 / -6 equals equals 0.(3)', () => {
  expect(actions.div(-2, -6)).toBeCloseTo(0.3333333333, 10);
});

test('divide 6 / 0.3 equals 20', () => {
  expect(actions.div(6, 0.3)).toBe(20);
});

test('divide 0.6 / 3 equals 0.2', () => {
  expect(actions.div(0.6, 3)).toBeCloseTo(0.2, 1);
});

test('divide 0.6 / 0.3 equals 2', () => {
  expect(actions.div(0.6, 0.3)).toBe(2);
});

test('divide -6 / 0.3 equals -20', () => {
  expect(actions.div(-6, 0.3)).toBe(-20);
});

test('divide 0.6 / -3 equals -0.2', () => {
  expect(actions.div(0.6, -3)).toBeCloseTo(-0.2, 1);
});

test('divide -0.6 / -0.3 equals 2', () => {
  expect(actions.div(0.6, 0.3)).toBe(2);
});
