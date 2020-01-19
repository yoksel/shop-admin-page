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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/styles.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/styles.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ":root {\n  --blue: #109CF1;\n  --dark-blue: #334D6E;\n  --light-blue: #CFEBFC;\n  --middle-blue: #9FD7F9;\n  --yellow: #FFB946;\n  --red: #F7685B;\n  --green: #2ED47A;\n  --purple: #885AF8;\n  --black: #192A3E;\n  --table-black: #323C47;\n  --table-grey: #707683;\n  --grey: #90A0B7;\n  --grey-light: #C2CFE0;\n  --grey-extra-light: #EFF1F4;\n  --grey-skeleton: #F5F6F8;\n  --white: #FFF;\n  --radius: 4px; }\n\n* {\n  box-sizing: border-box; }\n\nHTML {\n  font-size: 16px; }\n\nBODY {\n  display: flex;\n  min-height: 100vh;\n  margin: 0;\n  background: #FFF;\n  font: 1rem/1.4 Trebuchet MS, Verdana, sans-serif;\n  color: #000; }\n\nH1,\nH2,\nH3,\nH4 {\n  margin-top: 0;\n  margin-bottom: .5em;\n  font-weight: normal; }\n\nH1 {\n  font-size: 2.75rem; }\n\nA,\nA:visited,\nA:hover {\n  color: inherit; }\n\nA:hover {\n  text-decoration: none; }\n\nBUTTON,\nINPUT,\nTEXTAREA,\nSELECT {\n  display: block;\n  padding: .5rem;\n  background: none;\n  border-radius: var(--radius);\n  font: inherit; }\n\nINPUT,\nTEXTAREA,\nSELECT {\n  width: 100%;\n  border: 1px solid var(--grey-light); }\n\n.page-layout {\n  display: flex;\n  width: 100%; }\n\n.spinner {\n  display: none;\n  position: absolute;\n  bottom: 2rem;\n  left: 0;\n  right: 0;\n  width: 4rem;\n  height: 4rem;\n  margin: auto;\n  background: var(--white);\n  box-shadow: 0 0 .5rem currentColor;\n  border-radius: 50%;\n  color: var(--grey-light); }\n\n[data-loading=\"1\"] .spinner {\n  display: block; }\n\n.spinner::before,\n.spinner::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  box-sizing: border-box;\n  border: 3px solid;\n  border-color: currentColor transparent;\n  border-radius: 50%;\n  animation: rotate 2.1s linear infinite; }\n\n.spinner::before {\n  width: 2.25rem;\n  height: 2.25rem; }\n\n.spinner::after {\n  width: 1.25rem;\n  height: 1.25rem;\n  animation-duration: 1.3s;\n  animation-direction: reverse; }\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg); } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ColumnChart/styles.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ColumnChart/styles.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".column-chart {\n  display: flex;\n  position: relative;\n  min-width: 180px;\n  flex-basis: calc((100% - 2rem) / 3);\n  max-width: 300px;\n  min-height: 150px;\n  max-height: 300px;\n  margin: 0 0 .5rem 0;\n  padding: 20px;\n  box-sizing: border-box;\n  border: 1px solid var(--grey-light);\n  border-left: 5px solid var(--grey-light);\n  border-radius: 5px; }\n\n.column-chart + .column-chart {\n  margin-left: 1rem; }\n\n.column-chart__content {\n  position: relative;\n  flex-grow: 1;\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 100%; }\n\n.column-chart__title {\n  margin: 0;\n  line-height: 1;\n  font-weight: normal;\n  font-size: 1em;\n  color: var(--grey); }\n\n.column-chart__total {\n  margin-top: 1rem;\n  font-size: 1.6em;\n  line-height: 1; }\n\n.column-chart__list {\n  display: flex;\n  align-items: flex-end;\n  width: 100%;\n  height: 50px;\n  margin: 0;\n  margin-top: .5rem;\n  padding: 0;\n  list-style: none; }\n\n.column-chart__item {\n  flex-grow: 1;\n  margin-left: 1px;\n  background: var(--grey-light);\n  cursor: pointer; }\n\n.column-chart__item:first-child {\n  margin-left: 0; }\n\n.column-chart__tooltip-date {\n  font-size: .9em; }\n\n.column-chart__tooltip-quantity {\n  margin-top: .25em;\n  font-size: 1.1em; }\n\n.column-chart--customers {\n  border-left-color: gold; }\n\n.column-chart--customers .column-chart__item {\n  background: gold; }\n\n.column-chart--orders {\n  border-left-color: turquoise; }\n\n.column-chart--orders .column-chart__item {\n  background: turquoise; }\n\n.column-chart--sales {\n  border-left-color: yellowgreen; }\n\n.column-chart--sales .column-chart__item {\n  background: yellowgreen; }\n\n.column-chart__error {\n  max-width: 100%;\n  overflow: auto; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/DraggableList/styles.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/DraggableList/styles.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./grab-icon.svg */ "./src/components/DraggableList/grab-icon.svg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".draggable-list {\n  position: relative; }\n\n.draggable-list__item {\n  display: flex;\n  align-items: center;\n  cursor: grab; }\n  .draggable-list__item::before {\n    content: \"\";\n    display: block;\n    height: 18px;\n    width: 11px;\n    margin-right: 1rem;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") 50% 50% no-repeat;\n    opacity: .5; }\n\n.draggable-list .draggable-list__item--placeholder {\n  background-color: var(--grey-light); }\n  .draggable-list .draggable-list__item--placeholder::before {\n    background: none; }\n\n.draggable-list__item--dragged {\n  position: absolute;\n  left: 0;\n  right: 0;\n  background: var(--white);\n  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.35);\n  cursor: grabbing; }\n  .draggable-list__item--dragged::before {\n    opacity: 1; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Layout/styles.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Layout/styles.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".page {\n  width: 100%; }\n\n.page-container {\n  display: flex;\n  width: 100%;\n  min-height: 100vh; }\n\n.page-main,\n.page-aside,\n.page-footer {\n  padding: 1rem;\n  box-sizing: border-box; }\n\n.page-main {\n  flex-grow: 1; }\n\n.page-aside {\n  min-width: 250px;\n  background: #EEE; }\n\n.page-footer {\n  flex-basis: 100%;\n  display: flex; }\n  .page-footer A + A {\n    margin-left: 1rem; }\n\n.page-content__header {\n  display: flex;\n  justify-content: space-between; }\n\n.page-section {\n  display: flex;\n  flex-wrap: wrap; }\n  .page-section + .page-section {\n    margin-top: 2rem; }\n\n.page-section__title {\n  flex-basis: 100%; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Notification/styles.scss":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Notification/styles.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".notifications {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  right: 1rem;\n  bottom: 1rem;\n  width: 200px;\n  max-height: 50vh; }\n\n/* Notification */\n.notification {\n  margin-top: .5rem;\n  padding: .75rem 1rem;\n  background: var(--blue);\n  border-radius: var(--radius);\n  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.25);\n  color: var(--white);\n  opacity: 0;\n  transform: translateY(-1rem);\n  animation: fadeIn .5s forwards; }\n  .notification--warning {\n    background: var(--yellow); }\n  .notification--error {\n    background: var(--red); }\n\n.notification[data-state=\"hidden\"] {\n  animation: fadeOut .5s; }\n\n@keyframes fadeIn {\n  to {\n    opacity: 1;\n    transform: translateY(0); } }\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n    transform: translateY(0);\n    margin-bottom: 0; }\n  to {\n    opacity: 0;\n    margin-bottom: -1rem; } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/PageMessage/styles.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/PageMessage/styles.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".page-message {\n  max-width: 800px;\n  margin: 2rem auto;\n  padding: 1rem;\n  background: lightgoldenrodyellow;\n  border-radius: var(--radius); }\n\n.page-message--error {\n  background: mistyrose; }\n\n.page-message__error {\n  margin-top: 1rem;\n  padding: 1rem;\n  background: #FFF;\n  border-radius: var(--radius); }\n\n.page-message__error-text {\n  font-family: Courier New, Courier, monospace; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/RangePicker/styles.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/RangePicker/styles.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./calendar-icon.svg */ "./src/components/RangePicker/calendar-icon.svg");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./arrow-icon.svg */ "./src/components/RangePicker/arrow-icon.svg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, "/* Rangepicker */\n.rangepicker {\n  position: relative;\n  z-index: 11; }\n\n.rangepicker__input {\n  display: inline-flex;\n  padding: 12px 16px 12px 40px;\n  cursor: pointer;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 20px;\n  border: 1px solid var(--grey-light);\n  border-radius: 4px;\n  outline: none;\n  background: var(--white) url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") 16px center no-repeat;\n  background-color: var(--white);\n  background-size: 18px 18px; }\n\n.rangepicker_open .rangepicker__input,\n.rangepicker__input:focus,\n.rangepicker__input:active {\n  border-color: var(--blue); }\n\n.rangepicker__input > SPAN {\n  display: inline-flex;\n  margin: 0 4px; }\n\n.rangepicker__input > SPAN:last-child {\n  margin-right: 0; }\n\n.rangepicker__selector {\n  display: none;\n  background-color: var(--white);\n  padding: 32px 26px;\n  border-radius: 6px;\n  box-shadow: 0 4px 29px rgba(0, 0, 0, 0.09);\n  flex-direction: row;\n  justify-content: space-between;\n  flex: 1 0 auto;\n  position: absolute;\n  top: calc(100% + 16px);\n  right: 0;\n  z-index: 1; }\n\n.rangepicker--open .rangepicker__selector {\n  display: inline-flex; }\n\n.rangepicker__selector-arrow {\n  width: 30px;\n  height: 15px;\n  position: absolute;\n  bottom: 100%;\n  right: 60px;\n  overflow: hidden; }\n\n.rangepicker__selector-arrow::after {\n  content: \"\";\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  background: var(--white);\n  transform: translateX(-50%) translateY(-50%) rotate(45deg);\n  top: 100%;\n  left: 50%;\n  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.09); }\n\n.rangepicker__calendars {\n  display: flex; }\n\n.rangepicker__calendar {\n  width: 252px; }\n\n.rangepicker__calendar:last-child {\n  margin-left: 26px; }\n\n.rangepicker__month-indicator {\n  text-align: center;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n  padding: 0 15px;\n  color: var(--dark-blue-text); }\n\n.rangepicker__selector-control {\n  position: absolute;\n  top: 32px;\n  width: 15px;\n  height: 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  cursor: pointer;\n  transition: .3s all;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") left center no-repeat;\n  background-size: 9px 13px;\n  border: 0; }\n\n.rangepicker__selector-control:hover {\n  opacity: .8; }\n\n.rangepicker__selector-control--left {\n  left: 26px; }\n\n.rangepicker__selector-control--right {\n  right: 26px;\n  transform: rotate(180deg); }\n\n.rangepicker__day-of-week,\n.rangepicker__date-grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr); }\n\n.rangepicker__day-of-week {\n  margin-top: 28px;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n  color: var(--grey);\n  text-align: center; }\n\n/* Dates */\n.rangepicker__date-grid {\n  margin-top: 16px; }\n\n.rangepicker__cell {\n  position: relative;\n  border: 0;\n  width: 36px;\n  height: 36px;\n  background-color: transparent;\n  color: var(--dark-blue-text);\n  border-radius: 0;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 20px;\n  cursor: pointer; }\n\n.rangepicker__cell:active,\n.rangepicker__cell.rangepicker__selected,\n.rangepicker__cell.rangepicker__selected-from,\n.rangepicker__cell.rangepicker__selected-to {\n  background-color: var(--blue);\n  color: var(--white); }\n\n.rangepicker__cell:hover,\n.rangepicker__cell:focus {\n  outline: none;\n  background-color: var(--light-blue);\n  color: var(--dark-blue-text);\n  transition: .2s all; }\n\n.rangepicker__cell.rangepicker__selected:hover,\n.rangepicker__cell.rangepicker__selected-from:hover,\n.rangepicker__cell.rangepicker__selected-to:hover,\n.rangepicker__cell.rangepicker__selected:focus,\n.rangepicker__cell.rangepicker__selected-from:focus,\n.rangepicker__cell.rangepicker__selected-to:focus {\n  background-color: var(--middle-blue);\n  color: var(--dark-blue-text); }\n\n.rangepicker__cell.rangepicker__selected-between {\n  background-color: var(--light-blue); }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/SortableTable/styles.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/SortableTable/styles.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".sortable-table {\n  position: relative;\n  width: 100%;\n  max-width: 100%;\n  min-height: 200px;\n  margin-bottom: 40px;\n  background-color: var(--white); }\n\n.sortable-table__table {\n  width: 100%; }\n\n.sortable-table__row {\n  position: relative;\n  display: grid;\n  grid: auto-flow / 12% 38% 20% 10% 10% 10%;\n  text-decoration: none; }\n\n.sortable-table__cell {\n  padding: 16px;\n  font-size: 16px;\n  line-height: 20px;\n  color: var(--table-black);\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid var(--grey-light); }\n\n.sortable-table__cell:first-child {\n  padding-left: 32px; }\n\n.sortable-table__cell:last-child {\n  padding-right: 32px; }\n\n.sortable-table__cell--error {\n  grid-column-start: 1;\n  grid-column-end: 7; }\n\n.sortable-table__thead {\n  display: block;\n  position: sticky;\n  z-index: 3;\n  top: 0;\n  background-color: var(--white); }\n\n.sortable-table__header .sortable-table__cell {\n  min-width: 120px;\n  color: var(--grey-light); }\n\n.sortable-table__header .sortable-table__cell[data-sortable] {\n  cursor: pointer; }\n\n.sortable-table__cell--quantity,\n.sortable-table__cell--price {\n  justify-content: flex-end; }\n\n.sortable-table__cell--disabled {\n  opacity: .5; }\n\n.sortable-table__cell[data-sort-direction]::after {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 0;\n  margin-top: .25em;\n  margin-left: .25em;\n  border: 5px solid;\n  border-color: currentColor transparent; }\n\n.sortable-table__cell[data-sort-direction=\"asc\"]::after {\n  border-top: none; }\n\n.sortable-table__cell[data-sort-direction=\"desc\"]::after {\n  border-bottom: none; }\n\n.sortable-table__cell--sorter:hover {\n  cursor: pointer;\n  color: var(--grey); }\n\n.sortable-table__image-wrapper {\n  position: relative; }\n\n.sortable-table__image {\n  display: block;\n  height: 40px;\n  width: 100%;\n  max-width: 100%;\n  min-width: 40px;\n  object-fit: contain;\n  padding: 4px;\n  border: 1px solid var(--grey-light);\n  border-radius: 2px; }\n\n.sortable-table__preview {\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  padding: .25em;\n  background-origin: content-box;\n  background-color: var(--white);\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  border: 1px solid var(--grey-light);\n  transition: all .25s; }\n\n.sortable-table__preview:hover {\n  width: 300%;\n  height: 300%;\n  opacity: 1; }\n\n.sortable-table__link {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0; }\n\n.sortable-table__category {\n  position: relative;\n  cursor: pointer; }\n\n.sortable-table__tooltip-category {\n  color: var(--grey); }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Tooltips/styles.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Tooltips/styles.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".tooltips-container {\n  position: relative; }\n\n.tooltip {\n  position: absolute;\n  z-index: 3;\n  left: 0;\n  top: 0;\n  margin: 1rem 0 0 1rem;\n  padding: .5rem .75rem;\n  background: #EEE;\n  border-radius: 3px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);\n  line-height: 1;\n  color: #555;\n  transform: translate(0, 0);\n  opacity: 0;\n  transition: opacity .2s;\n  pointer-events: none; }\n\n.tooltip[data-visible=\"1\"] {\n  opacity: 1; }\n\n[data-tooltip-content] {\n  opacity: 1;\n  transition: opacity .2s; }\n\n.tooltips-container--dimmed [data-tooltip-content]:not(:hover) {\n  opacity: .4; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = {};

function modulesToDom(moduleId, list, options) {
  for (var i = 0; i < list.length; i++) {
    var part = {
      css: list[i][1],
      media: list[i][2],
      sourceMap: list[i][3]
    };

    if (stylesInDom[moduleId][i]) {
      stylesInDom[moduleId][i](part);
    } else {
      stylesInDom[moduleId].push(addStyle(part, options));
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (moduleId, list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  moduleId = options.base ? moduleId + options.base : moduleId;
  list = list || [];

  if (!stylesInDom[moduleId]) {
    stylesInDom[moduleId] = [];
  }

  modulesToDom(moduleId, list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    if (!stylesInDom[moduleId]) {
      stylesInDom[moduleId] = [];
    }

    modulesToDom(moduleId, newList, options);

    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {
      stylesInDom[moduleId][j]();
    }

    stylesInDom[moduleId].length = newList.length;

    if (stylesInDom[moduleId].length === 0) {
      delete stylesInDom[moduleId];
    }
  };
};

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Layout_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Layout/index.js */ "./src/components/Layout/index.js");
/* harmony import */ var _components_ColumnChart_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ColumnChart/index.js */ "./src/components/ColumnChart/index.js");
/* harmony import */ var _components_RangePicker_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/RangePicker/index.js */ "./src/components/RangePicker/index.js");
/* harmony import */ var _components_SortableTable_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SortableTable/index.js */ "./src/components/SortableTable/index.js");
/* harmony import */ var _components_DraggableList_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/DraggableList/index.js */ "./src/components/DraggableList/index.js");
/* harmony import */ var _lib_Router_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/Router.js */ "./src/lib/Router.js");
/* harmony import */ var _assets_scss_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/scss/styles.scss */ "./src/assets/scss/styles.scss");
/* harmony import */ var _assets_scss_styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_styles_scss__WEBPACK_IMPORTED_MODULE_6__);









// Routing
const router = _lib_Router_js__WEBPACK_IMPORTED_MODULE_5__["default"].instance();

router
  .addRoute(/^$/, 'dashboard')
  .addRoute(/^categories$/, 'categories')
  .addRoute(/^products\/([\S()-]+)/g, 'products/edit')
  .addRoute(/^products\/add$/, 'products/edit')
  .addRoute(/^products$/, 'products')
  .setNotFoundPage('error404')
  .addListener();

// Init custom elements
window.customElements.define('page-layout', _components_Layout_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
window.customElements.define('column-chart', _components_ColumnChart_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
window.customElements.define('range-picker', _components_RangePicker_index_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
window.customElements.define('sortable-table', _components_SortableTable_index_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
window.customElements.define('draggable-list', _components_DraggableList_index_js__WEBPACK_IMPORTED_MODULE_4__["default"], { extends: 'ul' });


/***/ }),

/***/ "./src/assets/scss/styles.scss":
/*!*************************************!*\
  !*** ./src/assets/scss/styles.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/ColumnChart/classes.js":
/*!***********************************************!*\
  !*** ./src/components/ColumnChart/classes.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  elem: 'column-chart',
  content: 'column-chart__content',
  header: 'column-chart__header',
  title: 'column-chart__title',
  total: 'column-chart__total',
  list: 'column-chart__list',
  item: 'column-chart__item',
  tooltip: 'column-chart__tooltip',
  tooltipDate: 'column-chart__tooltip-date',
  tooltipQuantity: 'column-chart__tooltip-quantity',
  error: 'column-chart__error'
});


/***/ }),

/***/ "./src/components/ColumnChart/index.js":
/*!*********************************************!*\
  !*** ./src/components/ColumnChart/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColumnChart; });
/* harmony import */ var _Tooltips_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Tooltips/index.js */ "./src/components/Tooltips/index.js");
/* harmony import */ var _helpers_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/index.js */ "./src/helpers/index.js");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes.js */ "./src/components/ColumnChart/classes.js");
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates.js */ "./src/components/ColumnChart/templates.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.scss */ "./src/components/ColumnChart/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_4__);







class ColumnChart extends HTMLElement {
  constructor () {
    super();

    this.elem = document.createElement('div');
    this.apiUrl = process.env.API_URL || 'https://course-js.javascript.ru';

    this.changeDate = this.changeDate.bind(this);
  }

  async connectedCallback () {
    const { type, isMoney, from, to } = this.dataset;

    this.dates = {
      from: new Date(from),
      to: new Date(to)
    };

    this.type = type;
    this.formatTotal = isMoney ? _helpers_index_js__WEBPACK_IMPORTED_MODULE_1__["formatTotal"] : null;
    this.classList.add(_classes_js__WEBPACK_IMPORTED_MODULE_2__["default"].elem, `${_classes_js__WEBPACK_IMPORTED_MODULE_2__["default"].elem}--${type}`);
    this.elem.classList.add(_classes_js__WEBPACK_IMPORTED_MODULE_2__["default"].content);
    this.title = `Total ${type}`;
    this.url = this.getUrl();

    await this.render();
    this.append(this.elem);

    document.addEventListener('changeDate', this.changeDate);
  }

  getUrl () {
    return `${this.apiUrl}/api/dashboard/${this.type}?from=${this.dates.from}&to=${this.dates.to}`;
  }

  async getData () {
    try {
      const data = await Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_1__["fetchJson"])(this.url);
      return { data };
    } catch (error) {
      return { error };
    }
  }

  async render () {
    const { data, error } = await this.getData();
    this.data = data;

    if (error) {
      this.elem.insertAdjacentHTML('beforeEnd', `<div class="${_classes_js__WEBPACK_IMPORTED_MODULE_2__["default"].error}">${error}</div>`);
      return;
    }

    this.values = Object.values(this.data);

    if (this.values.length === 0) {
      this.values.push('No data');
    }

    const headerStr = this.getHeaderStr();

    const listStr = this.getListStr();
    this.elem.insertAdjacentHTML(
      'beforeEnd',
      headerStr + listStr
    );

    this.addActions();
  }

  getHeaderStr () {
    this.total = this.values.reduce((prev, current) => prev + current, 0);

    if (this.formatTotal) {
      this.total = this.formatTotal(this.total);
    }

    return Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_1__["fillTemplate"])({
      tmpl: _templates_js__WEBPACK_IMPORTED_MODULE_3__["default"].header,
      data: this
    });
  }

  getListStr () {
    const max = Math.max(...this.values);
    let chartStr = '';

    for (const key in this.data) {
      const date = Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(key);
      let value = this.data[key];
      const heightValue = ((value / max) * 100).toFixed(2);
      const height = `${heightValue}%`;

      if (this.formatTotal) {
        value = this.formatTotal(value);
      }

      const tootipContent = `<small class="${_classes_js__WEBPACK_IMPORTED_MODULE_2__["default"].tooltipDate}">${date}</small><div class="${_classes_js__WEBPACK_IMPORTED_MODULE_2__["default"].tooltipQuantity}">${value}</div>`;

      chartStr += Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_1__["fillTemplate"])({
        tmpl: _templates_js__WEBPACK_IMPORTED_MODULE_3__["default"].chartItem,
        data: {
          ...this,
          height,
          tootipContent: Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_1__["escapeHTML"])(tootipContent)
        }
      });
    }

    return `<ul class="${_classes_js__WEBPACK_IMPORTED_MODULE_2__["default"].list}">${chartStr}</ul>`;
  }

  addActions () {
    this.tooltips = new _Tooltips_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
      elem: this.elem,
      dimSiblings: true
    });
  }

  async changeDate (event) {
    if (!event.detail || !event.detail.dates) {
      return;
    }

    const { from, to } = event.detail.dates;
    this.dates = {
      from: from,
      to: to
    };

    this.url = this.getUrl();
    this.elem.innerHTML = '';
    await this.render();
    this.append(this.elem);
  }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/components/ColumnChart/styles.scss":
/*!************************************************!*\
  !*** ./src/components/ColumnChart/styles.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ColumnChart/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/ColumnChart/templates.js":
/*!*************************************************!*\
  !*** ./src/components/ColumnChart/templates.js ***!
  \*************************************************/
/*! exports provided: header, chartItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "header", function() { return header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chartItem", function() { return chartItem; });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes.js */ "./src/components/ColumnChart/classes.js");


const header = `<header class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].header}">
  <h3 class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].title}">{title}</h3>
  <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].total}">{total}</div>
</header>`;

const chartItem = `<li
  class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].item}"
  data-tooltip-content="{tootipContent}"
  style="height: {height}"></li>`;

/* harmony default export */ __webpack_exports__["default"] = ({
  header,
  chartItem
});


/***/ }),

/***/ "./src/components/DraggableList/grab-icon.svg":
/*!****************************************************!*\
  !*** ./src/components/DraggableList/grab-icon.svg ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "83c75420d0360ed22511c092e57d1d54.svg");

/***/ }),

/***/ "./src/components/DraggableList/index.js":
/*!***********************************************!*\
  !*** ./src/components/DraggableList/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DraggableList; });
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/components/DraggableList/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grab_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grab-icon.svg */ "./src/components/DraggableList/grab-icon.svg");



const cls = {
  elem: 'draggable-list',
  items: 'draggable-list__items',
  item: 'draggable-list__item',
  dragged: 'draggable-list__item--dragged',
  placeholder: 'draggable-list__item--placeholder'
};

class DraggableList extends HTMLUListElement {
  constructor () {
    super();

    this.startDrag = this.startDrag.bind(this);
    this.stopDrag = this.stopDrag.bind(this);
    this.move = this.move.bind(this);
    this.setPlaceholderHeight = this.setPlaceholderHeight.bind(this);
  }

  async connectedCallback () {
    this.classList.add(cls.elem);
    this.items = this.querySelectorAll('li');
    this.placeholder = this.createPlaceholder();

    this.addClassToItems();
    this.addEventListener('pointerdown', this.startDrag);
    this.addEventListener('pointerdown', this.setPlaceholderHeight, { once: true });
  }

  startDrag (event) {
    this.currentElem = event.target.closest('.draggable-list__item');
    if (!this.currentElem) {
      return;
    }

    this.currentElem.replaceWith(this.placeholder);
    this.currentElem.classList.add(cls.dragged);
    this.append(this.currentElem);

    const { top } = this.getBoundingClientRect();
    this.top = top;
    this.elemHalf = this.currentElem.offsetHeight / 2;

    const elemTop = event.clientY - this.top - this.elemHalf;
    this.currentElem.style.top = `${elemTop}px`;

    this.addEventListener('pointermove', this.move);
    this.addEventListener('pointerup', this.stopDrag);
  }

  move (event) {
    const elemTop = event.clientY - this.top - this.elemHalf;
    this.currentElem.style.top = `${elemTop}px`;

    // Check intersection
    for (const item of this.items) {
      if (item.classList.contains(cls.dragged)) {
        continue;
      }

      const top = item.offsetTop;
      const bottom = top + item.offsetHeight;
      const middle = top + item.offsetHeight / 2;
      const checkLine = elemTop + this.elemHalf;

      if (checkLine > top && checkLine < bottom) {
        if (checkLine <= middle) {
          item.after(this.placeholder);
        } else {
          item.before(this.placeholder);
        }
        break;
      }
    }
  }

  stopDrag () {
    this.placeholder.replaceWith(this.currentElem);
    this.currentElem.classList.remove(cls.dragged);
    this.currentElem.style.top = '';
    this.removeEventListener('pointermove', this.move);
    this.removeEventListener('pointerup', this.stopDrag);
  }

  createPlaceholder () {
    const firstItem = this.items[0];
    const placeholder = firstItem.cloneNode(true);
    placeholder.classList.add(cls.placeholder, cls.item);
    placeholder.innerHTML = '';

    return placeholder;
  }

  setPlaceholderHeight () {
    const firstItem = this.items[0];
    this.placeholder.style.minHeight = `${firstItem.offsetHeight}px`;
  }

  addClassToItems () {
    this.items.forEach(item => item.classList.add(cls.item));
  }
}


/***/ }),

/***/ "./src/components/DraggableList/styles.scss":
/*!**************************************************!*\
  !*** ./src/components/DraggableList/styles.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/DraggableList/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var _helpers_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/index.js */ "./src/helpers/index.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./src/components/Layout/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);



class Layout extends HTMLElement {
  connectedCallback () {
    this.append(this.render());
    this.classList.add('page');
  }

  render () {
    return Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(`<div class="page-container">
      <aside class="page-aside">
        <nav>
          <ul>
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/categories">Categories</a>
            </li>
          </ul>
        </nav>
      </aside>

      <main class="page-main" id="content">
        <!-- main content will be here -->
      </main>
    </div>`);
  }
}


/***/ }),

/***/ "./src/components/Layout/styles.scss":
/*!*******************************************!*\
  !*** ./src/components/Layout/styles.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Layout/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/Notification/index.js":
/*!**********************************************!*\
  !*** ./src/components/Notification/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Notification; });
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/components/Notification/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);


const cls = {
  elem: 'notification',
  warning: 'notification--warning',
  error: 'notification--error'
};

const second = 1000;

class Notification {
  constructor ({ message, container, type }) {
    this.message = message;
    this.container = container;
    this.type = type;
    this.duration = this.getDuration();
    this.classNames = this.getClasses();
    this.addElem();
    this.isFinished = false;
  }

  addElem () {
    this.elem = document.createElement('div');
    this.elem.classList.add(...this.classNames);
    this.elem.dataset.state = 'shown';
    this.elem.innerHTML = this.message;
    this.container.prepend(this.elem);

    setTimeout(() => { this.hideElem(); }, this.duration);
  }

  async hideElem (params = {}) {
    this.isFinished = true;
    this.elem.dataset.state = 'hidden';

    return new Promise((resolve, reject) => {
      this.elem.addEventListener('animationend', () => {
        this.elem.remove();
        resolve();
      });
    });
  }

  getDuration () {
    if (this.type === 'error') {
      return 5 * second;
    }

    return 3 * second;
  }

  getClasses () {
    const classes = [cls.elem];

    if (this.type && cls[this.type]) {
      classes.push(cls[this.type]);
    }

    return classes;
  }
}


/***/ }),

/***/ "./src/components/Notification/styles.scss":
/*!*************************************************!*\
  !*** ./src/components/Notification/styles.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Notification/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/PageMessage/index.js":
/*!*********************************************!*\
  !*** ./src/components/PageMessage/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageMessage; });
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/components/PageMessage/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);


class PageMessage {
  constructor ({ title, text, callback, callbackText, error }) {
    this.title = title;
    this.text = text || 'Something went wrong';
    this.callback = callback;
    this.callbackText = callbackText;
    this.error = error;

    if (!this.title && this.error) {
      this.title = 'Error';
    }

    this.createElement();
  }

  createElement () {
    this.elem = document.createElement('div');
    this.elem.classList.add('page-message');

    if (this.error) {
      this.elem.classList.add('page-message--error');
    }

    this.content = `<h3>${this.title}</h3><p>${this.text}</p>`;

    if (this.error) {
      this.content += `<div class="page-message__error">
        <div class="page-message__error-text">
          <strong>${this.error.name}</strong>: ${this.error.message}</div>
      </div>`;
    }

    this.elem.insertAdjacentHTML('afterBegin', this.content);
  }
}


/***/ }),

/***/ "./src/components/PageMessage/styles.scss":
/*!************************************************!*\
  !*** ./src/components/PageMessage/styles.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/PageMessage/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/RangePicker/arrow-icon.svg":
/*!***************************************************!*\
  !*** ./src/components/RangePicker/arrow-icon.svg ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fb112b550276d752d0b3e107ade8d617.svg");

/***/ }),

/***/ "./src/components/RangePicker/calendar-icon.svg":
/*!******************************************************!*\
  !*** ./src/components/RangePicker/calendar-icon.svg ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "682dedaafb044e7b9ea352a70baaf569.svg");

/***/ }),

/***/ "./src/components/RangePicker/classes.js":
/*!***********************************************!*\
  !*** ./src/components/RangePicker/classes.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  elem: 'rangepicker',
  elemOpen: 'rangepicker--open',
  input: 'rangepicker__input',
  from: 'rangepicker__from',
  to: 'rangepicker__to',
  selector: 'rangepicker__selector',
  selectorArrow: 'rangepicker__selector-arrow',
  selectorControl: 'rangepicker__selector-control',
  calendars: 'rangepicker__calendars',
  calendar: 'rangepicker__calendar',
  cell: 'rangepicker__cell',
  selectedFrom: 'rangepicker__selected-from',
  selectedBetween: 'rangepicker__selected-between',
  selectedTo: 'rangepicker__selected-to',
  monthIndicator: 'rangepicker__month-indicator',
  dayOfWeek: 'rangepicker__day-of-week',
  dateGrid: 'rangepicker__date-grid'
});


/***/ }),

/***/ "./src/components/RangePicker/index.js":
/*!*********************************************!*\
  !*** ./src/components/RangePicker/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RangePicker; });
/* harmony import */ var _helpers_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/index.js */ "./src/helpers/index.js");
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates.js */ "./src/components/RangePicker/templates.js");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes.js */ "./src/components/RangePicker/classes.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ "./src/components/RangePicker/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _arrow_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./arrow-icon.svg */ "./src/components/RangePicker/arrow-icon.svg");
/* harmony import */ var _calendar_icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar-icon.svg */ "./src/components/RangePicker/calendar-icon.svg");








class RangePicker extends HTMLElement {
  constructor () {
    super();
    this.togglePicker = this.togglePicker.bind(this);
    this.selectorOnClick = this.selectorOnClick.bind(this);
    this.bodyOnClick = this.bodyOnClick.bind(this);
    this.updateRange = this.updateRange.bind(this);

    this.isOpened = false;
    this.elem = this;
    this.elem.classList.add('rangepicker');
  }

  async connectedCallback () {
    const { from, to } = this.dataset;

    this.dates = {
      from: new Date(from),
      to: new Date(to)
    };

    this.monthes = this.getDisplayedMonthes();
    this.newDates = [];

    this.addInput();
    document.addEventListener('changeDate', this.updateRange);
  }

  getDisplayedMonthes () {
    const currentMonth = new Date(this.dates.from);
    let month = currentMonth.getMonth();
    const currentDay = 1;
    currentMonth.setDate(currentDay);

    const nextMonth = new Date(currentMonth);
    nextMonth.setMonth(++month);

    return [currentMonth, nextMonth];
  }

  addInput () {
    const data = {
      from: this.dates.from.toLocaleDateString(),
      to: this.dates.to.toLocaleDateString()
    };
    const tmpl = _templates_js__WEBPACK_IMPORTED_MODULE_1__["default"].input;
    const inputStr = Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_0__["fillTemplate"])({
      tmpl,
      data
    });

    this.elem.insertAdjacentHTML('afterBegin', inputStr);
    this.input = this.elem.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_2__["default"].input}`);
    this.inputFrom = this.input.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_2__["default"].from}`);
    this.inputTo = this.input.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_2__["default"].to}`);

    this.input.addEventListener('pointerdown', this.togglePicker);
    // capture: true reverses order of events
    // click on body fires first
    document.body.addEventListener('pointerdown', this.bodyOnClick, {
      capture: true
    });
  }

  bodyOnClick () {
    const parentRangePicker = event.target.closest(`.${_classes_js__WEBPACK_IMPORTED_MODULE_2__["default"].elem}`);

    if (!parentRangePicker && this.isOpened) {
      this.hidePicker();
    }
  }

  updateInput () {
    this.inputFrom.innerHTML = this.dates.from.toLocaleDateString();
    this.inputTo.innerHTML = this.dates.to.toLocaleDateString();
  }

  updateRange () {
    this.monthes = this.getDisplayedMonthes();
    this.newDates = [];
    this.updateInput();
    this.hidePicker();
  }

  togglePicker () {
    if (this.isOpened) {
      this.hidePicker();
      return;
    }

    this.showPicker();
    this.isOpened = true;
  }

  showPicker () {
    if (!this.selector) {
      this.addSelector();

      this.selector = this.elem.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_2__["default"].selector}`);
      this.calendars = this.elem.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_2__["default"].calendars}`);

      this.selector.addEventListener('click', this.selectorOnClick);
    } else {
      this.calendars.innerHTML = '';
    }

    this.addCalendars();
    this.elem.classList.add(_classes_js__WEBPACK_IMPORTED_MODULE_2__["default"].elemOpen);
  }

  hidePicker () {
    this.elem.classList.remove(_classes_js__WEBPACK_IMPORTED_MODULE_2__["default"].elemOpen);
    this.isOpened = false;
    this.newDates = [];
  }

  addSelector () {
    const selectorStr = _templates_js__WEBPACK_IMPORTED_MODULE_1__["default"].selector;
    this.elem.insertAdjacentHTML('beforeEnd', selectorStr);
  }

  selectorOnClick () {
    const { dataset } = event.target;
    if (dataset.value) {
      this.setDay(event.target);
    } else if (dataset.direction) {
      this.moveMonth(dataset.direction);
    }
  }

  setDay (elem) {
    const date = elem.dataset.value;

    if (this.newDates.length === 0) {
      this.newDates.push(new Date(date));
      this.updateSelected(elem);
      return;
    }

    this.newDates.push(new Date(date));

    this.newDates.sort((a, b) => {
      return a - b;
    });
    this.dates = {
      from: this.newDates[0],
      to: this.newDates[1]
    };

    document.dispatchEvent(
      new CustomEvent('changeDate', {
        detail: {
          dates: {
            from: this.dates.from.toISOString(),
            to: this.dates.to.toISOString()
          }
        }
      })
    );
  }

  moveMonth (direction) {
    let step = 1;
    if (direction === 'prev') {
      step = -1;
    }

    this.monthes.forEach(date => {
      date.setMonth(date.getMonth() + step);
    });

    this.updateCalendars();
  }

  addCalendars () {
    this.monthes.forEach(date => {
      this.calendars.insertAdjacentHTML('beforeEnd', this.getCalendar(date));
    });
  }

  updateCalendars () {
    this.calendars.innerHTML = '';
    this.addCalendars();
  }

  updateSelected (elem) {
    const cells = this.elem.querySelectorAll(`.${_classes_js__WEBPACK_IMPORTED_MODULE_2__["default"].cell}`);
    const classes = [_classes_js__WEBPACK_IMPORTED_MODULE_2__["default"].selectedBetween, _classes_js__WEBPACK_IMPORTED_MODULE_2__["default"].selectedFrom, _classes_js__WEBPACK_IMPORTED_MODULE_2__["default"].selectedTo];

    cells.forEach(cell => {
      cell.classList.remove(...classes);
    });

    elem.classList.add(_classes_js__WEBPACK_IMPORTED_MODULE_2__["default"].selectedFrom);
  }

  getCalendar (date) {
    const data = {
      month: date.toLocaleString('default', { month: 'long' }),
      weekdays: Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_0__["getWeekDays"])('div'),
      days: this.getCells(date)
    };

    const tmpl = _templates_js__WEBPACK_IMPORTED_MODULE_1__["default"].calendar;
    const calendarStr = Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_0__["fillTemplate"])({
      tmpl,
      data
    });

    return calendarStr;
  }

  getCells (date) {
    const tmpl = _templates_js__WEBPACK_IMPORTED_MODULE_1__["default"].day;
    const currentDate = new Date(date);
    const month = currentDate.getMonth();
    let currentDay = 1;
    let daysStr = '';

    while (currentDate.getMonth() === month) {
      const style = this.getCellStartStyle(currentDate);
      const mod = this.getCellMod(currentDate);

      const data = {
        dateTime: currentDate.toISOString(),
        dateNum: currentDate.getDate(),
        style,
        mod
      };
      daysStr += Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_0__["fillTemplate"])({
        tmpl,
        data
      });

      currentDate.setDate(++currentDay);
    }

    return daysStr;
  }

  getCellStartStyle (date) {
    let style = '';
    const day = date.getDate();

    if (day > 1) {
      return style;
    }

    let weekdayNum = date.getDay();
    if (weekdayNum === 0) {
      weekdayNum = 7;
    }

    style = `grid-column-start: ${weekdayNum}`;

    return style;
  }

  getCellMod (date) {
    let mod = '';

    if (this.newDates.length > 0) {
      return mod;
    }

    const dateMs = date.valueOf();
    const dateFromMs = this.dates.from.valueOf();
    const dateToMs = this.dates.to.valueOf();

    if (dateMs > dateFromMs && dateMs < dateToMs) {
      mod = _classes_js__WEBPACK_IMPORTED_MODULE_2__["default"].selectedBetween;
    } else if (dateMs === dateFromMs) {
      mod = _classes_js__WEBPACK_IMPORTED_MODULE_2__["default"].selectedFrom;
    } else if (dateMs === dateToMs) {
      mod = _classes_js__WEBPACK_IMPORTED_MODULE_2__["default"].selectedTo;
    }

    return mod;
  }
}


/***/ }),

/***/ "./src/components/RangePicker/styles.scss":
/*!************************************************!*\
  !*** ./src/components/RangePicker/styles.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/RangePicker/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/RangePicker/templates.js":
/*!*************************************************!*\
  !*** ./src/components/RangePicker/templates.js ***!
  \*************************************************/
/*! exports provided: input, selector, calendar, day, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "input", function() { return input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return selector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendar", function() { return calendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "day", function() { return day; });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes.js */ "./src/components/RangePicker/classes.js");


const input = `<button class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].input}" data-elem="input" type="button">
  <span
    class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].from}"
    data-elem="from">{from}</span> -
  <span
    class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].to}"
    data-elem="to"
    >{to}</span>
</button>`;

const selector = `
<div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].selector}" data-elem="selector">
  <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].selectorArrow}"></div>
  <button
    type="button"
    class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].selectorControl} ${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].selectorControl}--left"
    data-direction="prev"
  ></button>
  <button
    type="button"
    class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].selectorControl} ${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].selectorControl}--right"
    data-direction="next"
  ></button>
  <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].calendars}"></div>
</div>
`;

const calendar = `
<div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].calendar}">
  <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].monthIndicator}">
    <time datetime="{month}">{month}</time>
  </div>
  <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].dayOfWeek}">
    {weekdays}
  </div>
  <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].dateGrid}">
    {days}
  </div>
</div>
`;

const day = `
<button type="button" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].cell} {mod}" data-value="{dateTime}" style="{style}">{dateNum}</button>
`;

/* harmony default export */ __webpack_exports__["default"] = ({
  input,
  selector,
  calendar,
  day
});


/***/ }),

/***/ "./src/components/SortableTable/classes.js":
/*!*************************************************!*\
  !*** ./src/components/SortableTable/classes.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  elem: 'sortable-table',
  table: 'sortable-table__table',
  thead: 'sortable-table__thead',
  header: 'sortable-table__header',
  row: 'sortable-table__row',
  cell: 'sortable-table__cell',
  cellError: 'sortable-table__cell--error',
  cellSorter: 'sortable-table__cell--sorter',
  img: 'sortable-table__image',
  imgWrapper: 'sortable-table__image-wrapper',
  preview: 'sortable-table__preview',
  link: 'sortable-table__link',
  category: 'sortable-table__category',
  tooltipCategory: 'sortable-table__tooltip-category',
  tooltipSubcategory: 'sortable-table__tooltip-subcategory'
});


/***/ }),

/***/ "./src/components/SortableTable/directions.js":
/*!****************************************************!*\
  !*** ./src/components/SortableTable/directions.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  0: 'desc',
  1: 'asc'
});


/***/ }),

/***/ "./src/components/SortableTable/fields.js":
/*!************************************************!*\
  !*** ./src/components/SortableTable/fields.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/index.js */ "./src/helpers/index.js");
/* harmony import */ var _statusText_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statusText.js */ "./src/components/SortableTable/statusText.js");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes.js */ "./src/components/SortableTable/classes.js");




// Info & sorting methods for table columns
/* harmony default export */ __webpack_exports__["default"] = ({
  images: {
    title: 'Image',
    render ({ images }) {
      if (!images || !images[0].url) {
        return '';
      }
      const src = images[0].url;
      return `<div class="${_classes_js__WEBPACK_IMPORTED_MODULE_2__["default"].imgWrapper}">
      <img src="${src}" class="${_classes_js__WEBPACK_IMPORTED_MODULE_2__["default"].img}">
      <span style="background-image: url(${src})" class="${_classes_js__WEBPACK_IMPORTED_MODULE_2__["default"].preview}"><span>
      <div>`;
    },
    compare: null
  },
  title: {
    title: 'Name',
    render ({ title, id }) {
      return `
      ${title}
      <a class="${_classes_js__WEBPACK_IMPORTED_MODULE_2__["default"].link}" href="/products/${id}"></a>
      `;
    },
    compare (a, b) {
      return a.title.localeCompare(b.title);
    }
  },
  subcategory: {
    title: 'Category',
    render ({ subcategory }) {
      const category = subcategory.category;
      const tootipContent = `<span class="${_classes_js__WEBPACK_IMPORTED_MODULE_2__["default"].tooltipCategory}">${category.title}</span>/<span class="${_classes_js__WEBPACK_IMPORTED_MODULE_2__["default"].tooltipSubcategory}">${subcategory.title}</span>`;
      return `<span class="${_classes_js__WEBPACK_IMPORTED_MODULE_2__["default"].category}" data-tooltip-content="${Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_0__["escapeHTML"])(tootipContent)}">${subcategory.title}</span>`;
    },
    compare (a, b) {
      // Sorting by russian titles
      const aCatName = a.subcategory.title;
      const bCatName = b.subcategory.title;
      return aCatName.localeCompare(bCatName);
    }
  },
  quantity: {
    title: 'Quantity',
    render ({ quantity }) {
      return quantity;
    },
    compare (a, b) {
      return a.quantity - b.quantity;
    }
  },
  price: {
    title: 'Price',
    render ({ price }) {
      return Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_0__["formatTotal"])(price);
    },
    compare (a, b) {
      return a.price - b.price;
    }
  },
  status: {
    title: 'Status',
    render ({ status }) {
      return _statusText_js__WEBPACK_IMPORTED_MODULE_1__["default"][status];
    },
    compare (a, b) {
      return a.status - b.status;
    }
  }
});


/***/ }),

/***/ "./src/components/SortableTable/helpers.js":
/*!*************************************************!*\
  !*** ./src/components/SortableTable/helpers.js ***!
  \*************************************************/
/*! exports provided: getDirectionText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirectionText", function() { return getDirectionText; });
/* harmony import */ var _directions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directions.js */ "./src/components/SortableTable/directions.js");


const getDirectionText = isAsc => {
  return _directions_js__WEBPACK_IMPORTED_MODULE_0__["default"][+isAsc];
};


/***/ }),

/***/ "./src/components/SortableTable/index.js":
/*!***********************************************!*\
  !*** ./src/components/SortableTable/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SortableTable; });
/* harmony import */ var _Tooltips_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Tooltips/index.js */ "./src/components/Tooltips/index.js");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes.js */ "./src/components/SortableTable/classes.js");
/* harmony import */ var _statusText_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statusText.js */ "./src/components/SortableTable/statusText.js");
/* harmony import */ var _fields_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fields.js */ "./src/components/SortableTable/fields.js");
/* harmony import */ var _helpers_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/index.js */ "./src/helpers/index.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers.js */ "./src/components/SortableTable/helpers.js");
/* harmony import */ var _PageMessage_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PageMessage/index.js */ "./src/components/PageMessage/index.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.scss */ "./src/components/SortableTable/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_7__);










class SortableTable extends HTMLElement {
  constructor () {
    super();
    this.sorting = {
      current: null,
      isAsc: true
    };

    this.page = {
      items: 20,
      current: 0,
      isDataEnded: false
    };

    this.apiUrl = process.env.API_URL || 'https://course-js.javascript.ru';

    this.changeDate = this.changeDate.bind(this);
  }

  async connectedCallback () {
    const {
      url,
      fieldsList,
      orderField,
      orderDirection,
      isDynamic,
      from,
      to
    } = this.dataset;

    this.dates = {
      from,
      to
    };

    this.url = this.apiUrl + url;
    this.fieldsList = JSON.parse(fieldsList.replace(/'/g, '"'));
    this.isDynamic = +isDynamic;
    this.order = {
      field: orderField,
      direction: orderDirection
    };
    this.initTable = this.initTable.bind(this);
    this.isLoading = false;

    if (this.order && this.order.direction !== undefined) {
      this.sorting.isAsc = this.order.direction;
    }

    this.fetchUrl = this.getFetchUrl();
    // Try to throttle loading on scroll
    this.onBodyScrollThrottle = Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_4__["throttle"])(this.onBodyScroll, this, 500);

    this.initTable();

    document.addEventListener('changeDate', this.changeDate);
  }

  async loadData () {
    this.isLoading = true;
    this.table.dataset.loading = 1;

    try {
      const tableData = await Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_4__["fetchJson"])(this.fetchUrl);

      this.isLoading = false;
      this.table.dataset.loading = 0;

      return tableData;
    } catch (error) {
      // Show error message to user
      const message = new _PageMessage_index_js__WEBPACK_IMPORTED_MODULE_6__["default"]({ error });
      this.table.dataset.loading = 0;

      this.tBody.insertAdjacentHTML(
        'beforeEnd',
        `<tr class="${_classes_js__WEBPACK_IMPORTED_MODULE_1__["default"].row}"><td class="${_classes_js__WEBPACK_IMPORTED_MODULE_1__["default"].cellError}">${message.elem.outerHTML}</tr>`
      );
    }
  }

  initTable () {
    this.createLayout();
    this.addElemHeader();
    this.addTableEvents();

    this.fillTBody();
  }

  async fillTBody () {
    if (this.page.isDataEnded) {
      return;
    }

    this.tableRows = await this.loadData();

    // Last page
    if (this.tableRows.length < this.page.items) {
      this.page.isDataEnded = true;

      if (this.tableRows.length === 0) {
        return;
      }
    }

    if (!this.isDynamic && this.order && this.order.field) {
      this.sortRows(this.order.field);
      return;
    }

    this.renderTBody();
  }

  getFetchUrl () {
    const params = {
      start: this.page.current * this.page.items,
      end: (this.page.current + 1) * this.page.items,
      sort: this.order.field,
      order: Object(_helpers_js__WEBPACK_IMPORTED_MODULE_5__["getDirectionText"])(this.sorting.isAsc)
    };

    if (this.dates && this.dates.from) {
      params.from = this.dates.from;
      params.to = this.dates.to;
    }

    let paramsStr = '';
    for (const key in params) {
      let prefix = '_';
      if (key === 'from' || key === 'to') {
        prefix = '';
      }

      paramsStr += `&${prefix}${key}=${params[key]}`;
    }
    return this.url + paramsStr;
  }

  createLayout () {
    this.classList.add(_classes_js__WEBPACK_IMPORTED_MODULE_1__["default"].elem);
    this.table = document.createElement('table');
    this.table.classList.add(_classes_js__WEBPACK_IMPORTED_MODULE_1__["default"].table);
    this.tBody = document.createElement('tbody');
    this.table.append(this.tBody);
    this.table.insertAdjacentHTML(
      'beforeEnd',
      `<tfoot><tr><td colspan="${this.fieldsList.length}"><div class="spinner"></div></td></tr></tfoot>`
    );

    this.append(this.table);
  }

  // Fill table header with content
  addElemHeader () {
    let headerContent = '';

    this.fieldsList.forEach(field => {
      let thClass = _classes_js__WEBPACK_IMPORTED_MODULE_1__["default"].cell;
      const data = {
        sorter: '',
        sortDirection: ''
      };
      if (_fields_js__WEBPACK_IMPORTED_MODULE_3__["default"][field].compare) {
        thClass += ` ${_classes_js__WEBPACK_IMPORTED_MODULE_1__["default"].cellSorter}`;
        data.sorter = 'data-sorter="1"';
      }
      if (field === this.order.field) {
        const direction = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_5__["getDirectionText"])(this.sorting.isAsc);
        data.sortDirection = `data-sort-direction="${direction}"`;
      }
      headerContent += `<th class="${thClass}"
        data-name="${field}"
        ${data.sorter}
        ${data.sortDirection}
        >${_fields_js__WEBPACK_IMPORTED_MODULE_3__["default"][field].title}</th>`;
    });

    const theadStr = `<thead class="${_classes_js__WEBPACK_IMPORTED_MODULE_1__["default"].thead}"><tr class="${_classes_js__WEBPACK_IMPORTED_MODULE_1__["default"].header} ${_classes_js__WEBPACK_IMPORTED_MODULE_1__["default"].row}">
      ${headerContent}
    </tr></thead>`;

    this.table.insertAdjacentHTML('afterBegin', theadStr);

    this.sorting.current = this.table.querySelector('[data-sort-direction]');
  }

  // Sorter
  sorterOnClick (th) {
    const { name } = th.dataset;

    if (th.dataset.sortDirection) {
      this.sorting.isAsc = !this.sorting.isAsc;
    } else {
      if (this.sorting.current) {
        delete this.sorting.current.dataset.sortDirection;
      }
      this.sorting.isAsc = true;
      this.sorting.current = th;
    }

    th.dataset.sortDirection = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_5__["getDirectionText"])(this.sorting.isAsc);

    if (this.isDynamic) {
      this.sortRowsDynamic(name);
      return;
    }

    this.sortRows(name);
  }

  // Sorting
  sortRows (field) {
    this.tableRows.sort(_fields_js__WEBPACK_IMPORTED_MODULE_3__["default"][field].compare);

    if (!this.sorting.isAsc) {
      this.tableRows.reverse();
    }

    this.tBody.innerHTML = '';
    this.renderTBody();
  }

  // Sorting
  sortRowsDynamic (field) {
    this.order.field = field;
    this.page.current = 0;
    this.page.isDataEnded = false;
    this.fetchUrl = this.getFetchUrl();
    this.tBody.innerHTML = '';
    this.fillTBody();
  }

  // Adding delegated events to table
  addTableEvents () {
    this.table.addEventListener('click', this);
    window.addEventListener('scroll', this.onBodyScrollThrottle);
    this.tooltips = new _Tooltips_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]({ elem: this });
  }

  // Handles all events for table
  handleEvent () {
    // Sorting events
    if (event.target.dataset.sorter) {
      this.sorterOnClick(event.target);
    }
  }

  onBodyScroll () {
    if (this.isLoading) {
      return;
    }

    const htmlCoords = document.documentElement.getBoundingClientRect();
    const scrollDelta = htmlCoords.bottom - window.innerHeight;

    if (scrollDelta < 100) {
      this.page.current++;
      this.fetchUrl = this.getFetchUrl();
      this.fillTBody();
    }
  }

  // Fill table body cells with content
  renderTBody () {
    this.pageYOffset = window.pageYOffset;

    this.tableRows.forEach(row => {
      let rowContent = '';
      const { status } = row;

      this.fieldsList.forEach(field => {
        const tdClasses = [
          _classes_js__WEBPACK_IMPORTED_MODULE_1__["default"].cell,
          `${_classes_js__WEBPACK_IMPORTED_MODULE_1__["default"].cell}--${field}`,
          `${_classes_js__WEBPACK_IMPORTED_MODULE_1__["default"].cell}--${_statusText_js__WEBPACK_IMPORTED_MODULE_2__["default"][status].toLowerCase()}`
        ];
        const renderField = _fields_js__WEBPACK_IMPORTED_MODULE_3__["default"][field].render;
        const renderedContent = renderField(row);

        if (renderedContent) {
          rowContent += `<td class="${tdClasses.join(
            ' '
          )}">${renderedContent}</td>`;
        }
      });

      this.tBody.insertAdjacentHTML(
        'beforeEnd',
        `<tr class="${_classes_js__WEBPACK_IMPORTED_MODULE_1__["default"].row}">${rowContent}</tr>`
      );
    });

    if (this.pageYOffset) {
      window.scrollTo(0, this.pageYOffset);
    }
  }

  async changeDate (event) {
    if (!event.detail || !event.detail.dates) {
      return;
    }

    this.dates = event.detail.dates;
    this.fetchUrl = this.getFetchUrl();
    this.tBody.innerHTML = '';
    this.fillTBody();
  }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/components/SortableTable/statusText.js":
/*!****************************************************!*\
  !*** ./src/components/SortableTable/statusText.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  0: 'Disabled',
  1: 'Enabled'
});


/***/ }),

/***/ "./src/components/SortableTable/styles.scss":
/*!**************************************************!*\
  !*** ./src/components/SortableTable/styles.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/SortableTable/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/Tooltips/classes.js":
/*!********************************************!*\
  !*** ./src/components/Tooltips/classes.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  elem: 'tooltips-container',
  dimmed: 'tooltips-container--dimmed',
  tooltip: 'tooltip'
});


/***/ }),

/***/ "./src/components/Tooltips/index.js":
/*!******************************************!*\
  !*** ./src/components/Tooltips/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tooltips; });
/* harmony import */ var _helpers_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/index.js */ "./src/helpers/index.js");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes.js */ "./src/components/Tooltips/classes.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./src/components/Tooltips/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);




class Tooltips {
  constructor ({ elem, dimSiblings }) {
    this.elem = elem;
    this.elem.classList.add(_classes_js__WEBPACK_IMPORTED_MODULE_1__["default"].elem);
    this.dimSiblings = dimSiblings;

    this.tooltip = Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(`<div class="${_classes_js__WEBPACK_IMPORTED_MODULE_1__["default"].tooltip}"></div>`);
    this.elem.append(this.tooltip);

    this.listMouseMove = this.listMouseMove.bind(this);
    this.listMouseOut = this.listMouseOut.bind(this);

    this.elem.addEventListener('mousemove', this.listMouseMove);
    this.elem.addEventListener('mouseleave', this.listMouseOut);
  }

  listMouseMove () {
    if (!event.target.dataset.tooltipContent) {
      this.hideTooltip();
      return;
    }

    const { tooltipContent } = event.target.dataset;
    this.tooltip.innerHTML = tooltipContent;
    this.tooltip.dataset.visible = 1;

    // Parent container coords
    this.elemCoords = this.elem.getBoundingClientRect();
    const coords = {
      x: event.clientX - this.elemCoords.x,
      y: event.clientY - this.elemCoords.y
    };

    this.tooltip.style = `transform: translate(${coords.x}px, ${coords.y}px)`;

    // Fix cutting by window
    this.tooltipCoords = this.tooltip.getBoundingClientRect();
    const hiddenByWindow = this.tooltipCoords.right - document.documentElement.clientWidth;

    if (hiddenByWindow > 0) {
      coords.x -= hiddenByWindow;
      this.tooltip.style = `transform: translate(${coords.x}px, ${coords.y}px)`;
    }

    if (this.dimSiblings) {
      this.elem.classList.add(_classes_js__WEBPACK_IMPORTED_MODULE_1__["default"].dimmed);
    }
  }

  listMouseOut () {
    if (!event.target.dataset.tooltipContent) {
      this.hideTooltip();
    }
  }

  hideTooltip () {
    this.tooltip.dataset.visible = 0;
    this.elem.classList.remove(_classes_js__WEBPACK_IMPORTED_MODULE_1__["default"].dimmed);
  }
}


/***/ }),

/***/ "./src/components/Tooltips/styles.scss":
/*!*********************************************!*\
  !*** ./src/components/Tooltips/styles.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Tooltips/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/helpers/createElement.js":
/*!**************************************!*\
  !*** ./src/helpers/createElement.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// nice overview:
// https://grrr.tech/posts/create-dom-node-from-html-string/

// no IE11
const supportsTemplate = 'content' in document.createElement('template');

const createElement = supportsTemplate
  ? function (html) {
      const template = document.createElement('template');
      template.innerHTML = html;
      return template.content.firstElementChild;
    }
  : function (html) {
      const div = document.createElement('div');
      div.innerHTML = html;
      return div.firstElementChild;
    };

/* harmony default export */ __webpack_exports__["default"] = (createElement);


/***/ }),

/***/ "./src/helpers/escapeHTML.js":
/*!***********************************!*\
  !*** ./src/helpers/escapeHTML.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return escapeHTML; });
function escapeHTML (string) {
  return string
    .replace(/&/g, '&')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '<')
    .replace(/>/g, '>');
}


/***/ }),

/***/ "./src/helpers/fetchJson.js":
/*!**********************************!*\
  !*** ./src/helpers/fetchJson.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fetchJSON; });
/* harmony import */ var _lib_notifier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/notifier.js */ "./src/lib/notifier.js");
// Inspired by https://gist.github.com/iliakan/dd6ad0dadb6630544d1187c4c94ccf40


// console.clear();
async function fetchJSON (url) {
  let response;

  // Error while loading (bad url or connection)
  try {
    response = await fetch(url);
  } catch (error) {
    throw new FetchError(response, null, `Network error for url ${url}`);
  }

  // Bad response from server
  if (!response.ok) {
    let body;
    const statusText = response.statusText;

    try {
      body = await response.json();
      // can't reproduce getting body with not ok status
    } catch (error) {
      // do nothing
    }
    let message = `Error ${response.status} for url ${url}`;

    if (statusText) {
      message += `: ${statusText}`;
    }

    throw new FetchError(response, body, message);
  }

  // Response is correct, try to get data
  try {
    response = await response.json();
  } catch (error) {
    throw new FetchError(response, null, error.message);
  }

  return response;
}

class FetchError extends Error {
  constructor (response, body, message) {
    super(message);
    this.name = 'FetchError';

    this.response = response;
    this.body = body;
  }
}

// handle uncaught failed fetch through
window.addEventListener('unhandledrejection', event => {
  if (event.reason instanceof FetchError) {
    Object(_lib_notifier_js__WEBPACK_IMPORTED_MODULE_0__["default"])(event.reason.message, 'error');
  }
});


/***/ }),

/***/ "./src/helpers/fillTemplate.js":
/*!*************************************!*\
  !*** ./src/helpers/fillTemplate.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fillTemplate; });
function fillTemplate ({ tmpl, data }) {
  if (!tmpl || !data) {
    return;
  }

  return tmpl.replace(/{([^"]{1,})}/g, (match, str) => {
    if (data[str] !== undefined) {
      return data[str];
    }
    return '';
  });
}


/***/ }),

/***/ "./src/helpers/formatDate.js":
/*!***********************************!*\
  !*** ./src/helpers/formatDate.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatDate; });
function formatDate (str) {
  const date = new Date(str).toDateString();
  const dataParts = date.split(' ');
  const month = dataParts[1];
  const day = dataParts[2];
  const year = dataParts[3];

  return `${month} ${day}, ${year}`;
}


/***/ }),

/***/ "./src/helpers/formatTotal.js":
/*!************************************!*\
  !*** ./src/helpers/formatTotal.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatTotal; });
function formatTotal (num) {
  let formatted = num;
  if (num >= 1000) {
    const tail = num % 1000;
    formatted = `${(num - tail) / 1000},${tail}`;
  }

  return `$${formatted}`;
}


/***/ }),

/***/ "./src/helpers/getDateFromString.js":
/*!******************************************!*\
  !*** ./src/helpers/getDateFromString.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDateFromString; });
function getDateFromString (str) {
  const [day, month, year] = str.split('/');
  return new Date(year, month - 1, day);
};


/***/ }),

/***/ "./src/helpers/getWeekDays.js":
/*!************************************!*\
  !*** ./src/helpers/getWeekDays.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWeekDays; });
// Dirty way to get weekdays in current lang
function getWeekDays (tag) {
  const date = new Date(1970, 0, 5);
  let weekdaysStr = '';
  let counter = 0;

  while (counter < 7) {
    const dayname = date.toLocaleString('default', { weekday: 'narrow' });
    weekdaysStr += `<${tag}>${dayname}</${tag}>`;
    date.setDate(date.getDate() + 1);
    counter++;
  }

  return weekdaysStr;
}


/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/*! exports provided: createElement, escapeHTML, fillTemplate, formatDate, formatTotal, getDateFromString, getWeekDays, throttle, fetchJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ "./src/helpers/createElement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return _createElement_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _escapeHTML_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./escapeHTML.js */ "./src/helpers/escapeHTML.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "escapeHTML", function() { return _escapeHTML_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _fillTemplate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fillTemplate.js */ "./src/helpers/fillTemplate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fillTemplate", function() { return _fillTemplate_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _formatDate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatDate.js */ "./src/helpers/formatDate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return _formatDate_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _formatTotal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formatTotal.js */ "./src/helpers/formatTotal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatTotal", function() { return _formatTotal_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _getDateFromString_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDateFromString.js */ "./src/helpers/getDateFromString.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDateFromString", function() { return _getDateFromString_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _getWeekDays_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getWeekDays.js */ "./src/helpers/getWeekDays.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWeekDays", function() { return _getWeekDays_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _throttle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./throttle.js */ "./src/helpers/throttle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _throttle_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _fetchJson_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fetchJson.js */ "./src/helpers/fetchJson.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchJson", function() { return _fetchJson_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });














/***/ }),

/***/ "./src/helpers/throttle.js":
/*!*********************************!*\
  !*** ./src/helpers/throttle.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return throttle; });
function throttle (func, context, timeout) {
  let args;
  let isWaiting = false;
  let isFirstCall = true;

  return function () {
    args = arguments;

    if (isFirstCall) {
      func.apply(context, ...args);
      isFirstCall = false;
    }

    if (!isWaiting) {
      isWaiting = true;

      setTimeout(function () {
        func.apply(context, ...args);
        isWaiting = false;
      }, timeout);
    }
  };
}


/***/ }),

/***/ "./src/lib lazy recursive ^.*\\/pages\\/.*\\/index\\.js$":
/*!******************************************************************!*\
  !*** ./src/lib lazy ^.*\/pages\/.*\/index\.js$ namespace object ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/lib lazy recursive ^.*\\/pages\\/.*\\/index\\.js$";

/***/ }),

/***/ "./src/lib/Router.js":
/*!***************************!*\
  !*** ./src/lib/Router.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Router; });
/* harmony import */ var _renderPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderPage.js */ "./src/lib/renderPage.js");


class Router {
  constructor () {
    this.routes = [];

    this.documentClick = this.documentClick.bind(this);

    document.addEventListener('click', this.documentClick);
  }

  static instance () {
    if (!this._instance) {
      this._instance = new Router();
    }
    return this._instance;
  }

  addRoute (pattern, path) {
    this.routes.push({ pattern, path });
    return this;
  }

  setNotFoundPage (path) {
    this.notFoundPagePath = path;
    return this;
  }

  navigate (href) {
    history.pushState(null, null, href);
    this.route();
  }

  async route () {
    const strippedPath = cleanPath(window.location.pathname);
    let match;

    for (const route of this.routes) {
      match = strippedPath.match(route.pattern);
      if (match) {
        this.page = await this.changePage(route.path, match);
        break;
      }
    }

    if (!match) {
      this.page = await this.changePage(this.notFoundPagePath);
    }

    // custom event here
  }

  async changePage (path, match) {
    if (this.page && this.page.destroy) {
      this.page.destroy();
    }

    this.page = await Object(_renderPage_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path, match);
  }

  addListener () {
    window.addEventListener('popstate', () => this.route());
    this.route();
  }

  documentClick (event) {
    const link = event.target.closest('a');

    if (!link) {
      return;
    }

    const href = link.getAttribute('href');

    if (href && href.startsWith('/')) {
      event.preventDefault();
      this.navigate(href);
    }
  }
}

function cleanPath (path) {
  return decodeURI(path)
    .replace(/^\/|\/$/, '')
    .replace(/\?.*$/, '')
    .replace(/#.*$/, '');
}


/***/ }),

/***/ "./src/lib/notifier.js":
/*!*****************************!*\
  !*** ./src/lib/notifier.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return notify; });
/* harmony import */ var _components_Notification_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Notification/index.js */ "./src/components/Notification/index.js");


const notifContainer = document.createElement('div');
notifContainer.classList.add('notifications');
document.body.append(notifContainer);

let notifications = [];

async function notify (message, type) {
  const notification = new _components_Notification_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
    message,
    container: notifContainer,
    type
  });

  notifications.push(notification);

  if (notification.elem.offsetTop < 0) {
    notifications = notifications.filter(notification => {
      return !notification.isFinished;
    });
    notifications.shift().hideElem();
  }
}


/***/ }),

/***/ "./src/lib/renderPage.js":
/*!*******************************!*\
  !*** ./src/lib/renderPage.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderPage; });
async function renderPage (path, match) {
  const { default: Page } = await __webpack_require__("./src/lib lazy recursive ^.*\\/pages\\/.*\\/index\\.js$")(`${process.env.PUBLIC_URL}/pages/${path}/index.js`);
  const page = new Page(match);
  const renderedPage = await page.render();

  const contentElem = document.getElementById('content');
  contentElem.innerHTML = '';
  contentElem.append(renderedPage);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3NzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbHVtbkNoYXJ0L3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RyYWdnYWJsZUxpc3Qvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05vdGlmaWNhdGlvbi9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QYWdlTWVzc2FnZS9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SYW5nZVBpY2tlci9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Tb3J0YWJsZVRhYmxlL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Rvb2x0aXBzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2Nzcy9zdHlsZXMuc2Nzcz9mM2M4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbHVtbkNoYXJ0L2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29sdW1uQ2hhcnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29sdW1uQ2hhcnQvc3R5bGVzLnNjc3M/YTIzMCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db2x1bW5DaGFydC90ZW1wbGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRHJhZ2dhYmxlTGlzdC9ncmFiLWljb24uc3ZnIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RyYWdnYWJsZUxpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRHJhZ2dhYmxlTGlzdC9zdHlsZXMuc2Nzcz85N2M3Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvc3R5bGVzLnNjc3M/ZTJjMyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ob3RpZmljYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uL3N0eWxlcy5zY3NzP2RmOTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGFnZU1lc3NhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGFnZU1lc3NhZ2Uvc3R5bGVzLnNjc3M/MTEzNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SYW5nZVBpY2tlci9hcnJvdy1pY29uLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SYW5nZVBpY2tlci9jYWxlbmRhci1pY29uLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SYW5nZVBpY2tlci9jbGFzc2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JhbmdlUGlja2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JhbmdlUGlja2VyL3N0eWxlcy5zY3NzPzcxNWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmFuZ2VQaWNrZXIvdGVtcGxhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NvcnRhYmxlVGFibGUvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Tb3J0YWJsZVRhYmxlL2RpcmVjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU29ydGFibGVUYWJsZS9maWVsZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU29ydGFibGVUYWJsZS9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NvcnRhYmxlVGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU29ydGFibGVUYWJsZS9zdGF0dXNUZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NvcnRhYmxlVGFibGUvc3R5bGVzLnNjc3M/ZThjNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ub29sdGlwcy9jbGFzc2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Rvb2x0aXBzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Rvb2x0aXBzL3N0eWxlcy5zY3NzPzdjYzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9lc2NhcGVIVE1MLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2ZldGNoSnNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9maWxsVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvZm9ybWF0RGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9mb3JtYXRUb3RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9nZXREYXRlRnJvbVN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9nZXRXZWVrRGF5cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy90aHJvdHRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliIGxhenkgXi4qXFwvcGFnZXNcXC8uKlxcL2luZGV4XFwuanMkIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9Sb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9ub3RpZmllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3JlbmRlclBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSxjQUFjLFFBQVMsVUFBVSxvQkFBb0IseUJBQXlCLDBCQUEwQiwyQkFBMkIsc0JBQXNCLG1CQUFtQixxQkFBcUIsc0JBQXNCLHFCQUFxQiwyQkFBMkIsMEJBQTBCLG9CQUFvQiwwQkFBMEIsZ0NBQWdDLDZCQUE2QixrQkFBa0Isa0JBQWtCLEVBQUUsT0FBTywyQkFBMkIsRUFBRSxVQUFVLG9CQUFvQixFQUFFLFVBQVUsa0JBQWtCLHNCQUFzQixjQUFjLHFCQUFxQixxREFBcUQsZ0JBQWdCLEVBQUUsdUJBQXVCLGtCQUFrQix3QkFBd0Isd0JBQXdCLEVBQUUsUUFBUSx1QkFBdUIsRUFBRSw2QkFBNkIsbUJBQW1CLEVBQUUsYUFBYSwwQkFBMEIsRUFBRSx3Q0FBd0MsbUJBQW1CLG1CQUFtQixxQkFBcUIsaUNBQWlDLGtCQUFrQixFQUFFLCtCQUErQixnQkFBZ0Isd0NBQXdDLEVBQUUsa0JBQWtCLGtCQUFrQixnQkFBZ0IsRUFBRSxjQUFjLGtCQUFrQix1QkFBdUIsaUJBQWlCLFlBQVksYUFBYSxnQkFBZ0IsaUJBQWlCLGlCQUFpQiw2QkFBNkIsdUNBQXVDLHVCQUF1Qiw2QkFBNkIsRUFBRSxtQ0FBbUMsbUJBQW1CLEVBQUUsd0NBQXdDLGtCQUFrQix1QkFBdUIsV0FBVyxhQUFhLGNBQWMsWUFBWSxpQkFBaUIsMkJBQTJCLHNCQUFzQiwyQ0FBMkMsdUJBQXVCLDJDQUEyQyxFQUFFLHNCQUFzQixtQkFBbUIsb0JBQW9CLEVBQUUscUJBQXFCLG1CQUFtQixvQkFBb0IsNkJBQTZCLGlDQUFpQyxFQUFFLHVCQUF1QixVQUFVLDhCQUE4QixFQUFFLFFBQVEsZ0NBQWdDLEVBQUUsRUFBRTtBQUNqakU7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyxrQkFBa0Isa0JBQWtCLHVCQUF1QixxQkFBcUIsd0NBQXdDLHFCQUFxQixzQkFBc0Isc0JBQXNCLHdCQUF3QixrQkFBa0IsMkJBQTJCLHdDQUF3Qyw2Q0FBNkMsdUJBQXVCLEVBQUUsbUNBQW1DLHNCQUFzQixFQUFFLDRCQUE0Qix1QkFBdUIsaUJBQWlCLGtCQUFrQixvQkFBb0Isb0JBQW9CLEVBQUUsMEJBQTBCLGNBQWMsbUJBQW1CLHdCQUF3QixtQkFBbUIsdUJBQXVCLEVBQUUsMEJBQTBCLHFCQUFxQixxQkFBcUIsbUJBQW1CLEVBQUUseUJBQXlCLGtCQUFrQiwwQkFBMEIsZ0JBQWdCLGlCQUFpQixjQUFjLHNCQUFzQixlQUFlLHFCQUFxQixFQUFFLHlCQUF5QixpQkFBaUIscUJBQXFCLGtDQUFrQyxvQkFBb0IsRUFBRSxxQ0FBcUMsbUJBQW1CLEVBQUUsaUNBQWlDLG9CQUFvQixFQUFFLHFDQUFxQyxzQkFBc0IscUJBQXFCLEVBQUUsOEJBQThCLDRCQUE0QixFQUFFLGtEQUFrRCxxQkFBcUIsRUFBRSwyQkFBMkIsaUNBQWlDLEVBQUUsK0NBQStDLDBCQUEwQixFQUFFLDBCQUEwQixtQ0FBbUMsRUFBRSw4Q0FBOEMsNEJBQTRCLEVBQUUsMEJBQTBCLG9CQUFvQixtQkFBbUIsRUFBRTtBQUM1dEQ7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEcsc0NBQXNDLG1CQUFPLENBQUMsaUhBQXlEO0FBQ3ZHLG9DQUFvQyxtQkFBTyxDQUFDLHFFQUFpQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVMsb0JBQW9CLHVCQUF1QixFQUFFLDJCQUEyQixrQkFBa0Isd0JBQXdCLGlCQUFpQixFQUFFLG1DQUFtQyxvQkFBb0IscUJBQXFCLG1CQUFtQixrQkFBa0IseUJBQXlCLG9GQUFvRixrQkFBa0IsRUFBRSx3REFBd0Qsd0NBQXdDLEVBQUUsZ0VBQWdFLHVCQUF1QixFQUFFLG9DQUFvQyx1QkFBdUIsWUFBWSxhQUFhLDZCQUE2Qiw2Q0FBNkMscUJBQXFCLEVBQUUsNENBQTRDLGlCQUFpQixFQUFFO0FBQzd6QjtBQUNBOzs7Ozs7Ozs7Ozs7QUNUQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRztBQUNBO0FBQ0EsY0FBYyxRQUFTLFVBQVUsZ0JBQWdCLEVBQUUscUJBQXFCLGtCQUFrQixnQkFBZ0Isc0JBQXNCLEVBQUUsNkNBQTZDLGtCQUFrQiwyQkFBMkIsRUFBRSxnQkFBZ0IsaUJBQWlCLEVBQUUsaUJBQWlCLHFCQUFxQixxQkFBcUIsRUFBRSxrQkFBa0IscUJBQXFCLGtCQUFrQixFQUFFLHdCQUF3Qix3QkFBd0IsRUFBRSwyQkFBMkIsa0JBQWtCLG1DQUFtQyxFQUFFLG1CQUFtQixrQkFBa0Isb0JBQW9CLEVBQUUsbUNBQW1DLHVCQUF1QixFQUFFLDBCQUEwQixxQkFBcUIsRUFBRTtBQUNycUI7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyxtQkFBbUIsb0JBQW9CLGtCQUFrQiwyQkFBMkIsOEJBQThCLGdCQUFnQixpQkFBaUIsaUJBQWlCLHFCQUFxQixFQUFFLHVDQUF1QyxzQkFBc0IseUJBQXlCLDRCQUE0QixpQ0FBaUMsOENBQThDLHdCQUF3QixlQUFlLGlDQUFpQyxtQ0FBbUMsRUFBRSw0QkFBNEIsZ0NBQWdDLEVBQUUsMEJBQTBCLDZCQUE2QixFQUFFLDBDQUEwQywyQkFBMkIsRUFBRSx1QkFBdUIsUUFBUSxpQkFBaUIsK0JBQStCLEVBQUUsRUFBRSx3QkFBd0IsVUFBVSxpQkFBaUIsK0JBQStCLHVCQUF1QixFQUFFLFFBQVEsaUJBQWlCLDJCQUEyQixFQUFFLEVBQUU7QUFDcDdCO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSxjQUFjLFFBQVMsa0JBQWtCLHFCQUFxQixzQkFBc0Isa0JBQWtCLHFDQUFxQyxpQ0FBaUMsRUFBRSwwQkFBMEIsMEJBQTBCLEVBQUUsMEJBQTBCLHFCQUFxQixrQkFBa0IscUJBQXFCLGlDQUFpQyxFQUFFLCtCQUErQixpREFBaUQsRUFBRTtBQUMvYTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRyxzQ0FBc0MsbUJBQU8sQ0FBQyxpSEFBeUQ7QUFDdkcsb0NBQW9DLG1CQUFPLENBQUMsMkVBQXFCO0FBQ2pFLG9DQUFvQyxtQkFBTyxDQUFDLHFFQUFrQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUyxvQ0FBb0MsdUJBQXVCLGdCQUFnQixFQUFFLHlCQUF5Qix5QkFBeUIsaUNBQWlDLG9CQUFvQix3QkFBd0Isb0JBQW9CLHNCQUFzQix3Q0FBd0MsdUJBQXVCLGtCQUFrQixtR0FBbUcsbUNBQW1DLCtCQUErQixFQUFFLG9HQUFvRyw4QkFBOEIsRUFBRSxnQ0FBZ0MseUJBQXlCLGtCQUFrQixFQUFFLDJDQUEyQyxvQkFBb0IsRUFBRSw0QkFBNEIsa0JBQWtCLG1DQUFtQyx1QkFBdUIsdUJBQXVCLCtDQUErQyx3QkFBd0IsbUNBQW1DLG1CQUFtQix1QkFBdUIsMkJBQTJCLGFBQWEsZUFBZSxFQUFFLCtDQUErQyx5QkFBeUIsRUFBRSxrQ0FBa0MsZ0JBQWdCLGlCQUFpQix1QkFBdUIsaUJBQWlCLGdCQUFnQixxQkFBcUIsRUFBRSx5Q0FBeUMsa0JBQWtCLHVCQUF1QixnQkFBZ0IsaUJBQWlCLDZCQUE2QiwrREFBK0QsY0FBYyxjQUFjLCtDQUErQyxFQUFFLDZCQUE2QixrQkFBa0IsRUFBRSw0QkFBNEIsaUJBQWlCLEVBQUUsdUNBQXVDLHNCQUFzQixFQUFFLG1DQUFtQyx1QkFBdUIscUJBQXFCLG9CQUFvQixzQkFBc0Isb0JBQW9CLGlDQUFpQyxFQUFFLG9DQUFvQyx1QkFBdUIsY0FBYyxnQkFBZ0IsaUJBQWlCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLG9CQUFvQix3QkFBd0Isc0ZBQXNGLDhCQUE4QixjQUFjLEVBQUUsMENBQTBDLGdCQUFnQixFQUFFLDBDQUEwQyxlQUFlLEVBQUUsMkNBQTJDLGdCQUFnQiw4QkFBOEIsRUFBRSx5REFBeUQsa0JBQWtCLDBDQUEwQyxFQUFFLCtCQUErQixxQkFBcUIscUJBQXFCLG9CQUFvQixzQkFBc0IsdUJBQXVCLHVCQUF1QixFQUFFLDBDQUEwQyxxQkFBcUIsRUFBRSx3QkFBd0IsdUJBQXVCLGNBQWMsZ0JBQWdCLGlCQUFpQixrQ0FBa0MsaUNBQWlDLHFCQUFxQixxQkFBcUIsb0JBQW9CLHNCQUFzQixvQkFBb0IsRUFBRSx3S0FBd0ssa0NBQWtDLHdCQUF3QixFQUFFLHlEQUF5RCxrQkFBa0Isd0NBQXdDLGlDQUFpQyx3QkFBd0IsRUFBRSx5VEFBeVQseUNBQXlDLGlDQUFpQyxFQUFFLHNEQUFzRCx3Q0FBd0MsRUFBRTtBQUM1N0g7QUFDQTs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyxvQkFBb0IsdUJBQXVCLGdCQUFnQixvQkFBb0Isc0JBQXNCLHdCQUF3QixtQ0FBbUMsRUFBRSw0QkFBNEIsZ0JBQWdCLEVBQUUsMEJBQTBCLHVCQUF1QixrQkFBa0IsOENBQThDLDBCQUEwQixFQUFFLDJCQUEyQixrQkFBa0Isb0JBQW9CLHNCQUFzQiw4QkFBOEIsa0JBQWtCLHdCQUF3QiwrQ0FBK0MsRUFBRSx1Q0FBdUMsdUJBQXVCLEVBQUUsc0NBQXNDLHdCQUF3QixFQUFFLGtDQUFrQyx5QkFBeUIsdUJBQXVCLEVBQUUsNEJBQTRCLG1CQUFtQixxQkFBcUIsZUFBZSxXQUFXLG1DQUFtQyxFQUFFLG1EQUFtRCxxQkFBcUIsNkJBQTZCLEVBQUUsa0VBQWtFLG9CQUFvQixFQUFFLG9FQUFvRSw4QkFBOEIsRUFBRSxxQ0FBcUMsZ0JBQWdCLEVBQUUsdURBQXVELGtCQUFrQixtQkFBbUIsYUFBYSxjQUFjLHNCQUFzQix1QkFBdUIsc0JBQXNCLDJDQUEyQyxFQUFFLCtEQUErRCxxQkFBcUIsRUFBRSxnRUFBZ0Usd0JBQXdCLEVBQUUseUNBQXlDLG9CQUFvQix1QkFBdUIsRUFBRSxvQ0FBb0MsdUJBQXVCLEVBQUUsNEJBQTRCLG1CQUFtQixpQkFBaUIsZ0JBQWdCLG9CQUFvQixvQkFBb0Isd0JBQXdCLGlCQUFpQix3Q0FBd0MsdUJBQXVCLEVBQUUsOEJBQThCLHVCQUF1QixlQUFlLFdBQVcsWUFBWSxnQkFBZ0IsaUJBQWlCLGVBQWUsbUJBQW1CLG1DQUFtQyxtQ0FBbUMsNkJBQTZCLGlDQUFpQyxpQ0FBaUMsd0NBQXdDLHlCQUF5QixFQUFFLG9DQUFvQyxnQkFBZ0IsaUJBQWlCLGVBQWUsRUFBRSwyQkFBMkIsdUJBQXVCLFdBQVcsYUFBYSxjQUFjLFlBQVksRUFBRSwrQkFBK0IsdUJBQXVCLG9CQUFvQixFQUFFLHVDQUF1Qyx1QkFBdUIsRUFBRTtBQUMvc0Y7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyx3QkFBd0IsdUJBQXVCLEVBQUUsY0FBYyx1QkFBdUIsZUFBZSxZQUFZLFdBQVcsMEJBQTBCLDBCQUEwQixxQkFBcUIsdUJBQXVCLDRDQUE0QyxtQkFBbUIsZ0JBQWdCLCtCQUErQixlQUFlLDRCQUE0Qix5QkFBeUIsRUFBRSxrQ0FBa0MsZUFBZSxFQUFFLDRCQUE0QixlQUFlLDRCQUE0QixFQUFFLG9FQUFvRSxnQkFBZ0IsRUFBRTtBQUN6bkI7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05hOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qjs7QUFFOUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsY0FBYztBQUNuRTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQzdGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tYmx1ZTogIzEwOUNGMTtcXG4gIC0tZGFyay1ibHVlOiAjMzM0RDZFO1xcbiAgLS1saWdodC1ibHVlOiAjQ0ZFQkZDO1xcbiAgLS1taWRkbGUtYmx1ZTogIzlGRDdGOTtcXG4gIC0teWVsbG93OiAjRkZCOTQ2O1xcbiAgLS1yZWQ6ICNGNzY4NUI7XFxuICAtLWdyZWVuOiAjMkVENDdBO1xcbiAgLS1wdXJwbGU6ICM4ODVBRjg7XFxuICAtLWJsYWNrOiAjMTkyQTNFO1xcbiAgLS10YWJsZS1ibGFjazogIzMyM0M0NztcXG4gIC0tdGFibGUtZ3JleTogIzcwNzY4MztcXG4gIC0tZ3JleTogIzkwQTBCNztcXG4gIC0tZ3JleS1saWdodDogI0MyQ0ZFMDtcXG4gIC0tZ3JleS1leHRyYS1saWdodDogI0VGRjFGNDtcXG4gIC0tZ3JleS1za2VsZXRvbjogI0Y1RjZGODtcXG4gIC0td2hpdGU6ICNGRkY7XFxuICAtLXJhZGl1czogNHB4OyB9XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuSFRNTCB7XFxuICBmb250LXNpemU6IDE2cHg7IH1cXG5cXG5CT0RZIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQ6ICNGRkY7XFxuICBmb250OiAxcmVtLzEuNCBUcmVidWNoZXQgTVMsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogIzAwMDsgfVxcblxcbkgxLFxcbkgyLFxcbkgzLFxcbkg0IHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAuNWVtO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxcblxcbkgxIHtcXG4gIGZvbnQtc2l6ZTogMi43NXJlbTsgfVxcblxcbkEsXFxuQTp2aXNpdGVkLFxcbkE6aG92ZXIge1xcbiAgY29sb3I6IGluaGVyaXQ7IH1cXG5cXG5BOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcblxcbkJVVFRPTixcXG5JTlBVVCxcXG5URVhUQVJFQSxcXG5TRUxFQ1Qge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAuNXJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xcbiAgZm9udDogaW5oZXJpdDsgfVxcblxcbklOUFVULFxcblRFWFRBUkVBLFxcblNFTEVDVCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXktbGlnaHQpOyB9XFxuXFxuLnBhZ2UtbGF5b3V0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5zcGlubmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDJyZW07XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogNHJlbTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gIGJveC1zaGFkb3c6IDAgMCAuNXJlbSBjdXJyZW50Q29sb3I7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjb2xvcjogdmFyKC0tZ3JleS1saWdodCk7IH1cXG5cXG5bZGF0YS1sb2FkaW5nPVxcXCIxXFxcIl0gLnNwaW5uZXIge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4uc3Bpbm5lcjo6YmVmb3JlLFxcbi5zcGlubmVyOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDNweCBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogY3VycmVudENvbG9yIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYW5pbWF0aW9uOiByb3RhdGUgMi4xcyBsaW5lYXIgaW5maW5pdGU7IH1cXG5cXG4uc3Bpbm5lcjo6YmVmb3JlIHtcXG4gIHdpZHRoOiAyLjI1cmVtO1xcbiAgaGVpZ2h0OiAyLjI1cmVtOyB9XFxuXFxuLnNwaW5uZXI6OmFmdGVyIHtcXG4gIHdpZHRoOiAxLjI1cmVtO1xcbiAgaGVpZ2h0OiAxLjI1cmVtO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjNzO1xcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogcmV2ZXJzZTsgfVxcblxcbkBrZXlmcmFtZXMgcm90YXRlIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jb2x1bW4tY2hhcnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi13aWR0aDogMTgwcHg7XFxuICBmbGV4LWJhc2lzOiBjYWxjKCgxMDAlIC0gMnJlbSkgLyAzKTtcXG4gIG1heC13aWR0aDogMzAwcHg7XFxuICBtaW4taGVpZ2h0OiAxNTBweDtcXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xcbiAgbWFyZ2luOiAwIDAgLjVyZW0gMDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleS1saWdodCk7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHZhcigtLWdyZXktbGlnaHQpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuXFxuLmNvbHVtbi1jaGFydCArIC5jb2x1bW4tY2hhcnQge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07IH1cXG5cXG4uY29sdW1uLWNoYXJ0X19jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXgtd2lkdGg6IDEwMCU7IH1cXG5cXG4uY29sdW1uLWNoYXJ0X190aXRsZSB7XFxuICBtYXJnaW46IDA7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGNvbG9yOiB2YXIoLS1ncmV5KTsgfVxcblxcbi5jb2x1bW4tY2hhcnRfX3RvdGFsIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBmb250LXNpemU6IDEuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDE7IH1cXG5cXG4uY29sdW1uLWNoYXJ0X19saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi10b3A6IC41cmVtO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7IH1cXG5cXG4uY29sdW1uLWNoYXJ0X19pdGVtIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmV5LWxpZ2h0KTtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5jb2x1bW4tY2hhcnRfX2l0ZW06Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4uY29sdW1uLWNoYXJ0X190b29sdGlwLWRhdGUge1xcbiAgZm9udC1zaXplOiAuOWVtOyB9XFxuXFxuLmNvbHVtbi1jaGFydF9fdG9vbHRpcC1xdWFudGl0eSB7XFxuICBtYXJnaW4tdG9wOiAuMjVlbTtcXG4gIGZvbnQtc2l6ZTogMS4xZW07IH1cXG5cXG4uY29sdW1uLWNoYXJ0LS1jdXN0b21lcnMge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6IGdvbGQ7IH1cXG5cXG4uY29sdW1uLWNoYXJ0LS1jdXN0b21lcnMgLmNvbHVtbi1jaGFydF9faXRlbSB7XFxuICBiYWNrZ3JvdW5kOiBnb2xkOyB9XFxuXFxuLmNvbHVtbi1jaGFydC0tb3JkZXJzIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0dXJxdW9pc2U7IH1cXG5cXG4uY29sdW1uLWNoYXJ0LS1vcmRlcnMgLmNvbHVtbi1jaGFydF9faXRlbSB7XFxuICBiYWNrZ3JvdW5kOiB0dXJxdW9pc2U7IH1cXG5cXG4uY29sdW1uLWNoYXJ0LS1zYWxlcyB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogeWVsbG93Z3JlZW47IH1cXG5cXG4uY29sdW1uLWNoYXJ0LS1zYWxlcyAuY29sdW1uLWNoYXJ0X19pdGVtIHtcXG4gIGJhY2tncm91bmQ6IHllbGxvd2dyZWVuOyB9XFxuXFxuLmNvbHVtbi1jaGFydF9fZXJyb3Ige1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuL2dyYWItaWNvbi5zdmdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5kcmFnZ2FibGUtbGlzdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uZHJhZ2dhYmxlLWxpc3RfX2l0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IGdyYWI7IH1cXG4gIC5kcmFnZ2FibGUtbGlzdF9faXRlbTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIHdpZHRoOiAxMXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgNTAlIDUwJSBuby1yZXBlYXQ7XFxuICAgIG9wYWNpdHk6IC41OyB9XFxuXFxuLmRyYWdnYWJsZS1saXN0IC5kcmFnZ2FibGUtbGlzdF9faXRlbS0tcGxhY2Vob2xkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleS1saWdodCk7IH1cXG4gIC5kcmFnZ2FibGUtbGlzdCAuZHJhZ2dhYmxlLWxpc3RfX2l0ZW0tLXBsYWNlaG9sZGVyOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lOyB9XFxuXFxuLmRyYWdnYWJsZS1saXN0X19pdGVtLS1kcmFnZ2VkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxcmVtIHJnYmEoMCwgMCwgMCwgMC4zNSk7XFxuICBjdXJzb3I6IGdyYWJiaW5nOyB9XFxuICAuZHJhZ2dhYmxlLWxpc3RfX2l0ZW0tLWRyYWdnZWQ6OmJlZm9yZSB7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wYWdlIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnBhZ2UtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoOyB9XFxuXFxuLnBhZ2UtbWFpbixcXG4ucGFnZS1hc2lkZSxcXG4ucGFnZS1mb290ZXIge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4ucGFnZS1tYWluIHtcXG4gIGZsZXgtZ3JvdzogMTsgfVxcblxcbi5wYWdlLWFzaWRlIHtcXG4gIG1pbi13aWR0aDogMjUwcHg7XFxuICBiYWNrZ3JvdW5kOiAjRUVFOyB9XFxuXFxuLnBhZ2UtZm9vdGVyIHtcXG4gIGZsZXgtYmFzaXM6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuICAucGFnZS1mb290ZXIgQSArIEEge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTsgfVxcblxcbi5wYWdlLWNvbnRlbnRfX2hlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuXFxuLnBhZ2Utc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwOyB9XFxuICAucGFnZS1zZWN0aW9uICsgLnBhZ2Utc2VjdGlvbiB7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07IH1cXG5cXG4ucGFnZS1zZWN0aW9uX190aXRsZSB7XFxuICBmbGV4LWJhc2lzOiAxMDAlOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubm90aWZpY2F0aW9ucyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICByaWdodDogMXJlbTtcXG4gIGJvdHRvbTogMXJlbTtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIG1heC1oZWlnaHQ6IDUwdmg7IH1cXG5cXG4vKiBOb3RpZmljYXRpb24gKi9cXG4ubm90aWZpY2F0aW9uIHtcXG4gIG1hcmdpbi10b3A6IC41cmVtO1xcbiAgcGFkZGluZzogLjc1cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XFxuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcmVtKTtcXG4gIGFuaW1hdGlvbjogZmFkZUluIC41cyBmb3J3YXJkczsgfVxcbiAgLm5vdGlmaWNhdGlvbi0td2FybmluZyB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXllbGxvdyk7IH1cXG4gIC5ub3RpZmljYXRpb24tLWVycm9yIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTsgfVxcblxcbi5ub3RpZmljYXRpb25bZGF0YS1zdGF0ZT1cXFwiaGlkZGVuXFxcIl0ge1xcbiAgYW5pbWF0aW9uOiBmYWRlT3V0IC41czsgfVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDsgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMXJlbTsgfSB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucGFnZS1tZXNzYWdlIHtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBtYXJnaW46IDJyZW0gYXV0bztcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kOiBsaWdodGdvbGRlbnJvZHllbGxvdztcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7IH1cXG5cXG4ucGFnZS1tZXNzYWdlLS1lcnJvciB7XFxuICBiYWNrZ3JvdW5kOiBtaXN0eXJvc2U7IH1cXG5cXG4ucGFnZS1tZXNzYWdlX19lcnJvciB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQ6ICNGRkY7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpOyB9XFxuXFxuLnBhZ2UtbWVzc2FnZV9fZXJyb3ItdGV4dCB7XFxuICBmb250LWZhbWlseTogQ291cmllciBOZXcsIENvdXJpZXIsIG1vbm9zcGFjZTsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4vY2FsZW5kYXItaWNvbi5zdmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSByZXF1aXJlKFwiLi9hcnJvdy1pY29uLnN2Z1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIFJhbmdlcGlja2VyICovXFxuLnJhbmdlcGlja2VyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDExOyB9XFxuXFxuLnJhbmdlcGlja2VyX19pbnB1dCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIHBhZGRpbmc6IDEycHggMTZweCAxMnB4IDQwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LWxpZ2h0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSkgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSAxNnB4IGNlbnRlciBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDE4cHggMThweDsgfVxcblxcbi5yYW5nZXBpY2tlcl9vcGVuIC5yYW5nZXBpY2tlcl9faW5wdXQsXFxuLnJhbmdlcGlja2VyX19pbnB1dDpmb2N1cyxcXG4ucmFuZ2VwaWNrZXJfX2lucHV0OmFjdGl2ZSB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWJsdWUpOyB9XFxuXFxuLnJhbmdlcGlja2VyX19pbnB1dCA+IFNQQU4ge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBtYXJnaW46IDAgNHB4OyB9XFxuXFxuLnJhbmdlcGlja2VyX19pbnB1dCA+IFNQQU46bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX3NlbGVjdG9yIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBwYWRkaW5nOiAzMnB4IDI2cHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3gtc2hhZG93OiAwIDRweCAyOXB4IHJnYmEoMCwgMCwgMCwgMC4wOSk7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleDogMSAwIGF1dG87XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IGNhbGMoMTAwJSArIDE2cHgpO1xcbiAgcmlnaHQ6IDA7XFxuICB6LWluZGV4OiAxOyB9XFxuXFxuLnJhbmdlcGlja2VyLS1vcGVuIC5yYW5nZXBpY2tlcl9fc2VsZWN0b3Ige1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX3NlbGVjdG9yLWFycm93IHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAxMDAlO1xcbiAgcmlnaHQ6IDYwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLnJhbmdlcGlja2VyX19zZWxlY3Rvci1hcnJvdzo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogMTJweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSg0NWRlZyk7XFxuICB0b3A6IDEwMCU7XFxuICBsZWZ0OiA1MCU7XFxuICBib3gtc2hhZG93OiAwIDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wOSk7IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX2NhbGVuZGFycyB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuLnJhbmdlcGlja2VyX19jYWxlbmRhciB7XFxuICB3aWR0aDogMjUycHg7IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX2NhbGVuZGFyOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IDI2cHg7IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX21vbnRoLWluZGljYXRvciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlLXRleHQpOyB9XFxuXFxuLnJhbmdlcGlja2VyX19zZWxlY3Rvci1jb250cm9sIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMzJweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IC4zcyBhbGw7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGxlZnQgY2VudGVyIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogOXB4IDEzcHg7XFxuICBib3JkZXI6IDA7IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX3NlbGVjdG9yLWNvbnRyb2w6aG92ZXIge1xcbiAgb3BhY2l0eTogLjg7IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX3NlbGVjdG9yLWNvbnRyb2wtLWxlZnQge1xcbiAgbGVmdDogMjZweDsgfVxcblxcbi5yYW5nZXBpY2tlcl9fc2VsZWN0b3ItY29udHJvbC0tcmlnaHQge1xcbiAgcmlnaHQ6IDI2cHg7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyB9XFxuXFxuLnJhbmdlcGlja2VyX19kYXktb2Ytd2VlayxcXG4ucmFuZ2VwaWNrZXJfX2RhdGUtZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTsgfVxcblxcbi5yYW5nZXBpY2tlcl9fZGF5LW9mLXdlZWsge1xcbiAgbWFyZ2luLXRvcDogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIGNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi8qIERhdGVzICovXFxuLnJhbmdlcGlja2VyX19kYXRlLWdyaWQge1xcbiAgbWFyZ2luLXRvcDogMTZweDsgfVxcblxcbi5yYW5nZXBpY2tlcl9fY2VsbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXI6IDA7XFxuICB3aWR0aDogMzZweDtcXG4gIGhlaWdodDogMzZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHZhcigtLWRhcmstYmx1ZS10ZXh0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX2NlbGw6YWN0aXZlLFxcbi5yYW5nZXBpY2tlcl9fY2VsbC5yYW5nZXBpY2tlcl9fc2VsZWN0ZWQsXFxuLnJhbmdlcGlja2VyX19jZWxsLnJhbmdlcGlja2VyX19zZWxlY3RlZC1mcm9tLFxcbi5yYW5nZXBpY2tlcl9fY2VsbC5yYW5nZXBpY2tlcl9fc2VsZWN0ZWQtdG8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpOyB9XFxuXFxuLnJhbmdlcGlja2VyX19jZWxsOmhvdmVyLFxcbi5yYW5nZXBpY2tlcl9fY2VsbDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlLXRleHQpO1xcbiAgdHJhbnNpdGlvbjogLjJzIGFsbDsgfVxcblxcbi5yYW5nZXBpY2tlcl9fY2VsbC5yYW5nZXBpY2tlcl9fc2VsZWN0ZWQ6aG92ZXIsXFxuLnJhbmdlcGlja2VyX19jZWxsLnJhbmdlcGlja2VyX19zZWxlY3RlZC1mcm9tOmhvdmVyLFxcbi5yYW5nZXBpY2tlcl9fY2VsbC5yYW5nZXBpY2tlcl9fc2VsZWN0ZWQtdG86aG92ZXIsXFxuLnJhbmdlcGlja2VyX19jZWxsLnJhbmdlcGlja2VyX19zZWxlY3RlZDpmb2N1cyxcXG4ucmFuZ2VwaWNrZXJfX2NlbGwucmFuZ2VwaWNrZXJfX3NlbGVjdGVkLWZyb206Zm9jdXMsXFxuLnJhbmdlcGlja2VyX19jZWxsLnJhbmdlcGlja2VyX19zZWxlY3RlZC10bzpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWRkbGUtYmx1ZSk7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlLXRleHQpOyB9XFxuXFxuLnJhbmdlcGlja2VyX19jZWxsLnJhbmdlcGlja2VyX19zZWxlY3RlZC1iZXR3ZWVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc29ydGFibGUtdGFibGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAyMDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7IH1cXG5cXG4uc29ydGFibGUtdGFibGVfX3RhYmxlIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnNvcnRhYmxlLXRhYmxlX19yb3cge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQ6IGF1dG8tZmxvdyAvIDEyJSAzOCUgMjAlIDEwJSAxMCUgMTAlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuXFxuLnNvcnRhYmxlLXRhYmxlX19jZWxsIHtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIGNvbG9yOiB2YXIoLS10YWJsZS1ibGFjayk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ncmV5LWxpZ2h0KTsgfVxcblxcbi5zb3J0YWJsZS10YWJsZV9fY2VsbDpmaXJzdC1jaGlsZCB7XFxuICBwYWRkaW5nLWxlZnQ6IDMycHg7IH1cXG5cXG4uc29ydGFibGUtdGFibGVfX2NlbGw6bGFzdC1jaGlsZCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMnB4OyB9XFxuXFxuLnNvcnRhYmxlLXRhYmxlX19jZWxsLS1lcnJvciB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uLWVuZDogNzsgfVxcblxcbi5zb3J0YWJsZS10YWJsZV9fdGhlYWQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgei1pbmRleDogMztcXG4gIHRvcDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTsgfVxcblxcbi5zb3J0YWJsZS10YWJsZV9faGVhZGVyIC5zb3J0YWJsZS10YWJsZV9fY2VsbCB7XFxuICBtaW4td2lkdGg6IDEyMHB4O1xcbiAgY29sb3I6IHZhcigtLWdyZXktbGlnaHQpOyB9XFxuXFxuLnNvcnRhYmxlLXRhYmxlX19oZWFkZXIgLnNvcnRhYmxlLXRhYmxlX19jZWxsW2RhdGEtc29ydGFibGVdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5zb3J0YWJsZS10YWJsZV9fY2VsbC0tcXVhbnRpdHksXFxuLnNvcnRhYmxlLXRhYmxlX19jZWxsLS1wcmljZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyB9XFxuXFxuLnNvcnRhYmxlLXRhYmxlX19jZWxsLS1kaXNhYmxlZCB7XFxuICBvcGFjaXR5OiAuNTsgfVxcblxcbi5zb3J0YWJsZS10YWJsZV9fY2VsbFtkYXRhLXNvcnQtZGlyZWN0aW9uXTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgbWFyZ2luLXRvcDogLjI1ZW07XFxuICBtYXJnaW4tbGVmdDogLjI1ZW07XFxuICBib3JkZXI6IDVweCBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogY3VycmVudENvbG9yIHRyYW5zcGFyZW50OyB9XFxuXFxuLnNvcnRhYmxlLXRhYmxlX19jZWxsW2RhdGEtc29ydC1kaXJlY3Rpb249XFxcImFzY1xcXCJdOjphZnRlciB7XFxuICBib3JkZXItdG9wOiBub25lOyB9XFxuXFxuLnNvcnRhYmxlLXRhYmxlX19jZWxsW2RhdGEtc29ydC1kaXJlY3Rpb249XFxcImRlc2NcXFwiXTo6YWZ0ZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxcblxcbi5zb3J0YWJsZS10YWJsZV9fY2VsbC0tc29ydGVyOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1ncmV5KTsgfVxcblxcbi5zb3J0YWJsZS10YWJsZV9faW1hZ2Utd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uc29ydGFibGUtdGFibGVfX2ltYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtaW4td2lkdGg6IDQwcHg7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgcGFkZGluZzogNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleS1saWdodCk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7IH1cXG5cXG4uc29ydGFibGUtdGFibGVfX3ByZXZpZXcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9wYWNpdHk6IDA7XFxuICBwYWRkaW5nOiAuMjVlbTtcXG4gIGJhY2tncm91bmQtb3JpZ2luOiBjb250ZW50LWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleS1saWdodCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjI1czsgfVxcblxcbi5zb3J0YWJsZS10YWJsZV9fcHJldmlldzpob3ZlciB7XFxuICB3aWR0aDogMzAwJTtcXG4gIGhlaWdodDogMzAwJTtcXG4gIG9wYWNpdHk6IDE7IH1cXG5cXG4uc29ydGFibGUtdGFibGVfX2xpbmsge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwOyB9XFxuXFxuLnNvcnRhYmxlLXRhYmxlX19jYXRlZ29yeSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uc29ydGFibGUtdGFibGVfX3Rvb2x0aXAtY2F0ZWdvcnkge1xcbiAgY29sb3I6IHZhcigtLWdyZXkpOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudG9vbHRpcHMtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi50b29sdGlwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDM7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgbWFyZ2luOiAxcmVtIDAgMCAxcmVtO1xcbiAgcGFkZGluZzogLjVyZW0gLjc1cmVtO1xcbiAgYmFja2dyb3VuZDogI0VFRTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgY29sb3I6ICM1NTU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycztcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuXFxuLnRvb2x0aXBbZGF0YS12aXNpYmxlPVxcXCIxXFxcIl0ge1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbltkYXRhLXRvb2x0aXAtY29udGVudF0ge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzOyB9XFxuXFxuLnRvb2x0aXBzLWNvbnRhaW5lci0tZGltbWVkIFtkYXRhLXRvb2x0aXAtY29udGVudF06bm90KDpob3Zlcikge1xcbiAgb3BhY2l0eTogLjQ7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShtb2R1bGVJZCwgbGlzdCwgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGNzczogbGlzdFtpXVsxXSxcbiAgICAgIG1lZGlhOiBsaXN0W2ldWzJdLFxuICAgICAgc291cmNlTWFwOiBsaXN0W2ldWzNdXG4gICAgfTtcblxuICAgIGlmIChzdHlsZXNJbkRvbVttb2R1bGVJZF1baV0pIHtcbiAgICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXVtpXShwYXJ0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb21bbW9kdWxlSWRdLnB1c2goYWRkU3R5bGUocGFydCwgb3B0aW9ucykpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIG1vZHVsZUlkID0gb3B0aW9ucy5iYXNlID8gbW9kdWxlSWQgKyBvcHRpb25zLmJhc2UgOiBtb2R1bGVJZDtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG5cbiAgaWYgKCFzdHlsZXNJbkRvbVttb2R1bGVJZF0pIHtcbiAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF0gPSBbXTtcbiAgfVxuXG4gIG1vZHVsZXNUb0RvbShtb2R1bGVJZCwgbGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghc3R5bGVzSW5Eb21bbW9kdWxlSWRdKSB7XG4gICAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF0gPSBbXTtcbiAgICB9XG5cbiAgICBtb2R1bGVzVG9Eb20obW9kdWxlSWQsIG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgaiA9IG5ld0xpc3QubGVuZ3RoOyBqIDwgc3R5bGVzSW5Eb21bbW9kdWxlSWRdLmxlbmd0aDsgaisrKSB7XG4gICAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF1bal0oKTtcbiAgICB9XG5cbiAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF0ubGVuZ3RoID0gbmV3TGlzdC5sZW5ndGg7XG5cbiAgICBpZiAoc3R5bGVzSW5Eb21bbW9kdWxlSWRdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW21vZHVsZUlkXTtcbiAgICB9XG4gIH07XG59OyIsImltcG9ydCBMYXlvdXQgZnJvbSAnLi9jb21wb25lbnRzL0xheW91dC9pbmRleC5qcyc7XG5pbXBvcnQgQ29sdW1uQ2hhcnQgZnJvbSAnLi9jb21wb25lbnRzL0NvbHVtbkNoYXJ0L2luZGV4LmpzJztcbmltcG9ydCBSYW5nZVBpY2tlciBmcm9tICcuL2NvbXBvbmVudHMvUmFuZ2VQaWNrZXIvaW5kZXguanMnO1xuaW1wb3J0IFNvcnRhYmxlVGFibGUgZnJvbSAnLi9jb21wb25lbnRzL1NvcnRhYmxlVGFibGUvaW5kZXguanMnO1xuaW1wb3J0IERyYWdnYWJsZUxpc3QgZnJvbSAnLi9jb21wb25lbnRzL0RyYWdnYWJsZUxpc3QvaW5kZXguanMnO1xuaW1wb3J0IFJvdXRlciBmcm9tICcuL2xpYi9Sb3V0ZXIuanMnO1xuXG5pbXBvcnQgJy4vYXNzZXRzL3Njc3Mvc3R5bGVzLnNjc3MnO1xuXG4vLyBSb3V0aW5nXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIuaW5zdGFuY2UoKTtcblxucm91dGVyXG4gIC5hZGRSb3V0ZSgvXiQvLCAnZGFzaGJvYXJkJylcbiAgLmFkZFJvdXRlKC9eY2F0ZWdvcmllcyQvLCAnY2F0ZWdvcmllcycpXG4gIC5hZGRSb3V0ZSgvXnByb2R1Y3RzXFwvKFtcXFMoKS1dKykvZywgJ3Byb2R1Y3RzL2VkaXQnKVxuICAuYWRkUm91dGUoL15wcm9kdWN0c1xcL2FkZCQvLCAncHJvZHVjdHMvZWRpdCcpXG4gIC5hZGRSb3V0ZSgvXnByb2R1Y3RzJC8sICdwcm9kdWN0cycpXG4gIC5zZXROb3RGb3VuZFBhZ2UoJ2Vycm9yNDA0JylcbiAgLmFkZExpc3RlbmVyKCk7XG5cbi8vIEluaXQgY3VzdG9tIGVsZW1lbnRzXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdwYWdlLWxheW91dCcsIExheW91dCk7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjb2x1bW4tY2hhcnQnLCBDb2x1bW5DaGFydCk7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdyYW5nZS1waWNrZXInLCBSYW5nZVBpY2tlcik7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzb3J0YWJsZS10YWJsZScsIFNvcnRhYmxlVGFibGUpO1xud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZHJhZ2dhYmxlLWxpc3QnLCBEcmFnZ2FibGVMaXN0LCB7IGV4dGVuZHM6ICd1bCcgfSk7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKG1vZHVsZS5pZCwgY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiZXhwb3J0IGRlZmF1bHQge1xuICBlbGVtOiAnY29sdW1uLWNoYXJ0JyxcbiAgY29udGVudDogJ2NvbHVtbi1jaGFydF9fY29udGVudCcsXG4gIGhlYWRlcjogJ2NvbHVtbi1jaGFydF9faGVhZGVyJyxcbiAgdGl0bGU6ICdjb2x1bW4tY2hhcnRfX3RpdGxlJyxcbiAgdG90YWw6ICdjb2x1bW4tY2hhcnRfX3RvdGFsJyxcbiAgbGlzdDogJ2NvbHVtbi1jaGFydF9fbGlzdCcsXG4gIGl0ZW06ICdjb2x1bW4tY2hhcnRfX2l0ZW0nLFxuICB0b29sdGlwOiAnY29sdW1uLWNoYXJ0X190b29sdGlwJyxcbiAgdG9vbHRpcERhdGU6ICdjb2x1bW4tY2hhcnRfX3Rvb2x0aXAtZGF0ZScsXG4gIHRvb2x0aXBRdWFudGl0eTogJ2NvbHVtbi1jaGFydF9fdG9vbHRpcC1xdWFudGl0eScsXG4gIGVycm9yOiAnY29sdW1uLWNoYXJ0X19lcnJvcidcbn07XG4iLCJpbXBvcnQgVG9vbHRpcHMgZnJvbSAnLi4vVG9vbHRpcHMvaW5kZXguanMnO1xuaW1wb3J0IHtcbiAgZmlsbFRlbXBsYXRlLFxuICBmb3JtYXREYXRlLFxuICBlc2NhcGVIVE1MLFxuICBmb3JtYXRUb3RhbCxcbiAgZmV0Y2hKc29uXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvaW5kZXguanMnO1xuaW1wb3J0IGNscyBmcm9tICcuL2NsYXNzZXMuanMnO1xuaW1wb3J0IHRlbXBsYXRlcyBmcm9tICcuL3RlbXBsYXRlcy5qcyc7XG5cbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbHVtbkNoYXJ0IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuYXBpVXJsID0gcHJvY2Vzcy5lbnYuQVBJX1VSTCB8fCAnaHR0cHM6Ly9jb3Vyc2UtanMuamF2YXNjcmlwdC5ydSc7XG5cbiAgICB0aGlzLmNoYW5nZURhdGUgPSB0aGlzLmNoYW5nZURhdGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFzeW5jIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcbiAgICBjb25zdCB7IHR5cGUsIGlzTW9uZXksIGZyb20sIHRvIH0gPSB0aGlzLmRhdGFzZXQ7XG5cbiAgICB0aGlzLmRhdGVzID0ge1xuICAgICAgZnJvbTogbmV3IERhdGUoZnJvbSksXG4gICAgICB0bzogbmV3IERhdGUodG8pXG4gICAgfTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5mb3JtYXRUb3RhbCA9IGlzTW9uZXkgPyBmb3JtYXRUb3RhbCA6IG51bGw7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKGNscy5lbGVtLCBgJHtjbHMuZWxlbX0tLSR7dHlwZX1gKTtcbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZChjbHMuY29udGVudCk7XG4gICAgdGhpcy50aXRsZSA9IGBUb3RhbCAke3R5cGV9YDtcbiAgICB0aGlzLnVybCA9IHRoaXMuZ2V0VXJsKCk7XG5cbiAgICBhd2FpdCB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuYXBwZW5kKHRoaXMuZWxlbSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VEYXRlJywgdGhpcy5jaGFuZ2VEYXRlKTtcbiAgfVxuXG4gIGdldFVybCAoKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuYXBpVXJsfS9hcGkvZGFzaGJvYXJkLyR7dGhpcy50eXBlfT9mcm9tPSR7dGhpcy5kYXRlcy5mcm9tfSZ0bz0ke3RoaXMuZGF0ZXMudG99YDtcbiAgfVxuXG4gIGFzeW5jIGdldERhdGEgKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hKc29uKHRoaXMudXJsKTtcbiAgICAgIHJldHVybiB7IGRhdGEgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHsgZXJyb3IgfTtcbiAgICB9XG4gIH1cblxuICBhc3luYyByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHRoaXMuZ2V0RGF0YSgpO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZWxlbS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZUVuZCcsIGA8ZGl2IGNsYXNzPVwiJHtjbHMuZXJyb3J9XCI+JHtlcnJvcn08L2Rpdj5gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlcyA9IE9iamVjdC52YWx1ZXModGhpcy5kYXRhKTtcblxuICAgIGlmICh0aGlzLnZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMudmFsdWVzLnB1c2goJ05vIGRhdGEnKTtcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXJTdHIgPSB0aGlzLmdldEhlYWRlclN0cigpO1xuXG4gICAgY29uc3QgbGlzdFN0ciA9IHRoaXMuZ2V0TGlzdFN0cigpO1xuICAgIHRoaXMuZWxlbS5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAnYmVmb3JlRW5kJyxcbiAgICAgIGhlYWRlclN0ciArIGxpc3RTdHJcbiAgICApO1xuXG4gICAgdGhpcy5hZGRBY3Rpb25zKCk7XG4gIH1cblxuICBnZXRIZWFkZXJTdHIgKCkge1xuICAgIHRoaXMudG90YWwgPSB0aGlzLnZhbHVlcy5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IHByZXYgKyBjdXJyZW50LCAwKTtcblxuICAgIGlmICh0aGlzLmZvcm1hdFRvdGFsKSB7XG4gICAgICB0aGlzLnRvdGFsID0gdGhpcy5mb3JtYXRUb3RhbCh0aGlzLnRvdGFsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlsbFRlbXBsYXRlKHtcbiAgICAgIHRtcGw6IHRlbXBsYXRlcy5oZWFkZXIsXG4gICAgICBkYXRhOiB0aGlzXG4gICAgfSk7XG4gIH1cblxuICBnZXRMaXN0U3RyICgpIHtcbiAgICBjb25zdCBtYXggPSBNYXRoLm1heCguLi50aGlzLnZhbHVlcyk7XG4gICAgbGV0IGNoYXJ0U3RyID0gJyc7XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmRhdGEpIHtcbiAgICAgIGNvbnN0IGRhdGUgPSBmb3JtYXREYXRlKGtleSk7XG4gICAgICBsZXQgdmFsdWUgPSB0aGlzLmRhdGFba2V5XTtcbiAgICAgIGNvbnN0IGhlaWdodFZhbHVlID0gKCh2YWx1ZSAvIG1heCkgKiAxMDApLnRvRml4ZWQoMik7XG4gICAgICBjb25zdCBoZWlnaHQgPSBgJHtoZWlnaHRWYWx1ZX0lYDtcblxuICAgICAgaWYgKHRoaXMuZm9ybWF0VG90YWwpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLmZvcm1hdFRvdGFsKHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdG9vdGlwQ29udGVudCA9IGA8c21hbGwgY2xhc3M9XCIke2Nscy50b29sdGlwRGF0ZX1cIj4ke2RhdGV9PC9zbWFsbD48ZGl2IGNsYXNzPVwiJHtjbHMudG9vbHRpcFF1YW50aXR5fVwiPiR7dmFsdWV9PC9kaXY+YDtcblxuICAgICAgY2hhcnRTdHIgKz0gZmlsbFRlbXBsYXRlKHtcbiAgICAgICAgdG1wbDogdGVtcGxhdGVzLmNoYXJ0SXRlbSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIC4uLnRoaXMsXG4gICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgIHRvb3RpcENvbnRlbnQ6IGVzY2FwZUhUTUwodG9vdGlwQ29udGVudClcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGA8dWwgY2xhc3M9XCIke2Nscy5saXN0fVwiPiR7Y2hhcnRTdHJ9PC91bD5gO1xuICB9XG5cbiAgYWRkQWN0aW9ucyAoKSB7XG4gICAgdGhpcy50b29sdGlwcyA9IG5ldyBUb29sdGlwcyh7XG4gICAgICBlbGVtOiB0aGlzLmVsZW0sXG4gICAgICBkaW1TaWJsaW5nczogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgY2hhbmdlRGF0ZSAoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50LmRldGFpbCB8fCAhZXZlbnQuZGV0YWlsLmRhdGVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBmcm9tLCB0byB9ID0gZXZlbnQuZGV0YWlsLmRhdGVzO1xuICAgIHRoaXMuZGF0ZXMgPSB7XG4gICAgICBmcm9tOiBmcm9tLFxuICAgICAgdG86IHRvXG4gICAgfTtcblxuICAgIHRoaXMudXJsID0gdGhpcy5nZXRVcmwoKTtcbiAgICB0aGlzLmVsZW0uaW5uZXJIVE1MID0gJyc7XG4gICAgYXdhaXQgdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLmFwcGVuZCh0aGlzLmVsZW0pO1xuICB9XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKG1vZHVsZS5pZCwgY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IGNscyBmcm9tICcuL2NsYXNzZXMuanMnO1xuXG5leHBvcnQgY29uc3QgaGVhZGVyID0gYDxoZWFkZXIgY2xhc3M9XCIke2Nscy5oZWFkZXJ9XCI+XG4gIDxoMyBjbGFzcz1cIiR7Y2xzLnRpdGxlfVwiPnt0aXRsZX08L2gzPlxuICA8ZGl2IGNsYXNzPVwiJHtjbHMudG90YWx9XCI+e3RvdGFsfTwvZGl2PlxuPC9oZWFkZXI+YDtcblxuZXhwb3J0IGNvbnN0IGNoYXJ0SXRlbSA9IGA8bGlcbiAgY2xhc3M9XCIke2Nscy5pdGVtfVwiXG4gIGRhdGEtdG9vbHRpcC1jb250ZW50PVwie3Rvb3RpcENvbnRlbnR9XCJcbiAgc3R5bGU9XCJoZWlnaHQ6IHtoZWlnaHR9XCI+PC9saT5gO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGhlYWRlcixcbiAgY2hhcnRJdGVtXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjgzYzc1NDIwZDAzNjBlZDIyNTExYzA5MmU1N2QxZDU0LnN2Z1wiOyIsImltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5pbXBvcnQgJy4vZ3JhYi1pY29uLnN2Zyc7XG5cbmNvbnN0IGNscyA9IHtcbiAgZWxlbTogJ2RyYWdnYWJsZS1saXN0JyxcbiAgaXRlbXM6ICdkcmFnZ2FibGUtbGlzdF9faXRlbXMnLFxuICBpdGVtOiAnZHJhZ2dhYmxlLWxpc3RfX2l0ZW0nLFxuICBkcmFnZ2VkOiAnZHJhZ2dhYmxlLWxpc3RfX2l0ZW0tLWRyYWdnZWQnLFxuICBwbGFjZWhvbGRlcjogJ2RyYWdnYWJsZS1saXN0X19pdGVtLS1wbGFjZWhvbGRlcidcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdnYWJsZUxpc3QgZXh0ZW5kcyBIVE1MVUxpc3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnN0YXJ0RHJhZyA9IHRoaXMuc3RhcnREcmFnLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdG9wRHJhZyA9IHRoaXMuc3RvcERyYWcuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdmUgPSB0aGlzLm1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldFBsYWNlaG9sZGVySGVpZ2h0ID0gdGhpcy5zZXRQbGFjZWhvbGRlckhlaWdodC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYXN5bmMgY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZChjbHMuZWxlbSk7XG4gICAgdGhpcy5pdGVtcyA9IHRoaXMucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy5jcmVhdGVQbGFjZWhvbGRlcigpO1xuXG4gICAgdGhpcy5hZGRDbGFzc1RvSXRlbXMoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgdGhpcy5zdGFydERyYWcpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB0aGlzLnNldFBsYWNlaG9sZGVySGVpZ2h0LCB7IG9uY2U6IHRydWUgfSk7XG4gIH1cblxuICBzdGFydERyYWcgKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJyZW50RWxlbSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZHJhZ2dhYmxlLWxpc3RfX2l0ZW0nKTtcbiAgICBpZiAoIXRoaXMuY3VycmVudEVsZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRFbGVtLnJlcGxhY2VXaXRoKHRoaXMucGxhY2Vob2xkZXIpO1xuICAgIHRoaXMuY3VycmVudEVsZW0uY2xhc3NMaXN0LmFkZChjbHMuZHJhZ2dlZCk7XG4gICAgdGhpcy5hcHBlbmQodGhpcy5jdXJyZW50RWxlbSk7XG5cbiAgICBjb25zdCB7IHRvcCB9ID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgICB0aGlzLmVsZW1IYWxmID0gdGhpcy5jdXJyZW50RWxlbS5vZmZzZXRIZWlnaHQgLyAyO1xuXG4gICAgY29uc3QgZWxlbVRvcCA9IGV2ZW50LmNsaWVudFkgLSB0aGlzLnRvcCAtIHRoaXMuZWxlbUhhbGY7XG4gICAgdGhpcy5jdXJyZW50RWxlbS5zdHlsZS50b3AgPSBgJHtlbGVtVG9wfXB4YDtcblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCB0aGlzLm1vdmUpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgdGhpcy5zdG9wRHJhZyk7XG4gIH1cblxuICBtb3ZlIChldmVudCkge1xuICAgIGNvbnN0IGVsZW1Ub3AgPSBldmVudC5jbGllbnRZIC0gdGhpcy50b3AgLSB0aGlzLmVsZW1IYWxmO1xuICAgIHRoaXMuY3VycmVudEVsZW0uc3R5bGUudG9wID0gYCR7ZWxlbVRvcH1weGA7XG5cbiAgICAvLyBDaGVjayBpbnRlcnNlY3Rpb25cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5pdGVtcykge1xuICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGNscy5kcmFnZ2VkKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdG9wID0gaXRlbS5vZmZzZXRUb3A7XG4gICAgICBjb25zdCBib3R0b20gPSB0b3AgKyBpdGVtLm9mZnNldEhlaWdodDtcbiAgICAgIGNvbnN0IG1pZGRsZSA9IHRvcCArIGl0ZW0ub2Zmc2V0SGVpZ2h0IC8gMjtcbiAgICAgIGNvbnN0IGNoZWNrTGluZSA9IGVsZW1Ub3AgKyB0aGlzLmVsZW1IYWxmO1xuXG4gICAgICBpZiAoY2hlY2tMaW5lID4gdG9wICYmIGNoZWNrTGluZSA8IGJvdHRvbSkge1xuICAgICAgICBpZiAoY2hlY2tMaW5lIDw9IG1pZGRsZSkge1xuICAgICAgICAgIGl0ZW0uYWZ0ZXIodGhpcy5wbGFjZWhvbGRlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5iZWZvcmUodGhpcy5wbGFjZWhvbGRlcik7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RvcERyYWcgKCkge1xuICAgIHRoaXMucGxhY2Vob2xkZXIucmVwbGFjZVdpdGgodGhpcy5jdXJyZW50RWxlbSk7XG4gICAgdGhpcy5jdXJyZW50RWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNscy5kcmFnZ2VkKTtcbiAgICB0aGlzLmN1cnJlbnRFbGVtLnN0eWxlLnRvcCA9ICcnO1xuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCB0aGlzLm1vdmUpO1xuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgdGhpcy5zdG9wRHJhZyk7XG4gIH1cblxuICBjcmVhdGVQbGFjZWhvbGRlciAoKSB7XG4gICAgY29uc3QgZmlyc3RJdGVtID0gdGhpcy5pdGVtc1swXTtcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9IGZpcnN0SXRlbS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgcGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZChjbHMucGxhY2Vob2xkZXIsIGNscy5pdGVtKTtcbiAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSAnJztcblxuICAgIHJldHVybiBwbGFjZWhvbGRlcjtcbiAgfVxuXG4gIHNldFBsYWNlaG9sZGVySGVpZ2h0ICgpIHtcbiAgICBjb25zdCBmaXJzdEl0ZW0gPSB0aGlzLml0ZW1zWzBdO1xuICAgIHRoaXMucGxhY2Vob2xkZXIuc3R5bGUubWluSGVpZ2h0ID0gYCR7Zmlyc3RJdGVtLm9mZnNldEhlaWdodH1weGA7XG4gIH1cblxuICBhZGRDbGFzc1RvSXRlbXMgKCkge1xuICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChjbHMuaXRlbSkpO1xuICB9XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKG1vZHVsZS5pZCwgY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvaW5kZXguanMnO1xuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25uZWN0ZWRDYWxsYmFjayAoKSB7XG4gICAgdGhpcy5hcHBlbmQodGhpcy5yZW5kZXIoKSk7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdwYWdlJyk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KGA8ZGl2IGNsYXNzPVwicGFnZS1jb250YWluZXJcIj5cbiAgICAgIDxhc2lkZSBjbGFzcz1cInBhZ2UtYXNpZGVcIj5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+RGFzaGJvYXJkPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9wcm9kdWN0c1wiPlByb2R1Y3RzPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jYXRlZ29yaWVzXCI+Q2F0ZWdvcmllczwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2FzaWRlPlxuXG4gICAgICA8bWFpbiBjbGFzcz1cInBhZ2UtbWFpblwiIGlkPVwiY29udGVudFwiPlxuICAgICAgICA8IS0tIG1haW4gY29udGVudCB3aWxsIGJlIGhlcmUgLS0+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+YCk7XG4gIH1cbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkobW9kdWxlLmlkLCBjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG5jb25zdCBjbHMgPSB7XG4gIGVsZW06ICdub3RpZmljYXRpb24nLFxuICB3YXJuaW5nOiAnbm90aWZpY2F0aW9uLS13YXJuaW5nJyxcbiAgZXJyb3I6ICdub3RpZmljYXRpb24tLWVycm9yJ1xufTtcblxuY29uc3Qgc2Vjb25kID0gMTAwMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90aWZpY2F0aW9uIHtcbiAgY29uc3RydWN0b3IgKHsgbWVzc2FnZSwgY29udGFpbmVyLCB0eXBlIH0pIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5kdXJhdGlvbiA9IHRoaXMuZ2V0RHVyYXRpb24oKTtcbiAgICB0aGlzLmNsYXNzTmFtZXMgPSB0aGlzLmdldENsYXNzZXMoKTtcbiAgICB0aGlzLmFkZEVsZW0oKTtcbiAgICB0aGlzLmlzRmluaXNoZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGFkZEVsZW0gKCkge1xuICAgIHRoaXMuZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKC4uLnRoaXMuY2xhc3NOYW1lcyk7XG4gICAgdGhpcy5lbGVtLmRhdGFzZXQuc3RhdGUgPSAnc2hvd24nO1xuICAgIHRoaXMuZWxlbS5pbm5lckhUTUwgPSB0aGlzLm1lc3NhZ2U7XG4gICAgdGhpcy5jb250YWluZXIucHJlcGVuZCh0aGlzLmVsZW0pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuaGlkZUVsZW0oKTsgfSwgdGhpcy5kdXJhdGlvbik7XG4gIH1cblxuICBhc3luYyBoaWRlRWxlbSAocGFyYW1zID0ge30pIHtcbiAgICB0aGlzLmlzRmluaXNoZWQgPSB0cnVlO1xuICAgIHRoaXMuZWxlbS5kYXRhc2V0LnN0YXRlID0gJ2hpZGRlbic7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5lbGVtLnJlbW92ZSgpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldER1cmF0aW9uICgpIHtcbiAgICBpZiAodGhpcy50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICByZXR1cm4gNSAqIHNlY29uZDtcbiAgICB9XG5cbiAgICByZXR1cm4gMyAqIHNlY29uZDtcbiAgfVxuXG4gIGdldENsYXNzZXMgKCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbY2xzLmVsZW1dO1xuXG4gICAgaWYgKHRoaXMudHlwZSAmJiBjbHNbdGhpcy50eXBlXSkge1xuICAgICAgY2xhc3Nlcy5wdXNoKGNsc1t0aGlzLnR5cGVdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShtb2R1bGUuaWQsIGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VNZXNzYWdlIHtcbiAgY29uc3RydWN0b3IgKHsgdGl0bGUsIHRleHQsIGNhbGxiYWNrLCBjYWxsYmFja1RleHQsIGVycm9yIH0pIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy50ZXh0ID0gdGV4dCB8fCAnU29tZXRoaW5nIHdlbnQgd3JvbmcnO1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB0aGlzLmNhbGxiYWNrVGV4dCA9IGNhbGxiYWNrVGV4dDtcbiAgICB0aGlzLmVycm9yID0gZXJyb3I7XG5cbiAgICBpZiAoIXRoaXMudGl0bGUgJiYgdGhpcy5lcnJvcikge1xuICAgICAgdGhpcy50aXRsZSA9ICdFcnJvcic7XG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gIH1cblxuICBjcmVhdGVFbGVtZW50ICgpIHtcbiAgICB0aGlzLmVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZCgncGFnZS1tZXNzYWdlJyk7XG5cbiAgICBpZiAodGhpcy5lcnJvcikge1xuICAgICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoJ3BhZ2UtbWVzc2FnZS0tZXJyb3InKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRlbnQgPSBgPGgzPiR7dGhpcy50aXRsZX08L2gzPjxwPiR7dGhpcy50ZXh0fTwvcD5gO1xuXG4gICAgaWYgKHRoaXMuZXJyb3IpIHtcbiAgICAgIHRoaXMuY29udGVudCArPSBgPGRpdiBjbGFzcz1cInBhZ2UtbWVzc2FnZV9fZXJyb3JcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtbWVzc2FnZV9fZXJyb3ItdGV4dFwiPlxuICAgICAgICAgIDxzdHJvbmc+JHt0aGlzLmVycm9yLm5hbWV9PC9zdHJvbmc+OiAke3RoaXMuZXJyb3IubWVzc2FnZX08L2Rpdj5cbiAgICAgIDwvZGl2PmA7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJCZWdpbicsIHRoaXMuY29udGVudCk7XG4gIH1cbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkobW9kdWxlLmlkLCBjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmIxMTJiNTUwMjc2ZDc1MmQwYjNlMTA3YWRlOGQ2MTcuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjY4MmRlZGFhZmIwNDRlN2I5ZWEzNTJhNzBiYWFmNTY5LnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZWxlbTogJ3JhbmdlcGlja2VyJyxcbiAgZWxlbU9wZW46ICdyYW5nZXBpY2tlci0tb3BlbicsXG4gIGlucHV0OiAncmFuZ2VwaWNrZXJfX2lucHV0JyxcbiAgZnJvbTogJ3JhbmdlcGlja2VyX19mcm9tJyxcbiAgdG86ICdyYW5nZXBpY2tlcl9fdG8nLFxuICBzZWxlY3RvcjogJ3JhbmdlcGlja2VyX19zZWxlY3RvcicsXG4gIHNlbGVjdG9yQXJyb3c6ICdyYW5nZXBpY2tlcl9fc2VsZWN0b3ItYXJyb3cnLFxuICBzZWxlY3RvckNvbnRyb2w6ICdyYW5nZXBpY2tlcl9fc2VsZWN0b3ItY29udHJvbCcsXG4gIGNhbGVuZGFyczogJ3JhbmdlcGlja2VyX19jYWxlbmRhcnMnLFxuICBjYWxlbmRhcjogJ3JhbmdlcGlja2VyX19jYWxlbmRhcicsXG4gIGNlbGw6ICdyYW5nZXBpY2tlcl9fY2VsbCcsXG4gIHNlbGVjdGVkRnJvbTogJ3JhbmdlcGlja2VyX19zZWxlY3RlZC1mcm9tJyxcbiAgc2VsZWN0ZWRCZXR3ZWVuOiAncmFuZ2VwaWNrZXJfX3NlbGVjdGVkLWJldHdlZW4nLFxuICBzZWxlY3RlZFRvOiAncmFuZ2VwaWNrZXJfX3NlbGVjdGVkLXRvJyxcbiAgbW9udGhJbmRpY2F0b3I6ICdyYW5nZXBpY2tlcl9fbW9udGgtaW5kaWNhdG9yJyxcbiAgZGF5T2ZXZWVrOiAncmFuZ2VwaWNrZXJfX2RheS1vZi13ZWVrJyxcbiAgZGF0ZUdyaWQ6ICdyYW5nZXBpY2tlcl9fZGF0ZS1ncmlkJ1xufTtcbiIsImltcG9ydCB7XG4gIGZpbGxUZW1wbGF0ZSxcbiAgZ2V0V2Vla0RheXNcbn0gZnJvbSAnLi4vLi4vaGVscGVycy9pbmRleC5qcyc7XG5pbXBvcnQgdGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzLmpzJztcbmltcG9ydCBjbHMgZnJvbSAnLi9jbGFzc2VzLmpzJztcblxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcbmltcG9ydCAnLi9hcnJvdy1pY29uLnN2Zyc7XG5pbXBvcnQgJy4vY2FsZW5kYXItaWNvbi5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5nZVBpY2tlciBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy50b2dnbGVQaWNrZXIgPSB0aGlzLnRvZ2dsZVBpY2tlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VsZWN0b3JPbkNsaWNrID0gdGhpcy5zZWxlY3Rvck9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmJvZHlPbkNsaWNrID0gdGhpcy5ib2R5T25DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlUmFuZ2UgPSB0aGlzLnVwZGF0ZVJhbmdlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmlzT3BlbmVkID0gZmFsc2U7XG4gICAgdGhpcy5lbGVtID0gdGhpcztcbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZCgncmFuZ2VwaWNrZXInKTtcbiAgfVxuXG4gIGFzeW5jIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcbiAgICBjb25zdCB7IGZyb20sIHRvIH0gPSB0aGlzLmRhdGFzZXQ7XG5cbiAgICB0aGlzLmRhdGVzID0ge1xuICAgICAgZnJvbTogbmV3IERhdGUoZnJvbSksXG4gICAgICB0bzogbmV3IERhdGUodG8pXG4gICAgfTtcblxuICAgIHRoaXMubW9udGhlcyA9IHRoaXMuZ2V0RGlzcGxheWVkTW9udGhlcygpO1xuICAgIHRoaXMubmV3RGF0ZXMgPSBbXTtcblxuICAgIHRoaXMuYWRkSW5wdXQoKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VEYXRlJywgdGhpcy51cGRhdGVSYW5nZSk7XG4gIH1cblxuICBnZXREaXNwbGF5ZWRNb250aGVzICgpIHtcbiAgICBjb25zdCBjdXJyZW50TW9udGggPSBuZXcgRGF0ZSh0aGlzLmRhdGVzLmZyb20pO1xuICAgIGxldCBtb250aCA9IGN1cnJlbnRNb250aC5nZXRNb250aCgpO1xuICAgIGNvbnN0IGN1cnJlbnREYXkgPSAxO1xuICAgIGN1cnJlbnRNb250aC5zZXREYXRlKGN1cnJlbnREYXkpO1xuXG4gICAgY29uc3QgbmV4dE1vbnRoID0gbmV3IERhdGUoY3VycmVudE1vbnRoKTtcbiAgICBuZXh0TW9udGguc2V0TW9udGgoKyttb250aCk7XG5cbiAgICByZXR1cm4gW2N1cnJlbnRNb250aCwgbmV4dE1vbnRoXTtcbiAgfVxuXG4gIGFkZElucHV0ICgpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgZnJvbTogdGhpcy5kYXRlcy5mcm9tLnRvTG9jYWxlRGF0ZVN0cmluZygpLFxuICAgICAgdG86IHRoaXMuZGF0ZXMudG8udG9Mb2NhbGVEYXRlU3RyaW5nKClcbiAgICB9O1xuICAgIGNvbnN0IHRtcGwgPSB0ZW1wbGF0ZXMuaW5wdXQ7XG4gICAgY29uc3QgaW5wdXRTdHIgPSBmaWxsVGVtcGxhdGUoe1xuICAgICAgdG1wbCxcbiAgICAgIGRhdGFcbiAgICB9KTtcblxuICAgIHRoaXMuZWxlbS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyQmVnaW4nLCBpbnB1dFN0cik7XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKGAuJHtjbHMuaW5wdXR9YCk7XG4gICAgdGhpcy5pbnB1dEZyb20gPSB0aGlzLmlucHV0LnF1ZXJ5U2VsZWN0b3IoYC4ke2Nscy5mcm9tfWApO1xuICAgIHRoaXMuaW5wdXRUbyA9IHRoaXMuaW5wdXQucXVlcnlTZWxlY3RvcihgLiR7Y2xzLnRvfWApO1xuXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIHRoaXMudG9nZ2xlUGlja2VyKTtcbiAgICAvLyBjYXB0dXJlOiB0cnVlIHJldmVyc2VzIG9yZGVyIG9mIGV2ZW50c1xuICAgIC8vIGNsaWNrIG9uIGJvZHkgZmlyZXMgZmlyc3RcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgdGhpcy5ib2R5T25DbGljaywge1xuICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgYm9keU9uQ2xpY2sgKCkge1xuICAgIGNvbnN0IHBhcmVudFJhbmdlUGlja2VyID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoYC4ke2Nscy5lbGVtfWApO1xuXG4gICAgaWYgKCFwYXJlbnRSYW5nZVBpY2tlciAmJiB0aGlzLmlzT3BlbmVkKSB7XG4gICAgICB0aGlzLmhpZGVQaWNrZXIoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVJbnB1dCAoKSB7XG4gICAgdGhpcy5pbnB1dEZyb20uaW5uZXJIVE1MID0gdGhpcy5kYXRlcy5mcm9tLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICAgIHRoaXMuaW5wdXRUby5pbm5lckhUTUwgPSB0aGlzLmRhdGVzLnRvLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICB9XG5cbiAgdXBkYXRlUmFuZ2UgKCkge1xuICAgIHRoaXMubW9udGhlcyA9IHRoaXMuZ2V0RGlzcGxheWVkTW9udGhlcygpO1xuICAgIHRoaXMubmV3RGF0ZXMgPSBbXTtcbiAgICB0aGlzLnVwZGF0ZUlucHV0KCk7XG4gICAgdGhpcy5oaWRlUGlja2VyKCk7XG4gIH1cblxuICB0b2dnbGVQaWNrZXIgKCkge1xuICAgIGlmICh0aGlzLmlzT3BlbmVkKSB7XG4gICAgICB0aGlzLmhpZGVQaWNrZXIoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dQaWNrZXIoKTtcbiAgICB0aGlzLmlzT3BlbmVkID0gdHJ1ZTtcbiAgfVxuXG4gIHNob3dQaWNrZXIgKCkge1xuICAgIGlmICghdGhpcy5zZWxlY3Rvcikge1xuICAgICAgdGhpcy5hZGRTZWxlY3RvcigpO1xuXG4gICAgICB0aGlzLnNlbGVjdG9yID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoYC4ke2Nscy5zZWxlY3Rvcn1gKTtcbiAgICAgIHRoaXMuY2FsZW5kYXJzID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoYC4ke2Nscy5jYWxlbmRhcnN9YCk7XG5cbiAgICAgIHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNlbGVjdG9yT25DbGljayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FsZW5kYXJzLmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuICAgIHRoaXMuYWRkQ2FsZW5kYXJzKCk7XG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoY2xzLmVsZW1PcGVuKTtcbiAgfVxuXG4gIGhpZGVQaWNrZXIgKCkge1xuICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNscy5lbGVtT3Blbik7XG4gICAgdGhpcy5pc09wZW5lZCA9IGZhbHNlO1xuICAgIHRoaXMubmV3RGF0ZXMgPSBbXTtcbiAgfVxuXG4gIGFkZFNlbGVjdG9yICgpIHtcbiAgICBjb25zdCBzZWxlY3RvclN0ciA9IHRlbXBsYXRlcy5zZWxlY3RvcjtcbiAgICB0aGlzLmVsZW0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVFbmQnLCBzZWxlY3RvclN0cik7XG4gIH1cblxuICBzZWxlY3Rvck9uQ2xpY2sgKCkge1xuICAgIGNvbnN0IHsgZGF0YXNldCB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmIChkYXRhc2V0LnZhbHVlKSB7XG4gICAgICB0aGlzLnNldERheShldmVudC50YXJnZXQpO1xuICAgIH0gZWxzZSBpZiAoZGF0YXNldC5kaXJlY3Rpb24pIHtcbiAgICAgIHRoaXMubW92ZU1vbnRoKGRhdGFzZXQuZGlyZWN0aW9uKTtcbiAgICB9XG4gIH1cblxuICBzZXREYXkgKGVsZW0pIHtcbiAgICBjb25zdCBkYXRlID0gZWxlbS5kYXRhc2V0LnZhbHVlO1xuXG4gICAgaWYgKHRoaXMubmV3RGF0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLm5ld0RhdGVzLnB1c2gobmV3IERhdGUoZGF0ZSkpO1xuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZChlbGVtKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm5ld0RhdGVzLnB1c2gobmV3IERhdGUoZGF0ZSkpO1xuXG4gICAgdGhpcy5uZXdEYXRlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYSAtIGI7XG4gICAgfSk7XG4gICAgdGhpcy5kYXRlcyA9IHtcbiAgICAgIGZyb206IHRoaXMubmV3RGF0ZXNbMF0sXG4gICAgICB0bzogdGhpcy5uZXdEYXRlc1sxXVxuICAgIH07XG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgbmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2VEYXRlJywge1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBkYXRlczoge1xuICAgICAgICAgICAgZnJvbTogdGhpcy5kYXRlcy5mcm9tLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICB0bzogdGhpcy5kYXRlcy50by50b0lTT1N0cmluZygpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBtb3ZlTW9udGggKGRpcmVjdGlvbikge1xuICAgIGxldCBzdGVwID0gMTtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAncHJldicpIHtcbiAgICAgIHN0ZXAgPSAtMTtcbiAgICB9XG5cbiAgICB0aGlzLm1vbnRoZXMuZm9yRWFjaChkYXRlID0+IHtcbiAgICAgIGRhdGUuc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpICsgc3RlcCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnVwZGF0ZUNhbGVuZGFycygpO1xuICB9XG5cbiAgYWRkQ2FsZW5kYXJzICgpIHtcbiAgICB0aGlzLm1vbnRoZXMuZm9yRWFjaChkYXRlID0+IHtcbiAgICAgIHRoaXMuY2FsZW5kYXJzLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlRW5kJywgdGhpcy5nZXRDYWxlbmRhcihkYXRlKSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVDYWxlbmRhcnMgKCkge1xuICAgIHRoaXMuY2FsZW5kYXJzLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuYWRkQ2FsZW5kYXJzKCk7XG4gIH1cblxuICB1cGRhdGVTZWxlY3RlZCAoZWxlbSkge1xuICAgIGNvbnN0IGNlbGxzID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2Nscy5jZWxsfWApO1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbY2xzLnNlbGVjdGVkQmV0d2VlbiwgY2xzLnNlbGVjdGVkRnJvbSwgY2xzLnNlbGVjdGVkVG9dO1xuXG4gICAgY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSguLi5jbGFzc2VzKTtcbiAgICB9KTtcblxuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbHMuc2VsZWN0ZWRGcm9tKTtcbiAgfVxuXG4gIGdldENhbGVuZGFyIChkYXRlKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIG1vbnRoOiBkYXRlLnRvTG9jYWxlU3RyaW5nKCdkZWZhdWx0JywgeyBtb250aDogJ2xvbmcnIH0pLFxuICAgICAgd2Vla2RheXM6IGdldFdlZWtEYXlzKCdkaXYnKSxcbiAgICAgIGRheXM6IHRoaXMuZ2V0Q2VsbHMoZGF0ZSlcbiAgICB9O1xuXG4gICAgY29uc3QgdG1wbCA9IHRlbXBsYXRlcy5jYWxlbmRhcjtcbiAgICBjb25zdCBjYWxlbmRhclN0ciA9IGZpbGxUZW1wbGF0ZSh7XG4gICAgICB0bXBsLFxuICAgICAgZGF0YVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNhbGVuZGFyU3RyO1xuICB9XG5cbiAgZ2V0Q2VsbHMgKGRhdGUpIHtcbiAgICBjb25zdCB0bXBsID0gdGVtcGxhdGVzLmRheTtcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIGNvbnN0IG1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcbiAgICBsZXQgY3VycmVudERheSA9IDE7XG4gICAgbGV0IGRheXNTdHIgPSAnJztcblxuICAgIHdoaWxlIChjdXJyZW50RGF0ZS5nZXRNb250aCgpID09PSBtb250aCkge1xuICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLmdldENlbGxTdGFydFN0eWxlKGN1cnJlbnREYXRlKTtcbiAgICAgIGNvbnN0IG1vZCA9IHRoaXMuZ2V0Q2VsbE1vZChjdXJyZW50RGF0ZSk7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGRhdGVUaW1lOiBjdXJyZW50RGF0ZS50b0lTT1N0cmluZygpLFxuICAgICAgICBkYXRlTnVtOiBjdXJyZW50RGF0ZS5nZXREYXRlKCksXG4gICAgICAgIHN0eWxlLFxuICAgICAgICBtb2RcbiAgICAgIH07XG4gICAgICBkYXlzU3RyICs9IGZpbGxUZW1wbGF0ZSh7XG4gICAgICAgIHRtcGwsXG4gICAgICAgIGRhdGFcbiAgICAgIH0pO1xuXG4gICAgICBjdXJyZW50RGF0ZS5zZXREYXRlKCsrY3VycmVudERheSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRheXNTdHI7XG4gIH1cblxuICBnZXRDZWxsU3RhcnRTdHlsZSAoZGF0ZSkge1xuICAgIGxldCBzdHlsZSA9ICcnO1xuICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgaWYgKGRheSA+IDEpIHtcbiAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9XG5cbiAgICBsZXQgd2Vla2RheU51bSA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgaWYgKHdlZWtkYXlOdW0gPT09IDApIHtcbiAgICAgIHdlZWtkYXlOdW0gPSA3O1xuICAgIH1cblxuICAgIHN0eWxlID0gYGdyaWQtY29sdW1uLXN0YXJ0OiAke3dlZWtkYXlOdW19YDtcblxuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG4gIGdldENlbGxNb2QgKGRhdGUpIHtcbiAgICBsZXQgbW9kID0gJyc7XG5cbiAgICBpZiAodGhpcy5uZXdEYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gbW9kO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGVNcyA9IGRhdGUudmFsdWVPZigpO1xuICAgIGNvbnN0IGRhdGVGcm9tTXMgPSB0aGlzLmRhdGVzLmZyb20udmFsdWVPZigpO1xuICAgIGNvbnN0IGRhdGVUb01zID0gdGhpcy5kYXRlcy50by52YWx1ZU9mKCk7XG5cbiAgICBpZiAoZGF0ZU1zID4gZGF0ZUZyb21NcyAmJiBkYXRlTXMgPCBkYXRlVG9Ncykge1xuICAgICAgbW9kID0gY2xzLnNlbGVjdGVkQmV0d2VlbjtcbiAgICB9IGVsc2UgaWYgKGRhdGVNcyA9PT0gZGF0ZUZyb21Ncykge1xuICAgICAgbW9kID0gY2xzLnNlbGVjdGVkRnJvbTtcbiAgICB9IGVsc2UgaWYgKGRhdGVNcyA9PT0gZGF0ZVRvTXMpIHtcbiAgICAgIG1vZCA9IGNscy5zZWxlY3RlZFRvO1xuICAgIH1cblxuICAgIHJldHVybiBtb2Q7XG4gIH1cbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkobW9kdWxlLmlkLCBjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgY2xzIGZyb20gJy4vY2xhc3Nlcy5qcyc7XG5cbmV4cG9ydCBjb25zdCBpbnB1dCA9IGA8YnV0dG9uIGNsYXNzPVwiJHtjbHMuaW5wdXR9XCIgZGF0YS1lbGVtPVwiaW5wdXRcIiB0eXBlPVwiYnV0dG9uXCI+XG4gIDxzcGFuXG4gICAgY2xhc3M9XCIke2Nscy5mcm9tfVwiXG4gICAgZGF0YS1lbGVtPVwiZnJvbVwiPntmcm9tfTwvc3Bhbj4gLVxuICA8c3BhblxuICAgIGNsYXNzPVwiJHtjbHMudG99XCJcbiAgICBkYXRhLWVsZW09XCJ0b1wiXG4gICAgPnt0b308L3NwYW4+XG48L2J1dHRvbj5gO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0b3IgPSBgXG48ZGl2IGNsYXNzPVwiJHtjbHMuc2VsZWN0b3J9XCIgZGF0YS1lbGVtPVwic2VsZWN0b3JcIj5cbiAgPGRpdiBjbGFzcz1cIiR7Y2xzLnNlbGVjdG9yQXJyb3d9XCI+PC9kaXY+XG4gIDxidXR0b25cbiAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICBjbGFzcz1cIiR7Y2xzLnNlbGVjdG9yQ29udHJvbH0gJHtjbHMuc2VsZWN0b3JDb250cm9sfS0tbGVmdFwiXG4gICAgZGF0YS1kaXJlY3Rpb249XCJwcmV2XCJcbiAgPjwvYnV0dG9uPlxuICA8YnV0dG9uXG4gICAgdHlwZT1cImJ1dHRvblwiXG4gICAgY2xhc3M9XCIke2Nscy5zZWxlY3RvckNvbnRyb2x9ICR7Y2xzLnNlbGVjdG9yQ29udHJvbH0tLXJpZ2h0XCJcbiAgICBkYXRhLWRpcmVjdGlvbj1cIm5leHRcIlxuICA+PC9idXR0b24+XG4gIDxkaXYgY2xhc3M9XCIke2Nscy5jYWxlbmRhcnN9XCI+PC9kaXY+XG48L2Rpdj5cbmA7XG5cbmV4cG9ydCBjb25zdCBjYWxlbmRhciA9IGBcbjxkaXYgY2xhc3M9XCIke2Nscy5jYWxlbmRhcn1cIj5cbiAgPGRpdiBjbGFzcz1cIiR7Y2xzLm1vbnRoSW5kaWNhdG9yfVwiPlxuICAgIDx0aW1lIGRhdGV0aW1lPVwie21vbnRofVwiPnttb250aH08L3RpbWU+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiJHtjbHMuZGF5T2ZXZWVrfVwiPlxuICAgIHt3ZWVrZGF5c31cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCIke2Nscy5kYXRlR3JpZH1cIj5cbiAgICB7ZGF5c31cbiAgPC9kaXY+XG48L2Rpdj5cbmA7XG5cbmV4cG9ydCBjb25zdCBkYXkgPSBgXG48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiR7Y2xzLmNlbGx9IHttb2R9XCIgZGF0YS12YWx1ZT1cIntkYXRlVGltZX1cIiBzdHlsZT1cIntzdHlsZX1cIj57ZGF0ZU51bX08L2J1dHRvbj5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5wdXQsXG4gIHNlbGVjdG9yLFxuICBjYWxlbmRhcixcbiAgZGF5XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBlbGVtOiAnc29ydGFibGUtdGFibGUnLFxuICB0YWJsZTogJ3NvcnRhYmxlLXRhYmxlX190YWJsZScsXG4gIHRoZWFkOiAnc29ydGFibGUtdGFibGVfX3RoZWFkJyxcbiAgaGVhZGVyOiAnc29ydGFibGUtdGFibGVfX2hlYWRlcicsXG4gIHJvdzogJ3NvcnRhYmxlLXRhYmxlX19yb3cnLFxuICBjZWxsOiAnc29ydGFibGUtdGFibGVfX2NlbGwnLFxuICBjZWxsRXJyb3I6ICdzb3J0YWJsZS10YWJsZV9fY2VsbC0tZXJyb3InLFxuICBjZWxsU29ydGVyOiAnc29ydGFibGUtdGFibGVfX2NlbGwtLXNvcnRlcicsXG4gIGltZzogJ3NvcnRhYmxlLXRhYmxlX19pbWFnZScsXG4gIGltZ1dyYXBwZXI6ICdzb3J0YWJsZS10YWJsZV9faW1hZ2Utd3JhcHBlcicsXG4gIHByZXZpZXc6ICdzb3J0YWJsZS10YWJsZV9fcHJldmlldycsXG4gIGxpbms6ICdzb3J0YWJsZS10YWJsZV9fbGluaycsXG4gIGNhdGVnb3J5OiAnc29ydGFibGUtdGFibGVfX2NhdGVnb3J5JyxcbiAgdG9vbHRpcENhdGVnb3J5OiAnc29ydGFibGUtdGFibGVfX3Rvb2x0aXAtY2F0ZWdvcnknLFxuICB0b29sdGlwU3ViY2F0ZWdvcnk6ICdzb3J0YWJsZS10YWJsZV9fdG9vbHRpcC1zdWJjYXRlZ29yeSdcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIDA6ICdkZXNjJyxcbiAgMTogJ2FzYydcbn07XG4iLCJpbXBvcnQgeyBmb3JtYXRUb3RhbCwgZXNjYXBlSFRNTCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvaW5kZXguanMnO1xuaW1wb3J0IHN0YXR1c1RleHQgZnJvbSAnLi9zdGF0dXNUZXh0LmpzJztcbmltcG9ydCBjbHMgZnJvbSAnLi9jbGFzc2VzLmpzJztcblxuLy8gSW5mbyAmIHNvcnRpbmcgbWV0aG9kcyBmb3IgdGFibGUgY29sdW1uc1xuZXhwb3J0IGRlZmF1bHQge1xuICBpbWFnZXM6IHtcbiAgICB0aXRsZTogJ0ltYWdlJyxcbiAgICByZW5kZXIgKHsgaW1hZ2VzIH0pIHtcbiAgICAgIGlmICghaW1hZ2VzIHx8ICFpbWFnZXNbMF0udXJsKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNyYyA9IGltYWdlc1swXS51cmw7XG4gICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke2Nscy5pbWdXcmFwcGVyfVwiPlxuICAgICAgPGltZyBzcmM9XCIke3NyY31cIiBjbGFzcz1cIiR7Y2xzLmltZ31cIj5cbiAgICAgIDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7c3JjfSlcIiBjbGFzcz1cIiR7Y2xzLnByZXZpZXd9XCI+PHNwYW4+XG4gICAgICA8ZGl2PmA7XG4gICAgfSxcbiAgICBjb21wYXJlOiBudWxsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgdGl0bGU6ICdOYW1lJyxcbiAgICByZW5kZXIgKHsgdGl0bGUsIGlkIH0pIHtcbiAgICAgIHJldHVybiBgXG4gICAgICAke3RpdGxlfVxuICAgICAgPGEgY2xhc3M9XCIke2Nscy5saW5rfVwiIGhyZWY9XCIvcHJvZHVjdHMvJHtpZH1cIj48L2E+XG4gICAgICBgO1xuICAgIH0sXG4gICAgY29tcGFyZSAoYSwgYikge1xuICAgICAgcmV0dXJuIGEudGl0bGUubG9jYWxlQ29tcGFyZShiLnRpdGxlKTtcbiAgICB9XG4gIH0sXG4gIHN1YmNhdGVnb3J5OiB7XG4gICAgdGl0bGU6ICdDYXRlZ29yeScsXG4gICAgcmVuZGVyICh7IHN1YmNhdGVnb3J5IH0pIHtcbiAgICAgIGNvbnN0IGNhdGVnb3J5ID0gc3ViY2F0ZWdvcnkuY2F0ZWdvcnk7XG4gICAgICBjb25zdCB0b290aXBDb250ZW50ID0gYDxzcGFuIGNsYXNzPVwiJHtjbHMudG9vbHRpcENhdGVnb3J5fVwiPiR7Y2F0ZWdvcnkudGl0bGV9PC9zcGFuPi88c3BhbiBjbGFzcz1cIiR7Y2xzLnRvb2x0aXBTdWJjYXRlZ29yeX1cIj4ke3N1YmNhdGVnb3J5LnRpdGxlfTwvc3Bhbj5gO1xuICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cIiR7Y2xzLmNhdGVnb3J5fVwiIGRhdGEtdG9vbHRpcC1jb250ZW50PVwiJHtlc2NhcGVIVE1MKHRvb3RpcENvbnRlbnQpfVwiPiR7c3ViY2F0ZWdvcnkudGl0bGV9PC9zcGFuPmA7XG4gICAgfSxcbiAgICBjb21wYXJlIChhLCBiKSB7XG4gICAgICAvLyBTb3J0aW5nIGJ5IHJ1c3NpYW4gdGl0bGVzXG4gICAgICBjb25zdCBhQ2F0TmFtZSA9IGEuc3ViY2F0ZWdvcnkudGl0bGU7XG4gICAgICBjb25zdCBiQ2F0TmFtZSA9IGIuc3ViY2F0ZWdvcnkudGl0bGU7XG4gICAgICByZXR1cm4gYUNhdE5hbWUubG9jYWxlQ29tcGFyZShiQ2F0TmFtZSk7XG4gICAgfVxuICB9LFxuICBxdWFudGl0eToge1xuICAgIHRpdGxlOiAnUXVhbnRpdHknLFxuICAgIHJlbmRlciAoeyBxdWFudGl0eSB9KSB7XG4gICAgICByZXR1cm4gcXVhbnRpdHk7XG4gICAgfSxcbiAgICBjb21wYXJlIChhLCBiKSB7XG4gICAgICByZXR1cm4gYS5xdWFudGl0eSAtIGIucXVhbnRpdHk7XG4gICAgfVxuICB9LFxuICBwcmljZToge1xuICAgIHRpdGxlOiAnUHJpY2UnLFxuICAgIHJlbmRlciAoeyBwcmljZSB9KSB7XG4gICAgICByZXR1cm4gZm9ybWF0VG90YWwocHJpY2UpO1xuICAgIH0sXG4gICAgY29tcGFyZSAoYSwgYikge1xuICAgICAgcmV0dXJuIGEucHJpY2UgLSBiLnByaWNlO1xuICAgIH1cbiAgfSxcbiAgc3RhdHVzOiB7XG4gICAgdGl0bGU6ICdTdGF0dXMnLFxuICAgIHJlbmRlciAoeyBzdGF0dXMgfSkge1xuICAgICAgcmV0dXJuIHN0YXR1c1RleHRbc3RhdHVzXTtcbiAgICB9LFxuICAgIGNvbXBhcmUgKGEsIGIpIHtcbiAgICAgIHJldHVybiBhLnN0YXR1cyAtIGIuc3RhdHVzO1xuICAgIH1cbiAgfVxufTtcbiIsImltcG9ydCBkaXJlY3Rpb25zIGZyb20gJy4vZGlyZWN0aW9ucy5qcyc7XG5cbmV4cG9ydCBjb25zdCBnZXREaXJlY3Rpb25UZXh0ID0gaXNBc2MgPT4ge1xuICByZXR1cm4gZGlyZWN0aW9uc1sraXNBc2NdO1xufTtcbiIsImltcG9ydCBUb29sdGlwcyBmcm9tICcuLi9Ub29sdGlwcy9pbmRleC5qcyc7XG5pbXBvcnQgY2xzIGZyb20gJy4vY2xhc3Nlcy5qcyc7XG5pbXBvcnQgc3RhdHVzVGV4dCBmcm9tICcuL3N0YXR1c1RleHQuanMnO1xuaW1wb3J0IGZpZWxkcyBmcm9tICcuL2ZpZWxkcy5qcyc7XG5pbXBvcnQgeyBmZXRjaEpzb24sIHRocm90dGxlIH0gZnJvbSAnLi4vLi4vaGVscGVycy9pbmRleC5qcyc7XG5pbXBvcnQgeyBnZXREaXJlY3Rpb25UZXh0IH0gZnJvbSAnLi9oZWxwZXJzLmpzJztcbmltcG9ydCBQYWdlTWVzc2FnZSBmcm9tICcuLi9QYWdlTWVzc2FnZS9pbmRleC5qcyc7XG5cbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvcnRhYmxlVGFibGUgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc29ydGluZyA9IHtcbiAgICAgIGN1cnJlbnQ6IG51bGwsXG4gICAgICBpc0FzYzogdHJ1ZVxuICAgIH07XG5cbiAgICB0aGlzLnBhZ2UgPSB7XG4gICAgICBpdGVtczogMjAsXG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgaXNEYXRhRW5kZWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIHRoaXMuYXBpVXJsID0gcHJvY2Vzcy5lbnYuQVBJX1VSTCB8fCAnaHR0cHM6Ly9jb3Vyc2UtanMuamF2YXNjcmlwdC5ydSc7XG5cbiAgICB0aGlzLmNoYW5nZURhdGUgPSB0aGlzLmNoYW5nZURhdGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFzeW5jIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcbiAgICBjb25zdCB7XG4gICAgICB1cmwsXG4gICAgICBmaWVsZHNMaXN0LFxuICAgICAgb3JkZXJGaWVsZCxcbiAgICAgIG9yZGVyRGlyZWN0aW9uLFxuICAgICAgaXNEeW5hbWljLFxuICAgICAgZnJvbSxcbiAgICAgIHRvXG4gICAgfSA9IHRoaXMuZGF0YXNldDtcblxuICAgIHRoaXMuZGF0ZXMgPSB7XG4gICAgICBmcm9tLFxuICAgICAgdG9cbiAgICB9O1xuXG4gICAgdGhpcy51cmwgPSB0aGlzLmFwaVVybCArIHVybDtcbiAgICB0aGlzLmZpZWxkc0xpc3QgPSBKU09OLnBhcnNlKGZpZWxkc0xpc3QucmVwbGFjZSgvJy9nLCAnXCInKSk7XG4gICAgdGhpcy5pc0R5bmFtaWMgPSAraXNEeW5hbWljO1xuICAgIHRoaXMub3JkZXIgPSB7XG4gICAgICBmaWVsZDogb3JkZXJGaWVsZCxcbiAgICAgIGRpcmVjdGlvbjogb3JkZXJEaXJlY3Rpb25cbiAgICB9O1xuICAgIHRoaXMuaW5pdFRhYmxlID0gdGhpcy5pbml0VGFibGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMub3JkZXIgJiYgdGhpcy5vcmRlci5kaXJlY3Rpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zb3J0aW5nLmlzQXNjID0gdGhpcy5vcmRlci5kaXJlY3Rpb247XG4gICAgfVxuXG4gICAgdGhpcy5mZXRjaFVybCA9IHRoaXMuZ2V0RmV0Y2hVcmwoKTtcbiAgICAvLyBUcnkgdG8gdGhyb3R0bGUgbG9hZGluZyBvbiBzY3JvbGxcbiAgICB0aGlzLm9uQm9keVNjcm9sbFRocm90dGxlID0gdGhyb3R0bGUodGhpcy5vbkJvZHlTY3JvbGwsIHRoaXMsIDUwMCk7XG5cbiAgICB0aGlzLmluaXRUYWJsZSgpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlRGF0ZScsIHRoaXMuY2hhbmdlRGF0ZSk7XG4gIH1cblxuICBhc3luYyBsb2FkRGF0YSAoKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMudGFibGUuZGF0YXNldC5sb2FkaW5nID0gMTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB0YWJsZURhdGEgPSBhd2FpdCBmZXRjaEpzb24odGhpcy5mZXRjaFVybCk7XG5cbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnRhYmxlLmRhdGFzZXQubG9hZGluZyA9IDA7XG5cbiAgICAgIHJldHVybiB0YWJsZURhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIFNob3cgZXJyb3IgbWVzc2FnZSB0byB1c2VyXG4gICAgICBjb25zdCBtZXNzYWdlID0gbmV3IFBhZ2VNZXNzYWdlKHsgZXJyb3IgfSk7XG4gICAgICB0aGlzLnRhYmxlLmRhdGFzZXQubG9hZGluZyA9IDA7XG5cbiAgICAgIHRoaXMudEJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAnYmVmb3JlRW5kJyxcbiAgICAgICAgYDx0ciBjbGFzcz1cIiR7Y2xzLnJvd31cIj48dGQgY2xhc3M9XCIke2Nscy5jZWxsRXJyb3J9XCI+JHttZXNzYWdlLmVsZW0ub3V0ZXJIVE1MfTwvdHI+YFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBpbml0VGFibGUgKCkge1xuICAgIHRoaXMuY3JlYXRlTGF5b3V0KCk7XG4gICAgdGhpcy5hZGRFbGVtSGVhZGVyKCk7XG4gICAgdGhpcy5hZGRUYWJsZUV2ZW50cygpO1xuXG4gICAgdGhpcy5maWxsVEJvZHkoKTtcbiAgfVxuXG4gIGFzeW5jIGZpbGxUQm9keSAoKSB7XG4gICAgaWYgKHRoaXMucGFnZS5pc0RhdGFFbmRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudGFibGVSb3dzID0gYXdhaXQgdGhpcy5sb2FkRGF0YSgpO1xuXG4gICAgLy8gTGFzdCBwYWdlXG4gICAgaWYgKHRoaXMudGFibGVSb3dzLmxlbmd0aCA8IHRoaXMucGFnZS5pdGVtcykge1xuICAgICAgdGhpcy5wYWdlLmlzRGF0YUVuZGVkID0gdHJ1ZTtcblxuICAgICAgaWYgKHRoaXMudGFibGVSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzRHluYW1pYyAmJiB0aGlzLm9yZGVyICYmIHRoaXMub3JkZXIuZmllbGQpIHtcbiAgICAgIHRoaXMuc29ydFJvd3ModGhpcy5vcmRlci5maWVsZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJUQm9keSgpO1xuICB9XG5cbiAgZ2V0RmV0Y2hVcmwgKCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIHN0YXJ0OiB0aGlzLnBhZ2UuY3VycmVudCAqIHRoaXMucGFnZS5pdGVtcyxcbiAgICAgIGVuZDogKHRoaXMucGFnZS5jdXJyZW50ICsgMSkgKiB0aGlzLnBhZ2UuaXRlbXMsXG4gICAgICBzb3J0OiB0aGlzLm9yZGVyLmZpZWxkLFxuICAgICAgb3JkZXI6IGdldERpcmVjdGlvblRleHQodGhpcy5zb3J0aW5nLmlzQXNjKVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5kYXRlcyAmJiB0aGlzLmRhdGVzLmZyb20pIHtcbiAgICAgIHBhcmFtcy5mcm9tID0gdGhpcy5kYXRlcy5mcm9tO1xuICAgICAgcGFyYW1zLnRvID0gdGhpcy5kYXRlcy50bztcbiAgICB9XG5cbiAgICBsZXQgcGFyYW1zU3RyID0gJyc7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICBsZXQgcHJlZml4ID0gJ18nO1xuICAgICAgaWYgKGtleSA9PT0gJ2Zyb20nIHx8IGtleSA9PT0gJ3RvJykge1xuICAgICAgICBwcmVmaXggPSAnJztcbiAgICAgIH1cblxuICAgICAgcGFyYW1zU3RyICs9IGAmJHtwcmVmaXh9JHtrZXl9PSR7cGFyYW1zW2tleV19YDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudXJsICsgcGFyYW1zU3RyO1xuICB9XG5cbiAgY3JlYXRlTGF5b3V0ICgpIHtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoY2xzLmVsZW0pO1xuICAgIHRoaXMudGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgIHRoaXMudGFibGUuY2xhc3NMaXN0LmFkZChjbHMudGFibGUpO1xuICAgIHRoaXMudEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xuICAgIHRoaXMudGFibGUuYXBwZW5kKHRoaXMudEJvZHkpO1xuICAgIHRoaXMudGFibGUuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgJ2JlZm9yZUVuZCcsXG4gICAgICBgPHRmb290Pjx0cj48dGQgY29sc3Bhbj1cIiR7dGhpcy5maWVsZHNMaXN0Lmxlbmd0aH1cIj48ZGl2IGNsYXNzPVwic3Bpbm5lclwiPjwvZGl2PjwvdGQ+PC90cj48L3Rmb290PmBcbiAgICApO1xuXG4gICAgdGhpcy5hcHBlbmQodGhpcy50YWJsZSk7XG4gIH1cblxuICAvLyBGaWxsIHRhYmxlIGhlYWRlciB3aXRoIGNvbnRlbnRcbiAgYWRkRWxlbUhlYWRlciAoKSB7XG4gICAgbGV0IGhlYWRlckNvbnRlbnQgPSAnJztcblxuICAgIHRoaXMuZmllbGRzTGlzdC5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgIGxldCB0aENsYXNzID0gY2xzLmNlbGw7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBzb3J0ZXI6ICcnLFxuICAgICAgICBzb3J0RGlyZWN0aW9uOiAnJ1xuICAgICAgfTtcbiAgICAgIGlmIChmaWVsZHNbZmllbGRdLmNvbXBhcmUpIHtcbiAgICAgICAgdGhDbGFzcyArPSBgICR7Y2xzLmNlbGxTb3J0ZXJ9YDtcbiAgICAgICAgZGF0YS5zb3J0ZXIgPSAnZGF0YS1zb3J0ZXI9XCIxXCInO1xuICAgICAgfVxuICAgICAgaWYgKGZpZWxkID09PSB0aGlzLm9yZGVyLmZpZWxkKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGdldERpcmVjdGlvblRleHQodGhpcy5zb3J0aW5nLmlzQXNjKTtcbiAgICAgICAgZGF0YS5zb3J0RGlyZWN0aW9uID0gYGRhdGEtc29ydC1kaXJlY3Rpb249XCIke2RpcmVjdGlvbn1cImA7XG4gICAgICB9XG4gICAgICBoZWFkZXJDb250ZW50ICs9IGA8dGggY2xhc3M9XCIke3RoQ2xhc3N9XCJcbiAgICAgICAgZGF0YS1uYW1lPVwiJHtmaWVsZH1cIlxuICAgICAgICAke2RhdGEuc29ydGVyfVxuICAgICAgICAke2RhdGEuc29ydERpcmVjdGlvbn1cbiAgICAgICAgPiR7ZmllbGRzW2ZpZWxkXS50aXRsZX08L3RoPmA7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0aGVhZFN0ciA9IGA8dGhlYWQgY2xhc3M9XCIke2Nscy50aGVhZH1cIj48dHIgY2xhc3M9XCIke2Nscy5oZWFkZXJ9ICR7Y2xzLnJvd31cIj5cbiAgICAgICR7aGVhZGVyQ29udGVudH1cbiAgICA8L3RyPjwvdGhlYWQ+YDtcblxuICAgIHRoaXMudGFibGUuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlckJlZ2luJywgdGhlYWRTdHIpO1xuXG4gICAgdGhpcy5zb3J0aW5nLmN1cnJlbnQgPSB0aGlzLnRhYmxlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNvcnQtZGlyZWN0aW9uXScpO1xuICB9XG5cbiAgLy8gU29ydGVyXG4gIHNvcnRlck9uQ2xpY2sgKHRoKSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aC5kYXRhc2V0O1xuXG4gICAgaWYgKHRoLmRhdGFzZXQuc29ydERpcmVjdGlvbikge1xuICAgICAgdGhpcy5zb3J0aW5nLmlzQXNjID0gIXRoaXMuc29ydGluZy5pc0FzYztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuc29ydGluZy5jdXJyZW50KSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNvcnRpbmcuY3VycmVudC5kYXRhc2V0LnNvcnREaXJlY3Rpb247XG4gICAgICB9XG4gICAgICB0aGlzLnNvcnRpbmcuaXNBc2MgPSB0cnVlO1xuICAgICAgdGhpcy5zb3J0aW5nLmN1cnJlbnQgPSB0aDtcbiAgICB9XG5cbiAgICB0aC5kYXRhc2V0LnNvcnREaXJlY3Rpb24gPSBnZXREaXJlY3Rpb25UZXh0KHRoaXMuc29ydGluZy5pc0FzYyk7XG5cbiAgICBpZiAodGhpcy5pc0R5bmFtaWMpIHtcbiAgICAgIHRoaXMuc29ydFJvd3NEeW5hbWljKG5hbWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc29ydFJvd3MobmFtZSk7XG4gIH1cblxuICAvLyBTb3J0aW5nXG4gIHNvcnRSb3dzIChmaWVsZCkge1xuICAgIHRoaXMudGFibGVSb3dzLnNvcnQoZmllbGRzW2ZpZWxkXS5jb21wYXJlKTtcblxuICAgIGlmICghdGhpcy5zb3J0aW5nLmlzQXNjKSB7XG4gICAgICB0aGlzLnRhYmxlUm93cy5yZXZlcnNlKCk7XG4gICAgfVxuXG4gICAgdGhpcy50Qm9keS5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLnJlbmRlclRCb2R5KCk7XG4gIH1cblxuICAvLyBTb3J0aW5nXG4gIHNvcnRSb3dzRHluYW1pYyAoZmllbGQpIHtcbiAgICB0aGlzLm9yZGVyLmZpZWxkID0gZmllbGQ7XG4gICAgdGhpcy5wYWdlLmN1cnJlbnQgPSAwO1xuICAgIHRoaXMucGFnZS5pc0RhdGFFbmRlZCA9IGZhbHNlO1xuICAgIHRoaXMuZmV0Y2hVcmwgPSB0aGlzLmdldEZldGNoVXJsKCk7XG4gICAgdGhpcy50Qm9keS5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLmZpbGxUQm9keSgpO1xuICB9XG5cbiAgLy8gQWRkaW5nIGRlbGVnYXRlZCBldmVudHMgdG8gdGFibGVcbiAgYWRkVGFibGVFdmVudHMgKCkge1xuICAgIHRoaXMudGFibGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vbkJvZHlTY3JvbGxUaHJvdHRsZSk7XG4gICAgdGhpcy50b29sdGlwcyA9IG5ldyBUb29sdGlwcyh7IGVsZW06IHRoaXMgfSk7XG4gIH1cblxuICAvLyBIYW5kbGVzIGFsbCBldmVudHMgZm9yIHRhYmxlXG4gIGhhbmRsZUV2ZW50ICgpIHtcbiAgICAvLyBTb3J0aW5nIGV2ZW50c1xuICAgIGlmIChldmVudC50YXJnZXQuZGF0YXNldC5zb3J0ZXIpIHtcbiAgICAgIHRoaXMuc29ydGVyT25DbGljayhldmVudC50YXJnZXQpO1xuICAgIH1cbiAgfVxuXG4gIG9uQm9keVNjcm9sbCAoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2FkaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaHRtbENvb3JkcyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBzY3JvbGxEZWx0YSA9IGh0bWxDb29yZHMuYm90dG9tIC0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgaWYgKHNjcm9sbERlbHRhIDwgMTAwKSB7XG4gICAgICB0aGlzLnBhZ2UuY3VycmVudCsrO1xuICAgICAgdGhpcy5mZXRjaFVybCA9IHRoaXMuZ2V0RmV0Y2hVcmwoKTtcbiAgICAgIHRoaXMuZmlsbFRCb2R5KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gRmlsbCB0YWJsZSBib2R5IGNlbGxzIHdpdGggY29udGVudFxuICByZW5kZXJUQm9keSAoKSB7XG4gICAgdGhpcy5wYWdlWU9mZnNldCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblxuICAgIHRoaXMudGFibGVSb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgIGxldCByb3dDb250ZW50ID0gJyc7XG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gcm93O1xuXG4gICAgICB0aGlzLmZpZWxkc0xpc3QuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgIGNvbnN0IHRkQ2xhc3NlcyA9IFtcbiAgICAgICAgICBjbHMuY2VsbCxcbiAgICAgICAgICBgJHtjbHMuY2VsbH0tLSR7ZmllbGR9YCxcbiAgICAgICAgICBgJHtjbHMuY2VsbH0tLSR7c3RhdHVzVGV4dFtzdGF0dXNdLnRvTG93ZXJDYXNlKCl9YFxuICAgICAgICBdO1xuICAgICAgICBjb25zdCByZW5kZXJGaWVsZCA9IGZpZWxkc1tmaWVsZF0ucmVuZGVyO1xuICAgICAgICBjb25zdCByZW5kZXJlZENvbnRlbnQgPSByZW5kZXJGaWVsZChyb3cpO1xuXG4gICAgICAgIGlmIChyZW5kZXJlZENvbnRlbnQpIHtcbiAgICAgICAgICByb3dDb250ZW50ICs9IGA8dGQgY2xhc3M9XCIke3RkQ2xhc3Nlcy5qb2luKFxuICAgICAgICAgICAgJyAnXG4gICAgICAgICAgKX1cIj4ke3JlbmRlcmVkQ29udGVudH08L3RkPmA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnRCb2R5Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgJ2JlZm9yZUVuZCcsXG4gICAgICAgIGA8dHIgY2xhc3M9XCIke2Nscy5yb3d9XCI+JHtyb3dDb250ZW50fTwvdHI+YFxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLnBhZ2VZT2Zmc2V0KSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgdGhpcy5wYWdlWU9mZnNldCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlRGF0ZSAoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50LmRldGFpbCB8fCAhZXZlbnQuZGV0YWlsLmRhdGVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kYXRlcyA9IGV2ZW50LmRldGFpbC5kYXRlcztcbiAgICB0aGlzLmZldGNoVXJsID0gdGhpcy5nZXRGZXRjaFVybCgpO1xuICAgIHRoaXMudEJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5maWxsVEJvZHkoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAwOiAnRGlzYWJsZWQnLFxuICAxOiAnRW5hYmxlZCdcbn07XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKG1vZHVsZS5pZCwgY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiZXhwb3J0IGRlZmF1bHQge1xuICBlbGVtOiAndG9vbHRpcHMtY29udGFpbmVyJyxcbiAgZGltbWVkOiAndG9vbHRpcHMtY29udGFpbmVyLS1kaW1tZWQnLFxuICB0b29sdGlwOiAndG9vbHRpcCdcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vaGVscGVycy9pbmRleC5qcyc7XG5pbXBvcnQgY2xzIGZyb20gJy4vY2xhc3Nlcy5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwcyB7XG4gIGNvbnN0cnVjdG9yICh7IGVsZW0sIGRpbVNpYmxpbmdzIH0pIHtcbiAgICB0aGlzLmVsZW0gPSBlbGVtO1xuICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKGNscy5lbGVtKTtcbiAgICB0aGlzLmRpbVNpYmxpbmdzID0gZGltU2libGluZ3M7XG5cbiAgICB0aGlzLnRvb2x0aXAgPSBjcmVhdGVFbGVtZW50KGA8ZGl2IGNsYXNzPVwiJHtjbHMudG9vbHRpcH1cIj48L2Rpdj5gKTtcbiAgICB0aGlzLmVsZW0uYXBwZW5kKHRoaXMudG9vbHRpcCk7XG5cbiAgICB0aGlzLmxpc3RNb3VzZU1vdmUgPSB0aGlzLmxpc3RNb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxpc3RNb3VzZU91dCA9IHRoaXMubGlzdE1vdXNlT3V0LmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmVsZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5saXN0TW91c2VNb3ZlKTtcbiAgICB0aGlzLmVsZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMubGlzdE1vdXNlT3V0KTtcbiAgfVxuXG4gIGxpc3RNb3VzZU1vdmUgKCkge1xuICAgIGlmICghZXZlbnQudGFyZ2V0LmRhdGFzZXQudG9vbHRpcENvbnRlbnQpIHtcbiAgICAgIHRoaXMuaGlkZVRvb2x0aXAoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IHRvb2x0aXBDb250ZW50IH0gPSBldmVudC50YXJnZXQuZGF0YXNldDtcbiAgICB0aGlzLnRvb2x0aXAuaW5uZXJIVE1MID0gdG9vbHRpcENvbnRlbnQ7XG4gICAgdGhpcy50b29sdGlwLmRhdGFzZXQudmlzaWJsZSA9IDE7XG5cbiAgICAvLyBQYXJlbnQgY29udGFpbmVyIGNvb3Jkc1xuICAgIHRoaXMuZWxlbUNvb3JkcyA9IHRoaXMuZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBjb29yZHMgPSB7XG4gICAgICB4OiBldmVudC5jbGllbnRYIC0gdGhpcy5lbGVtQ29vcmRzLngsXG4gICAgICB5OiBldmVudC5jbGllbnRZIC0gdGhpcy5lbGVtQ29vcmRzLnlcbiAgICB9O1xuXG4gICAgdGhpcy50b29sdGlwLnN0eWxlID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlKCR7Y29vcmRzLnh9cHgsICR7Y29vcmRzLnl9cHgpYDtcblxuICAgIC8vIEZpeCBjdXR0aW5nIGJ5IHdpbmRvd1xuICAgIHRoaXMudG9vbHRpcENvb3JkcyA9IHRoaXMudG9vbHRpcC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBoaWRkZW5CeVdpbmRvdyA9IHRoaXMudG9vbHRpcENvb3Jkcy5yaWdodCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcblxuICAgIGlmIChoaWRkZW5CeVdpbmRvdyA+IDApIHtcbiAgICAgIGNvb3Jkcy54IC09IGhpZGRlbkJ5V2luZG93O1xuICAgICAgdGhpcy50b29sdGlwLnN0eWxlID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlKCR7Y29vcmRzLnh9cHgsICR7Y29vcmRzLnl9cHgpYDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kaW1TaWJsaW5ncykge1xuICAgICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoY2xzLmRpbW1lZCk7XG4gICAgfVxuICB9XG5cbiAgbGlzdE1vdXNlT3V0ICgpIHtcbiAgICBpZiAoIWV2ZW50LnRhcmdldC5kYXRhc2V0LnRvb2x0aXBDb250ZW50KSB7XG4gICAgICB0aGlzLmhpZGVUb29sdGlwKCk7XG4gICAgfVxuICB9XG5cbiAgaGlkZVRvb2x0aXAgKCkge1xuICAgIHRoaXMudG9vbHRpcC5kYXRhc2V0LnZpc2libGUgPSAwO1xuICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNscy5kaW1tZWQpO1xuICB9XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKG1vZHVsZS5pZCwgY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gbmljZSBvdmVydmlldzpcbi8vIGh0dHBzOi8vZ3Jyci50ZWNoL3Bvc3RzL2NyZWF0ZS1kb20tbm9kZS1mcm9tLWh0bWwtc3RyaW5nL1xuXG4vLyBubyBJRTExXG5jb25zdCBzdXBwb3J0c1RlbXBsYXRlID0gJ2NvbnRlbnQnIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBzdXBwb3J0c1RlbXBsYXRlXG4gID8gZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICB9XG4gIDogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LmlubmVySFRNTCA9IGh0bWw7XG4gICAgICByZXR1cm4gZGl2LmZpcnN0RWxlbWVudENoaWxkO1xuICAgIH07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZW1lbnQ7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2NhcGVIVE1MIChzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZ1xuICAgIC5yZXBsYWNlKC8mL2csICcmJylcbiAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXG4gICAgLnJlcGxhY2UoLycvZywgJyYjMzk7JylcbiAgICAucmVwbGFjZSgvPC9nLCAnPCcpXG4gICAgLnJlcGxhY2UoLz4vZywgJz4nKTtcbn1cbiIsIi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2lsaWFrYW4vZGQ2YWQwZGFkYjY2MzA1NDRkMTE4N2M0Yzk0Y2NmNDBcbmltcG9ydCBub3RpZmllciBmcm9tICcuLi9saWIvbm90aWZpZXIuanMnO1xuXG4vLyBjb25zb2xlLmNsZWFyKCk7XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBmZXRjaEpTT04gKHVybCkge1xuICBsZXQgcmVzcG9uc2U7XG5cbiAgLy8gRXJyb3Igd2hpbGUgbG9hZGluZyAoYmFkIHVybCBvciBjb25uZWN0aW9uKVxuICB0cnkge1xuICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgRmV0Y2hFcnJvcihyZXNwb25zZSwgbnVsbCwgYE5ldHdvcmsgZXJyb3IgZm9yIHVybCAke3VybH1gKTtcbiAgfVxuXG4gIC8vIEJhZCByZXNwb25zZSBmcm9tIHNlcnZlclxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgbGV0IGJvZHk7XG4gICAgY29uc3Qgc3RhdHVzVGV4dCA9IHJlc3BvbnNlLnN0YXR1c1RleHQ7XG5cbiAgICB0cnkge1xuICAgICAgYm9keSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIC8vIGNhbid0IHJlcHJvZHVjZSBnZXR0aW5nIGJvZHkgd2l0aCBub3Qgb2sgc3RhdHVzXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9XG4gICAgbGV0IG1lc3NhZ2UgPSBgRXJyb3IgJHtyZXNwb25zZS5zdGF0dXN9IGZvciB1cmwgJHt1cmx9YDtcblxuICAgIGlmIChzdGF0dXNUZXh0KSB7XG4gICAgICBtZXNzYWdlICs9IGA6ICR7c3RhdHVzVGV4dH1gO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBGZXRjaEVycm9yKHJlc3BvbnNlLCBib2R5LCBtZXNzYWdlKTtcbiAgfVxuXG4gIC8vIFJlc3BvbnNlIGlzIGNvcnJlY3QsIHRyeSB0byBnZXQgZGF0YVxuICB0cnkge1xuICAgIHJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IG5ldyBGZXRjaEVycm9yKHJlc3BvbnNlLCBudWxsLCBlcnJvci5tZXNzYWdlKTtcbiAgfVxuXG4gIHJldHVybiByZXNwb25zZTtcbn1cblxuY2xhc3MgRmV0Y2hFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IgKHJlc3BvbnNlLCBib2R5LCBtZXNzYWdlKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgdGhpcy5uYW1lID0gJ0ZldGNoRXJyb3InO1xuXG4gICAgdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gIH1cbn1cblxuLy8gaGFuZGxlIHVuY2F1Z2h0IGZhaWxlZCBmZXRjaCB0aHJvdWdoXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndW5oYW5kbGVkcmVqZWN0aW9uJywgZXZlbnQgPT4ge1xuICBpZiAoZXZlbnQucmVhc29uIGluc3RhbmNlb2YgRmV0Y2hFcnJvcikge1xuICAgIG5vdGlmaWVyKGV2ZW50LnJlYXNvbi5tZXNzYWdlLCAnZXJyb3InKTtcbiAgfVxufSk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaWxsVGVtcGxhdGUgKHsgdG1wbCwgZGF0YSB9KSB7XG4gIGlmICghdG1wbCB8fCAhZGF0YSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiB0bXBsLnJlcGxhY2UoL3soW15cIl17MSx9KX0vZywgKG1hdGNoLCBzdHIpID0+IHtcbiAgICBpZiAoZGF0YVtzdHJdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBkYXRhW3N0cl07XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXREYXRlIChzdHIpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHN0cikudG9EYXRlU3RyaW5nKCk7XG4gIGNvbnN0IGRhdGFQYXJ0cyA9IGRhdGUuc3BsaXQoJyAnKTtcbiAgY29uc3QgbW9udGggPSBkYXRhUGFydHNbMV07XG4gIGNvbnN0IGRheSA9IGRhdGFQYXJ0c1syXTtcbiAgY29uc3QgeWVhciA9IGRhdGFQYXJ0c1szXTtcblxuICByZXR1cm4gYCR7bW9udGh9ICR7ZGF5fSwgJHt5ZWFyfWA7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRUb3RhbCAobnVtKSB7XG4gIGxldCBmb3JtYXR0ZWQgPSBudW07XG4gIGlmIChudW0gPj0gMTAwMCkge1xuICAgIGNvbnN0IHRhaWwgPSBudW0gJSAxMDAwO1xuICAgIGZvcm1hdHRlZCA9IGAkeyhudW0gLSB0YWlsKSAvIDEwMDB9LCR7dGFpbH1gO1xuICB9XG5cbiAgcmV0dXJuIGAkJHtmb3JtYXR0ZWR9YDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERhdGVGcm9tU3RyaW5nIChzdHIpIHtcbiAgY29uc3QgW2RheSwgbW9udGgsIHllYXJdID0gc3RyLnNwbGl0KCcvJyk7XG4gIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XG59O1xuIiwiLy8gRGlydHkgd2F5IHRvIGdldCB3ZWVrZGF5cyBpbiBjdXJyZW50IGxhbmdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdlZWtEYXlzICh0YWcpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKDE5NzAsIDAsIDUpO1xuICBsZXQgd2Vla2RheXNTdHIgPSAnJztcbiAgbGV0IGNvdW50ZXIgPSAwO1xuXG4gIHdoaWxlIChjb3VudGVyIDwgNykge1xuICAgIGNvbnN0IGRheW5hbWUgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKCdkZWZhdWx0JywgeyB3ZWVrZGF5OiAnbmFycm93JyB9KTtcbiAgICB3ZWVrZGF5c1N0ciArPSBgPCR7dGFnfT4ke2RheW5hbWV9PC8ke3RhZ30+YDtcbiAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyAxKTtcbiAgICBjb3VudGVyKys7XG4gIH1cblxuICByZXR1cm4gd2Vla2RheXNTdHI7XG59XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnQuanMnO1xuaW1wb3J0IGVzY2FwZUhUTUwgZnJvbSAnLi9lc2NhcGVIVE1MLmpzJztcbmltcG9ydCBmaWxsVGVtcGxhdGUgZnJvbSAnLi9maWxsVGVtcGxhdGUuanMnO1xuaW1wb3J0IGZvcm1hdERhdGUgZnJvbSAnLi9mb3JtYXREYXRlLmpzJztcbmltcG9ydCBmb3JtYXRUb3RhbCBmcm9tICcuL2Zvcm1hdFRvdGFsLmpzJztcbmltcG9ydCBnZXREYXRlRnJvbVN0cmluZyBmcm9tICcuL2dldERhdGVGcm9tU3RyaW5nLmpzJztcbmltcG9ydCBnZXRXZWVrRGF5cyBmcm9tICcuL2dldFdlZWtEYXlzLmpzJztcbmltcG9ydCB0aHJvdHRsZSBmcm9tICcuL3Rocm90dGxlLmpzJztcbmltcG9ydCBmZXRjaEpzb24gZnJvbSAnLi9mZXRjaEpzb24uanMnO1xuXG5leHBvcnQge1xuICBjcmVhdGVFbGVtZW50LFxuICBlc2NhcGVIVE1MLFxuICBmaWxsVGVtcGxhdGUsXG4gIGZvcm1hdERhdGUsXG4gIGZvcm1hdFRvdGFsLFxuICBnZXREYXRlRnJvbVN0cmluZyxcbiAgZ2V0V2Vla0RheXMsXG4gIHRocm90dGxlLFxuICBmZXRjaEpzb25cbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aHJvdHRsZSAoZnVuYywgY29udGV4dCwgdGltZW91dCkge1xuICBsZXQgYXJncztcbiAgbGV0IGlzV2FpdGluZyA9IGZhbHNlO1xuICBsZXQgaXNGaXJzdENhbGwgPSB0cnVlO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgYXJncyA9IGFyZ3VtZW50cztcblxuICAgIGlmIChpc0ZpcnN0Q2FsbCkge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCAuLi5hcmdzKTtcbiAgICAgIGlzRmlyc3RDYWxsID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFpc1dhaXRpbmcpIHtcbiAgICAgIGlzV2FpdGluZyA9IHRydWU7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIC4uLmFyZ3MpO1xuICAgICAgICBpc1dhaXRpbmcgPSBmYWxzZTtcbiAgICAgIH0sIHRpbWVvdXQpO1xuICAgIH1cbiAgfTtcbn1cbiIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IFwiLi9zcmMvbGliIGxhenkgcmVjdXJzaXZlIF4uKlxcXFwvcGFnZXNcXFxcLy4qXFxcXC9pbmRleFxcXFwuanMkXCI7IiwiaW1wb3J0IHJlbmRlclBhZ2UgZnJvbSAnLi9yZW5kZXJQYWdlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMucm91dGVzID0gW107XG5cbiAgICB0aGlzLmRvY3VtZW50Q2xpY2sgPSB0aGlzLmRvY3VtZW50Q2xpY2suYmluZCh0aGlzKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kb2N1bWVudENsaWNrKTtcbiAgfVxuXG4gIHN0YXRpYyBpbnN0YW5jZSAoKSB7XG4gICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgUm91dGVyKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgfVxuXG4gIGFkZFJvdXRlIChwYXR0ZXJuLCBwYXRoKSB7XG4gICAgdGhpcy5yb3V0ZXMucHVzaCh7IHBhdHRlcm4sIHBhdGggfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXROb3RGb3VuZFBhZ2UgKHBhdGgpIHtcbiAgICB0aGlzLm5vdEZvdW5kUGFnZVBhdGggPSBwYXRoO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbmF2aWdhdGUgKGhyZWYpIHtcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBocmVmKTtcbiAgICB0aGlzLnJvdXRlKCk7XG4gIH1cblxuICBhc3luYyByb3V0ZSAoKSB7XG4gICAgY29uc3Qgc3RyaXBwZWRQYXRoID0gY2xlYW5QYXRoKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgbGV0IG1hdGNoO1xuXG4gICAgZm9yIChjb25zdCByb3V0ZSBvZiB0aGlzLnJvdXRlcykge1xuICAgICAgbWF0Y2ggPSBzdHJpcHBlZFBhdGgubWF0Y2gocm91dGUucGF0dGVybik7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgdGhpcy5wYWdlID0gYXdhaXQgdGhpcy5jaGFuZ2VQYWdlKHJvdXRlLnBhdGgsIG1hdGNoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFtYXRjaCkge1xuICAgICAgdGhpcy5wYWdlID0gYXdhaXQgdGhpcy5jaGFuZ2VQYWdlKHRoaXMubm90Rm91bmRQYWdlUGF0aCk7XG4gICAgfVxuXG4gICAgLy8gY3VzdG9tIGV2ZW50IGhlcmVcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZVBhZ2UgKHBhdGgsIG1hdGNoKSB7XG4gICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2UuZGVzdHJveSkge1xuICAgICAgdGhpcy5wYWdlLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICB0aGlzLnBhZ2UgPSBhd2FpdCByZW5kZXJQYWdlKHBhdGgsIG1hdGNoKTtcbiAgfVxuXG4gIGFkZExpc3RlbmVyICgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoKSA9PiB0aGlzLnJvdXRlKCkpO1xuICAgIHRoaXMucm91dGUoKTtcbiAgfVxuXG4gIGRvY3VtZW50Q2xpY2sgKGV2ZW50KSB7XG4gICAgY29uc3QgbGluayA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdhJyk7XG5cbiAgICBpZiAoIWxpbmspIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBocmVmID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcblxuICAgIGlmIChocmVmICYmIGhyZWYuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5uYXZpZ2F0ZShocmVmKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYW5QYXRoIChwYXRoKSB7XG4gIHJldHVybiBkZWNvZGVVUkkocGF0aClcbiAgICAucmVwbGFjZSgvXlxcL3xcXC8kLywgJycpXG4gICAgLnJlcGxhY2UoL1xcPy4qJC8sICcnKVxuICAgIC5yZXBsYWNlKC8jLiokLywgJycpO1xufVxuIiwiaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbi9pbmRleC5qcyc7XG5cbmNvbnN0IG5vdGlmQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5ub3RpZkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdub3RpZmljYXRpb25zJyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZChub3RpZkNvbnRhaW5lcik7XG5cbmxldCBub3RpZmljYXRpb25zID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIG5vdGlmeSAobWVzc2FnZSwgdHlwZSkge1xuICBjb25zdCBub3RpZmljYXRpb24gPSBuZXcgTm90aWZpY2F0aW9uKHtcbiAgICBtZXNzYWdlLFxuICAgIGNvbnRhaW5lcjogbm90aWZDb250YWluZXIsXG4gICAgdHlwZVxuICB9KTtcblxuICBub3RpZmljYXRpb25zLnB1c2gobm90aWZpY2F0aW9uKTtcblxuICBpZiAobm90aWZpY2F0aW9uLmVsZW0ub2Zmc2V0VG9wIDwgMCkge1xuICAgIG5vdGlmaWNhdGlvbnMgPSBub3RpZmljYXRpb25zLmZpbHRlcihub3RpZmljYXRpb24gPT4ge1xuICAgICAgcmV0dXJuICFub3RpZmljYXRpb24uaXNGaW5pc2hlZDtcbiAgICB9KTtcbiAgICBub3RpZmljYXRpb25zLnNoaWZ0KCkuaGlkZUVsZW0oKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcmVuZGVyUGFnZSAocGF0aCwgbWF0Y2gpIHtcbiAgY29uc3QgeyBkZWZhdWx0OiBQYWdlIH0gPSBhd2FpdCBpbXBvcnQoYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vcGFnZXMvJHtwYXRofS9pbmRleC5qc2ApO1xuICBjb25zdCBwYWdlID0gbmV3IFBhZ2UobWF0Y2gpO1xuICBjb25zdCByZW5kZXJlZFBhZ2UgPSBhd2FpdCBwYWdlLnJlbmRlcigpO1xuXG4gIGNvbnN0IGNvbnRlbnRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29udGVudEVsZW0uaW5uZXJIVE1MID0gJyc7XG4gIGNvbnRlbnRFbGVtLmFwcGVuZChyZW5kZXJlZFBhZ2UpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==