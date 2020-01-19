/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bundle.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
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
  const { default: Page } = await __webpack_require__("./src/pages lazy recursive ^\\.\\/.*\\/index\\.js$")(`./${path}/index.js`);
  const page = new Page(match);
  const renderedPage = await page.render();

  const contentElem = document.getElementById('content');
  contentElem.innerHTML = '';
  contentElem.append(renderedPage);
}


/***/ }),

/***/ "./src/pages lazy recursive ^\\.\\/.*\\/index\\.js$":
/*!*************************************************************!*\
  !*** ./src/pages lazy ^\.\/.*\/index\.js$ namespace object ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./categories/index.js": [
		"./src/pages/categories/index.js",
		1
	],
	"./dashboard/index.js": [
		"./src/pages/dashboard/index.js",
		2
	],
	"./error404/index.js": [
		"./src/pages/error404/index.js",
		3
	],
	"./products/edit/index.js": [
		"./src/pages/products/edit/index.js",
		0
	],
	"./products/index.js": [
		"./src/pages/products/index.js",
		4
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/pages lazy recursive ^\\.\\/.*\\/index\\.js$";
module.exports = webpackAsyncContext;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3NzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbHVtbkNoYXJ0L3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RyYWdnYWJsZUxpc3Qvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05vdGlmaWNhdGlvbi9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QYWdlTWVzc2FnZS9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SYW5nZVBpY2tlci9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Tb3J0YWJsZVRhYmxlL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Rvb2x0aXBzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2Nzcy9zdHlsZXMuc2Nzcz9mM2M4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbHVtbkNoYXJ0L2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29sdW1uQ2hhcnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29sdW1uQ2hhcnQvc3R5bGVzLnNjc3M/YTIzMCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db2x1bW5DaGFydC90ZW1wbGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRHJhZ2dhYmxlTGlzdC9ncmFiLWljb24uc3ZnIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RyYWdnYWJsZUxpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRHJhZ2dhYmxlTGlzdC9zdHlsZXMuc2Nzcz85N2M3Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvc3R5bGVzLnNjc3M/ZTJjMyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ob3RpZmljYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uL3N0eWxlcy5zY3NzP2RmOTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGFnZU1lc3NhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGFnZU1lc3NhZ2Uvc3R5bGVzLnNjc3M/MTEzNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SYW5nZVBpY2tlci9hcnJvdy1pY29uLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SYW5nZVBpY2tlci9jYWxlbmRhci1pY29uLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SYW5nZVBpY2tlci9jbGFzc2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JhbmdlUGlja2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JhbmdlUGlja2VyL3N0eWxlcy5zY3NzPzcxNWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmFuZ2VQaWNrZXIvdGVtcGxhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NvcnRhYmxlVGFibGUvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Tb3J0YWJsZVRhYmxlL2RpcmVjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU29ydGFibGVUYWJsZS9maWVsZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU29ydGFibGVUYWJsZS9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NvcnRhYmxlVGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU29ydGFibGVUYWJsZS9zdGF0dXNUZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NvcnRhYmxlVGFibGUvc3R5bGVzLnNjc3M/ZThjNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ub29sdGlwcy9jbGFzc2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Rvb2x0aXBzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Rvb2x0aXBzL3N0eWxlcy5zY3NzPzdjYzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9lc2NhcGVIVE1MLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2ZldGNoSnNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9maWxsVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvZm9ybWF0RGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9mb3JtYXRUb3RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9nZXREYXRlRnJvbVN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9nZXRXZWVrRGF5cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy90aHJvdHRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL1JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL25vdGlmaWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvcmVuZGVyUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMgbGF6eSBeXFwuXFwvLipcXC9pbmRleFxcLmpzJCBuYW1lc3BhY2Ugb2JqZWN0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7Ozs7UUFJQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBOztRQUVBO1FBQ0EsaUNBQWlDOztRQUVqQztRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLDhEQUFVO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0RkE7QUFBQTtBQUFBO0FBQStEOztBQUUvRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRWU7QUFDZiwyQkFBMkIseUVBQVk7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQUE7QUFBZTtBQUNmLFNBQVMsZ0JBQWdCLFNBQVMsMEVBQU8sR0FBVSxFQUFFLEtBQUssVUFBVSxDQUFDO0FBQ3JFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0fTtcblxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cblxuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5idW5kbGUuanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuIFx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG4gXHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0XHR2YXIgb25TY3JpcHRDb21wbGV0ZTtcblxuIFx0XHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG4gXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzY3JpcHQuc3JjID0ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCk7XG5cbiBcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcbiBcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuIFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuIFx0XHRcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuIFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcbiBcdFx0XHRcdFx0XHRcdGNodW5rWzFdKGVycm9yKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gXHRcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUoeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pO1xuIFx0XHRcdFx0fSwgMTIwMDAwKTtcbiBcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1ibHVlOiAjMTA5Q0YxO1xcbiAgLS1kYXJrLWJsdWU6ICMzMzRENkU7XFxuICAtLWxpZ2h0LWJsdWU6ICNDRkVCRkM7XFxuICAtLW1pZGRsZS1ibHVlOiAjOUZEN0Y5O1xcbiAgLS15ZWxsb3c6ICNGRkI5NDY7XFxuICAtLXJlZDogI0Y3Njg1QjtcXG4gIC0tZ3JlZW46ICMyRUQ0N0E7XFxuICAtLXB1cnBsZTogIzg4NUFGODtcXG4gIC0tYmxhY2s6ICMxOTJBM0U7XFxuICAtLXRhYmxlLWJsYWNrOiAjMzIzQzQ3O1xcbiAgLS10YWJsZS1ncmV5OiAjNzA3NjgzO1xcbiAgLS1ncmV5OiAjOTBBMEI3O1xcbiAgLS1ncmV5LWxpZ2h0OiAjQzJDRkUwO1xcbiAgLS1ncmV5LWV4dHJhLWxpZ2h0OiAjRUZGMUY0O1xcbiAgLS1ncmV5LXNrZWxldG9uOiAjRjVGNkY4O1xcbiAgLS13aGl0ZTogI0ZGRjtcXG4gIC0tcmFkaXVzOiA0cHg7IH1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG5IVE1MIHtcXG4gIGZvbnQtc2l6ZTogMTZweDsgfVxcblxcbkJPRFkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZDogI0ZGRjtcXG4gIGZvbnQ6IDFyZW0vMS40IFRyZWJ1Y2hldCBNUywgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMDAwOyB9XFxuXFxuSDEsXFxuSDIsXFxuSDMsXFxuSDQge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IC41ZW07XFxuICBmb250LXdlaWdodDogbm9ybWFsOyB9XFxuXFxuSDEge1xcbiAgZm9udC1zaXplOiAyLjc1cmVtOyB9XFxuXFxuQSxcXG5BOnZpc2l0ZWQsXFxuQTpob3ZlciB7XFxuICBjb2xvcjogaW5oZXJpdDsgfVxcblxcbkE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuXFxuQlVUVE9OLFxcbklOUFVULFxcblRFWFRBUkVBLFxcblNFTEVDVCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IC41cmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XFxuICBmb250OiBpbmhlcml0OyB9XFxuXFxuSU5QVVQsXFxuVEVYVEFSRUEsXFxuU0VMRUNUIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleS1saWdodCk7IH1cXG5cXG4ucGFnZS1sYXlvdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnNwaW5uZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMnJlbTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgYm94LXNoYWRvdzogMCAwIC41cmVtIGN1cnJlbnRDb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGNvbG9yOiB2YXIoLS1ncmV5LWxpZ2h0KTsgfVxcblxcbltkYXRhLWxvYWRpbmc9XFxcIjFcXFwiXSAuc3Bpbm5lciB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi5zcGlubmVyOjpiZWZvcmUsXFxuLnNwaW5uZXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiBjdXJyZW50Q29sb3IgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBhbmltYXRpb246IHJvdGF0ZSAyLjFzIGxpbmVhciBpbmZpbml0ZTsgfVxcblxcbi5zcGlubmVyOjpiZWZvcmUge1xcbiAgd2lkdGg6IDIuMjVyZW07XFxuICBoZWlnaHQ6IDIuMjVyZW07IH1cXG5cXG4uc3Bpbm5lcjo6YWZ0ZXIge1xcbiAgd2lkdGg6IDEuMjVyZW07XFxuICBoZWlnaHQ6IDEuMjVyZW07XFxuICBhbmltYXRpb24tZHVyYXRpb246IDEuM3M7XFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlOyB9XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbHVtbi1jaGFydCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLXdpZHRoOiAxODBweDtcXG4gIGZsZXgtYmFzaXM6IGNhbGMoKDEwMCUgLSAycmVtKSAvIDMpO1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xcbiAgbWF4LWhlaWdodDogMzAwcHg7XFxuICBtYXJnaW46IDAgMCAuNXJlbSAwO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LWxpZ2h0KTtcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdmFyKC0tZ3JleS1saWdodCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG5cXG4uY29sdW1uLWNoYXJ0ICsgLmNvbHVtbi1jaGFydCB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTsgfVxcblxcbi5jb2x1bW4tY2hhcnRfX2NvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1heC13aWR0aDogMTAwJTsgfVxcblxcbi5jb2x1bW4tY2hhcnRfX3RpdGxlIHtcXG4gIG1hcmdpbjogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgY29sb3I6IHZhcigtLWdyZXkpOyB9XFxuXFxuLmNvbHVtbi1jaGFydF9fdG90YWwge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS42ZW07XFxuICBsaW5lLWhlaWdodDogMTsgfVxcblxcbi5jb2x1bW4tY2hhcnRfX2xpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLXRvcDogLjVyZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbi5jb2x1bW4tY2hhcnRfX2l0ZW0ge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgbWFyZ2luLWxlZnQ6IDFweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyZXktbGlnaHQpO1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLmNvbHVtbi1jaGFydF9faXRlbTpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogMDsgfVxcblxcbi5jb2x1bW4tY2hhcnRfX3Rvb2x0aXAtZGF0ZSB7XFxuICBmb250LXNpemU6IC45ZW07IH1cXG5cXG4uY29sdW1uLWNoYXJ0X190b29sdGlwLXF1YW50aXR5IHtcXG4gIG1hcmdpbi10b3A6IC4yNWVtO1xcbiAgZm9udC1zaXplOiAxLjFlbTsgfVxcblxcbi5jb2x1bW4tY2hhcnQtLWN1c3RvbWVycyB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogZ29sZDsgfVxcblxcbi5jb2x1bW4tY2hhcnQtLWN1c3RvbWVycyAuY29sdW1uLWNoYXJ0X19pdGVtIHtcXG4gIGJhY2tncm91bmQ6IGdvbGQ7IH1cXG5cXG4uY29sdW1uLWNoYXJ0LS1vcmRlcnMge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHR1cnF1b2lzZTsgfVxcblxcbi5jb2x1bW4tY2hhcnQtLW9yZGVycyAuY29sdW1uLWNoYXJ0X19pdGVtIHtcXG4gIGJhY2tncm91bmQ6IHR1cnF1b2lzZTsgfVxcblxcbi5jb2x1bW4tY2hhcnQtLXNhbGVzIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB5ZWxsb3dncmVlbjsgfVxcblxcbi5jb2x1bW4tY2hhcnQtLXNhbGVzIC5jb2x1bW4tY2hhcnRfX2l0ZW0ge1xcbiAgYmFja2dyb3VuZDogeWVsbG93Z3JlZW47IH1cXG5cXG4uY29sdW1uLWNoYXJ0X19lcnJvciB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bzsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4vZ3JhYi1pY29uLnN2Z1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmRyYWdnYWJsZS1saXN0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5kcmFnZ2FibGUtbGlzdF9faXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogZ3JhYjsgfVxcbiAgLmRyYWdnYWJsZS1saXN0X19pdGVtOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMThweDtcXG4gICAgd2lkdGg6IDExcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSA1MCUgNTAlIG5vLXJlcGVhdDtcXG4gICAgb3BhY2l0eTogLjU7IH1cXG5cXG4uZHJhZ2dhYmxlLWxpc3QgLmRyYWdnYWJsZS1saXN0X19pdGVtLS1wbGFjZWhvbGRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5LWxpZ2h0KTsgfVxcbiAgLmRyYWdnYWJsZS1saXN0IC5kcmFnZ2FibGUtbGlzdF9faXRlbS0tcGxhY2Vob2xkZXI6OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7IH1cXG5cXG4uZHJhZ2dhYmxlLWxpc3RfX2l0ZW0tLWRyYWdnZWQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgYm94LXNoYWRvdzogMCAwIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjM1KTtcXG4gIGN1cnNvcjogZ3JhYmJpbmc7IH1cXG4gIC5kcmFnZ2FibGUtbGlzdF9faXRlbS0tZHJhZ2dlZDo6YmVmb3JlIHtcXG4gICAgb3BhY2l0eTogMTsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnBhZ2Uge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4ucGFnZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7IH1cXG5cXG4ucGFnZS1tYWluLFxcbi5wYWdlLWFzaWRlLFxcbi5wYWdlLWZvb3RlciB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbi5wYWdlLW1haW4ge1xcbiAgZmxleC1ncm93OiAxOyB9XFxuXFxuLnBhZ2UtYXNpZGUge1xcbiAgbWluLXdpZHRoOiAyNTBweDtcXG4gIGJhY2tncm91bmQ6ICNFRUU7IH1cXG5cXG4ucGFnZS1mb290ZXIge1xcbiAgZmxleC1iYXNpczogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG4gIC5wYWdlLWZvb3RlciBBICsgQSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtOyB9XFxuXFxuLnBhZ2UtY29udGVudF9faGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG5cXG4ucGFnZS1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7IH1cXG4gIC5wYWdlLXNlY3Rpb24gKyAucGFnZS1zZWN0aW9uIHtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTsgfVxcblxcbi5wYWdlLXNlY3Rpb25fX3RpdGxlIHtcXG4gIGZsZXgtYmFzaXM6IDEwMCU7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ub3RpZmljYXRpb25zIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIHJpZ2h0OiAxcmVtO1xcbiAgYm90dG9tOiAxcmVtO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgbWF4LWhlaWdodDogNTB2aDsgfVxcblxcbi8qIE5vdGlmaWNhdGlvbiAqL1xcbi5ub3RpZmljYXRpb24ge1xcbiAgbWFyZ2luLXRvcDogLjVyZW07XFxuICBwYWRkaW5nOiAuNzVyZW0gMXJlbTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFyZW0pO1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gLjVzIGZvcndhcmRzOyB9XFxuICAubm90aWZpY2F0aW9uLS13YXJuaW5nIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0teWVsbG93KTsgfVxcbiAgLm5vdGlmaWNhdGlvbi0tZXJyb3Ige1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQpOyB9XFxuXFxuLm5vdGlmaWNhdGlvbltkYXRhLXN0YXRlPVxcXCJoaWRkZW5cXFwiXSB7XFxuICBhbmltYXRpb246IGZhZGVPdXQgLjVzOyB9XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gfVxcblxcbkBrZXlmcmFtZXMgZmFkZU91dCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xcmVtOyB9IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wYWdlLW1lc3NhZ2Uge1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z29sZGVucm9keWVsbG93O1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTsgfVxcblxcbi5wYWdlLW1lc3NhZ2UtLWVycm9yIHtcXG4gIGJhY2tncm91bmQ6IG1pc3R5cm9zZTsgfVxcblxcbi5wYWdlLW1lc3NhZ2VfX2Vycm9yIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZDogI0ZGRjtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7IH1cXG5cXG4ucGFnZS1tZXNzYWdlX19lcnJvci10ZXh0IHtcXG4gIGZvbnQtZmFtaWx5OiBDb3VyaWVyIE5ldywgQ291cmllciwgbW9ub3NwYWNlOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi9jYWxlbmRhci1pY29uLnN2Z1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IHJlcXVpcmUoXCIuL2Fycm93LWljb24uc3ZnXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogUmFuZ2VwaWNrZXIgKi9cXG4ucmFuZ2VwaWNrZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTE7IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX2lucHV0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgcGFkZGluZzogMTJweCAxNnB4IDEycHggNDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXktbGlnaHQpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKSB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIDE2cHggY2VudGVyIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMThweCAxOHB4OyB9XFxuXFxuLnJhbmdlcGlja2VyX29wZW4gLnJhbmdlcGlja2VyX19pbnB1dCxcXG4ucmFuZ2VwaWNrZXJfX2lucHV0OmZvY3VzLFxcbi5yYW5nZXBpY2tlcl9faW5wdXQ6YWN0aXZlIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX2lucHV0ID4gU1BBTiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIG1hcmdpbjogMCA0cHg7IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX2lucHV0ID4gU1BBTjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1yaWdodDogMDsgfVxcblxcbi5yYW5nZXBpY2tlcl9fc2VsZWN0b3Ige1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIHBhZGRpbmc6IDMycHggMjZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDI5cHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4OiAxIDAgYXV0bztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogY2FsYygxMDAlICsgMTZweCk7XFxuICByaWdodDogMDtcXG4gIHotaW5kZXg6IDE7IH1cXG5cXG4ucmFuZ2VwaWNrZXItLW9wZW4gLnJhbmdlcGlja2VyX19zZWxlY3RvciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgfVxcblxcbi5yYW5nZXBpY2tlcl9fc2VsZWN0b3ItYXJyb3cge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDEwMCU7XFxuICByaWdodDogNjBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX3NlbGVjdG9yLWFycm93OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDQ1ZGVnKTtcXG4gIHRvcDogMTAwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA5KTsgfVxcblxcbi5yYW5nZXBpY2tlcl9fY2FsZW5kYXJzIHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX2NhbGVuZGFyIHtcXG4gIHdpZHRoOiAyNTJweDsgfVxcblxcbi5yYW5nZXBpY2tlcl9fY2FsZW5kYXI6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogMjZweDsgfVxcblxcbi5yYW5nZXBpY2tlcl9fbW9udGgtaW5kaWNhdG9yIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUtdGV4dCk7IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX3NlbGVjdG9yLWNvbnRyb2wge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzMnB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogLjNzIGFsbDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgbGVmdCBjZW50ZXIgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiA5cHggMTNweDtcXG4gIGJvcmRlcjogMDsgfVxcblxcbi5yYW5nZXBpY2tlcl9fc2VsZWN0b3ItY29udHJvbDpob3ZlciB7XFxuICBvcGFjaXR5OiAuODsgfVxcblxcbi5yYW5nZXBpY2tlcl9fc2VsZWN0b3ItY29udHJvbC0tbGVmdCB7XFxuICBsZWZ0OiAyNnB4OyB9XFxuXFxuLnJhbmdlcGlja2VyX19zZWxlY3Rvci1jb250cm9sLS1yaWdodCB7XFxuICByaWdodDogMjZweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX2RheS1vZi13ZWVrLFxcbi5yYW5nZXBpY2tlcl9fZGF0ZS1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpOyB9XFxuXFxuLnJhbmdlcGlja2VyX19kYXktb2Ytd2VlayB7XFxuICBtYXJnaW4tdG9wOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLyogRGF0ZXMgKi9cXG4ucmFuZ2VwaWNrZXJfX2RhdGUtZ3JpZCB7XFxuICBtYXJnaW4tdG9wOiAxNnB4OyB9XFxuXFxuLnJhbmdlcGlja2VyX19jZWxsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogMDtcXG4gIHdpZHRoOiAzNnB4O1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlLXRleHQpO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5yYW5nZXBpY2tlcl9fY2VsbDphY3RpdmUsXFxuLnJhbmdlcGlja2VyX19jZWxsLnJhbmdlcGlja2VyX19zZWxlY3RlZCxcXG4ucmFuZ2VwaWNrZXJfX2NlbGwucmFuZ2VwaWNrZXJfX3NlbGVjdGVkLWZyb20sXFxuLnJhbmdlcGlja2VyX19jZWxsLnJhbmdlcGlja2VyX19zZWxlY3RlZC10byB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX2NlbGw6aG92ZXIsXFxuLnJhbmdlcGlja2VyX19jZWxsOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUtdGV4dCk7XFxuICB0cmFuc2l0aW9uOiAuMnMgYWxsOyB9XFxuXFxuLnJhbmdlcGlja2VyX19jZWxsLnJhbmdlcGlja2VyX19zZWxlY3RlZDpob3ZlcixcXG4ucmFuZ2VwaWNrZXJfX2NlbGwucmFuZ2VwaWNrZXJfX3NlbGVjdGVkLWZyb206aG92ZXIsXFxuLnJhbmdlcGlja2VyX19jZWxsLnJhbmdlcGlja2VyX19zZWxlY3RlZC10bzpob3ZlcixcXG4ucmFuZ2VwaWNrZXJfX2NlbGwucmFuZ2VwaWNrZXJfX3NlbGVjdGVkOmZvY3VzLFxcbi5yYW5nZXBpY2tlcl9fY2VsbC5yYW5nZXBpY2tlcl9fc2VsZWN0ZWQtZnJvbTpmb2N1cyxcXG4ucmFuZ2VwaWNrZXJfX2NlbGwucmFuZ2VwaWNrZXJfX3NlbGVjdGVkLXRvOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pZGRsZS1ibHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUtdGV4dCk7IH1cXG5cXG4ucmFuZ2VwaWNrZXJfX2NlbGwucmFuZ2VwaWNrZXJfX3NlbGVjdGVkLWJldHdlZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zb3J0YWJsZS10YWJsZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTsgfVxcblxcbi5zb3J0YWJsZS10YWJsZV9fdGFibGUge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uc29ydGFibGUtdGFibGVfX3JvdyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZDogYXV0by1mbG93IC8gMTIlIDM4JSAyMCUgMTAlIDEwJSAxMCU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG5cXG4uc29ydGFibGUtdGFibGVfX2NlbGwge1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgY29sb3I6IHZhcigtLXRhYmxlLWJsYWNrKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWdyZXktbGlnaHQpOyB9XFxuXFxuLnNvcnRhYmxlLXRhYmxlX19jZWxsOmZpcnN0LWNoaWxkIHtcXG4gIHBhZGRpbmctbGVmdDogMzJweDsgfVxcblxcbi5zb3J0YWJsZS10YWJsZV9fY2VsbDpsYXN0LWNoaWxkIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDMycHg7IH1cXG5cXG4uc29ydGFibGUtdGFibGVfX2NlbGwtLWVycm9yIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiA3OyB9XFxuXFxuLnNvcnRhYmxlLXRhYmxlX190aGVhZCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB6LWluZGV4OiAzO1xcbiAgdG9wOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpOyB9XFxuXFxuLnNvcnRhYmxlLXRhYmxlX19oZWFkZXIgLnNvcnRhYmxlLXRhYmxlX19jZWxsIHtcXG4gIG1pbi13aWR0aDogMTIwcHg7XFxuICBjb2xvcjogdmFyKC0tZ3JleS1saWdodCk7IH1cXG5cXG4uc29ydGFibGUtdGFibGVfX2hlYWRlciAuc29ydGFibGUtdGFibGVfX2NlbGxbZGF0YS1zb3J0YWJsZV0ge1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLnNvcnRhYmxlLXRhYmxlX19jZWxsLS1xdWFudGl0eSxcXG4uc29ydGFibGUtdGFibGVfX2NlbGwtLXByaWNlIHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IH1cXG5cXG4uc29ydGFibGUtdGFibGVfX2NlbGwtLWRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IC41OyB9XFxuXFxuLnNvcnRhYmxlLXRhYmxlX19jZWxsW2RhdGEtc29ydC1kaXJlY3Rpb25dOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICBtYXJnaW4tdG9wOiAuMjVlbTtcXG4gIG1hcmdpbi1sZWZ0OiAuMjVlbTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiBjdXJyZW50Q29sb3IgdHJhbnNwYXJlbnQ7IH1cXG5cXG4uc29ydGFibGUtdGFibGVfX2NlbGxbZGF0YS1zb3J0LWRpcmVjdGlvbj1cXFwiYXNjXFxcIl06OmFmdGVyIHtcXG4gIGJvcmRlci10b3A6IG5vbmU7IH1cXG5cXG4uc29ydGFibGUtdGFibGVfX2NlbGxbZGF0YS1zb3J0LWRpcmVjdGlvbj1cXFwiZGVzY1xcXCJdOjphZnRlciB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyB9XFxuXFxuLnNvcnRhYmxlLXRhYmxlX19jZWxsLS1zb3J0ZXI6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHZhcigtLWdyZXkpOyB9XFxuXFxuLnNvcnRhYmxlLXRhYmxlX19pbWFnZS13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5zb3J0YWJsZS10YWJsZV9faW1hZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1pbi13aWR0aDogNDBweDtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICBwYWRkaW5nOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LWxpZ2h0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDsgfVxcblxcbi5zb3J0YWJsZS10YWJsZV9fcHJldmlldyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAyO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBhZGRpbmc6IC4yNWVtO1xcbiAgYmFja2dyb3VuZC1vcmlnaW46IGNvbnRlbnQtYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LWxpZ2h0KTtcXG4gIHRyYW5zaXRpb246IGFsbCAuMjVzOyB9XFxuXFxuLnNvcnRhYmxlLXRhYmxlX19wcmV2aWV3OmhvdmVyIHtcXG4gIHdpZHRoOiAzMDAlO1xcbiAgaGVpZ2h0OiAzMDAlO1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbi5zb3J0YWJsZS10YWJsZV9fbGluayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7IH1cXG5cXG4uc29ydGFibGUtdGFibGVfX2NhdGVnb3J5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5zb3J0YWJsZS10YWJsZV9fdG9vbHRpcC1jYXRlZ29yeSB7XFxuICBjb2xvcjogdmFyKC0tZ3JleSk7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50b29sdGlwcy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLnRvb2x0aXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMztcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBtYXJnaW46IDFyZW0gMCAwIDFyZW07XFxuICBwYWRkaW5nOiAuNXJlbSAuNzVyZW07XFxuICBiYWNrZ3JvdW5kOiAjRUVFO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBjb2xvcjogIzU1NTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cXG5cXG4udG9vbHRpcFtkYXRhLXZpc2libGU9XFxcIjFcXFwiXSB7XFxuICBvcGFjaXR5OiAxOyB9XFxuXFxuW2RhdGEtdG9vbHRpcC1jb250ZW50XSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7IH1cXG5cXG4udG9vbHRpcHMtY29udGFpbmVyLS1kaW1tZWQgW2RhdGEtdG9vbHRpcC1jb250ZW50XTpub3QoOmhvdmVyKSB7XFxuICBvcGFjaXR5OiAuNDsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKG1vZHVsZUlkLCBsaXN0LCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgY3NzOiBsaXN0W2ldWzFdLFxuICAgICAgbWVkaWE6IGxpc3RbaV1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGxpc3RbaV1bM11cbiAgICB9O1xuXG4gICAgaWYgKHN0eWxlc0luRG9tW21vZHVsZUlkXVtpXSkge1xuICAgICAgc3R5bGVzSW5Eb21bbW9kdWxlSWRdW2ldKHBhcnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF0ucHVzaChhZGRTdHlsZShwYXJ0LCBvcHRpb25zKSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobW9kdWxlSWQsIGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbW9kdWxlSWQgPSBvcHRpb25zLmJhc2UgPyBtb2R1bGVJZCArIG9wdGlvbnMuYmFzZSA6IG1vZHVsZUlkO1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcblxuICBpZiAoIXN0eWxlc0luRG9tW21vZHVsZUlkXSkge1xuICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXSA9IFtdO1xuICB9XG5cbiAgbW9kdWxlc1RvRG9tKG1vZHVsZUlkLCBsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFzdHlsZXNJbkRvbVttb2R1bGVJZF0pIHtcbiAgICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXSA9IFtdO1xuICAgIH1cblxuICAgIG1vZHVsZXNUb0RvbShtb2R1bGVJZCwgbmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBqID0gbmV3TGlzdC5sZW5ndGg7IGogPCBzdHlsZXNJbkRvbVttb2R1bGVJZF0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXVtqXSgpO1xuICAgIH1cblxuICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXS5sZW5ndGggPSBuZXdMaXN0Lmxlbmd0aDtcblxuICAgIGlmIChzdHlsZXNJbkRvbVttb2R1bGVJZF0ubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgc3R5bGVzSW5Eb21bbW9kdWxlSWRdO1xuICAgIH1cbiAgfTtcbn07IiwiaW1wb3J0IExheW91dCBmcm9tICcuL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4LmpzJztcbmltcG9ydCBDb2x1bW5DaGFydCBmcm9tICcuL2NvbXBvbmVudHMvQ29sdW1uQ2hhcnQvaW5kZXguanMnO1xuaW1wb3J0IFJhbmdlUGlja2VyIGZyb20gJy4vY29tcG9uZW50cy9SYW5nZVBpY2tlci9pbmRleC5qcyc7XG5pbXBvcnQgU29ydGFibGVUYWJsZSBmcm9tICcuL2NvbXBvbmVudHMvU29ydGFibGVUYWJsZS9pbmRleC5qcyc7XG5pbXBvcnQgRHJhZ2dhYmxlTGlzdCBmcm9tICcuL2NvbXBvbmVudHMvRHJhZ2dhYmxlTGlzdC9pbmRleC5qcyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJy4vbGliL1JvdXRlci5qcyc7XG5cbmltcG9ydCAnLi9hc3NldHMvc2Nzcy9zdHlsZXMuc2Nzcyc7XG5cbi8vIFJvdXRpbmdcbmNvbnN0IHJvdXRlciA9IFJvdXRlci5pbnN0YW5jZSgpO1xuXG5yb3V0ZXJcbiAgLmFkZFJvdXRlKC9eJC8sICdkYXNoYm9hcmQnKVxuICAuYWRkUm91dGUoL15jYXRlZ29yaWVzJC8sICdjYXRlZ29yaWVzJylcbiAgLmFkZFJvdXRlKC9ecHJvZHVjdHNcXC8oW1xcUygpLV0rKS9nLCAncHJvZHVjdHMvZWRpdCcpXG4gIC5hZGRSb3V0ZSgvXnByb2R1Y3RzXFwvYWRkJC8sICdwcm9kdWN0cy9lZGl0JylcbiAgLmFkZFJvdXRlKC9ecHJvZHVjdHMkLywgJ3Byb2R1Y3RzJylcbiAgLnNldE5vdEZvdW5kUGFnZSgnZXJyb3I0MDQnKVxuICAuYWRkTGlzdGVuZXIoKTtcblxuLy8gSW5pdCBjdXN0b20gZWxlbWVudHNcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3BhZ2UtbGF5b3V0JywgTGF5b3V0KTtcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NvbHVtbi1jaGFydCcsIENvbHVtbkNoYXJ0KTtcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JhbmdlLXBpY2tlcicsIFJhbmdlUGlja2VyKTtcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3NvcnRhYmxlLXRhYmxlJywgU29ydGFibGVUYWJsZSk7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdkcmFnZ2FibGUtbGlzdCcsIERyYWdnYWJsZUxpc3QsIHsgZXh0ZW5kczogJ3VsJyB9KTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkobW9kdWxlLmlkLCBjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGVsZW06ICdjb2x1bW4tY2hhcnQnLFxuICBjb250ZW50OiAnY29sdW1uLWNoYXJ0X19jb250ZW50JyxcbiAgaGVhZGVyOiAnY29sdW1uLWNoYXJ0X19oZWFkZXInLFxuICB0aXRsZTogJ2NvbHVtbi1jaGFydF9fdGl0bGUnLFxuICB0b3RhbDogJ2NvbHVtbi1jaGFydF9fdG90YWwnLFxuICBsaXN0OiAnY29sdW1uLWNoYXJ0X19saXN0JyxcbiAgaXRlbTogJ2NvbHVtbi1jaGFydF9faXRlbScsXG4gIHRvb2x0aXA6ICdjb2x1bW4tY2hhcnRfX3Rvb2x0aXAnLFxuICB0b29sdGlwRGF0ZTogJ2NvbHVtbi1jaGFydF9fdG9vbHRpcC1kYXRlJyxcbiAgdG9vbHRpcFF1YW50aXR5OiAnY29sdW1uLWNoYXJ0X190b29sdGlwLXF1YW50aXR5JyxcbiAgZXJyb3I6ICdjb2x1bW4tY2hhcnRfX2Vycm9yJ1xufTtcbiIsImltcG9ydCBUb29sdGlwcyBmcm9tICcuLi9Ub29sdGlwcy9pbmRleC5qcyc7XG5pbXBvcnQge1xuICBmaWxsVGVtcGxhdGUsXG4gIGZvcm1hdERhdGUsXG4gIGVzY2FwZUhUTUwsXG4gIGZvcm1hdFRvdGFsLFxuICBmZXRjaEpzb25cbn0gZnJvbSAnLi4vLi4vaGVscGVycy9pbmRleC5qcyc7XG5pbXBvcnQgY2xzIGZyb20gJy4vY2xhc3Nlcy5qcyc7XG5pbXBvcnQgdGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzLmpzJztcblxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sdW1uQ2hhcnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5lbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5hcGlVcmwgPSBwcm9jZXNzLmVudi5BUElfVVJMIHx8ICdodHRwczovL2NvdXJzZS1qcy5qYXZhc2NyaXB0LnJ1JztcblxuICAgIHRoaXMuY2hhbmdlRGF0ZSA9IHRoaXMuY2hhbmdlRGF0ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYXN5bmMgY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xuICAgIGNvbnN0IHsgdHlwZSwgaXNNb25leSwgZnJvbSwgdG8gfSA9IHRoaXMuZGF0YXNldDtcblxuICAgIHRoaXMuZGF0ZXMgPSB7XG4gICAgICBmcm9tOiBuZXcgRGF0ZShmcm9tKSxcbiAgICAgIHRvOiBuZXcgRGF0ZSh0bylcbiAgICB9O1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmZvcm1hdFRvdGFsID0gaXNNb25leSA/IGZvcm1hdFRvdGFsIDogbnVsbDtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoY2xzLmVsZW0sIGAke2Nscy5lbGVtfS0tJHt0eXBlfWApO1xuICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKGNscy5jb250ZW50KTtcbiAgICB0aGlzLnRpdGxlID0gYFRvdGFsICR7dHlwZX1gO1xuICAgIHRoaXMudXJsID0gdGhpcy5nZXRVcmwoKTtcblxuICAgIGF3YWl0IHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5hcHBlbmQodGhpcy5lbGVtKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZURhdGUnLCB0aGlzLmNoYW5nZURhdGUpO1xuICB9XG5cbiAgZ2V0VXJsICgpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5hcGlVcmx9L2FwaS9kYXNoYm9hcmQvJHt0aGlzLnR5cGV9P2Zyb209JHt0aGlzLmRhdGVzLmZyb219JnRvPSR7dGhpcy5kYXRlcy50b31gO1xuICB9XG5cbiAgYXN5bmMgZ2V0RGF0YSAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaEpzb24odGhpcy51cmwpO1xuICAgICAgcmV0dXJuIHsgZGF0YSB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4geyBlcnJvciB9O1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgdGhpcy5nZXREYXRhKCk7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgdGhpcy5lbGVtLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlRW5kJywgYDxkaXYgY2xhc3M9XCIke2Nscy5lcnJvcn1cIj4ke2Vycm9yfTwvZGl2PmApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWVzID0gT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEpO1xuXG4gICAgaWYgKHRoaXMudmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy52YWx1ZXMucHVzaCgnTm8gZGF0YScpO1xuICAgIH1cblxuICAgIGNvbnN0IGhlYWRlclN0ciA9IHRoaXMuZ2V0SGVhZGVyU3RyKCk7XG5cbiAgICBjb25zdCBsaXN0U3RyID0gdGhpcy5nZXRMaXN0U3RyKCk7XG4gICAgdGhpcy5lbGVtLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICdiZWZvcmVFbmQnLFxuICAgICAgaGVhZGVyU3RyICsgbGlzdFN0clxuICAgICk7XG5cbiAgICB0aGlzLmFkZEFjdGlvbnMoKTtcbiAgfVxuXG4gIGdldEhlYWRlclN0ciAoKSB7XG4gICAgdGhpcy50b3RhbCA9IHRoaXMudmFsdWVzLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gcHJldiArIGN1cnJlbnQsIDApO1xuXG4gICAgaWYgKHRoaXMuZm9ybWF0VG90YWwpIHtcbiAgICAgIHRoaXMudG90YWwgPSB0aGlzLmZvcm1hdFRvdGFsKHRoaXMudG90YWwpO1xuICAgIH1cblxuICAgIHJldHVybiBmaWxsVGVtcGxhdGUoe1xuICAgICAgdG1wbDogdGVtcGxhdGVzLmhlYWRlcixcbiAgICAgIGRhdGE6IHRoaXNcbiAgICB9KTtcbiAgfVxuXG4gIGdldExpc3RTdHIgKCkge1xuICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KC4uLnRoaXMudmFsdWVzKTtcbiAgICBsZXQgY2hhcnRTdHIgPSAnJztcblxuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuZGF0YSkge1xuICAgICAgY29uc3QgZGF0ZSA9IGZvcm1hdERhdGUoa2V5KTtcbiAgICAgIGxldCB2YWx1ZSA9IHRoaXMuZGF0YVtrZXldO1xuICAgICAgY29uc3QgaGVpZ2h0VmFsdWUgPSAoKHZhbHVlIC8gbWF4KSAqIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgIGNvbnN0IGhlaWdodCA9IGAke2hlaWdodFZhbHVlfSVgO1xuXG4gICAgICBpZiAodGhpcy5mb3JtYXRUb3RhbCkge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuZm9ybWF0VG90YWwodmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0b290aXBDb250ZW50ID0gYDxzbWFsbCBjbGFzcz1cIiR7Y2xzLnRvb2x0aXBEYXRlfVwiPiR7ZGF0ZX08L3NtYWxsPjxkaXYgY2xhc3M9XCIke2Nscy50b29sdGlwUXVhbnRpdHl9XCI+JHt2YWx1ZX08L2Rpdj5gO1xuXG4gICAgICBjaGFydFN0ciArPSBmaWxsVGVtcGxhdGUoe1xuICAgICAgICB0bXBsOiB0ZW1wbGF0ZXMuY2hhcnRJdGVtLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgLi4udGhpcyxcbiAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgdG9vdGlwQ29udGVudDogZXNjYXBlSFRNTCh0b290aXBDb250ZW50KVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYDx1bCBjbGFzcz1cIiR7Y2xzLmxpc3R9XCI+JHtjaGFydFN0cn08L3VsPmA7XG4gIH1cblxuICBhZGRBY3Rpb25zICgpIHtcbiAgICB0aGlzLnRvb2x0aXBzID0gbmV3IFRvb2x0aXBzKHtcbiAgICAgIGVsZW06IHRoaXMuZWxlbSxcbiAgICAgIGRpbVNpYmxpbmdzOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBjaGFuZ2VEYXRlIChldmVudCkge1xuICAgIGlmICghZXZlbnQuZGV0YWlsIHx8ICFldmVudC5kZXRhaWwuZGF0ZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGZyb20sIHRvIH0gPSBldmVudC5kZXRhaWwuZGF0ZXM7XG4gICAgdGhpcy5kYXRlcyA9IHtcbiAgICAgIGZyb206IGZyb20sXG4gICAgICB0bzogdG9cbiAgICB9O1xuXG4gICAgdGhpcy51cmwgPSB0aGlzLmdldFVybCgpO1xuICAgIHRoaXMuZWxlbS5pbm5lckhUTUwgPSAnJztcbiAgICBhd2FpdCB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuYXBwZW5kKHRoaXMuZWxlbSk7XG4gIH1cbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkobW9kdWxlLmlkLCBjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgY2xzIGZyb20gJy4vY2xhc3Nlcy5qcyc7XG5cbmV4cG9ydCBjb25zdCBoZWFkZXIgPSBgPGhlYWRlciBjbGFzcz1cIiR7Y2xzLmhlYWRlcn1cIj5cbiAgPGgzIGNsYXNzPVwiJHtjbHMudGl0bGV9XCI+e3RpdGxlfTwvaDM+XG4gIDxkaXYgY2xhc3M9XCIke2Nscy50b3RhbH1cIj57dG90YWx9PC9kaXY+XG48L2hlYWRlcj5gO1xuXG5leHBvcnQgY29uc3QgY2hhcnRJdGVtID0gYDxsaVxuICBjbGFzcz1cIiR7Y2xzLml0ZW19XCJcbiAgZGF0YS10b29sdGlwLWNvbnRlbnQ9XCJ7dG9vdGlwQ29udGVudH1cIlxuICBzdHlsZT1cImhlaWdodDoge2hlaWdodH1cIj48L2xpPmA7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaGVhZGVyLFxuICBjaGFydEl0ZW1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiODNjNzU0MjBkMDM2MGVkMjI1MTFjMDkyZTU3ZDFkNTQuc3ZnXCI7IiwiaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcbmltcG9ydCAnLi9ncmFiLWljb24uc3ZnJztcblxuY29uc3QgY2xzID0ge1xuICBlbGVtOiAnZHJhZ2dhYmxlLWxpc3QnLFxuICBpdGVtczogJ2RyYWdnYWJsZS1saXN0X19pdGVtcycsXG4gIGl0ZW06ICdkcmFnZ2FibGUtbGlzdF9faXRlbScsXG4gIGRyYWdnZWQ6ICdkcmFnZ2FibGUtbGlzdF9faXRlbS0tZHJhZ2dlZCcsXG4gIHBsYWNlaG9sZGVyOiAnZHJhZ2dhYmxlLWxpc3RfX2l0ZW0tLXBsYWNlaG9sZGVyJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlTGlzdCBleHRlbmRzIEhUTUxVTGlzdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc3RhcnREcmFnID0gdGhpcy5zdGFydERyYWcuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0b3BEcmFnID0gdGhpcy5zdG9wRHJhZy5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW92ZSA9IHRoaXMubW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0UGxhY2Vob2xkZXJIZWlnaHQgPSB0aGlzLnNldFBsYWNlaG9sZGVySGVpZ2h0LmJpbmQodGhpcyk7XG4gIH1cblxuICBhc3luYyBjb25uZWN0ZWRDYWxsYmFjayAoKSB7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKGNscy5lbGVtKTtcbiAgICB0aGlzLml0ZW1zID0gdGhpcy5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuICAgIHRoaXMucGxhY2Vob2xkZXIgPSB0aGlzLmNyZWF0ZVBsYWNlaG9sZGVyKCk7XG5cbiAgICB0aGlzLmFkZENsYXNzVG9JdGVtcygpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB0aGlzLnN0YXJ0RHJhZyk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIHRoaXMuc2V0UGxhY2Vob2xkZXJIZWlnaHQsIHsgb25jZTogdHJ1ZSB9KTtcbiAgfVxuXG4gIHN0YXJ0RHJhZyAoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFbGVtID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5kcmFnZ2FibGUtbGlzdF9faXRlbScpO1xuICAgIGlmICghdGhpcy5jdXJyZW50RWxlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudEVsZW0ucmVwbGFjZVdpdGgodGhpcy5wbGFjZWhvbGRlcik7XG4gICAgdGhpcy5jdXJyZW50RWxlbS5jbGFzc0xpc3QuYWRkKGNscy5kcmFnZ2VkKTtcbiAgICB0aGlzLmFwcGVuZCh0aGlzLmN1cnJlbnRFbGVtKTtcblxuICAgIGNvbnN0IHsgdG9wIH0gPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMuZWxlbUhhbGYgPSB0aGlzLmN1cnJlbnRFbGVtLm9mZnNldEhlaWdodCAvIDI7XG5cbiAgICBjb25zdCBlbGVtVG9wID0gZXZlbnQuY2xpZW50WSAtIHRoaXMudG9wIC0gdGhpcy5lbGVtSGFsZjtcbiAgICB0aGlzLmN1cnJlbnRFbGVtLnN0eWxlLnRvcCA9IGAke2VsZW1Ub3B9cHhgO1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIHRoaXMubW92ZSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCB0aGlzLnN0b3BEcmFnKTtcbiAgfVxuXG4gIG1vdmUgKGV2ZW50KSB7XG4gICAgY29uc3QgZWxlbVRvcCA9IGV2ZW50LmNsaWVudFkgLSB0aGlzLnRvcCAtIHRoaXMuZWxlbUhhbGY7XG4gICAgdGhpcy5jdXJyZW50RWxlbS5zdHlsZS50b3AgPSBgJHtlbGVtVG9wfXB4YDtcblxuICAgIC8vIENoZWNrIGludGVyc2VjdGlvblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoY2xzLmRyYWdnZWQpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0b3AgPSBpdGVtLm9mZnNldFRvcDtcbiAgICAgIGNvbnN0IGJvdHRvbSA9IHRvcCArIGl0ZW0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgY29uc3QgbWlkZGxlID0gdG9wICsgaXRlbS5vZmZzZXRIZWlnaHQgLyAyO1xuICAgICAgY29uc3QgY2hlY2tMaW5lID0gZWxlbVRvcCArIHRoaXMuZWxlbUhhbGY7XG5cbiAgICAgIGlmIChjaGVja0xpbmUgPiB0b3AgJiYgY2hlY2tMaW5lIDwgYm90dG9tKSB7XG4gICAgICAgIGlmIChjaGVja0xpbmUgPD0gbWlkZGxlKSB7XG4gICAgICAgICAgaXRlbS5hZnRlcih0aGlzLnBsYWNlaG9sZGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLmJlZm9yZSh0aGlzLnBsYWNlaG9sZGVyKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdG9wRHJhZyAoKSB7XG4gICAgdGhpcy5wbGFjZWhvbGRlci5yZXBsYWNlV2l0aCh0aGlzLmN1cnJlbnRFbGVtKTtcbiAgICB0aGlzLmN1cnJlbnRFbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xzLmRyYWdnZWQpO1xuICAgIHRoaXMuY3VycmVudEVsZW0uc3R5bGUudG9wID0gJyc7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIHRoaXMubW92ZSk7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCB0aGlzLnN0b3BEcmFnKTtcbiAgfVxuXG4gIGNyZWF0ZVBsYWNlaG9sZGVyICgpIHtcbiAgICBjb25zdCBmaXJzdEl0ZW0gPSB0aGlzLml0ZW1zWzBdO1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gZmlyc3RJdGVtLmNsb25lTm9kZSh0cnVlKTtcbiAgICBwbGFjZWhvbGRlci5jbGFzc0xpc3QuYWRkKGNscy5wbGFjZWhvbGRlciwgY2xzLml0ZW0pO1xuICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgcmV0dXJuIHBsYWNlaG9sZGVyO1xuICB9XG5cbiAgc2V0UGxhY2Vob2xkZXJIZWlnaHQgKCkge1xuICAgIGNvbnN0IGZpcnN0SXRlbSA9IHRoaXMuaXRlbXNbMF07XG4gICAgdGhpcy5wbGFjZWhvbGRlci5zdHlsZS5taW5IZWlnaHQgPSBgJHtmaXJzdEl0ZW0ub2Zmc2V0SGVpZ2h0fXB4YDtcbiAgfVxuXG4gIGFkZENsYXNzVG9JdGVtcyAoKSB7XG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKGNscy5pdGVtKSk7XG4gIH1cbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkobW9kdWxlLmlkLCBjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vaGVscGVycy9pbmRleC5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcbiAgICB0aGlzLmFwcGVuZCh0aGlzLnJlbmRlcigpKTtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ3BhZ2UnKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoYDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRhaW5lclwiPlxuICAgICAgPGFzaWRlIGNsYXNzPVwicGFnZS1hc2lkZVwiPlxuICAgICAgICA8bmF2PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5EYXNoYm9hcmQ8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiL3Byb2R1Y3RzXCI+UHJvZHVjdHM8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiL2NhdGVnb3JpZXNcIj5DYXRlZ29yaWVzPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvYXNpZGU+XG5cbiAgICAgIDxtYWluIGNsYXNzPVwicGFnZS1tYWluXCIgaWQ9XCJjb250ZW50XCI+XG4gICAgICAgIDwhLS0gbWFpbiBjb250ZW50IHdpbGwgYmUgaGVyZSAtLT5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5gKTtcbiAgfVxufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShtb2R1bGUuaWQsIGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbmNvbnN0IGNscyA9IHtcbiAgZWxlbTogJ25vdGlmaWNhdGlvbicsXG4gIHdhcm5pbmc6ICdub3RpZmljYXRpb24tLXdhcm5pbmcnLFxuICBlcnJvcjogJ25vdGlmaWNhdGlvbi0tZXJyb3InXG59O1xuXG5jb25zdCBzZWNvbmQgPSAxMDAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RpZmljYXRpb24ge1xuICBjb25zdHJ1Y3RvciAoeyBtZXNzYWdlLCBjb250YWluZXIsIHR5cGUgfSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmR1cmF0aW9uID0gdGhpcy5nZXREdXJhdGlvbigpO1xuICAgIHRoaXMuY2xhc3NOYW1lcyA9IHRoaXMuZ2V0Q2xhc3NlcygpO1xuICAgIHRoaXMuYWRkRWxlbSgpO1xuICAgIHRoaXMuaXNGaW5pc2hlZCA9IGZhbHNlO1xuICB9XG5cbiAgYWRkRWxlbSAoKSB7XG4gICAgdGhpcy5lbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoLi4udGhpcy5jbGFzc05hbWVzKTtcbiAgICB0aGlzLmVsZW0uZGF0YXNldC5zdGF0ZSA9ICdzaG93bic7XG4gICAgdGhpcy5lbGVtLmlubmVySFRNTCA9IHRoaXMubWVzc2FnZTtcbiAgICB0aGlzLmNvbnRhaW5lci5wcmVwZW5kKHRoaXMuZWxlbSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5oaWRlRWxlbSgpOyB9LCB0aGlzLmR1cmF0aW9uKTtcbiAgfVxuXG4gIGFzeW5jIGhpZGVFbGVtIChwYXJhbXMgPSB7fSkge1xuICAgIHRoaXMuaXNGaW5pc2hlZCA9IHRydWU7XG4gICAgdGhpcy5lbGVtLmRhdGFzZXQuc3RhdGUgPSAnaGlkZGVuJztcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmVsZW0uYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmVsZW0ucmVtb3ZlKCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RHVyYXRpb24gKCkge1xuICAgIGlmICh0aGlzLnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgIHJldHVybiA1ICogc2Vjb25kO1xuICAgIH1cblxuICAgIHJldHVybiAzICogc2Vjb25kO1xuICB9XG5cbiAgZ2V0Q2xhc3NlcyAoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IFtjbHMuZWxlbV07XG5cbiAgICBpZiAodGhpcy50eXBlICYmIGNsc1t0aGlzLnR5cGVdKSB7XG4gICAgICBjbGFzc2VzLnB1c2goY2xzW3RoaXMudHlwZV0pO1xuICAgIH1cblxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKG1vZHVsZS5pZCwgY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZU1lc3NhZ2Uge1xuICBjb25zdHJ1Y3RvciAoeyB0aXRsZSwgdGV4dCwgY2FsbGJhY2ssIGNhbGxiYWNrVGV4dCwgZXJyb3IgfSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnRleHQgPSB0ZXh0IHx8ICdTb21ldGhpbmcgd2VudCB3cm9uZyc7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMuY2FsbGJhY2tUZXh0ID0gY2FsbGJhY2tUZXh0O1xuICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcblxuICAgIGlmICghdGhpcy50aXRsZSAmJiB0aGlzLmVycm9yKSB7XG4gICAgICB0aGlzLnRpdGxlID0gJ0Vycm9yJztcbiAgICB9XG5cbiAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcbiAgfVxuXG4gIGNyZWF0ZUVsZW1lbnQgKCkge1xuICAgIHRoaXMuZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKCdwYWdlLW1lc3NhZ2UnKTtcblxuICAgIGlmICh0aGlzLmVycm9yKSB7XG4gICAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZCgncGFnZS1tZXNzYWdlLS1lcnJvcicpO1xuICAgIH1cblxuICAgIHRoaXMuY29udGVudCA9IGA8aDM+JHt0aGlzLnRpdGxlfTwvaDM+PHA+JHt0aGlzLnRleHR9PC9wPmA7XG5cbiAgICBpZiAodGhpcy5lcnJvcikge1xuICAgICAgdGhpcy5jb250ZW50ICs9IGA8ZGl2IGNsYXNzPVwicGFnZS1tZXNzYWdlX19lcnJvclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZS1tZXNzYWdlX19lcnJvci10ZXh0XCI+XG4gICAgICAgICAgPHN0cm9uZz4ke3RoaXMuZXJyb3IubmFtZX08L3N0cm9uZz46ICR7dGhpcy5lcnJvci5tZXNzYWdlfTwvZGl2PlxuICAgICAgPC9kaXY+YDtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlckJlZ2luJywgdGhpcy5jb250ZW50KTtcbiAgfVxufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShtb2R1bGUuaWQsIGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYjExMmI1NTAyNzZkNzUyZDBiM2UxMDdhZGU4ZDYxNy5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjgyZGVkYWFmYjA0NGU3YjllYTM1MmE3MGJhYWY1Njkuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xuICBlbGVtOiAncmFuZ2VwaWNrZXInLFxuICBlbGVtT3BlbjogJ3JhbmdlcGlja2VyLS1vcGVuJyxcbiAgaW5wdXQ6ICdyYW5nZXBpY2tlcl9faW5wdXQnLFxuICBmcm9tOiAncmFuZ2VwaWNrZXJfX2Zyb20nLFxuICB0bzogJ3JhbmdlcGlja2VyX190bycsXG4gIHNlbGVjdG9yOiAncmFuZ2VwaWNrZXJfX3NlbGVjdG9yJyxcbiAgc2VsZWN0b3JBcnJvdzogJ3JhbmdlcGlja2VyX19zZWxlY3Rvci1hcnJvdycsXG4gIHNlbGVjdG9yQ29udHJvbDogJ3JhbmdlcGlja2VyX19zZWxlY3Rvci1jb250cm9sJyxcbiAgY2FsZW5kYXJzOiAncmFuZ2VwaWNrZXJfX2NhbGVuZGFycycsXG4gIGNhbGVuZGFyOiAncmFuZ2VwaWNrZXJfX2NhbGVuZGFyJyxcbiAgY2VsbDogJ3JhbmdlcGlja2VyX19jZWxsJyxcbiAgc2VsZWN0ZWRGcm9tOiAncmFuZ2VwaWNrZXJfX3NlbGVjdGVkLWZyb20nLFxuICBzZWxlY3RlZEJldHdlZW46ICdyYW5nZXBpY2tlcl9fc2VsZWN0ZWQtYmV0d2VlbicsXG4gIHNlbGVjdGVkVG86ICdyYW5nZXBpY2tlcl9fc2VsZWN0ZWQtdG8nLFxuICBtb250aEluZGljYXRvcjogJ3JhbmdlcGlja2VyX19tb250aC1pbmRpY2F0b3InLFxuICBkYXlPZldlZWs6ICdyYW5nZXBpY2tlcl9fZGF5LW9mLXdlZWsnLFxuICBkYXRlR3JpZDogJ3JhbmdlcGlja2VyX19kYXRlLWdyaWQnXG59O1xuIiwiaW1wb3J0IHtcbiAgZmlsbFRlbXBsYXRlLFxuICBnZXRXZWVrRGF5c1xufSBmcm9tICcuLi8uLi9oZWxwZXJzL2luZGV4LmpzJztcbmltcG9ydCB0ZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMuanMnO1xuaW1wb3J0IGNscyBmcm9tICcuL2NsYXNzZXMuanMnO1xuXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuaW1wb3J0ICcuL2Fycm93LWljb24uc3ZnJztcbmltcG9ydCAnLi9jYWxlbmRhci1pY29uLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmdlUGlja2VyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnRvZ2dsZVBpY2tlciA9IHRoaXMudG9nZ2xlUGlja2VyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWxlY3Rvck9uQ2xpY2sgPSB0aGlzLnNlbGVjdG9yT25DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYm9keU9uQ2xpY2sgPSB0aGlzLmJvZHlPbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVSYW5nZSA9IHRoaXMudXBkYXRlUmFuZ2UuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuaXNPcGVuZWQgPSBmYWxzZTtcbiAgICB0aGlzLmVsZW0gPSB0aGlzO1xuICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKCdyYW5nZXBpY2tlcicpO1xuICB9XG5cbiAgYXN5bmMgY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xuICAgIGNvbnN0IHsgZnJvbSwgdG8gfSA9IHRoaXMuZGF0YXNldDtcblxuICAgIHRoaXMuZGF0ZXMgPSB7XG4gICAgICBmcm9tOiBuZXcgRGF0ZShmcm9tKSxcbiAgICAgIHRvOiBuZXcgRGF0ZSh0bylcbiAgICB9O1xuXG4gICAgdGhpcy5tb250aGVzID0gdGhpcy5nZXREaXNwbGF5ZWRNb250aGVzKCk7XG4gICAgdGhpcy5uZXdEYXRlcyA9IFtdO1xuXG4gICAgdGhpcy5hZGRJbnB1dCgpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZURhdGUnLCB0aGlzLnVwZGF0ZVJhbmdlKTtcbiAgfVxuXG4gIGdldERpc3BsYXllZE1vbnRoZXMgKCkge1xuICAgIGNvbnN0IGN1cnJlbnRNb250aCA9IG5ldyBEYXRlKHRoaXMuZGF0ZXMuZnJvbSk7XG4gICAgbGV0IG1vbnRoID0gY3VycmVudE1vbnRoLmdldE1vbnRoKCk7XG4gICAgY29uc3QgY3VycmVudERheSA9IDE7XG4gICAgY3VycmVudE1vbnRoLnNldERhdGUoY3VycmVudERheSk7XG5cbiAgICBjb25zdCBuZXh0TW9udGggPSBuZXcgRGF0ZShjdXJyZW50TW9udGgpO1xuICAgIG5leHRNb250aC5zZXRNb250aCgrK21vbnRoKTtcblxuICAgIHJldHVybiBbY3VycmVudE1vbnRoLCBuZXh0TW9udGhdO1xuICB9XG5cbiAgYWRkSW5wdXQgKCkge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBmcm9tOiB0aGlzLmRhdGVzLmZyb20udG9Mb2NhbGVEYXRlU3RyaW5nKCksXG4gICAgICB0bzogdGhpcy5kYXRlcy50by50b0xvY2FsZURhdGVTdHJpbmcoKVxuICAgIH07XG4gICAgY29uc3QgdG1wbCA9IHRlbXBsYXRlcy5pbnB1dDtcbiAgICBjb25zdCBpbnB1dFN0ciA9IGZpbGxUZW1wbGF0ZSh7XG4gICAgICB0bXBsLFxuICAgICAgZGF0YVxuICAgIH0pO1xuXG4gICAgdGhpcy5lbGVtLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJCZWdpbicsIGlucHV0U3RyKTtcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoYC4ke2Nscy5pbnB1dH1gKTtcbiAgICB0aGlzLmlucHV0RnJvbSA9IHRoaXMuaW5wdXQucXVlcnlTZWxlY3RvcihgLiR7Y2xzLmZyb219YCk7XG4gICAgdGhpcy5pbnB1dFRvID0gdGhpcy5pbnB1dC5xdWVyeVNlbGVjdG9yKGAuJHtjbHMudG99YCk7XG5cbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgdGhpcy50b2dnbGVQaWNrZXIpO1xuICAgIC8vIGNhcHR1cmU6IHRydWUgcmV2ZXJzZXMgb3JkZXIgb2YgZXZlbnRzXG4gICAgLy8gY2xpY2sgb24gYm9keSBmaXJlcyBmaXJzdFxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB0aGlzLmJvZHlPbkNsaWNrLCB7XG4gICAgICBjYXB0dXJlOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBib2R5T25DbGljayAoKSB7XG4gICAgY29uc3QgcGFyZW50UmFuZ2VQaWNrZXIgPSBldmVudC50YXJnZXQuY2xvc2VzdChgLiR7Y2xzLmVsZW19YCk7XG5cbiAgICBpZiAoIXBhcmVudFJhbmdlUGlja2VyICYmIHRoaXMuaXNPcGVuZWQpIHtcbiAgICAgIHRoaXMuaGlkZVBpY2tlcigpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUlucHV0ICgpIHtcbiAgICB0aGlzLmlucHV0RnJvbS5pbm5lckhUTUwgPSB0aGlzLmRhdGVzLmZyb20udG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgdGhpcy5pbnB1dFRvLmlubmVySFRNTCA9IHRoaXMuZGF0ZXMudG8udG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gIH1cblxuICB1cGRhdGVSYW5nZSAoKSB7XG4gICAgdGhpcy5tb250aGVzID0gdGhpcy5nZXREaXNwbGF5ZWRNb250aGVzKCk7XG4gICAgdGhpcy5uZXdEYXRlcyA9IFtdO1xuICAgIHRoaXMudXBkYXRlSW5wdXQoKTtcbiAgICB0aGlzLmhpZGVQaWNrZXIoKTtcbiAgfVxuXG4gIHRvZ2dsZVBpY2tlciAoKSB7XG4gICAgaWYgKHRoaXMuaXNPcGVuZWQpIHtcbiAgICAgIHRoaXMuaGlkZVBpY2tlcigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd1BpY2tlcigpO1xuICAgIHRoaXMuaXNPcGVuZWQgPSB0cnVlO1xuICB9XG5cbiAgc2hvd1BpY2tlciAoKSB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdG9yKSB7XG4gICAgICB0aGlzLmFkZFNlbGVjdG9yKCk7XG5cbiAgICAgIHRoaXMuc2VsZWN0b3IgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcihgLiR7Y2xzLnNlbGVjdG9yfWApO1xuICAgICAgdGhpcy5jYWxlbmRhcnMgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcihgLiR7Y2xzLmNhbGVuZGFyc31gKTtcblxuICAgICAgdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2VsZWN0b3JPbkNsaWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYWxlbmRhcnMuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgdGhpcy5hZGRDYWxlbmRhcnMoKTtcbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZChjbHMuZWxlbU9wZW4pO1xuICB9XG5cbiAgaGlkZVBpY2tlciAoKSB7XG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xzLmVsZW1PcGVuKTtcbiAgICB0aGlzLmlzT3BlbmVkID0gZmFsc2U7XG4gICAgdGhpcy5uZXdEYXRlcyA9IFtdO1xuICB9XG5cbiAgYWRkU2VsZWN0b3IgKCkge1xuICAgIGNvbnN0IHNlbGVjdG9yU3RyID0gdGVtcGxhdGVzLnNlbGVjdG9yO1xuICAgIHRoaXMuZWxlbS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZUVuZCcsIHNlbGVjdG9yU3RyKTtcbiAgfVxuXG4gIHNlbGVjdG9yT25DbGljayAoKSB7XG4gICAgY29uc3QgeyBkYXRhc2V0IH0gPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKGRhdGFzZXQudmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0RGF5KGV2ZW50LnRhcmdldCk7XG4gICAgfSBlbHNlIGlmIChkYXRhc2V0LmRpcmVjdGlvbikge1xuICAgICAgdGhpcy5tb3ZlTW9udGgoZGF0YXNldC5kaXJlY3Rpb24pO1xuICAgIH1cbiAgfVxuXG4gIHNldERheSAoZWxlbSkge1xuICAgIGNvbnN0IGRhdGUgPSBlbGVtLmRhdGFzZXQudmFsdWU7XG5cbiAgICBpZiAodGhpcy5uZXdEYXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMubmV3RGF0ZXMucHVzaChuZXcgRGF0ZShkYXRlKSk7XG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkKGVsZW0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubmV3RGF0ZXMucHVzaChuZXcgRGF0ZShkYXRlKSk7XG5cbiAgICB0aGlzLm5ld0RhdGVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhIC0gYjtcbiAgICB9KTtcbiAgICB0aGlzLmRhdGVzID0ge1xuICAgICAgZnJvbTogdGhpcy5uZXdEYXRlc1swXSxcbiAgICAgIHRvOiB0aGlzLm5ld0RhdGVzWzFdXG4gICAgfTtcblxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICBuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZURhdGUnLCB7XG4gICAgICAgIGRldGFpbDoge1xuICAgICAgICAgIGRhdGVzOiB7XG4gICAgICAgICAgICBmcm9tOiB0aGlzLmRhdGVzLmZyb20udG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgIHRvOiB0aGlzLmRhdGVzLnRvLnRvSVNPU3RyaW5nKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG1vdmVNb250aCAoZGlyZWN0aW9uKSB7XG4gICAgbGV0IHN0ZXAgPSAxO1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICdwcmV2Jykge1xuICAgICAgc3RlcCA9IC0xO1xuICAgIH1cblxuICAgIHRoaXMubW9udGhlcy5mb3JFYWNoKGRhdGUgPT4ge1xuICAgICAgZGF0ZS5zZXRNb250aChkYXRlLmdldE1vbnRoKCkgKyBzdGVwKTtcbiAgICB9KTtcblxuICAgIHRoaXMudXBkYXRlQ2FsZW5kYXJzKCk7XG4gIH1cblxuICBhZGRDYWxlbmRhcnMgKCkge1xuICAgIHRoaXMubW9udGhlcy5mb3JFYWNoKGRhdGUgPT4ge1xuICAgICAgdGhpcy5jYWxlbmRhcnMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVFbmQnLCB0aGlzLmdldENhbGVuZGFyKGRhdGUpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUNhbGVuZGFycyAoKSB7XG4gICAgdGhpcy5jYWxlbmRhcnMuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5hZGRDYWxlbmRhcnMoKTtcbiAgfVxuXG4gIHVwZGF0ZVNlbGVjdGVkIChlbGVtKSB7XG4gICAgY29uc3QgY2VsbHMgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvckFsbChgLiR7Y2xzLmNlbGx9YCk7XG4gICAgY29uc3QgY2xhc3NlcyA9IFtjbHMuc2VsZWN0ZWRCZXR3ZWVuLCBjbHMuc2VsZWN0ZWRGcm9tLCBjbHMuc2VsZWN0ZWRUb107XG5cbiAgICBjZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKC4uLmNsYXNzZXMpO1xuICAgIH0pO1xuXG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKGNscy5zZWxlY3RlZEZyb20pO1xuICB9XG5cbiAgZ2V0Q2FsZW5kYXIgKGRhdGUpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgbW9udGg6IGRhdGUudG9Mb2NhbGVTdHJpbmcoJ2RlZmF1bHQnLCB7IG1vbnRoOiAnbG9uZycgfSksXG4gICAgICB3ZWVrZGF5czogZ2V0V2Vla0RheXMoJ2RpdicpLFxuICAgICAgZGF5czogdGhpcy5nZXRDZWxscyhkYXRlKVxuICAgIH07XG5cbiAgICBjb25zdCB0bXBsID0gdGVtcGxhdGVzLmNhbGVuZGFyO1xuICAgIGNvbnN0IGNhbGVuZGFyU3RyID0gZmlsbFRlbXBsYXRlKHtcbiAgICAgIHRtcGwsXG4gICAgICBkYXRhXG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2FsZW5kYXJTdHI7XG4gIH1cblxuICBnZXRDZWxscyAoZGF0ZSkge1xuICAgIGNvbnN0IHRtcGwgPSB0ZW1wbGF0ZXMuZGF5O1xuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgY29uc3QgbW9udGggPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpO1xuICAgIGxldCBjdXJyZW50RGF5ID0gMTtcbiAgICBsZXQgZGF5c1N0ciA9ICcnO1xuXG4gICAgd2hpbGUgKGN1cnJlbnREYXRlLmdldE1vbnRoKCkgPT09IG1vbnRoKSB7XG4gICAgICBjb25zdCBzdHlsZSA9IHRoaXMuZ2V0Q2VsbFN0YXJ0U3R5bGUoY3VycmVudERhdGUpO1xuICAgICAgY29uc3QgbW9kID0gdGhpcy5nZXRDZWxsTW9kKGN1cnJlbnREYXRlKTtcblxuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgZGF0ZVRpbWU6IGN1cnJlbnREYXRlLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIGRhdGVOdW06IGN1cnJlbnREYXRlLmdldERhdGUoKSxcbiAgICAgICAgc3R5bGUsXG4gICAgICAgIG1vZFxuICAgICAgfTtcbiAgICAgIGRheXNTdHIgKz0gZmlsbFRlbXBsYXRlKHtcbiAgICAgICAgdG1wbCxcbiAgICAgICAgZGF0YVxuICAgICAgfSk7XG5cbiAgICAgIGN1cnJlbnREYXRlLnNldERhdGUoKytjdXJyZW50RGF5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF5c1N0cjtcbiAgfVxuXG4gIGdldENlbGxTdGFydFN0eWxlIChkYXRlKSB7XG4gICAgbGV0IHN0eWxlID0gJyc7XG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG5cbiAgICBpZiAoZGF5ID4gMSkge1xuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cblxuICAgIGxldCB3ZWVrZGF5TnVtID0gZGF0ZS5nZXREYXkoKTtcbiAgICBpZiAod2Vla2RheU51bSA9PT0gMCkge1xuICAgICAgd2Vla2RheU51bSA9IDc7XG4gICAgfVxuXG4gICAgc3R5bGUgPSBgZ3JpZC1jb2x1bW4tc3RhcnQ6ICR7d2Vla2RheU51bX1gO1xuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG5cbiAgZ2V0Q2VsbE1vZCAoZGF0ZSkge1xuICAgIGxldCBtb2QgPSAnJztcblxuICAgIGlmICh0aGlzLm5ld0RhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBtb2Q7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0ZU1zID0gZGF0ZS52YWx1ZU9mKCk7XG4gICAgY29uc3QgZGF0ZUZyb21NcyA9IHRoaXMuZGF0ZXMuZnJvbS52YWx1ZU9mKCk7XG4gICAgY29uc3QgZGF0ZVRvTXMgPSB0aGlzLmRhdGVzLnRvLnZhbHVlT2YoKTtcblxuICAgIGlmIChkYXRlTXMgPiBkYXRlRnJvbU1zICYmIGRhdGVNcyA8IGRhdGVUb01zKSB7XG4gICAgICBtb2QgPSBjbHMuc2VsZWN0ZWRCZXR3ZWVuO1xuICAgIH0gZWxzZSBpZiAoZGF0ZU1zID09PSBkYXRlRnJvbU1zKSB7XG4gICAgICBtb2QgPSBjbHMuc2VsZWN0ZWRGcm9tO1xuICAgIH0gZWxzZSBpZiAoZGF0ZU1zID09PSBkYXRlVG9Ncykge1xuICAgICAgbW9kID0gY2xzLnNlbGVjdGVkVG87XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vZDtcbiAgfVxufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShtb2R1bGUuaWQsIGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCBjbHMgZnJvbSAnLi9jbGFzc2VzLmpzJztcblxuZXhwb3J0IGNvbnN0IGlucHV0ID0gYDxidXR0b24gY2xhc3M9XCIke2Nscy5pbnB1dH1cIiBkYXRhLWVsZW09XCJpbnB1dFwiIHR5cGU9XCJidXR0b25cIj5cbiAgPHNwYW5cbiAgICBjbGFzcz1cIiR7Y2xzLmZyb219XCJcbiAgICBkYXRhLWVsZW09XCJmcm9tXCI+e2Zyb219PC9zcGFuPiAtXG4gIDxzcGFuXG4gICAgY2xhc3M9XCIke2Nscy50b31cIlxuICAgIGRhdGEtZWxlbT1cInRvXCJcbiAgICA+e3RvfTwvc3Bhbj5cbjwvYnV0dG9uPmA7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RvciA9IGBcbjxkaXYgY2xhc3M9XCIke2Nscy5zZWxlY3Rvcn1cIiBkYXRhLWVsZW09XCJzZWxlY3RvclwiPlxuICA8ZGl2IGNsYXNzPVwiJHtjbHMuc2VsZWN0b3JBcnJvd31cIj48L2Rpdj5cbiAgPGJ1dHRvblxuICAgIHR5cGU9XCJidXR0b25cIlxuICAgIGNsYXNzPVwiJHtjbHMuc2VsZWN0b3JDb250cm9sfSAke2Nscy5zZWxlY3RvckNvbnRyb2x9LS1sZWZ0XCJcbiAgICBkYXRhLWRpcmVjdGlvbj1cInByZXZcIlxuICA+PC9idXR0b24+XG4gIDxidXR0b25cbiAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICBjbGFzcz1cIiR7Y2xzLnNlbGVjdG9yQ29udHJvbH0gJHtjbHMuc2VsZWN0b3JDb250cm9sfS0tcmlnaHRcIlxuICAgIGRhdGEtZGlyZWN0aW9uPVwibmV4dFwiXG4gID48L2J1dHRvbj5cbiAgPGRpdiBjbGFzcz1cIiR7Y2xzLmNhbGVuZGFyc31cIj48L2Rpdj5cbjwvZGl2PlxuYDtcblxuZXhwb3J0IGNvbnN0IGNhbGVuZGFyID0gYFxuPGRpdiBjbGFzcz1cIiR7Y2xzLmNhbGVuZGFyfVwiPlxuICA8ZGl2IGNsYXNzPVwiJHtjbHMubW9udGhJbmRpY2F0b3J9XCI+XG4gICAgPHRpbWUgZGF0ZXRpbWU9XCJ7bW9udGh9XCI+e21vbnRofTwvdGltZT5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCIke2Nscy5kYXlPZldlZWt9XCI+XG4gICAge3dlZWtkYXlzfVxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIiR7Y2xzLmRhdGVHcmlkfVwiPlxuICAgIHtkYXlzfVxuICA8L2Rpdj5cbjwvZGl2PlxuYDtcblxuZXhwb3J0IGNvbnN0IGRheSA9IGBcbjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJHtjbHMuY2VsbH0ge21vZH1cIiBkYXRhLXZhbHVlPVwie2RhdGVUaW1lfVwiIHN0eWxlPVwie3N0eWxlfVwiPntkYXRlTnVtfTwvYnV0dG9uPlxuYDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbnB1dCxcbiAgc2VsZWN0b3IsXG4gIGNhbGVuZGFyLFxuICBkYXlcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGVsZW06ICdzb3J0YWJsZS10YWJsZScsXG4gIHRhYmxlOiAnc29ydGFibGUtdGFibGVfX3RhYmxlJyxcbiAgdGhlYWQ6ICdzb3J0YWJsZS10YWJsZV9fdGhlYWQnLFxuICBoZWFkZXI6ICdzb3J0YWJsZS10YWJsZV9faGVhZGVyJyxcbiAgcm93OiAnc29ydGFibGUtdGFibGVfX3JvdycsXG4gIGNlbGw6ICdzb3J0YWJsZS10YWJsZV9fY2VsbCcsXG4gIGNlbGxFcnJvcjogJ3NvcnRhYmxlLXRhYmxlX19jZWxsLS1lcnJvcicsXG4gIGNlbGxTb3J0ZXI6ICdzb3J0YWJsZS10YWJsZV9fY2VsbC0tc29ydGVyJyxcbiAgaW1nOiAnc29ydGFibGUtdGFibGVfX2ltYWdlJyxcbiAgaW1nV3JhcHBlcjogJ3NvcnRhYmxlLXRhYmxlX19pbWFnZS13cmFwcGVyJyxcbiAgcHJldmlldzogJ3NvcnRhYmxlLXRhYmxlX19wcmV2aWV3JyxcbiAgbGluazogJ3NvcnRhYmxlLXRhYmxlX19saW5rJyxcbiAgY2F0ZWdvcnk6ICdzb3J0YWJsZS10YWJsZV9fY2F0ZWdvcnknLFxuICB0b29sdGlwQ2F0ZWdvcnk6ICdzb3J0YWJsZS10YWJsZV9fdG9vbHRpcC1jYXRlZ29yeScsXG4gIHRvb2x0aXBTdWJjYXRlZ29yeTogJ3NvcnRhYmxlLXRhYmxlX190b29sdGlwLXN1YmNhdGVnb3J5J1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgMDogJ2Rlc2MnLFxuICAxOiAnYXNjJ1xufTtcbiIsImltcG9ydCB7IGZvcm1hdFRvdGFsLCBlc2NhcGVIVE1MIH0gZnJvbSAnLi4vLi4vaGVscGVycy9pbmRleC5qcyc7XG5pbXBvcnQgc3RhdHVzVGV4dCBmcm9tICcuL3N0YXR1c1RleHQuanMnO1xuaW1wb3J0IGNscyBmcm9tICcuL2NsYXNzZXMuanMnO1xuXG4vLyBJbmZvICYgc29ydGluZyBtZXRob2RzIGZvciB0YWJsZSBjb2x1bW5zXG5leHBvcnQgZGVmYXVsdCB7XG4gIGltYWdlczoge1xuICAgIHRpdGxlOiAnSW1hZ2UnLFxuICAgIHJlbmRlciAoeyBpbWFnZXMgfSkge1xuICAgICAgaWYgKCFpbWFnZXMgfHwgIWltYWdlc1swXS51cmwpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3JjID0gaW1hZ2VzWzBdLnVybDtcbiAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7Y2xzLmltZ1dyYXBwZXJ9XCI+XG4gICAgICA8aW1nIHNyYz1cIiR7c3JjfVwiIGNsYXNzPVwiJHtjbHMuaW1nfVwiPlxuICAgICAgPHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtzcmN9KVwiIGNsYXNzPVwiJHtjbHMucHJldmlld31cIj48c3Bhbj5cbiAgICAgIDxkaXY+YDtcbiAgICB9LFxuICAgIGNvbXBhcmU6IG51bGxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICB0aXRsZTogJ05hbWUnLFxuICAgIHJlbmRlciAoeyB0aXRsZSwgaWQgfSkge1xuICAgICAgcmV0dXJuIGBcbiAgICAgICR7dGl0bGV9XG4gICAgICA8YSBjbGFzcz1cIiR7Y2xzLmxpbmt9XCIgaHJlZj1cIi9wcm9kdWN0cy8ke2lkfVwiPjwvYT5cbiAgICAgIGA7XG4gICAgfSxcbiAgICBjb21wYXJlIChhLCBiKSB7XG4gICAgICByZXR1cm4gYS50aXRsZS5sb2NhbGVDb21wYXJlKGIudGl0bGUpO1xuICAgIH1cbiAgfSxcbiAgc3ViY2F0ZWdvcnk6IHtcbiAgICB0aXRsZTogJ0NhdGVnb3J5JyxcbiAgICByZW5kZXIgKHsgc3ViY2F0ZWdvcnkgfSkge1xuICAgICAgY29uc3QgY2F0ZWdvcnkgPSBzdWJjYXRlZ29yeS5jYXRlZ29yeTtcbiAgICAgIGNvbnN0IHRvb3RpcENvbnRlbnQgPSBgPHNwYW4gY2xhc3M9XCIke2Nscy50b29sdGlwQ2F0ZWdvcnl9XCI+JHtjYXRlZ29yeS50aXRsZX08L3NwYW4+LzxzcGFuIGNsYXNzPVwiJHtjbHMudG9vbHRpcFN1YmNhdGVnb3J5fVwiPiR7c3ViY2F0ZWdvcnkudGl0bGV9PC9zcGFuPmA7XG4gICAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwiJHtjbHMuY2F0ZWdvcnl9XCIgZGF0YS10b29sdGlwLWNvbnRlbnQ9XCIke2VzY2FwZUhUTUwodG9vdGlwQ29udGVudCl9XCI+JHtzdWJjYXRlZ29yeS50aXRsZX08L3NwYW4+YDtcbiAgICB9LFxuICAgIGNvbXBhcmUgKGEsIGIpIHtcbiAgICAgIC8vIFNvcnRpbmcgYnkgcnVzc2lhbiB0aXRsZXNcbiAgICAgIGNvbnN0IGFDYXROYW1lID0gYS5zdWJjYXRlZ29yeS50aXRsZTtcbiAgICAgIGNvbnN0IGJDYXROYW1lID0gYi5zdWJjYXRlZ29yeS50aXRsZTtcbiAgICAgIHJldHVybiBhQ2F0TmFtZS5sb2NhbGVDb21wYXJlKGJDYXROYW1lKTtcbiAgICB9XG4gIH0sXG4gIHF1YW50aXR5OiB7XG4gICAgdGl0bGU6ICdRdWFudGl0eScsXG4gICAgcmVuZGVyICh7IHF1YW50aXR5IH0pIHtcbiAgICAgIHJldHVybiBxdWFudGl0eTtcbiAgICB9LFxuICAgIGNvbXBhcmUgKGEsIGIpIHtcbiAgICAgIHJldHVybiBhLnF1YW50aXR5IC0gYi5xdWFudGl0eTtcbiAgICB9XG4gIH0sXG4gIHByaWNlOiB7XG4gICAgdGl0bGU6ICdQcmljZScsXG4gICAgcmVuZGVyICh7IHByaWNlIH0pIHtcbiAgICAgIHJldHVybiBmb3JtYXRUb3RhbChwcmljZSk7XG4gICAgfSxcbiAgICBjb21wYXJlIChhLCBiKSB7XG4gICAgICByZXR1cm4gYS5wcmljZSAtIGIucHJpY2U7XG4gICAgfVxuICB9LFxuICBzdGF0dXM6IHtcbiAgICB0aXRsZTogJ1N0YXR1cycsXG4gICAgcmVuZGVyICh7IHN0YXR1cyB9KSB7XG4gICAgICByZXR1cm4gc3RhdHVzVGV4dFtzdGF0dXNdO1xuICAgIH0sXG4gICAgY29tcGFyZSAoYSwgYikge1xuICAgICAgcmV0dXJuIGEuc3RhdHVzIC0gYi5zdGF0dXM7XG4gICAgfVxuICB9XG59O1xuIiwiaW1wb3J0IGRpcmVjdGlvbnMgZnJvbSAnLi9kaXJlY3Rpb25zLmpzJztcblxuZXhwb3J0IGNvbnN0IGdldERpcmVjdGlvblRleHQgPSBpc0FzYyA9PiB7XG4gIHJldHVybiBkaXJlY3Rpb25zWytpc0FzY107XG59O1xuIiwiaW1wb3J0IFRvb2x0aXBzIGZyb20gJy4uL1Rvb2x0aXBzL2luZGV4LmpzJztcbmltcG9ydCBjbHMgZnJvbSAnLi9jbGFzc2VzLmpzJztcbmltcG9ydCBzdGF0dXNUZXh0IGZyb20gJy4vc3RhdHVzVGV4dC5qcyc7XG5pbXBvcnQgZmllbGRzIGZyb20gJy4vZmllbGRzLmpzJztcbmltcG9ydCB7IGZldGNoSnNvbiwgdGhyb3R0bGUgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2luZGV4LmpzJztcbmltcG9ydCB7IGdldERpcmVjdGlvblRleHQgfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuaW1wb3J0IFBhZ2VNZXNzYWdlIGZyb20gJy4uL1BhZ2VNZXNzYWdlL2luZGV4LmpzJztcblxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29ydGFibGVUYWJsZSBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zb3J0aW5nID0ge1xuICAgICAgY3VycmVudDogbnVsbCxcbiAgICAgIGlzQXNjOiB0cnVlXG4gICAgfTtcblxuICAgIHRoaXMucGFnZSA9IHtcbiAgICAgIGl0ZW1zOiAyMCxcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICBpc0RhdGFFbmRlZDogZmFsc2VcbiAgICB9O1xuXG4gICAgdGhpcy5hcGlVcmwgPSBwcm9jZXNzLmVudi5BUElfVVJMIHx8ICdodHRwczovL2NvdXJzZS1qcy5qYXZhc2NyaXB0LnJ1JztcblxuICAgIHRoaXMuY2hhbmdlRGF0ZSA9IHRoaXMuY2hhbmdlRGF0ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYXN5bmMgY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHVybCxcbiAgICAgIGZpZWxkc0xpc3QsXG4gICAgICBvcmRlckZpZWxkLFxuICAgICAgb3JkZXJEaXJlY3Rpb24sXG4gICAgICBpc0R5bmFtaWMsXG4gICAgICBmcm9tLFxuICAgICAgdG9cbiAgICB9ID0gdGhpcy5kYXRhc2V0O1xuXG4gICAgdGhpcy5kYXRlcyA9IHtcbiAgICAgIGZyb20sXG4gICAgICB0b1xuICAgIH07XG5cbiAgICB0aGlzLnVybCA9IHRoaXMuYXBpVXJsICsgdXJsO1xuICAgIHRoaXMuZmllbGRzTGlzdCA9IEpTT04ucGFyc2UoZmllbGRzTGlzdC5yZXBsYWNlKC8nL2csICdcIicpKTtcbiAgICB0aGlzLmlzRHluYW1pYyA9ICtpc0R5bmFtaWM7XG4gICAgdGhpcy5vcmRlciA9IHtcbiAgICAgIGZpZWxkOiBvcmRlckZpZWxkLFxuICAgICAgZGlyZWN0aW9uOiBvcmRlckRpcmVjdGlvblxuICAgIH07XG4gICAgdGhpcy5pbml0VGFibGUgPSB0aGlzLmluaXRUYWJsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5vcmRlciAmJiB0aGlzLm9yZGVyLmRpcmVjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnNvcnRpbmcuaXNBc2MgPSB0aGlzLm9yZGVyLmRpcmVjdGlvbjtcbiAgICB9XG5cbiAgICB0aGlzLmZldGNoVXJsID0gdGhpcy5nZXRGZXRjaFVybCgpO1xuICAgIC8vIFRyeSB0byB0aHJvdHRsZSBsb2FkaW5nIG9uIHNjcm9sbFxuICAgIHRoaXMub25Cb2R5U2Nyb2xsVGhyb3R0bGUgPSB0aHJvdHRsZSh0aGlzLm9uQm9keVNjcm9sbCwgdGhpcywgNTAwKTtcblxuICAgIHRoaXMuaW5pdFRhYmxlKCk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VEYXRlJywgdGhpcy5jaGFuZ2VEYXRlKTtcbiAgfVxuXG4gIGFzeW5jIGxvYWREYXRhICgpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy50YWJsZS5kYXRhc2V0LmxvYWRpbmcgPSAxO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRhYmxlRGF0YSA9IGF3YWl0IGZldGNoSnNvbih0aGlzLmZldGNoVXJsKTtcblxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMudGFibGUuZGF0YXNldC5sb2FkaW5nID0gMDtcblxuICAgICAgcmV0dXJuIHRhYmxlRGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gU2hvdyBlcnJvciBtZXNzYWdlIHRvIHVzZXJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgUGFnZU1lc3NhZ2UoeyBlcnJvciB9KTtcbiAgICAgIHRoaXMudGFibGUuZGF0YXNldC5sb2FkaW5nID0gMDtcblxuICAgICAgdGhpcy50Qm9keS5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICdiZWZvcmVFbmQnLFxuICAgICAgICBgPHRyIGNsYXNzPVwiJHtjbHMucm93fVwiPjx0ZCBjbGFzcz1cIiR7Y2xzLmNlbGxFcnJvcn1cIj4ke21lc3NhZ2UuZWxlbS5vdXRlckhUTUx9PC90cj5gXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGluaXRUYWJsZSAoKSB7XG4gICAgdGhpcy5jcmVhdGVMYXlvdXQoKTtcbiAgICB0aGlzLmFkZEVsZW1IZWFkZXIoKTtcbiAgICB0aGlzLmFkZFRhYmxlRXZlbnRzKCk7XG5cbiAgICB0aGlzLmZpbGxUQm9keSgpO1xuICB9XG5cbiAgYXN5bmMgZmlsbFRCb2R5ICgpIHtcbiAgICBpZiAodGhpcy5wYWdlLmlzRGF0YUVuZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50YWJsZVJvd3MgPSBhd2FpdCB0aGlzLmxvYWREYXRhKCk7XG5cbiAgICAvLyBMYXN0IHBhZ2VcbiAgICBpZiAodGhpcy50YWJsZVJvd3MubGVuZ3RoIDwgdGhpcy5wYWdlLml0ZW1zKSB7XG4gICAgICB0aGlzLnBhZ2UuaXNEYXRhRW5kZWQgPSB0cnVlO1xuXG4gICAgICBpZiAodGhpcy50YWJsZVJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNEeW5hbWljICYmIHRoaXMub3JkZXIgJiYgdGhpcy5vcmRlci5maWVsZCkge1xuICAgICAgdGhpcy5zb3J0Um93cyh0aGlzLm9yZGVyLmZpZWxkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlclRCb2R5KCk7XG4gIH1cblxuICBnZXRGZXRjaFVybCAoKSB7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgc3RhcnQ6IHRoaXMucGFnZS5jdXJyZW50ICogdGhpcy5wYWdlLml0ZW1zLFxuICAgICAgZW5kOiAodGhpcy5wYWdlLmN1cnJlbnQgKyAxKSAqIHRoaXMucGFnZS5pdGVtcyxcbiAgICAgIHNvcnQ6IHRoaXMub3JkZXIuZmllbGQsXG4gICAgICBvcmRlcjogZ2V0RGlyZWN0aW9uVGV4dCh0aGlzLnNvcnRpbmcuaXNBc2MpXG4gICAgfTtcblxuICAgIGlmICh0aGlzLmRhdGVzICYmIHRoaXMuZGF0ZXMuZnJvbSkge1xuICAgICAgcGFyYW1zLmZyb20gPSB0aGlzLmRhdGVzLmZyb207XG4gICAgICBwYXJhbXMudG8gPSB0aGlzLmRhdGVzLnRvO1xuICAgIH1cblxuICAgIGxldCBwYXJhbXNTdHIgPSAnJztcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBwYXJhbXMpIHtcbiAgICAgIGxldCBwcmVmaXggPSAnXyc7XG4gICAgICBpZiAoa2V5ID09PSAnZnJvbScgfHwga2V5ID09PSAndG8nKSB7XG4gICAgICAgIHByZWZpeCA9ICcnO1xuICAgICAgfVxuXG4gICAgICBwYXJhbXNTdHIgKz0gYCYke3ByZWZpeH0ke2tleX09JHtwYXJhbXNba2V5XX1gO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy51cmwgKyBwYXJhbXNTdHI7XG4gIH1cblxuICBjcmVhdGVMYXlvdXQgKCkge1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZChjbHMuZWxlbSk7XG4gICAgdGhpcy50YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgdGhpcy50YWJsZS5jbGFzc0xpc3QuYWRkKGNscy50YWJsZSk7XG4gICAgdGhpcy50Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XG4gICAgdGhpcy50YWJsZS5hcHBlbmQodGhpcy50Qm9keSk7XG4gICAgdGhpcy50YWJsZS5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAnYmVmb3JlRW5kJyxcbiAgICAgIGA8dGZvb3Q+PHRyPjx0ZCBjb2xzcGFuPVwiJHt0aGlzLmZpZWxkc0xpc3QubGVuZ3RofVwiPjxkaXYgY2xhc3M9XCJzcGlubmVyXCI+PC9kaXY+PC90ZD48L3RyPjwvdGZvb3Q+YFxuICAgICk7XG5cbiAgICB0aGlzLmFwcGVuZCh0aGlzLnRhYmxlKTtcbiAgfVxuXG4gIC8vIEZpbGwgdGFibGUgaGVhZGVyIHdpdGggY29udGVudFxuICBhZGRFbGVtSGVhZGVyICgpIHtcbiAgICBsZXQgaGVhZGVyQ29udGVudCA9ICcnO1xuXG4gICAgdGhpcy5maWVsZHNMaXN0LmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgbGV0IHRoQ2xhc3MgPSBjbHMuY2VsbDtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHNvcnRlcjogJycsXG4gICAgICAgIHNvcnREaXJlY3Rpb246ICcnXG4gICAgICB9O1xuICAgICAgaWYgKGZpZWxkc1tmaWVsZF0uY29tcGFyZSkge1xuICAgICAgICB0aENsYXNzICs9IGAgJHtjbHMuY2VsbFNvcnRlcn1gO1xuICAgICAgICBkYXRhLnNvcnRlciA9ICdkYXRhLXNvcnRlcj1cIjFcIic7XG4gICAgICB9XG4gICAgICBpZiAoZmllbGQgPT09IHRoaXMub3JkZXIuZmllbGQpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gZ2V0RGlyZWN0aW9uVGV4dCh0aGlzLnNvcnRpbmcuaXNBc2MpO1xuICAgICAgICBkYXRhLnNvcnREaXJlY3Rpb24gPSBgZGF0YS1zb3J0LWRpcmVjdGlvbj1cIiR7ZGlyZWN0aW9ufVwiYDtcbiAgICAgIH1cbiAgICAgIGhlYWRlckNvbnRlbnQgKz0gYDx0aCBjbGFzcz1cIiR7dGhDbGFzc31cIlxuICAgICAgICBkYXRhLW5hbWU9XCIke2ZpZWxkfVwiXG4gICAgICAgICR7ZGF0YS5zb3J0ZXJ9XG4gICAgICAgICR7ZGF0YS5zb3J0RGlyZWN0aW9ufVxuICAgICAgICA+JHtmaWVsZHNbZmllbGRdLnRpdGxlfTwvdGg+YDtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRoZWFkU3RyID0gYDx0aGVhZCBjbGFzcz1cIiR7Y2xzLnRoZWFkfVwiPjx0ciBjbGFzcz1cIiR7Y2xzLmhlYWRlcn0gJHtjbHMucm93fVwiPlxuICAgICAgJHtoZWFkZXJDb250ZW50fVxuICAgIDwvdHI+PC90aGVhZD5gO1xuXG4gICAgdGhpcy50YWJsZS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyQmVnaW4nLCB0aGVhZFN0cik7XG5cbiAgICB0aGlzLnNvcnRpbmcuY3VycmVudCA9IHRoaXMudGFibGUucXVlcnlTZWxlY3RvcignW2RhdGEtc29ydC1kaXJlY3Rpb25dJyk7XG4gIH1cblxuICAvLyBTb3J0ZXJcbiAgc29ydGVyT25DbGljayAodGgpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoLmRhdGFzZXQ7XG5cbiAgICBpZiAodGguZGF0YXNldC5zb3J0RGlyZWN0aW9uKSB7XG4gICAgICB0aGlzLnNvcnRpbmcuaXNBc2MgPSAhdGhpcy5zb3J0aW5nLmlzQXNjO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5zb3J0aW5nLmN1cnJlbnQpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc29ydGluZy5jdXJyZW50LmRhdGFzZXQuc29ydERpcmVjdGlvbjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc29ydGluZy5pc0FzYyA9IHRydWU7XG4gICAgICB0aGlzLnNvcnRpbmcuY3VycmVudCA9IHRoO1xuICAgIH1cblxuICAgIHRoLmRhdGFzZXQuc29ydERpcmVjdGlvbiA9IGdldERpcmVjdGlvblRleHQodGhpcy5zb3J0aW5nLmlzQXNjKTtcblxuICAgIGlmICh0aGlzLmlzRHluYW1pYykge1xuICAgICAgdGhpcy5zb3J0Um93c0R5bmFtaWMobmFtZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zb3J0Um93cyhuYW1lKTtcbiAgfVxuXG4gIC8vIFNvcnRpbmdcbiAgc29ydFJvd3MgKGZpZWxkKSB7XG4gICAgdGhpcy50YWJsZVJvd3Muc29ydChmaWVsZHNbZmllbGRdLmNvbXBhcmUpO1xuXG4gICAgaWYgKCF0aGlzLnNvcnRpbmcuaXNBc2MpIHtcbiAgICAgIHRoaXMudGFibGVSb3dzLnJldmVyc2UoKTtcbiAgICB9XG5cbiAgICB0aGlzLnRCb2R5LmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMucmVuZGVyVEJvZHkoKTtcbiAgfVxuXG4gIC8vIFNvcnRpbmdcbiAgc29ydFJvd3NEeW5hbWljIChmaWVsZCkge1xuICAgIHRoaXMub3JkZXIuZmllbGQgPSBmaWVsZDtcbiAgICB0aGlzLnBhZ2UuY3VycmVudCA9IDA7XG4gICAgdGhpcy5wYWdlLmlzRGF0YUVuZGVkID0gZmFsc2U7XG4gICAgdGhpcy5mZXRjaFVybCA9IHRoaXMuZ2V0RmV0Y2hVcmwoKTtcbiAgICB0aGlzLnRCb2R5LmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuZmlsbFRCb2R5KCk7XG4gIH1cblxuICAvLyBBZGRpbmcgZGVsZWdhdGVkIGV2ZW50cyB0byB0YWJsZVxuICBhZGRUYWJsZUV2ZW50cyAoKSB7XG4gICAgdGhpcy50YWJsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uQm9keVNjcm9sbFRocm90dGxlKTtcbiAgICB0aGlzLnRvb2x0aXBzID0gbmV3IFRvb2x0aXBzKHsgZWxlbTogdGhpcyB9KTtcbiAgfVxuXG4gIC8vIEhhbmRsZXMgYWxsIGV2ZW50cyBmb3IgdGFibGVcbiAgaGFuZGxlRXZlbnQgKCkge1xuICAgIC8vIFNvcnRpbmcgZXZlbnRzXG4gICAgaWYgKGV2ZW50LnRhcmdldC5kYXRhc2V0LnNvcnRlcikge1xuICAgICAgdGhpcy5zb3J0ZXJPbkNsaWNrKGV2ZW50LnRhcmdldCk7XG4gICAgfVxuICB9XG5cbiAgb25Cb2R5U2Nyb2xsICgpIHtcbiAgICBpZiAodGhpcy5pc0xvYWRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBodG1sQ29vcmRzID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHNjcm9sbERlbHRhID0gaHRtbENvb3Jkcy5ib3R0b20gLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICBpZiAoc2Nyb2xsRGVsdGEgPCAxMDApIHtcbiAgICAgIHRoaXMucGFnZS5jdXJyZW50Kys7XG4gICAgICB0aGlzLmZldGNoVXJsID0gdGhpcy5nZXRGZXRjaFVybCgpO1xuICAgICAgdGhpcy5maWxsVEJvZHkoKTtcbiAgICB9XG4gIH1cblxuICAvLyBGaWxsIHRhYmxlIGJvZHkgY2VsbHMgd2l0aCBjb250ZW50XG4gIHJlbmRlclRCb2R5ICgpIHtcbiAgICB0aGlzLnBhZ2VZT2Zmc2V0ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuXG4gICAgdGhpcy50YWJsZVJvd3MuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgbGV0IHJvd0NvbnRlbnQgPSAnJztcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSByb3c7XG5cbiAgICAgIHRoaXMuZmllbGRzTGlzdC5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgY29uc3QgdGRDbGFzc2VzID0gW1xuICAgICAgICAgIGNscy5jZWxsLFxuICAgICAgICAgIGAke2Nscy5jZWxsfS0tJHtmaWVsZH1gLFxuICAgICAgICAgIGAke2Nscy5jZWxsfS0tJHtzdGF0dXNUZXh0W3N0YXR1c10udG9Mb3dlckNhc2UoKX1gXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IHJlbmRlckZpZWxkID0gZmllbGRzW2ZpZWxkXS5yZW5kZXI7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkQ29udGVudCA9IHJlbmRlckZpZWxkKHJvdyk7XG5cbiAgICAgICAgaWYgKHJlbmRlcmVkQ29udGVudCkge1xuICAgICAgICAgIHJvd0NvbnRlbnQgKz0gYDx0ZCBjbGFzcz1cIiR7dGRDbGFzc2VzLmpvaW4oXG4gICAgICAgICAgICAnICdcbiAgICAgICAgICApfVwiPiR7cmVuZGVyZWRDb250ZW50fTwvdGQ+YDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudEJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAnYmVmb3JlRW5kJyxcbiAgICAgICAgYDx0ciBjbGFzcz1cIiR7Y2xzLnJvd31cIj4ke3Jvd0NvbnRlbnR9PC90cj5gXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMucGFnZVlPZmZzZXQpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCB0aGlzLnBhZ2VZT2Zmc2V0KTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBjaGFuZ2VEYXRlIChldmVudCkge1xuICAgIGlmICghZXZlbnQuZGV0YWlsIHx8ICFldmVudC5kZXRhaWwuZGF0ZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGVzID0gZXZlbnQuZGV0YWlsLmRhdGVzO1xuICAgIHRoaXMuZmV0Y2hVcmwgPSB0aGlzLmdldEZldGNoVXJsKCk7XG4gICAgdGhpcy50Qm9keS5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLmZpbGxUQm9keSgpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIDA6ICdEaXNhYmxlZCcsXG4gIDE6ICdFbmFibGVkJ1xufTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkobW9kdWxlLmlkLCBjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGVsZW06ICd0b29sdGlwcy1jb250YWluZXInLFxuICBkaW1tZWQ6ICd0b29sdGlwcy1jb250YWluZXItLWRpbW1lZCcsXG4gIHRvb2x0aXA6ICd0b29sdGlwJ1xufTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2luZGV4LmpzJztcbmltcG9ydCBjbHMgZnJvbSAnLi9jbGFzc2VzLmpzJztcbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2x0aXBzIHtcbiAgY29uc3RydWN0b3IgKHsgZWxlbSwgZGltU2libGluZ3MgfSkge1xuICAgIHRoaXMuZWxlbSA9IGVsZW07XG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoY2xzLmVsZW0pO1xuICAgIHRoaXMuZGltU2libGluZ3MgPSBkaW1TaWJsaW5ncztcblxuICAgIHRoaXMudG9vbHRpcCA9IGNyZWF0ZUVsZW1lbnQoYDxkaXYgY2xhc3M9XCIke2Nscy50b29sdGlwfVwiPjwvZGl2PmApO1xuICAgIHRoaXMuZWxlbS5hcHBlbmQodGhpcy50b29sdGlwKTtcblxuICAgIHRoaXMubGlzdE1vdXNlTW92ZSA9IHRoaXMubGlzdE1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubGlzdE1vdXNlT3V0ID0gdGhpcy5saXN0TW91c2VPdXQuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuZWxlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmxpc3RNb3VzZU1vdmUpO1xuICAgIHRoaXMuZWxlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5saXN0TW91c2VPdXQpO1xuICB9XG5cbiAgbGlzdE1vdXNlTW92ZSAoKSB7XG4gICAgaWYgKCFldmVudC50YXJnZXQuZGF0YXNldC50b29sdGlwQ29udGVudCkge1xuICAgICAgdGhpcy5oaWRlVG9vbHRpcCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgdG9vbHRpcENvbnRlbnQgfSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0O1xuICAgIHRoaXMudG9vbHRpcC5pbm5lckhUTUwgPSB0b29sdGlwQ29udGVudDtcbiAgICB0aGlzLnRvb2x0aXAuZGF0YXNldC52aXNpYmxlID0gMTtcblxuICAgIC8vIFBhcmVudCBjb250YWluZXIgY29vcmRzXG4gICAgdGhpcy5lbGVtQ29vcmRzID0gdGhpcy5lbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGNvb3JkcyA9IHtcbiAgICAgIHg6IGV2ZW50LmNsaWVudFggLSB0aGlzLmVsZW1Db29yZHMueCxcbiAgICAgIHk6IGV2ZW50LmNsaWVudFkgLSB0aGlzLmVsZW1Db29yZHMueVxuICAgIH07XG5cbiAgICB0aGlzLnRvb2x0aXAuc3R5bGUgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGUoJHtjb29yZHMueH1weCwgJHtjb29yZHMueX1weClgO1xuXG4gICAgLy8gRml4IGN1dHRpbmcgYnkgd2luZG93XG4gICAgdGhpcy50b29sdGlwQ29vcmRzID0gdGhpcy50b29sdGlwLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGhpZGRlbkJ5V2luZG93ID0gdGhpcy50b29sdGlwQ29vcmRzLnJpZ2h0IC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuXG4gICAgaWYgKGhpZGRlbkJ5V2luZG93ID4gMCkge1xuICAgICAgY29vcmRzLnggLT0gaGlkZGVuQnlXaW5kb3c7XG4gICAgICB0aGlzLnRvb2x0aXAuc3R5bGUgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGUoJHtjb29yZHMueH1weCwgJHtjb29yZHMueX1weClgO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRpbVNpYmxpbmdzKSB7XG4gICAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZChjbHMuZGltbWVkKTtcbiAgICB9XG4gIH1cblxuICBsaXN0TW91c2VPdXQgKCkge1xuICAgIGlmICghZXZlbnQudGFyZ2V0LmRhdGFzZXQudG9vbHRpcENvbnRlbnQpIHtcbiAgICAgIHRoaXMuaGlkZVRvb2x0aXAoKTtcbiAgICB9XG4gIH1cblxuICBoaWRlVG9vbHRpcCAoKSB7XG4gICAgdGhpcy50b29sdGlwLmRhdGFzZXQudmlzaWJsZSA9IDA7XG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xzLmRpbW1lZCk7XG4gIH1cbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkobW9kdWxlLmlkLCBjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBuaWNlIG92ZXJ2aWV3OlxuLy8gaHR0cHM6Ly9ncnJyLnRlY2gvcG9zdHMvY3JlYXRlLWRvbS1ub2RlLWZyb20taHRtbC1zdHJpbmcvXG5cbi8vIG5vIElFMTFcbmNvbnN0IHN1cHBvcnRzVGVtcGxhdGUgPSAnY29udGVudCcgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblxuY29uc3QgY3JlYXRlRWxlbWVudCA9IHN1cHBvcnRzVGVtcGxhdGVcbiAgPyBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgIH1cbiAgOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgIHJldHVybiBkaXYuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgfTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZUhUTUwgKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nXG4gICAgLnJlcGxhY2UoLyYvZywgJyYnKVxuICAgIC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JylcbiAgICAucmVwbGFjZSgvJy9nLCAnJiMzOTsnKVxuICAgIC5yZXBsYWNlKC88L2csICc8JylcbiAgICAucmVwbGFjZSgvPi9nLCAnPicpO1xufVxuIiwiLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vaWxpYWthbi9kZDZhZDBkYWRiNjYzMDU0NGQxMTg3YzRjOTRjY2Y0MFxuaW1wb3J0IG5vdGlmaWVyIGZyb20gJy4uL2xpYi9ub3RpZmllci5qcyc7XG5cbi8vIGNvbnNvbGUuY2xlYXIoKTtcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZldGNoSlNPTiAodXJsKSB7XG4gIGxldCByZXNwb25zZTtcblxuICAvLyBFcnJvciB3aGlsZSBsb2FkaW5nIChiYWQgdXJsIG9yIGNvbm5lY3Rpb24pXG4gIHRyeSB7XG4gICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IG5ldyBGZXRjaEVycm9yKHJlc3BvbnNlLCBudWxsLCBgTmV0d29yayBlcnJvciBmb3IgdXJsICR7dXJsfWApO1xuICB9XG5cbiAgLy8gQmFkIHJlc3BvbnNlIGZyb20gc2VydmVyXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICBsZXQgYm9keTtcbiAgICBjb25zdCBzdGF0dXNUZXh0ID0gcmVzcG9uc2Uuc3RhdHVzVGV4dDtcblxuICAgIHRyeSB7XG4gICAgICBib2R5ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgLy8gY2FuJ3QgcmVwcm9kdWNlIGdldHRpbmcgYm9keSB3aXRoIG5vdCBvayBzdGF0dXNcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH1cbiAgICBsZXQgbWVzc2FnZSA9IGBFcnJvciAke3Jlc3BvbnNlLnN0YXR1c30gZm9yIHVybCAke3VybH1gO1xuXG4gICAgaWYgKHN0YXR1c1RleHQpIHtcbiAgICAgIG1lc3NhZ2UgKz0gYDogJHtzdGF0dXNUZXh0fWA7XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IEZldGNoRXJyb3IocmVzcG9uc2UsIGJvZHksIG1lc3NhZ2UpO1xuICB9XG5cbiAgLy8gUmVzcG9uc2UgaXMgY29ycmVjdCwgdHJ5IHRvIGdldCBkYXRhXG4gIHRyeSB7XG4gICAgcmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgbmV3IEZldGNoRXJyb3IocmVzcG9uc2UsIG51bGwsIGVycm9yLm1lc3NhZ2UpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3BvbnNlO1xufVxuXG5jbGFzcyBGZXRjaEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAocmVzcG9uc2UsIGJvZHksIG1lc3NhZ2UpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLm5hbWUgPSAnRmV0Y2hFcnJvcic7XG5cbiAgICB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgfVxufVxuXG4vLyBoYW5kbGUgdW5jYXVnaHQgZmFpbGVkIGZldGNoIHRocm91Z2hcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd1bmhhbmRsZWRyZWplY3Rpb24nLCBldmVudCA9PiB7XG4gIGlmIChldmVudC5yZWFzb24gaW5zdGFuY2VvZiBGZXRjaEVycm9yKSB7XG4gICAgbm90aWZpZXIoZXZlbnQucmVhc29uLm1lc3NhZ2UsICdlcnJvcicpO1xuICB9XG59KTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbGxUZW1wbGF0ZSAoeyB0bXBsLCBkYXRhIH0pIHtcbiAgaWYgKCF0bXBsIHx8ICFkYXRhKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIHRtcGwucmVwbGFjZSgveyhbXlwiXXsxLH0pfS9nLCAobWF0Y2gsIHN0cikgPT4ge1xuICAgIGlmIChkYXRhW3N0cl0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGRhdGFbc3RyXTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdERhdGUgKHN0cikge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoc3RyKS50b0RhdGVTdHJpbmcoKTtcbiAgY29uc3QgZGF0YVBhcnRzID0gZGF0ZS5zcGxpdCgnICcpO1xuICBjb25zdCBtb250aCA9IGRhdGFQYXJ0c1sxXTtcbiAgY29uc3QgZGF5ID0gZGF0YVBhcnRzWzJdO1xuICBjb25zdCB5ZWFyID0gZGF0YVBhcnRzWzNdO1xuXG4gIHJldHVybiBgJHttb250aH0gJHtkYXl9LCAke3llYXJ9YDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdFRvdGFsIChudW0pIHtcbiAgbGV0IGZvcm1hdHRlZCA9IG51bTtcbiAgaWYgKG51bSA+PSAxMDAwKSB7XG4gICAgY29uc3QgdGFpbCA9IG51bSAlIDEwMDA7XG4gICAgZm9ybWF0dGVkID0gYCR7KG51bSAtIHRhaWwpIC8gMTAwMH0sJHt0YWlsfWA7XG4gIH1cblxuICByZXR1cm4gYCQke2Zvcm1hdHRlZH1gO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGF0ZUZyb21TdHJpbmcgKHN0cikge1xuICBjb25zdCBbZGF5LCBtb250aCwgeWVhcl0gPSBzdHIuc3BsaXQoJy8nKTtcbiAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5KTtcbn07XG4iLCIvLyBEaXJ0eSB3YXkgdG8gZ2V0IHdlZWtkYXlzIGluIGN1cnJlbnQgbGFuZ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2Vla0RheXMgKHRhZykge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoMTk3MCwgMCwgNSk7XG4gIGxldCB3ZWVrZGF5c1N0ciA9ICcnO1xuICBsZXQgY291bnRlciA9IDA7XG5cbiAgd2hpbGUgKGNvdW50ZXIgPCA3KSB7XG4gICAgY29uc3QgZGF5bmFtZSA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoJ2RlZmF1bHQnLCB7IHdlZWtkYXk6ICduYXJyb3cnIH0pO1xuICAgIHdlZWtkYXlzU3RyICs9IGA8JHt0YWd9PiR7ZGF5bmFtZX08LyR7dGFnfT5gO1xuICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIDEpO1xuICAgIGNvdW50ZXIrKztcbiAgfVxuXG4gIHJldHVybiB3ZWVrZGF5c1N0cjtcbn1cbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vY3JlYXRlRWxlbWVudC5qcyc7XG5pbXBvcnQgZXNjYXBlSFRNTCBmcm9tICcuL2VzY2FwZUhUTUwuanMnO1xuaW1wb3J0IGZpbGxUZW1wbGF0ZSBmcm9tICcuL2ZpbGxUZW1wbGF0ZS5qcyc7XG5pbXBvcnQgZm9ybWF0RGF0ZSBmcm9tICcuL2Zvcm1hdERhdGUuanMnO1xuaW1wb3J0IGZvcm1hdFRvdGFsIGZyb20gJy4vZm9ybWF0VG90YWwuanMnO1xuaW1wb3J0IGdldERhdGVGcm9tU3RyaW5nIGZyb20gJy4vZ2V0RGF0ZUZyb21TdHJpbmcuanMnO1xuaW1wb3J0IGdldFdlZWtEYXlzIGZyb20gJy4vZ2V0V2Vla0RheXMuanMnO1xuaW1wb3J0IHRocm90dGxlIGZyb20gJy4vdGhyb3R0bGUuanMnO1xuaW1wb3J0IGZldGNoSnNvbiBmcm9tICcuL2ZldGNoSnNvbi5qcyc7XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUVsZW1lbnQsXG4gIGVzY2FwZUhUTUwsXG4gIGZpbGxUZW1wbGF0ZSxcbiAgZm9ybWF0RGF0ZSxcbiAgZm9ybWF0VG90YWwsXG4gIGdldERhdGVGcm9tU3RyaW5nLFxuICBnZXRXZWVrRGF5cyxcbiAgdGhyb3R0bGUsXG4gIGZldGNoSnNvblxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRocm90dGxlIChmdW5jLCBjb250ZXh0LCB0aW1lb3V0KSB7XG4gIGxldCBhcmdzO1xuICBsZXQgaXNXYWl0aW5nID0gZmFsc2U7XG4gIGxldCBpc0ZpcnN0Q2FsbCA9IHRydWU7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgaWYgKGlzRmlyc3RDYWxsKSB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIC4uLmFyZ3MpO1xuICAgICAgaXNGaXJzdENhbGwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIWlzV2FpdGluZykge1xuICAgICAgaXNXYWl0aW5nID0gdHJ1ZTtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgLi4uYXJncyk7XG4gICAgICAgIGlzV2FpdGluZyA9IGZhbHNlO1xuICAgICAgfSwgdGltZW91dCk7XG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IHJlbmRlclBhZ2UgZnJvbSAnLi9yZW5kZXJQYWdlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMucm91dGVzID0gW107XG5cbiAgICB0aGlzLmRvY3VtZW50Q2xpY2sgPSB0aGlzLmRvY3VtZW50Q2xpY2suYmluZCh0aGlzKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kb2N1bWVudENsaWNrKTtcbiAgfVxuXG4gIHN0YXRpYyBpbnN0YW5jZSAoKSB7XG4gICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgUm91dGVyKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgfVxuXG4gIGFkZFJvdXRlIChwYXR0ZXJuLCBwYXRoKSB7XG4gICAgdGhpcy5yb3V0ZXMucHVzaCh7IHBhdHRlcm4sIHBhdGggfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXROb3RGb3VuZFBhZ2UgKHBhdGgpIHtcbiAgICB0aGlzLm5vdEZvdW5kUGFnZVBhdGggPSBwYXRoO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbmF2aWdhdGUgKGhyZWYpIHtcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBocmVmKTtcbiAgICB0aGlzLnJvdXRlKCk7XG4gIH1cblxuICBhc3luYyByb3V0ZSAoKSB7XG4gICAgY29uc3Qgc3RyaXBwZWRQYXRoID0gY2xlYW5QYXRoKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgbGV0IG1hdGNoO1xuXG4gICAgZm9yIChjb25zdCByb3V0ZSBvZiB0aGlzLnJvdXRlcykge1xuICAgICAgbWF0Y2ggPSBzdHJpcHBlZFBhdGgubWF0Y2gocm91dGUucGF0dGVybik7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgdGhpcy5wYWdlID0gYXdhaXQgdGhpcy5jaGFuZ2VQYWdlKHJvdXRlLnBhdGgsIG1hdGNoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFtYXRjaCkge1xuICAgICAgdGhpcy5wYWdlID0gYXdhaXQgdGhpcy5jaGFuZ2VQYWdlKHRoaXMubm90Rm91bmRQYWdlUGF0aCk7XG4gICAgfVxuXG4gICAgLy8gY3VzdG9tIGV2ZW50IGhlcmVcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZVBhZ2UgKHBhdGgsIG1hdGNoKSB7XG4gICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2UuZGVzdHJveSkge1xuICAgICAgdGhpcy5wYWdlLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICB0aGlzLnBhZ2UgPSBhd2FpdCByZW5kZXJQYWdlKHBhdGgsIG1hdGNoKTtcbiAgfVxuXG4gIGFkZExpc3RlbmVyICgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoKSA9PiB0aGlzLnJvdXRlKCkpO1xuICAgIHRoaXMucm91dGUoKTtcbiAgfVxuXG4gIGRvY3VtZW50Q2xpY2sgKGV2ZW50KSB7XG4gICAgY29uc3QgbGluayA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdhJyk7XG5cbiAgICBpZiAoIWxpbmspIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBocmVmID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcblxuICAgIGlmIChocmVmICYmIGhyZWYuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5uYXZpZ2F0ZShocmVmKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYW5QYXRoIChwYXRoKSB7XG4gIHJldHVybiBkZWNvZGVVUkkocGF0aClcbiAgICAucmVwbGFjZSgvXlxcL3xcXC8kLywgJycpXG4gICAgLnJlcGxhY2UoL1xcPy4qJC8sICcnKVxuICAgIC5yZXBsYWNlKC8jLiokLywgJycpO1xufVxuIiwiaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbi9pbmRleC5qcyc7XG5cbmNvbnN0IG5vdGlmQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5ub3RpZkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdub3RpZmljYXRpb25zJyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZChub3RpZkNvbnRhaW5lcik7XG5cbmxldCBub3RpZmljYXRpb25zID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIG5vdGlmeSAobWVzc2FnZSwgdHlwZSkge1xuICBjb25zdCBub3RpZmljYXRpb24gPSBuZXcgTm90aWZpY2F0aW9uKHtcbiAgICBtZXNzYWdlLFxuICAgIGNvbnRhaW5lcjogbm90aWZDb250YWluZXIsXG4gICAgdHlwZVxuICB9KTtcblxuICBub3RpZmljYXRpb25zLnB1c2gobm90aWZpY2F0aW9uKTtcblxuICBpZiAobm90aWZpY2F0aW9uLmVsZW0ub2Zmc2V0VG9wIDwgMCkge1xuICAgIG5vdGlmaWNhdGlvbnMgPSBub3RpZmljYXRpb25zLmZpbHRlcihub3RpZmljYXRpb24gPT4ge1xuICAgICAgcmV0dXJuICFub3RpZmljYXRpb24uaXNGaW5pc2hlZDtcbiAgICB9KTtcbiAgICBub3RpZmljYXRpb25zLnNoaWZ0KCkuaGlkZUVsZW0oKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcmVuZGVyUGFnZSAocGF0aCwgbWF0Y2gpIHtcbiAgY29uc3QgeyBkZWZhdWx0OiBQYWdlIH0gPSBhd2FpdCBpbXBvcnQoYC4uL3BhZ2VzLyR7cGF0aH0vaW5kZXguanNgKTtcbiAgY29uc3QgcGFnZSA9IG5ldyBQYWdlKG1hdGNoKTtcbiAgY29uc3QgcmVuZGVyZWRQYWdlID0gYXdhaXQgcGFnZS5yZW5kZXIoKTtcblxuICBjb25zdCBjb250ZW50RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnRlbnRFbGVtLmlubmVySFRNTCA9ICcnO1xuICBjb250ZW50RWxlbS5hcHBlbmQocmVuZGVyZWRQYWdlKTtcbn1cbiIsInZhciBtYXAgPSB7XG5cdFwiLi9jYXRlZ29yaWVzL2luZGV4LmpzXCI6IFtcblx0XHRcIi4vc3JjL3BhZ2VzL2NhdGVnb3JpZXMvaW5kZXguanNcIixcblx0XHQxXG5cdF0sXG5cdFwiLi9kYXNoYm9hcmQvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zcmMvcGFnZXMvZGFzaGJvYXJkL2luZGV4LmpzXCIsXG5cdFx0MlxuXHRdLFxuXHRcIi4vZXJyb3I0MDQvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zcmMvcGFnZXMvZXJyb3I0MDQvaW5kZXguanNcIixcblx0XHQzXG5cdF0sXG5cdFwiLi9wcm9kdWN0cy9lZGl0L2luZGV4LmpzXCI6IFtcblx0XHRcIi4vc3JjL3BhZ2VzL3Byb2R1Y3RzL2VkaXQvaW5kZXguanNcIixcblx0XHQwXG5cdF0sXG5cdFwiLi9wcm9kdWN0cy9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NyYy9wYWdlcy9wcm9kdWN0cy9pbmRleC5qc1wiLFxuXHRcdDRcblx0XVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHQocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGlkcyA9IG1hcFtyZXFdLCBpZCA9IGlkc1swXTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShpZHNbMV0pLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gXCIuL3NyYy9wYWdlcyBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC9pbmRleFxcXFwuanMkXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==