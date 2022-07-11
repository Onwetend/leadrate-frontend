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
/*! no static exports found */
/***/ (function(module, exports) {

// import './vendor';
// import './helpers';
// import './components/social';
// import {ieFix} from './vendor/ie-fix';
// import {vhFix} from './vendor/vh-fix';
// import {actualYear} from './modules/actualYear';
// import header from './components/header';
// import lazyLoading from './modules/lazyLoading';
// import scrollToAnchor from './modules/scrollToAnchor';
// ieFix();
// vhFix();
// actualYear();
// scrollToAnchor.init();
// header.init();
// lazyLoading.init();
// Move upper folds on button hover / Перемещение верхних страниц при наведении на кнопку
var btn = document.querySelector(".heading__btn");
btn.addEventListener("mouseover", changePosition);
btn.addEventListener("mouseout", initialPosition);

function changePosition() {
  document.querySelector(".fold-first").style.top = "6px";
  document.querySelector(".fold-second").style.top = "-9px";
}

function initialPosition() {
  document.querySelector(".fold-first").style.top = "13px";
  document.querySelector(".fold-second").style.top = "3px";
} // Background gradient animation / Анимация фонового градиента


var widths = new Array([50], [35]);
var step = 0;
var widthIndice = [0, 1];
var animationSpeed = 0.012;

function animateWidth() {
  var initialWidth = widths[widthIndice[0]];
  var finalWidth = widths[widthIndice[1]];
  var width = Math.round((1 - step) * initialWidth[0] + step * finalWidth[0]);
  document.querySelector("body").style.background = "radial-gradient(" + width + "% 50% at 50% 50%, #252e42 0%, #161c2e 100%)";
  step += animationSpeed;

  if (step >= 1) {
    step %= 1;
    widthIndice[0] = widthIndice[1];
    widthIndice[1] = (widthIndice[1] + Math.floor(1)) % 2;
  }
}

setInterval(animateWidth, 15);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map