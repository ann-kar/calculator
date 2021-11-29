import calcFn from '../calculator';

beforeEach(() => {
    calcFn.calculator.screen = '0';
    calcFn.calculator.operator = null;
    calcFn.calculator.firstValue = null;
    calcFn.calculator.waitingForSecondValue = false;
});

test('input: 6 * 3', () => {

    calcFn.inputDigit('6');
    calcFn.handleOperator('*');
    calcFn.inputDigit('3');

    expect(calcFn.calculator).toHaveProperty('screen', '3');
    expect(calcFn.calculator).toHaveProperty('firstValue', 6);
    expect(calcFn.calculator).toHaveProperty('operator', '*');

});

test('input: 2 + 6', () => {
    calcFn.inputDigit('2');
    calcFn.handleOperator('+');
    calcFn.inputDigit('6');

    expect(calcFn.calculator).toHaveProperty('screen', '6');
    expect(calcFn.calculator).toHaveProperty('firstValue', 2);
    expect(calcFn.calculator).toHaveProperty('operator', '+');

});

test('input: 2 + 6 * 3', () => {

    calcFn.inputDigit('2');
    calcFn.handleOperator('+');
    calcFn.inputDigit('6');

    expect(calcFn.calculator).toHaveProperty('operator', '+');
    expect(calcFn.calculator).toHaveProperty('screen', '6');

    calcFn.handleOperator('*');
    calcFn.inputDigit('3');

    expect(calcFn.calculator).toHaveProperty('operator', '*');
    expect(calcFn.calculator).toHaveProperty('screen', '3');

});
