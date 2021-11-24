// const actions = require('./actions');
document.addEventListener('DOMContentLoaded', function () {


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
  screen: "0",
  firstValue: null,
  waitingForSecondValue: false,
  operator: null
}

function inputDigit(digit) {
  if (calculator.waitingForSecondValue === true) {
    calculator.screen = digit
    calculator.waitingForSecondValue = false
  } else {

  if (calculator.screen === '0') {
    calculator.screen = digit
  } else {
    calculator.screen = calculator.screen + digit
  }
  }
  console.log(calculator)
}

function inputDecimal(dot){
  if (!calculator.screen.includes('.')) {
    calculator.screen += dot 
  }
}

function handleOperator(clickOperator) {
  const inputValue = parseFloat(calculator.screen)
  if (calculator.firstValue === null && !isNaN(inputValue)) {
    calculator.firstValue = inputValue
  } 
  calculator.waitingForSecondValue = true
  calculator.operator = clickOperator
  console.log(calculator)
}

function updateScreen() {
  const display = document.querySelector('.result')
  display.value = calculator.screen
} 

updateScreen()

const calc = document.querySelector('.calc-cnt')
const keys = calc.querySelector('tbody')

keys.addEventListener('click', (e) => {
  if (!e.target.matches('input[type="button"]')) {
    return
  }
  
  const key = e.target
  const action = key.dataset.action
  if (action) {
    handleOperator(key.value);
    updateScreen();
  }
  
  if (!action) {
    inputDigit(key.value);
    updateScreen();
  }

  if (key.dataset.action === 'decimal') {
    inputDecimal(key.value)
    updateScreen()
  }

  if (key.dataset.action==='clear') {
    console.log('clear')
  }
})

// const calculator = document.querySelector('.calc-cnt')
// const keys = calculator.querySelector('tbody')
// const display = document.querySelector('.result')

// function clear() {
//   display.value = ""
//   delete calculator.dataset.previousKeyType
// };

// keys.addEventListener('click', (e) => {
//   if (e.target.matches('input[type="button"]')) {
//     const key = e.target
//     const action = key.dataset.action
//     const keyContent = key.value
//     const displayNum = display.value
//     const previousKeyType = calculator.dataset.previousKeyType

//     if (!action) {
//       if (displayNum === "" || previousKeyType === 'operator') {
//           display.value = keyContent
//       } else {
//         display.value = displayNum + keyContent
//       }
//       calculator.dataset.previousKeyType = 'number'
//     } 

//     if (action === 'add' || action === "divide" || action === "multi" || action === "substraction") {
//       calculator.dataset.previousKeyType = 'operator'
//       calculator.dataset.firstValue = displayNum
//       calculator.dataset.operator = action
      
//     }
    
//     if (action === "decimal") {
//       if (!displayNum.includes(".")){
//         display.value = displayNum + "."
//       } else if (previousKeyType === 'operator'){
//         display.value = "0."

//       }
//       calculator.dataset.previousKeyType = 'decimal'
      
//     }

//     if (action === "clear") {
//       clear()
//       calculator.dataset.previousKeyType = 'clear'
//     }

//     if (action === "equals") {
//       const secondValue = parseFloat(displayNum)
//       const firstValue = parseFloat(calculator.dataset.firstValue)
//       const operator = calculator.dataset.operator
      

//       if (operator === "add") {
//         display.value = sum(firstValue, secondValue)
//       }

//       if (operator === "multi") {
//         display.value = multi(firstValue, secondValue)
//       }
      
//       if (operator === "divide") {
//         display.value = div(firstValue, secondValue)
//       }

//       if (operator === "substraction") {
//         display.value = sub(firstValue, secondValue)
//       }
            
//     }

//     calculator.dataset.previousKeyType = 'equals'

//   }

// });


});

