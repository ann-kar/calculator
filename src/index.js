// import actions from './actions';

document.addEventListener('DOMContentLoaded', () => {
  function sum(a, b) {
    return a + b;
  }

  function sub(a, b) {
    return a - b;
  }

  function multi(a, b) {
    if (a === 0 || b === 0) {
      return 0;
    }

    return a * (b);
  }

  function div(a, b) {
    if (b === 0) {
      throw new Error('You cannot divide by zero');
    }
    return a / (b);
  }

  const calculator = {
    screen: '0',
    firstValue: null,
    waitingForSecondValue: false,
    operator: null,
  };

  function inputDigit(digit) {
    if (calculator.waitingForSecondValue === true) {
      calculator.screen = digit;
      calculator.waitingForSecondValue = false;
    } else if (calculator.screen === '0') {
      calculator.screen = digit;
    } else {
      calculator.screen += digit;
    }
    console.log(calculator);
  }

  function inputDecimal(dot) {
    if (calculator.waitingForSecondValue === true) {
      calculator.screen = '0.';
      calculator.waitingForSecondValue = false;
      return;
    }
    if (!calculator.screen.includes('.')) {
      calculator.screen += dot;
    }
  }

  function handleOperator(clickOperator) {
    const inputValue = parseFloat(calculator.screen);
    if (calculator.operator && calculator.waitingForSecondValue) {
      calculator.operator = clickOperator;
      console.log(calculator);
      return;
    }

    if (calculator.firstValue === null && !isNaN(inputValue)) {
      calculator.firstValue = inputValue;
    } else if (calculator.operator) {
      if (calculator.operator === 'add') {
        const result = sum(calculator.firstValue, inputValue);
        calculator.screen = String(result);
        calculator.firstValue = result;
      }
      if (calculator.operator === 'substraction') {
        const result = sub(calculator.firstValue, inputValue);
        calculator.screen = String(result);
        calculator.firstValue = result;
      }
      if (calculator.operator === 'multi') {
        const result = multi(calculator.firstValue, inputValue);
        calculator.screen = String(result);
        calculator.firstValue = result;
      }
      if (calculator.operator === 'divide') {
        const result = div(calculator.firstValue, inputValue);
        calculator.screen = String(result);
        calculator.firstValue = result;
      }
    }
    calculator.waitingForSecondValue = true;
    calculator.operator = clickOperator;
    console.log(calculator);
  }

  function clear() {
    calculator.screen = '0';
    calculator.firstValue = null;
    calculator.waitingForSecondValue = false;
    calculator.operator = null;
    console.log(calculator);
  }

  function updateScreen() {
    const display = document.querySelector('.result');
    display.value = calculator.screen;
  }

  updateScreen();

  const calc = document.querySelector('.calc-cnt');
  const keys = calc.querySelector('tbody');

  keys.addEventListener('click', (e) => {
    if (!e.target.matches('input[type="button"]')) {
      return;
    }

    const key = e.target;
    const { action } = key.dataset;
    const { number } = key.dataset;
    if (action) {
      handleOperator(key.dataset.action);
      updateScreen();
      return;
    }

    if (number) {
      inputDigit(key.value);
      updateScreen();
      return;
    }

    if (key.dataset.decimal) {
      inputDecimal(key.value);
      updateScreen();
      return;
    }

    if (key.dataset.clear) {
      clear();
      updateScreen();
      return;
    }

    if (key.dataset.equals) {
      handleOperator(key.dataset.action);
      updateScreen();
    }
  });
});



