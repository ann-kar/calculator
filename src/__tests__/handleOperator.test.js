const fs = require('fs');

import calcFn from '../calculator';
import clickHandler from '../index';

const data = fs.readFileSync(`${__dirname}/../../dist/index.html`, 'utf8');
document.body.innerHTML = data;

test('button "+" has data-action attribute "add"', () => {

    const addOperator = document.querySelector('input[value="+"]');
    expect(addOperator.getAttribute('data-action')).toBe('add');

});

test('calling handleOperator("add") updates operator in the calculator object', () => {

    calcFn.calculator.operator = null;
    calcFn.handleOperator('add');
    expect(calcFn.calculator).toHaveProperty('operator', 'add');

});

test('button "-" has data-action attribute "subtract"', () => {
    
    const subOperator = document.querySelector("input[value='–']");
    console.log('subtraction op', subOperator.value);
    expect(subOperator.getAttribute('data-action')).toBe('subtract');

});

test('calling handleOperator("subtract") updates operator in the calculator object', () => {

    calcFn.calculator.operator = null;
    calcFn.handleOperator('subtract');
    expect(calcFn.calculator).toHaveProperty('operator', 'subtract');

});

test('button "*" has data-action attribute "multiply"', () => {

    const multiOperator = document.querySelector(`input[value='×']`);
    expect(multiOperator.getAttribute('data-action')).toBe('multiply');

});

test('calling handleOperator("multiply") updates operator in the calculator object', () => {

    calcFn.calculator.operator = null;
    calcFn.handleOperator('multiply');
    expect(calcFn.calculator).toHaveProperty('operator', 'multiply');

});

test('button "/" has data-action attribute "divide"', () => {

    const addOperator = document.querySelector('input[value="/"]');
    expect(addOperator.getAttribute('data-action')).toBe('divide');

});

test('calling handleOperator("divide") updates operator in the calculator object', () => {

    calcFn.calculator.operator = null;
    calcFn.handleOperator('divide');
    expect(calcFn.calculator).toHaveProperty('operator', 'divide');

});




