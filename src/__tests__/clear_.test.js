import calcFn from '../calculator';

test('clear the properties of the calculator to the begining state', () => {
  const { calculator } = calcFn;
  calcFn.clear();
  expect(calculator).toHaveProperty('screen', '0');
  expect(calculator).toHaveProperty('firstValue', null);
  expect(calculator.waitingForSecondValue).toBeFalsy();
  expect(calculator).toHaveProperty('operator', null);
});
