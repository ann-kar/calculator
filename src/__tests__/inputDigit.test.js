import calcFn from '../calculator';

test('calling the function inputDigit() with 1, 2 or 3 updates calculator.screen when empty', () => {
  calcFn.inputDigit('1');
  expect(calcFn.calculator).toHaveProperty('screen', '1');
  calcFn.inputDigit('2');
  expect(calcFn.calculator).toHaveProperty('screen', '12');
  calcFn.inputDigit('3');
  expect(calcFn.calculator).toHaveProperty('screen', '123');
});

test('calling the function inputDigit() with 4, 5 or 6 updates calculator when not empty', () => {
  calcFn.calculator.screen = '24';
  calcFn.calculator.waitingForSecondValue = true;
  calcFn.inputDigit('4');
  expect(calcFn.calculator).toHaveProperty('screen', '4');
  calcFn.inputDigit('5');
  expect(calcFn.calculator).toHaveProperty('screen', '45');
  calcFn.inputDigit('6');
  expect(calcFn.calculator).toHaveProperty('screen', '456');
});
