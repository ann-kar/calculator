import calcFn from '../calculator'
const fs = require('fs')

test('updates calculator display with calculator.screen property', () =>{
  const data = fs.readFileSync('/home/elzbieta/INCODE_kurs/zadanie7_Nasa_calculator/exercise-7-nasa-calculator-kosmiczne-rachunki/dist/index.html', 'utf8')
  document.body.innerHTML = data;
  const display = document.querySelector('.result')
  const calculator = calcFn.calculator
  calculator.screen = '3'
  calcFn.updateScreen()
  expect(display.value).toEqual('3')
})