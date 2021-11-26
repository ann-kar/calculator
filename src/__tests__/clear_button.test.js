const fs = require('fs');

// const calculator = require('../index')

describe('Click on clear button', () => {
  test('click on button clear clears the value of input result and calculator displayValue', () => {
    const data = fs.readFileSync(`${__dirname}/../index.html`, 'utf8');
    document.body.innerHTML = data;

    const clearBtn = document.querySelector('[data-clear]');
    const resultInp = document.querySelector('[data-result]');
    clearBtn.click();

    expect(resultInp.value).toEqual('');
    // expect(calculator.displayValue).toEqual("")
  });
});
