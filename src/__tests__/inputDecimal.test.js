import calcFn from '../calculator'
const fs = require('fs')


describe('inputDecimal testing', () => {
  test("updates calculator.screen with dot if the screen doesn't includes decimal point", () =>{
    const calculator = calcFn.calculator
    calculator.screen = '3'
    calcFn.inputDecimal('.')
    expect(calculator.screen).toEqual('3.')
    
  })

  test("updates claclulator.screen with '0.' if decimal clicked after clicking operator", () => {
    const calculator = calcFn.calculator
    calculator.waitingForSecondValue = true
    calcFn.inputDecimal('.')
    expect(calculator.screen).toEqual('0.')
  })

  test("doesn't updates claclulator.screen with dot if screen includes decimal point", () => {
    const calculator = calcFn.calculator
    calculator.screen = '0.3'
    calcFn.inputDecimal('.')
    expect(calculator.screen).toEqual('0.3')
  })

})


