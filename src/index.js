// const actions = require('./actions');


document.addEventListener('DOMContentLoaded', function () {

  const calculator = {
  displayValue: "0",
  firstActionOperand: null,
  waitingForSecondOperand: false,
  operator: null
  
}

function updateDisplay() {
  const displayResult = document.querySelector('[data-result]')
  displayResult.value = calculator.displayValue
};

function clear() {
  const displayResult = document.querySelector('[data-result]')
  displayResult.value = calculator.displayValue = ""
};

const buttonClear = document.querySelector('[data-clear]')

buttonClear.addEventListener('click', (e) =>{
  clear()
});


});

