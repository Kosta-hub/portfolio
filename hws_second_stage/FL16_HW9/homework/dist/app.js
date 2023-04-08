/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/functions.js":
/*!*************************!*\
  !*** ./js/functions.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resetGame = function resetGame() {
  var logs = document.querySelectorAll('div.log');
  logs.forEach(function (item) {
    item.remove();
    losts = 1;
    round = 1;
    wins = 1;
  });
});

/***/ }),

/***/ "./js/variables.js":
/*!*************************!*\
  !*** ./js/variables.js ***!
  \*************************/
/***/ (() => {

var choices = ['Scissors', 'Paper', 'Rock'];

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\r\n<html>\r\n\r\n<head>\r\n  <title>Tools</title>\r\n  <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0'>\r\n  <link rel=\"stylesheet\" href=\"https://pro.fontawesome.com/releases/v5.10.0/css/all.css\"\r\n    integrity=\"sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p\" crossorigin=\"anonymous\" />\r\n</head>\r\n\r\n<body>\r\n  <header>\r\n    <h1>Let's play!</h1>\r\n  </header>\r\n  <div class=\"container\">\r\n    <div class=\"rules-container\">\r\n      <h3>Rules of the game:</h3>\r\n      <ul>\r\n        <li>Paper beats rock (\"paper wraps around rock\").</li>\r\n        <li>The rock beats the scissors (\"the rock blunts or breaks the scissors\").</li>\r\n        <li>Scissors beat paper.</li>\r\n      </ul>\r\n      <p>Make your choice:</p>\r\n    </div>\r\n    <div class=\"buttons-container\">\r\n      <div id=\"Scissors\" class=\"button-item\">\r\n        <i class=\"far fa-hand-scissors\"></i>\r\n        <h3>Scissors</h3>\r\n      </div>\r\n      <div id=\"Paper\" class=\"button-item\">\r\n        <i class=\"far fa-hand-paper\"></i>\r\n        <h3>Paper</h3>\r\n      </div>\r\n      <div id=\"Rock\" class=\"button-item\">\r\n        <i class=\"far fa-hand-rock\"></i>\r\n        <h3>Rock</h3>\r\n      </div>\r\n    </div>\r\n    <div class=\"res-link\">\r\n      <p id=\"res\">resetGame</p>\r\n    </div>\r\n    <div class=\"log-block\"></div>\r\n  </div>\r\n</body>\r\n\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./scss/button-section.scss":
/*!**********************************!*\
  !*** ./scss/button-section.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _scss_button_section_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/button-section.scss */ "./scss/button-section.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables */ "./js/variables.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_variables__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions */ "./js/functions.js");





var logBlock = document.querySelector('div.log-block');
var wins = 1;
var losts = 1;
var round = 1;
var resButton = document.getElementById('res');

resButton.onclick = function () {
  resetGame();
};

document.querySelector('div.buttons-container').addEventListener('click', function (event) {
  var item = choices[Math.floor(Math.random() * choices.length)];
  var log = document.createElement('div');

  var createLog = function createLog() {
    logBlock.appendChild(log);
    log.classList.add('log');
  };

  var id = event.target.getAttribute('id');

  if (!id) {
    return;
  }

  ;

  function mod(a, b) {
    c = a % b;
    return c < 0 ? c + b : c;
  }

  function determineWinners(id, item) {
    x = choices.indexOf(id);
    y = choices.indexOf(item);

    if (id === item) {
      createLog();
      log.innerText = "".concat(id, " vs ").concat(item, ", DRAW!");
    } else if (mod(x - y, choices.length) < choices.length / 2) {
      createLog();
      log.innerText = "Round ".concat(round, ", ").concat(id, " vs ").concat(item, ", You\u2019ve LOST!");
      ++losts;
      ++round;
    } else {
      createLog();
      log.innerText = "Round ".concat(round, ", ").concat(id, " vs ").concat(item, ", You\u2019ve WON!");
      ++wins;
      ++round;
    }
  }

  if (wins === 3) {
    createLog();
    log.innerText = "You\u2019ve WON!";
    setTimeout(resetGame, 2000);
  } else if (losts === 3) {
    createLog();
    log.innerText = "You\u2019ve LOST!";
    setTimeout(resetGame, 2000);
  } else {
    determineWinners(id, item);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=app.js.map