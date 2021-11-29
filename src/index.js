import calcFn from './calculator';
document.addEventListener('DOMContentLoaded', () => {
  const calc = document.querySelector('.calc-cnt');
  const keys = calc.querySelector('tbody');
  calcFn.updateScreen()

  keys.addEventListener('click', (e) => {
    if (!e.target.matches('input[type="button"]')) {
      return;
    }

    const key = e.target;
    const { action, number, decimal, clear, equals } = key.dataset;

    if (action) {
      calcFn.handleOperator(key.dataset.action);
    } else if (number) {
      calcFn.inputDigit(key.value);
    } else if (decimal) {
      calcFn.inputDecimal(key.value);
    } else if (clear) {
      calcFn.clear();
    } else if (equals) {
      calcFn.handleOperator(equals);
    }
    
    calcFn.updateScreen();
  });
});
