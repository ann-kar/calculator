// const actions = require('./actions');

const calculator = {
  displayValue: "0",
  firstActionOperand: null,
  
}


function updateDisplay() {
  const displayResult = document.querySelector('[data-result]')
  displayResult.value = calculator.displayValue
}

updateDisplay()

function clear() {
  const displayResult = document.querySelector('[data-result]')
  displayResult.value = calculator.displayValue = ""
}

clear()

