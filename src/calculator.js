import actions from './actions';

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
    let result = 0;
    switch (calculator.operator) {
      case 'add':
        result = actions.sum(calculator.firstValue, inputValue);
        break;
      case 'substraction':
        result = actions.sub(calculator.firstValue, inputValue);
        break;
      case 'multi':
        result = actions.multi(calculator.firstValue, inputValue);
        break;
      case 'divide':
        result = actions.div(calculator.firstValue, inputValue);
        break;
      default:
    }
    calculator.screen = String(result);
    calculator.firstValue = result;
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
  // console.log(calculator);
}

function updateScreen() {
  const display = document.querySelector('.result');
  display.value = calculator.screen;
}

// updateScreen();

const calcFn = {
  calculator,
  inputDigit,
  inputDecimal,
  handleOperator,
  clear,
  updateScreen,
};

export default calcFn;
