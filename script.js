/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_showSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/showSelect */ "./src/js/modules/showSelect.js");
/* harmony import */ var _modules_showCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/showCard */ "./src/js/modules/showCard.js");


Object(_modules_showSelect__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_modules_showCard__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ }),

/***/ "./src/js/modules/showCard.js":
/*!************************************!*\
  !*** ./src/js/modules/showCard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const showCard = () => {
  const selects = document.querySelectorAll('[data-select="checkbox"]'),
        cards = document.querySelectorAll('.card');
  selects.forEach(select => {
    if (select.checked && select.value === 'all') {
      cards.forEach(card => {
        card.style.display = "flex";
      });
    }

    select.addEventListener('click', () => {
      if (select.checked && select.value === 'active') {
        cards.forEach(card => {
          if (card.dataset.status === 'active') {
            card.style.display = "flex";
          }
        });
      } else if (!select.checked && select.value === 'active') {
        cards.forEach(card => {
          if (card.dataset.status === 'active') {
            card.style.display = "none";
          }
        });
      }

      if (select.checked && select.value === 'booked') {
        cards.forEach(card => {
          if (card.dataset.status === 'booked') {
            card.style.display = "flex";
          }
        });
      } else if (!select.checked && select.value === 'booked') {
        cards.forEach(card => {
          if (card.dataset.status === 'booked') {
            card.style.display = "none";
          }
        });
      }

      if (select.checked && select.value === 'sell') {
        cards.forEach(card => {
          if (card.dataset.status === 'sold') {
            card.style.display = "flex";
          }
        });
      } else if (!select.checked && select.value === 'sell') {
        cards.forEach(card => {
          if (card.dataset.status === 'sold') {
            card.style.display = "none";
          }
        });
      }

      if (select.checked && select.value === 'all') {
        cards.forEach(card => {
          card.style.display = "flex";
        });
      } else if (!select.checked && select.value === 'all') {
        cards.forEach(card => {
          card.style.display = "none";
        });
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (showCard);

/***/ }),

/***/ "./src/js/modules/showSelect.js":
/*!**************************************!*\
  !*** ./src/js/modules/showSelect.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const showSelect = () => {
  const selectBtn = document.querySelector('.header-select'),
        select = document.querySelector('.header-select__content'),
        selectImg = document.querySelector('.header-select__header_img'),
        main = document.querySelector('.main');
  main.addEventListener('click', e => {
    let target = e.target;

    if (target.classList.contains('header-select__header') || target.classList.contains('header-select__header_current') || target.classList.contains('header-select__header_img')) {
      select.classList.toggle('header-select__content_active');
      selectImg.classList.toggle('header-select__header_img_active');
    }

    if (target.classList.contains('main') || target.classList.contains('tabs') || target.classList.contains('cards') || target.classList.contains('card')) {
      select.classList.remove('header-select__content_active');
      selectImg.classList.remove('header-select__header_img_active');
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (showSelect);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map