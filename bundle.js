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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/categories/styles.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/categories/styles.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".categories__list {\n  width: 100%;\n  list-style-type: none;\n  margin: 0;\n  padding: 0; }\n\n.categories__list--subcategories {\n  display: none;\n  margin-top: .5rem;\n  margin-bottom: 1rem; }\n\n.categories__item {\n  border-radius: var(--radius);\n  background: var(--white);\n  border: 1px solid var(--grey-light); }\n\n.categories__item--topcategory {\n  margin: 1rem; }\n  .categories__item--topcategory + .categories__item--topcategory {\n    margin-top: 1rem; }\n\n.categories__item--subcategory {\n  display: flex;\n  align-items: center;\n  margin: 0 1rem 0 2rem;\n  padding: 1rem; }\n  .categories__item--subcategory + .categories__item--subcategory {\n    margin-top: .5rem; }\n\n.categories__item--open {\n  background: var(--grey-extra-light);\n  border: 1px solid var(--grey-light); }\n  .categories__item--open .categories__list--subcategories {\n    display: block; }\n\n.categories__counter {\n  margin-left: auto;\n  color: var(--grey); }\n\n.categories__toggler {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  border: none;\n  padding: 1rem;\n  text-align: left;\n  cursor: pointer; }\n  .categories__toggler::before {\n    content: \"\";\n    display: block;\n    width: 0;\n    height: 0;\n    margin-right: .5rem;\n    border: .5rem solid;\n    border-bottom: 0;\n    border-color: var(--grey-light) transparent;\n    transform: rotate(-90deg);\n    transition: transform .25s; }\n  .categories__item--open .categories__toggler::before {\n    transform: rotate(0deg); }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/products/edit/style.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/products/edit/style.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./icon-trash.svg */ "./src/pages/products/edit/icon-trash.svg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".product-form {\n  margin-bottom: 2rem; }\n\n.product-form__list,\n.product-form__footer {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 1rem; }\n\n.product-form__list {\n  margin: 0;\n  padding: 0;\n  list-style-type: none; }\n\n.product-form__item {\n  grid-column: 1 / span 2; }\n  .product-form__item--full {\n    grid-column: 1 / span 3; }\n  .product-form__item--tiny {\n    grid-column: 1 / span 1; }\n  .product-form__item--follow {\n    grid-column-start: auto; }\n  .product-form__item + .product-form__item {\n    margin-top: 1rem; }\n\n.product-form__link {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0; }\n\n.product-form__input--textarea {\n  min-height: 200px; }\n\n.product-form__images-list {\n  margin: 0;\n  padding: 0;\n  list-style-type: none; }\n\n.product-form__images-item {\n  display: flex;\n  align-items: center;\n  padding: .5rem;\n  background: var(--grey-extra-light);\n  border-radius: var(--radius); }\n  .product-form__images-item + .product-form__images-item {\n    margin-top: .5rem; }\n\n.product-form__image-wrapper {\n  position: relative; }\n\n.product-form__image {\n  display: block;\n  width: 100%;\n  max-width: 80px;\n  min-width: 40px;\n  height: 40px;\n  object-fit: contain;\n  padding: 4px;\n  border: 1px solid var(--grey-light);\n  background: var(--white);\n  border-radius: var(--radius); }\n\n.product-form__preview {\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  padding: .25em;\n  background-origin: content-box;\n  background-color: var(--white);\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  border: 1px solid var(--grey-light);\n  transition: all .25s; }\n\n.product-form__preview:hover {\n  width: 300%;\n  height: 300%;\n  transform: translateX(-35%) translateY(-35%);\n  opacity: 1; }\n\n.product-form__image-source {\n  margin-left: 1rem; }\n\n.product-form__image-remove {\n  width: 3rem;\n  align-self: stretch;\n  margin-left: auto;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") 50% 50% no-repeat;\n  font-size: 0;\n  border: none; }\n\n.product-form__footer {\n  margin-top: 2rem; }\n", ""]);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColumnChart; });
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
    this.apiUrl = "http://localhost:8080" || false;

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SortableTable; });
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

    this.apiUrl = "http://localhost:8080" || false;

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderPage; });
async function renderPage (path, match) {
  const { default: Page } = await __webpack_require__("./src/pages eager recursive ^\\.\\/.*\\/index\\.js$")(`./${path}/index.js`);
  const page = new Page(match);
  const renderedPage = await page.render();

  const contentElem = document.getElementById('content');
  contentElem.innerHTML = '';
  contentElem.append(renderedPage);
}


/***/ }),

/***/ "./src/pages eager recursive ^\\.\\/.*\\/index\\.js$":
/*!**************************************************************!*\
  !*** ./src/pages eager ^\.\/.*\/index\.js$ namespace object ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./categories/index.js": "./src/pages/categories/index.js",
	"./dashboard/index.js": "./src/pages/dashboard/index.js",
	"./error404/index.js": "./src/pages/error404/index.js",
	"./products/edit/index.js": "./src/pages/products/edit/index.js",
	"./products/index.js": "./src/pages/products/index.js"
};


function webpackAsyncContext(req) {
	return webpackAsyncContextResolve(req).then(__webpack_require__);
}
function webpackAsyncContextResolve(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}
		return map[req];
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.resolve = webpackAsyncContextResolve;
webpackAsyncContext.id = "./src/pages eager recursive ^\\.\\/.*\\/index\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/pages/categories/index.js":
/*!***************************************!*\
  !*** ./src/pages/categories/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/index.js */ "./src/helpers/index.js");
/* harmony import */ var _components_PageMessage_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/PageMessage/index.js */ "./src/components/PageMessage/index.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./src/pages/categories/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);





const cls = {
  elem: 'categories',
  list: 'categories__list',
  listTop: 'categories__list--topcategories',
  listSubcats: 'categories__list--subcategories',
  item: 'categories__item',
  itemTop: 'categories__item--topcategory',
  itemSub: 'categories__item--subcategory',
  itemOpen: 'categories__item--open',
  toggler: 'categories__toggler',
  counter: 'categories__counter'
};

/* harmony default export */ __webpack_exports__["default"] = (class {
  constructor () {
    this.apiUrl = "http://localhost:8080" || false;
    this.fetchUrl = `${this.apiUrl}/api/rest/categories?_sort=weight&_refs=subcategory`;

    this.listClick = this.listClick.bind(this);
  }

  async render () {
    const { categories, message } = await this.loadData();
    const header = `<header class="page-content__header">
        <h1 class="page-content__title">Dashboard/Categories</h1>
      </header>`;

    if (message) {
      return Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(`<div class="page-content">
        ${header}

        ${message.elem.outerHTML}
      </div>
      `);
    }

    const list = this.createList(categories);
    this.elem = Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(`<div class="page-content">
      ${header}

      <section class="page-section categories">
        <h2 class="page-section__title">Categories</h2>

        ${list}
      </section>
    </div>`);

    this.addEvents();

    return this.elem;
  }

  async loadData () {
    // TODO: индикатор загрузки
    try {
      const categories = await Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_0__["fetchJson"])(this.fetchUrl);

      return { categories };
    } catch (error) {
      // Show error message to user
      const message = new _components_PageMessage_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ error });

      return { message };
    }
  }

  createList (items, isSubcat = false) {
    let itemsStr = '';
    let listClass = cls.listTop;
    let itemClass = cls.item;
    let isDraggableAttr = '';

    if (isSubcat) {
      listClass = cls.listSubcats;
      itemClass += ` ${cls.itemSub}`;
      isDraggableAttr = 'is="draggable-list"';
    } else {
      itemClass += ` ${cls.itemTop}`;
    }

    if (items.length === 0) {
      return '';
    }

    for (const item of items) {
      let subCatsList = '';
      let title = item.title;
      const subCats = item.subcategories;
      let counter = '';

      if (isSubcat) {
        const counterText = this.getPlural(item.count, ['product', 'products']);
        counter = `<span class="${cls.counter}">${counterText}</span>`;
      }

      // console.log(item)

      if (subCats) {
        title = ` <button class="${cls.toggler}">${item.title}</button>`;
        subCatsList = this.createList(subCats, true);
      }

      itemsStr += `<li class="${itemClass}">
        ${title}
        ${counter}
        ${subCatsList}
      </li>`;
    }

    return `<ul
      class="${cls.list} ${listClass}" ${isDraggableAttr}
      >
      ${itemsStr}
    </ul>`;
  }

  addEvents () {
    const list = this.elem.querySelector(`.${cls.listTop}`);
    list.addEventListener('click', this.listClick);
  }

  listClick () {
    const control = event.target.closest(`.${cls.toggler}`);
    if (!control) {
      return;
    }

    const itemTop = event.target.closest(`.${cls.itemTop}`);
    itemTop.classList.toggle(cls.itemOpen);
  }

  getPlural (num, variants) {
    let variant = variants[0];
    if (num !== 1) {
      variant = variants[1];
    }

    return `${num} ${variant}`;
  }
});


/***/ }),

/***/ "./src/pages/categories/styles.scss":
/*!******************************************!*\
  !*** ./src/pages/categories/styles.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/categories/styles.scss");

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

/***/ "./src/pages/dashboard/index.js":
/*!**************************************!*\
  !*** ./src/pages/dashboard/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/index.js */ "./src/helpers/index.js");


const from = new Date();
from.setMonth(from.getMonth() - 1);
const to = new Date();

const dates = {
  from: from.toISOString(),
  to: to.toISOString()
};

/* harmony default export */ __webpack_exports__["default"] = (class {
  async render () {
    return Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(`<div class="page-content">
      <header class="page-content__header">
        <h1 class="page-content__title">Dashboard</h1>

        <range-picker
          data-from="${dates.from}"
          data-to="${dates.to}"
        ></range-picker>
      </header>

        <section class="page-section page-section--column-charts">
          <column-chart
            data-type="orders"
            data-from="${dates.from}"
            data-to="${dates.to}"
          ></column-chart>

          <column-chart
            data-type="sales"
            data-is-money="true"
            data-from="${dates.from}"
            data-to="${dates.to}"
          ></column-chart>

          <column-chart
            data-type="customers"
            data-from="${dates.from}"
            data-to="${dates.to}"
          ></column-chart>
        </section>

        <section class="page-section">
          <h2 class="page-section__title">Bestsellers</h2>

        <sortable-table
          data-url="/api/dashboard/bestsellers?_embed=subcategory.category",
          data-is-dynamic="0"
          data-fields-list="['images', 'title', 'subcategory', 'quantity', 'price', 'status']"
          data-order-field='title',
          data-order-direction="1"
          data-from="${dates.from}"
          data-to="${dates.to}"
          ></sortable-table>
        </section>
      </div>`);
  }
});


/***/ }),

/***/ "./src/pages/error404/index.js":
/*!*************************************!*\
  !*** ./src/pages/error404/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/index.js */ "./src/helpers/index.js");


/* harmony default export */ __webpack_exports__["default"] = (class {
  async render () {
    return Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(`<div class="404">
        <h1>Page not found</h1>
        <p>No such page</p>
      </div>`);
  }
});


/***/ }),

/***/ "./src/pages/products/edit/classes.js":
/*!********************************************!*\
  !*** ./src/pages/products/edit/classes.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  form: 'product-form',
  list: 'product-form__list',
  item: 'product-form__item',
  itemTiny: 'product-form__item--tiny',
  itemFollow: 'product-form__item--follow',
  itemFull: 'product-form__item--full',
  label: 'product-form__label',
  input: 'product-form__input',
  inputText: 'product-form__input--text',
  inputNumber: 'product-form__input--number',
  inputSelect: 'product-form__input--select',
  inputTextarea: 'product-form__input--textarea',
  imgsList: 'product-form__images-list',
  imgsItem: 'product-form__images-item',
  img: 'product-form__image',
  imgWrapper: 'product-form__image-wrapper',
  imgSource: 'product-form__image-source',
  imgRemove: 'product-form__image-remove',
  preview: 'product-form__preview',
  footer: 'product-form__footer',
  submit: 'product-form__submit'
});


/***/ }),

/***/ "./src/pages/products/edit/fields.js":
/*!*******************************************!*\
  !*** ./src/pages/products/edit/fields.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates.js */ "./src/pages/products/edit/templates.js");
/* harmony import */ var _statusText_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statusText.js */ "./src/pages/products/edit/statusText.js");
/* harmony import */ var _helpers_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/index.js */ "./src/helpers/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./src/pages/products/edit/helpers.js");





// Rendering methods for product inputs
/* harmony default export */ __webpack_exports__["default"] = ({
  images: {
    render ({ images }) {
      if (!images) {
        return '';
      }

      return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getImgsListMarkup"])(images);
    },
    compare: null
  },
  title: {
    render ({ title }) {
      const data = {
        id: 'title',
        fieldName: 'Name',
        value: title
      };
      return Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_2__["fillTemplate"])({
        tmpl: _templates_js__WEBPACK_IMPORTED_MODULE_0__["inputText"],
        data
      });
    }
  },
  description: {
    render ({ description }) {
      const data = {
        id: 'description',
        fieldName: 'Description',
        value: description
      };

      return Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_2__["fillTemplate"])({
        tmpl: _templates_js__WEBPACK_IMPORTED_MODULE_0__["inputTextarea"],
        data
      });
    }
  },
  subcategory: {
    render ({ categories, subcategory }) {
      const data = {
        id: 'subcategory',
        fieldName: 'Category',
        options: Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getOptions"])(Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["categoriesToFlatList"])(categories), subcategory)
      };

      return Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_2__["fillTemplate"])({
        tmpl: _templates_js__WEBPACK_IMPORTED_MODULE_0__["inputSelect"],
        data
      });
    }
  },
  quantity: {
    render ({ quantity }) {
      const data = {
        id: 'quantity',
        fieldName: 'Quantity',
        value: quantity
      };
      return Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_2__["fillTemplate"])({
        tmpl: _templates_js__WEBPACK_IMPORTED_MODULE_0__["inputNumber"],
        data
      });
    }
  },
  price: {
    render ({ price }) {
      const data = {
        id: 'price',
        fieldName: 'Price',
        value: price
      };
      return Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_2__["fillTemplate"])({
        tmpl: _templates_js__WEBPACK_IMPORTED_MODULE_0__["inputNumber"],
        data
      });
    }
  },
  discount: {
    render ({ discount }) {
      const data = {
        id: 'discount',
        fieldName: 'Discount',
        value: discount
      };
      return Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_2__["fillTemplate"])({
        tmpl: _templates_js__WEBPACK_IMPORTED_MODULE_0__["inputNumber"],
        data
      });
    }
  },
  status: {
    render ({ status }) {
      const data = {
        id: 'status',
        fieldName: 'Status',
        value: status,
        options: Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getOptions"])(Object.values(_statusText_js__WEBPACK_IMPORTED_MODULE_1__["default"]), status)
      };

      return Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_2__["fillTemplate"])({
        tmpl: _templates_js__WEBPACK_IMPORTED_MODULE_0__["inputSelect"],
        data
      });
    }
  }
});


/***/ }),

/***/ "./src/pages/products/edit/fieldsOrder.js":
/*!************************************************!*\
  !*** ./src/pages/products/edit/fieldsOrder.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes.js */ "./src/pages/products/edit/classes.js");


/* harmony default export */ __webpack_exports__["default"] = ([
  {
    name: 'title'
  },
  {
    name: 'description',
    mods: [_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].itemFull]
  },
  {
    name: 'images',
    mods: [_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].itemFull]
  },
  {
    name: 'subcategory'
  },
  {
    name: 'price',
    mods: [_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].itemTiny]
  },
  {
    name: 'discount',
    mods: [_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].itemTiny, _classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].itemFollow]
  },
  {
    name: 'quantity',
    mods: [_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].itemTiny]
  },
  {
    name: 'status',
    mods: [_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].itemTiny]
  }
]);


/***/ }),

/***/ "./src/pages/products/edit/helpers.js":
/*!********************************************!*\
  !*** ./src/pages/products/edit/helpers.js ***!
  \********************************************/
/*! exports provided: categoriesToFlatList, getOptions, getImgsListMarkup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoriesToFlatList", function() { return categoriesToFlatList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptions", function() { return getOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImgsListMarkup", function() { return getImgsListMarkup; });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes.js */ "./src/pages/products/edit/classes.js");


function categoriesToFlatList (categories) {
  const flatList = [];

  for (const category of categories) {
    for (const subcategory of category.subcategories) {
      flatList.push({
        value: subcategory.id,
        text: `${category.title} > ${subcategory.title}`
      });
    }
  }

  return flatList;
}

function getOptions (list, selected) {
  return list
    .map((item, index) => {
      const value = item.value || index;
      const text = item.text || item;
      const isSelected = value === selected ? 'selected' : '';

      return `<option value="${value}" ${isSelected}>${text}</option>`;
    })
    .join('');
}

function getImgsListMarkup (images) {
  const imagesItems = images
    .map(item => {
      return `<li class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].imgsItem}">
        <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].imgWrapper}">
          <img src="${item.url}" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].img}">
          <span style="background-image: url(${item.url})" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].preview}"><span>
        </div>
        <span class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].imgSource}">${item.source}</span>
        <button type="button" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].imgRemove}">Remove</button>
      </li>`;
    });

  return ` + upload
    <ul class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].imgsList}" is="draggable-list">${imagesItems.join(' ')}</ul>`;
}


/***/ }),

/***/ "./src/pages/products/edit/icon-trash.svg":
/*!************************************************!*\
  !*** ./src/pages/products/edit/icon-trash.svg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "92679154afde0815c6222c7c0401f442.svg");

/***/ }),

/***/ "./src/pages/products/edit/index.js":
/*!******************************************!*\
  !*** ./src/pages/products/edit/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/index.js */ "./src/helpers/index.js");
/* harmony import */ var _components_PageMessage_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/PageMessage/index.js */ "./src/components/PageMessage/index.js");
/* harmony import */ var _fields_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fields.js */ "./src/pages/products/edit/fields.js");
/* harmony import */ var _fieldsOrder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fieldsOrder.js */ "./src/pages/products/edit/fieldsOrder.js");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes.js */ "./src/pages/products/edit/classes.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templates */ "./src/pages/products/edit/templates.js");
/* harmony import */ var _icon_trash_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon-trash.svg */ "./src/pages/products/edit/icon-trash.svg");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ "./src/pages/products/edit/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_7__);










/* harmony default export */ __webpack_exports__["default"] = (class {
  constructor (match) {
    this.id = match[0].replace('products/', '');

    if (!match[0]) {
      this.id = '3d-ochki-optoma-zd302';
    }

    this.apiUrl = "http://localhost:8080" || false;
    this.fetchProductUrl = this.apiUrl + `/api/rest/products?id=${this.id}`;
    this.fetchCategoriesUrl = this.apiUrl + '/api/rest/categories?_sort=weight&_refs=subcategory';
  }

  async render () {
    const { productData, categories, errorMessage } = await this.loadData();

    if (errorMessage) {
      return Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(`<div class="page-content">
        ${_templates__WEBPACK_IMPORTED_MODULE_5__["header"]}

        ${errorMessage.outerHTML}
      </div>
      `);
    }

    const product = productData[0];
    const inputs = [];

    for (const { name, mods } of _fieldsOrder_js__WEBPACK_IMPORTED_MODULE_3__["default"]) {
      if (_fields_js__WEBPACK_IMPORTED_MODULE_2__["default"][name]) {
        let params = product;

        if (name === 'subcategory') {
          params = {
            ...params,
            categories
          };
        }

        const input = _fields_js__WEBPACK_IMPORTED_MODULE_2__["default"][name].render(params);
        let classes = [_classes_js__WEBPACK_IMPORTED_MODULE_4__["default"].item];

        if (mods) {
          classes = classes.concat(mods);
        }

        inputs.push(`<li class="${classes.join(' ')}">${input}</li>`);
      }
    }

    return Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(`<div class="page-content">
      ${_templates__WEBPACK_IMPORTED_MODULE_5__["header"]}

      <form action="" class="${_classes_js__WEBPACK_IMPORTED_MODULE_4__["default"].form}}">
        <ul class="${_classes_js__WEBPACK_IMPORTED_MODULE_4__["default"].list}">
          ${inputs.join('\n')}
        </ul>

        <footer class="${_classes_js__WEBPACK_IMPORTED_MODULE_4__["default"].footer}">
          <button class="${_classes_js__WEBPACK_IMPORTED_MODULE_4__["default"].submit}">Save</button>
        </footer>
      </form>
    </div>`);
  }

  async loadData () {
    // TODO: add loading indicator
    try {
      const productData = await Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_0__["fetchJson"])(this.fetchProductUrl);
      const categories = await Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_0__["fetchJson"])(this.fetchCategoriesUrl);

      return { productData, categories };
    } catch (error) {
      const message = new _components_PageMessage_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ error });
      return { errorMessage: message.elem };
    }
  }
});


/***/ }),

/***/ "./src/pages/products/edit/statusText.js":
/*!***********************************************!*\
  !*** ./src/pages/products/edit/statusText.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  0: 'Disabled',
  1: 'Enabled'
});


/***/ }),

/***/ "./src/pages/products/edit/style.scss":
/*!********************************************!*\
  !*** ./src/pages/products/edit/style.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/products/edit/style.scss");

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

/***/ "./src/pages/products/edit/templates.js":
/*!**********************************************!*\
  !*** ./src/pages/products/edit/templates.js ***!
  \**********************************************/
/*! exports provided: header, inputText, inputNumber, inputTextarea, inputSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "header", function() { return header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputText", function() { return inputText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputNumber", function() { return inputNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputTextarea", function() { return inputTextarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputSelect", function() { return inputSelect; });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes.js */ "./src/pages/products/edit/classes.js");


const header = `<header class="page-content__header">
  <h1 class="page-content__title">
  <a href="/products">Products</a>
  /Edit Product</h1>
</header>`;

const inputText = `<label class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].label}">
  {fieldName}

  <input
    class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].input} ${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].inputText}"
    type="text"
    name="{id}"
    value="{value}"/>
</label>`;

const inputNumber = `<label class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].label}">
  {fieldName}

  <input
    class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].input} ${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].inputNumber}"
    type="number"
    name="{id}"
    value="{value}"/>
</label>`;

const inputTextarea = `<label class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].label}">
  {fieldName}

  <textarea
    class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].input} ${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].inputTextarea}"
    name="{id}">{value}</textarea>
</label>`;

const inputSelect = `<label class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].label}">
  {fieldName}

  <select
    class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].input} ${_classes_js__WEBPACK_IMPORTED_MODULE_0__["default"].inputSelect}"
    name="{id}">
    {options}
  </select>
</label>`;


/***/ }),

/***/ "./src/pages/products/index.js":
/*!*************************************!*\
  !*** ./src/pages/products/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/index.js */ "./src/helpers/index.js");


/* harmony default export */ __webpack_exports__["default"] = (class {
  async render () {
    return Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(`<div class="page-content">
      <header class="page-content__header">
        <h1 class="page-content__title">Dashboard/Products</h1>
      </header>

      <section class="page-section">
        <h2 class="page-section__title">Products</h2>

        <sortable-table
          data-url="/api/rest/products?_embed=subcategory.category",
          data-is-dynamic="1"
          data-fields-list="['images', 'title', 'subcategory', 'quantity', 'price', 'status']"
          data-order-field='title',
          data-order-direction="1"
          ></sortable-table>
      </section>
    </div>`);
  }
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3NzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbHVtbkNoYXJ0L3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RyYWdnYWJsZUxpc3Qvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05vdGlmaWNhdGlvbi9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QYWdlTWVzc2FnZS9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SYW5nZVBpY2tlci9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Tb3J0YWJsZVRhYmxlL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Rvb2x0aXBzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9jYXRlZ29yaWVzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9wcm9kdWN0cy9lZGl0L3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2Nzcy9zdHlsZXMuc2Nzcz9mM2M4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbHVtbkNoYXJ0L2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29sdW1uQ2hhcnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29sdW1uQ2hhcnQvc3R5bGVzLnNjc3M/YTIzMCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db2x1bW5DaGFydC90ZW1wbGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRHJhZ2dhYmxlTGlzdC9ncmFiLWljb24uc3ZnIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RyYWdnYWJsZUxpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRHJhZ2dhYmxlTGlzdC9zdHlsZXMuc2Nzcz85N2M3Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvc3R5bGVzLnNjc3M/ZTJjMyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ob3RpZmljYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uL3N0eWxlcy5zY3NzP2RmOTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGFnZU1lc3NhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGFnZU1lc3NhZ2Uvc3R5bGVzLnNjc3M/MTEzNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SYW5nZVBpY2tlci9hcnJvdy1pY29uLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SYW5nZVBpY2tlci9jYWxlbmRhci1pY29uLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SYW5nZVBpY2tlci9jbGFzc2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JhbmdlUGlja2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JhbmdlUGlja2VyL3N0eWxlcy5zY3NzPzcxNWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmFuZ2VQaWNrZXIvdGVtcGxhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NvcnRhYmxlVGFibGUvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Tb3J0YWJsZVRhYmxlL2RpcmVjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU29ydGFibGVUYWJsZS9maWVsZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU29ydGFibGVUYWJsZS9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NvcnRhYmxlVGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU29ydGFibGVUYWJsZS9zdGF0dXNUZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NvcnRhYmxlVGFibGUvc3R5bGVzLnNjc3M/ZThjNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ub29sdGlwcy9jbGFzc2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Rvb2x0aXBzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Rvb2x0aXBzL3N0eWxlcy5zY3NzPzdjYzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9lc2NhcGVIVE1MLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2ZldGNoSnNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9maWxsVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvZm9ybWF0RGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9mb3JtYXRUb3RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9nZXREYXRlRnJvbVN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9nZXRXZWVrRGF5cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy90aHJvdHRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL1JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL25vdGlmaWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvcmVuZGVyUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMgZWFnZXIgXlxcLlxcLy4qXFwvaW5kZXhcXC5qcyQgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2F0ZWdvcmllcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2F0ZWdvcmllcy9zdHlsZXMuc2Nzcz9jMDA3Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9kYXNoYm9hcmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2Vycm9yNDA0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9wcm9kdWN0cy9lZGl0L2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Byb2R1Y3RzL2VkaXQvZmllbGRzLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9wcm9kdWN0cy9lZGl0L2ZpZWxkc09yZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9wcm9kdWN0cy9lZGl0L2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Byb2R1Y3RzL2VkaXQvaWNvbi10cmFzaC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Byb2R1Y3RzL2VkaXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Byb2R1Y3RzL2VkaXQvc3RhdHVzVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcHJvZHVjdHMvZWRpdC9zdHlsZS5zY3NzP2QzMTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Byb2R1Y3RzL2VkaXQvdGVtcGxhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9wcm9kdWN0cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyxVQUFVLG9CQUFvQix5QkFBeUIsMEJBQTBCLDJCQUEyQixzQkFBc0IsbUJBQW1CLHFCQUFxQixzQkFBc0IscUJBQXFCLDJCQUEyQiwwQkFBMEIsb0JBQW9CLDBCQUEwQixnQ0FBZ0MsNkJBQTZCLGtCQUFrQixrQkFBa0IsRUFBRSxPQUFPLDJCQUEyQixF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RU8scUNBQXFDLG1EQUFHLE9BQU87QUFDdEQsR0FBRzs7QUFFSDtBQUNBLGFBQWEsbURBQUcsT0FBTyxHQUFHLG1EQUFHLGFBQWE7QUFDMUMsV0FBVyxHQUFHO0FBQ2QsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFBQTtBQUF1RDs7QUFFeEM7QUFDZjtBQUNBLFdBQVcsdUVBQWE7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1ibHVlOiAjMTA5Q0YxO1xcbiAgLS1kYXJrLWJsdWU6ICMzMzRENkU7XFxuICAtLWxpZ2h0LWJsdWU6ICNDRkVCRkM7XFxuICAtLW1pZGRsZS1ibHVlOiAjOUZEN0Y5O1xcbiAgLS15ZWxsb3c6ICNGRkI5NDY7XFxuICAtLXJlZDogI0Y3Njg1QjtcXG4gIC0tZ3JlZW46ICMyRUQ0N0E7XFxuICAtLXB1cnBsZTogIzg4NUFGODtcXG4gIC0tYmxhY2s6ICMxOTJBM0U7XFxuICAtLXRhYmxlLWJsYWNrOiAjMzIzQzQ3O1xcbiAgLS10YWJsZS1ncmV5OiAjNzA3NjgzO1xcbiAgLS1ncmV5OiAjOTBBMEI3O1xcbiAgLS1ncmV5LWxpZ2h0OiAjQzJDRkUwO1xcbiAgLS1ncmV5LWV4dHJhLWxpZ2h0OiAjRUZGMUY0O1xcbiAgLS1ncmV5LXNrZWxldG9uOiAjRjVGNkY4O1xcbiAgLS13aGl0ZTogI0ZGRjtcXG4gIC0tcmFkaXVzOiA0cHg7IH1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG5IVE1MIHtcXG4gIGZvbnQtc2l6ZTogMTZweDsgfVxcblxcbkJPRFkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZDogI0ZGRjtcXG4gIGZvbnQ6IDFyZW0vMS40IFRyZWJ1Y2hldCBNUywgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMDAwOyB9XFxuXFxuSDEsXFxuSDIsXFxuSDMsXFxuSDQge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IC41ZW07XFxuICBmb250LXdlaWdodDogbm9ybWFsOyB9XFxuXFxuSDEge1xcbiAgZm9udC1zaXplOiAyLjc1cmVtOyB9XFxuXFxuQSxcXG5BOnZpc2l0ZWQsXFxuQTpob3ZlciB7XFxuICBjb2xvcjogaW5oZXJpdDsgfVxcblxcbkE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuXFxuQlVUVE9OLFxcbklOUFVULFxcblRFWFRBUkVBLFxcblNFTEVDVCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IC41cmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XFxuICBmb250OiBpbmhlcml0OyB9XFxuXFxuSU5QVVQsXFxuVEVYVEFSRUEsXFxuU0VMRUNUIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleS1saWdodCk7IH1cXG5cXG4ucGFnZS1sYXlvdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnNwaW5uZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMnJlbTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgYm94LXNoYWRvdzogMCAwIC41cmVtIGN1cnJlbnRDb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGNvbG9yOiB2YXIoLS1ncmV5LWxpZ2h0KTsgfVxcblxcbltkYXRhLWxvYWRpbmc9XFxcIjFcXFwiXSAuc3Bpbm5lciB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi5zcGlubmVyOjpiZWZvcmUsXFxuLnNwaW5uZXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiBjdXJyZW50Q29sb3IgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBhbmltYXRpb246IHJvdGF0ZSAyLjFzIGxpbmVhciBpbmZpbml0ZTsgfVxcblxcbi5zcGlubmVyOjpiZWZvcmUge1xcbiAgd2lkdGg6IDIuMjVyZW07XFxuICBoZWlnaHQ6IDIuMjVyZW07IH1cXG5cXG4uc3Bpbm5lcjo6YWZ0ZXIge1xcbiAgd2lkdGg6IDEuMjVyZW07XFxuICBoZWlnaHQ6IDEuMjVyZW07XFxuICBhbmltYXRpb24tZHVyYXRpb246IDEuM3M7XFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlOyB9XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbHVtbi1jaGFydCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLXdpZHRoOiAxODBweDtcXG4gIGZsZXgtYmFzaXM6IGNhbGMoKDEwMCUgLSAycmVtKSAvIDMpO1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xcbiAgbWF4LWhlaWdodDogMzAwcHg7XFxuICBtYXJnaW46IDAgMCAuNXJlbSAwO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LWxpZ2h0KTtcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdmFyKC0tZ3JleS1saWdodCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG5cXG4uY29sdW1uLWNoYXJ0ICsgLmNvbHVtbi1jaGFydCB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTsgfVxcblxcbi5jb2x1bW4tY2hhcnRfX2NvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1heC13aWR0aDogMTAwJTsgfVxcblxcbi5jb2x1bW4tY2hhcnRfX3RpdGxlIHtcXG4gIG1hcmdpbjogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgY29sb3I6IHZhcigtLWdyZXkpOyB9XFxuXFxuLmNvbHVtbi1jaGFydF9fdG90YWwge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS42ZW07XFxuICBsaW5lLWhlaWdodDogMTsgfVxcblxcbi5jb2x1bW4tY2hhcnRfX2xpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLXRvcDogLjVyZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbi5jb2x1bW4tY2hhcnRfX2l0ZW0ge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgbWFyZ2luLWxlZnQ6IDFweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyZXktbGlnaHQpO1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLmNvbHVtbi1jaGFydF9faXRlbTpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogMDsgfVxcblxcbi5jb2x1bW4tY2hhcnRfX3Rvb2x0aXAtZGF0ZSB7XFxuICBmb250LXNpemU6IC45ZW07IH1cXG5cXG4uY29sdW1uLWNoYXJ0X190b29sdGlwLXF1YW50aXR5IHtcXG4gIG1hcmdpbi10b3A6IC4yNWVtO1xcbiAgZm9udC1zaXplOiAxLjFlbTsgfVxcblxcbi5jb2x1bW4tY2hhcnQtLWN1c3RvbWVycyB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogZ29sZDsgfVxcblxcbi5jb2x1bW4tY2hhcnQtLWN1c3RvbWVycyAuY29sdW1uLWNoYXJ0X19pdGVtIHtcXG4gIGJhY2tncm91bmQ6IGdvbGQ7IH1cXG5cXG4uY29sdW1uLWNoYXJ0LS1vcmRlcnMge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHR1cnF1b2lzZTsgfVxcblxcbi5jb2x1bW4tY2hhcnQtLW9yZGVycyAuY29sdW1uLWNoYXJ0X19pdGVtIHtcXG4gIGJhY2tncm91bmQ6IHR1cnF1b2lzZTsgfVxcblxcbi5jb2x1bW4tY2hhcnQtLXNhbGVzIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB5ZWxsb3dncmVlbjsgfVxcblxcbi5jb2x1bW4tY2hhcnQtLXNhbGVzIC5jb2x1bW4tY2hhcnRfX2l0ZW0ge1xcbiAgYmFja2dyb3VuZDogeWVsbG93Z3JlZW47IH1cXG5cXG4uY29sdW1uLWNoYXJ0X19lcnJvciB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bzsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4vZ3JhYi1pY29uLnN2Z1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmRyYWdnYWJsZS1saXN0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5kcmFnZ2FibGUtbGlzdF9faXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogZ3JhYjsgfVxcbiAgLmRyYWdnYWJsZS1saXN0X19pdGVtOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMThweDtcXG4gICAgd2lkdGg6IDExcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSA1MCUgNTAlIG5vLXJlcGVhdDtcXG4gICAgb3BhY2l0eTogLjU7IH1cXG5cXG4uZHJhZ2dhYmxlLWxpc3QgLmRyYWdnYWJsZS1saXN0X19pdGVtLS1wbGFjZWhvbGRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5LWxpZ2h0KTsgfVxcbiAgLmRyYWdnYWJsZS1saXN0IC5kcmFnZ2FibGUtbGlzdF9faXRlbS0tcGxhY2Vob2xkZXI6OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7IH1cXG5cXG4uZHJhZ2dhYmxlLWxpc3RfX2l0ZW0tLWRyYWdnZWQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgYm94LXNoYWRvdzogMCAwIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjM1KTtcXG4gIGN1cnNvcjogZ3JhYmJpbmc7IH1cXG4gIC5kcmFnZ2FibGUtbGlzdF9faXRlbS0tZHJhZ2dlZDo6YmVmb3JlIHtcXG4gICAgb3BhY2l0eTogMTsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnBhZ2Uge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4ucGFnZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7IH1cXG5cXG4ucGFnZS1tYWluLFxcbi5wYWdlLWFzaWRlLFxcbi5wYWdlLWZvb3RlciB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbi5wYWdlLW1haW4ge1xcbiAgZmxleC1ncm93OiAxOyB9XFxuXFxuLnBhZ2UtYXNpZGUge1xcbiAgbWluLXdpZHRoOiAyNTBweDtcXG4gIGJhY2tncm91bmQ6ICNFRUU7IH1cXG5cXG4ucGFnZS1mb290ZXIge1xcbiAgZmxleC1iYXNpczogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG4gIC5wYWdlLWZvb3RlciBBICsgQSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtOyB9XFxuXFxuLnBhZ2UtY29udGVudF9faGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG5cXG4ucGFnZS1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7IH1cXG4gIC5wYWdlLXNlY3Rpb24gKyAucGFnZS1zZWN0aW9uIHtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTsgfVxcblxcbi5wYWdlLXNlY3Rpb25fX3RpdGxlIHtcXG4gIGZsZXgtYmFzaXM6IDEwMCU7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ub3RpZmljYXRpb25zIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIHJpZ2h0OiAxcmVtO1xcbiAgYm90dG9tOiAxcmVtO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgbWF4LWhlaWdodDogNTB2aDsgfVxcblxcbi8qIE5vdGlmaWNhdGlvbiAqL1xcbi5ub3RpZmljYXRpb24ge1xcbiAgbWFyZ2luLXRvcDogLjVyZW07XFxuICBwYWRkaW5nOiAuNzVyZW0gMXJlbTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFyZW0pO1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gLjVzIGZvcndhcmRzOyB9XFxuICAubm90aWZpY2F0aW9uLS13YXJuaW5nIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0teWVsbG93KTsgfVxcbiAgLm5vdGlmaWNhdGlvbi0tZXJyb3Ige1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQpOyB9XFxuXFxuLm5vdGlmaWNhdGlvbltkYXRhLXN0YXRlPVxcXCJoaWRkZW5cXFwiXSB7XFxuICBhbmltYXRpb246IGZhZGVPdXQgLjVzOyB9XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gfVxcblxcbkBrZXlmcmFtZXMgZmFkZU91dCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xcmVtOyB9IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wYWdlLW1lc3NhZ2Uge1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z29sZGVucm9keWVsbG93O1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTsgfVxcblxcbi5wYWdlLW1lc3NhZ2UtLWVycm9yIHtcXG4gIGJhY2tncm91bmQ6IG1pc3R5cm9zZTsgfVxcblxcbi5wYWdlLW1lc3NhZ2VfX2Vycm9yIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZDogI0ZGRjtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7IH1cXG5cXG4ucGFnZS1tZXNzYWdlX19lcnJvci10ZXh0IHtcXG4gIGZvbnQtZmFtaWx5OiBDb3VyaWVyIE5ldywgQ291cmllciwgbW9ub3NwYWNlOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi9jYWxlbmRhci1pY29uLnN2Z1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IHJlcXVpcmUoXCIuL2Fycm93LWljb24uc3ZnXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogUmFuZ2VwaWNrZXIgKi9cXG4ucmFuZ2VwaWNrZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTE7IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX2lucHV0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgcGFkZGluZzogMTJweCAxNnB4IDEycHggNDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXktbGlnaHQpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKSB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIDE2cHggY2VudGVyIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMThweCAxOHB4OyB9XFxuXFxuLnJhbmdlcGlja2VyX29wZW4gLnJhbmdlcGlja2VyX19pbnB1dCxcXG4ucmFuZ2VwaWNrZXJfX2lucHV0OmZvY3VzLFxcbi5yYW5nZXBpY2tlcl9faW5wdXQ6YWN0aXZlIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX2lucHV0ID4gU1BBTiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIG1hcmdpbjogMCA0cHg7IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX2lucHV0ID4gU1BBTjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1yaWdodDogMDsgfVxcblxcbi5yYW5nZXBpY2tlcl9fc2VsZWN0b3Ige1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIHBhZGRpbmc6IDMycHggMjZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDI5cHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4OiAxIDAgYXV0bztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogY2FsYygxMDAlICsgMTZweCk7XFxuICByaWdodDogMDtcXG4gIHotaW5kZXg6IDE7IH1cXG5cXG4ucmFuZ2VwaWNrZXItLW9wZW4gLnJhbmdlcGlja2VyX19zZWxlY3RvciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgfVxcblxcbi5yYW5nZXBpY2tlcl9fc2VsZWN0b3ItYXJyb3cge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDEwMCU7XFxuICByaWdodDogNjBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX3NlbGVjdG9yLWFycm93OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDQ1ZGVnKTtcXG4gIHRvcDogMTAwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA5KTsgfVxcblxcbi5yYW5nZXBpY2tlcl9fY2FsZW5kYXJzIHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX2NhbGVuZGFyIHtcXG4gIHdpZHRoOiAyNTJweDsgfVxcblxcbi5yYW5nZXBpY2tlcl9fY2FsZW5kYXI6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogMjZweDsgfVxcblxcbi5yYW5nZXBpY2tlcl9fbW9udGgtaW5kaWNhdG9yIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUtdGV4dCk7IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX3NlbGVjdG9yLWNvbnRyb2wge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzMnB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogLjNzIGFsbDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgbGVmdCBjZW50ZXIgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiA5cHggMTNweDtcXG4gIGJvcmRlcjogMDsgfVxcblxcbi5yYW5nZXBpY2tlcl9fc2VsZWN0b3ItY29udHJvbDpob3ZlciB7XFxuICBvcGFjaXR5OiAuODsgfVxcblxcbi5yYW5nZXBpY2tlcl9fc2VsZWN0b3ItY29udHJvbC0tbGVmdCB7XFxuICBsZWZ0OiAyNnB4OyB9XFxuXFxuLnJhbmdlcGlja2VyX19zZWxlY3Rvci1jb250cm9sLS1yaWdodCB7XFxuICByaWdodDogMjZweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX2RheS1vZi13ZWVrLFxcbi5yYW5nZXBpY2tlcl9fZGF0ZS1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpOyB9XFxuXFxuLnJhbmdlcGlja2VyX19kYXktb2Ytd2VlayB7XFxuICBtYXJnaW4tdG9wOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLyogRGF0ZXMgKi9cXG4ucmFuZ2VwaWNrZXJfX2RhdGUtZ3JpZCB7XFxuICBtYXJnaW4tdG9wOiAxNnB4OyB9XFxuXFxuLnJhbmdlcGlja2VyX19jZWxsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogMDtcXG4gIHdpZHRoOiAzNnB4O1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlLXRleHQpO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5yYW5nZXBpY2tlcl9fY2VsbDphY3RpdmUsXFxuLnJhbmdlcGlja2VyX19jZWxsLnJhbmdlcGlja2VyX19zZWxlY3RlZCxcXG4ucmFuZ2VwaWNrZXJfX2NlbGwucmFuZ2VwaWNrZXJfX3NlbGVjdGVkLWZyb20sXFxuLnJhbmdlcGlja2VyX19jZWxsLnJhbmdlcGlja2VyX19zZWxlY3RlZC10byB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX2NlbGw6aG92ZXIsXFxuLnJhbmdlcGlja2VyX19jZWxsOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUtdGV4dCk7XFxuICB0cmFuc2l0aW9uOiAuMnMgYWxsOyB9XFxuXFxuLnJhbmdlcGlja2VyX19jZWxsLnJhbmdlcGlja2VyX19zZWxlY3RlZDpob3ZlcixcXG4ucmFuZ2VwaWNrZXJfX2NlbGwucmFuZ2VwaWNrZXJfX3NlbGVjdGVkLWZyb206aG92ZXIsXFxuLnJhbmdlcGlja2VyX19jZWxsLnJhbmdlcGlja2VyX19zZWxlY3RlZC10bzpob3ZlcixcXG4ucmFuZ2VwaWNrZXJfX2NlbGwucmFuZ2VwaWNrZXJfX3NlbGVjdGVkOmZvY3VzLFxcbi5yYW5nZXBpY2tlcl9fY2VsbC5yYW5nZXBpY2tlcl9fc2VsZWN0ZWQtZnJvbTpmb2N1cyxcXG4ucmFuZ2VwaWNrZXJfX2NlbGwucmFuZ2VwaWNrZXJfX3NlbGVjdGVkLXRvOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pZGRsZS1ibHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUtdGV4dCk7IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX2NlbGwucmFuZ2VwaWNrZXJfX3NlbGVjdGVkLWJldHdlZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zb3J0YWJsZS10YWJsZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTsgfVxcblxcbi5zb3J0YWJsZS10YWJsZV9fdGFibGUge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uc29ydGFibGUtdGFibGVfX3JvdyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZDogYXV0by1mbG93IC8gMTIlIDM4JSAyMCUgMTAlIDEwJSAxMCU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG5cXG4uc29ydGFibGUtdGFibGVfX2NlbGwge1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgY29sb3I6IHZhcigtLXRhYmxlLWJsYWNrKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWdyZXktbGlnaHQpOyB9XFxuXFxuLnNvcnRhYmxlLXRhYmxlX19jZWxsOmZpcnN0LWNoaWxkIHtcXG4gIHBhZGRpbmctbGVmdDogMzJweDsgfVxcblxcbi5zb3J0YWJsZS10YWJsZV9fY2VsbDpsYXN0LWNoaWxkIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDMycHg7IH1cXG5cXG4uc29ydGFibGUtdGFibGVfX2NlbGwtLWVycm9yIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiA3OyB9XFxuXFxuLnNvcnRhYmxlLXRhYmxlX190aGVhZCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB6LWluZGV4OiAzO1xcbiAgdG9wOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpOyB9XFxuXFxuLnNvcnRhYmxlLXRhYmxlX19oZWFkZXIgLnNvcnRhYmxlLXRhYmxlX19jZWxsIHtcXG4gIG1pbi13aWR0aDogMTIwcHg7XFxuICBjb2xvcjogdmFyKC0tZ3JleS1saWdodCk7IH1cXG5cXG4uc29ydGFibGUtdGFibGVfX2hlYWRlciAuc29ydGFibGUtdGFibGVfX2NlbGxbZGF0YS1zb3J0YWJsZV0ge1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLnNvcnRhYmxlLXRhYmxlX19jZWxsLS1xdWFudGl0eSxcXG4uc29ydGFibGUtdGFibGVfX2NlbGwtLXByaWNlIHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IH1cXG5cXG4uc29ydGFibGUtdGFibGVfX2NlbGwtLWRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IC41OyB9XFxuXFxuLnNvcnRhYmxlLXRhYmxlX19jZWxsW2RhdGEtc29ydC1kaXJlY3Rpb25dOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICBtYXJnaW4tdG9wOiAuMjVlbTtcXG4gIG1hcmdpbi1sZWZ0OiAuMjVlbTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiBjdXJyZW50Q29sb3IgdHJhbnNwYXJlbnQ7IH1cXG5cXG4uc29ydGFibGUtdGFibGVfX2NlbGxbZGF0YS1zb3J0LWRpcmVjdGlvbj1cXFwiYXNjXFxcIl06OmFmdGVyIHtcXG4gIGJvcmRlci10b3A6IG5vbmU7IH1cXG5cXG4uc29ydGFibGUtdGFibGVfX2NlbGxbZGF0YS1zb3J0LWRpcmVjdGlvbj1cXFwiZGVzY1xcXCJdOjphZnRlciB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyB9XFxuXFxuLnNvcnRhYmxlLXRhYmxlX19jZWxsLS1zb3J0ZXI6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHZhcigtLWdyZXkpOyB9XFxuXFxuLnNvcnRhYmxlLXRhYmxlX19pbWFnZS13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5zb3J0YWJsZS10YWJsZV9faW1hZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1pbi13aWR0aDogNDBweDtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICBwYWRkaW5nOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LWxpZ2h0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDsgfVxcblxcbi5zb3J0YWJsZS10YWJsZV9fcHJldmlldyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAyO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBhZGRpbmc6IC4yNWVtO1xcbiAgYmFja2dyb3VuZC1vcmlnaW46IGNvbnRlbnQtYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LWxpZ2h0KTtcXG4gIHRyYW5zaXRpb246IGFsbCAuMjVzOyB9XFxuXFxuLnNvcnRhYmxlLXRhYmxlX19wcmV2aWV3OmhvdmVyIHtcXG4gIHdpZHRoOiAzMDAlO1xcbiAgaGVpZ2h0OiAzMDAlO1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbi5zb3J0YWJsZS10YWJsZV9fbGluayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7IH1cXG5cXG4uc29ydGFibGUtdGFibGVfX2NhdGVnb3J5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5zb3J0YWJsZS10YWJsZV9fdG9vbHRpcC1jYXRlZ29yeSB7XFxuICBjb2xvcjogdmFyKC0tZ3JleSk7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50b29sdGlwcy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLnRvb2x0aXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMztcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBtYXJnaW46IDFyZW0gMCAwIDFyZW07XFxuICBwYWRkaW5nOiAuNXJlbSAuNzVyZW07XFxuICBiYWNrZ3JvdW5kOiAjRUVFO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBjb2xvcjogIzU1NTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cXG5cXG4udG9vbHRpcFtkYXRhLXZpc2libGU9XFxcIjFcXFwiXSB7XFxuICBvcGFjaXR5OiAxOyB9XFxuXFxuW2RhdGEtdG9vbHRpcC1jb250ZW50XSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7IH1cXG5cXG4udG9vbHRpcHMtY29udGFpbmVyLS1kaW1tZWQgW2RhdGEtdG9vbHRpcC1jb250ZW50XTpub3QoOmhvdmVyKSB7XFxuICBvcGFjaXR5OiAuNDsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNhdGVnb3JpZXNfX2xpc3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLmNhdGVnb3JpZXNfX2xpc3QtLXN1YmNhdGVnb3JpZXMge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1hcmdpbi10b3A6IC41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxcblxcbi5jYXRlZ29yaWVzX19pdGVtIHtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LWxpZ2h0KTsgfVxcblxcbi5jYXRlZ29yaWVzX19pdGVtLS10b3BjYXRlZ29yeSB7XFxuICBtYXJnaW46IDFyZW07IH1cXG4gIC5jYXRlZ29yaWVzX19pdGVtLS10b3BjYXRlZ29yeSArIC5jYXRlZ29yaWVzX19pdGVtLS10b3BjYXRlZ29yeSB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07IH1cXG5cXG4uY2F0ZWdvcmllc19faXRlbS0tc3ViY2F0ZWdvcnkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMXJlbSAwIDJyZW07XFxuICBwYWRkaW5nOiAxcmVtOyB9XFxuICAuY2F0ZWdvcmllc19faXRlbS0tc3ViY2F0ZWdvcnkgKyAuY2F0ZWdvcmllc19faXRlbS0tc3ViY2F0ZWdvcnkge1xcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTsgfVxcblxcbi5jYXRlZ29yaWVzX19pdGVtLS1vcGVuIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyZXktZXh0cmEtbGlnaHQpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleS1saWdodCk7IH1cXG4gIC5jYXRlZ29yaWVzX19pdGVtLS1vcGVuIC5jYXRlZ29yaWVzX19saXN0LS1zdWJjYXRlZ29yaWVzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4uY2F0ZWdvcmllc19fY291bnRlciB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGNvbG9yOiB2YXIoLS1ncmV5KTsgfVxcblxcbi5jYXRlZ29yaWVzX190b2dnbGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLmNhdGVnb3JpZXNfX3RvZ2dsZXI6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcXG4gICAgYm9yZGVyOiAuNXJlbSBzb2xpZDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncmV5LWxpZ2h0KSB0cmFuc3BhcmVudDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4yNXM7IH1cXG4gIC5jYXRlZ29yaWVzX19pdGVtLS1vcGVuIC5jYXRlZ29yaWVzX190b2dnbGVyOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4vaWNvbi10cmFzaC5zdmdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wcm9kdWN0LWZvcm0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTsgfVxcblxcbi5wcm9kdWN0LWZvcm1fX2xpc3QsXFxuLnByb2R1Y3QtZm9ybV9fZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ3JpZC1nYXA6IDFyZW07IH1cXG5cXG4ucHJvZHVjdC1mb3JtX19saXN0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IH1cXG5cXG4ucHJvZHVjdC1mb3JtX19pdGVtIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyOyB9XFxuICAucHJvZHVjdC1mb3JtX19pdGVtLS1mdWxsIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDM7IH1cXG4gIC5wcm9kdWN0LWZvcm1fX2l0ZW0tLXRpbnkge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMTsgfVxcbiAgLnByb2R1Y3QtZm9ybV9faXRlbS0tZm9sbG93IHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IGF1dG87IH1cXG4gIC5wcm9kdWN0LWZvcm1fX2l0ZW0gKyAucHJvZHVjdC1mb3JtX19pdGVtIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTsgfVxcblxcbi5wcm9kdWN0LWZvcm1fX2xpbmsge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwOyB9XFxuXFxuLnByb2R1Y3QtZm9ybV9faW5wdXQtLXRleHRhcmVhIHtcXG4gIG1pbi1oZWlnaHQ6IDIwMHB4OyB9XFxuXFxuLnByb2R1Y3QtZm9ybV9faW1hZ2VzLWxpc3Qge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgfVxcblxcbi5wcm9kdWN0LWZvcm1fX2ltYWdlcy1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogLjVyZW07XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmV5LWV4dHJhLWxpZ2h0KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7IH1cXG4gIC5wcm9kdWN0LWZvcm1fX2ltYWdlcy1pdGVtICsgLnByb2R1Y3QtZm9ybV9faW1hZ2VzLWl0ZW0ge1xcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTsgfVxcblxcbi5wcm9kdWN0LWZvcm1fX2ltYWdlLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLnByb2R1Y3QtZm9ybV9faW1hZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogODBweDtcXG4gIG1pbi13aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICBwYWRkaW5nOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LWxpZ2h0KTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7IH1cXG5cXG4ucHJvZHVjdC1mb3JtX19wcmV2aWV3IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDI7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvcGFjaXR5OiAwO1xcbiAgcGFkZGluZzogLjI1ZW07XFxuICBiYWNrZ3JvdW5kLW9yaWdpbjogY29udGVudC1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXktbGlnaHQpO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4yNXM7IH1cXG5cXG4ucHJvZHVjdC1mb3JtX19wcmV2aWV3OmhvdmVyIHtcXG4gIHdpZHRoOiAzMDAlO1xcbiAgaGVpZ2h0OiAzMDAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zNSUpIHRyYW5zbGF0ZVkoLTM1JSk7XFxuICBvcGFjaXR5OiAxOyB9XFxuXFxuLnByb2R1Y3QtZm9ybV9faW1hZ2Utc291cmNlIHtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtOyB9XFxuXFxuLnByb2R1Y3QtZm9ybV9faW1hZ2UtcmVtb3ZlIHtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSA1MCUgNTAlIG5vLXJlcGVhdDtcXG4gIGZvbnQtc2l6ZTogMDtcXG4gIGJvcmRlcjogbm9uZTsgfVxcblxcbi5wcm9kdWN0LWZvcm1fX2Zvb3RlciB7XFxuICBtYXJnaW4tdG9wOiAycmVtOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShtb2R1bGVJZCwgbGlzdCwgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGNzczogbGlzdFtpXVsxXSxcbiAgICAgIG1lZGlhOiBsaXN0W2ldWzJdLFxuICAgICAgc291cmNlTWFwOiBsaXN0W2ldWzNdXG4gICAgfTtcblxuICAgIGlmIChzdHlsZXNJbkRvbVttb2R1bGVJZF1baV0pIHtcbiAgICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXVtpXShwYXJ0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb21bbW9kdWxlSWRdLnB1c2goYWRkU3R5bGUocGFydCwgb3B0aW9ucykpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIG1vZHVsZUlkID0gb3B0aW9ucy5iYXNlID8gbW9kdWxlSWQgKyBvcHRpb25zLmJhc2UgOiBtb2R1bGVJZDtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG5cbiAgaWYgKCFzdHlsZXNJbkRvbVttb2R1bGVJZF0pIHtcbiAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF0gPSBbXTtcbiAgfVxuXG4gIG1vZHVsZXNUb0RvbShtb2R1bGVJZCwgbGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghc3R5bGVzSW5Eb21bbW9kdWxlSWRdKSB7XG4gICAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF0gPSBbXTtcbiAgICB9XG5cbiAgICBtb2R1bGVzVG9Eb20obW9kdWxlSWQsIG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgaiA9IG5ld0xpc3QubGVuZ3RoOyBqIDwgc3R5bGVzSW5Eb21bbW9kdWxlSWRdLmxlbmd0aDsgaisrKSB7XG4gICAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF1bal0oKTtcbiAgICB9XG5cbiAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF0ubGVuZ3RoID0gbmV3TGlzdC5sZW5ndGg7XG5cbiAgICBpZiAoc3R5bGVzSW5Eb21bbW9kdWxlSWRdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW21vZHVsZUlkXTtcbiAgICB9XG4gIH07XG59OyIsImltcG9ydCBMYXlvdXQgZnJvbSAnLi9jb21wb25lbnRzL0xheW91dC9pbmRleC5qcyc7XG5pbXBvcnQgQ29sdW1uQ2hhcnQgZnJvbSAnLi9jb21wb25lbnRzL0NvbHVtbkNoYXJ0L2luZGV4LmpzJztcbmltcG9ydCBSYW5nZVBpY2tlciBmcm9tICcuL2NvbXBvbmVudHMvUmFuZ2VQaWNrZXIvaW5kZXguanMnO1xuaW1wb3J0IFNvcnRhYmxlVGFibGUgZnJvbSAnLi9jb21wb25lbnRzL1NvcnRhYmxlVGFibGUvaW5kZXguanMnO1xuaW1wb3J0IERyYWdnYWJsZUxpc3QgZnJvbSAnLi9jb21wb25lbnRzL0RyYWdnYWJsZUxpc3QvaW5kZXguanMnO1xuaW1wb3J0IFJvdXRlciBmcm9tICcuL2xpYi9Sb3V0ZXIuanMnO1xuXG5pbXBvcnQgJy4vYXNzZXRzL3Njc3Mvc3R5bGVzLnNjc3MnO1xuXG4vLyBSb3V0aW5nXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIuaW5zdGFuY2UoKTtcblxucm91dGVyXG4gIC5hZGRSb3V0ZSgvXiQvLCAnZGFzaGJvYXJkJylcbiAgLmFkZFJvdXRlKC9eY2F0ZWdvcmllcyQvLCAnY2F0ZWdvcmllcycpXG4gIC5hZGRSb3V0ZSgvXnByb2R1Y3RzXFwvKFtcXFMoKS1dKykvZywgJ3Byb2R1Y3RzL2VkaXQnKVxuICAuYWRkUm91dGUoL15wcm9kdWN0c1xcL2FkZCQvLCAncHJvZHVjdHMvZWRpdCcpXG4gIC5hZGRSb3V0ZSgvXnByb2R1Y3RzJC8sICdwcm9kdWN0cycpXG4gIC5zZXROb3RGb3VuZFBhZ2UoJ2Vycm9yNDA0JylcbiAgLmFkZExpc3RlbmVyKCk7XG5cbi8vIEluaXQgY3VzdG9tIGVsZW1lbnRzXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdwYWdlLWxheW91dCcsIExheW91dCk7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjb2x1bW4tY2hhcnQnLCBDb2x1bW5DaGFydCk7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdyYW5nZS1waWNrZXInLCBSYW5nZVBpY2tlcik7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzb3J0YWJsZS10YWJsZScsIFNvcnRhYmxlVGFibGUpO1xud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZHJhZ2dhYmxlLWxpc3QnLCBEcmFnZ2FibGVMaXN0LCB7IGV4dGVuZHM6ICd1bCcgfSk7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKG1vZHVsZS5pZCwgY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiZXhwb3J0IGRlZmF1bHQge1xuICBlbGVtOiAnY29sdW1uLWNoYXJ0JyxcbiAgY29udGVudDogJ2NvbHVtbi1jaGFydF9fY29udGVudCcsXG4gIGhlYWRlcjogJ2NvbHVtbi1jaGFydF9faGVhZGVyJyxcbiAgdGl0bGU6ICdjb2x1bW4tY2hhcnRfX3RpdGxlJyxcbiAgdG90YWw6ICdjb2x1bW4tY2hhcnRfX3RvdGFsJyxcbiAgbGlzdDogJ2NvbHVtbi1jaGFydF9fbGlzdCcsXG4gIGl0ZW06ICdjb2x1bW4tY2hhcnRfX2l0ZW0nLFxuICB0b29sdGlwOiAnY29sdW1uLWNoYXJ0X190b29sdGlwJyxcbiAgdG9vbHRpcERhdGU6ICdjb2x1bW4tY2hhcnRfX3Rvb2x0aXAtZGF0ZScsXG4gIHRvb2x0aXBRdWFudGl0eTogJ2NvbHVtbi1jaGFydF9fdG9vbHRpcC1xdWFudGl0eScsXG4gIGVycm9yOiAnY29sdW1uLWNoYXJ0X19lcnJvcidcbn07XG4iLCJpbXBvcnQgVG9vbHRpcHMgZnJvbSAnLi4vVG9vbHRpcHMvaW5kZXguanMnO1xuaW1wb3J0IHtcbiAgZmlsbFRlbXBsYXRlLFxuICBmb3JtYXREYXRlLFxuICBlc2NhcGVIVE1MLFxuICBmb3JtYXRUb3RhbCxcbiAgZmV0Y2hKc29uXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvaW5kZXguanMnO1xuaW1wb3J0IGNscyBmcm9tICcuL2NsYXNzZXMuanMnO1xuaW1wb3J0IHRlbXBsYXRlcyBmcm9tICcuL3RlbXBsYXRlcy5qcyc7XG5cbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbHVtbkNoYXJ0IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuYXBpVXJsID0gcHJvY2Vzcy5lbnYuQVBJX1VSTCB8fCAnaHR0cHM6Ly9jb3Vyc2UtanMuamF2YXNjcmlwdC5ydSc7XG5cbiAgICB0aGlzLmNoYW5nZURhdGUgPSB0aGlzLmNoYW5nZURhdGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFzeW5jIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcbiAgICBjb25zdCB7IHR5cGUsIGlzTW9uZXksIGZyb20sIHRvIH0gPSB0aGlzLmRhdGFzZXQ7XG5cbiAgICB0aGlzLmRhdGVzID0ge1xuICAgICAgZnJvbTogbmV3IERhdGUoZnJvbSksXG4gICAgICB0bzogbmV3IERhdGUodG8pXG4gICAgfTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5mb3JtYXRUb3RhbCA9IGlzTW9uZXkgPyBmb3JtYXRUb3RhbCA6IG51bGw7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKGNscy5lbGVtLCBgJHtjbHMuZWxlbX0tLSR7dHlwZX1gKTtcbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZChjbHMuY29udGVudCk7XG4gICAgdGhpcy50aXRsZSA9IGBUb3RhbCAke3R5cGV9YDtcbiAgICB0aGlzLnVybCA9IHRoaXMuZ2V0VXJsKCk7XG5cbiAgICBhd2FpdCB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuYXBwZW5kKHRoaXMuZWxlbSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VEYXRlJywgdGhpcy5jaGFuZ2VEYXRlKTtcbiAgfVxuXG4gIGdldFVybCAoKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuYXBpVXJsfS9hcGkvZGFzaGJvYXJkLyR7dGhpcy50eXBlfT9mcm9tPSR7dGhpcy5kYXRlcy5mcm9tfSZ0bz0ke3RoaXMuZGF0ZXMudG99YDtcbiAgfVxuXG4gIGFzeW5jIGdldERhdGEgKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hKc29uKHRoaXMudXJsKTtcbiAgICAgIHJldHVybiB7IGRhdGEgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHsgZXJyb3IgfTtcbiAgICB9XG4gIH1cblxuICBhc3luYyByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHRoaXMuZ2V0RGF0YSgpO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZWxlbS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZUVuZCcsIGA8ZGl2IGNsYXNzPVwiJHtjbHMuZXJyb3J9XCI+JHtlcnJvcn08L2Rpdj5gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlcyA9IE9iamVjdC52YWx1ZXModGhpcy5kYXRhKTtcblxuICAgIGlmICh0aGlzLnZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMudmFsdWVzLnB1c2goJ05vIGRhdGEnKTtcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXJTdHIgPSB0aGlzLmdldEhlYWRlclN0cigpO1xuXG4gICAgY29uc3QgbGlzdFN0ciA9IHRoaXMuZ2V0TGlzdFN0cigpO1xuICAgIHRoaXMuZWxlbS5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAnYmVmb3JlRW5kJyxcbiAgICAgIGhlYWRlclN0ciArIGxpc3RTdHJcbiAgICApO1xuXG4gICAgdGhpcy5hZGRBY3Rpb25zKCk7XG4gIH1cblxuICBnZXRIZWFkZXJTdHIgKCkge1xuICAgIHRoaXMudG90YWwgPSB0aGlzLnZhbHVlcy5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IHByZXYgKyBjdXJyZW50LCAwKTtcblxuICAgIGlmICh0aGlzLmZvcm1hdFRvdGFsKSB7XG4gICAgICB0aGlzLnRvdGFsID0gdGhpcy5mb3JtYXRUb3RhbCh0aGlzLnRvdGFsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlsbFRlbXBsYXRlKHtcbiAgICAgIHRtcGw6IHRlbXBsYXRlcy5oZWFkZXIsXG4gICAgICBkYXRhOiB0aGlzXG4gICAgfSk7XG4gIH1cblxuICBnZXRMaXN0U3RyICgpIHtcbiAgICBjb25zdCBtYXggPSBNYXRoLm1heCguLi50aGlzLnZhbHVlcyk7XG4gICAgbGV0IGNoYXJ0U3RyID0gJyc7XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmRhdGEpIHtcbiAgICAgIGNvbnN0IGRhdGUgPSBmb3JtYXREYXRlKGtleSk7XG4gICAgICBsZXQgdmFsdWUgPSB0aGlzLmRhdGFba2V5XTtcbiAgICAgIGNvbnN0IGhlaWdodFZhbHVlID0gKCh2YWx1ZSAvIG1heCkgKiAxMDApLnRvRml4ZWQoMik7XG4gICAgICBjb25zdCBoZWlnaHQgPSBgJHtoZWlnaHRWYWx1ZX0lYDtcblxuICAgICAgaWYgKHRoaXMuZm9ybWF0VG90YWwpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLmZvcm1hdFRvdGFsKHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdG9vdGlwQ29udGVudCA9IGA8c21hbGwgY2xhc3M9XCIke2Nscy50b29sdGlwRGF0ZX1cIj4ke2RhdGV9PC9zbWFsbD48ZGl2IGNsYXNzPVwiJHtjbHMudG9vbHRpcFF1YW50aXR5fVwiPiR7dmFsdWV9PC9kaXY+YDtcblxuICAgICAgY2hhcnRTdHIgKz0gZmlsbFRlbXBsYXRlKHtcbiAgICAgICAgdG1wbDogdGVtcGxhdGVzLmNoYXJ0SXRlbSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIC4uLnRoaXMsXG4gICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgIHRvb3RpcENvbnRlbnQ6IGVzY2FwZUhUTUwodG9vdGlwQ29udGVudClcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGA8dWwgY2xhc3M9XCIke2Nscy5saXN0fVwiPiR7Y2hhcnRTdHJ9PC91bD5gO1xuICB9XG5cbiAgYWRkQWN0aW9ucyAoKSB7XG4gICAgdGhpcy50b29sdGlwcyA9IG5ldyBUb29sdGlwcyh7XG4gICAgICBlbGVtOiB0aGlzLmVsZW0sXG4gICAgICBkaW1TaWJsaW5nczogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgY2hhbmdlRGF0ZSAoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50LmRldGFpbCB8fCAhZXZlbnQuZGV0YWlsLmRhdGVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBmcm9tLCB0byB9ID0gZXZlbnQuZGV0YWlsLmRhdGVzO1xuICAgIHRoaXMuZGF0ZXMgPSB7XG4gICAgICBmcm9tOiBmcm9tLFxuICAgICAgdG86IHRvXG4gICAgfTtcblxuICAgIHRoaXMudXJsID0gdGhpcy5nZXRVcmwoKTtcbiAgICB0aGlzLmVsZW0uaW5uZXJIVE1MID0gJyc7XG4gICAgYXdhaXQgdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLmFwcGVuZCh0aGlzLmVsZW0pO1xuICB9XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKG1vZHVsZS5pZCwgY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IGNscyBmcm9tICcuL2NsYXNzZXMuanMnO1xuXG5leHBvcnQgY29uc3QgaGVhZGVyID0gYDxoZWFkZXIgY2xhc3M9XCIke2Nscy5oZWFkZXJ9XCI+XG4gIDxoMyBjbGFzcz1cIiR7Y2xzLnRpdGxlfVwiPnt0aXRsZX08L2gzPlxuICA8ZGl2IGNsYXNzPVwiJHtjbHMudG90YWx9XCI+e3RvdGFsfTwvZGl2PlxuPC9oZWFkZXI+YDtcblxuZXhwb3J0IGNvbnN0IGNoYXJ0SXRlbSA9IGA8bGlcbiAgY2xhc3M9XCIke2Nscy5pdGVtfVwiXG4gIGRhdGEtdG9vbHRpcC1jb250ZW50PVwie3Rvb3RpcENvbnRlbnR9XCJcbiAgc3R5bGU9XCJoZWlnaHQ6IHtoZWlnaHR9XCI+PC9saT5gO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGhlYWRlcixcbiAgY2hhcnRJdGVtXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjgzYzc1NDIwZDAzNjBlZDIyNTExYzA5MmU1N2QxZDU0LnN2Z1wiOyIsImltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5pbXBvcnQgJy4vZ3JhYi1pY29uLnN2Zyc7XG5cbmNvbnN0IGNscyA9IHtcbiAgZWxlbTogJ2RyYWdnYWJsZS1saXN0JyxcbiAgaXRlbXM6ICdkcmFnZ2FibGUtbGlzdF9faXRlbXMnLFxuICBpdGVtOiAnZHJhZ2dhYmxlLWxpc3RfX2l0ZW0nLFxuICBkcmFnZ2VkOiAnZHJhZ2dhYmxlLWxpc3RfX2l0ZW0tLWRyYWdnZWQnLFxuICBwbGFjZWhvbGRlcjogJ2RyYWdnYWJsZS1saXN0X19pdGVtLS1wbGFjZWhvbGRlcidcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdnYWJsZUxpc3QgZXh0ZW5kcyBIVE1MVUxpc3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnN0YXJ0RHJhZyA9IHRoaXMuc3RhcnREcmFnLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdG9wRHJhZyA9IHRoaXMuc3RvcERyYWcuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdmUgPSB0aGlzLm1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldFBsYWNlaG9sZGVySGVpZ2h0ID0gdGhpcy5zZXRQbGFjZWhvbGRlckhlaWdodC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYXN5bmMgY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZChjbHMuZWxlbSk7XG4gICAgdGhpcy5pdGVtcyA9IHRoaXMucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy5jcmVhdGVQbGFjZWhvbGRlcigpO1xuXG4gICAgdGhpcy5hZGRDbGFzc1RvSXRlbXMoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgdGhpcy5zdGFydERyYWcpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB0aGlzLnNldFBsYWNlaG9sZGVySGVpZ2h0LCB7IG9uY2U6IHRydWUgfSk7XG4gIH1cblxuICBzdGFydERyYWcgKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJyZW50RWxlbSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZHJhZ2dhYmxlLWxpc3RfX2l0ZW0nKTtcbiAgICBpZiAoIXRoaXMuY3VycmVudEVsZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRFbGVtLnJlcGxhY2VXaXRoKHRoaXMucGxhY2Vob2xkZXIpO1xuICAgIHRoaXMuY3VycmVudEVsZW0uY2xhc3NMaXN0LmFkZChjbHMuZHJhZ2dlZCk7XG4gICAgdGhpcy5hcHBlbmQodGhpcy5jdXJyZW50RWxlbSk7XG5cbiAgICBjb25zdCB7IHRvcCB9ID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgICB0aGlzLmVsZW1IYWxmID0gdGhpcy5jdXJyZW50RWxlbS5vZmZzZXRIZWlnaHQgLyAyO1xuXG4gICAgY29uc3QgZWxlbVRvcCA9IGV2ZW50LmNsaWVudFkgLSB0aGlzLnRvcCAtIHRoaXMuZWxlbUhhbGY7XG4gICAgdGhpcy5jdXJyZW50RWxlbS5zdHlsZS50b3AgPSBgJHtlbGVtVG9wfXB4YDtcblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCB0aGlzLm1vdmUpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgdGhpcy5zdG9wRHJhZyk7XG4gIH1cblxuICBtb3ZlIChldmVudCkge1xuICAgIGNvbnN0IGVsZW1Ub3AgPSBldmVudC5jbGllbnRZIC0gdGhpcy50b3AgLSB0aGlzLmVsZW1IYWxmO1xuICAgIHRoaXMuY3VycmVudEVsZW0uc3R5bGUudG9wID0gYCR7ZWxlbVRvcH1weGA7XG5cbiAgICAvLyBDaGVjayBpbnRlcnNlY3Rpb25cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5pdGVtcykge1xuICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGNscy5kcmFnZ2VkKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdG9wID0gaXRlbS5vZmZzZXRUb3A7XG4gICAgICBjb25zdCBib3R0b20gPSB0b3AgKyBpdGVtLm9mZnNldEhlaWdodDtcbiAgICAgIGNvbnN0IG1pZGRsZSA9IHRvcCArIGl0ZW0ub2Zmc2V0SGVpZ2h0IC8gMjtcbiAgICAgIGNvbnN0IGNoZWNrTGluZSA9IGVsZW1Ub3AgKyB0aGlzLmVsZW1IYWxmO1xuXG4gICAgICBpZiAoY2hlY2tMaW5lID4gdG9wICYmIGNoZWNrTGluZSA8IGJvdHRvbSkge1xuICAgICAgICBpZiAoY2hlY2tMaW5lIDw9IG1pZGRsZSkge1xuICAgICAgICAgIGl0ZW0uYWZ0ZXIodGhpcy5wbGFjZWhvbGRlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5iZWZvcmUodGhpcy5wbGFjZWhvbGRlcik7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RvcERyYWcgKCkge1xuICAgIHRoaXMucGxhY2Vob2xkZXIucmVwbGFjZVdpdGgodGhpcy5jdXJyZW50RWxlbSk7XG4gICAgdGhpcy5jdXJyZW50RWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNscy5kcmFnZ2VkKTtcbiAgICB0aGlzLmN1cnJlbnRFbGVtLnN0eWxlLnRvcCA9ICcnO1xuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCB0aGlzLm1vdmUpO1xuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgdGhpcy5zdG9wRHJhZyk7XG4gIH1cblxuICBjcmVhdGVQbGFjZWhvbGRlciAoKSB7XG4gICAgY29uc3QgZmlyc3RJdGVtID0gdGhpcy5pdGVtc1swXTtcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9IGZpcnN0SXRlbS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgcGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZChjbHMucGxhY2Vob2xkZXIsIGNscy5pdGVtKTtcbiAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSAnJztcblxuICAgIHJldHVybiBwbGFjZWhvbGRlcjtcbiAgfVxuXG4gIHNldFBsYWNlaG9sZGVySGVpZ2h0ICgpIHtcbiAgICBjb25zdCBmaXJzdEl0ZW0gPSB0aGlzLml0ZW1zWzBdO1xuICAgIHRoaXMucGxhY2Vob2xkZXIuc3R5bGUubWluSGVpZ2h0ID0gYCR7Zmlyc3RJdGVtLm9mZnNldEhlaWdodH1weGA7XG4gIH1cblxuICBhZGRDbGFzc1RvSXRlbXMgKCkge1xuICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChjbHMuaXRlbSkpO1xuICB9XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKG1vZHVsZS5pZCwgY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvaW5kZXguanMnO1xuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25uZWN0ZWRDYWxsYmFjayAoKSB7XG4gICAgdGhpcy5hcHBlbmQodGhpcy5yZW5kZXIoKSk7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdwYWdlJyk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KGA8ZGl2IGNsYXNzPVwicGFnZS1jb250YWluZXJcIj5cbiAgICAgIDxhc2lkZSBjbGFzcz1cInBhZ2UtYXNpZGVcIj5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+RGFzaGJvYXJkPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9wcm9kdWN0c1wiPlByb2R1Y3RzPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jYXRlZ29yaWVzXCI+Q2F0ZWdvcmllczwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2FzaWRlPlxuXG4gICAgICA8bWFpbiBjbGFzcz1cInBhZ2UtbWFpblwiIGlkPVwiY29udGVudFwiPlxuICAgICAgICA8IS0tIG1haW4gY29udGVudCB3aWxsIGJlIGhlcmUgLS0+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+YCk7XG4gIH1cbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkobW9kdWxlLmlkLCBjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG5jb25zdCBjbHMgPSB7XG4gIGVsZW06ICdub3RpZmljYXRpb24nLFxuICB3YXJuaW5nOiAnbm90aWZpY2F0aW9uLS13YXJuaW5nJyxcbiAgZXJyb3I6ICdub3RpZmljYXRpb24tLWVycm9yJ1xufTtcblxuY29uc3Qgc2Vjb25kID0gMTAwMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90aWZpY2F0aW9uIHtcbiAgY29uc3RydWN0b3IgKHsgbWVzc2FnZSwgY29udGFpbmVyLCB0eXBlIH0pIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5kdXJhdGlvbiA9IHRoaXMuZ2V0RHVyYXRpb24oKTtcbiAgICB0aGlzLmNsYXNzTmFtZXMgPSB0aGlzLmdldENsYXNzZXMoKTtcbiAgICB0aGlzLmFkZEVsZW0oKTtcbiAgICB0aGlzLmlzRmluaXNoZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGFkZEVsZW0gKCkge1xuICAgIHRoaXMuZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKC4uLnRoaXMuY2xhc3NOYW1lcyk7XG4gICAgdGhpcy5lbGVtLmRhdGFzZXQuc3RhdGUgPSAnc2hvd24nO1xuICAgIHRoaXMuZWxlbS5pbm5lckhUTUwgPSB0aGlzLm1lc3NhZ2U7XG4gICAgdGhpcy5jb250YWluZXIucHJlcGVuZCh0aGlzLmVsZW0pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuaGlkZUVsZW0oKTsgfSwgdGhpcy5kdXJhdGlvbik7XG4gIH1cblxuICBhc3luYyBoaWRlRWxlbSAocGFyYW1zID0ge30pIHtcbiAgICB0aGlzLmlzRmluaXNoZWQgPSB0cnVlO1xuICAgIHRoaXMuZWxlbS5kYXRhc2V0LnN0YXRlID0gJ2hpZGRlbic7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5lbGVtLnJlbW92ZSgpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldER1cmF0aW9uICgpIHtcbiAgICBpZiAodGhpcy50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICByZXR1cm4gNSAqIHNlY29uZDtcbiAgICB9XG5cbiAgICByZXR1cm4gMyAqIHNlY29uZDtcbiAgfVxuXG4gIGdldENsYXNzZXMgKCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbY2xzLmVsZW1dO1xuXG4gICAgaWYgKHRoaXMudHlwZSAmJiBjbHNbdGhpcy50eXBlXSkge1xuICAgICAgY2xhc3Nlcy5wdXNoKGNsc1t0aGlzLnR5cGVdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShtb2R1bGUuaWQsIGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VNZXNzYWdlIHtcbiAgY29uc3RydWN0b3IgKHsgdGl0bGUsIHRleHQsIGNhbGxiYWNrLCBjYWxsYmFja1RleHQsIGVycm9yIH0pIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy50ZXh0ID0gdGV4dCB8fCAnU29tZXRoaW5nIHdlbnQgd3JvbmcnO1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB0aGlzLmNhbGxiYWNrVGV4dCA9IGNhbGxiYWNrVGV4dDtcbiAgICB0aGlzLmVycm9yID0gZXJyb3I7XG5cbiAgICBpZiAoIXRoaXMudGl0bGUgJiYgdGhpcy5lcnJvcikge1xuICAgICAgdGhpcy50aXRsZSA9ICdFcnJvcic7XG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gIH1cblxuICBjcmVhdGVFbGVtZW50ICgpIHtcbiAgICB0aGlzLmVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZCgncGFnZS1tZXNzYWdlJyk7XG5cbiAgICBpZiAodGhpcy5lcnJvcikge1xuICAgICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoJ3BhZ2UtbWVzc2FnZS0tZXJyb3InKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRlbnQgPSBgPGgzPiR7dGhpcy50aXRsZX08L2gzPjxwPiR7dGhpcy50ZXh0fTwvcD5gO1xuXG4gICAgaWYgKHRoaXMuZXJyb3IpIHtcbiAgICAgIHRoaXMuY29udGVudCArPSBgPGRpdiBjbGFzcz1cInBhZ2UtbWVzc2FnZV9fZXJyb3JcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtbWVzc2FnZV9fZXJyb3ItdGV4dFwiPlxuICAgICAgICAgIDxzdHJvbmc+JHt0aGlzLmVycm9yLm5hbWV9PC9zdHJvbmc+OiAke3RoaXMuZXJyb3IubWVzc2FnZX08L2Rpdj5cbiAgICAgIDwvZGl2PmA7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJCZWdpbicsIHRoaXMuY29udGVudCk7XG4gIH1cbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkobW9kdWxlLmlkLCBjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmIxMTJiNTUwMjc2ZDc1MmQwYjNlMTA3YWRlOGQ2MTcuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjY4MmRlZGFhZmIwNDRlN2I5ZWEzNTJhNzBiYWFmNTY5LnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZWxlbTogJ3JhbmdlcGlja2VyJyxcbiAgZWxlbU9wZW46ICdyYW5nZXBpY2tlci0tb3BlbicsXG4gIGlucHV0OiAncmFuZ2VwaWNrZXJfX2lucHV0JyxcbiAgZnJvbTogJ3JhbmdlcGlja2VyX19mcm9tJyxcbiAgdG86ICdyYW5nZXBpY2tlcl9fdG8nLFxuICBzZWxlY3RvcjogJ3JhbmdlcGlja2VyX19zZWxlY3RvcicsXG4gIHNlbGVjdG9yQXJyb3c6ICdyYW5nZXBpY2tlcl9fc2VsZWN0b3ItYXJyb3cnLFxuICBzZWxlY3RvckNvbnRyb2w6ICdyYW5nZXBpY2tlcl9fc2VsZWN0b3ItY29udHJvbCcsXG4gIGNhbGVuZGFyczogJ3JhbmdlcGlja2VyX19jYWxlbmRhcnMnLFxuICBjYWxlbmRhcjogJ3JhbmdlcGlja2VyX19jYWxlbmRhcicsXG4gIGNlbGw6ICdyYW5nZXBpY2tlcl9fY2VsbCcsXG4gIHNlbGVjdGVkRnJvbTogJ3JhbmdlcGlja2VyX19zZWxlY3RlZC1mcm9tJyxcbiAgc2VsZWN0ZWRCZXR3ZWVuOiAncmFuZ2VwaWNrZXJfX3NlbGVjdGVkLWJldHdlZW4nLFxuICBzZWxlY3RlZFRvOiAncmFuZ2VwaWNrZXJfX3NlbGVjdGVkLXRvJyxcbiAgbW9udGhJbmRpY2F0b3I6ICdyYW5nZXBpY2tlcl9fbW9udGgtaW5kaWNhdG9yJyxcbiAgZGF5T2ZXZWVrOiAncmFuZ2VwaWNrZXJfX2RheS1vZi13ZWVrJyxcbiAgZGF0ZUdyaWQ6ICdyYW5nZXBpY2tlcl9fZGF0ZS1ncmlkJ1xufTtcbiIsImltcG9ydCB7XG4gIGZpbGxUZW1wbGF0ZSxcbiAgZ2V0V2Vla0RheXNcbn0gZnJvbSAnLi4vLi4vaGVscGVycy9pbmRleC5qcyc7XG5pbXBvcnQgdGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzLmpzJztcbmltcG9ydCBjbHMgZnJvbSAnLi9jbGFzc2VzLmpzJztcblxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcbmltcG9ydCAnLi9hcnJvdy1pY29uLnN2Zyc7XG5pbXBvcnQgJy4vY2FsZW5kYXItaWNvbi5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5nZVBpY2tlciBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy50b2dnbGVQaWNrZXIgPSB0aGlzLnRvZ2dsZVBpY2tlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VsZWN0b3JPbkNsaWNrID0gdGhpcy5zZWxlY3Rvck9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmJvZHlPbkNsaWNrID0gdGhpcy5ib2R5T25DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlUmFuZ2UgPSB0aGlzLnVwZGF0ZVJhbmdlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmlzT3BlbmVkID0gZmFsc2U7XG4gICAgdGhpcy5lbGVtID0gdGhpcztcbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZCgncmFuZ2VwaWNrZXInKTtcbiAgfVxuXG4gIGFzeW5jIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcbiAgICBjb25zdCB7IGZyb20sIHRvIH0gPSB0aGlzLmRhdGFzZXQ7XG5cbiAgICB0aGlzLmRhdGVzID0ge1xuICAgICAgZnJvbTogbmV3IERhdGUoZnJvbSksXG4gICAgICB0bzogbmV3IERhdGUodG8pXG4gICAgfTtcblxuICAgIHRoaXMubW9udGhlcyA9IHRoaXMuZ2V0RGlzcGxheWVkTW9udGhlcygpO1xuICAgIHRoaXMubmV3RGF0ZXMgPSBbXTtcblxuICAgIHRoaXMuYWRkSW5wdXQoKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VEYXRlJywgdGhpcy51cGRhdGVSYW5nZSk7XG4gIH1cblxuICBnZXREaXNwbGF5ZWRNb250aGVzICgpIHtcbiAgICBjb25zdCBjdXJyZW50TW9udGggPSBuZXcgRGF0ZSh0aGlzLmRhdGVzLmZyb20pO1xuICAgIGxldCBtb250aCA9IGN1cnJlbnRNb250aC5nZXRNb250aCgpO1xuICAgIGNvbnN0IGN1cnJlbnREYXkgPSAxO1xuICAgIGN1cnJlbnRNb250aC5zZXREYXRlKGN1cnJlbnREYXkpO1xuXG4gICAgY29uc3QgbmV4dE1vbnRoID0gbmV3IERhdGUoY3VycmVudE1vbnRoKTtcbiAgICBuZXh0TW9udGguc2V0TW9udGgoKyttb250aCk7XG5cbiAgICByZXR1cm4gW2N1cnJlbnRNb250aCwgbmV4dE1vbnRoXTtcbiAgfVxuXG4gIGFkZElucHV0ICgpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgZnJvbTogdGhpcy5kYXRlcy5mcm9tLnRvTG9jYWxlRGF0ZVN0cmluZygpLFxuICAgICAgdG86IHRoaXMuZGF0ZXMudG8udG9Mb2NhbGVEYXRlU3RyaW5nKClcbiAgICB9O1xuICAgIGNvbnN0IHRtcGwgPSB0ZW1wbGF0ZXMuaW5wdXQ7XG4gICAgY29uc3QgaW5wdXRTdHIgPSBmaWxsVGVtcGxhdGUoe1xuICAgICAgdG1wbCxcbiAgICAgIGRhdGFcbiAgICB9KTtcblxuICAgIHRoaXMuZWxlbS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyQmVnaW4nLCBpbnB1dFN0cik7XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKGAuJHtjbHMuaW5wdXR9YCk7XG4gICAgdGhpcy5pbnB1dEZyb20gPSB0aGlzLmlucHV0LnF1ZXJ5U2VsZWN0b3IoYC4ke2Nscy5mcm9tfWApO1xuICAgIHRoaXMuaW5wdXRUbyA9IHRoaXMuaW5wdXQucXVlcnlTZWxlY3RvcihgLiR7Y2xzLnRvfWApO1xuXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIHRoaXMudG9nZ2xlUGlja2VyKTtcbiAgICAvLyBjYXB0dXJlOiB0cnVlIHJldmVyc2VzIG9yZGVyIG9mIGV2ZW50c1xuICAgIC8vIGNsaWNrIG9uIGJvZHkgZmlyZXMgZmlyc3RcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgdGhpcy5ib2R5T25DbGljaywge1xuICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgYm9keU9uQ2xpY2sgKCkge1xuICAgIGNvbnN0IHBhcmVudFJhbmdlUGlja2VyID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoYC4ke2Nscy5lbGVtfWApO1xuXG4gICAgaWYgKCFwYXJlbnRSYW5nZVBpY2tlciAmJiB0aGlzLmlzT3BlbmVkKSB7XG4gICAgICB0aGlzLmhpZGVQaWNrZXIoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVJbnB1dCAoKSB7XG4gICAgdGhpcy5pbnB1dEZyb20uaW5uZXJIVE1MID0gdGhpcy5kYXRlcy5mcm9tLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICAgIHRoaXMuaW5wdXRUby5pbm5lckhUTUwgPSB0aGlzLmRhdGVzLnRvLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICB9XG5cbiAgdXBkYXRlUmFuZ2UgKCkge1xuICAgIHRoaXMubW9udGhlcyA9IHRoaXMuZ2V0RGlzcGxheWVkTW9udGhlcygpO1xuICAgIHRoaXMubmV3RGF0ZXMgPSBbXTtcbiAgICB0aGlzLnVwZGF0ZUlucHV0KCk7XG4gICAgdGhpcy5oaWRlUGlja2VyKCk7XG4gIH1cblxuICB0b2dnbGVQaWNrZXIgKCkge1xuICAgIGlmICh0aGlzLmlzT3BlbmVkKSB7XG4gICAgICB0aGlzLmhpZGVQaWNrZXIoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dQaWNrZXIoKTtcbiAgICB0aGlzLmlzT3BlbmVkID0gdHJ1ZTtcbiAgfVxuXG4gIHNob3dQaWNrZXIgKCkge1xuICAgIGlmICghdGhpcy5zZWxlY3Rvcikge1xuICAgICAgdGhpcy5hZGRTZWxlY3RvcigpO1xuXG4gICAgICB0aGlzLnNlbGVjdG9yID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoYC4ke2Nscy5zZWxlY3Rvcn1gKTtcbiAgICAgIHRoaXMuY2FsZW5kYXJzID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoYC4ke2Nscy5jYWxlbmRhcnN9YCk7XG5cbiAgICAgIHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNlbGVjdG9yT25DbGljayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FsZW5kYXJzLmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuICAgIHRoaXMuYWRkQ2FsZW5kYXJzKCk7XG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoY2xzLmVsZW1PcGVuKTtcbiAgfVxuXG4gIGhpZGVQaWNrZXIgKCkge1xuICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNscy5lbGVtT3Blbik7XG4gICAgdGhpcy5pc09wZW5lZCA9IGZhbHNlO1xuICAgIHRoaXMubmV3RGF0ZXMgPSBbXTtcbiAgfVxuXG4gIGFkZFNlbGVjdG9yICgpIHtcbiAgICBjb25zdCBzZWxlY3RvclN0ciA9IHRlbXBsYXRlcy5zZWxlY3RvcjtcbiAgICB0aGlzLmVsZW0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVFbmQnLCBzZWxlY3RvclN0cik7XG4gIH1cblxuICBzZWxlY3Rvck9uQ2xpY2sgKCkge1xuICAgIGNvbnN0IHsgZGF0YXNldCB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmIChkYXRhc2V0LnZhbHVlKSB7XG4gICAgICB0aGlzLnNldERheShldmVudC50YXJnZXQpO1xuICAgIH0gZWxzZSBpZiAoZGF0YXNldC5kaXJlY3Rpb24pIHtcbiAgICAgIHRoaXMubW92ZU1vbnRoKGRhdGFzZXQuZGlyZWN0aW9uKTtcbiAgICB9XG4gIH1cblxuICBzZXREYXkgKGVsZW0pIHtcbiAgICBjb25zdCBkYXRlID0gZWxlbS5kYXRhc2V0LnZhbHVlO1xuXG4gICAgaWYgKHRoaXMubmV3RGF0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLm5ld0RhdGVzLnB1c2gobmV3IERhdGUoZGF0ZSkpO1xuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZChlbGVtKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm5ld0RhdGVzLnB1c2gobmV3IERhdGUoZGF0ZSkpO1xuXG4gICAgdGhpcy5uZXdEYXRlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYSAtIGI7XG4gICAgfSk7XG4gICAgdGhpcy5kYXRlcyA9IHtcbiAgICAgIGZyb206IHRoaXMubmV3RGF0ZXNbMF0sXG4gICAgICB0bzogdGhpcy5uZXdEYXRlc1sxXVxuICAgIH07XG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgbmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2VEYXRlJywge1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBkYXRlczoge1xuICAgICAgICAgICAgZnJvbTogdGhpcy5kYXRlcy5mcm9tLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICB0bzogdGhpcy5kYXRlcy50by50b0lTT1N0cmluZygpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBtb3ZlTW9udGggKGRpcmVjdGlvbikge1xuICAgIGxldCBzdGVwID0gMTtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAncHJldicpIHtcbiAgICAgIHN0ZXAgPSAtMTtcbiAgICB9XG5cbiAgICB0aGlzLm1vbnRoZXMuZm9yRWFjaChkYXRlID0+IHtcbiAgICAgIGRhdGUuc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpICsgc3RlcCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnVwZGF0ZUNhbGVuZGFycygpO1xuICB9XG5cbiAgYWRkQ2FsZW5kYXJzICgpIHtcbiAgICB0aGlzLm1vbnRoZXMuZm9yRWFjaChkYXRlID0+IHtcbiAgICAgIHRoaXMuY2FsZW5kYXJzLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlRW5kJywgdGhpcy5nZXRDYWxlbmRhcihkYXRlKSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVDYWxlbmRhcnMgKCkge1xuICAgIHRoaXMuY2FsZW5kYXJzLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuYWRkQ2FsZW5kYXJzKCk7XG4gIH1cblxuICB1cGRhdGVTZWxlY3RlZCAoZWxlbSkge1xuICAgIGNvbnN0IGNlbGxzID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2Nscy5jZWxsfWApO1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbY2xzLnNlbGVjdGVkQmV0d2VlbiwgY2xzLnNlbGVjdGVkRnJvbSwgY2xzLnNlbGVjdGVkVG9dO1xuXG4gICAgY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSguLi5jbGFzc2VzKTtcbiAgICB9KTtcblxuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbHMuc2VsZWN0ZWRGcm9tKTtcbiAgfVxuXG4gIGdldENhbGVuZGFyIChkYXRlKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIG1vbnRoOiBkYXRlLnRvTG9jYWxlU3RyaW5nKCdkZWZhdWx0JywgeyBtb250aDogJ2xvbmcnIH0pLFxuICAgICAgd2Vla2RheXM6IGdldFdlZWtEYXlzKCdkaXYnKSxcbiAgICAgIGRheXM6IHRoaXMuZ2V0Q2VsbHMoZGF0ZSlcbiAgICB9O1xuXG4gICAgY29uc3QgdG1wbCA9IHRlbXBsYXRlcy5jYWxlbmRhcjtcbiAgICBjb25zdCBjYWxlbmRhclN0ciA9IGZpbGxUZW1wbGF0ZSh7XG4gICAgICB0bXBsLFxuICAgICAgZGF0YVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNhbGVuZGFyU3RyO1xuICB9XG5cbiAgZ2V0Q2VsbHMgKGRhdGUpIHtcbiAgICBjb25zdCB0bXBsID0gdGVtcGxhdGVzLmRheTtcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIGNvbnN0IG1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcbiAgICBsZXQgY3VycmVudERheSA9IDE7XG4gICAgbGV0IGRheXNTdHIgPSAnJztcblxuICAgIHdoaWxlIChjdXJyZW50RGF0ZS5nZXRNb250aCgpID09PSBtb250aCkge1xuICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLmdldENlbGxTdGFydFN0eWxlKGN1cnJlbnREYXRlKTtcbiAgICAgIGNvbnN0IG1vZCA9IHRoaXMuZ2V0Q2VsbE1vZChjdXJyZW50RGF0ZSk7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGRhdGVUaW1lOiBjdXJyZW50RGF0ZS50b0lTT1N0cmluZygpLFxuICAgICAgICBkYXRlTnVtOiBjdXJyZW50RGF0ZS5nZXREYXRlKCksXG4gICAgICAgIHN0eWxlLFxuICAgICAgICBtb2RcbiAgICAgIH07XG4gICAgICBkYXlzU3RyICs9IGZpbGxUZW1wbGF0ZSh7XG4gICAgICAgIHRtcGwsXG4gICAgICAgIGRhdGFcbiAgICAgIH0pO1xuXG4gICAgICBjdXJyZW50RGF0ZS5zZXREYXRlKCsrY3VycmVudERheSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRheXNTdHI7XG4gIH1cblxuICBnZXRDZWxsU3RhcnRTdHlsZSAoZGF0ZSkge1xuICAgIGxldCBzdHlsZSA9ICcnO1xuICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgaWYgKGRheSA+IDEpIHtcbiAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9XG5cbiAgICBsZXQgd2Vla2RheU51bSA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgaWYgKHdlZWtkYXlOdW0gPT09IDApIHtcbiAgICAgIHdlZWtkYXlOdW0gPSA3O1xuICAgIH1cblxuICAgIHN0eWxlID0gYGdyaWQtY29sdW1uLXN0YXJ0OiAke3dlZWtkYXlOdW19YDtcblxuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG4gIGdldENlbGxNb2QgKGRhdGUpIHtcbiAgICBsZXQgbW9kID0gJyc7XG5cbiAgICBpZiAodGhpcy5uZXdEYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gbW9kO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGVNcyA9IGRhdGUudmFsdWVPZigpO1xuICAgIGNvbnN0IGRhdGVGcm9tTXMgPSB0aGlzLmRhdGVzLmZyb20udmFsdWVPZigpO1xuICAgIGNvbnN0IGRhdGVUb01zID0gdGhpcy5kYXRlcy50by52YWx1ZU9mKCk7XG5cbiAgICBpZiAoZGF0ZU1zID4gZGF0ZUZyb21NcyAmJiBkYXRlTXMgPCBkYXRlVG9Ncykge1xuICAgICAgbW9kID0gY2xzLnNlbGVjdGVkQmV0d2VlbjtcbiAgICB9IGVsc2UgaWYgKGRhdGVNcyA9PT0gZGF0ZUZyb21Ncykge1xuICAgICAgbW9kID0gY2xzLnNlbGVjdGVkRnJvbTtcbiAgICB9IGVsc2UgaWYgKGRhdGVNcyA9PT0gZGF0ZVRvTXMpIHtcbiAgICAgIG1vZCA9IGNscy5zZWxlY3RlZFRvO1xuICAgIH1cblxuICAgIHJldHVybiBtb2Q7XG4gIH1cbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkobW9kdWxlLmlkLCBjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgY2xzIGZyb20gJy4vY2xhc3Nlcy5qcyc7XG5cbmV4cG9ydCBjb25zdCBpbnB1dCA9IGA8YnV0dG9uIGNsYXNzPVwiJHtjbHMuaW5wdXR9XCIgZGF0YS1lbGVtPVwiaW5wdXRcIiB0eXBlPVwiYnV0dG9uXCI+XG4gIDxzcGFuXG4gICAgY2xhc3M9XCIke2Nscy5mcm9tfVwiXG4gICAgZGF0YS1lbGVtPVwiZnJvbVwiPntmcm9tfTwvc3Bhbj4gLVxuICA8c3BhblxuICAgIGNsYXNzPVwiJHtjbHMudG99XCJcbiAgICBkYXRhLWVsZW09XCJ0b1wiXG4gICAgPnt0b308L3NwYW4+XG48L2J1dHRvbj5gO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0b3IgPSBgXG48ZGl2IGNsYXNzPVwiJHtjbHMuc2VsZWN0b3J9XCIgZGF0YS1lbGVtPVwic2VsZWN0b3JcIj5cbiAgPGRpdiBjbGFzcz1cIiR7Y2xzLnNlbGVjdG9yQXJyb3d9XCI+PC9kaXY+XG4gIDxidXR0b25cbiAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICBjbGFzcz1cIiR7Y2xzLnNlbGVjdG9yQ29udHJvbH0gJHtjbHMuc2VsZWN0b3JDb250cm9sfS0tbGVmdFwiXG4gICAgZGF0YS1kaXJlY3Rpb249XCJwcmV2XCJcbiAgPjwvYnV0dG9uPlxuICA8YnV0dG9uXG4gICAgdHlwZT1cImJ1dHRvblwiXG4gICAgY2xhc3M9XCIke2Nscy5zZWxlY3RvckNvbnRyb2x9ICR7Y2xzLnNlbGVjdG9yQ29udHJvbH0tLXJpZ2h0XCJcbiAgICBkYXRhLWRpcmVjdGlvbj1cIm5leHRcIlxuICA+PC9idXR0b24+XG4gIDxkaXYgY2xhc3M9XCIke2Nscy5jYWxlbmRhcnN9XCI+PC9kaXY+XG48L2Rpdj5cbmA7XG5cbmV4cG9ydCBjb25zdCBjYWxlbmRhciA9IGBcbjxkaXYgY2xhc3M9XCIke2Nscy5jYWxlbmRhcn1cIj5cbiAgPGRpdiBjbGFzcz1cIiR7Y2xzLm1vbnRoSW5kaWNhdG9yfVwiPlxuICAgIDx0aW1lIGRhdGV0aW1lPVwie21vbnRofVwiPnttb250aH08L3RpbWU+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiJHtjbHMuZGF5T2ZXZWVrfVwiPlxuICAgIHt3ZWVrZGF5c31cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCIke2Nscy5kYXRlR3JpZH1cIj5cbiAgICB7ZGF5c31cbiAgPC9kaXY+XG48L2Rpdj5cbmA7XG5cbmV4cG9ydCBjb25zdCBkYXkgPSBgXG48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiR7Y2xzLmNlbGx9IHttb2R9XCIgZGF0YS12YWx1ZT1cIntkYXRlVGltZX1cIiBzdHlsZT1cIntzdHlsZX1cIj57ZGF0ZU51bX08L2J1dHRvbj5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5wdXQsXG4gIHNlbGVjdG9yLFxuICBjYWxlbmRhcixcbiAgZGF5XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBlbGVtOiAnc29ydGFibGUtdGFibGUnLFxuICB0YWJsZTogJ3NvcnRhYmxlLXRhYmxlX190YWJsZScsXG4gIHRoZWFkOiAnc29ydGFibGUtdGFibGVfX3RoZWFkJyxcbiAgaGVhZGVyOiAnc29ydGFibGUtdGFibGVfX2hlYWRlcicsXG4gIHJvdzogJ3NvcnRhYmxlLXRhYmxlX19yb3cnLFxuICBjZWxsOiAnc29ydGFibGUtdGFibGVfX2NlbGwnLFxuICBjZWxsRXJyb3I6ICdzb3J0YWJsZS10YWJsZV9fY2VsbC0tZXJyb3InLFxuICBjZWxsU29ydGVyOiAnc29ydGFibGUtdGFibGVfX2NlbGwtLXNvcnRlcicsXG4gIGltZzogJ3NvcnRhYmxlLXRhYmxlX19pbWFnZScsXG4gIGltZ1dyYXBwZXI6ICdzb3J0YWJsZS10YWJsZV9faW1hZ2Utd3JhcHBlcicsXG4gIHByZXZpZXc6ICdzb3J0YWJsZS10YWJsZV9fcHJldmlldycsXG4gIGxpbms6ICdzb3J0YWJsZS10YWJsZV9fbGluaycsXG4gIGNhdGVnb3J5OiAnc29ydGFibGUtdGFibGVfX2NhdGVnb3J5JyxcbiAgdG9vbHRpcENhdGVnb3J5OiAnc29ydGFibGUtdGFibGVfX3Rvb2x0aXAtY2F0ZWdvcnknLFxuICB0b29sdGlwU3ViY2F0ZWdvcnk6ICdzb3J0YWJsZS10YWJsZV9fdG9vbHRpcC1zdWJjYXRlZ29yeSdcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIDA6ICdkZXNjJyxcbiAgMTogJ2FzYydcbn07XG4iLCJpbXBvcnQgeyBmb3JtYXRUb3RhbCwgZXNjYXBlSFRNTCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvaW5kZXguanMnO1xuaW1wb3J0IHN0YXR1c1RleHQgZnJvbSAnLi9zdGF0dXNUZXh0LmpzJztcbmltcG9ydCBjbHMgZnJvbSAnLi9jbGFzc2VzLmpzJztcblxuLy8gSW5mbyAmIHNvcnRpbmcgbWV0aG9kcyBmb3IgdGFibGUgY29sdW1uc1xuZXhwb3J0IGRlZmF1bHQge1xuICBpbWFnZXM6IHtcbiAgICB0aXRsZTogJ0ltYWdlJyxcbiAgICByZW5kZXIgKHsgaW1hZ2VzIH0pIHtcbiAgICAgIGlmICghaW1hZ2VzIHx8ICFpbWFnZXNbMF0udXJsKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNyYyA9IGltYWdlc1swXS51cmw7XG4gICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke2Nscy5pbWdXcmFwcGVyfVwiPlxuICAgICAgPGltZyBzcmM9XCIke3NyY31cIiBjbGFzcz1cIiR7Y2xzLmltZ31cIj5cbiAgICAgIDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7c3JjfSlcIiBjbGFzcz1cIiR7Y2xzLnByZXZpZXd9XCI+PHNwYW4+XG4gICAgICA8ZGl2PmA7XG4gICAgfSxcbiAgICBjb21wYXJlOiBudWxsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgdGl0bGU6ICdOYW1lJyxcbiAgICByZW5kZXIgKHsgdGl0bGUsIGlkIH0pIHtcbiAgICAgIHJldHVybiBgXG4gICAgICAke3RpdGxlfVxuICAgICAgPGEgY2xhc3M9XCIke2Nscy5saW5rfVwiIGhyZWY9XCIvcHJvZHVjdHMvJHtpZH1cIj48L2E+XG4gICAgICBgO1xuICAgIH0sXG4gICAgY29tcGFyZSAoYSwgYikge1xuICAgICAgcmV0dXJuIGEudGl0bGUubG9jYWxlQ29tcGFyZShiLnRpdGxlKTtcbiAgICB9XG4gIH0sXG4gIHN1YmNhdGVnb3J5OiB7XG4gICAgdGl0bGU6ICdDYXRlZ29yeScsXG4gICAgcmVuZGVyICh7IHN1YmNhdGVnb3J5IH0pIHtcbiAgICAgIGNvbnN0IGNhdGVnb3J5ID0gc3ViY2F0ZWdvcnkuY2F0ZWdvcnk7XG4gICAgICBjb25zdCB0b290aXBDb250ZW50ID0gYDxzcGFuIGNsYXNzPVwiJHtjbHMudG9vbHRpcENhdGVnb3J5fVwiPiR7Y2F0ZWdvcnkudGl0bGV9PC9zcGFuPi88c3BhbiBjbGFzcz1cIiR7Y2xzLnRvb2x0aXBTdWJjYXRlZ29yeX1cIj4ke3N1YmNhdGVnb3J5LnRpdGxlfTwvc3Bhbj5gO1xuICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cIiR7Y2xzLmNhdGVnb3J5fVwiIGRhdGEtdG9vbHRpcC1jb250ZW50PVwiJHtlc2NhcGVIVE1MKHRvb3RpcENvbnRlbnQpfVwiPiR7c3ViY2F0ZWdvcnkudGl0bGV9PC9zcGFuPmA7XG4gICAgfSxcbiAgICBjb21wYXJlIChhLCBiKSB7XG4gICAgICAvLyBTb3J0aW5nIGJ5IHJ1c3NpYW4gdGl0bGVzXG4gICAgICBjb25zdCBhQ2F0TmFtZSA9IGEuc3ViY2F0ZWdvcnkudGl0bGU7XG4gICAgICBjb25zdCBiQ2F0TmFtZSA9IGIuc3ViY2F0ZWdvcnkudGl0bGU7XG4gICAgICByZXR1cm4gYUNhdE5hbWUubG9jYWxlQ29tcGFyZShiQ2F0TmFtZSk7XG4gICAgfVxuICB9LFxuICBxdWFudGl0eToge1xuICAgIHRpdGxlOiAnUXVhbnRpdHknLFxuICAgIHJlbmRlciAoeyBxdWFudGl0eSB9KSB7XG4gICAgICByZXR1cm4gcXVhbnRpdHk7XG4gICAgfSxcbiAgICBjb21wYXJlIChhLCBiKSB7XG4gICAgICByZXR1cm4gYS5xdWFudGl0eSAtIGIucXVhbnRpdHk7XG4gICAgfVxuICB9LFxuICBwcmljZToge1xuICAgIHRpdGxlOiAnUHJpY2UnLFxuICAgIHJlbmRlciAoeyBwcmljZSB9KSB7XG4gICAgICByZXR1cm4gZm9ybWF0VG90YWwocHJpY2UpO1xuICAgIH0sXG4gICAgY29tcGFyZSAoYSwgYikge1xuICAgICAgcmV0dXJuIGEucHJpY2UgLSBiLnByaWNlO1xuICAgIH1cbiAgfSxcbiAgc3RhdHVzOiB7XG4gICAgdGl0bGU6ICdTdGF0dXMnLFxuICAgIHJlbmRlciAoeyBzdGF0dXMgfSkge1xuICAgICAgcmV0dXJuIHN0YXR1c1RleHRbc3RhdHVzXTtcbiAgICB9LFxuICAgIGNvbXBhcmUgKGEsIGIpIHtcbiAgICAgIHJldHVybiBhLnN0YXR1cyAtIGIuc3RhdHVzO1xuICAgIH1cbiAgfVxufTtcbiIsImltcG9ydCBkaXJlY3Rpb25zIGZyb20gJy4vZGlyZWN0aW9ucy5qcyc7XG5cbmV4cG9ydCBjb25zdCBnZXREaXJlY3Rpb25UZXh0ID0gaXNBc2MgPT4ge1xuICByZXR1cm4gZGlyZWN0aW9uc1sraXNBc2NdO1xufTtcbiIsImltcG9ydCBUb29sdGlwcyBmcm9tICcuLi9Ub29sdGlwcy9pbmRleC5qcyc7XG5pbXBvcnQgY2xzIGZyb20gJy4vY2xhc3Nlcy5qcyc7XG5pbXBvcnQgc3RhdHVzVGV4dCBmcm9tICcuL3N0YXR1c1RleHQuanMnO1xuaW1wb3J0IGZpZWxkcyBmcm9tICcuL2ZpZWxkcy5qcyc7XG5pbXBvcnQgeyBmZXRjaEpzb24sIHRocm90dGxlIH0gZnJvbSAnLi4vLi4vaGVscGVycy9pbmRleC5qcyc7XG5pbXBvcnQgeyBnZXREaXJlY3Rpb25UZXh0IH0gZnJvbSAnLi9oZWxwZXJzLmpzJztcbmltcG9ydCBQYWdlTWVzc2FnZSBmcm9tICcuLi9QYWdlTWVzc2FnZS9pbmRleC5qcyc7XG5cbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvcnRhYmxlVGFibGUgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc29ydGluZyA9IHtcbiAgICAgIGN1cnJlbnQ6IG51bGwsXG4gICAgICBpc0FzYzogdHJ1ZVxuICAgIH07XG5cbiAgICB0aGlzLnBhZ2UgPSB7XG4gICAgICBpdGVtczogMjAsXG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgaXNEYXRhRW5kZWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIHRoaXMuYXBpVXJsID0gcHJvY2Vzcy5lbnYuQVBJX1VSTCB8fCAnaHR0cHM6Ly9jb3Vyc2UtanMuamF2YXNjcmlwdC5ydSc7XG5cbiAgICB0aGlzLmNoYW5nZURhdGUgPSB0aGlzLmNoYW5nZURhdGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFzeW5jIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcbiAgICBjb25zdCB7XG4gICAgICB1cmwsXG4gICAgICBmaWVsZHNMaXN0LFxuICAgICAgb3JkZXJGaWVsZCxcbiAgICAgIG9yZGVyRGlyZWN0aW9uLFxuICAgICAgaXNEeW5hbWljLFxuICAgICAgZnJvbSxcbiAgICAgIHRvXG4gICAgfSA9IHRoaXMuZGF0YXNldDtcblxuICAgIHRoaXMuZGF0ZXMgPSB7XG4gICAgICBmcm9tLFxuICAgICAgdG9cbiAgICB9O1xuXG4gICAgdGhpcy51cmwgPSB0aGlzLmFwaVVybCArIHVybDtcbiAgICB0aGlzLmZpZWxkc0xpc3QgPSBKU09OLnBhcnNlKGZpZWxkc0xpc3QucmVwbGFjZSgvJy9nLCAnXCInKSk7XG4gICAgdGhpcy5pc0R5bmFtaWMgPSAraXNEeW5hbWljO1xuICAgIHRoaXMub3JkZXIgPSB7XG4gICAgICBmaWVsZDogb3JkZXJGaWVsZCxcbiAgICAgIGRpcmVjdGlvbjogb3JkZXJEaXJlY3Rpb25cbiAgICB9O1xuICAgIHRoaXMuaW5pdFRhYmxlID0gdGhpcy5pbml0VGFibGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMub3JkZXIgJiYgdGhpcy5vcmRlci5kaXJlY3Rpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zb3J0aW5nLmlzQXNjID0gdGhpcy5vcmRlci5kaXJlY3Rpb247XG4gICAgfVxuXG4gICAgdGhpcy5mZXRjaFVybCA9IHRoaXMuZ2V0RmV0Y2hVcmwoKTtcbiAgICAvLyBUcnkgdG8gdGhyb3R0bGUgbG9hZGluZyBvbiBzY3JvbGxcbiAgICB0aGlzLm9uQm9keVNjcm9sbFRocm90dGxlID0gdGhyb3R0bGUodGhpcy5vbkJvZHlTY3JvbGwsIHRoaXMsIDUwMCk7XG5cbiAgICB0aGlzLmluaXRUYWJsZSgpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlRGF0ZScsIHRoaXMuY2hhbmdlRGF0ZSk7XG4gIH1cblxuICBhc3luYyBsb2FkRGF0YSAoKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMudGFibGUuZGF0YXNldC5sb2FkaW5nID0gMTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB0YWJsZURhdGEgPSBhd2FpdCBmZXRjaEpzb24odGhpcy5mZXRjaFVybCk7XG5cbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnRhYmxlLmRhdGFzZXQubG9hZGluZyA9IDA7XG5cbiAgICAgIHJldHVybiB0YWJsZURhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIFNob3cgZXJyb3IgbWVzc2FnZSB0byB1c2VyXG4gICAgICBjb25zdCBtZXNzYWdlID0gbmV3IFBhZ2VNZXNzYWdlKHsgZXJyb3IgfSk7XG4gICAgICB0aGlzLnRhYmxlLmRhdGFzZXQubG9hZGluZyA9IDA7XG5cbiAgICAgIHRoaXMudEJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAnYmVmb3JlRW5kJyxcbiAgICAgICAgYDx0ciBjbGFzcz1cIiR7Y2xzLnJvd31cIj48dGQgY2xhc3M9XCIke2Nscy5jZWxsRXJyb3J9XCI+JHttZXNzYWdlLmVsZW0ub3V0ZXJIVE1MfTwvdHI+YFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBpbml0VGFibGUgKCkge1xuICAgIHRoaXMuY3JlYXRlTGF5b3V0KCk7XG4gICAgdGhpcy5hZGRFbGVtSGVhZGVyKCk7XG4gICAgdGhpcy5hZGRUYWJsZUV2ZW50cygpO1xuXG4gICAgdGhpcy5maWxsVEJvZHkoKTtcbiAgfVxuXG4gIGFzeW5jIGZpbGxUQm9keSAoKSB7XG4gICAgaWYgKHRoaXMucGFnZS5pc0RhdGFFbmRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudGFibGVSb3dzID0gYXdhaXQgdGhpcy5sb2FkRGF0YSgpO1xuXG4gICAgLy8gTGFzdCBwYWdlXG4gICAgaWYgKHRoaXMudGFibGVSb3dzLmxlbmd0aCA8IHRoaXMucGFnZS5pdGVtcykge1xuICAgICAgdGhpcy5wYWdlLmlzRGF0YUVuZGVkID0gdHJ1ZTtcblxuICAgICAgaWYgKHRoaXMudGFibGVSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzRHluYW1pYyAmJiB0aGlzLm9yZGVyICYmIHRoaXMub3JkZXIuZmllbGQpIHtcbiAgICAgIHRoaXMuc29ydFJvd3ModGhpcy5vcmRlci5maWVsZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJUQm9keSgpO1xuICB9XG5cbiAgZ2V0RmV0Y2hVcmwgKCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIHN0YXJ0OiB0aGlzLnBhZ2UuY3VycmVudCAqIHRoaXMucGFnZS5pdGVtcyxcbiAgICAgIGVuZDogKHRoaXMucGFnZS5jdXJyZW50ICsgMSkgKiB0aGlzLnBhZ2UuaXRlbXMsXG4gICAgICBzb3J0OiB0aGlzLm9yZGVyLmZpZWxkLFxuICAgICAgb3JkZXI6IGdldERpcmVjdGlvblRleHQodGhpcy5zb3J0aW5nLmlzQXNjKVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5kYXRlcyAmJiB0aGlzLmRhdGVzLmZyb20pIHtcbiAgICAgIHBhcmFtcy5mcm9tID0gdGhpcy5kYXRlcy5mcm9tO1xuICAgICAgcGFyYW1zLnRvID0gdGhpcy5kYXRlcy50bztcbiAgICB9XG5cbiAgICBsZXQgcGFyYW1zU3RyID0gJyc7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICBsZXQgcHJlZml4ID0gJ18nO1xuICAgICAgaWYgKGtleSA9PT0gJ2Zyb20nIHx8IGtleSA9PT0gJ3RvJykge1xuICAgICAgICBwcmVmaXggPSAnJztcbiAgICAgIH1cblxuICAgICAgcGFyYW1zU3RyICs9IGAmJHtwcmVmaXh9JHtrZXl9PSR7cGFyYW1zW2tleV19YDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudXJsICsgcGFyYW1zU3RyO1xuICB9XG5cbiAgY3JlYXRlTGF5b3V0ICgpIHtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoY2xzLmVsZW0pO1xuICAgIHRoaXMudGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgIHRoaXMudGFibGUuY2xhc3NMaXN0LmFkZChjbHMudGFibGUpO1xuICAgIHRoaXMudEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xuICAgIHRoaXMudGFibGUuYXBwZW5kKHRoaXMudEJvZHkpO1xuICAgIHRoaXMudGFibGUuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgJ2JlZm9yZUVuZCcsXG4gICAgICBgPHRmb290Pjx0cj48dGQgY29sc3Bhbj1cIiR7dGhpcy5maWVsZHNMaXN0Lmxlbmd0aH1cIj48ZGl2IGNsYXNzPVwic3Bpbm5lclwiPjwvZGl2PjwvdGQ+PC90cj48L3Rmb290PmBcbiAgICApO1xuXG4gICAgdGhpcy5hcHBlbmQodGhpcy50YWJsZSk7XG4gIH1cblxuICAvLyBGaWxsIHRhYmxlIGhlYWRlciB3aXRoIGNvbnRlbnRcbiAgYWRkRWxlbUhlYWRlciAoKSB7XG4gICAgbGV0IGhlYWRlckNvbnRlbnQgPSAnJztcblxuICAgIHRoaXMuZmllbGRzTGlzdC5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgIGxldCB0aENsYXNzID0gY2xzLmNlbGw7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBzb3J0ZXI6ICcnLFxuICAgICAgICBzb3J0RGlyZWN0aW9uOiAnJ1xuICAgICAgfTtcbiAgICAgIGlmIChmaWVsZHNbZmllbGRdLmNvbXBhcmUpIHtcbiAgICAgICAgdGhDbGFzcyArPSBgICR7Y2xzLmNlbGxTb3J0ZXJ9YDtcbiAgICAgICAgZGF0YS5zb3J0ZXIgPSAnZGF0YS1zb3J0ZXI9XCIxXCInO1xuICAgICAgfVxuICAgICAgaWYgKGZpZWxkID09PSB0aGlzLm9yZGVyLmZpZWxkKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGdldERpcmVjdGlvblRleHQodGhpcy5zb3J0aW5nLmlzQXNjKTtcbiAgICAgICAgZGF0YS5zb3J0RGlyZWN0aW9uID0gYGRhdGEtc29ydC1kaXJlY3Rpb249XCIke2RpcmVjdGlvbn1cImA7XG4gICAgICB9XG4gICAgICBoZWFkZXJDb250ZW50ICs9IGA8dGggY2xhc3M9XCIke3RoQ2xhc3N9XCJcbiAgICAgICAgZGF0YS1uYW1lPVwiJHtmaWVsZH1cIlxuICAgICAgICAke2RhdGEuc29ydGVyfVxuICAgICAgICAke2RhdGEuc29ydERpcmVjdGlvbn1cbiAgICAgICAgPiR7ZmllbGRzW2ZpZWxkXS50aXRsZX08L3RoPmA7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0aGVhZFN0ciA9IGA8dGhlYWQgY2xhc3M9XCIke2Nscy50aGVhZH1cIj48dHIgY2xhc3M9XCIke2Nscy5oZWFkZXJ9ICR7Y2xzLnJvd31cIj5cbiAgICAgICR7aGVhZGVyQ29udGVudH1cbiAgICA8L3RyPjwvdGhlYWQ+YDtcblxuICAgIHRoaXMudGFibGUuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlckJlZ2luJywgdGhlYWRTdHIpO1xuXG4gICAgdGhpcy5zb3J0aW5nLmN1cnJlbnQgPSB0aGlzLnRhYmxlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNvcnQtZGlyZWN0aW9uXScpO1xuICB9XG5cbiAgLy8gU29ydGVyXG4gIHNvcnRlck9uQ2xpY2sgKHRoKSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aC5kYXRhc2V0O1xuXG4gICAgaWYgKHRoLmRhdGFzZXQuc29ydERpcmVjdGlvbikge1xuICAgICAgdGhpcy5zb3J0aW5nLmlzQXNjID0gIXRoaXMuc29ydGluZy5pc0FzYztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuc29ydGluZy5jdXJyZW50KSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNvcnRpbmcuY3VycmVudC5kYXRhc2V0LnNvcnREaXJlY3Rpb247XG4gICAgICB9XG4gICAgICB0aGlzLnNvcnRpbmcuaXNBc2MgPSB0cnVlO1xuICAgICAgdGhpcy5zb3J0aW5nLmN1cnJlbnQgPSB0aDtcbiAgICB9XG5cbiAgICB0aC5kYXRhc2V0LnNvcnREaXJlY3Rpb24gPSBnZXREaXJlY3Rpb25UZXh0KHRoaXMuc29ydGluZy5pc0FzYyk7XG5cbiAgICBpZiAodGhpcy5pc0R5bmFtaWMpIHtcbiAgICAgIHRoaXMuc29ydFJvd3NEeW5hbWljKG5hbWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc29ydFJvd3MobmFtZSk7XG4gIH1cblxuICAvLyBTb3J0aW5nXG4gIHNvcnRSb3dzIChmaWVsZCkge1xuICAgIHRoaXMudGFibGVSb3dzLnNvcnQoZmllbGRzW2ZpZWxkXS5jb21wYXJlKTtcblxuICAgIGlmICghdGhpcy5zb3J0aW5nLmlzQXNjKSB7XG4gICAgICB0aGlzLnRhYmxlUm93cy5yZXZlcnNlKCk7XG4gICAgfVxuXG4gICAgdGhpcy50Qm9keS5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLnJlbmRlclRCb2R5KCk7XG4gIH1cblxuICAvLyBTb3J0aW5nXG4gIHNvcnRSb3dzRHluYW1pYyAoZmllbGQpIHtcbiAgICB0aGlzLm9yZGVyLmZpZWxkID0gZmllbGQ7XG4gICAgdGhpcy5wYWdlLmN1cnJlbnQgPSAwO1xuICAgIHRoaXMucGFnZS5pc0RhdGFFbmRlZCA9IGZhbHNlO1xuICAgIHRoaXMuZmV0Y2hVcmwgPSB0aGlzLmdldEZldGNoVXJsKCk7XG4gICAgdGhpcy50Qm9keS5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLmZpbGxUQm9keSgpO1xuICB9XG5cbiAgLy8gQWRkaW5nIGRlbGVnYXRlZCBldmVudHMgdG8gdGFibGVcbiAgYWRkVGFibGVFdmVudHMgKCkge1xuICAgIHRoaXMudGFibGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vbkJvZHlTY3JvbGxUaHJvdHRsZSk7XG4gICAgdGhpcy50b29sdGlwcyA9IG5ldyBUb29sdGlwcyh7IGVsZW06IHRoaXMgfSk7XG4gIH1cblxuICAvLyBIYW5kbGVzIGFsbCBldmVudHMgZm9yIHRhYmxlXG4gIGhhbmRsZUV2ZW50ICgpIHtcbiAgICAvLyBTb3J0aW5nIGV2ZW50c1xuICAgIGlmIChldmVudC50YXJnZXQuZGF0YXNldC5zb3J0ZXIpIHtcbiAgICAgIHRoaXMuc29ydGVyT25DbGljayhldmVudC50YXJnZXQpO1xuICAgIH1cbiAgfVxuXG4gIG9uQm9keVNjcm9sbCAoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2FkaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaHRtbENvb3JkcyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBzY3JvbGxEZWx0YSA9IGh0bWxDb29yZHMuYm90dG9tIC0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgaWYgKHNjcm9sbERlbHRhIDwgMTAwKSB7XG4gICAgICB0aGlzLnBhZ2UuY3VycmVudCsrO1xuICAgICAgdGhpcy5mZXRjaFVybCA9IHRoaXMuZ2V0RmV0Y2hVcmwoKTtcbiAgICAgIHRoaXMuZmlsbFRCb2R5KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gRmlsbCB0YWJsZSBib2R5IGNlbGxzIHdpdGggY29udGVudFxuICByZW5kZXJUQm9keSAoKSB7XG4gICAgdGhpcy5wYWdlWU9mZnNldCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblxuICAgIHRoaXMudGFibGVSb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgIGxldCByb3dDb250ZW50ID0gJyc7XG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gcm93O1xuXG4gICAgICB0aGlzLmZpZWxkc0xpc3QuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgIGNvbnN0IHRkQ2xhc3NlcyA9IFtcbiAgICAgICAgICBjbHMuY2VsbCxcbiAgICAgICAgICBgJHtjbHMuY2VsbH0tLSR7ZmllbGR9YCxcbiAgICAgICAgICBgJHtjbHMuY2VsbH0tLSR7c3RhdHVzVGV4dFtzdGF0dXNdLnRvTG93ZXJDYXNlKCl9YFxuICAgICAgICBdO1xuICAgICAgICBjb25zdCByZW5kZXJGaWVsZCA9IGZpZWxkc1tmaWVsZF0ucmVuZGVyO1xuICAgICAgICBjb25zdCByZW5kZXJlZENvbnRlbnQgPSByZW5kZXJGaWVsZChyb3cpO1xuXG4gICAgICAgIGlmIChyZW5kZXJlZENvbnRlbnQpIHtcbiAgICAgICAgICByb3dDb250ZW50ICs9IGA8dGQgY2xhc3M9XCIke3RkQ2xhc3Nlcy5qb2luKFxuICAgICAgICAgICAgJyAnXG4gICAgICAgICAgKX1cIj4ke3JlbmRlcmVkQ29udGVudH08L3RkPmA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnRCb2R5Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgJ2JlZm9yZUVuZCcsXG4gICAgICAgIGA8dHIgY2xhc3M9XCIke2Nscy5yb3d9XCI+JHtyb3dDb250ZW50fTwvdHI+YFxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLnBhZ2VZT2Zmc2V0KSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgdGhpcy5wYWdlWU9mZnNldCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlRGF0ZSAoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50LmRldGFpbCB8fCAhZXZlbnQuZGV0YWlsLmRhdGVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kYXRlcyA9IGV2ZW50LmRldGFpbC5kYXRlcztcbiAgICB0aGlzLmZldGNoVXJsID0gdGhpcy5nZXRGZXRjaFVybCgpO1xuICAgIHRoaXMudEJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5maWxsVEJvZHkoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAwOiAnRGlzYWJsZWQnLFxuICAxOiAnRW5hYmxlZCdcbn07XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKG1vZHVsZS5pZCwgY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiZXhwb3J0IGRlZmF1bHQge1xuICBlbGVtOiAndG9vbHRpcHMtY29udGFpbmVyJyxcbiAgZGltbWVkOiAndG9vbHRpcHMtY29udGFpbmVyLS1kaW1tZWQnLFxuICB0b29sdGlwOiAndG9vbHRpcCdcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vaGVscGVycy9pbmRleC5qcyc7XG5pbXBvcnQgY2xzIGZyb20gJy4vY2xhc3Nlcy5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwcyB7XG4gIGNvbnN0cnVjdG9yICh7IGVsZW0sIGRpbVNpYmxpbmdzIH0pIHtcbiAgICB0aGlzLmVsZW0gPSBlbGVtO1xuICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKGNscy5lbGVtKTtcbiAgICB0aGlzLmRpbVNpYmxpbmdzID0gZGltU2libGluZ3M7XG5cbiAgICB0aGlzLnRvb2x0aXAgPSBjcmVhdGVFbGVtZW50KGA8ZGl2IGNsYXNzPVwiJHtjbHMudG9vbHRpcH1cIj48L2Rpdj5gKTtcbiAgICB0aGlzLmVsZW0uYXBwZW5kKHRoaXMudG9vbHRpcCk7XG5cbiAgICB0aGlzLmxpc3RNb3VzZU1vdmUgPSB0aGlzLmxpc3RNb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxpc3RNb3VzZU91dCA9IHRoaXMubGlzdE1vdXNlT3V0LmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmVsZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5saXN0TW91c2VNb3ZlKTtcbiAgICB0aGlzLmVsZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMubGlzdE1vdXNlT3V0KTtcbiAgfVxuXG4gIGxpc3RNb3VzZU1vdmUgKCkge1xuICAgIGlmICghZXZlbnQudGFyZ2V0LmRhdGFzZXQudG9vbHRpcENvbnRlbnQpIHtcbiAgICAgIHRoaXMuaGlkZVRvb2x0aXAoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IHRvb2x0aXBDb250ZW50IH0gPSBldmVudC50YXJnZXQuZGF0YXNldDtcbiAgICB0aGlzLnRvb2x0aXAuaW5uZXJIVE1MID0gdG9vbHRpcENvbnRlbnQ7XG4gICAgdGhpcy50b29sdGlwLmRhdGFzZXQudmlzaWJsZSA9IDE7XG5cbiAgICAvLyBQYXJlbnQgY29udGFpbmVyIGNvb3Jkc1xuICAgIHRoaXMuZWxlbUNvb3JkcyA9IHRoaXMuZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBjb29yZHMgPSB7XG4gICAgICB4OiBldmVudC5jbGllbnRYIC0gdGhpcy5lbGVtQ29vcmRzLngsXG4gICAgICB5OiBldmVudC5jbGllbnRZIC0gdGhpcy5lbGVtQ29vcmRzLnlcbiAgICB9O1xuXG4gICAgdGhpcy50b29sdGlwLnN0eWxlID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlKCR7Y29vcmRzLnh9cHgsICR7Y29vcmRzLnl9cHgpYDtcblxuICAgIC8vIEZpeCBjdXR0aW5nIGJ5IHdpbmRvd1xuICAgIHRoaXMudG9vbHRpcENvb3JkcyA9IHRoaXMudG9vbHRpcC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBoaWRkZW5CeVdpbmRvdyA9IHRoaXMudG9vbHRpcENvb3Jkcy5yaWdodCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcblxuICAgIGlmIChoaWRkZW5CeVdpbmRvdyA+IDApIHtcbiAgICAgIGNvb3Jkcy54IC09IGhpZGRlbkJ5V2luZG93O1xuICAgICAgdGhpcy50b29sdGlwLnN0eWxlID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlKCR7Y29vcmRzLnh9cHgsICR7Y29vcmRzLnl9cHgpYDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kaW1TaWJsaW5ncykge1xuICAgICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoY2xzLmRpbW1lZCk7XG4gICAgfVxuICB9XG5cbiAgbGlzdE1vdXNlT3V0ICgpIHtcbiAgICBpZiAoIWV2ZW50LnRhcmdldC5kYXRhc2V0LnRvb2x0aXBDb250ZW50KSB7XG4gICAgICB0aGlzLmhpZGVUb29sdGlwKCk7XG4gICAgfVxuICB9XG5cbiAgaGlkZVRvb2x0aXAgKCkge1xuICAgIHRoaXMudG9vbHRpcC5kYXRhc2V0LnZpc2libGUgPSAwO1xuICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNscy5kaW1tZWQpO1xuICB9XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKG1vZHVsZS5pZCwgY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gbmljZSBvdmVydmlldzpcbi8vIGh0dHBzOi8vZ3Jyci50ZWNoL3Bvc3RzL2NyZWF0ZS1kb20tbm9kZS1mcm9tLWh0bWwtc3RyaW5nL1xuXG4vLyBubyBJRTExXG5jb25zdCBzdXBwb3J0c1RlbXBsYXRlID0gJ2NvbnRlbnQnIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBzdXBwb3J0c1RlbXBsYXRlXG4gID8gZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICB9XG4gIDogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LmlubmVySFRNTCA9IGh0bWw7XG4gICAgICByZXR1cm4gZGl2LmZpcnN0RWxlbWVudENoaWxkO1xuICAgIH07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZW1lbnQ7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2NhcGVIVE1MIChzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZ1xuICAgIC5yZXBsYWNlKC8mL2csICcmJylcbiAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXG4gICAgLnJlcGxhY2UoLycvZywgJyYjMzk7JylcbiAgICAucmVwbGFjZSgvPC9nLCAnPCcpXG4gICAgLnJlcGxhY2UoLz4vZywgJz4nKTtcbn1cbiIsIi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2lsaWFrYW4vZGQ2YWQwZGFkYjY2MzA1NDRkMTE4N2M0Yzk0Y2NmNDBcbmltcG9ydCBub3RpZmllciBmcm9tICcuLi9saWIvbm90aWZpZXIuanMnO1xuXG4vLyBjb25zb2xlLmNsZWFyKCk7XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBmZXRjaEpTT04gKHVybCkge1xuICBsZXQgcmVzcG9uc2U7XG5cbiAgLy8gRXJyb3Igd2hpbGUgbG9hZGluZyAoYmFkIHVybCBvciBjb25uZWN0aW9uKVxuICB0cnkge1xuICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgRmV0Y2hFcnJvcihyZXNwb25zZSwgbnVsbCwgYE5ldHdvcmsgZXJyb3IgZm9yIHVybCAke3VybH1gKTtcbiAgfVxuXG4gIC8vIEJhZCByZXNwb25zZSBmcm9tIHNlcnZlclxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgbGV0IGJvZHk7XG4gICAgY29uc3Qgc3RhdHVzVGV4dCA9IHJlc3BvbnNlLnN0YXR1c1RleHQ7XG5cbiAgICB0cnkge1xuICAgICAgYm9keSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIC8vIGNhbid0IHJlcHJvZHVjZSBnZXR0aW5nIGJvZHkgd2l0aCBub3Qgb2sgc3RhdHVzXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9XG4gICAgbGV0IG1lc3NhZ2UgPSBgRXJyb3IgJHtyZXNwb25zZS5zdGF0dXN9IGZvciB1cmwgJHt1cmx9YDtcblxuICAgIGlmIChzdGF0dXNUZXh0KSB7XG4gICAgICBtZXNzYWdlICs9IGA6ICR7c3RhdHVzVGV4dH1gO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBGZXRjaEVycm9yKHJlc3BvbnNlLCBib2R5LCBtZXNzYWdlKTtcbiAgfVxuXG4gIC8vIFJlc3BvbnNlIGlzIGNvcnJlY3QsIHRyeSB0byBnZXQgZGF0YVxuICB0cnkge1xuICAgIHJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IG5ldyBGZXRjaEVycm9yKHJlc3BvbnNlLCBudWxsLCBlcnJvci5tZXNzYWdlKTtcbiAgfVxuXG4gIHJldHVybiByZXNwb25zZTtcbn1cblxuY2xhc3MgRmV0Y2hFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IgKHJlc3BvbnNlLCBib2R5LCBtZXNzYWdlKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgdGhpcy5uYW1lID0gJ0ZldGNoRXJyb3InO1xuXG4gICAgdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gIH1cbn1cblxuLy8gaGFuZGxlIHVuY2F1Z2h0IGZhaWxlZCBmZXRjaCB0aHJvdWdoXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndW5oYW5kbGVkcmVqZWN0aW9uJywgZXZlbnQgPT4ge1xuICBpZiAoZXZlbnQucmVhc29uIGluc3RhbmNlb2YgRmV0Y2hFcnJvcikge1xuICAgIG5vdGlmaWVyKGV2ZW50LnJlYXNvbi5tZXNzYWdlLCAnZXJyb3InKTtcbiAgfVxufSk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaWxsVGVtcGxhdGUgKHsgdG1wbCwgZGF0YSB9KSB7XG4gIGlmICghdG1wbCB8fCAhZGF0YSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiB0bXBsLnJlcGxhY2UoL3soW15cIl17MSx9KX0vZywgKG1hdGNoLCBzdHIpID0+IHtcbiAgICBpZiAoZGF0YVtzdHJdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBkYXRhW3N0cl07XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXREYXRlIChzdHIpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHN0cikudG9EYXRlU3RyaW5nKCk7XG4gIGNvbnN0IGRhdGFQYXJ0cyA9IGRhdGUuc3BsaXQoJyAnKTtcbiAgY29uc3QgbW9udGggPSBkYXRhUGFydHNbMV07XG4gIGNvbnN0IGRheSA9IGRhdGFQYXJ0c1syXTtcbiAgY29uc3QgeWVhciA9IGRhdGFQYXJ0c1szXTtcblxuICByZXR1cm4gYCR7bW9udGh9ICR7ZGF5fSwgJHt5ZWFyfWA7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRUb3RhbCAobnVtKSB7XG4gIGxldCBmb3JtYXR0ZWQgPSBudW07XG4gIGlmIChudW0gPj0gMTAwMCkge1xuICAgIGNvbnN0IHRhaWwgPSBudW0gJSAxMDAwO1xuICAgIGZvcm1hdHRlZCA9IGAkeyhudW0gLSB0YWlsKSAvIDEwMDB9LCR7dGFpbH1gO1xuICB9XG5cbiAgcmV0dXJuIGAkJHtmb3JtYXR0ZWR9YDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERhdGVGcm9tU3RyaW5nIChzdHIpIHtcbiAgY29uc3QgW2RheSwgbW9udGgsIHllYXJdID0gc3RyLnNwbGl0KCcvJyk7XG4gIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XG59O1xuIiwiLy8gRGlydHkgd2F5IHRvIGdldCB3ZWVrZGF5cyBpbiBjdXJyZW50IGxhbmdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdlZWtEYXlzICh0YWcpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKDE5NzAsIDAsIDUpO1xuICBsZXQgd2Vla2RheXNTdHIgPSAnJztcbiAgbGV0IGNvdW50ZXIgPSAwO1xuXG4gIHdoaWxlIChjb3VudGVyIDwgNykge1xuICAgIGNvbnN0IGRheW5hbWUgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKCdkZWZhdWx0JywgeyB3ZWVrZGF5OiAnbmFycm93JyB9KTtcbiAgICB3ZWVrZGF5c1N0ciArPSBgPCR7dGFnfT4ke2RheW5hbWV9PC8ke3RhZ30+YDtcbiAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyAxKTtcbiAgICBjb3VudGVyKys7XG4gIH1cblxuICByZXR1cm4gd2Vla2RheXNTdHI7XG59XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnQuanMnO1xuaW1wb3J0IGVzY2FwZUhUTUwgZnJvbSAnLi9lc2NhcGVIVE1MLmpzJztcbmltcG9ydCBmaWxsVGVtcGxhdGUgZnJvbSAnLi9maWxsVGVtcGxhdGUuanMnO1xuaW1wb3J0IGZvcm1hdERhdGUgZnJvbSAnLi9mb3JtYXREYXRlLmpzJztcbmltcG9ydCBmb3JtYXRUb3RhbCBmcm9tICcuL2Zvcm1hdFRvdGFsLmpzJztcbmltcG9ydCBnZXREYXRlRnJvbVN0cmluZyBmcm9tICcuL2dldERhdGVGcm9tU3RyaW5nLmpzJztcbmltcG9ydCBnZXRXZWVrRGF5cyBmcm9tICcuL2dldFdlZWtEYXlzLmpzJztcbmltcG9ydCB0aHJvdHRsZSBmcm9tICcuL3Rocm90dGxlLmpzJztcbmltcG9ydCBmZXRjaEpzb24gZnJvbSAnLi9mZXRjaEpzb24uanMnO1xuXG5leHBvcnQge1xuICBjcmVhdGVFbGVtZW50LFxuICBlc2NhcGVIVE1MLFxuICBmaWxsVGVtcGxhdGUsXG4gIGZvcm1hdERhdGUsXG4gIGZvcm1hdFRvdGFsLFxuICBnZXREYXRlRnJvbVN0cmluZyxcbiAgZ2V0V2Vla0RheXMsXG4gIHRocm90dGxlLFxuICBmZXRjaEpzb25cbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aHJvdHRsZSAoZnVuYywgY29udGV4dCwgdGltZW91dCkge1xuICBsZXQgYXJncztcbiAgbGV0IGlzV2FpdGluZyA9IGZhbHNlO1xuICBsZXQgaXNGaXJzdENhbGwgPSB0cnVlO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgYXJncyA9IGFyZ3VtZW50cztcblxuICAgIGlmIChpc0ZpcnN0Q2FsbCkge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCAuLi5hcmdzKTtcbiAgICAgIGlzRmlyc3RDYWxsID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFpc1dhaXRpbmcpIHtcbiAgICAgIGlzV2FpdGluZyA9IHRydWU7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIC4uLmFyZ3MpO1xuICAgICAgICBpc1dhaXRpbmcgPSBmYWxzZTtcbiAgICAgIH0sIHRpbWVvdXQpO1xuICAgIH1cbiAgfTtcbn1cbiIsImltcG9ydCByZW5kZXJQYWdlIGZyb20gJy4vcmVuZGVyUGFnZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLnJvdXRlcyA9IFtdO1xuXG4gICAgdGhpcy5kb2N1bWVudENsaWNrID0gdGhpcy5kb2N1bWVudENsaWNrLmJpbmQodGhpcyk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZG9jdW1lbnRDbGljayk7XG4gIH1cblxuICBzdGF0aWMgaW5zdGFuY2UgKCkge1xuICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFJvdXRlcigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gIH1cblxuICBhZGRSb3V0ZSAocGF0dGVybiwgcGF0aCkge1xuICAgIHRoaXMucm91dGVzLnB1c2goeyBwYXR0ZXJuLCBwYXRoIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0Tm90Rm91bmRQYWdlIChwYXRoKSB7XG4gICAgdGhpcy5ub3RGb3VuZFBhZ2VQYXRoID0gcGF0aDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG5hdmlnYXRlIChocmVmKSB7XG4gICAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgaHJlZik7XG4gICAgdGhpcy5yb3V0ZSgpO1xuICB9XG5cbiAgYXN5bmMgcm91dGUgKCkge1xuICAgIGNvbnN0IHN0cmlwcGVkUGF0aCA9IGNsZWFuUGF0aCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIGxldCBtYXRjaDtcblxuICAgIGZvciAoY29uc3Qgcm91dGUgb2YgdGhpcy5yb3V0ZXMpIHtcbiAgICAgIG1hdGNoID0gc3RyaXBwZWRQYXRoLm1hdGNoKHJvdXRlLnBhdHRlcm4pO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHRoaXMucGFnZSA9IGF3YWl0IHRoaXMuY2hhbmdlUGFnZShyb3V0ZS5wYXRoLCBtYXRjaCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghbWF0Y2gpIHtcbiAgICAgIHRoaXMucGFnZSA9IGF3YWl0IHRoaXMuY2hhbmdlUGFnZSh0aGlzLm5vdEZvdW5kUGFnZVBhdGgpO1xuICAgIH1cblxuICAgIC8vIGN1c3RvbSBldmVudCBoZXJlXG4gIH1cblxuICBhc3luYyBjaGFuZ2VQYWdlIChwYXRoLCBtYXRjaCkge1xuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLmRlc3Ryb3kpIHtcbiAgICAgIHRoaXMucGFnZS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy5wYWdlID0gYXdhaXQgcmVuZGVyUGFnZShwYXRoLCBtYXRjaCk7XG4gIH1cblxuICBhZGRMaXN0ZW5lciAoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgKCkgPT4gdGhpcy5yb3V0ZSgpKTtcbiAgICB0aGlzLnJvdXRlKCk7XG4gIH1cblxuICBkb2N1bWVudENsaWNrIChldmVudCkge1xuICAgIGNvbnN0IGxpbmsgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnYScpO1xuXG4gICAgaWYgKCFsaW5rKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaHJlZiA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG5cbiAgICBpZiAoaHJlZiAmJiBocmVmLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMubmF2aWdhdGUoaHJlZik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFuUGF0aCAocGF0aCkge1xuICByZXR1cm4gZGVjb2RlVVJJKHBhdGgpXG4gICAgLnJlcGxhY2UoL15cXC98XFwvJC8sICcnKVxuICAgIC5yZXBsYWNlKC9cXD8uKiQvLCAnJylcbiAgICAucmVwbGFjZSgvIy4qJC8sICcnKTtcbn1cbiIsImltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9Ob3RpZmljYXRpb24vaW5kZXguanMnO1xuXG5jb25zdCBub3RpZkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubm90aWZDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbm90aWZpY2F0aW9ucycpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmQobm90aWZDb250YWluZXIpO1xuXG5sZXQgbm90aWZpY2F0aW9ucyA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBub3RpZnkgKG1lc3NhZ2UsIHR5cGUpIHtcbiAgY29uc3Qgbm90aWZpY2F0aW9uID0gbmV3IE5vdGlmaWNhdGlvbih7XG4gICAgbWVzc2FnZSxcbiAgICBjb250YWluZXI6IG5vdGlmQ29udGFpbmVyLFxuICAgIHR5cGVcbiAgfSk7XG5cbiAgbm90aWZpY2F0aW9ucy5wdXNoKG5vdGlmaWNhdGlvbik7XG5cbiAgaWYgKG5vdGlmaWNhdGlvbi5lbGVtLm9mZnNldFRvcCA8IDApIHtcbiAgICBub3RpZmljYXRpb25zID0gbm90aWZpY2F0aW9ucy5maWx0ZXIobm90aWZpY2F0aW9uID0+IHtcbiAgICAgIHJldHVybiAhbm90aWZpY2F0aW9uLmlzRmluaXNoZWQ7XG4gICAgfSk7XG4gICAgbm90aWZpY2F0aW9ucy5zaGlmdCgpLmhpZGVFbGVtKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHJlbmRlclBhZ2UgKHBhdGgsIG1hdGNoKSB7XG4gIGNvbnN0IHsgZGVmYXVsdDogUGFnZSB9ID0gYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gYC4uL3BhZ2VzLyR7cGF0aH0vaW5kZXguanNgKTtcbiAgY29uc3QgcGFnZSA9IG5ldyBQYWdlKG1hdGNoKTtcbiAgY29uc3QgcmVuZGVyZWRQYWdlID0gYXdhaXQgcGFnZS5yZW5kZXIoKTtcblxuICBjb25zdCBjb250ZW50RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnRlbnRFbGVtLmlubmVySFRNTCA9ICcnO1xuICBjb250ZW50RWxlbS5hcHBlbmQocmVuZGVyZWRQYWdlKTtcbn1cbiIsInZhciBtYXAgPSB7XG5cdFwiLi9jYXRlZ29yaWVzL2luZGV4LmpzXCI6IFwiLi9zcmMvcGFnZXMvY2F0ZWdvcmllcy9pbmRleC5qc1wiLFxuXHRcIi4vZGFzaGJvYXJkL2luZGV4LmpzXCI6IFwiLi9zcmMvcGFnZXMvZGFzaGJvYXJkL2luZGV4LmpzXCIsXG5cdFwiLi9lcnJvcjQwNC9pbmRleC5qc1wiOiBcIi4vc3JjL3BhZ2VzL2Vycm9yNDA0L2luZGV4LmpzXCIsXG5cdFwiLi9wcm9kdWN0cy9lZGl0L2luZGV4LmpzXCI6IFwiLi9zcmMvcGFnZXMvcHJvZHVjdHMvZWRpdC9pbmRleC5qc1wiLFxuXHRcIi4vcHJvZHVjdHMvaW5kZXguanNcIjogXCIuL3NyYy9wYWdlcy9wcm9kdWN0cy9pbmRleC5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHQocmVxKSB7XG5cdHJldHVybiB3ZWJwYWNrQXN5bmNDb250ZXh0UmVzb2x2ZShyZXEpLnRoZW4oX193ZWJwYWNrX3JlcXVpcmVfXyk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9XG5cdFx0cmV0dXJuIG1hcFtyZXFdO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQXN5bmNDb250ZXh0UmVzb2x2ZTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vc3JjL3BhZ2VzIGVhZ2VyIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC9pbmRleFxcXFwuanMkXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgZmV0Y2hKc29uIH0gZnJvbSAnLi4vLi4vaGVscGVycy9pbmRleC5qcyc7XG5pbXBvcnQgUGFnZU1lc3NhZ2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYWdlTWVzc2FnZS9pbmRleC5qcyc7XG5cbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbmNvbnN0IGNscyA9IHtcbiAgZWxlbTogJ2NhdGVnb3JpZXMnLFxuICBsaXN0OiAnY2F0ZWdvcmllc19fbGlzdCcsXG4gIGxpc3RUb3A6ICdjYXRlZ29yaWVzX19saXN0LS10b3BjYXRlZ29yaWVzJyxcbiAgbGlzdFN1YmNhdHM6ICdjYXRlZ29yaWVzX19saXN0LS1zdWJjYXRlZ29yaWVzJyxcbiAgaXRlbTogJ2NhdGVnb3JpZXNfX2l0ZW0nLFxuICBpdGVtVG9wOiAnY2F0ZWdvcmllc19faXRlbS0tdG9wY2F0ZWdvcnknLFxuICBpdGVtU3ViOiAnY2F0ZWdvcmllc19faXRlbS0tc3ViY2F0ZWdvcnknLFxuICBpdGVtT3BlbjogJ2NhdGVnb3JpZXNfX2l0ZW0tLW9wZW4nLFxuICB0b2dnbGVyOiAnY2F0ZWdvcmllc19fdG9nZ2xlcicsXG4gIGNvdW50ZXI6ICdjYXRlZ29yaWVzX19jb3VudGVyJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5hcGlVcmwgPSBwcm9jZXNzLmVudi5BUElfVVJMIHx8ICdodHRwczovL2NvdXJzZS1qcy5qYXZhc2NyaXB0LnJ1JztcbiAgICB0aGlzLmZldGNoVXJsID0gYCR7dGhpcy5hcGlVcmx9L2FwaS9yZXN0L2NhdGVnb3JpZXM/X3NvcnQ9d2VpZ2h0Jl9yZWZzPXN1YmNhdGVnb3J5YDtcblxuICAgIHRoaXMubGlzdENsaWNrID0gdGhpcy5saXN0Q2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFzeW5jIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBjYXRlZ29yaWVzLCBtZXNzYWdlIH0gPSBhd2FpdCB0aGlzLmxvYWREYXRhKCk7XG4gICAgY29uc3QgaGVhZGVyID0gYDxoZWFkZXIgY2xhc3M9XCJwYWdlLWNvbnRlbnRfX2hlYWRlclwiPlxuICAgICAgICA8aDEgY2xhc3M9XCJwYWdlLWNvbnRlbnRfX3RpdGxlXCI+RGFzaGJvYXJkL0NhdGVnb3JpZXM8L2gxPlxuICAgICAgPC9oZWFkZXI+YDtcblxuICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChgPGRpdiBjbGFzcz1cInBhZ2UtY29udGVudFwiPlxuICAgICAgICAke2hlYWRlcn1cblxuICAgICAgICAke21lc3NhZ2UuZWxlbS5vdXRlckhUTUx9XG4gICAgICA8L2Rpdj5cbiAgICAgIGApO1xuICAgIH1cblxuICAgIGNvbnN0IGxpc3QgPSB0aGlzLmNyZWF0ZUxpc3QoY2F0ZWdvcmllcyk7XG4gICAgdGhpcy5lbGVtID0gY3JlYXRlRWxlbWVudChgPGRpdiBjbGFzcz1cInBhZ2UtY29udGVudFwiPlxuICAgICAgJHtoZWFkZXJ9XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwicGFnZS1zZWN0aW9uIGNhdGVnb3JpZXNcIj5cbiAgICAgICAgPGgyIGNsYXNzPVwicGFnZS1zZWN0aW9uX190aXRsZVwiPkNhdGVnb3JpZXM8L2gyPlxuXG4gICAgICAgICR7bGlzdH1cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5gKTtcblxuICAgIHRoaXMuYWRkRXZlbnRzKCk7XG5cbiAgICByZXR1cm4gdGhpcy5lbGVtO1xuICB9XG5cbiAgYXN5bmMgbG9hZERhdGEgKCkge1xuICAgIC8vIFRPRE86INC40L3QtNC40LrQsNGC0L7RgCDQt9Cw0LPRgNGD0LfQutC4XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBmZXRjaEpzb24odGhpcy5mZXRjaFVybCk7XG5cbiAgICAgIHJldHVybiB7IGNhdGVnb3JpZXMgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gU2hvdyBlcnJvciBtZXNzYWdlIHRvIHVzZXJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgUGFnZU1lc3NhZ2UoeyBlcnJvciB9KTtcblxuICAgICAgcmV0dXJuIHsgbWVzc2FnZSB9O1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUxpc3QgKGl0ZW1zLCBpc1N1YmNhdCA9IGZhbHNlKSB7XG4gICAgbGV0IGl0ZW1zU3RyID0gJyc7XG4gICAgbGV0IGxpc3RDbGFzcyA9IGNscy5saXN0VG9wO1xuICAgIGxldCBpdGVtQ2xhc3MgPSBjbHMuaXRlbTtcbiAgICBsZXQgaXNEcmFnZ2FibGVBdHRyID0gJyc7XG5cbiAgICBpZiAoaXNTdWJjYXQpIHtcbiAgICAgIGxpc3RDbGFzcyA9IGNscy5saXN0U3ViY2F0cztcbiAgICAgIGl0ZW1DbGFzcyArPSBgICR7Y2xzLml0ZW1TdWJ9YDtcbiAgICAgIGlzRHJhZ2dhYmxlQXR0ciA9ICdpcz1cImRyYWdnYWJsZS1saXN0XCInO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtQ2xhc3MgKz0gYCAke2Nscy5pdGVtVG9wfWA7XG4gICAgfVxuXG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgbGV0IHN1YkNhdHNMaXN0ID0gJyc7XG4gICAgICBsZXQgdGl0bGUgPSBpdGVtLnRpdGxlO1xuICAgICAgY29uc3Qgc3ViQ2F0cyA9IGl0ZW0uc3ViY2F0ZWdvcmllcztcbiAgICAgIGxldCBjb3VudGVyID0gJyc7XG5cbiAgICAgIGlmIChpc1N1YmNhdCkge1xuICAgICAgICBjb25zdCBjb3VudGVyVGV4dCA9IHRoaXMuZ2V0UGx1cmFsKGl0ZW0uY291bnQsIFsncHJvZHVjdCcsICdwcm9kdWN0cyddKTtcbiAgICAgICAgY291bnRlciA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xzLmNvdW50ZXJ9XCI+JHtjb3VudGVyVGV4dH08L3NwYW4+YDtcbiAgICAgIH1cblxuICAgICAgLy8gY29uc29sZS5sb2coaXRlbSlcblxuICAgICAgaWYgKHN1YkNhdHMpIHtcbiAgICAgICAgdGl0bGUgPSBgIDxidXR0b24gY2xhc3M9XCIke2Nscy50b2dnbGVyfVwiPiR7aXRlbS50aXRsZX08L2J1dHRvbj5gO1xuICAgICAgICBzdWJDYXRzTGlzdCA9IHRoaXMuY3JlYXRlTGlzdChzdWJDYXRzLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgaXRlbXNTdHIgKz0gYDxsaSBjbGFzcz1cIiR7aXRlbUNsYXNzfVwiPlxuICAgICAgICAke3RpdGxlfVxuICAgICAgICAke2NvdW50ZXJ9XG4gICAgICAgICR7c3ViQ2F0c0xpc3R9XG4gICAgICA8L2xpPmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGA8dWxcbiAgICAgIGNsYXNzPVwiJHtjbHMubGlzdH0gJHtsaXN0Q2xhc3N9XCIgJHtpc0RyYWdnYWJsZUF0dHJ9XG4gICAgICA+XG4gICAgICAke2l0ZW1zU3RyfVxuICAgIDwvdWw+YDtcbiAgfVxuXG4gIGFkZEV2ZW50cyAoKSB7XG4gICAgY29uc3QgbGlzdCA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKGAuJHtjbHMubGlzdFRvcH1gKTtcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5saXN0Q2xpY2spO1xuICB9XG5cbiAgbGlzdENsaWNrICgpIHtcbiAgICBjb25zdCBjb250cm9sID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoYC4ke2Nscy50b2dnbGVyfWApO1xuICAgIGlmICghY29udHJvbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1Ub3AgPSBldmVudC50YXJnZXQuY2xvc2VzdChgLiR7Y2xzLml0ZW1Ub3B9YCk7XG4gICAgaXRlbVRvcC5jbGFzc0xpc3QudG9nZ2xlKGNscy5pdGVtT3Blbik7XG4gIH1cblxuICBnZXRQbHVyYWwgKG51bSwgdmFyaWFudHMpIHtcbiAgICBsZXQgdmFyaWFudCA9IHZhcmlhbnRzWzBdO1xuICAgIGlmIChudW0gIT09IDEpIHtcbiAgICAgIHZhcmlhbnQgPSB2YXJpYW50c1sxXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYCR7bnVtfSAke3ZhcmlhbnR9YDtcbiAgfVxufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShtb2R1bGUuaWQsIGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2luZGV4LmpzJztcblxuY29uc3QgZnJvbSA9IG5ldyBEYXRlKCk7XG5mcm9tLnNldE1vbnRoKGZyb20uZ2V0TW9udGgoKSAtIDEpO1xuY29uc3QgdG8gPSBuZXcgRGF0ZSgpO1xuXG5jb25zdCBkYXRlcyA9IHtcbiAgZnJvbTogZnJvbS50b0lTT1N0cmluZygpLFxuICB0bzogdG8udG9JU09TdHJpbmcoKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBhc3luYyByZW5kZXIgKCkge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KGA8ZGl2IGNsYXNzPVwicGFnZS1jb250ZW50XCI+XG4gICAgICA8aGVhZGVyIGNsYXNzPVwicGFnZS1jb250ZW50X19oZWFkZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzPVwicGFnZS1jb250ZW50X190aXRsZVwiPkRhc2hib2FyZDwvaDE+XG5cbiAgICAgICAgPHJhbmdlLXBpY2tlclxuICAgICAgICAgIGRhdGEtZnJvbT1cIiR7ZGF0ZXMuZnJvbX1cIlxuICAgICAgICAgIGRhdGEtdG89XCIke2RhdGVzLnRvfVwiXG4gICAgICAgID48L3JhbmdlLXBpY2tlcj5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicGFnZS1zZWN0aW9uIHBhZ2Utc2VjdGlvbi0tY29sdW1uLWNoYXJ0c1wiPlxuICAgICAgICAgIDxjb2x1bW4tY2hhcnRcbiAgICAgICAgICAgIGRhdGEtdHlwZT1cIm9yZGVyc1wiXG4gICAgICAgICAgICBkYXRhLWZyb209XCIke2RhdGVzLmZyb219XCJcbiAgICAgICAgICAgIGRhdGEtdG89XCIke2RhdGVzLnRvfVwiXG4gICAgICAgICAgPjwvY29sdW1uLWNoYXJ0PlxuXG4gICAgICAgICAgPGNvbHVtbi1jaGFydFxuICAgICAgICAgICAgZGF0YS10eXBlPVwic2FsZXNcIlxuICAgICAgICAgICAgZGF0YS1pcy1tb25leT1cInRydWVcIlxuICAgICAgICAgICAgZGF0YS1mcm9tPVwiJHtkYXRlcy5mcm9tfVwiXG4gICAgICAgICAgICBkYXRhLXRvPVwiJHtkYXRlcy50b31cIlxuICAgICAgICAgID48L2NvbHVtbi1jaGFydD5cblxuICAgICAgICAgIDxjb2x1bW4tY2hhcnRcbiAgICAgICAgICAgIGRhdGEtdHlwZT1cImN1c3RvbWVyc1wiXG4gICAgICAgICAgICBkYXRhLWZyb209XCIke2RhdGVzLmZyb219XCJcbiAgICAgICAgICAgIGRhdGEtdG89XCIke2RhdGVzLnRvfVwiXG4gICAgICAgICAgPjwvY29sdW1uLWNoYXJ0PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwYWdlLXNlY3Rpb25cIj5cbiAgICAgICAgICA8aDIgY2xhc3M9XCJwYWdlLXNlY3Rpb25fX3RpdGxlXCI+QmVzdHNlbGxlcnM8L2gyPlxuXG4gICAgICAgIDxzb3J0YWJsZS10YWJsZVxuICAgICAgICAgIGRhdGEtdXJsPVwiL2FwaS9kYXNoYm9hcmQvYmVzdHNlbGxlcnM/X2VtYmVkPXN1YmNhdGVnb3J5LmNhdGVnb3J5XCIsXG4gICAgICAgICAgZGF0YS1pcy1keW5hbWljPVwiMFwiXG4gICAgICAgICAgZGF0YS1maWVsZHMtbGlzdD1cIlsnaW1hZ2VzJywgJ3RpdGxlJywgJ3N1YmNhdGVnb3J5JywgJ3F1YW50aXR5JywgJ3ByaWNlJywgJ3N0YXR1cyddXCJcbiAgICAgICAgICBkYXRhLW9yZGVyLWZpZWxkPSd0aXRsZScsXG4gICAgICAgICAgZGF0YS1vcmRlci1kaXJlY3Rpb249XCIxXCJcbiAgICAgICAgICBkYXRhLWZyb209XCIke2RhdGVzLmZyb219XCJcbiAgICAgICAgICBkYXRhLXRvPVwiJHtkYXRlcy50b31cIlxuICAgICAgICAgID48L3NvcnRhYmxlLXRhYmxlPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5gKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvaW5kZXguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGFzeW5jIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoYDxkaXYgY2xhc3M9XCI0MDRcIj5cbiAgICAgICAgPGgxPlBhZ2Ugbm90IGZvdW5kPC9oMT5cbiAgICAgICAgPHA+Tm8gc3VjaCBwYWdlPC9wPlxuICAgICAgPC9kaXY+YCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZm9ybTogJ3Byb2R1Y3QtZm9ybScsXG4gIGxpc3Q6ICdwcm9kdWN0LWZvcm1fX2xpc3QnLFxuICBpdGVtOiAncHJvZHVjdC1mb3JtX19pdGVtJyxcbiAgaXRlbVRpbnk6ICdwcm9kdWN0LWZvcm1fX2l0ZW0tLXRpbnknLFxuICBpdGVtRm9sbG93OiAncHJvZHVjdC1mb3JtX19pdGVtLS1mb2xsb3cnLFxuICBpdGVtRnVsbDogJ3Byb2R1Y3QtZm9ybV9faXRlbS0tZnVsbCcsXG4gIGxhYmVsOiAncHJvZHVjdC1mb3JtX19sYWJlbCcsXG4gIGlucHV0OiAncHJvZHVjdC1mb3JtX19pbnB1dCcsXG4gIGlucHV0VGV4dDogJ3Byb2R1Y3QtZm9ybV9faW5wdXQtLXRleHQnLFxuICBpbnB1dE51bWJlcjogJ3Byb2R1Y3QtZm9ybV9faW5wdXQtLW51bWJlcicsXG4gIGlucHV0U2VsZWN0OiAncHJvZHVjdC1mb3JtX19pbnB1dC0tc2VsZWN0JyxcbiAgaW5wdXRUZXh0YXJlYTogJ3Byb2R1Y3QtZm9ybV9faW5wdXQtLXRleHRhcmVhJyxcbiAgaW1nc0xpc3Q6ICdwcm9kdWN0LWZvcm1fX2ltYWdlcy1saXN0JyxcbiAgaW1nc0l0ZW06ICdwcm9kdWN0LWZvcm1fX2ltYWdlcy1pdGVtJyxcbiAgaW1nOiAncHJvZHVjdC1mb3JtX19pbWFnZScsXG4gIGltZ1dyYXBwZXI6ICdwcm9kdWN0LWZvcm1fX2ltYWdlLXdyYXBwZXInLFxuICBpbWdTb3VyY2U6ICdwcm9kdWN0LWZvcm1fX2ltYWdlLXNvdXJjZScsXG4gIGltZ1JlbW92ZTogJ3Byb2R1Y3QtZm9ybV9faW1hZ2UtcmVtb3ZlJyxcbiAgcHJldmlldzogJ3Byb2R1Y3QtZm9ybV9fcHJldmlldycsXG4gIGZvb3RlcjogJ3Byb2R1Y3QtZm9ybV9fZm9vdGVyJyxcbiAgc3VibWl0OiAncHJvZHVjdC1mb3JtX19zdWJtaXQnXG59O1xuIiwiaW1wb3J0IHsgaW5wdXRUZXh0LCBpbnB1dE51bWJlciwgaW5wdXRUZXh0YXJlYSwgaW5wdXRTZWxlY3QgfSBmcm9tICcuL3RlbXBsYXRlcy5qcyc7XG5pbXBvcnQgc3RhdHVzVGV4dCBmcm9tICcuL3N0YXR1c1RleHQuanMnO1xuaW1wb3J0IHsgZmlsbFRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9pbmRleC5qcyc7XG5pbXBvcnQgeyBjYXRlZ29yaWVzVG9GbGF0TGlzdCwgZ2V0T3B0aW9ucywgZ2V0SW1nc0xpc3RNYXJrdXAgfSBmcm9tICcuL2hlbHBlcnMnO1xuXG4vLyBSZW5kZXJpbmcgbWV0aG9kcyBmb3IgcHJvZHVjdCBpbnB1dHNcbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW1hZ2VzOiB7XG4gICAgcmVuZGVyICh7IGltYWdlcyB9KSB7XG4gICAgICBpZiAoIWltYWdlcykge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXRJbWdzTGlzdE1hcmt1cChpbWFnZXMpO1xuICAgIH0sXG4gICAgY29tcGFyZTogbnVsbFxuICB9LFxuICB0aXRsZToge1xuICAgIHJlbmRlciAoeyB0aXRsZSB9KSB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBpZDogJ3RpdGxlJyxcbiAgICAgICAgZmllbGROYW1lOiAnTmFtZScsXG4gICAgICAgIHZhbHVlOiB0aXRsZVxuICAgICAgfTtcbiAgICAgIHJldHVybiBmaWxsVGVtcGxhdGUoe1xuICAgICAgICB0bXBsOiBpbnB1dFRleHQsXG4gICAgICAgIGRhdGFcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICByZW5kZXIgKHsgZGVzY3JpcHRpb24gfSkge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgaWQ6ICdkZXNjcmlwdGlvbicsXG4gICAgICAgIGZpZWxkTmFtZTogJ0Rlc2NyaXB0aW9uJyxcbiAgICAgICAgdmFsdWU6IGRlc2NyaXB0aW9uXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gZmlsbFRlbXBsYXRlKHtcbiAgICAgICAgdG1wbDogaW5wdXRUZXh0YXJlYSxcbiAgICAgICAgZGF0YVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBzdWJjYXRlZ29yeToge1xuICAgIHJlbmRlciAoeyBjYXRlZ29yaWVzLCBzdWJjYXRlZ29yeSB9KSB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBpZDogJ3N1YmNhdGVnb3J5JyxcbiAgICAgICAgZmllbGROYW1lOiAnQ2F0ZWdvcnknLFxuICAgICAgICBvcHRpb25zOiBnZXRPcHRpb25zKGNhdGVnb3JpZXNUb0ZsYXRMaXN0KGNhdGVnb3JpZXMpLCBzdWJjYXRlZ29yeSlcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBmaWxsVGVtcGxhdGUoe1xuICAgICAgICB0bXBsOiBpbnB1dFNlbGVjdCxcbiAgICAgICAgZGF0YVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBxdWFudGl0eToge1xuICAgIHJlbmRlciAoeyBxdWFudGl0eSB9KSB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBpZDogJ3F1YW50aXR5JyxcbiAgICAgICAgZmllbGROYW1lOiAnUXVhbnRpdHknLFxuICAgICAgICB2YWx1ZTogcXVhbnRpdHlcbiAgICAgIH07XG4gICAgICByZXR1cm4gZmlsbFRlbXBsYXRlKHtcbiAgICAgICAgdG1wbDogaW5wdXROdW1iZXIsXG4gICAgICAgIGRhdGFcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgcHJpY2U6IHtcbiAgICByZW5kZXIgKHsgcHJpY2UgfSkge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgaWQ6ICdwcmljZScsXG4gICAgICAgIGZpZWxkTmFtZTogJ1ByaWNlJyxcbiAgICAgICAgdmFsdWU6IHByaWNlXG4gICAgICB9O1xuICAgICAgcmV0dXJuIGZpbGxUZW1wbGF0ZSh7XG4gICAgICAgIHRtcGw6IGlucHV0TnVtYmVyLFxuICAgICAgICBkYXRhXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIGRpc2NvdW50OiB7XG4gICAgcmVuZGVyICh7IGRpc2NvdW50IH0pIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGlkOiAnZGlzY291bnQnLFxuICAgICAgICBmaWVsZE5hbWU6ICdEaXNjb3VudCcsXG4gICAgICAgIHZhbHVlOiBkaXNjb3VudFxuICAgICAgfTtcbiAgICAgIHJldHVybiBmaWxsVGVtcGxhdGUoe1xuICAgICAgICB0bXBsOiBpbnB1dE51bWJlcixcbiAgICAgICAgZGF0YVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBzdGF0dXM6IHtcbiAgICByZW5kZXIgKHsgc3RhdHVzIH0pIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGlkOiAnc3RhdHVzJyxcbiAgICAgICAgZmllbGROYW1lOiAnU3RhdHVzJyxcbiAgICAgICAgdmFsdWU6IHN0YXR1cyxcbiAgICAgICAgb3B0aW9uczogZ2V0T3B0aW9ucyhPYmplY3QudmFsdWVzKHN0YXR1c1RleHQpLCBzdGF0dXMpXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gZmlsbFRlbXBsYXRlKHtcbiAgICAgICAgdG1wbDogaW5wdXRTZWxlY3QsXG4gICAgICAgIGRhdGFcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcbiIsImltcG9ydCBjbHMgZnJvbSAnLi9jbGFzc2VzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgbmFtZTogJ3RpdGxlJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ2Rlc2NyaXB0aW9uJyxcbiAgICBtb2RzOiBbY2xzLml0ZW1GdWxsXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ2ltYWdlcycsXG4gICAgbW9kczogW2Nscy5pdGVtRnVsbF1cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdzdWJjYXRlZ29yeSdcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdwcmljZScsXG4gICAgbW9kczogW2Nscy5pdGVtVGlueV1cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdkaXNjb3VudCcsXG4gICAgbW9kczogW2Nscy5pdGVtVGlueSwgY2xzLml0ZW1Gb2xsb3ddXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAncXVhbnRpdHknLFxuICAgIG1vZHM6IFtjbHMuaXRlbVRpbnldXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnc3RhdHVzJyxcbiAgICBtb2RzOiBbY2xzLml0ZW1UaW55XVxuICB9XG5dO1xuIiwiaW1wb3J0IGNscyBmcm9tICcuL2NsYXNzZXMuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2F0ZWdvcmllc1RvRmxhdExpc3QgKGNhdGVnb3JpZXMpIHtcbiAgY29uc3QgZmxhdExpc3QgPSBbXTtcblxuICBmb3IgKGNvbnN0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXMpIHtcbiAgICBmb3IgKGNvbnN0IHN1YmNhdGVnb3J5IG9mIGNhdGVnb3J5LnN1YmNhdGVnb3JpZXMpIHtcbiAgICAgIGZsYXRMaXN0LnB1c2goe1xuICAgICAgICB2YWx1ZTogc3ViY2F0ZWdvcnkuaWQsXG4gICAgICAgIHRleHQ6IGAke2NhdGVnb3J5LnRpdGxlfSA+ICR7c3ViY2F0ZWdvcnkudGl0bGV9YFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZsYXRMaXN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3B0aW9ucyAobGlzdCwgc2VsZWN0ZWQpIHtcbiAgcmV0dXJuIGxpc3RcbiAgICAubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBpdGVtLnZhbHVlIHx8IGluZGV4O1xuICAgICAgY29uc3QgdGV4dCA9IGl0ZW0udGV4dCB8fCBpdGVtO1xuICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHZhbHVlID09PSBzZWxlY3RlZCA/ICdzZWxlY3RlZCcgOiAnJztcblxuICAgICAgcmV0dXJuIGA8b3B0aW9uIHZhbHVlPVwiJHt2YWx1ZX1cIiAke2lzU2VsZWN0ZWR9PiR7dGV4dH08L29wdGlvbj5gO1xuICAgIH0pXG4gICAgLmpvaW4oJycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW1nc0xpc3RNYXJrdXAgKGltYWdlcykge1xuICBjb25zdCBpbWFnZXNJdGVtcyA9IGltYWdlc1xuICAgIC5tYXAoaXRlbSA9PiB7XG4gICAgICByZXR1cm4gYDxsaSBjbGFzcz1cIiR7Y2xzLmltZ3NJdGVtfVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiJHtjbHMuaW1nV3JhcHBlcn1cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIiR7aXRlbS51cmx9XCIgY2xhc3M9XCIke2Nscy5pbWd9XCI+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtpdGVtLnVybH0pXCIgY2xhc3M9XCIke2Nscy5wcmV2aWV3fVwiPjxzcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCIke2Nscy5pbWdTb3VyY2V9XCI+JHtpdGVtLnNvdXJjZX08L3NwYW4+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJHtjbHMuaW1nUmVtb3ZlfVwiPlJlbW92ZTwvYnV0dG9uPlxuICAgICAgPC9saT5gO1xuICAgIH0pO1xuXG4gIHJldHVybiBgICsgdXBsb2FkXG4gICAgPHVsIGNsYXNzPVwiJHtjbHMuaW1nc0xpc3R9XCIgaXM9XCJkcmFnZ2FibGUtbGlzdFwiPiR7aW1hZ2VzSXRlbXMuam9pbignICcpfTwvdWw+YDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5MjY3OTE1NGFmZGUwODE1YzYyMjJjN2MwNDAxZjQ0Mi5zdmdcIjsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBmZXRjaEpzb24gfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2luZGV4LmpzJztcbmltcG9ydCBQYWdlTWVzc2FnZSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1BhZ2VNZXNzYWdlL2luZGV4LmpzJztcbmltcG9ydCBmaWVsZHMgZnJvbSAnLi9maWVsZHMuanMnO1xuaW1wb3J0IGZpZWxkc09yZGVyIGZyb20gJy4vZmllbGRzT3JkZXIuanMnO1xuaW1wb3J0IGNscyBmcm9tICcuL2NsYXNzZXMuanMnO1xuaW1wb3J0IHsgaGVhZGVyIH0gZnJvbSAnLi90ZW1wbGF0ZXMnO1xuXG5pbXBvcnQgJy4vaWNvbi10cmFzaC5zdmcnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yIChtYXRjaCkge1xuICAgIHRoaXMuaWQgPSBtYXRjaFswXS5yZXBsYWNlKCdwcm9kdWN0cy8nLCAnJyk7XG5cbiAgICBpZiAoIW1hdGNoWzBdKSB7XG4gICAgICB0aGlzLmlkID0gJzNkLW9jaGtpLW9wdG9tYS16ZDMwMic7XG4gICAgfVxuXG4gICAgdGhpcy5hcGlVcmwgPSBwcm9jZXNzLmVudi5BUElfVVJMIHx8ICdodHRwczovL2NvdXJzZS1qcy5qYXZhc2NyaXB0LnJ1JztcbiAgICB0aGlzLmZldGNoUHJvZHVjdFVybCA9IHRoaXMuYXBpVXJsICsgYC9hcGkvcmVzdC9wcm9kdWN0cz9pZD0ke3RoaXMuaWR9YDtcbiAgICB0aGlzLmZldGNoQ2F0ZWdvcmllc1VybCA9IHRoaXMuYXBpVXJsICsgJy9hcGkvcmVzdC9jYXRlZ29yaWVzP19zb3J0PXdlaWdodCZfcmVmcz1zdWJjYXRlZ29yeSc7XG4gIH1cblxuICBhc3luYyByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgcHJvZHVjdERhdGEsIGNhdGVnb3JpZXMsIGVycm9yTWVzc2FnZSB9ID0gYXdhaXQgdGhpcy5sb2FkRGF0YSgpO1xuXG4gICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoYDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRlbnRcIj5cbiAgICAgICAgJHtoZWFkZXJ9XG5cbiAgICAgICAgJHtlcnJvck1lc3NhZ2Uub3V0ZXJIVE1MfVxuICAgICAgPC9kaXY+XG4gICAgICBgKTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9kdWN0ID0gcHJvZHVjdERhdGFbMF07XG4gICAgY29uc3QgaW5wdXRzID0gW107XG5cbiAgICBmb3IgKGNvbnN0IHsgbmFtZSwgbW9kcyB9IG9mIGZpZWxkc09yZGVyKSB7XG4gICAgICBpZiAoZmllbGRzW25hbWVdKSB7XG4gICAgICAgIGxldCBwYXJhbXMgPSBwcm9kdWN0O1xuXG4gICAgICAgIGlmIChuYW1lID09PSAnc3ViY2F0ZWdvcnknKSB7XG4gICAgICAgICAgcGFyYW1zID0ge1xuICAgICAgICAgICAgLi4ucGFyYW1zLFxuICAgICAgICAgICAgY2F0ZWdvcmllc1xuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbnB1dCA9IGZpZWxkc1tuYW1lXS5yZW5kZXIocGFyYW1zKTtcbiAgICAgICAgbGV0IGNsYXNzZXMgPSBbY2xzLml0ZW1dO1xuXG4gICAgICAgIGlmIChtb2RzKSB7XG4gICAgICAgICAgY2xhc3NlcyA9IGNsYXNzZXMuY29uY2F0KG1vZHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXRzLnB1c2goYDxsaSBjbGFzcz1cIiR7Y2xhc3Nlcy5qb2luKCcgJyl9XCI+JHtpbnB1dH08L2xpPmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KGA8ZGl2IGNsYXNzPVwicGFnZS1jb250ZW50XCI+XG4gICAgICAke2hlYWRlcn1cblxuICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgY2xhc3M9XCIke2Nscy5mb3JtfX1cIj5cbiAgICAgICAgPHVsIGNsYXNzPVwiJHtjbHMubGlzdH1cIj5cbiAgICAgICAgICAke2lucHV0cy5qb2luKCdcXG4nKX1cbiAgICAgICAgPC91bD5cblxuICAgICAgICA8Zm9vdGVyIGNsYXNzPVwiJHtjbHMuZm9vdGVyfVwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCIke2Nscy5zdWJtaXR9XCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5gKTtcbiAgfVxuXG4gIGFzeW5jIGxvYWREYXRhICgpIHtcbiAgICAvLyBUT0RPOiBhZGQgbG9hZGluZyBpbmRpY2F0b3JcbiAgICB0cnkge1xuICAgICAgY29uc3QgcHJvZHVjdERhdGEgPSBhd2FpdCBmZXRjaEpzb24odGhpcy5mZXRjaFByb2R1Y3RVcmwpO1xuICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGZldGNoSnNvbih0aGlzLmZldGNoQ2F0ZWdvcmllc1VybCk7XG5cbiAgICAgIHJldHVybiB7IHByb2R1Y3REYXRhLCBjYXRlZ29yaWVzIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgUGFnZU1lc3NhZ2UoeyBlcnJvciB9KTtcbiAgICAgIHJldHVybiB7IGVycm9yTWVzc2FnZTogbWVzc2FnZS5lbGVtIH07XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIDA6ICdEaXNhYmxlZCcsXG4gIDE6ICdFbmFibGVkJ1xufTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShtb2R1bGUuaWQsIGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCBjbHMgZnJvbSAnLi9jbGFzc2VzLmpzJztcblxuZXhwb3J0IGNvbnN0IGhlYWRlciA9IGA8aGVhZGVyIGNsYXNzPVwicGFnZS1jb250ZW50X19oZWFkZXJcIj5cbiAgPGgxIGNsYXNzPVwicGFnZS1jb250ZW50X190aXRsZVwiPlxuICA8YSBocmVmPVwiL3Byb2R1Y3RzXCI+UHJvZHVjdHM8L2E+XG4gIC9FZGl0IFByb2R1Y3Q8L2gxPlxuPC9oZWFkZXI+YDtcblxuZXhwb3J0IGNvbnN0IGlucHV0VGV4dCA9IGA8bGFiZWwgY2xhc3M9XCIke2Nscy5sYWJlbH1cIj5cbiAge2ZpZWxkTmFtZX1cblxuICA8aW5wdXRcbiAgICBjbGFzcz1cIiR7Y2xzLmlucHV0fSAke2Nscy5pbnB1dFRleHR9XCJcbiAgICB0eXBlPVwidGV4dFwiXG4gICAgbmFtZT1cIntpZH1cIlxuICAgIHZhbHVlPVwie3ZhbHVlfVwiLz5cbjwvbGFiZWw+YDtcblxuZXhwb3J0IGNvbnN0IGlucHV0TnVtYmVyID0gYDxsYWJlbCBjbGFzcz1cIiR7Y2xzLmxhYmVsfVwiPlxuICB7ZmllbGROYW1lfVxuXG4gIDxpbnB1dFxuICAgIGNsYXNzPVwiJHtjbHMuaW5wdXR9ICR7Y2xzLmlucHV0TnVtYmVyfVwiXG4gICAgdHlwZT1cIm51bWJlclwiXG4gICAgbmFtZT1cIntpZH1cIlxuICAgIHZhbHVlPVwie3ZhbHVlfVwiLz5cbjwvbGFiZWw+YDtcblxuZXhwb3J0IGNvbnN0IGlucHV0VGV4dGFyZWEgPSBgPGxhYmVsIGNsYXNzPVwiJHtjbHMubGFiZWx9XCI+XG4gIHtmaWVsZE5hbWV9XG5cbiAgPHRleHRhcmVhXG4gICAgY2xhc3M9XCIke2Nscy5pbnB1dH0gJHtjbHMuaW5wdXRUZXh0YXJlYX1cIlxuICAgIG5hbWU9XCJ7aWR9XCI+e3ZhbHVlfTwvdGV4dGFyZWE+XG48L2xhYmVsPmA7XG5cbmV4cG9ydCBjb25zdCBpbnB1dFNlbGVjdCA9IGA8bGFiZWwgY2xhc3M9XCIke2Nscy5sYWJlbH1cIj5cbiAge2ZpZWxkTmFtZX1cblxuICA8c2VsZWN0XG4gICAgY2xhc3M9XCIke2Nscy5pbnB1dH0gJHtjbHMuaW5wdXRTZWxlY3R9XCJcbiAgICBuYW1lPVwie2lkfVwiPlxuICAgIHtvcHRpb25zfVxuICA8L3NlbGVjdD5cbjwvbGFiZWw+YDtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBhc3luYyByZW5kZXIgKCkge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KGA8ZGl2IGNsYXNzPVwicGFnZS1jb250ZW50XCI+XG4gICAgICA8aGVhZGVyIGNsYXNzPVwicGFnZS1jb250ZW50X19oZWFkZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzPVwicGFnZS1jb250ZW50X190aXRsZVwiPkRhc2hib2FyZC9Qcm9kdWN0czwvaDE+XG4gICAgICA8L2hlYWRlcj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwYWdlLXNlY3Rpb25cIj5cbiAgICAgICAgPGgyIGNsYXNzPVwicGFnZS1zZWN0aW9uX190aXRsZVwiPlByb2R1Y3RzPC9oMj5cblxuICAgICAgICA8c29ydGFibGUtdGFibGVcbiAgICAgICAgICBkYXRhLXVybD1cIi9hcGkvcmVzdC9wcm9kdWN0cz9fZW1iZWQ9c3ViY2F0ZWdvcnkuY2F0ZWdvcnlcIixcbiAgICAgICAgICBkYXRhLWlzLWR5bmFtaWM9XCIxXCJcbiAgICAgICAgICBkYXRhLWZpZWxkcy1saXN0PVwiWydpbWFnZXMnLCAndGl0bGUnLCAnc3ViY2F0ZWdvcnknLCAncXVhbnRpdHknLCAncHJpY2UnLCAnc3RhdHVzJ11cIlxuICAgICAgICAgIGRhdGEtb3JkZXItZmllbGQ9J3RpdGxlJyxcbiAgICAgICAgICBkYXRhLW9yZGVyLWRpcmVjdGlvbj1cIjFcIlxuICAgICAgICAgID48L3NvcnRhYmxlLXRhYmxlPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PmApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9