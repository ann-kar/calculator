# A Tested Calculator

A JavaScript app handling basic calculator functions (addition, subtraction, multiplication, division), complete with ten test suites written in Jest.

## Built with:
**HTML5 / CSS3 /	JavaScript (ES6) /	Jest /	Webpack / Babel / ESLint**

## Motivation
The project was an assignment during the web development course organized by INCO Academy. The tutors provided main guidelines and a list of required features, but the design, the logic & the actual tests were up to us.
Main focus: an exercise in writing tests in Jest & teamwork (pair project). 

## How to use? 
Download the repo to:
- open: dist/index.html
- run tests: npm run tests
- edit .js files at will and create a new build with: npm run build

## Screenshots

[![calculator.png](https://i.postimg.cc/4Nn8LqGx/calculator.png)](https://postimg.cc/8jQBsys2)

## Structure & features 

```
├── dist                              # Compiled files
│   ├── index.html
│   ├── main.js  
├── node modules                   
├── src                    
│   ├── __tests__                     # Unit tests for individual actions & inputs, integration tests for operations
│   │   ├── sum.test.js
│   │   ├── subtraction.test.js
│   │   ├── multiplication.test.js
│   │   ├── division.test.js
│   │   ├── inputDigit.test.js
│   │   ├── inputDecimal.test.js
│   │   ├── handleOperator.test.js
│   │   ├── clear_.test.js
│   │   ├── updateScreen.test.js
│   │   ├── operations.test.js
│   ├── styles
│   │   ├── main.css
│   │   ├── media.css
│   │   ├── reset.css
│   │   ├── root.css
│   ├── index.js           
│   ├── actions.js         # Functions for addition, subtraction, multiplication, division
│   ├── calculator.js      # The calculator object, its properties, functions handling calculator logic
│   ├── jest.config.js     # Jest configuration
├── .babelrc                  
├── webpack.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

```

## Challenges & Surprises

**1. 0.1 + 0.2 =/= 0.3**

…according to Jest. That came as a surprise! Forced to do more reading on floats, I accepted the peculiarities of decimal conversion and duly replaced my “.toBe” tests with “.toBeCloseTo”.

**2. Node.js knows no “import”, browser-side JS knows no “require”**

We wanted to have many small .js files in the project for structure clarity, so I installed webpack to use ES modules. Little did I know that Jest, being a back-end library, will refuse to process any files containing the word “import”. It took me a while to find the solution… whose name – as it turned out – was babel. Babel, the universal translator of code, which has a special plugin that translates ES modules to CommonJS modules. Hurray.

**3. Negative zero.**

A quirky JS feature that appears to have a meaning when we’re computing Infinities… But what WE wanted to handle were ordinary numbers. Negative numbers. And it wasn’t fun to see that: 
0 * -8 = -0. 
Luckily, baffling as it was, it was also easy to fix.

## Current status

Version 1.0 completed. 

## Possible further development
-	tests for EventListeners
-	a more elegant handling of repeating decimals
-	a 2.0 version that takes into account operation precedence

