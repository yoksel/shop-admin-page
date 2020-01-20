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
/******/ 	__webpack_require__.p = "/shop-admin-page/";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3NzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbHVtbkNoYXJ0L3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RyYWdnYWJsZUxpc3Qvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05vdGlmaWNhdGlvbi9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QYWdlTWVzc2FnZS9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SYW5nZVBpY2tlci9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Tb3J0YWJsZVRhYmxlL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Rvb2x0aXBzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9jYXRlZ29yaWVzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9wcm9kdWN0cy9lZGl0L3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2Nzcy9zdHlsZXMuc2Nzcz9mM2M4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbHVtbkNoYXJ0L2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29sdW1uQ2hhcnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29sdW1uQ2hhcnQvc3R5bGVzLnNjc3M/YTIzMCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db2x1bW5DaGFydC90ZW1wbGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRHJhZ2dhYmxlTGlzdC9ncmFiLWljb24uc3ZnIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RyYWdnYWJsZUxpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRHJhZ2dhYmxlTGlzdC9zdHlsZXMuc2Nzcz85N2M3Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvc3R5bGVzLnNjc3M/ZTJjMyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ob3RpZmljYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uL3N0eWxlcy5zY3NzP2RmOTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGFnZU1lc3NhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGFnZU1lc3NhZ2Uvc3R5bGVzLnNjc3M/MTEzNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SYW5nZVBpY2tlci9hcnJvdy1pY29uLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SYW5nZVBpY2tlci9jYWxlbmRhci1pY29uLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SYW5nZVBpY2tlci9jbGFzc2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JhbmdlUGlja2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JhbmdlUGlja2VyL3N0eWxlcy5zY3NzPzcxNWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmFuZ2VQaWNrZXIvdGVtcGxhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NvcnRhYmxlVGFibGUvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Tb3J0YWJsZVRhYmxlL2RpcmVjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU29ydGFibGVUYWJsZS9maWVsZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU29ydGFibGVUYWJsZS9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NvcnRhYmxlVGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU29ydGFibGVUYWJsZS9zdGF0dXNUZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NvcnRhYmxlVGFibGUvc3R5bGVzLnNjc3M/ZThjNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ub29sdGlwcy9jbGFzc2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Rvb2x0aXBzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Rvb2x0aXBzL3N0eWxlcy5zY3NzPzdjYzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9lc2NhcGVIVE1MLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2ZldGNoSnNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9maWxsVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvZm9ybWF0RGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9mb3JtYXRUb3RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9nZXREYXRlRnJvbVN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9nZXRXZWVrRGF5cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy90aHJvdHRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL1JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL25vdGlmaWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvcmVuZGVyUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMgZWFnZXIgXlxcLlxcLy4qXFwvaW5kZXhcXC5qcyQgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2F0ZWdvcmllcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2F0ZWdvcmllcy9zdHlsZXMuc2Nzcz9jMDA3Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9kYXNoYm9hcmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2Vycm9yNDA0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9wcm9kdWN0cy9lZGl0L2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Byb2R1Y3RzL2VkaXQvZmllbGRzLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9wcm9kdWN0cy9lZGl0L2ZpZWxkc09yZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9wcm9kdWN0cy9lZGl0L2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Byb2R1Y3RzL2VkaXQvaWNvbi10cmFzaC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Byb2R1Y3RzL2VkaXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Byb2R1Y3RzL2VkaXQvc3RhdHVzVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcHJvZHVjdHMvZWRpdC9zdHlsZS5zY3NzP2QzMTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Byb2R1Y3RzL2VkaXQvdGVtcGxhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9wcm9kdWN0cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyxVQUFVLG9CQUFvQix5QkFBeUIsMEJBQTBCLDJCQUEyQixzQkFBc0IsbUJBQW1CLHFCQUFxQixzQkFBc0IscUJBQXFCLDJCQUEyQiwwQkFBMEIsb0JBQW9CLDBCQUEwQixnQ0FBZ0MsNkJBQTZCLGtCQUFrQixrQkFBa0IsRUFBRSxPQUFPLDJCQUEyQixF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RU8scUNBQXFDLG1EQUFHLE9BQU87QUFDdEQsR0FBRzs7QUFFSDtBQUNBLGFBQWEsbURBQUcsT0FBTyxHQUFHLG1EQUFHLGFBQWE7QUFDMUMsV0FBVyxHQUFHO0FBQ2QsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFBQTtBQUF1RDs7QUFFeEM7QUFDZjtBQUNBLFdBQVcsdUVBQWE7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3Nob3AtYWRtaW4tcGFnZS9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tYmx1ZTogIzEwOUNGMTtcXG4gIC0tZGFyay1ibHVlOiAjMzM0RDZFO1xcbiAgLS1saWdodC1ibHVlOiAjQ0ZFQkZDO1xcbiAgLS1taWRkbGUtYmx1ZTogIzlGRDdGOTtcXG4gIC0teWVsbG93OiAjRkZCOTQ2O1xcbiAgLS1yZWQ6ICNGNzY4NUI7XFxuICAtLWdyZWVuOiAjMkVENDdBO1xcbiAgLS1wdXJwbGU6ICM4ODVBRjg7XFxuICAtLWJsYWNrOiAjMTkyQTNFO1xcbiAgLS10YWJsZS1ibGFjazogIzMyM0M0NztcXG4gIC0tdGFibGUtZ3JleTogIzcwNzY4MztcXG4gIC0tZ3JleTogIzkwQTBCNztcXG4gIC0tZ3JleS1saWdodDogI0MyQ0ZFMDtcXG4gIC0tZ3JleS1leHRyYS1saWdodDogI0VGRjFGNDtcXG4gIC0tZ3JleS1za2VsZXRvbjogI0Y1RjZGODtcXG4gIC0td2hpdGU6ICNGRkY7XFxuICAtLXJhZGl1czogNHB4OyB9XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuSFRNTCB7XFxuICBmb250LXNpemU6IDE2cHg7IH1cXG5cXG5CT0RZIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQ6ICNGRkY7XFxuICBmb250OiAxcmVtLzEuNCBUcmVidWNoZXQgTVMsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogIzAwMDsgfVxcblxcbkgxLFxcbkgyLFxcbkgzLFxcbkg0IHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAuNWVtO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxcblxcbkgxIHtcXG4gIGZvbnQtc2l6ZTogMi43NXJlbTsgfVxcblxcbkEsXFxuQTp2aXNpdGVkLFxcbkE6aG92ZXIge1xcbiAgY29sb3I6IGluaGVyaXQ7IH1cXG5cXG5BOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcblxcbkJVVFRPTixcXG5JTlBVVCxcXG5URVhUQVJFQSxcXG5TRUxFQ1Qge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAuNXJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xcbiAgZm9udDogaW5oZXJpdDsgfVxcblxcbklOUFVULFxcblRFWFRBUkVBLFxcblNFTEVDVCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXktbGlnaHQpOyB9XFxuXFxuLnBhZ2UtbGF5b3V0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5zcGlubmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDJyZW07XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogNHJlbTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gIGJveC1zaGFkb3c6IDAgMCAuNXJlbSBjdXJyZW50Q29sb3I7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjb2xvcjogdmFyKC0tZ3JleS1saWdodCk7IH1cXG5cXG5bZGF0YS1sb2FkaW5nPVxcXCIxXFxcIl0gLnNwaW5uZXIge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4uc3Bpbm5lcjo6YmVmb3JlLFxcbi5zcGlubmVyOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDNweCBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogY3VycmVudENvbG9yIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYW5pbWF0aW9uOiByb3RhdGUgMi4xcyBsaW5lYXIgaW5maW5pdGU7IH1cXG5cXG4uc3Bpbm5lcjo6YmVmb3JlIHtcXG4gIHdpZHRoOiAyLjI1cmVtO1xcbiAgaGVpZ2h0OiAyLjI1cmVtOyB9XFxuXFxuLnNwaW5uZXI6OmFmdGVyIHtcXG4gIHdpZHRoOiAxLjI1cmVtO1xcbiAgaGVpZ2h0OiAxLjI1cmVtO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjNzO1xcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogcmV2ZXJzZTsgfVxcblxcbkBrZXlmcmFtZXMgcm90YXRlIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jb2x1bW4tY2hhcnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi13aWR0aDogMTgwcHg7XFxuICBmbGV4LWJhc2lzOiBjYWxjKCgxMDAlIC0gMnJlbSkgLyAzKTtcXG4gIG1heC13aWR0aDogMzAwcHg7XFxuICBtaW4taGVpZ2h0OiAxNTBweDtcXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xcbiAgbWFyZ2luOiAwIDAgLjVyZW0gMDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleS1saWdodCk7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHZhcigtLWdyZXktbGlnaHQpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuXFxuLmNvbHVtbi1jaGFydCArIC5jb2x1bW4tY2hhcnQge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07IH1cXG5cXG4uY29sdW1uLWNoYXJ0X19jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXgtd2lkdGg6IDEwMCU7IH1cXG5cXG4uY29sdW1uLWNoYXJ0X190aXRsZSB7XFxuICBtYXJnaW46IDA7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGNvbG9yOiB2YXIoLS1ncmV5KTsgfVxcblxcbi5jb2x1bW4tY2hhcnRfX3RvdGFsIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBmb250LXNpemU6IDEuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDE7IH1cXG5cXG4uY29sdW1uLWNoYXJ0X19saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi10b3A6IC41cmVtO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7IH1cXG5cXG4uY29sdW1uLWNoYXJ0X19pdGVtIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmV5LWxpZ2h0KTtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5jb2x1bW4tY2hhcnRfX2l0ZW06Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4uY29sdW1uLWNoYXJ0X190b29sdGlwLWRhdGUge1xcbiAgZm9udC1zaXplOiAuOWVtOyB9XFxuXFxuLmNvbHVtbi1jaGFydF9fdG9vbHRpcC1xdWFudGl0eSB7XFxuICBtYXJnaW4tdG9wOiAuMjVlbTtcXG4gIGZvbnQtc2l6ZTogMS4xZW07IH1cXG5cXG4uY29sdW1uLWNoYXJ0LS1jdXN0b21lcnMge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6IGdvbGQ7IH1cXG5cXG4uY29sdW1uLWNoYXJ0LS1jdXN0b21lcnMgLmNvbHVtbi1jaGFydF9faXRlbSB7XFxuICBiYWNrZ3JvdW5kOiBnb2xkOyB9XFxuXFxuLmNvbHVtbi1jaGFydC0tb3JkZXJzIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0dXJxdW9pc2U7IH1cXG5cXG4uY29sdW1uLWNoYXJ0LS1vcmRlcnMgLmNvbHVtbi1jaGFydF9faXRlbSB7XFxuICBiYWNrZ3JvdW5kOiB0dXJxdW9pc2U7IH1cXG5cXG4uY29sdW1uLWNoYXJ0LS1zYWxlcyB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogeWVsbG93Z3JlZW47IH1cXG5cXG4uY29sdW1uLWNoYXJ0LS1zYWxlcyAuY29sdW1uLWNoYXJ0X19pdGVtIHtcXG4gIGJhY2tncm91bmQ6IHllbGxvd2dyZWVuOyB9XFxuXFxuLmNvbHVtbi1jaGFydF9fZXJyb3Ige1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuL2dyYWItaWNvbi5zdmdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5kcmFnZ2FibGUtbGlzdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uZHJhZ2dhYmxlLWxpc3RfX2l0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IGdyYWI7IH1cXG4gIC5kcmFnZ2FibGUtbGlzdF9faXRlbTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIHdpZHRoOiAxMXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgNTAlIDUwJSBuby1yZXBlYXQ7XFxuICAgIG9wYWNpdHk6IC41OyB9XFxuXFxuLmRyYWdnYWJsZS1saXN0IC5kcmFnZ2FibGUtbGlzdF9faXRlbS0tcGxhY2Vob2xkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleS1saWdodCk7IH1cXG4gIC5kcmFnZ2FibGUtbGlzdCAuZHJhZ2dhYmxlLWxpc3RfX2l0ZW0tLXBsYWNlaG9sZGVyOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lOyB9XFxuXFxuLmRyYWdnYWJsZS1saXN0X19pdGVtLS1kcmFnZ2VkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxcmVtIHJnYmEoMCwgMCwgMCwgMC4zNSk7XFxuICBjdXJzb3I6IGdyYWJiaW5nOyB9XFxuICAuZHJhZ2dhYmxlLWxpc3RfX2l0ZW0tLWRyYWdnZWQ6OmJlZm9yZSB7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wYWdlIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnBhZ2UtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoOyB9XFxuXFxuLnBhZ2UtbWFpbixcXG4ucGFnZS1hc2lkZSxcXG4ucGFnZS1mb290ZXIge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4ucGFnZS1tYWluIHtcXG4gIGZsZXgtZ3JvdzogMTsgfVxcblxcbi5wYWdlLWFzaWRlIHtcXG4gIG1pbi13aWR0aDogMjUwcHg7XFxuICBiYWNrZ3JvdW5kOiAjRUVFOyB9XFxuXFxuLnBhZ2UtZm9vdGVyIHtcXG4gIGZsZXgtYmFzaXM6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuICAucGFnZS1mb290ZXIgQSArIEEge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTsgfVxcblxcbi5wYWdlLWNvbnRlbnRfX2hlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuXFxuLnBhZ2Utc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwOyB9XFxuICAucGFnZS1zZWN0aW9uICsgLnBhZ2Utc2VjdGlvbiB7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07IH1cXG5cXG4ucGFnZS1zZWN0aW9uX190aXRsZSB7XFxuICBmbGV4LWJhc2lzOiAxMDAlOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubm90aWZpY2F0aW9ucyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICByaWdodDogMXJlbTtcXG4gIGJvdHRvbTogMXJlbTtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIG1heC1oZWlnaHQ6IDUwdmg7IH1cXG5cXG4vKiBOb3RpZmljYXRpb24gKi9cXG4ubm90aWZpY2F0aW9uIHtcXG4gIG1hcmdpbi10b3A6IC41cmVtO1xcbiAgcGFkZGluZzogLjc1cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XFxuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcmVtKTtcXG4gIGFuaW1hdGlvbjogZmFkZUluIC41cyBmb3J3YXJkczsgfVxcbiAgLm5vdGlmaWNhdGlvbi0td2FybmluZyB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXllbGxvdyk7IH1cXG4gIC5ub3RpZmljYXRpb24tLWVycm9yIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTsgfVxcblxcbi5ub3RpZmljYXRpb25bZGF0YS1zdGF0ZT1cXFwiaGlkZGVuXFxcIl0ge1xcbiAgYW5pbWF0aW9uOiBmYWRlT3V0IC41czsgfVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDsgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMXJlbTsgfSB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucGFnZS1tZXNzYWdlIHtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBtYXJnaW46IDJyZW0gYXV0bztcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kOiBsaWdodGdvbGRlbnJvZHllbGxvdztcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7IH1cXG5cXG4ucGFnZS1tZXNzYWdlLS1lcnJvciB7XFxuICBiYWNrZ3JvdW5kOiBtaXN0eXJvc2U7IH1cXG5cXG4ucGFnZS1tZXNzYWdlX19lcnJvciB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQ6ICNGRkY7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpOyB9XFxuXFxuLnBhZ2UtbWVzc2FnZV9fZXJyb3ItdGV4dCB7XFxuICBmb250LWZhbWlseTogQ291cmllciBOZXcsIENvdXJpZXIsIG1vbm9zcGFjZTsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4vY2FsZW5kYXItaWNvbi5zdmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSByZXF1aXJlKFwiLi9hcnJvdy1pY29uLnN2Z1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIFJhbmdlcGlja2VyICovXFxuLnJhbmdlcGlja2VyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDExOyB9XFxuXFxuLnJhbmdlcGlja2VyX19pbnB1dCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIHBhZGRpbmc6IDEycHggMTZweCAxMnB4IDQwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LWxpZ2h0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSkgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSAxNnB4IGNlbnRlciBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDE4cHggMThweDsgfVxcblxcbi5yYW5nZXBpY2tlcl9vcGVuIC5yYW5nZXBpY2tlcl9faW5wdXQsXFxuLnJhbmdlcGlja2VyX19pbnB1dDpmb2N1cyxcXG4ucmFuZ2VwaWNrZXJfX2lucHV0OmFjdGl2ZSB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWJsdWUpOyB9XFxuXFxuLnJhbmdlcGlja2VyX19pbnB1dCA+IFNQQU4ge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBtYXJnaW46IDAgNHB4OyB9XFxuXFxuLnJhbmdlcGlja2VyX19pbnB1dCA+IFNQQU46bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX3NlbGVjdG9yIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBwYWRkaW5nOiAzMnB4IDI2cHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3gtc2hhZG93OiAwIDRweCAyOXB4IHJnYmEoMCwgMCwgMCwgMC4wOSk7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleDogMSAwIGF1dG87XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IGNhbGMoMTAwJSArIDE2cHgpO1xcbiAgcmlnaHQ6IDA7XFxuICB6LWluZGV4OiAxOyB9XFxuXFxuLnJhbmdlcGlja2VyLS1vcGVuIC5yYW5nZXBpY2tlcl9fc2VsZWN0b3Ige1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX3NlbGVjdG9yLWFycm93IHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAxMDAlO1xcbiAgcmlnaHQ6IDYwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLnJhbmdlcGlja2VyX19zZWxlY3Rvci1hcnJvdzo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogMTJweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSg0NWRlZyk7XFxuICB0b3A6IDEwMCU7XFxuICBsZWZ0OiA1MCU7XFxuICBib3gtc2hhZG93OiAwIDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wOSk7IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX2NhbGVuZGFycyB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuLnJhbmdlcGlja2VyX19jYWxlbmRhciB7XFxuICB3aWR0aDogMjUycHg7IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX2NhbGVuZGFyOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IDI2cHg7IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX21vbnRoLWluZGljYXRvciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlLXRleHQpOyB9XFxuXFxuLnJhbmdlcGlja2VyX19zZWxlY3Rvci1jb250cm9sIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMzJweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IC4zcyBhbGw7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGxlZnQgY2VudGVyIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogOXB4IDEzcHg7XFxuICBib3JkZXI6IDA7IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX3NlbGVjdG9yLWNvbnRyb2w6aG92ZXIge1xcbiAgb3BhY2l0eTogLjg7IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX3NlbGVjdG9yLWNvbnRyb2wtLWxlZnQge1xcbiAgbGVmdDogMjZweDsgfVxcblxcbi5yYW5nZXBpY2tlcl9fc2VsZWN0b3ItY29udHJvbC0tcmlnaHQge1xcbiAgcmlnaHQ6IDI2cHg7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyB9XFxuXFxuLnJhbmdlcGlja2VyX19kYXktb2Ytd2VlayxcXG4ucmFuZ2VwaWNrZXJfX2RhdGUtZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTsgfVxcblxcbi5yYW5nZXBpY2tlcl9fZGF5LW9mLXdlZWsge1xcbiAgbWFyZ2luLXRvcDogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIGNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi8qIERhdGVzICovXFxuLnJhbmdlcGlja2VyX19kYXRlLWdyaWQge1xcbiAgbWFyZ2luLXRvcDogMTZweDsgfVxcblxcbi5yYW5nZXBpY2tlcl9fY2VsbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXI6IDA7XFxuICB3aWR0aDogMzZweDtcXG4gIGhlaWdodDogMzZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHZhcigtLWRhcmstYmx1ZS10ZXh0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX2NlbGw6YWN0aXZlLFxcbi5yYW5nZXBpY2tlcl9fY2VsbC5yYW5nZXBpY2tlcl9fc2VsZWN0ZWQsXFxuLnJhbmdlcGlja2VyX19jZWxsLnJhbmdlcGlja2VyX19zZWxlY3RlZC1mcm9tLFxcbi5yYW5nZXBpY2tlcl9fY2VsbC5yYW5nZXBpY2tlcl9fc2VsZWN0ZWQtdG8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpOyB9XFxuXFxuLnJhbmdlcGlja2VyX19jZWxsOmhvdmVyLFxcbi5yYW5nZXBpY2tlcl9fY2VsbDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlLXRleHQpO1xcbiAgdHJhbnNpdGlvbjogLjJzIGFsbDsgfVxcblxcbi5yYW5nZXBpY2tlcl9fY2VsbC5yYW5nZXBpY2tlcl9fc2VsZWN0ZWQ6aG92ZXIsXFxuLnJhbmdlcGlja2VyX19jZWxsLnJhbmdlcGlja2VyX19zZWxlY3RlZC1mcm9tOmhvdmVyLFxcbi5yYW5nZXBpY2tlcl9fY2VsbC5yYW5nZXBpY2tlcl9fc2VsZWN0ZWQtdG86aG92ZXIsXFxuLnJhbmdlcGlja2VyX19jZWxsLnJhbmdlcGlja2VyX19zZWxlY3RlZDpmb2N1cyxcXG4ucmFuZ2VwaWNrZXJfX2NlbGwucmFuZ2VwaWNrZXJfX3NlbGVjdGVkLWZyb206Zm9jdXMsXFxuLnJhbmdlcGlja2VyX19jZWxsLnJhbmdlcGlja2VyX19zZWxlY3RlZC10bzpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWRkbGUtYmx1ZSk7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlLXRleHQpOyB9XFxuXFxuLnJhbmdlcGlja2VyX19jZWxsLnJhbmdlcGlja2VyX19zZWxlY3RlZC1iZXR3ZWVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc29ydGFibGUtdGFibGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAyMDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7IH1cXG5cXG4uc29ydGFibGUtdGFibGVfX3RhYmxlIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnNvcnRhYmxlLXRhYmxlX19yb3cge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQ6IGF1dG8tZmxvdyAvIDEyJSAzOCUgMjAlIDEwJSAxMCUgMTAlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuXFxuLnNvcnRhYmxlLXRhYmxlX19jZWxsIHtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIGNvbG9yOiB2YXIoLS10YWJsZS1ibGFjayk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ncmV5LWxpZ2h0KTsgfVxcblxcbi5zb3J0YWJsZS10YWJsZV9fY2VsbDpmaXJzdC1jaGlsZCB7XFxuICBwYWRkaW5nLWxlZnQ6IDMycHg7IH1cXG5cXG4uc29ydGFibGUtdGFibGVfX2NlbGw6bGFzdC1jaGlsZCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMnB4OyB9XFxuXFxuLnNvcnRhYmxlLXRhYmxlX19jZWxsLS1lcnJvciB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uLWVuZDogNzsgfVxcblxcbi5zb3J0YWJsZS10YWJsZV9fdGhlYWQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgei1pbmRleDogMztcXG4gIHRvcDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTsgfVxcblxcbi5zb3J0YWJsZS10YWJsZV9faGVhZGVyIC5zb3J0YWJsZS10YWJsZV9fY2VsbCB7XFxuICBtaW4td2lkdGg6IDEyMHB4O1xcbiAgY29sb3I6IHZhcigtLWdyZXktbGlnaHQpOyB9XFxuXFxuLnNvcnRhYmxlLXRhYmxlX19oZWFkZXIgLnNvcnRhYmxlLXRhYmxlX19jZWxsW2RhdGEtc29ydGFibGVdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5zb3J0YWJsZS10YWJsZV9fY2VsbC0tcXVhbnRpdHksXFxuLnNvcnRhYmxlLXRhYmxlX19jZWxsLS1wcmljZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyB9XFxuXFxuLnNvcnRhYmxlLXRhYmxlX19jZWxsLS1kaXNhYmxlZCB7XFxuICBvcGFjaXR5OiAuNTsgfVxcblxcbi5zb3J0YWJsZS10YWJsZV9fY2VsbFtkYXRhLXNvcnQtZGlyZWN0aW9uXTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgbWFyZ2luLXRvcDogLjI1ZW07XFxuICBtYXJnaW4tbGVmdDogLjI1ZW07XFxuICBib3JkZXI6IDVweCBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogY3VycmVudENvbG9yIHRyYW5zcGFyZW50OyB9XFxuXFxuLnNvcnRhYmxlLXRhYmxlX19jZWxsW2RhdGEtc29ydC1kaXJlY3Rpb249XFxcImFzY1xcXCJdOjphZnRlciB7XFxuICBib3JkZXItdG9wOiBub25lOyB9XFxuXFxuLnNvcnRhYmxlLXRhYmxlX19jZWxsW2RhdGEtc29ydC1kaXJlY3Rpb249XFxcImRlc2NcXFwiXTo6YWZ0ZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxcblxcbi5zb3J0YWJsZS10YWJsZV9fY2VsbC0tc29ydGVyOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1ncmV5KTsgfVxcblxcbi5zb3J0YWJsZS10YWJsZV9faW1hZ2Utd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uc29ydGFibGUtdGFibGVfX2ltYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtaW4td2lkdGg6IDQwcHg7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgcGFkZGluZzogNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleS1saWdodCk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7IH1cXG5cXG4uc29ydGFibGUtdGFibGVfX3ByZXZpZXcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9wYWNpdHk6IDA7XFxuICBwYWRkaW5nOiAuMjVlbTtcXG4gIGJhY2tncm91bmQtb3JpZ2luOiBjb250ZW50LWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleS1saWdodCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjI1czsgfVxcblxcbi5zb3J0YWJsZS10YWJsZV9fcHJldmlldzpob3ZlciB7XFxuICB3aWR0aDogMzAwJTtcXG4gIGhlaWdodDogMzAwJTtcXG4gIG9wYWNpdHk6IDE7IH1cXG5cXG4uc29ydGFibGUtdGFibGVfX2xpbmsge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwOyB9XFxuXFxuLnNvcnRhYmxlLXRhYmxlX19jYXRlZ29yeSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uc29ydGFibGUtdGFibGVfX3Rvb2x0aXAtY2F0ZWdvcnkge1xcbiAgY29sb3I6IHZhcigtLWdyZXkpOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudG9vbHRpcHMtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi50b29sdGlwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDM7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgbWFyZ2luOiAxcmVtIDAgMCAxcmVtO1xcbiAgcGFkZGluZzogLjVyZW0gLjc1cmVtO1xcbiAgYmFja2dyb3VuZDogI0VFRTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgY29sb3I6ICM1NTU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycztcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuXFxuLnRvb2x0aXBbZGF0YS12aXNpYmxlPVxcXCIxXFxcIl0ge1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbltkYXRhLXRvb2x0aXAtY29udGVudF0ge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzOyB9XFxuXFxuLnRvb2x0aXBzLWNvbnRhaW5lci0tZGltbWVkIFtkYXRhLXRvb2x0aXAtY29udGVudF06bm90KDpob3Zlcikge1xcbiAgb3BhY2l0eTogLjQ7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jYXRlZ29yaWVzX19saXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi5jYXRlZ29yaWVzX19saXN0LS1zdWJjYXRlZ29yaWVzIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07IH1cXG5cXG4uY2F0ZWdvcmllc19faXRlbSB7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleS1saWdodCk7IH1cXG5cXG4uY2F0ZWdvcmllc19faXRlbS0tdG9wY2F0ZWdvcnkge1xcbiAgbWFyZ2luOiAxcmVtOyB9XFxuICAuY2F0ZWdvcmllc19faXRlbS0tdG9wY2F0ZWdvcnkgKyAuY2F0ZWdvcmllc19faXRlbS0tdG9wY2F0ZWdvcnkge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtOyB9XFxuXFxuLmNhdGVnb3JpZXNfX2l0ZW0tLXN1YmNhdGVnb3J5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDFyZW0gMCAycmVtO1xcbiAgcGFkZGluZzogMXJlbTsgfVxcbiAgLmNhdGVnb3JpZXNfX2l0ZW0tLXN1YmNhdGVnb3J5ICsgLmNhdGVnb3JpZXNfX2l0ZW0tLXN1YmNhdGVnb3J5IHtcXG4gICAgbWFyZ2luLXRvcDogLjVyZW07IH1cXG5cXG4uY2F0ZWdvcmllc19faXRlbS0tb3BlbiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmV5LWV4dHJhLWxpZ2h0KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXktbGlnaHQpOyB9XFxuICAuY2F0ZWdvcmllc19faXRlbS0tb3BlbiAuY2F0ZWdvcmllc19fbGlzdC0tc3ViY2F0ZWdvcmllcyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLmNhdGVnb3JpZXNfX2NvdW50ZXIge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBjb2xvcjogdmFyKC0tZ3JleSk7IH1cXG5cXG4uY2F0ZWdvcmllc19fdG9nZ2xlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5jYXRlZ29yaWVzX190b2dnbGVyOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIG1hcmdpbi1yaWdodDogLjVyZW07XFxuICAgIGJvcmRlcjogLjVyZW0gc29saWQ7XFxuICAgIGJvcmRlci1ib3R0b206IDA7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZ3JleS1saWdodCkgdHJhbnNwYXJlbnQ7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMjVzOyB9XFxuICAuY2F0ZWdvcmllc19faXRlbS0tb3BlbiAuY2F0ZWdvcmllc19fdG9nZ2xlcjo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuL2ljb24tdHJhc2guc3ZnXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucHJvZHVjdC1mb3JtIHtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07IH1cXG5cXG4ucHJvZHVjdC1mb3JtX19saXN0LFxcbi5wcm9kdWN0LWZvcm1fX2Zvb3RlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGdyaWQtZ2FwOiAxcmVtOyB9XFxuXFxuLnByb2R1Y3QtZm9ybV9fbGlzdCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XFxuXFxuLnByb2R1Y3QtZm9ybV9faXRlbSB7XFxuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjsgfVxcbiAgLnByb2R1Y3QtZm9ybV9faXRlbS0tZnVsbCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAzOyB9XFxuICAucHJvZHVjdC1mb3JtX19pdGVtLS10aW55IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDE7IH1cXG4gIC5wcm9kdWN0LWZvcm1fX2l0ZW0tLWZvbGxvdyB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiBhdXRvOyB9XFxuICAucHJvZHVjdC1mb3JtX19pdGVtICsgLnByb2R1Y3QtZm9ybV9faXRlbSB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07IH1cXG5cXG4ucHJvZHVjdC1mb3JtX19saW5rIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDsgfVxcblxcbi5wcm9kdWN0LWZvcm1fX2lucHV0LS10ZXh0YXJlYSB7XFxuICBtaW4taGVpZ2h0OiAyMDBweDsgfVxcblxcbi5wcm9kdWN0LWZvcm1fX2ltYWdlcy1saXN0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IH1cXG5cXG4ucHJvZHVjdC1mb3JtX19pbWFnZXMtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IC41cmVtO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JleS1leHRyYS1saWdodCk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpOyB9XFxuICAucHJvZHVjdC1mb3JtX19pbWFnZXMtaXRlbSArIC5wcm9kdWN0LWZvcm1fX2ltYWdlcy1pdGVtIHtcXG4gICAgbWFyZ2luLXRvcDogLjVyZW07IH1cXG5cXG4ucHJvZHVjdC1mb3JtX19pbWFnZS13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5wcm9kdWN0LWZvcm1fX2ltYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDgwcHg7XFxuICBtaW4td2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgcGFkZGluZzogNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleS1saWdodCk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpOyB9XFxuXFxuLnByb2R1Y3QtZm9ybV9fcHJldmlldyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAyO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBhZGRpbmc6IC4yNWVtO1xcbiAgYmFja2dyb3VuZC1vcmlnaW46IGNvbnRlbnQtYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LWxpZ2h0KTtcXG4gIHRyYW5zaXRpb246IGFsbCAuMjVzOyB9XFxuXFxuLnByb2R1Y3QtZm9ybV9fcHJldmlldzpob3ZlciB7XFxuICB3aWR0aDogMzAwJTtcXG4gIGhlaWdodDogMzAwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzUlKSB0cmFuc2xhdGVZKC0zNSUpO1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbi5wcm9kdWN0LWZvcm1fX2ltYWdlLXNvdXJjZSB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTsgfVxcblxcbi5wcm9kdWN0LWZvcm1fX2ltYWdlLXJlbW92ZSB7XFxuICB3aWR0aDogM3JlbTtcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgNTAlIDUwJSBuby1yZXBlYXQ7XFxuICBmb250LXNpemU6IDA7XFxuICBib3JkZXI6IG5vbmU7IH1cXG5cXG4ucHJvZHVjdC1mb3JtX19mb290ZXIge1xcbiAgbWFyZ2luLXRvcDogMnJlbTsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obW9kdWxlSWQsIGxpc3QsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBjc3M6IGxpc3RbaV1bMV0sXG4gICAgICBtZWRpYTogbGlzdFtpXVsyXSxcbiAgICAgIHNvdXJjZU1hcDogbGlzdFtpXVszXVxuICAgIH07XG5cbiAgICBpZiAoc3R5bGVzSW5Eb21bbW9kdWxlSWRdW2ldKSB7XG4gICAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF1baV0ocGFydCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXS5wdXNoKGFkZFN0eWxlKHBhcnQsIG9wdGlvbnMpKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtb2R1bGVJZCwgbGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBtb2R1bGVJZCA9IG9wdGlvbnMuYmFzZSA/IG1vZHVsZUlkICsgb3B0aW9ucy5iYXNlIDogbW9kdWxlSWQ7XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuXG4gIGlmICghc3R5bGVzSW5Eb21bbW9kdWxlSWRdKSB7XG4gICAgc3R5bGVzSW5Eb21bbW9kdWxlSWRdID0gW107XG4gIH1cblxuICBtb2R1bGVzVG9Eb20obW9kdWxlSWQsIGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXN0eWxlc0luRG9tW21vZHVsZUlkXSkge1xuICAgICAgc3R5bGVzSW5Eb21bbW9kdWxlSWRdID0gW107XG4gICAgfVxuXG4gICAgbW9kdWxlc1RvRG9tKG1vZHVsZUlkLCBuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIGogPSBuZXdMaXN0Lmxlbmd0aDsgaiA8IHN0eWxlc0luRG9tW21vZHVsZUlkXS5sZW5ndGg7IGorKykge1xuICAgICAgc3R5bGVzSW5Eb21bbW9kdWxlSWRdW2pdKCk7XG4gICAgfVxuXG4gICAgc3R5bGVzSW5Eb21bbW9kdWxlSWRdLmxlbmd0aCA9IG5ld0xpc3QubGVuZ3RoO1xuXG4gICAgaWYgKHN0eWxlc0luRG9tW21vZHVsZUlkXS5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVttb2R1bGVJZF07XG4gICAgfVxuICB9O1xufTsiLCJpbXBvcnQgTGF5b3V0IGZyb20gJy4vY29tcG9uZW50cy9MYXlvdXQvaW5kZXguanMnO1xuaW1wb3J0IENvbHVtbkNoYXJ0IGZyb20gJy4vY29tcG9uZW50cy9Db2x1bW5DaGFydC9pbmRleC5qcyc7XG5pbXBvcnQgUmFuZ2VQaWNrZXIgZnJvbSAnLi9jb21wb25lbnRzL1JhbmdlUGlja2VyL2luZGV4LmpzJztcbmltcG9ydCBTb3J0YWJsZVRhYmxlIGZyb20gJy4vY29tcG9uZW50cy9Tb3J0YWJsZVRhYmxlL2luZGV4LmpzJztcbmltcG9ydCBEcmFnZ2FibGVMaXN0IGZyb20gJy4vY29tcG9uZW50cy9EcmFnZ2FibGVMaXN0L2luZGV4LmpzJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9saWIvUm91dGVyLmpzJztcblxuaW1wb3J0ICcuL2Fzc2V0cy9zY3NzL3N0eWxlcy5zY3NzJztcblxuLy8gUm91dGluZ1xuY29uc3Qgcm91dGVyID0gUm91dGVyLmluc3RhbmNlKCk7XG5cbnJvdXRlclxuICAuYWRkUm91dGUoL14kLywgJ2Rhc2hib2FyZCcpXG4gIC5hZGRSb3V0ZSgvXmNhdGVnb3JpZXMkLywgJ2NhdGVnb3JpZXMnKVxuICAuYWRkUm91dGUoL15wcm9kdWN0c1xcLyhbXFxTKCktXSspL2csICdwcm9kdWN0cy9lZGl0JylcbiAgLmFkZFJvdXRlKC9ecHJvZHVjdHNcXC9hZGQkLywgJ3Byb2R1Y3RzL2VkaXQnKVxuICAuYWRkUm91dGUoL15wcm9kdWN0cyQvLCAncHJvZHVjdHMnKVxuICAuc2V0Tm90Rm91bmRQYWdlKCdlcnJvcjQwNCcpXG4gIC5hZGRMaXN0ZW5lcigpO1xuXG4vLyBJbml0IGN1c3RvbSBlbGVtZW50c1xud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncGFnZS1sYXlvdXQnLCBMYXlvdXQpO1xud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY29sdW1uLWNoYXJ0JywgQ29sdW1uQ2hhcnQpO1xud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncmFuZ2UtcGlja2VyJywgUmFuZ2VQaWNrZXIpO1xud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc29ydGFibGUtdGFibGUnLCBTb3J0YWJsZVRhYmxlKTtcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2RyYWdnYWJsZS1saXN0JywgRHJhZ2dhYmxlTGlzdCwgeyBleHRlbmRzOiAndWwnIH0pO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShtb2R1bGUuaWQsIGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZWxlbTogJ2NvbHVtbi1jaGFydCcsXG4gIGNvbnRlbnQ6ICdjb2x1bW4tY2hhcnRfX2NvbnRlbnQnLFxuICBoZWFkZXI6ICdjb2x1bW4tY2hhcnRfX2hlYWRlcicsXG4gIHRpdGxlOiAnY29sdW1uLWNoYXJ0X190aXRsZScsXG4gIHRvdGFsOiAnY29sdW1uLWNoYXJ0X190b3RhbCcsXG4gIGxpc3Q6ICdjb2x1bW4tY2hhcnRfX2xpc3QnLFxuICBpdGVtOiAnY29sdW1uLWNoYXJ0X19pdGVtJyxcbiAgdG9vbHRpcDogJ2NvbHVtbi1jaGFydF9fdG9vbHRpcCcsXG4gIHRvb2x0aXBEYXRlOiAnY29sdW1uLWNoYXJ0X190b29sdGlwLWRhdGUnLFxuICB0b29sdGlwUXVhbnRpdHk6ICdjb2x1bW4tY2hhcnRfX3Rvb2x0aXAtcXVhbnRpdHknLFxuICBlcnJvcjogJ2NvbHVtbi1jaGFydF9fZXJyb3InXG59O1xuIiwiaW1wb3J0IFRvb2x0aXBzIGZyb20gJy4uL1Rvb2x0aXBzL2luZGV4LmpzJztcbmltcG9ydCB7XG4gIGZpbGxUZW1wbGF0ZSxcbiAgZm9ybWF0RGF0ZSxcbiAgZXNjYXBlSFRNTCxcbiAgZm9ybWF0VG90YWwsXG4gIGZldGNoSnNvblxufSBmcm9tICcuLi8uLi9oZWxwZXJzL2luZGV4LmpzJztcbmltcG9ydCBjbHMgZnJvbSAnLi9jbGFzc2VzLmpzJztcbmltcG9ydCB0ZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMuanMnO1xuXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2x1bW5DaGFydCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmFwaVVybCA9IHByb2Nlc3MuZW52LkFQSV9VUkwgfHwgJ2h0dHBzOi8vY291cnNlLWpzLmphdmFzY3JpcHQucnUnO1xuXG4gICAgdGhpcy5jaGFuZ2VEYXRlID0gdGhpcy5jaGFuZ2VEYXRlLmJpbmQodGhpcyk7XG4gIH1cblxuICBhc3luYyBjb25uZWN0ZWRDYWxsYmFjayAoKSB7XG4gICAgY29uc3QgeyB0eXBlLCBpc01vbmV5LCBmcm9tLCB0byB9ID0gdGhpcy5kYXRhc2V0O1xuXG4gICAgdGhpcy5kYXRlcyA9IHtcbiAgICAgIGZyb206IG5ldyBEYXRlKGZyb20pLFxuICAgICAgdG86IG5ldyBEYXRlKHRvKVxuICAgIH07XG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuZm9ybWF0VG90YWwgPSBpc01vbmV5ID8gZm9ybWF0VG90YWwgOiBudWxsO1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZChjbHMuZWxlbSwgYCR7Y2xzLmVsZW19LS0ke3R5cGV9YCk7XG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoY2xzLmNvbnRlbnQpO1xuICAgIHRoaXMudGl0bGUgPSBgVG90YWwgJHt0eXBlfWA7XG4gICAgdGhpcy51cmwgPSB0aGlzLmdldFVybCgpO1xuXG4gICAgYXdhaXQgdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLmFwcGVuZCh0aGlzLmVsZW0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlRGF0ZScsIHRoaXMuY2hhbmdlRGF0ZSk7XG4gIH1cblxuICBnZXRVcmwgKCkge1xuICAgIHJldHVybiBgJHt0aGlzLmFwaVVybH0vYXBpL2Rhc2hib2FyZC8ke3RoaXMudHlwZX0/ZnJvbT0ke3RoaXMuZGF0ZXMuZnJvbX0mdG89JHt0aGlzLmRhdGVzLnRvfWA7XG4gIH1cblxuICBhc3luYyBnZXREYXRhICgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoSnNvbih0aGlzLnVybCk7XG4gICAgICByZXR1cm4geyBkYXRhIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiB7IGVycm9yIH07XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCB0aGlzLmdldERhdGEoKTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICB0aGlzLmVsZW0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVFbmQnLCBgPGRpdiBjbGFzcz1cIiR7Y2xzLmVycm9yfVwiPiR7ZXJyb3J9PC9kaXY+YCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy52YWx1ZXMgPSBPYmplY3QudmFsdWVzKHRoaXMuZGF0YSk7XG5cbiAgICBpZiAodGhpcy52YWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnZhbHVlcy5wdXNoKCdObyBkYXRhJyk7XG4gICAgfVxuXG4gICAgY29uc3QgaGVhZGVyU3RyID0gdGhpcy5nZXRIZWFkZXJTdHIoKTtcblxuICAgIGNvbnN0IGxpc3RTdHIgPSB0aGlzLmdldExpc3RTdHIoKTtcbiAgICB0aGlzLmVsZW0uaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgJ2JlZm9yZUVuZCcsXG4gICAgICBoZWFkZXJTdHIgKyBsaXN0U3RyXG4gICAgKTtcblxuICAgIHRoaXMuYWRkQWN0aW9ucygpO1xuICB9XG5cbiAgZ2V0SGVhZGVyU3RyICgpIHtcbiAgICB0aGlzLnRvdGFsID0gdGhpcy52YWx1ZXMucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiBwcmV2ICsgY3VycmVudCwgMCk7XG5cbiAgICBpZiAodGhpcy5mb3JtYXRUb3RhbCkge1xuICAgICAgdGhpcy50b3RhbCA9IHRoaXMuZm9ybWF0VG90YWwodGhpcy50b3RhbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbGxUZW1wbGF0ZSh7XG4gICAgICB0bXBsOiB0ZW1wbGF0ZXMuaGVhZGVyLFxuICAgICAgZGF0YTogdGhpc1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0TGlzdFN0ciAoKSB7XG4gICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoLi4udGhpcy52YWx1ZXMpO1xuICAgIGxldCBjaGFydFN0ciA9ICcnO1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5kYXRhKSB7XG4gICAgICBjb25zdCBkYXRlID0gZm9ybWF0RGF0ZShrZXkpO1xuICAgICAgbGV0IHZhbHVlID0gdGhpcy5kYXRhW2tleV07XG4gICAgICBjb25zdCBoZWlnaHRWYWx1ZSA9ICgodmFsdWUgLyBtYXgpICogMTAwKS50b0ZpeGVkKDIpO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gYCR7aGVpZ2h0VmFsdWV9JWA7XG5cbiAgICAgIGlmICh0aGlzLmZvcm1hdFRvdGFsKSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5mb3JtYXRUb3RhbCh2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRvb3RpcENvbnRlbnQgPSBgPHNtYWxsIGNsYXNzPVwiJHtjbHMudG9vbHRpcERhdGV9XCI+JHtkYXRlfTwvc21hbGw+PGRpdiBjbGFzcz1cIiR7Y2xzLnRvb2x0aXBRdWFudGl0eX1cIj4ke3ZhbHVlfTwvZGl2PmA7XG5cbiAgICAgIGNoYXJ0U3RyICs9IGZpbGxUZW1wbGF0ZSh7XG4gICAgICAgIHRtcGw6IHRlbXBsYXRlcy5jaGFydEl0ZW0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAuLi50aGlzLFxuICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICB0b290aXBDb250ZW50OiBlc2NhcGVIVE1MKHRvb3RpcENvbnRlbnQpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBgPHVsIGNsYXNzPVwiJHtjbHMubGlzdH1cIj4ke2NoYXJ0U3RyfTwvdWw+YDtcbiAgfVxuXG4gIGFkZEFjdGlvbnMgKCkge1xuICAgIHRoaXMudG9vbHRpcHMgPSBuZXcgVG9vbHRpcHMoe1xuICAgICAgZWxlbTogdGhpcy5lbGVtLFxuICAgICAgZGltU2libGluZ3M6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZURhdGUgKGV2ZW50KSB7XG4gICAgaWYgKCFldmVudC5kZXRhaWwgfHwgIWV2ZW50LmRldGFpbC5kYXRlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgZnJvbSwgdG8gfSA9IGV2ZW50LmRldGFpbC5kYXRlcztcbiAgICB0aGlzLmRhdGVzID0ge1xuICAgICAgZnJvbTogZnJvbSxcbiAgICAgIHRvOiB0b1xuICAgIH07XG5cbiAgICB0aGlzLnVybCA9IHRoaXMuZ2V0VXJsKCk7XG4gICAgdGhpcy5lbGVtLmlubmVySFRNTCA9ICcnO1xuICAgIGF3YWl0IHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5hcHBlbmQodGhpcy5lbGVtKTtcbiAgfVxufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShtb2R1bGUuaWQsIGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCBjbHMgZnJvbSAnLi9jbGFzc2VzLmpzJztcblxuZXhwb3J0IGNvbnN0IGhlYWRlciA9IGA8aGVhZGVyIGNsYXNzPVwiJHtjbHMuaGVhZGVyfVwiPlxuICA8aDMgY2xhc3M9XCIke2Nscy50aXRsZX1cIj57dGl0bGV9PC9oMz5cbiAgPGRpdiBjbGFzcz1cIiR7Y2xzLnRvdGFsfVwiPnt0b3RhbH08L2Rpdj5cbjwvaGVhZGVyPmA7XG5cbmV4cG9ydCBjb25zdCBjaGFydEl0ZW0gPSBgPGxpXG4gIGNsYXNzPVwiJHtjbHMuaXRlbX1cIlxuICBkYXRhLXRvb2x0aXAtY29udGVudD1cInt0b290aXBDb250ZW50fVwiXG4gIHN0eWxlPVwiaGVpZ2h0OiB7aGVpZ2h0fVwiPjwvbGk+YDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBoZWFkZXIsXG4gIGNoYXJ0SXRlbVxufTtcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4M2M3NTQyMGQwMzYwZWQyMjUxMWMwOTJlNTdkMWQ1NC5zdmdcIjsiLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuaW1wb3J0ICcuL2dyYWItaWNvbi5zdmcnO1xuXG5jb25zdCBjbHMgPSB7XG4gIGVsZW06ICdkcmFnZ2FibGUtbGlzdCcsXG4gIGl0ZW1zOiAnZHJhZ2dhYmxlLWxpc3RfX2l0ZW1zJyxcbiAgaXRlbTogJ2RyYWdnYWJsZS1saXN0X19pdGVtJyxcbiAgZHJhZ2dlZDogJ2RyYWdnYWJsZS1saXN0X19pdGVtLS1kcmFnZ2VkJyxcbiAgcGxhY2Vob2xkZXI6ICdkcmFnZ2FibGUtbGlzdF9faXRlbS0tcGxhY2Vob2xkZXInXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnZ2FibGVMaXN0IGV4dGVuZHMgSFRNTFVMaXN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5zdGFydERyYWcgPSB0aGlzLnN0YXJ0RHJhZy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RvcERyYWcgPSB0aGlzLnN0b3BEcmFnLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb3ZlID0gdGhpcy5tb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRQbGFjZWhvbGRlckhlaWdodCA9IHRoaXMuc2V0UGxhY2Vob2xkZXJIZWlnaHQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFzeW5jIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoY2xzLmVsZW0pO1xuICAgIHRoaXMuaXRlbXMgPSB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMuY3JlYXRlUGxhY2Vob2xkZXIoKTtcblxuICAgIHRoaXMuYWRkQ2xhc3NUb0l0ZW1zKCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIHRoaXMuc3RhcnREcmFnKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgdGhpcy5zZXRQbGFjZWhvbGRlckhlaWdodCwgeyBvbmNlOiB0cnVlIH0pO1xuICB9XG5cbiAgc3RhcnREcmFnIChldmVudCkge1xuICAgIHRoaXMuY3VycmVudEVsZW0gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmRyYWdnYWJsZS1saXN0X19pdGVtJyk7XG4gICAgaWYgKCF0aGlzLmN1cnJlbnRFbGVtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50RWxlbS5yZXBsYWNlV2l0aCh0aGlzLnBsYWNlaG9sZGVyKTtcbiAgICB0aGlzLmN1cnJlbnRFbGVtLmNsYXNzTGlzdC5hZGQoY2xzLmRyYWdnZWQpO1xuICAgIHRoaXMuYXBwZW5kKHRoaXMuY3VycmVudEVsZW0pO1xuXG4gICAgY29uc3QgeyB0b3AgfSA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy50b3AgPSB0b3A7XG4gICAgdGhpcy5lbGVtSGFsZiA9IHRoaXMuY3VycmVudEVsZW0ub2Zmc2V0SGVpZ2h0IC8gMjtcblxuICAgIGNvbnN0IGVsZW1Ub3AgPSBldmVudC5jbGllbnRZIC0gdGhpcy50b3AgLSB0aGlzLmVsZW1IYWxmO1xuICAgIHRoaXMuY3VycmVudEVsZW0uc3R5bGUudG9wID0gYCR7ZWxlbVRvcH1weGA7XG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgdGhpcy5tb3ZlKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIHRoaXMuc3RvcERyYWcpO1xuICB9XG5cbiAgbW92ZSAoZXZlbnQpIHtcbiAgICBjb25zdCBlbGVtVG9wID0gZXZlbnQuY2xpZW50WSAtIHRoaXMudG9wIC0gdGhpcy5lbGVtSGFsZjtcbiAgICB0aGlzLmN1cnJlbnRFbGVtLnN0eWxlLnRvcCA9IGAke2VsZW1Ub3B9cHhgO1xuXG4gICAgLy8gQ2hlY2sgaW50ZXJzZWN0aW9uXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuaXRlbXMpIHtcbiAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucyhjbHMuZHJhZ2dlZCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRvcCA9IGl0ZW0ub2Zmc2V0VG9wO1xuICAgICAgY29uc3QgYm90dG9tID0gdG9wICsgaXRlbS5vZmZzZXRIZWlnaHQ7XG4gICAgICBjb25zdCBtaWRkbGUgPSB0b3AgKyBpdGVtLm9mZnNldEhlaWdodCAvIDI7XG4gICAgICBjb25zdCBjaGVja0xpbmUgPSBlbGVtVG9wICsgdGhpcy5lbGVtSGFsZjtcblxuICAgICAgaWYgKGNoZWNrTGluZSA+IHRvcCAmJiBjaGVja0xpbmUgPCBib3R0b20pIHtcbiAgICAgICAgaWYgKGNoZWNrTGluZSA8PSBtaWRkbGUpIHtcbiAgICAgICAgICBpdGVtLmFmdGVyKHRoaXMucGxhY2Vob2xkZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0uYmVmb3JlKHRoaXMucGxhY2Vob2xkZXIpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0b3BEcmFnICgpIHtcbiAgICB0aGlzLnBsYWNlaG9sZGVyLnJlcGxhY2VXaXRoKHRoaXMuY3VycmVudEVsZW0pO1xuICAgIHRoaXMuY3VycmVudEVsZW0uY2xhc3NMaXN0LnJlbW92ZShjbHMuZHJhZ2dlZCk7XG4gICAgdGhpcy5jdXJyZW50RWxlbS5zdHlsZS50b3AgPSAnJztcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgdGhpcy5tb3ZlKTtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIHRoaXMuc3RvcERyYWcpO1xuICB9XG5cbiAgY3JlYXRlUGxhY2Vob2xkZXIgKCkge1xuICAgIGNvbnN0IGZpcnN0SXRlbSA9IHRoaXMuaXRlbXNbMF07XG4gICAgY29uc3QgcGxhY2Vob2xkZXIgPSBmaXJzdEl0ZW0uY2xvbmVOb2RlKHRydWUpO1xuICAgIHBsYWNlaG9sZGVyLmNsYXNzTGlzdC5hZGQoY2xzLnBsYWNlaG9sZGVyLCBjbHMuaXRlbSk7XG4gICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICByZXR1cm4gcGxhY2Vob2xkZXI7XG4gIH1cblxuICBzZXRQbGFjZWhvbGRlckhlaWdodCAoKSB7XG4gICAgY29uc3QgZmlyc3RJdGVtID0gdGhpcy5pdGVtc1swXTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyLnN0eWxlLm1pbkhlaWdodCA9IGAke2ZpcnN0SXRlbS5vZmZzZXRIZWlnaHR9cHhgO1xuICB9XG5cbiAgYWRkQ2xhc3NUb0l0ZW1zICgpIHtcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoY2xzLml0ZW0pKTtcbiAgfVxufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShtb2R1bGUuaWQsIGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2luZGV4LmpzJztcbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xuICAgIHRoaXMuYXBwZW5kKHRoaXMucmVuZGVyKCkpO1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgncGFnZScpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChgPGRpdiBjbGFzcz1cInBhZ2UtY29udGFpbmVyXCI+XG4gICAgICA8YXNpZGUgY2xhc3M9XCJwYWdlLWFzaWRlXCI+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPkRhc2hib2FyZDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvcHJvZHVjdHNcIj5Qcm9kdWN0czwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvY2F0ZWdvcmllc1wiPkNhdGVnb3JpZXM8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9hc2lkZT5cblxuICAgICAgPG1haW4gY2xhc3M9XCJwYWdlLW1haW5cIiBpZD1cImNvbnRlbnRcIj5cbiAgICAgICAgPCEtLSBtYWluIGNvbnRlbnQgd2lsbCBiZSBoZXJlIC0tPlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PmApO1xuICB9XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKG1vZHVsZS5pZCwgY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxuY29uc3QgY2xzID0ge1xuICBlbGVtOiAnbm90aWZpY2F0aW9uJyxcbiAgd2FybmluZzogJ25vdGlmaWNhdGlvbi0td2FybmluZycsXG4gIGVycm9yOiAnbm90aWZpY2F0aW9uLS1lcnJvcidcbn07XG5cbmNvbnN0IHNlY29uZCA9IDEwMDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGlmaWNhdGlvbiB7XG4gIGNvbnN0cnVjdG9yICh7IG1lc3NhZ2UsIGNvbnRhaW5lciwgdHlwZSB9KSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuZHVyYXRpb24gPSB0aGlzLmdldER1cmF0aW9uKCk7XG4gICAgdGhpcy5jbGFzc05hbWVzID0gdGhpcy5nZXRDbGFzc2VzKCk7XG4gICAgdGhpcy5hZGRFbGVtKCk7XG4gICAgdGhpcy5pc0ZpbmlzaGVkID0gZmFsc2U7XG4gIH1cblxuICBhZGRFbGVtICgpIHtcbiAgICB0aGlzLmVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZCguLi50aGlzLmNsYXNzTmFtZXMpO1xuICAgIHRoaXMuZWxlbS5kYXRhc2V0LnN0YXRlID0gJ3Nob3duJztcbiAgICB0aGlzLmVsZW0uaW5uZXJIVE1MID0gdGhpcy5tZXNzYWdlO1xuICAgIHRoaXMuY29udGFpbmVyLnByZXBlbmQodGhpcy5lbGVtKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmhpZGVFbGVtKCk7IH0sIHRoaXMuZHVyYXRpb24pO1xuICB9XG5cbiAgYXN5bmMgaGlkZUVsZW0gKHBhcmFtcyA9IHt9KSB7XG4gICAgdGhpcy5pc0ZpbmlzaGVkID0gdHJ1ZTtcbiAgICB0aGlzLmVsZW0uZGF0YXNldC5zdGF0ZSA9ICdoaWRkZW4nO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuZWxlbS5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZWxlbS5yZW1vdmUoKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXREdXJhdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgcmV0dXJuIDUgKiBzZWNvbmQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIDMgKiBzZWNvbmQ7XG4gIH1cblxuICBnZXRDbGFzc2VzICgpIHtcbiAgICBjb25zdCBjbGFzc2VzID0gW2Nscy5lbGVtXTtcblxuICAgIGlmICh0aGlzLnR5cGUgJiYgY2xzW3RoaXMudHlwZV0pIHtcbiAgICAgIGNsYXNzZXMucHVzaChjbHNbdGhpcy50eXBlXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkobW9kdWxlLmlkLCBjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlTWVzc2FnZSB7XG4gIGNvbnN0cnVjdG9yICh7IHRpdGxlLCB0ZXh0LCBjYWxsYmFjaywgY2FsbGJhY2tUZXh0LCBlcnJvciB9KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMudGV4dCA9IHRleHQgfHwgJ1NvbWV0aGluZyB3ZW50IHdyb25nJztcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgdGhpcy5jYWxsYmFja1RleHQgPSBjYWxsYmFja1RleHQ7XG4gICAgdGhpcy5lcnJvciA9IGVycm9yO1xuXG4gICAgaWYgKCF0aGlzLnRpdGxlICYmIHRoaXMuZXJyb3IpIHtcbiAgICAgIHRoaXMudGl0bGUgPSAnRXJyb3InO1xuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuICB9XG5cbiAgY3JlYXRlRWxlbWVudCAoKSB7XG4gICAgdGhpcy5lbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoJ3BhZ2UtbWVzc2FnZScpO1xuXG4gICAgaWYgKHRoaXMuZXJyb3IpIHtcbiAgICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKCdwYWdlLW1lc3NhZ2UtLWVycm9yJyk7XG4gICAgfVxuXG4gICAgdGhpcy5jb250ZW50ID0gYDxoMz4ke3RoaXMudGl0bGV9PC9oMz48cD4ke3RoaXMudGV4dH08L3A+YDtcblxuICAgIGlmICh0aGlzLmVycm9yKSB7XG4gICAgICB0aGlzLmNvbnRlbnQgKz0gYDxkaXYgY2xhc3M9XCJwYWdlLW1lc3NhZ2VfX2Vycm9yXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLW1lc3NhZ2VfX2Vycm9yLXRleHRcIj5cbiAgICAgICAgICA8c3Ryb25nPiR7dGhpcy5lcnJvci5uYW1lfTwvc3Ryb25nPjogJHt0aGlzLmVycm9yLm1lc3NhZ2V9PC9kaXY+XG4gICAgICA8L2Rpdj5gO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyQmVnaW4nLCB0aGlzLmNvbnRlbnQpO1xuICB9XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKG1vZHVsZS5pZCwgY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZiMTEyYjU1MDI3NmQ3NTJkMGIzZTEwN2FkZThkNjE3LnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2ODJkZWRhYWZiMDQ0ZTdiOWVhMzUyYTcwYmFhZjU2OS5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGVsZW06ICdyYW5nZXBpY2tlcicsXG4gIGVsZW1PcGVuOiAncmFuZ2VwaWNrZXItLW9wZW4nLFxuICBpbnB1dDogJ3JhbmdlcGlja2VyX19pbnB1dCcsXG4gIGZyb206ICdyYW5nZXBpY2tlcl9fZnJvbScsXG4gIHRvOiAncmFuZ2VwaWNrZXJfX3RvJyxcbiAgc2VsZWN0b3I6ICdyYW5nZXBpY2tlcl9fc2VsZWN0b3InLFxuICBzZWxlY3RvckFycm93OiAncmFuZ2VwaWNrZXJfX3NlbGVjdG9yLWFycm93JyxcbiAgc2VsZWN0b3JDb250cm9sOiAncmFuZ2VwaWNrZXJfX3NlbGVjdG9yLWNvbnRyb2wnLFxuICBjYWxlbmRhcnM6ICdyYW5nZXBpY2tlcl9fY2FsZW5kYXJzJyxcbiAgY2FsZW5kYXI6ICdyYW5nZXBpY2tlcl9fY2FsZW5kYXInLFxuICBjZWxsOiAncmFuZ2VwaWNrZXJfX2NlbGwnLFxuICBzZWxlY3RlZEZyb206ICdyYW5nZXBpY2tlcl9fc2VsZWN0ZWQtZnJvbScsXG4gIHNlbGVjdGVkQmV0d2VlbjogJ3JhbmdlcGlja2VyX19zZWxlY3RlZC1iZXR3ZWVuJyxcbiAgc2VsZWN0ZWRUbzogJ3JhbmdlcGlja2VyX19zZWxlY3RlZC10bycsXG4gIG1vbnRoSW5kaWNhdG9yOiAncmFuZ2VwaWNrZXJfX21vbnRoLWluZGljYXRvcicsXG4gIGRheU9mV2VlazogJ3JhbmdlcGlja2VyX19kYXktb2Ytd2VlaycsXG4gIGRhdGVHcmlkOiAncmFuZ2VwaWNrZXJfX2RhdGUtZ3JpZCdcbn07XG4iLCJpbXBvcnQge1xuICBmaWxsVGVtcGxhdGUsXG4gIGdldFdlZWtEYXlzXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvaW5kZXguanMnO1xuaW1wb3J0IHRlbXBsYXRlcyBmcm9tICcuL3RlbXBsYXRlcy5qcyc7XG5pbXBvcnQgY2xzIGZyb20gJy4vY2xhc3Nlcy5qcyc7XG5cbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5pbXBvcnQgJy4vYXJyb3ctaWNvbi5zdmcnO1xuaW1wb3J0ICcuL2NhbGVuZGFyLWljb24uc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuZ2VQaWNrZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudG9nZ2xlUGlja2VyID0gdGhpcy50b2dnbGVQaWNrZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlbGVjdG9yT25DbGljayA9IHRoaXMuc2VsZWN0b3JPbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5ib2R5T25DbGljayA9IHRoaXMuYm9keU9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZVJhbmdlID0gdGhpcy51cGRhdGVSYW5nZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5pc09wZW5lZCA9IGZhbHNlO1xuICAgIHRoaXMuZWxlbSA9IHRoaXM7XG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoJ3JhbmdlcGlja2VyJyk7XG4gIH1cblxuICBhc3luYyBjb25uZWN0ZWRDYWxsYmFjayAoKSB7XG4gICAgY29uc3QgeyBmcm9tLCB0byB9ID0gdGhpcy5kYXRhc2V0O1xuXG4gICAgdGhpcy5kYXRlcyA9IHtcbiAgICAgIGZyb206IG5ldyBEYXRlKGZyb20pLFxuICAgICAgdG86IG5ldyBEYXRlKHRvKVxuICAgIH07XG5cbiAgICB0aGlzLm1vbnRoZXMgPSB0aGlzLmdldERpc3BsYXllZE1vbnRoZXMoKTtcbiAgICB0aGlzLm5ld0RhdGVzID0gW107XG5cbiAgICB0aGlzLmFkZElucHV0KCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlRGF0ZScsIHRoaXMudXBkYXRlUmFuZ2UpO1xuICB9XG5cbiAgZ2V0RGlzcGxheWVkTW9udGhlcyAoKSB7XG4gICAgY29uc3QgY3VycmVudE1vbnRoID0gbmV3IERhdGUodGhpcy5kYXRlcy5mcm9tKTtcbiAgICBsZXQgbW9udGggPSBjdXJyZW50TW9udGguZ2V0TW9udGgoKTtcbiAgICBjb25zdCBjdXJyZW50RGF5ID0gMTtcbiAgICBjdXJyZW50TW9udGguc2V0RGF0ZShjdXJyZW50RGF5KTtcblxuICAgIGNvbnN0IG5leHRNb250aCA9IG5ldyBEYXRlKGN1cnJlbnRNb250aCk7XG4gICAgbmV4dE1vbnRoLnNldE1vbnRoKCsrbW9udGgpO1xuXG4gICAgcmV0dXJuIFtjdXJyZW50TW9udGgsIG5leHRNb250aF07XG4gIH1cblxuICBhZGRJbnB1dCAoKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGZyb206IHRoaXMuZGF0ZXMuZnJvbS50b0xvY2FsZURhdGVTdHJpbmcoKSxcbiAgICAgIHRvOiB0aGlzLmRhdGVzLnRvLnRvTG9jYWxlRGF0ZVN0cmluZygpXG4gICAgfTtcbiAgICBjb25zdCB0bXBsID0gdGVtcGxhdGVzLmlucHV0O1xuICAgIGNvbnN0IGlucHV0U3RyID0gZmlsbFRlbXBsYXRlKHtcbiAgICAgIHRtcGwsXG4gICAgICBkYXRhXG4gICAgfSk7XG5cbiAgICB0aGlzLmVsZW0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlckJlZ2luJywgaW5wdXRTdHIpO1xuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcihgLiR7Y2xzLmlucHV0fWApO1xuICAgIHRoaXMuaW5wdXRGcm9tID0gdGhpcy5pbnB1dC5xdWVyeVNlbGVjdG9yKGAuJHtjbHMuZnJvbX1gKTtcbiAgICB0aGlzLmlucHV0VG8gPSB0aGlzLmlucHV0LnF1ZXJ5U2VsZWN0b3IoYC4ke2Nscy50b31gKTtcblxuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB0aGlzLnRvZ2dsZVBpY2tlcik7XG4gICAgLy8gY2FwdHVyZTogdHJ1ZSByZXZlcnNlcyBvcmRlciBvZiBldmVudHNcbiAgICAvLyBjbGljayBvbiBib2R5IGZpcmVzIGZpcnN0XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIHRoaXMuYm9keU9uQ2xpY2ssIHtcbiAgICAgIGNhcHR1cmU6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIGJvZHlPbkNsaWNrICgpIHtcbiAgICBjb25zdCBwYXJlbnRSYW5nZVBpY2tlciA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KGAuJHtjbHMuZWxlbX1gKTtcblxuICAgIGlmICghcGFyZW50UmFuZ2VQaWNrZXIgJiYgdGhpcy5pc09wZW5lZCkge1xuICAgICAgdGhpcy5oaWRlUGlja2VyKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlSW5wdXQgKCkge1xuICAgIHRoaXMuaW5wdXRGcm9tLmlubmVySFRNTCA9IHRoaXMuZGF0ZXMuZnJvbS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgICB0aGlzLmlucHV0VG8uaW5uZXJIVE1MID0gdGhpcy5kYXRlcy50by50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgfVxuXG4gIHVwZGF0ZVJhbmdlICgpIHtcbiAgICB0aGlzLm1vbnRoZXMgPSB0aGlzLmdldERpc3BsYXllZE1vbnRoZXMoKTtcbiAgICB0aGlzLm5ld0RhdGVzID0gW107XG4gICAgdGhpcy51cGRhdGVJbnB1dCgpO1xuICAgIHRoaXMuaGlkZVBpY2tlcigpO1xuICB9XG5cbiAgdG9nZ2xlUGlja2VyICgpIHtcbiAgICBpZiAodGhpcy5pc09wZW5lZCkge1xuICAgICAgdGhpcy5oaWRlUGlja2VyKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93UGlja2VyKCk7XG4gICAgdGhpcy5pc09wZW5lZCA9IHRydWU7XG4gIH1cblxuICBzaG93UGlja2VyICgpIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuYWRkU2VsZWN0b3IoKTtcblxuICAgICAgdGhpcy5zZWxlY3RvciA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKGAuJHtjbHMuc2VsZWN0b3J9YCk7XG4gICAgICB0aGlzLmNhbGVuZGFycyA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKGAuJHtjbHMuY2FsZW5kYXJzfWApO1xuXG4gICAgICB0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zZWxlY3Rvck9uQ2xpY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhbGVuZGFycy5pbm5lckhUTUwgPSAnJztcbiAgICB9XG5cbiAgICB0aGlzLmFkZENhbGVuZGFycygpO1xuICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKGNscy5lbGVtT3Blbik7XG4gIH1cblxuICBoaWRlUGlja2VyICgpIHtcbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LnJlbW92ZShjbHMuZWxlbU9wZW4pO1xuICAgIHRoaXMuaXNPcGVuZWQgPSBmYWxzZTtcbiAgICB0aGlzLm5ld0RhdGVzID0gW107XG4gIH1cblxuICBhZGRTZWxlY3RvciAoKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JTdHIgPSB0ZW1wbGF0ZXMuc2VsZWN0b3I7XG4gICAgdGhpcy5lbGVtLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlRW5kJywgc2VsZWN0b3JTdHIpO1xuICB9XG5cbiAgc2VsZWN0b3JPbkNsaWNrICgpIHtcbiAgICBjb25zdCB7IGRhdGFzZXQgfSA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoZGF0YXNldC52YWx1ZSkge1xuICAgICAgdGhpcy5zZXREYXkoZXZlbnQudGFyZ2V0KTtcbiAgICB9IGVsc2UgaWYgKGRhdGFzZXQuZGlyZWN0aW9uKSB7XG4gICAgICB0aGlzLm1vdmVNb250aChkYXRhc2V0LmRpcmVjdGlvbik7XG4gICAgfVxuICB9XG5cbiAgc2V0RGF5IChlbGVtKSB7XG4gICAgY29uc3QgZGF0ZSA9IGVsZW0uZGF0YXNldC52YWx1ZTtcblxuICAgIGlmICh0aGlzLm5ld0RhdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5uZXdEYXRlcy5wdXNoKG5ldyBEYXRlKGRhdGUpKTtcbiAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWQoZWxlbSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5uZXdEYXRlcy5wdXNoKG5ldyBEYXRlKGRhdGUpKTtcblxuICAgIHRoaXMubmV3RGF0ZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEgLSBiO1xuICAgIH0pO1xuICAgIHRoaXMuZGF0ZXMgPSB7XG4gICAgICBmcm9tOiB0aGlzLm5ld0RhdGVzWzBdLFxuICAgICAgdG86IHRoaXMubmV3RGF0ZXNbMV1cbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICAgIG5ldyBDdXN0b21FdmVudCgnY2hhbmdlRGF0ZScsIHtcbiAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgZGF0ZXM6IHtcbiAgICAgICAgICAgIGZyb206IHRoaXMuZGF0ZXMuZnJvbS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgdG86IHRoaXMuZGF0ZXMudG8udG9JU09TdHJpbmcoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgbW92ZU1vbnRoIChkaXJlY3Rpb24pIHtcbiAgICBsZXQgc3RlcCA9IDE7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ByZXYnKSB7XG4gICAgICBzdGVwID0gLTE7XG4gICAgfVxuXG4gICAgdGhpcy5tb250aGVzLmZvckVhY2goZGF0ZSA9PiB7XG4gICAgICBkYXRlLnNldE1vbnRoKGRhdGUuZ2V0TW9udGgoKSArIHN0ZXApO1xuICAgIH0pO1xuXG4gICAgdGhpcy51cGRhdGVDYWxlbmRhcnMoKTtcbiAgfVxuXG4gIGFkZENhbGVuZGFycyAoKSB7XG4gICAgdGhpcy5tb250aGVzLmZvckVhY2goZGF0ZSA9PiB7XG4gICAgICB0aGlzLmNhbGVuZGFycy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZUVuZCcsIHRoaXMuZ2V0Q2FsZW5kYXIoZGF0ZSkpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlQ2FsZW5kYXJzICgpIHtcbiAgICB0aGlzLmNhbGVuZGFycy5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLmFkZENhbGVuZGFycygpO1xuICB9XG5cbiAgdXBkYXRlU2VsZWN0ZWQgKGVsZW0pIHtcbiAgICBjb25zdCBjZWxscyA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjbHMuY2VsbH1gKTtcbiAgICBjb25zdCBjbGFzc2VzID0gW2Nscy5zZWxlY3RlZEJldHdlZW4sIGNscy5zZWxlY3RlZEZyb20sIGNscy5zZWxlY3RlZFRvXTtcblxuICAgIGNlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoLi4uY2xhc3Nlcyk7XG4gICAgfSk7XG5cbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xzLnNlbGVjdGVkRnJvbSk7XG4gIH1cblxuICBnZXRDYWxlbmRhciAoZGF0ZSkge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBtb250aDogZGF0ZS50b0xvY2FsZVN0cmluZygnZGVmYXVsdCcsIHsgbW9udGg6ICdsb25nJyB9KSxcbiAgICAgIHdlZWtkYXlzOiBnZXRXZWVrRGF5cygnZGl2JyksXG4gICAgICBkYXlzOiB0aGlzLmdldENlbGxzKGRhdGUpXG4gICAgfTtcblxuICAgIGNvbnN0IHRtcGwgPSB0ZW1wbGF0ZXMuY2FsZW5kYXI7XG4gICAgY29uc3QgY2FsZW5kYXJTdHIgPSBmaWxsVGVtcGxhdGUoe1xuICAgICAgdG1wbCxcbiAgICAgIGRhdGFcbiAgICB9KTtcblxuICAgIHJldHVybiBjYWxlbmRhclN0cjtcbiAgfVxuXG4gIGdldENlbGxzIChkYXRlKSB7XG4gICAgY29uc3QgdG1wbCA9IHRlbXBsYXRlcy5kYXk7XG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICBjb25zdCBtb250aCA9IGN1cnJlbnREYXRlLmdldE1vbnRoKCk7XG4gICAgbGV0IGN1cnJlbnREYXkgPSAxO1xuICAgIGxldCBkYXlzU3RyID0gJyc7XG5cbiAgICB3aGlsZSAoY3VycmVudERhdGUuZ2V0TW9udGgoKSA9PT0gbW9udGgpIHtcbiAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5nZXRDZWxsU3RhcnRTdHlsZShjdXJyZW50RGF0ZSk7XG4gICAgICBjb25zdCBtb2QgPSB0aGlzLmdldENlbGxNb2QoY3VycmVudERhdGUpO1xuXG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBkYXRlVGltZTogY3VycmVudERhdGUudG9JU09TdHJpbmcoKSxcbiAgICAgICAgZGF0ZU51bTogY3VycmVudERhdGUuZ2V0RGF0ZSgpLFxuICAgICAgICBzdHlsZSxcbiAgICAgICAgbW9kXG4gICAgICB9O1xuICAgICAgZGF5c1N0ciArPSBmaWxsVGVtcGxhdGUoe1xuICAgICAgICB0bXBsLFxuICAgICAgICBkYXRhXG4gICAgICB9KTtcblxuICAgICAgY3VycmVudERhdGUuc2V0RGF0ZSgrK2N1cnJlbnREYXkpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXlzU3RyO1xuICB9XG5cbiAgZ2V0Q2VsbFN0YXJ0U3R5bGUgKGRhdGUpIHtcbiAgICBsZXQgc3R5bGUgPSAnJztcbiAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcblxuICAgIGlmIChkYXkgPiAxKSB7XG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuXG4gICAgbGV0IHdlZWtkYXlOdW0gPSBkYXRlLmdldERheSgpO1xuICAgIGlmICh3ZWVrZGF5TnVtID09PSAwKSB7XG4gICAgICB3ZWVrZGF5TnVtID0gNztcbiAgICB9XG5cbiAgICBzdHlsZSA9IGBncmlkLWNvbHVtbi1zdGFydDogJHt3ZWVrZGF5TnVtfWA7XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICBnZXRDZWxsTW9kIChkYXRlKSB7XG4gICAgbGV0IG1vZCA9ICcnO1xuXG4gICAgaWYgKHRoaXMubmV3RGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIG1vZDtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRlTXMgPSBkYXRlLnZhbHVlT2YoKTtcbiAgICBjb25zdCBkYXRlRnJvbU1zID0gdGhpcy5kYXRlcy5mcm9tLnZhbHVlT2YoKTtcbiAgICBjb25zdCBkYXRlVG9NcyA9IHRoaXMuZGF0ZXMudG8udmFsdWVPZigpO1xuXG4gICAgaWYgKGRhdGVNcyA+IGRhdGVGcm9tTXMgJiYgZGF0ZU1zIDwgZGF0ZVRvTXMpIHtcbiAgICAgIG1vZCA9IGNscy5zZWxlY3RlZEJldHdlZW47XG4gICAgfSBlbHNlIGlmIChkYXRlTXMgPT09IGRhdGVGcm9tTXMpIHtcbiAgICAgIG1vZCA9IGNscy5zZWxlY3RlZEZyb207XG4gICAgfSBlbHNlIGlmIChkYXRlTXMgPT09IGRhdGVUb01zKSB7XG4gICAgICBtb2QgPSBjbHMuc2VsZWN0ZWRUbztcbiAgICB9XG5cbiAgICByZXR1cm4gbW9kO1xuICB9XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKG1vZHVsZS5pZCwgY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IGNscyBmcm9tICcuL2NsYXNzZXMuanMnO1xuXG5leHBvcnQgY29uc3QgaW5wdXQgPSBgPGJ1dHRvbiBjbGFzcz1cIiR7Y2xzLmlucHV0fVwiIGRhdGEtZWxlbT1cImlucHV0XCIgdHlwZT1cImJ1dHRvblwiPlxuICA8c3BhblxuICAgIGNsYXNzPVwiJHtjbHMuZnJvbX1cIlxuICAgIGRhdGEtZWxlbT1cImZyb21cIj57ZnJvbX08L3NwYW4+IC1cbiAgPHNwYW5cbiAgICBjbGFzcz1cIiR7Y2xzLnRvfVwiXG4gICAgZGF0YS1lbGVtPVwidG9cIlxuICAgID57dG99PC9zcGFuPlxuPC9idXR0b24+YDtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdG9yID0gYFxuPGRpdiBjbGFzcz1cIiR7Y2xzLnNlbGVjdG9yfVwiIGRhdGEtZWxlbT1cInNlbGVjdG9yXCI+XG4gIDxkaXYgY2xhc3M9XCIke2Nscy5zZWxlY3RvckFycm93fVwiPjwvZGl2PlxuICA8YnV0dG9uXG4gICAgdHlwZT1cImJ1dHRvblwiXG4gICAgY2xhc3M9XCIke2Nscy5zZWxlY3RvckNvbnRyb2x9ICR7Y2xzLnNlbGVjdG9yQ29udHJvbH0tLWxlZnRcIlxuICAgIGRhdGEtZGlyZWN0aW9uPVwicHJldlwiXG4gID48L2J1dHRvbj5cbiAgPGJ1dHRvblxuICAgIHR5cGU9XCJidXR0b25cIlxuICAgIGNsYXNzPVwiJHtjbHMuc2VsZWN0b3JDb250cm9sfSAke2Nscy5zZWxlY3RvckNvbnRyb2x9LS1yaWdodFwiXG4gICAgZGF0YS1kaXJlY3Rpb249XCJuZXh0XCJcbiAgPjwvYnV0dG9uPlxuICA8ZGl2IGNsYXNzPVwiJHtjbHMuY2FsZW5kYXJzfVwiPjwvZGl2PlxuPC9kaXY+XG5gO1xuXG5leHBvcnQgY29uc3QgY2FsZW5kYXIgPSBgXG48ZGl2IGNsYXNzPVwiJHtjbHMuY2FsZW5kYXJ9XCI+XG4gIDxkaXYgY2xhc3M9XCIke2Nscy5tb250aEluZGljYXRvcn1cIj5cbiAgICA8dGltZSBkYXRldGltZT1cInttb250aH1cIj57bW9udGh9PC90aW1lPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIiR7Y2xzLmRheU9mV2Vla31cIj5cbiAgICB7d2Vla2RheXN9XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiJHtjbHMuZGF0ZUdyaWR9XCI+XG4gICAge2RheXN9XG4gIDwvZGl2PlxuPC9kaXY+XG5gO1xuXG5leHBvcnQgY29uc3QgZGF5ID0gYFxuPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCIke2Nscy5jZWxsfSB7bW9kfVwiIGRhdGEtdmFsdWU9XCJ7ZGF0ZVRpbWV9XCIgc3R5bGU9XCJ7c3R5bGV9XCI+e2RhdGVOdW19PC9idXR0b24+XG5gO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlucHV0LFxuICBzZWxlY3RvcixcbiAgY2FsZW5kYXIsXG4gIGRheVxufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZWxlbTogJ3NvcnRhYmxlLXRhYmxlJyxcbiAgdGFibGU6ICdzb3J0YWJsZS10YWJsZV9fdGFibGUnLFxuICB0aGVhZDogJ3NvcnRhYmxlLXRhYmxlX190aGVhZCcsXG4gIGhlYWRlcjogJ3NvcnRhYmxlLXRhYmxlX19oZWFkZXInLFxuICByb3c6ICdzb3J0YWJsZS10YWJsZV9fcm93JyxcbiAgY2VsbDogJ3NvcnRhYmxlLXRhYmxlX19jZWxsJyxcbiAgY2VsbEVycm9yOiAnc29ydGFibGUtdGFibGVfX2NlbGwtLWVycm9yJyxcbiAgY2VsbFNvcnRlcjogJ3NvcnRhYmxlLXRhYmxlX19jZWxsLS1zb3J0ZXInLFxuICBpbWc6ICdzb3J0YWJsZS10YWJsZV9faW1hZ2UnLFxuICBpbWdXcmFwcGVyOiAnc29ydGFibGUtdGFibGVfX2ltYWdlLXdyYXBwZXInLFxuICBwcmV2aWV3OiAnc29ydGFibGUtdGFibGVfX3ByZXZpZXcnLFxuICBsaW5rOiAnc29ydGFibGUtdGFibGVfX2xpbmsnLFxuICBjYXRlZ29yeTogJ3NvcnRhYmxlLXRhYmxlX19jYXRlZ29yeScsXG4gIHRvb2x0aXBDYXRlZ29yeTogJ3NvcnRhYmxlLXRhYmxlX190b29sdGlwLWNhdGVnb3J5JyxcbiAgdG9vbHRpcFN1YmNhdGVnb3J5OiAnc29ydGFibGUtdGFibGVfX3Rvb2x0aXAtc3ViY2F0ZWdvcnknXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAwOiAnZGVzYycsXG4gIDE6ICdhc2MnXG59O1xuIiwiaW1wb3J0IHsgZm9ybWF0VG90YWwsIGVzY2FwZUhUTUwgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2luZGV4LmpzJztcbmltcG9ydCBzdGF0dXNUZXh0IGZyb20gJy4vc3RhdHVzVGV4dC5qcyc7XG5pbXBvcnQgY2xzIGZyb20gJy4vY2xhc3Nlcy5qcyc7XG5cbi8vIEluZm8gJiBzb3J0aW5nIG1ldGhvZHMgZm9yIHRhYmxlIGNvbHVtbnNcbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW1hZ2VzOiB7XG4gICAgdGl0bGU6ICdJbWFnZScsXG4gICAgcmVuZGVyICh7IGltYWdlcyB9KSB7XG4gICAgICBpZiAoIWltYWdlcyB8fCAhaW1hZ2VzWzBdLnVybCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICBjb25zdCBzcmMgPSBpbWFnZXNbMF0udXJsO1xuICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHtjbHMuaW1nV3JhcHBlcn1cIj5cbiAgICAgIDxpbWcgc3JjPVwiJHtzcmN9XCIgY2xhc3M9XCIke2Nscy5pbWd9XCI+XG4gICAgICA8c3BhbiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgke3NyY30pXCIgY2xhc3M9XCIke2Nscy5wcmV2aWV3fVwiPjxzcGFuPlxuICAgICAgPGRpdj5gO1xuICAgIH0sXG4gICAgY29tcGFyZTogbnVsbFxuICB9LFxuICB0aXRsZToge1xuICAgIHRpdGxlOiAnTmFtZScsXG4gICAgcmVuZGVyICh7IHRpdGxlLCBpZCB9KSB7XG4gICAgICByZXR1cm4gYFxuICAgICAgJHt0aXRsZX1cbiAgICAgIDxhIGNsYXNzPVwiJHtjbHMubGlua31cIiBocmVmPVwiL3Byb2R1Y3RzLyR7aWR9XCI+PC9hPlxuICAgICAgYDtcbiAgICB9LFxuICAgIGNvbXBhcmUgKGEsIGIpIHtcbiAgICAgIHJldHVybiBhLnRpdGxlLmxvY2FsZUNvbXBhcmUoYi50aXRsZSk7XG4gICAgfVxuICB9LFxuICBzdWJjYXRlZ29yeToge1xuICAgIHRpdGxlOiAnQ2F0ZWdvcnknLFxuICAgIHJlbmRlciAoeyBzdWJjYXRlZ29yeSB9KSB7XG4gICAgICBjb25zdCBjYXRlZ29yeSA9IHN1YmNhdGVnb3J5LmNhdGVnb3J5O1xuICAgICAgY29uc3QgdG9vdGlwQ29udGVudCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xzLnRvb2x0aXBDYXRlZ29yeX1cIj4ke2NhdGVnb3J5LnRpdGxlfTwvc3Bhbj4vPHNwYW4gY2xhc3M9XCIke2Nscy50b29sdGlwU3ViY2F0ZWdvcnl9XCI+JHtzdWJjYXRlZ29yeS50aXRsZX08L3NwYW4+YDtcbiAgICAgIHJldHVybiBgPHNwYW4gY2xhc3M9XCIke2Nscy5jYXRlZ29yeX1cIiBkYXRhLXRvb2x0aXAtY29udGVudD1cIiR7ZXNjYXBlSFRNTCh0b290aXBDb250ZW50KX1cIj4ke3N1YmNhdGVnb3J5LnRpdGxlfTwvc3Bhbj5gO1xuICAgIH0sXG4gICAgY29tcGFyZSAoYSwgYikge1xuICAgICAgLy8gU29ydGluZyBieSBydXNzaWFuIHRpdGxlc1xuICAgICAgY29uc3QgYUNhdE5hbWUgPSBhLnN1YmNhdGVnb3J5LnRpdGxlO1xuICAgICAgY29uc3QgYkNhdE5hbWUgPSBiLnN1YmNhdGVnb3J5LnRpdGxlO1xuICAgICAgcmV0dXJuIGFDYXROYW1lLmxvY2FsZUNvbXBhcmUoYkNhdE5hbWUpO1xuICAgIH1cbiAgfSxcbiAgcXVhbnRpdHk6IHtcbiAgICB0aXRsZTogJ1F1YW50aXR5JyxcbiAgICByZW5kZXIgKHsgcXVhbnRpdHkgfSkge1xuICAgICAgcmV0dXJuIHF1YW50aXR5O1xuICAgIH0sXG4gICAgY29tcGFyZSAoYSwgYikge1xuICAgICAgcmV0dXJuIGEucXVhbnRpdHkgLSBiLnF1YW50aXR5O1xuICAgIH1cbiAgfSxcbiAgcHJpY2U6IHtcbiAgICB0aXRsZTogJ1ByaWNlJyxcbiAgICByZW5kZXIgKHsgcHJpY2UgfSkge1xuICAgICAgcmV0dXJuIGZvcm1hdFRvdGFsKHByaWNlKTtcbiAgICB9LFxuICAgIGNvbXBhcmUgKGEsIGIpIHtcbiAgICAgIHJldHVybiBhLnByaWNlIC0gYi5wcmljZTtcbiAgICB9XG4gIH0sXG4gIHN0YXR1czoge1xuICAgIHRpdGxlOiAnU3RhdHVzJyxcbiAgICByZW5kZXIgKHsgc3RhdHVzIH0pIHtcbiAgICAgIHJldHVybiBzdGF0dXNUZXh0W3N0YXR1c107XG4gICAgfSxcbiAgICBjb21wYXJlIChhLCBiKSB7XG4gICAgICByZXR1cm4gYS5zdGF0dXMgLSBiLnN0YXR1cztcbiAgICB9XG4gIH1cbn07XG4iLCJpbXBvcnQgZGlyZWN0aW9ucyBmcm9tICcuL2RpcmVjdGlvbnMuanMnO1xuXG5leHBvcnQgY29uc3QgZ2V0RGlyZWN0aW9uVGV4dCA9IGlzQXNjID0+IHtcbiAgcmV0dXJuIGRpcmVjdGlvbnNbK2lzQXNjXTtcbn07XG4iLCJpbXBvcnQgVG9vbHRpcHMgZnJvbSAnLi4vVG9vbHRpcHMvaW5kZXguanMnO1xuaW1wb3J0IGNscyBmcm9tICcuL2NsYXNzZXMuanMnO1xuaW1wb3J0IHN0YXR1c1RleHQgZnJvbSAnLi9zdGF0dXNUZXh0LmpzJztcbmltcG9ydCBmaWVsZHMgZnJvbSAnLi9maWVsZHMuanMnO1xuaW1wb3J0IHsgZmV0Y2hKc29uLCB0aHJvdHRsZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvaW5kZXguanMnO1xuaW1wb3J0IHsgZ2V0RGlyZWN0aW9uVGV4dCB9IGZyb20gJy4vaGVscGVycy5qcyc7XG5pbXBvcnQgUGFnZU1lc3NhZ2UgZnJvbSAnLi4vUGFnZU1lc3NhZ2UvaW5kZXguanMnO1xuXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3J0YWJsZVRhYmxlIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNvcnRpbmcgPSB7XG4gICAgICBjdXJyZW50OiBudWxsLFxuICAgICAgaXNBc2M6IHRydWVcbiAgICB9O1xuXG4gICAgdGhpcy5wYWdlID0ge1xuICAgICAgaXRlbXM6IDIwLFxuICAgICAgY3VycmVudDogMCxcbiAgICAgIGlzRGF0YUVuZGVkOiBmYWxzZVxuICAgIH07XG5cbiAgICB0aGlzLmFwaVVybCA9IHByb2Nlc3MuZW52LkFQSV9VUkwgfHwgJ2h0dHBzOi8vY291cnNlLWpzLmphdmFzY3JpcHQucnUnO1xuXG4gICAgdGhpcy5jaGFuZ2VEYXRlID0gdGhpcy5jaGFuZ2VEYXRlLmJpbmQodGhpcyk7XG4gIH1cblxuICBhc3luYyBjb25uZWN0ZWRDYWxsYmFjayAoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdXJsLFxuICAgICAgZmllbGRzTGlzdCxcbiAgICAgIG9yZGVyRmllbGQsXG4gICAgICBvcmRlckRpcmVjdGlvbixcbiAgICAgIGlzRHluYW1pYyxcbiAgICAgIGZyb20sXG4gICAgICB0b1xuICAgIH0gPSB0aGlzLmRhdGFzZXQ7XG5cbiAgICB0aGlzLmRhdGVzID0ge1xuICAgICAgZnJvbSxcbiAgICAgIHRvXG4gICAgfTtcblxuICAgIHRoaXMudXJsID0gdGhpcy5hcGlVcmwgKyB1cmw7XG4gICAgdGhpcy5maWVsZHNMaXN0ID0gSlNPTi5wYXJzZShmaWVsZHNMaXN0LnJlcGxhY2UoLycvZywgJ1wiJykpO1xuICAgIHRoaXMuaXNEeW5hbWljID0gK2lzRHluYW1pYztcbiAgICB0aGlzLm9yZGVyID0ge1xuICAgICAgZmllbGQ6IG9yZGVyRmllbGQsXG4gICAgICBkaXJlY3Rpb246IG9yZGVyRGlyZWN0aW9uXG4gICAgfTtcbiAgICB0aGlzLmluaXRUYWJsZSA9IHRoaXMuaW5pdFRhYmxlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLm9yZGVyICYmIHRoaXMub3JkZXIuZGlyZWN0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc29ydGluZy5pc0FzYyA9IHRoaXMub3JkZXIuZGlyZWN0aW9uO1xuICAgIH1cblxuICAgIHRoaXMuZmV0Y2hVcmwgPSB0aGlzLmdldEZldGNoVXJsKCk7XG4gICAgLy8gVHJ5IHRvIHRocm90dGxlIGxvYWRpbmcgb24gc2Nyb2xsXG4gICAgdGhpcy5vbkJvZHlTY3JvbGxUaHJvdHRsZSA9IHRocm90dGxlKHRoaXMub25Cb2R5U2Nyb2xsLCB0aGlzLCA1MDApO1xuXG4gICAgdGhpcy5pbml0VGFibGUoKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZURhdGUnLCB0aGlzLmNoYW5nZURhdGUpO1xuICB9XG5cbiAgYXN5bmMgbG9hZERhdGEgKCkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnRhYmxlLmRhdGFzZXQubG9hZGluZyA9IDE7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgdGFibGVEYXRhID0gYXdhaXQgZmV0Y2hKc29uKHRoaXMuZmV0Y2hVcmwpO1xuXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy50YWJsZS5kYXRhc2V0LmxvYWRpbmcgPSAwO1xuXG4gICAgICByZXR1cm4gdGFibGVEYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBTaG93IGVycm9yIG1lc3NhZ2UgdG8gdXNlclxuICAgICAgY29uc3QgbWVzc2FnZSA9IG5ldyBQYWdlTWVzc2FnZSh7IGVycm9yIH0pO1xuICAgICAgdGhpcy50YWJsZS5kYXRhc2V0LmxvYWRpbmcgPSAwO1xuXG4gICAgICB0aGlzLnRCb2R5Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgJ2JlZm9yZUVuZCcsXG4gICAgICAgIGA8dHIgY2xhc3M9XCIke2Nscy5yb3d9XCI+PHRkIGNsYXNzPVwiJHtjbHMuY2VsbEVycm9yfVwiPiR7bWVzc2FnZS5lbGVtLm91dGVySFRNTH08L3RyPmBcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgaW5pdFRhYmxlICgpIHtcbiAgICB0aGlzLmNyZWF0ZUxheW91dCgpO1xuICAgIHRoaXMuYWRkRWxlbUhlYWRlcigpO1xuICAgIHRoaXMuYWRkVGFibGVFdmVudHMoKTtcblxuICAgIHRoaXMuZmlsbFRCb2R5KCk7XG4gIH1cblxuICBhc3luYyBmaWxsVEJvZHkgKCkge1xuICAgIGlmICh0aGlzLnBhZ2UuaXNEYXRhRW5kZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRhYmxlUm93cyA9IGF3YWl0IHRoaXMubG9hZERhdGEoKTtcblxuICAgIC8vIExhc3QgcGFnZVxuICAgIGlmICh0aGlzLnRhYmxlUm93cy5sZW5ndGggPCB0aGlzLnBhZ2UuaXRlbXMpIHtcbiAgICAgIHRoaXMucGFnZS5pc0RhdGFFbmRlZCA9IHRydWU7XG5cbiAgICAgIGlmICh0aGlzLnRhYmxlUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdGhpcy5pc0R5bmFtaWMgJiYgdGhpcy5vcmRlciAmJiB0aGlzLm9yZGVyLmZpZWxkKSB7XG4gICAgICB0aGlzLnNvcnRSb3dzKHRoaXMub3JkZXIuZmllbGQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyVEJvZHkoKTtcbiAgfVxuXG4gIGdldEZldGNoVXJsICgpIHtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBzdGFydDogdGhpcy5wYWdlLmN1cnJlbnQgKiB0aGlzLnBhZ2UuaXRlbXMsXG4gICAgICBlbmQ6ICh0aGlzLnBhZ2UuY3VycmVudCArIDEpICogdGhpcy5wYWdlLml0ZW1zLFxuICAgICAgc29ydDogdGhpcy5vcmRlci5maWVsZCxcbiAgICAgIG9yZGVyOiBnZXREaXJlY3Rpb25UZXh0KHRoaXMuc29ydGluZy5pc0FzYylcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuZGF0ZXMgJiYgdGhpcy5kYXRlcy5mcm9tKSB7XG4gICAgICBwYXJhbXMuZnJvbSA9IHRoaXMuZGF0ZXMuZnJvbTtcbiAgICAgIHBhcmFtcy50byA9IHRoaXMuZGF0ZXMudG87XG4gICAgfVxuXG4gICAgbGV0IHBhcmFtc1N0ciA9ICcnO1xuICAgIGZvciAoY29uc3Qga2V5IGluIHBhcmFtcykge1xuICAgICAgbGV0IHByZWZpeCA9ICdfJztcbiAgICAgIGlmIChrZXkgPT09ICdmcm9tJyB8fCBrZXkgPT09ICd0bycpIHtcbiAgICAgICAgcHJlZml4ID0gJyc7XG4gICAgICB9XG5cbiAgICAgIHBhcmFtc1N0ciArPSBgJiR7cHJlZml4fSR7a2V5fT0ke3BhcmFtc1trZXldfWA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnVybCArIHBhcmFtc1N0cjtcbiAgfVxuXG4gIGNyZWF0ZUxheW91dCAoKSB7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKGNscy5lbGVtKTtcbiAgICB0aGlzLnRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICB0aGlzLnRhYmxlLmNsYXNzTGlzdC5hZGQoY2xzLnRhYmxlKTtcbiAgICB0aGlzLnRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcbiAgICB0aGlzLnRhYmxlLmFwcGVuZCh0aGlzLnRCb2R5KTtcbiAgICB0aGlzLnRhYmxlLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICdiZWZvcmVFbmQnLFxuICAgICAgYDx0Zm9vdD48dHI+PHRkIGNvbHNwYW49XCIke3RoaXMuZmllbGRzTGlzdC5sZW5ndGh9XCI+PGRpdiBjbGFzcz1cInNwaW5uZXJcIj48L2Rpdj48L3RkPjwvdHI+PC90Zm9vdD5gXG4gICAgKTtcblxuICAgIHRoaXMuYXBwZW5kKHRoaXMudGFibGUpO1xuICB9XG5cbiAgLy8gRmlsbCB0YWJsZSBoZWFkZXIgd2l0aCBjb250ZW50XG4gIGFkZEVsZW1IZWFkZXIgKCkge1xuICAgIGxldCBoZWFkZXJDb250ZW50ID0gJyc7XG5cbiAgICB0aGlzLmZpZWxkc0xpc3QuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICBsZXQgdGhDbGFzcyA9IGNscy5jZWxsO1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgc29ydGVyOiAnJyxcbiAgICAgICAgc29ydERpcmVjdGlvbjogJydcbiAgICAgIH07XG4gICAgICBpZiAoZmllbGRzW2ZpZWxkXS5jb21wYXJlKSB7XG4gICAgICAgIHRoQ2xhc3MgKz0gYCAke2Nscy5jZWxsU29ydGVyfWA7XG4gICAgICAgIGRhdGEuc29ydGVyID0gJ2RhdGEtc29ydGVyPVwiMVwiJztcbiAgICAgIH1cbiAgICAgIGlmIChmaWVsZCA9PT0gdGhpcy5vcmRlci5maWVsZCkge1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBnZXREaXJlY3Rpb25UZXh0KHRoaXMuc29ydGluZy5pc0FzYyk7XG4gICAgICAgIGRhdGEuc29ydERpcmVjdGlvbiA9IGBkYXRhLXNvcnQtZGlyZWN0aW9uPVwiJHtkaXJlY3Rpb259XCJgO1xuICAgICAgfVxuICAgICAgaGVhZGVyQ29udGVudCArPSBgPHRoIGNsYXNzPVwiJHt0aENsYXNzfVwiXG4gICAgICAgIGRhdGEtbmFtZT1cIiR7ZmllbGR9XCJcbiAgICAgICAgJHtkYXRhLnNvcnRlcn1cbiAgICAgICAgJHtkYXRhLnNvcnREaXJlY3Rpb259XG4gICAgICAgID4ke2ZpZWxkc1tmaWVsZF0udGl0bGV9PC90aD5gO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdGhlYWRTdHIgPSBgPHRoZWFkIGNsYXNzPVwiJHtjbHMudGhlYWR9XCI+PHRyIGNsYXNzPVwiJHtjbHMuaGVhZGVyfSAke2Nscy5yb3d9XCI+XG4gICAgICAke2hlYWRlckNvbnRlbnR9XG4gICAgPC90cj48L3RoZWFkPmA7XG5cbiAgICB0aGlzLnRhYmxlLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJCZWdpbicsIHRoZWFkU3RyKTtcblxuICAgIHRoaXMuc29ydGluZy5jdXJyZW50ID0gdGhpcy50YWJsZS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zb3J0LWRpcmVjdGlvbl0nKTtcbiAgfVxuXG4gIC8vIFNvcnRlclxuICBzb3J0ZXJPbkNsaWNrICh0aCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGguZGF0YXNldDtcblxuICAgIGlmICh0aC5kYXRhc2V0LnNvcnREaXJlY3Rpb24pIHtcbiAgICAgIHRoaXMuc29ydGluZy5pc0FzYyA9ICF0aGlzLnNvcnRpbmcuaXNBc2M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnNvcnRpbmcuY3VycmVudCkge1xuICAgICAgICBkZWxldGUgdGhpcy5zb3J0aW5nLmN1cnJlbnQuZGF0YXNldC5zb3J0RGlyZWN0aW9uO1xuICAgICAgfVxuICAgICAgdGhpcy5zb3J0aW5nLmlzQXNjID0gdHJ1ZTtcbiAgICAgIHRoaXMuc29ydGluZy5jdXJyZW50ID0gdGg7XG4gICAgfVxuXG4gICAgdGguZGF0YXNldC5zb3J0RGlyZWN0aW9uID0gZ2V0RGlyZWN0aW9uVGV4dCh0aGlzLnNvcnRpbmcuaXNBc2MpO1xuXG4gICAgaWYgKHRoaXMuaXNEeW5hbWljKSB7XG4gICAgICB0aGlzLnNvcnRSb3dzRHluYW1pYyhuYW1lKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNvcnRSb3dzKG5hbWUpO1xuICB9XG5cbiAgLy8gU29ydGluZ1xuICBzb3J0Um93cyAoZmllbGQpIHtcbiAgICB0aGlzLnRhYmxlUm93cy5zb3J0KGZpZWxkc1tmaWVsZF0uY29tcGFyZSk7XG5cbiAgICBpZiAoIXRoaXMuc29ydGluZy5pc0FzYykge1xuICAgICAgdGhpcy50YWJsZVJvd3MucmV2ZXJzZSgpO1xuICAgIH1cblxuICAgIHRoaXMudEJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5yZW5kZXJUQm9keSgpO1xuICB9XG5cbiAgLy8gU29ydGluZ1xuICBzb3J0Um93c0R5bmFtaWMgKGZpZWxkKSB7XG4gICAgdGhpcy5vcmRlci5maWVsZCA9IGZpZWxkO1xuICAgIHRoaXMucGFnZS5jdXJyZW50ID0gMDtcbiAgICB0aGlzLnBhZ2UuaXNEYXRhRW5kZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZldGNoVXJsID0gdGhpcy5nZXRGZXRjaFVybCgpO1xuICAgIHRoaXMudEJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5maWxsVEJvZHkoKTtcbiAgfVxuXG4gIC8vIEFkZGluZyBkZWxlZ2F0ZWQgZXZlbnRzIHRvIHRhYmxlXG4gIGFkZFRhYmxlRXZlbnRzICgpIHtcbiAgICB0aGlzLnRhYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25Cb2R5U2Nyb2xsVGhyb3R0bGUpO1xuICAgIHRoaXMudG9vbHRpcHMgPSBuZXcgVG9vbHRpcHMoeyBlbGVtOiB0aGlzIH0pO1xuICB9XG5cbiAgLy8gSGFuZGxlcyBhbGwgZXZlbnRzIGZvciB0YWJsZVxuICBoYW5kbGVFdmVudCAoKSB7XG4gICAgLy8gU29ydGluZyBldmVudHNcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmRhdGFzZXQuc29ydGVyKSB7XG4gICAgICB0aGlzLnNvcnRlck9uQ2xpY2soZXZlbnQudGFyZ2V0KTtcbiAgICB9XG4gIH1cblxuICBvbkJvZHlTY3JvbGwgKCkge1xuICAgIGlmICh0aGlzLmlzTG9hZGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGh0bWxDb29yZHMgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgc2Nyb2xsRGVsdGEgPSBodG1sQ29vcmRzLmJvdHRvbSAtIHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIGlmIChzY3JvbGxEZWx0YSA8IDEwMCkge1xuICAgICAgdGhpcy5wYWdlLmN1cnJlbnQrKztcbiAgICAgIHRoaXMuZmV0Y2hVcmwgPSB0aGlzLmdldEZldGNoVXJsKCk7XG4gICAgICB0aGlzLmZpbGxUQm9keSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZpbGwgdGFibGUgYm9keSBjZWxscyB3aXRoIGNvbnRlbnRcbiAgcmVuZGVyVEJvZHkgKCkge1xuICAgIHRoaXMucGFnZVlPZmZzZXQgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cbiAgICB0aGlzLnRhYmxlUm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICBsZXQgcm93Q29udGVudCA9ICcnO1xuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IHJvdztcblxuICAgICAgdGhpcy5maWVsZHNMaXN0LmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICBjb25zdCB0ZENsYXNzZXMgPSBbXG4gICAgICAgICAgY2xzLmNlbGwsXG4gICAgICAgICAgYCR7Y2xzLmNlbGx9LS0ke2ZpZWxkfWAsXG4gICAgICAgICAgYCR7Y2xzLmNlbGx9LS0ke3N0YXR1c1RleHRbc3RhdHVzXS50b0xvd2VyQ2FzZSgpfWBcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgcmVuZGVyRmllbGQgPSBmaWVsZHNbZmllbGRdLnJlbmRlcjtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRDb250ZW50ID0gcmVuZGVyRmllbGQocm93KTtcblxuICAgICAgICBpZiAocmVuZGVyZWRDb250ZW50KSB7XG4gICAgICAgICAgcm93Q29udGVudCArPSBgPHRkIGNsYXNzPVwiJHt0ZENsYXNzZXMuam9pbihcbiAgICAgICAgICAgICcgJ1xuICAgICAgICAgICl9XCI+JHtyZW5kZXJlZENvbnRlbnR9PC90ZD5gO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy50Qm9keS5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICdiZWZvcmVFbmQnLFxuICAgICAgICBgPHRyIGNsYXNzPVwiJHtjbHMucm93fVwiPiR7cm93Q29udGVudH08L3RyPmBcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5wYWdlWU9mZnNldCkge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHRoaXMucGFnZVlPZmZzZXQpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGNoYW5nZURhdGUgKGV2ZW50KSB7XG4gICAgaWYgKCFldmVudC5kZXRhaWwgfHwgIWV2ZW50LmRldGFpbC5kYXRlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZGF0ZXMgPSBldmVudC5kZXRhaWwuZGF0ZXM7XG4gICAgdGhpcy5mZXRjaFVybCA9IHRoaXMuZ2V0RmV0Y2hVcmwoKTtcbiAgICB0aGlzLnRCb2R5LmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuZmlsbFRCb2R5KCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgMDogJ0Rpc2FibGVkJyxcbiAgMTogJ0VuYWJsZWQnXG59O1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShtb2R1bGUuaWQsIGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZWxlbTogJ3Rvb2x0aXBzLWNvbnRhaW5lcicsXG4gIGRpbW1lZDogJ3Rvb2x0aXBzLWNvbnRhaW5lci0tZGltbWVkJyxcbiAgdG9vbHRpcDogJ3Rvb2x0aXAnXG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvaW5kZXguanMnO1xuaW1wb3J0IGNscyBmcm9tICcuL2NsYXNzZXMuanMnO1xuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHRpcHMge1xuICBjb25zdHJ1Y3RvciAoeyBlbGVtLCBkaW1TaWJsaW5ncyB9KSB7XG4gICAgdGhpcy5lbGVtID0gZWxlbTtcbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZChjbHMuZWxlbSk7XG4gICAgdGhpcy5kaW1TaWJsaW5ncyA9IGRpbVNpYmxpbmdzO1xuXG4gICAgdGhpcy50b29sdGlwID0gY3JlYXRlRWxlbWVudChgPGRpdiBjbGFzcz1cIiR7Y2xzLnRvb2x0aXB9XCI+PC9kaXY+YCk7XG4gICAgdGhpcy5lbGVtLmFwcGVuZCh0aGlzLnRvb2x0aXApO1xuXG4gICAgdGhpcy5saXN0TW91c2VNb3ZlID0gdGhpcy5saXN0TW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5saXN0TW91c2VPdXQgPSB0aGlzLmxpc3RNb3VzZU91dC5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubGlzdE1vdXNlTW92ZSk7XG4gICAgdGhpcy5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmxpc3RNb3VzZU91dCk7XG4gIH1cblxuICBsaXN0TW91c2VNb3ZlICgpIHtcbiAgICBpZiAoIWV2ZW50LnRhcmdldC5kYXRhc2V0LnRvb2x0aXBDb250ZW50KSB7XG4gICAgICB0aGlzLmhpZGVUb29sdGlwKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyB0b29sdGlwQ29udGVudCB9ID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQ7XG4gICAgdGhpcy50b29sdGlwLmlubmVySFRNTCA9IHRvb2x0aXBDb250ZW50O1xuICAgIHRoaXMudG9vbHRpcC5kYXRhc2V0LnZpc2libGUgPSAxO1xuXG4gICAgLy8gUGFyZW50IGNvbnRhaW5lciBjb29yZHNcbiAgICB0aGlzLmVsZW1Db29yZHMgPSB0aGlzLmVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgY29vcmRzID0ge1xuICAgICAgeDogZXZlbnQuY2xpZW50WCAtIHRoaXMuZWxlbUNvb3Jkcy54LFxuICAgICAgeTogZXZlbnQuY2xpZW50WSAtIHRoaXMuZWxlbUNvb3Jkcy55XG4gICAgfTtcblxuICAgIHRoaXMudG9vbHRpcC5zdHlsZSA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgke2Nvb3Jkcy54fXB4LCAke2Nvb3Jkcy55fXB4KWA7XG5cbiAgICAvLyBGaXggY3V0dGluZyBieSB3aW5kb3dcbiAgICB0aGlzLnRvb2x0aXBDb29yZHMgPSB0aGlzLnRvb2x0aXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgaGlkZGVuQnlXaW5kb3cgPSB0aGlzLnRvb2x0aXBDb29yZHMucmlnaHQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG5cbiAgICBpZiAoaGlkZGVuQnlXaW5kb3cgPiAwKSB7XG4gICAgICBjb29yZHMueCAtPSBoaWRkZW5CeVdpbmRvdztcbiAgICAgIHRoaXMudG9vbHRpcC5zdHlsZSA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgke2Nvb3Jkcy54fXB4LCAke2Nvb3Jkcy55fXB4KWA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGltU2libGluZ3MpIHtcbiAgICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKGNscy5kaW1tZWQpO1xuICAgIH1cbiAgfVxuXG4gIGxpc3RNb3VzZU91dCAoKSB7XG4gICAgaWYgKCFldmVudC50YXJnZXQuZGF0YXNldC50b29sdGlwQ29udGVudCkge1xuICAgICAgdGhpcy5oaWRlVG9vbHRpcCgpO1xuICAgIH1cbiAgfVxuXG4gIGhpZGVUb29sdGlwICgpIHtcbiAgICB0aGlzLnRvb2x0aXAuZGF0YXNldC52aXNpYmxlID0gMDtcbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LnJlbW92ZShjbHMuZGltbWVkKTtcbiAgfVxufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShtb2R1bGUuaWQsIGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIG5pY2Ugb3ZlcnZpZXc6XG4vLyBodHRwczovL2dycnIudGVjaC9wb3N0cy9jcmVhdGUtZG9tLW5vZGUtZnJvbS1odG1sLXN0cmluZy9cblxuLy8gbm8gSUUxMVxuY29uc3Qgc3VwcG9ydHNUZW1wbGF0ZSA9ICdjb250ZW50JyBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXG5jb25zdCBjcmVhdGVFbGVtZW50ID0gc3VwcG9ydHNUZW1wbGF0ZVxuICA/IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgfVxuICA6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpdi5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgcmV0dXJuIGRpdi5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICB9O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlSFRNTCAoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmdcbiAgICAucmVwbGFjZSgvJi9nLCAnJicpXG4gICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKVxuICAgIC5yZXBsYWNlKC8nL2csICcmIzM5OycpXG4gICAgLnJlcGxhY2UoLzwvZywgJzwnKVxuICAgIC5yZXBsYWNlKC8+L2csICc+Jyk7XG59XG4iLCIvLyBJbnNwaXJlZCBieSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9pbGlha2FuL2RkNmFkMGRhZGI2NjMwNTQ0ZDExODdjNGM5NGNjZjQwXG5pbXBvcnQgbm90aWZpZXIgZnJvbSAnLi4vbGliL25vdGlmaWVyLmpzJztcblxuLy8gY29uc29sZS5jbGVhcigpO1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hKU09OICh1cmwpIHtcbiAgbGV0IHJlc3BvbnNlO1xuXG4gIC8vIEVycm9yIHdoaWxlIGxvYWRpbmcgKGJhZCB1cmwgb3IgY29ubmVjdGlvbilcbiAgdHJ5IHtcbiAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgbmV3IEZldGNoRXJyb3IocmVzcG9uc2UsIG51bGwsIGBOZXR3b3JrIGVycm9yIGZvciB1cmwgJHt1cmx9YCk7XG4gIH1cblxuICAvLyBCYWQgcmVzcG9uc2UgZnJvbSBzZXJ2ZXJcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIGxldCBib2R5O1xuICAgIGNvbnN0IHN0YXR1c1RleHQgPSByZXNwb25zZS5zdGF0dXNUZXh0O1xuXG4gICAgdHJ5IHtcbiAgICAgIGJvZHkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAvLyBjYW4ndCByZXByb2R1Y2UgZ2V0dGluZyBib2R5IHdpdGggbm90IG9rIHN0YXR1c1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBkbyBub3RoaW5nXG4gICAgfVxuICAgIGxldCBtZXNzYWdlID0gYEVycm9yICR7cmVzcG9uc2Uuc3RhdHVzfSBmb3IgdXJsICR7dXJsfWA7XG5cbiAgICBpZiAoc3RhdHVzVGV4dCkge1xuICAgICAgbWVzc2FnZSArPSBgOiAke3N0YXR1c1RleHR9YDtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRmV0Y2hFcnJvcihyZXNwb25zZSwgYm9keSwgbWVzc2FnZSk7XG4gIH1cblxuICAvLyBSZXNwb25zZSBpcyBjb3JyZWN0LCB0cnkgdG8gZ2V0IGRhdGFcbiAgdHJ5IHtcbiAgICByZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgRmV0Y2hFcnJvcihyZXNwb25zZSwgbnVsbCwgZXJyb3IubWVzc2FnZSk7XG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2U7XG59XG5cbmNsYXNzIEZldGNoRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChyZXNwb25zZSwgYm9keSwgbWVzc2FnZSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMubmFtZSA9ICdGZXRjaEVycm9yJztcblxuICAgIHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG5cbi8vIGhhbmRsZSB1bmNhdWdodCBmYWlsZWQgZmV0Y2ggdGhyb3VnaFxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VuaGFuZGxlZHJlamVjdGlvbicsIGV2ZW50ID0+IHtcbiAgaWYgKGV2ZW50LnJlYXNvbiBpbnN0YW5jZW9mIEZldGNoRXJyb3IpIHtcbiAgICBub3RpZmllcihldmVudC5yZWFzb24ubWVzc2FnZSwgJ2Vycm9yJyk7XG4gIH1cbn0pO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmlsbFRlbXBsYXRlICh7IHRtcGwsIGRhdGEgfSkge1xuICBpZiAoIXRtcGwgfHwgIWRhdGEpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4gdG1wbC5yZXBsYWNlKC97KFteXCJdezEsfSl9L2csIChtYXRjaCwgc3RyKSA9PiB7XG4gICAgaWYgKGRhdGFbc3RyXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZGF0YVtzdHJdO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RGF0ZSAoc3RyKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShzdHIpLnRvRGF0ZVN0cmluZygpO1xuICBjb25zdCBkYXRhUGFydHMgPSBkYXRlLnNwbGl0KCcgJyk7XG4gIGNvbnN0IG1vbnRoID0gZGF0YVBhcnRzWzFdO1xuICBjb25zdCBkYXkgPSBkYXRhUGFydHNbMl07XG4gIGNvbnN0IHllYXIgPSBkYXRhUGFydHNbM107XG5cbiAgcmV0dXJuIGAke21vbnRofSAke2RheX0sICR7eWVhcn1gO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0VG90YWwgKG51bSkge1xuICBsZXQgZm9ybWF0dGVkID0gbnVtO1xuICBpZiAobnVtID49IDEwMDApIHtcbiAgICBjb25zdCB0YWlsID0gbnVtICUgMTAwMDtcbiAgICBmb3JtYXR0ZWQgPSBgJHsobnVtIC0gdGFpbCkgLyAxMDAwfSwke3RhaWx9YDtcbiAgfVxuXG4gIHJldHVybiBgJCR7Zm9ybWF0dGVkfWA7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREYXRlRnJvbVN0cmluZyAoc3RyKSB7XG4gIGNvbnN0IFtkYXksIG1vbnRoLCB5ZWFyXSA9IHN0ci5zcGxpdCgnLycpO1xuICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXkpO1xufTtcbiIsIi8vIERpcnR5IHdheSB0byBnZXQgd2Vla2RheXMgaW4gY3VycmVudCBsYW5nXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXZWVrRGF5cyAodGFnKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgxOTcwLCAwLCA1KTtcbiAgbGV0IHdlZWtkYXlzU3RyID0gJyc7XG4gIGxldCBjb3VudGVyID0gMDtcblxuICB3aGlsZSAoY291bnRlciA8IDcpIHtcbiAgICBjb25zdCBkYXluYW1lID0gZGF0ZS50b0xvY2FsZVN0cmluZygnZGVmYXVsdCcsIHsgd2Vla2RheTogJ25hcnJvdycgfSk7XG4gICAgd2Vla2RheXNTdHIgKz0gYDwke3RhZ30+JHtkYXluYW1lfTwvJHt0YWd9PmA7XG4gICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMSk7XG4gICAgY291bnRlcisrO1xuICB9XG5cbiAgcmV0dXJuIHdlZWtkYXlzU3RyO1xufVxuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50LmpzJztcbmltcG9ydCBlc2NhcGVIVE1MIGZyb20gJy4vZXNjYXBlSFRNTC5qcyc7XG5pbXBvcnQgZmlsbFRlbXBsYXRlIGZyb20gJy4vZmlsbFRlbXBsYXRlLmpzJztcbmltcG9ydCBmb3JtYXREYXRlIGZyb20gJy4vZm9ybWF0RGF0ZS5qcyc7XG5pbXBvcnQgZm9ybWF0VG90YWwgZnJvbSAnLi9mb3JtYXRUb3RhbC5qcyc7XG5pbXBvcnQgZ2V0RGF0ZUZyb21TdHJpbmcgZnJvbSAnLi9nZXREYXRlRnJvbVN0cmluZy5qcyc7XG5pbXBvcnQgZ2V0V2Vla0RheXMgZnJvbSAnLi9nZXRXZWVrRGF5cy5qcyc7XG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnLi90aHJvdHRsZS5qcyc7XG5pbXBvcnQgZmV0Y2hKc29uIGZyb20gJy4vZmV0Y2hKc29uLmpzJztcblxuZXhwb3J0IHtcbiAgY3JlYXRlRWxlbWVudCxcbiAgZXNjYXBlSFRNTCxcbiAgZmlsbFRlbXBsYXRlLFxuICBmb3JtYXREYXRlLFxuICBmb3JtYXRUb3RhbCxcbiAgZ2V0RGF0ZUZyb21TdHJpbmcsXG4gIGdldFdlZWtEYXlzLFxuICB0aHJvdHRsZSxcbiAgZmV0Y2hKc29uXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGhyb3R0bGUgKGZ1bmMsIGNvbnRleHQsIHRpbWVvdXQpIHtcbiAgbGV0IGFyZ3M7XG4gIGxldCBpc1dhaXRpbmcgPSBmYWxzZTtcbiAgbGV0IGlzRmlyc3RDYWxsID0gdHJ1ZTtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICBpZiAoaXNGaXJzdENhbGwpIHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgLi4uYXJncyk7XG4gICAgICBpc0ZpcnN0Q2FsbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghaXNXYWl0aW5nKSB7XG4gICAgICBpc1dhaXRpbmcgPSB0cnVlO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCAuLi5hcmdzKTtcbiAgICAgICAgaXNXYWl0aW5nID0gZmFsc2U7XG4gICAgICB9LCB0aW1lb3V0KTtcbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgcmVuZGVyUGFnZSBmcm9tICcuL3JlbmRlclBhZ2UuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5yb3V0ZXMgPSBbXTtcblxuICAgIHRoaXMuZG9jdW1lbnRDbGljayA9IHRoaXMuZG9jdW1lbnRDbGljay5iaW5kKHRoaXMpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRvY3VtZW50Q2xpY2spO1xuICB9XG5cbiAgc3RhdGljIGluc3RhbmNlICgpIHtcbiAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBSb3V0ZXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICB9XG5cbiAgYWRkUm91dGUgKHBhdHRlcm4sIHBhdGgpIHtcbiAgICB0aGlzLnJvdXRlcy5wdXNoKHsgcGF0dGVybiwgcGF0aCB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldE5vdEZvdW5kUGFnZSAocGF0aCkge1xuICAgIHRoaXMubm90Rm91bmRQYWdlUGF0aCA9IHBhdGg7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBuYXZpZ2F0ZSAoaHJlZikge1xuICAgIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGhyZWYpO1xuICAgIHRoaXMucm91dGUoKTtcbiAgfVxuXG4gIGFzeW5jIHJvdXRlICgpIHtcbiAgICBjb25zdCBzdHJpcHBlZFBhdGggPSBjbGVhblBhdGgod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICBsZXQgbWF0Y2g7XG5cbiAgICBmb3IgKGNvbnN0IHJvdXRlIG9mIHRoaXMucm91dGVzKSB7XG4gICAgICBtYXRjaCA9IHN0cmlwcGVkUGF0aC5tYXRjaChyb3V0ZS5wYXR0ZXJuKTtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICB0aGlzLnBhZ2UgPSBhd2FpdCB0aGlzLmNoYW5nZVBhZ2Uocm91dGUucGF0aCwgbWF0Y2gpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIW1hdGNoKSB7XG4gICAgICB0aGlzLnBhZ2UgPSBhd2FpdCB0aGlzLmNoYW5nZVBhZ2UodGhpcy5ub3RGb3VuZFBhZ2VQYXRoKTtcbiAgICB9XG5cbiAgICAvLyBjdXN0b20gZXZlbnQgaGVyZVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlUGFnZSAocGF0aCwgbWF0Y2gpIHtcbiAgICBpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS5kZXN0cm95KSB7XG4gICAgICB0aGlzLnBhZ2UuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMucGFnZSA9IGF3YWl0IHJlbmRlclBhZ2UocGF0aCwgbWF0Y2gpO1xuICB9XG5cbiAgYWRkTGlzdGVuZXIgKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsICgpID0+IHRoaXMucm91dGUoKSk7XG4gICAgdGhpcy5yb3V0ZSgpO1xuICB9XG5cbiAgZG9jdW1lbnRDbGljayAoZXZlbnQpIHtcbiAgICBjb25zdCBsaW5rID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2EnKTtcblxuICAgIGlmICghbGluaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuXG4gICAgaWYgKGhyZWYgJiYgaHJlZi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLm5hdmlnYXRlKGhyZWYpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhblBhdGggKHBhdGgpIHtcbiAgcmV0dXJuIGRlY29kZVVSSShwYXRoKVxuICAgIC5yZXBsYWNlKC9eXFwvfFxcLyQvLCAnJylcbiAgICAucmVwbGFjZSgvXFw/LiokLywgJycpXG4gICAgLnJlcGxhY2UoLyMuKiQvLCAnJyk7XG59XG4iLCJpbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uL2luZGV4LmpzJztcblxuY29uc3Qgbm90aWZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm5vdGlmQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25vdGlmaWNhdGlvbnMnKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kKG5vdGlmQ29udGFpbmVyKTtcblxubGV0IG5vdGlmaWNhdGlvbnMgPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbm90aWZ5IChtZXNzYWdlLCB0eXBlKSB7XG4gIGNvbnN0IG5vdGlmaWNhdGlvbiA9IG5ldyBOb3RpZmljYXRpb24oe1xuICAgIG1lc3NhZ2UsXG4gICAgY29udGFpbmVyOiBub3RpZkNvbnRhaW5lcixcbiAgICB0eXBlXG4gIH0pO1xuXG4gIG5vdGlmaWNhdGlvbnMucHVzaChub3RpZmljYXRpb24pO1xuXG4gIGlmIChub3RpZmljYXRpb24uZWxlbS5vZmZzZXRUb3AgPCAwKSB7XG4gICAgbm90aWZpY2F0aW9ucyA9IG5vdGlmaWNhdGlvbnMuZmlsdGVyKG5vdGlmaWNhdGlvbiA9PiB7XG4gICAgICByZXR1cm4gIW5vdGlmaWNhdGlvbi5pc0ZpbmlzaGVkO1xuICAgIH0pO1xuICAgIG5vdGlmaWNhdGlvbnMuc2hpZnQoKS5oaWRlRWxlbSgpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiByZW5kZXJQYWdlIChwYXRoLCBtYXRjaCkge1xuICBjb25zdCB7IGRlZmF1bHQ6IFBhZ2UgfSA9IGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovIGAuLi9wYWdlcy8ke3BhdGh9L2luZGV4LmpzYCk7XG4gIGNvbnN0IHBhZ2UgPSBuZXcgUGFnZShtYXRjaCk7XG4gIGNvbnN0IHJlbmRlcmVkUGFnZSA9IGF3YWl0IHBhZ2UucmVuZGVyKCk7XG5cbiAgY29uc3QgY29udGVudEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb250ZW50RWxlbS5pbm5lckhUTUwgPSAnJztcbiAgY29udGVudEVsZW0uYXBwZW5kKHJlbmRlcmVkUGFnZSk7XG59XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vY2F0ZWdvcmllcy9pbmRleC5qc1wiOiBcIi4vc3JjL3BhZ2VzL2NhdGVnb3JpZXMvaW5kZXguanNcIixcblx0XCIuL2Rhc2hib2FyZC9pbmRleC5qc1wiOiBcIi4vc3JjL3BhZ2VzL2Rhc2hib2FyZC9pbmRleC5qc1wiLFxuXHRcIi4vZXJyb3I0MDQvaW5kZXguanNcIjogXCIuL3NyYy9wYWdlcy9lcnJvcjQwNC9pbmRleC5qc1wiLFxuXHRcIi4vcHJvZHVjdHMvZWRpdC9pbmRleC5qc1wiOiBcIi4vc3JjL3BhZ2VzL3Byb2R1Y3RzL2VkaXQvaW5kZXguanNcIixcblx0XCIuL3Byb2R1Y3RzL2luZGV4LmpzXCI6IFwiLi9zcmMvcGFnZXMvcHJvZHVjdHMvaW5kZXguanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gd2VicGFja0FzeW5jQ29udGV4dFJlc29sdmUocmVxKS50aGVuKF9fd2VicGFja19yZXF1aXJlX18pO1xufVxuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXVnaHQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fVxuXHRcdHJldHVybiBtYXBbcmVxXTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0FzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0FzeW5jQ29udGV4dFJlc29sdmU7XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gXCIuL3NyYy9wYWdlcyBlYWdlciByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwvaW5kZXhcXFxcLmpzJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGZldGNoSnNvbiB9IGZyb20gJy4uLy4uL2hlbHBlcnMvaW5kZXguanMnO1xuaW1wb3J0IFBhZ2VNZXNzYWdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGFnZU1lc3NhZ2UvaW5kZXguanMnO1xuXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG5jb25zdCBjbHMgPSB7XG4gIGVsZW06ICdjYXRlZ29yaWVzJyxcbiAgbGlzdDogJ2NhdGVnb3JpZXNfX2xpc3QnLFxuICBsaXN0VG9wOiAnY2F0ZWdvcmllc19fbGlzdC0tdG9wY2F0ZWdvcmllcycsXG4gIGxpc3RTdWJjYXRzOiAnY2F0ZWdvcmllc19fbGlzdC0tc3ViY2F0ZWdvcmllcycsXG4gIGl0ZW06ICdjYXRlZ29yaWVzX19pdGVtJyxcbiAgaXRlbVRvcDogJ2NhdGVnb3JpZXNfX2l0ZW0tLXRvcGNhdGVnb3J5JyxcbiAgaXRlbVN1YjogJ2NhdGVnb3JpZXNfX2l0ZW0tLXN1YmNhdGVnb3J5JyxcbiAgaXRlbU9wZW46ICdjYXRlZ29yaWVzX19pdGVtLS1vcGVuJyxcbiAgdG9nZ2xlcjogJ2NhdGVnb3JpZXNfX3RvZ2dsZXInLFxuICBjb3VudGVyOiAnY2F0ZWdvcmllc19fY291bnRlcidcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuYXBpVXJsID0gcHJvY2Vzcy5lbnYuQVBJX1VSTCB8fCAnaHR0cHM6Ly9jb3Vyc2UtanMuamF2YXNjcmlwdC5ydSc7XG4gICAgdGhpcy5mZXRjaFVybCA9IGAke3RoaXMuYXBpVXJsfS9hcGkvcmVzdC9jYXRlZ29yaWVzP19zb3J0PXdlaWdodCZfcmVmcz1zdWJjYXRlZ29yeWA7XG5cbiAgICB0aGlzLmxpc3RDbGljayA9IHRoaXMubGlzdENsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBhc3luYyByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgY2F0ZWdvcmllcywgbWVzc2FnZSB9ID0gYXdhaXQgdGhpcy5sb2FkRGF0YSgpO1xuICAgIGNvbnN0IGhlYWRlciA9IGA8aGVhZGVyIGNsYXNzPVwicGFnZS1jb250ZW50X19oZWFkZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzPVwicGFnZS1jb250ZW50X190aXRsZVwiPkRhc2hib2FyZC9DYXRlZ29yaWVzPC9oMT5cbiAgICAgIDwvaGVhZGVyPmA7XG5cbiAgICBpZiAobWVzc2FnZSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoYDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRlbnRcIj5cbiAgICAgICAgJHtoZWFkZXJ9XG5cbiAgICAgICAgJHttZXNzYWdlLmVsZW0ub3V0ZXJIVE1MfVxuICAgICAgPC9kaXY+XG4gICAgICBgKTtcbiAgICB9XG5cbiAgICBjb25zdCBsaXN0ID0gdGhpcy5jcmVhdGVMaXN0KGNhdGVnb3JpZXMpO1xuICAgIHRoaXMuZWxlbSA9IGNyZWF0ZUVsZW1lbnQoYDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRlbnRcIj5cbiAgICAgICR7aGVhZGVyfVxuXG4gICAgICA8c2VjdGlvbiBjbGFzcz1cInBhZ2Utc2VjdGlvbiBjYXRlZ29yaWVzXCI+XG4gICAgICAgIDxoMiBjbGFzcz1cInBhZ2Utc2VjdGlvbl9fdGl0bGVcIj5DYXRlZ29yaWVzPC9oMj5cblxuICAgICAgICAke2xpc3R9XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+YCk7XG5cbiAgICB0aGlzLmFkZEV2ZW50cygpO1xuXG4gICAgcmV0dXJuIHRoaXMuZWxlbTtcbiAgfVxuXG4gIGFzeW5jIGxvYWREYXRhICgpIHtcbiAgICAvLyBUT0RPOiDQuNC90LTQuNC60LDRgtC+0YAg0LfQsNCz0YDRg9C30LrQuFxuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZmV0Y2hKc29uKHRoaXMuZmV0Y2hVcmwpO1xuXG4gICAgICByZXR1cm4geyBjYXRlZ29yaWVzIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIFNob3cgZXJyb3IgbWVzc2FnZSB0byB1c2VyXG4gICAgICBjb25zdCBtZXNzYWdlID0gbmV3IFBhZ2VNZXNzYWdlKHsgZXJyb3IgfSk7XG5cbiAgICAgIHJldHVybiB7IG1lc3NhZ2UgfTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVMaXN0IChpdGVtcywgaXNTdWJjYXQgPSBmYWxzZSkge1xuICAgIGxldCBpdGVtc1N0ciA9ICcnO1xuICAgIGxldCBsaXN0Q2xhc3MgPSBjbHMubGlzdFRvcDtcbiAgICBsZXQgaXRlbUNsYXNzID0gY2xzLml0ZW07XG4gICAgbGV0IGlzRHJhZ2dhYmxlQXR0ciA9ICcnO1xuXG4gICAgaWYgKGlzU3ViY2F0KSB7XG4gICAgICBsaXN0Q2xhc3MgPSBjbHMubGlzdFN1YmNhdHM7XG4gICAgICBpdGVtQ2xhc3MgKz0gYCAke2Nscy5pdGVtU3VifWA7XG4gICAgICBpc0RyYWdnYWJsZUF0dHIgPSAnaXM9XCJkcmFnZ2FibGUtbGlzdFwiJztcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbUNsYXNzICs9IGAgJHtjbHMuaXRlbVRvcH1gO1xuICAgIH1cblxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgIGxldCBzdWJDYXRzTGlzdCA9ICcnO1xuICAgICAgbGV0IHRpdGxlID0gaXRlbS50aXRsZTtcbiAgICAgIGNvbnN0IHN1YkNhdHMgPSBpdGVtLnN1YmNhdGVnb3JpZXM7XG4gICAgICBsZXQgY291bnRlciA9ICcnO1xuXG4gICAgICBpZiAoaXNTdWJjYXQpIHtcbiAgICAgICAgY29uc3QgY291bnRlclRleHQgPSB0aGlzLmdldFBsdXJhbChpdGVtLmNvdW50LCBbJ3Byb2R1Y3QnLCAncHJvZHVjdHMnXSk7XG4gICAgICAgIGNvdW50ZXIgPSBgPHNwYW4gY2xhc3M9XCIke2Nscy5jb3VudGVyfVwiPiR7Y291bnRlclRleHR9PC9zcGFuPmA7XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0pXG5cbiAgICAgIGlmIChzdWJDYXRzKSB7XG4gICAgICAgIHRpdGxlID0gYCA8YnV0dG9uIGNsYXNzPVwiJHtjbHMudG9nZ2xlcn1cIj4ke2l0ZW0udGl0bGV9PC9idXR0b24+YDtcbiAgICAgICAgc3ViQ2F0c0xpc3QgPSB0aGlzLmNyZWF0ZUxpc3Qoc3ViQ2F0cywgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGl0ZW1zU3RyICs9IGA8bGkgY2xhc3M9XCIke2l0ZW1DbGFzc31cIj5cbiAgICAgICAgJHt0aXRsZX1cbiAgICAgICAgJHtjb3VudGVyfVxuICAgICAgICAke3N1YkNhdHNMaXN0fVxuICAgICAgPC9saT5gO1xuICAgIH1cblxuICAgIHJldHVybiBgPHVsXG4gICAgICBjbGFzcz1cIiR7Y2xzLmxpc3R9ICR7bGlzdENsYXNzfVwiICR7aXNEcmFnZ2FibGVBdHRyfVxuICAgICAgPlxuICAgICAgJHtpdGVtc1N0cn1cbiAgICA8L3VsPmA7XG4gIH1cblxuICBhZGRFdmVudHMgKCkge1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcihgLiR7Y2xzLmxpc3RUb3B9YCk7XG4gICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubGlzdENsaWNrKTtcbiAgfVxuXG4gIGxpc3RDbGljayAoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KGAuJHtjbHMudG9nZ2xlcn1gKTtcbiAgICBpZiAoIWNvbnRyb2wpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpdGVtVG9wID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoYC4ke2Nscy5pdGVtVG9wfWApO1xuICAgIGl0ZW1Ub3AuY2xhc3NMaXN0LnRvZ2dsZShjbHMuaXRlbU9wZW4pO1xuICB9XG5cbiAgZ2V0UGx1cmFsIChudW0sIHZhcmlhbnRzKSB7XG4gICAgbGV0IHZhcmlhbnQgPSB2YXJpYW50c1swXTtcbiAgICBpZiAobnVtICE9PSAxKSB7XG4gICAgICB2YXJpYW50ID0gdmFyaWFudHNbMV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGAke251bX0gJHt2YXJpYW50fWA7XG4gIH1cbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkobW9kdWxlLmlkLCBjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vaGVscGVycy9pbmRleC5qcyc7XG5cbmNvbnN0IGZyb20gPSBuZXcgRGF0ZSgpO1xuZnJvbS5zZXRNb250aChmcm9tLmdldE1vbnRoKCkgLSAxKTtcbmNvbnN0IHRvID0gbmV3IERhdGUoKTtcblxuY29uc3QgZGF0ZXMgPSB7XG4gIGZyb206IGZyb20udG9JU09TdHJpbmcoKSxcbiAgdG86IHRvLnRvSVNPU3RyaW5nKClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgYXN5bmMgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChgPGRpdiBjbGFzcz1cInBhZ2UtY29udGVudFwiPlxuICAgICAgPGhlYWRlciBjbGFzcz1cInBhZ2UtY29udGVudF9faGVhZGVyXCI+XG4gICAgICAgIDxoMSBjbGFzcz1cInBhZ2UtY29udGVudF9fdGl0bGVcIj5EYXNoYm9hcmQ8L2gxPlxuXG4gICAgICAgIDxyYW5nZS1waWNrZXJcbiAgICAgICAgICBkYXRhLWZyb209XCIke2RhdGVzLmZyb219XCJcbiAgICAgICAgICBkYXRhLXRvPVwiJHtkYXRlcy50b31cIlxuICAgICAgICA+PC9yYW5nZS1waWNrZXI+XG4gICAgICA8L2hlYWRlcj5cblxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInBhZ2Utc2VjdGlvbiBwYWdlLXNlY3Rpb24tLWNvbHVtbi1jaGFydHNcIj5cbiAgICAgICAgICA8Y29sdW1uLWNoYXJ0XG4gICAgICAgICAgICBkYXRhLXR5cGU9XCJvcmRlcnNcIlxuICAgICAgICAgICAgZGF0YS1mcm9tPVwiJHtkYXRlcy5mcm9tfVwiXG4gICAgICAgICAgICBkYXRhLXRvPVwiJHtkYXRlcy50b31cIlxuICAgICAgICAgID48L2NvbHVtbi1jaGFydD5cblxuICAgICAgICAgIDxjb2x1bW4tY2hhcnRcbiAgICAgICAgICAgIGRhdGEtdHlwZT1cInNhbGVzXCJcbiAgICAgICAgICAgIGRhdGEtaXMtbW9uZXk9XCJ0cnVlXCJcbiAgICAgICAgICAgIGRhdGEtZnJvbT1cIiR7ZGF0ZXMuZnJvbX1cIlxuICAgICAgICAgICAgZGF0YS10bz1cIiR7ZGF0ZXMudG99XCJcbiAgICAgICAgICA+PC9jb2x1bW4tY2hhcnQ+XG5cbiAgICAgICAgICA8Y29sdW1uLWNoYXJ0XG4gICAgICAgICAgICBkYXRhLXR5cGU9XCJjdXN0b21lcnNcIlxuICAgICAgICAgICAgZGF0YS1mcm9tPVwiJHtkYXRlcy5mcm9tfVwiXG4gICAgICAgICAgICBkYXRhLXRvPVwiJHtkYXRlcy50b31cIlxuICAgICAgICAgID48L2NvbHVtbi1jaGFydD5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicGFnZS1zZWN0aW9uXCI+XG4gICAgICAgICAgPGgyIGNsYXNzPVwicGFnZS1zZWN0aW9uX190aXRsZVwiPkJlc3RzZWxsZXJzPC9oMj5cblxuICAgICAgICA8c29ydGFibGUtdGFibGVcbiAgICAgICAgICBkYXRhLXVybD1cIi9hcGkvZGFzaGJvYXJkL2Jlc3RzZWxsZXJzP19lbWJlZD1zdWJjYXRlZ29yeS5jYXRlZ29yeVwiLFxuICAgICAgICAgIGRhdGEtaXMtZHluYW1pYz1cIjBcIlxuICAgICAgICAgIGRhdGEtZmllbGRzLWxpc3Q9XCJbJ2ltYWdlcycsICd0aXRsZScsICdzdWJjYXRlZ29yeScsICdxdWFudGl0eScsICdwcmljZScsICdzdGF0dXMnXVwiXG4gICAgICAgICAgZGF0YS1vcmRlci1maWVsZD0ndGl0bGUnLFxuICAgICAgICAgIGRhdGEtb3JkZXItZGlyZWN0aW9uPVwiMVwiXG4gICAgICAgICAgZGF0YS1mcm9tPVwiJHtkYXRlcy5mcm9tfVwiXG4gICAgICAgICAgZGF0YS10bz1cIiR7ZGF0ZXMudG99XCJcbiAgICAgICAgICA+PC9zb3J0YWJsZS10YWJsZT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+YCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBhc3luYyByZW5kZXIgKCkge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KGA8ZGl2IGNsYXNzPVwiNDA0XCI+XG4gICAgICAgIDxoMT5QYWdlIG5vdCBmb3VuZDwvaDE+XG4gICAgICAgIDxwPk5vIHN1Y2ggcGFnZTwvcD5cbiAgICAgIDwvZGl2PmApO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGZvcm06ICdwcm9kdWN0LWZvcm0nLFxuICBsaXN0OiAncHJvZHVjdC1mb3JtX19saXN0JyxcbiAgaXRlbTogJ3Byb2R1Y3QtZm9ybV9faXRlbScsXG4gIGl0ZW1UaW55OiAncHJvZHVjdC1mb3JtX19pdGVtLS10aW55JyxcbiAgaXRlbUZvbGxvdzogJ3Byb2R1Y3QtZm9ybV9faXRlbS0tZm9sbG93JyxcbiAgaXRlbUZ1bGw6ICdwcm9kdWN0LWZvcm1fX2l0ZW0tLWZ1bGwnLFxuICBsYWJlbDogJ3Byb2R1Y3QtZm9ybV9fbGFiZWwnLFxuICBpbnB1dDogJ3Byb2R1Y3QtZm9ybV9faW5wdXQnLFxuICBpbnB1dFRleHQ6ICdwcm9kdWN0LWZvcm1fX2lucHV0LS10ZXh0JyxcbiAgaW5wdXROdW1iZXI6ICdwcm9kdWN0LWZvcm1fX2lucHV0LS1udW1iZXInLFxuICBpbnB1dFNlbGVjdDogJ3Byb2R1Y3QtZm9ybV9faW5wdXQtLXNlbGVjdCcsXG4gIGlucHV0VGV4dGFyZWE6ICdwcm9kdWN0LWZvcm1fX2lucHV0LS10ZXh0YXJlYScsXG4gIGltZ3NMaXN0OiAncHJvZHVjdC1mb3JtX19pbWFnZXMtbGlzdCcsXG4gIGltZ3NJdGVtOiAncHJvZHVjdC1mb3JtX19pbWFnZXMtaXRlbScsXG4gIGltZzogJ3Byb2R1Y3QtZm9ybV9faW1hZ2UnLFxuICBpbWdXcmFwcGVyOiAncHJvZHVjdC1mb3JtX19pbWFnZS13cmFwcGVyJyxcbiAgaW1nU291cmNlOiAncHJvZHVjdC1mb3JtX19pbWFnZS1zb3VyY2UnLFxuICBpbWdSZW1vdmU6ICdwcm9kdWN0LWZvcm1fX2ltYWdlLXJlbW92ZScsXG4gIHByZXZpZXc6ICdwcm9kdWN0LWZvcm1fX3ByZXZpZXcnLFxuICBmb290ZXI6ICdwcm9kdWN0LWZvcm1fX2Zvb3RlcicsXG4gIHN1Ym1pdDogJ3Byb2R1Y3QtZm9ybV9fc3VibWl0J1xufTtcbiIsImltcG9ydCB7IGlucHV0VGV4dCwgaW5wdXROdW1iZXIsIGlucHV0VGV4dGFyZWEsIGlucHV0U2VsZWN0IH0gZnJvbSAnLi90ZW1wbGF0ZXMuanMnO1xuaW1wb3J0IHN0YXR1c1RleHQgZnJvbSAnLi9zdGF0dXNUZXh0LmpzJztcbmltcG9ydCB7IGZpbGxUZW1wbGF0ZSB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvaW5kZXguanMnO1xuaW1wb3J0IHsgY2F0ZWdvcmllc1RvRmxhdExpc3QsIGdldE9wdGlvbnMsIGdldEltZ3NMaXN0TWFya3VwIH0gZnJvbSAnLi9oZWxwZXJzJztcblxuLy8gUmVuZGVyaW5nIG1ldGhvZHMgZm9yIHByb2R1Y3QgaW5wdXRzXG5leHBvcnQgZGVmYXVsdCB7XG4gIGltYWdlczoge1xuICAgIHJlbmRlciAoeyBpbWFnZXMgfSkge1xuICAgICAgaWYgKCFpbWFnZXMpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZ2V0SW1nc0xpc3RNYXJrdXAoaW1hZ2VzKTtcbiAgICB9LFxuICAgIGNvbXBhcmU6IG51bGxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICByZW5kZXIgKHsgdGl0bGUgfSkge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgaWQ6ICd0aXRsZScsXG4gICAgICAgIGZpZWxkTmFtZTogJ05hbWUnLFxuICAgICAgICB2YWx1ZTogdGl0bGVcbiAgICAgIH07XG4gICAgICByZXR1cm4gZmlsbFRlbXBsYXRlKHtcbiAgICAgICAgdG1wbDogaW5wdXRUZXh0LFxuICAgICAgICBkYXRhXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgcmVuZGVyICh7IGRlc2NyaXB0aW9uIH0pIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGlkOiAnZGVzY3JpcHRpb24nLFxuICAgICAgICBmaWVsZE5hbWU6ICdEZXNjcmlwdGlvbicsXG4gICAgICAgIHZhbHVlOiBkZXNjcmlwdGlvblxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGZpbGxUZW1wbGF0ZSh7XG4gICAgICAgIHRtcGw6IGlucHV0VGV4dGFyZWEsXG4gICAgICAgIGRhdGFcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgc3ViY2F0ZWdvcnk6IHtcbiAgICByZW5kZXIgKHsgY2F0ZWdvcmllcywgc3ViY2F0ZWdvcnkgfSkge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgaWQ6ICdzdWJjYXRlZ29yeScsXG4gICAgICAgIGZpZWxkTmFtZTogJ0NhdGVnb3J5JyxcbiAgICAgICAgb3B0aW9uczogZ2V0T3B0aW9ucyhjYXRlZ29yaWVzVG9GbGF0TGlzdChjYXRlZ29yaWVzKSwgc3ViY2F0ZWdvcnkpXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gZmlsbFRlbXBsYXRlKHtcbiAgICAgICAgdG1wbDogaW5wdXRTZWxlY3QsXG4gICAgICAgIGRhdGFcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgcXVhbnRpdHk6IHtcbiAgICByZW5kZXIgKHsgcXVhbnRpdHkgfSkge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgaWQ6ICdxdWFudGl0eScsXG4gICAgICAgIGZpZWxkTmFtZTogJ1F1YW50aXR5JyxcbiAgICAgICAgdmFsdWU6IHF1YW50aXR5XG4gICAgICB9O1xuICAgICAgcmV0dXJuIGZpbGxUZW1wbGF0ZSh7XG4gICAgICAgIHRtcGw6IGlucHV0TnVtYmVyLFxuICAgICAgICBkYXRhXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHByaWNlOiB7XG4gICAgcmVuZGVyICh7IHByaWNlIH0pIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGlkOiAncHJpY2UnLFxuICAgICAgICBmaWVsZE5hbWU6ICdQcmljZScsXG4gICAgICAgIHZhbHVlOiBwcmljZVxuICAgICAgfTtcbiAgICAgIHJldHVybiBmaWxsVGVtcGxhdGUoe1xuICAgICAgICB0bXBsOiBpbnB1dE51bWJlcixcbiAgICAgICAgZGF0YVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBkaXNjb3VudDoge1xuICAgIHJlbmRlciAoeyBkaXNjb3VudCB9KSB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBpZDogJ2Rpc2NvdW50JyxcbiAgICAgICAgZmllbGROYW1lOiAnRGlzY291bnQnLFxuICAgICAgICB2YWx1ZTogZGlzY291bnRcbiAgICAgIH07XG4gICAgICByZXR1cm4gZmlsbFRlbXBsYXRlKHtcbiAgICAgICAgdG1wbDogaW5wdXROdW1iZXIsXG4gICAgICAgIGRhdGFcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgc3RhdHVzOiB7XG4gICAgcmVuZGVyICh7IHN0YXR1cyB9KSB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBpZDogJ3N0YXR1cycsXG4gICAgICAgIGZpZWxkTmFtZTogJ1N0YXR1cycsXG4gICAgICAgIHZhbHVlOiBzdGF0dXMsXG4gICAgICAgIG9wdGlvbnM6IGdldE9wdGlvbnMoT2JqZWN0LnZhbHVlcyhzdGF0dXNUZXh0KSwgc3RhdHVzKVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGZpbGxUZW1wbGF0ZSh7XG4gICAgICAgIHRtcGw6IGlucHV0U2VsZWN0LFxuICAgICAgICBkYXRhXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG4iLCJpbXBvcnQgY2xzIGZyb20gJy4vY2xhc3Nlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIG5hbWU6ICd0aXRsZSdcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdkZXNjcmlwdGlvbicsXG4gICAgbW9kczogW2Nscy5pdGVtRnVsbF1cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdpbWFnZXMnLFxuICAgIG1vZHM6IFtjbHMuaXRlbUZ1bGxdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnc3ViY2F0ZWdvcnknXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAncHJpY2UnLFxuICAgIG1vZHM6IFtjbHMuaXRlbVRpbnldXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZGlzY291bnQnLFxuICAgIG1vZHM6IFtjbHMuaXRlbVRpbnksIGNscy5pdGVtRm9sbG93XVxuICB9LFxuICB7XG4gICAgbmFtZTogJ3F1YW50aXR5JyxcbiAgICBtb2RzOiBbY2xzLml0ZW1UaW55XVxuICB9LFxuICB7XG4gICAgbmFtZTogJ3N0YXR1cycsXG4gICAgbW9kczogW2Nscy5pdGVtVGlueV1cbiAgfVxuXTtcbiIsImltcG9ydCBjbHMgZnJvbSAnLi9jbGFzc2VzLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNhdGVnb3JpZXNUb0ZsYXRMaXN0IChjYXRlZ29yaWVzKSB7XG4gIGNvbnN0IGZsYXRMaXN0ID0gW107XG5cbiAgZm9yIChjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XG4gICAgZm9yIChjb25zdCBzdWJjYXRlZ29yeSBvZiBjYXRlZ29yeS5zdWJjYXRlZ29yaWVzKSB7XG4gICAgICBmbGF0TGlzdC5wdXNoKHtcbiAgICAgICAgdmFsdWU6IHN1YmNhdGVnb3J5LmlkLFxuICAgICAgICB0ZXh0OiBgJHtjYXRlZ29yeS50aXRsZX0gPiAke3N1YmNhdGVnb3J5LnRpdGxlfWBcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmbGF0TGlzdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE9wdGlvbnMgKGxpc3QsIHNlbGVjdGVkKSB7XG4gIHJldHVybiBsaXN0XG4gICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gaXRlbS52YWx1ZSB8fCBpbmRleDtcbiAgICAgIGNvbnN0IHRleHQgPSBpdGVtLnRleHQgfHwgaXRlbTtcbiAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSB2YWx1ZSA9PT0gc2VsZWN0ZWQgPyAnc2VsZWN0ZWQnIDogJyc7XG5cbiAgICAgIHJldHVybiBgPG9wdGlvbiB2YWx1ZT1cIiR7dmFsdWV9XCIgJHtpc1NlbGVjdGVkfT4ke3RleHR9PC9vcHRpb24+YDtcbiAgICB9KVxuICAgIC5qb2luKCcnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEltZ3NMaXN0TWFya3VwIChpbWFnZXMpIHtcbiAgY29uc3QgaW1hZ2VzSXRlbXMgPSBpbWFnZXNcbiAgICAubWFwKGl0ZW0gPT4ge1xuICAgICAgcmV0dXJuIGA8bGkgY2xhc3M9XCIke2Nscy5pbWdzSXRlbX1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIiR7Y2xzLmltZ1dyYXBwZXJ9XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIke2l0ZW0udXJsfVwiIGNsYXNzPVwiJHtjbHMuaW1nfVwiPlxuICAgICAgICAgIDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7aXRlbS51cmx9KVwiIGNsYXNzPVwiJHtjbHMucHJldmlld31cIj48c3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiJHtjbHMuaW1nU291cmNlfVwiPiR7aXRlbS5zb3VyY2V9PC9zcGFuPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiR7Y2xzLmltZ1JlbW92ZX1cIj5SZW1vdmU8L2J1dHRvbj5cbiAgICAgIDwvbGk+YDtcbiAgICB9KTtcblxuICByZXR1cm4gYCArIHVwbG9hZFxuICAgIDx1bCBjbGFzcz1cIiR7Y2xzLmltZ3NMaXN0fVwiIGlzPVwiZHJhZ2dhYmxlLWxpc3RcIj4ke2ltYWdlc0l0ZW1zLmpvaW4oJyAnKX08L3VsPmA7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTI2NzkxNTRhZmRlMDgxNWM2MjIyYzdjMDQwMWY0NDIuc3ZnXCI7IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgZmV0Y2hKc29uIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9pbmRleC5qcyc7XG5pbXBvcnQgUGFnZU1lc3NhZ2UgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9QYWdlTWVzc2FnZS9pbmRleC5qcyc7XG5pbXBvcnQgZmllbGRzIGZyb20gJy4vZmllbGRzLmpzJztcbmltcG9ydCBmaWVsZHNPcmRlciBmcm9tICcuL2ZpZWxkc09yZGVyLmpzJztcbmltcG9ydCBjbHMgZnJvbSAnLi9jbGFzc2VzLmpzJztcbmltcG9ydCB7IGhlYWRlciB9IGZyb20gJy4vdGVtcGxhdGVzJztcblxuaW1wb3J0ICcuL2ljb24tdHJhc2guc3ZnJztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3RvciAobWF0Y2gpIHtcbiAgICB0aGlzLmlkID0gbWF0Y2hbMF0ucmVwbGFjZSgncHJvZHVjdHMvJywgJycpO1xuXG4gICAgaWYgKCFtYXRjaFswXSkge1xuICAgICAgdGhpcy5pZCA9ICczZC1vY2hraS1vcHRvbWEtemQzMDInO1xuICAgIH1cblxuICAgIHRoaXMuYXBpVXJsID0gcHJvY2Vzcy5lbnYuQVBJX1VSTCB8fCAnaHR0cHM6Ly9jb3Vyc2UtanMuamF2YXNjcmlwdC5ydSc7XG4gICAgdGhpcy5mZXRjaFByb2R1Y3RVcmwgPSB0aGlzLmFwaVVybCArIGAvYXBpL3Jlc3QvcHJvZHVjdHM/aWQ9JHt0aGlzLmlkfWA7XG4gICAgdGhpcy5mZXRjaENhdGVnb3JpZXNVcmwgPSB0aGlzLmFwaVVybCArICcvYXBpL3Jlc3QvY2F0ZWdvcmllcz9fc29ydD13ZWlnaHQmX3JlZnM9c3ViY2F0ZWdvcnknO1xuICB9XG5cbiAgYXN5bmMgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IHByb2R1Y3REYXRhLCBjYXRlZ29yaWVzLCBlcnJvck1lc3NhZ2UgfSA9IGF3YWl0IHRoaXMubG9hZERhdGEoKTtcblxuICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KGA8ZGl2IGNsYXNzPVwicGFnZS1jb250ZW50XCI+XG4gICAgICAgICR7aGVhZGVyfVxuXG4gICAgICAgICR7ZXJyb3JNZXNzYWdlLm91dGVySFRNTH1cbiAgICAgIDwvZGl2PlxuICAgICAgYCk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvZHVjdCA9IHByb2R1Y3REYXRhWzBdO1xuICAgIGNvbnN0IGlucHV0cyA9IFtdO1xuXG4gICAgZm9yIChjb25zdCB7IG5hbWUsIG1vZHMgfSBvZiBmaWVsZHNPcmRlcikge1xuICAgICAgaWYgKGZpZWxkc1tuYW1lXSkge1xuICAgICAgICBsZXQgcGFyYW1zID0gcHJvZHVjdDtcblxuICAgICAgICBpZiAobmFtZSA9PT0gJ3N1YmNhdGVnb3J5Jykge1xuICAgICAgICAgIHBhcmFtcyA9IHtcbiAgICAgICAgICAgIC4uLnBhcmFtcyxcbiAgICAgICAgICAgIGNhdGVnb3JpZXNcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW5wdXQgPSBmaWVsZHNbbmFtZV0ucmVuZGVyKHBhcmFtcyk7XG4gICAgICAgIGxldCBjbGFzc2VzID0gW2Nscy5pdGVtXTtcblxuICAgICAgICBpZiAobW9kcykge1xuICAgICAgICAgIGNsYXNzZXMgPSBjbGFzc2VzLmNvbmNhdChtb2RzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0cy5wdXNoKGA8bGkgY2xhc3M9XCIke2NsYXNzZXMuam9pbignICcpfVwiPiR7aW5wdXR9PC9saT5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChgPGRpdiBjbGFzcz1cInBhZ2UtY29udGVudFwiPlxuICAgICAgJHtoZWFkZXJ9XG5cbiAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIGNsYXNzPVwiJHtjbHMuZm9ybX19XCI+XG4gICAgICAgIDx1bCBjbGFzcz1cIiR7Y2xzLmxpc3R9XCI+XG4gICAgICAgICAgJHtpbnB1dHMuam9pbignXFxuJyl9XG4gICAgICAgIDwvdWw+XG5cbiAgICAgICAgPGZvb3RlciBjbGFzcz1cIiR7Y2xzLmZvb3Rlcn1cIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiJHtjbHMuc3VibWl0fVwiPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+YCk7XG4gIH1cblxuICBhc3luYyBsb2FkRGF0YSAoKSB7XG4gICAgLy8gVE9ETzogYWRkIGxvYWRpbmcgaW5kaWNhdG9yXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHByb2R1Y3REYXRhID0gYXdhaXQgZmV0Y2hKc29uKHRoaXMuZmV0Y2hQcm9kdWN0VXJsKTtcbiAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBmZXRjaEpzb24odGhpcy5mZXRjaENhdGVnb3JpZXNVcmwpO1xuXG4gICAgICByZXR1cm4geyBwcm9kdWN0RGF0YSwgY2F0ZWdvcmllcyB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gbmV3IFBhZ2VNZXNzYWdlKHsgZXJyb3IgfSk7XG4gICAgICByZXR1cm4geyBlcnJvck1lc3NhZ2U6IG1lc3NhZ2UuZWxlbSB9O1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAwOiAnRGlzYWJsZWQnLFxuICAxOiAnRW5hYmxlZCdcbn07XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkobW9kdWxlLmlkLCBjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgY2xzIGZyb20gJy4vY2xhc3Nlcy5qcyc7XG5cbmV4cG9ydCBjb25zdCBoZWFkZXIgPSBgPGhlYWRlciBjbGFzcz1cInBhZ2UtY29udGVudF9faGVhZGVyXCI+XG4gIDxoMSBjbGFzcz1cInBhZ2UtY29udGVudF9fdGl0bGVcIj5cbiAgPGEgaHJlZj1cIi9wcm9kdWN0c1wiPlByb2R1Y3RzPC9hPlxuICAvRWRpdCBQcm9kdWN0PC9oMT5cbjwvaGVhZGVyPmA7XG5cbmV4cG9ydCBjb25zdCBpbnB1dFRleHQgPSBgPGxhYmVsIGNsYXNzPVwiJHtjbHMubGFiZWx9XCI+XG4gIHtmaWVsZE5hbWV9XG5cbiAgPGlucHV0XG4gICAgY2xhc3M9XCIke2Nscy5pbnB1dH0gJHtjbHMuaW5wdXRUZXh0fVwiXG4gICAgdHlwZT1cInRleHRcIlxuICAgIG5hbWU9XCJ7aWR9XCJcbiAgICB2YWx1ZT1cInt2YWx1ZX1cIi8+XG48L2xhYmVsPmA7XG5cbmV4cG9ydCBjb25zdCBpbnB1dE51bWJlciA9IGA8bGFiZWwgY2xhc3M9XCIke2Nscy5sYWJlbH1cIj5cbiAge2ZpZWxkTmFtZX1cblxuICA8aW5wdXRcbiAgICBjbGFzcz1cIiR7Y2xzLmlucHV0fSAke2Nscy5pbnB1dE51bWJlcn1cIlxuICAgIHR5cGU9XCJudW1iZXJcIlxuICAgIG5hbWU9XCJ7aWR9XCJcbiAgICB2YWx1ZT1cInt2YWx1ZX1cIi8+XG48L2xhYmVsPmA7XG5cbmV4cG9ydCBjb25zdCBpbnB1dFRleHRhcmVhID0gYDxsYWJlbCBjbGFzcz1cIiR7Y2xzLmxhYmVsfVwiPlxuICB7ZmllbGROYW1lfVxuXG4gIDx0ZXh0YXJlYVxuICAgIGNsYXNzPVwiJHtjbHMuaW5wdXR9ICR7Y2xzLmlucHV0VGV4dGFyZWF9XCJcbiAgICBuYW1lPVwie2lkfVwiPnt2YWx1ZX08L3RleHRhcmVhPlxuPC9sYWJlbD5gO1xuXG5leHBvcnQgY29uc3QgaW5wdXRTZWxlY3QgPSBgPGxhYmVsIGNsYXNzPVwiJHtjbHMubGFiZWx9XCI+XG4gIHtmaWVsZE5hbWV9XG5cbiAgPHNlbGVjdFxuICAgIGNsYXNzPVwiJHtjbHMuaW5wdXR9ICR7Y2xzLmlucHV0U2VsZWN0fVwiXG4gICAgbmFtZT1cIntpZH1cIj5cbiAgICB7b3B0aW9uc31cbiAgPC9zZWxlY3Q+XG48L2xhYmVsPmA7XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vaGVscGVycy9pbmRleC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgYXN5bmMgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChgPGRpdiBjbGFzcz1cInBhZ2UtY29udGVudFwiPlxuICAgICAgPGhlYWRlciBjbGFzcz1cInBhZ2UtY29udGVudF9faGVhZGVyXCI+XG4gICAgICAgIDxoMSBjbGFzcz1cInBhZ2UtY29udGVudF9fdGl0bGVcIj5EYXNoYm9hcmQvUHJvZHVjdHM8L2gxPlxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwicGFnZS1zZWN0aW9uXCI+XG4gICAgICAgIDxoMiBjbGFzcz1cInBhZ2Utc2VjdGlvbl9fdGl0bGVcIj5Qcm9kdWN0czwvaDI+XG5cbiAgICAgICAgPHNvcnRhYmxlLXRhYmxlXG4gICAgICAgICAgZGF0YS11cmw9XCIvYXBpL3Jlc3QvcHJvZHVjdHM/X2VtYmVkPXN1YmNhdGVnb3J5LmNhdGVnb3J5XCIsXG4gICAgICAgICAgZGF0YS1pcy1keW5hbWljPVwiMVwiXG4gICAgICAgICAgZGF0YS1maWVsZHMtbGlzdD1cIlsnaW1hZ2VzJywgJ3RpdGxlJywgJ3N1YmNhdGVnb3J5JywgJ3F1YW50aXR5JywgJ3ByaWNlJywgJ3N0YXR1cyddXCJcbiAgICAgICAgICBkYXRhLW9yZGVyLWZpZWxkPSd0aXRsZScsXG4gICAgICAgICAgZGF0YS1vcmRlci1kaXJlY3Rpb249XCIxXCJcbiAgICAgICAgICA+PC9zb3J0YWJsZS10YWJsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5gKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==