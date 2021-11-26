import calcFn from './calculator';

document.addEventListener('DOMContentLoaded', () => {
  const calc = document.querySelector('.calc-cnt');
  const keys = calc.querySelector('tbody');

  keys.addEventListener('click', (e) => {
    if (!e.target.matches('input[type="button"]')) {
      return;
    }

    const key = e.target;
    const { action } = key.dataset;
    const { number } = key.dataset;
    const { decimal } = key.dataset;
    const { clear } = key.dataset;
    const { equals } = key.dataset;

    if (action) {
      calcFn.handleOperator(key.dataset.action);
      calcFn.updateScreen();
      return;
    }

    if (number) {
      calcFn.inputDigit(key.value);
      calcFn.updateScreen();
      return;
    }

    if (decimal) {
      calcFn.inputDecimal(key.value);
      calcFn.updateScreen();
      return;
    }

    if (clear) {
      calcFn.clear();
      calcFn.updateScreen();
      return;
    }

    if (equals) {
      calcFn.handleOperator(equals);
      calcFn.updateScreen();
    }
  });
});
