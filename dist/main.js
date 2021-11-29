/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/actions.js":
/*!************************!*\
  !*** ./src/actions.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction sum(a, b) {\r\n  return a + b;\r\n}\r\n\r\nfunction sub(a, b) {\r\n  return a - b;\r\n}\r\n\r\nfunction multi(a, b) {\r\n  if (a === 0 || b === 0) {\r\n    return 0;\r\n  }\r\n\r\n  return a * (b);\r\n}\r\n\r\nfunction div(a, b) {\r\n  if (b === 0) {\r\n    throw new Error('You cannot divide by zero');\r\n  }\r\n  return a / (b);\r\n}\r\n\r\nconst actions = {\r\n  sum,\r\n  sub,\r\n  multi,\r\n  div,\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (actions);\r\n\n\n//# sourceURL=webpack://exercise-7-nasa-calculator-kosmiczne-rachunki/./src/actions.js?");

/***/ }),

/***/ "./src/calculator.js":
/*!***************************!*\
  !*** ./src/calculator.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./src/actions.js\");\n\r\n\r\nconst calculator = {\r\n  screen: '0',\r\n  firstValue: null,\r\n  waitingForSecondValue: false,\r\n  operator: null,\r\n};\r\n\r\nfunction inputDigit(digit) {\r\n  if (calculator.waitingForSecondValue === true) {\r\n    calculator.screen = digit;\r\n    calculator.waitingForSecondValue = false;\r\n  } else if (calculator.screen === '0') {\r\n    calculator.screen = digit;\r\n  } else {\r\n    calculator.screen += digit;\r\n  }\r\n  console.log(calculator);\r\n}\r\n\r\nfunction inputDecimal(dot) {\r\n  if (calculator.waitingForSecondValue === true) {\r\n    calculator.screen = '0.';\r\n    calculator.waitingForSecondValue = false;\r\n    return;\r\n  }\r\n  if (!calculator.screen.includes('.')) {\r\n    calculator.screen += dot;\r\n  }\r\n}\r\n\r\nfunction handleOperator(clickOperator) {\r\n  const inputValue = parseFloat(calculator.screen);\r\n  if (calculator.operator && calculator.waitingForSecondValue) {\r\n    calculator.operator = clickOperator;\r\n    console.log(calculator);\r\n    return;\r\n  }\r\n\r\n  if (calculator.firstValue === null && !isNaN(inputValue)) {\r\n    calculator.firstValue = inputValue;\r\n  } else if (calculator.operator) {\r\n    let result = 0;\r\n    switch (calculator.operator) {\r\n      case 'add':\r\n        result = _actions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sum(calculator.firstValue, inputValue);\r\n        break;\r\n      case 'substraction':\r\n        result = _actions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sub(calculator.firstValue, inputValue);\r\n        break;\r\n      case 'multi':\r\n        result = _actions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].multi(calculator.firstValue, inputValue);\r\n        break;\r\n      case 'divide':\r\n        result = _actions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(calculator.firstValue, inputValue);\r\n        break;\r\n      default:\r\n    }\r\n    calculator.screen = String(result);\r\n    calculator.firstValue = result;\r\n  }\r\n  calculator.waitingForSecondValue = true;\r\n  calculator.operator = clickOperator;\r\n  console.log(calculator);\r\n}\r\n\r\nfunction clear() {\r\n  calculator.screen = '0';\r\n  calculator.firstValue = null;\r\n  calculator.waitingForSecondValue = false;\r\n  calculator.operator = null;\r\n  console.log(calculator);\r\n}\r\n\r\nfunction updateScreen() {\r\n  const display = document.querySelector('.result');\r\n  display.value = calculator.screen;\r\n}\r\n\r\nconst calcFn = {\r\n  calculator,\r\n  inputDigit,\r\n  inputDecimal,\r\n  handleOperator,\r\n  clear,\r\n  updateScreen\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calcFn);\r\n\n\n//# sourceURL=webpack://exercise-7-nasa-calculator-kosmiczne-rachunki/./src/calculator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator */ \"./src/calculator.js\");\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n\r\n  _calculator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateScreen();\r\n  \r\n  const calc = document.querySelector('.calc-cnt');\r\n  const keys = calc.querySelector('tbody');\r\n\r\n  keys.addEventListener('click', (e) => {\r\n    if (!e.target.matches('input[type=\"button\"]')) {\r\n      return;\r\n    }\r\n    \r\n    const key = e.target;\r\n    const { action, number, decimal, clear, equals } = key.dataset;\r\n\r\n    if (action) {\r\n      _calculator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].handleOperator(key.dataset.action);\r\n    } else if (number) {\r\n      _calculator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].inputDigit(key.value);\r\n    } else if (decimal) {\r\n      _calculator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].inputDecimal(key.value);\r\n    } else if (clear) {\r\n      _calculator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clear();\r\n    } else if (equals) {\r\n      _calculator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].handleOperator(equals);\r\n    }\r\n    \r\n    _calculator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateScreen();\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://exercise-7-nasa-calculator-kosmiczne-rachunki/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;