(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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

/***/ "./src/pages/categories/index.js":
/*!***************************************!*\
  !*** ./src/pages/categories/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _helpers_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/index.js */ "./src/helpers/index.js");
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
    this.apiUrl = process.env.API_URL || 'https://course-js.javascript.ru';
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2F0ZWdvcmllcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2F0ZWdvcmllcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2F0ZWdvcmllcy9zdHlsZXMuc2Nzcz9jMDA3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSxjQUFjLFFBQVMsc0JBQXNCLGdCQUFnQiwwQkFBMEIsY0FBYyxlQUFlLEVBQUUsc0NBQXNDLGtCQUFrQixzQkFBc0Isd0JBQXdCLEVBQUUsdUJBQXVCLGlDQUFpQyw2QkFBNkIsd0NBQXdDLEVBQUUsb0NBQW9DLGlCQUFpQixFQUFFLHFFQUFxRSx1QkFBdUIsRUFBRSxvQ0FBb0Msa0JBQWtCLHdCQUF3QiwwQkFBMEIsa0JBQWtCLEVBQUUscUVBQXFFLHdCQUF3QixFQUFFLDZCQUE2Qix3Q0FBd0Msd0NBQXdDLEVBQUUsOERBQThELHFCQUFxQixFQUFFLDBCQUEwQixzQkFBc0IsdUJBQXVCLEVBQUUsMEJBQTBCLGtCQUFrQix3QkFBd0IsZ0JBQWdCLGlCQUFpQixrQkFBa0IscUJBQXFCLG9CQUFvQixFQUFFLGtDQUFrQyxvQkFBb0IscUJBQXFCLGVBQWUsZ0JBQWdCLDBCQUEwQiwwQkFBMEIsdUJBQXVCLGtEQUFrRCxnQ0FBZ0MsaUNBQWlDLEVBQUUsMERBQTBELDhCQUE4QixFQUFFO0FBQ2hnRDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRTtBQUNGOztBQUV6Qzs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBLHVCQUF1QixZQUFZOztBQUVuQztBQUNBOztBQUVBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSx1RUFBYTtBQUMxQixVQUFVOztBQUVWLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsdUVBQWE7QUFDN0IsUUFBUTs7QUFFUjtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG1FQUFTOztBQUV4QyxjQUFjO0FBQ2QsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLHdFQUFXLEVBQUUsUUFBUTs7QUFFL0MsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLFlBQVk7QUFDbkM7QUFDQSxLQUFLO0FBQ0wsdUJBQXVCLFlBQVk7QUFDbkM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyxZQUFZLElBQUksWUFBWTtBQUM5RDs7QUFFQTs7QUFFQTtBQUNBLG1DQUFtQyxZQUFZLElBQUksV0FBVztBQUM5RDtBQUNBOztBQUVBLGdDQUFnQyxVQUFVO0FBQzFDLFVBQVU7QUFDVixVQUFVO0FBQ1YsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFNBQVMsR0FBRyxVQUFVLElBQUk7QUFDekM7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QyxZQUFZO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsWUFBWTtBQUN6RDtBQUNBO0FBQ0E7O0FBRUEsNkNBQTZDLFlBQVk7QUFDekQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsSUFBSSxHQUFHLFFBQVE7QUFDN0I7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDaEpELFVBQVUsbUJBQU8sQ0FBQyx5SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMsa09BQTRHOztBQUU5STs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLFFBQVM7O0FBRTFCOzs7O0FBSUEsMEIiLCJmaWxlIjoiMS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNhdGVnb3JpZXNfX2xpc3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLmNhdGVnb3JpZXNfX2xpc3QtLXN1YmNhdGVnb3JpZXMge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1hcmdpbi10b3A6IC41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxcblxcbi5jYXRlZ29yaWVzX19pdGVtIHtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LWxpZ2h0KTsgfVxcblxcbi5jYXRlZ29yaWVzX19pdGVtLS10b3BjYXRlZ29yeSB7XFxuICBtYXJnaW46IDFyZW07IH1cXG4gIC5jYXRlZ29yaWVzX19pdGVtLS10b3BjYXRlZ29yeSArIC5jYXRlZ29yaWVzX19pdGVtLS10b3BjYXRlZ29yeSB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07IH1cXG5cXG4uY2F0ZWdvcmllc19faXRlbS0tc3ViY2F0ZWdvcnkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMXJlbSAwIDJyZW07XFxuICBwYWRkaW5nOiAxcmVtOyB9XFxuICAuY2F0ZWdvcmllc19faXRlbS0tc3ViY2F0ZWdvcnkgKyAuY2F0ZWdvcmllc19faXRlbS0tc3ViY2F0ZWdvcnkge1xcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTsgfVxcblxcbi5jYXRlZ29yaWVzX19pdGVtLS1vcGVuIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyZXktZXh0cmEtbGlnaHQpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleS1saWdodCk7IH1cXG4gIC5jYXRlZ29yaWVzX19pdGVtLS1vcGVuIC5jYXRlZ29yaWVzX19saXN0LS1zdWJjYXRlZ29yaWVzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4uY2F0ZWdvcmllc19fY291bnRlciB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGNvbG9yOiB2YXIoLS1ncmV5KTsgfVxcblxcbi5jYXRlZ29yaWVzX190b2dnbGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLmNhdGVnb3JpZXNfX3RvZ2dsZXI6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcXG4gICAgYm9yZGVyOiAuNXJlbSBzb2xpZDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncmV5LWxpZ2h0KSB0cmFuc3BhcmVudDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4yNXM7IH1cXG4gIC5jYXRlZ29yaWVzX19pdGVtLS1vcGVuIC5jYXRlZ29yaWVzX190b2dnbGVyOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBmZXRjaEpzb24gfSBmcm9tICcuLi8uLi9oZWxwZXJzL2luZGV4LmpzJztcbmltcG9ydCBQYWdlTWVzc2FnZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BhZ2VNZXNzYWdlL2luZGV4LmpzJztcblxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxuY29uc3QgY2xzID0ge1xuICBlbGVtOiAnY2F0ZWdvcmllcycsXG4gIGxpc3Q6ICdjYXRlZ29yaWVzX19saXN0JyxcbiAgbGlzdFRvcDogJ2NhdGVnb3JpZXNfX2xpc3QtLXRvcGNhdGVnb3JpZXMnLFxuICBsaXN0U3ViY2F0czogJ2NhdGVnb3JpZXNfX2xpc3QtLXN1YmNhdGVnb3JpZXMnLFxuICBpdGVtOiAnY2F0ZWdvcmllc19faXRlbScsXG4gIGl0ZW1Ub3A6ICdjYXRlZ29yaWVzX19pdGVtLS10b3BjYXRlZ29yeScsXG4gIGl0ZW1TdWI6ICdjYXRlZ29yaWVzX19pdGVtLS1zdWJjYXRlZ29yeScsXG4gIGl0ZW1PcGVuOiAnY2F0ZWdvcmllc19faXRlbS0tb3BlbicsXG4gIHRvZ2dsZXI6ICdjYXRlZ29yaWVzX190b2dnbGVyJyxcbiAgY291bnRlcjogJ2NhdGVnb3JpZXNfX2NvdW50ZXInXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmFwaVVybCA9IHByb2Nlc3MuZW52LkFQSV9VUkwgfHwgJ2h0dHBzOi8vY291cnNlLWpzLmphdmFzY3JpcHQucnUnO1xuICAgIHRoaXMuZmV0Y2hVcmwgPSBgJHt0aGlzLmFwaVVybH0vYXBpL3Jlc3QvY2F0ZWdvcmllcz9fc29ydD13ZWlnaHQmX3JlZnM9c3ViY2F0ZWdvcnlgO1xuXG4gICAgdGhpcy5saXN0Q2xpY2sgPSB0aGlzLmxpc3RDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYXN5bmMgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGNhdGVnb3JpZXMsIG1lc3NhZ2UgfSA9IGF3YWl0IHRoaXMubG9hZERhdGEoKTtcbiAgICBjb25zdCBoZWFkZXIgPSBgPGhlYWRlciBjbGFzcz1cInBhZ2UtY29udGVudF9faGVhZGVyXCI+XG4gICAgICAgIDxoMSBjbGFzcz1cInBhZ2UtY29udGVudF9fdGl0bGVcIj5EYXNoYm9hcmQvQ2F0ZWdvcmllczwvaDE+XG4gICAgICA8L2hlYWRlcj5gO1xuXG4gICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KGA8ZGl2IGNsYXNzPVwicGFnZS1jb250ZW50XCI+XG4gICAgICAgICR7aGVhZGVyfVxuXG4gICAgICAgICR7bWVzc2FnZS5lbGVtLm91dGVySFRNTH1cbiAgICAgIDwvZGl2PlxuICAgICAgYCk7XG4gICAgfVxuXG4gICAgY29uc3QgbGlzdCA9IHRoaXMuY3JlYXRlTGlzdChjYXRlZ29yaWVzKTtcbiAgICB0aGlzLmVsZW0gPSBjcmVhdGVFbGVtZW50KGA8ZGl2IGNsYXNzPVwicGFnZS1jb250ZW50XCI+XG4gICAgICAke2hlYWRlcn1cblxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwYWdlLXNlY3Rpb24gY2F0ZWdvcmllc1wiPlxuICAgICAgICA8aDIgY2xhc3M9XCJwYWdlLXNlY3Rpb25fX3RpdGxlXCI+Q2F0ZWdvcmllczwvaDI+XG5cbiAgICAgICAgJHtsaXN0fVxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PmApO1xuXG4gICAgdGhpcy5hZGRFdmVudHMoKTtcblxuICAgIHJldHVybiB0aGlzLmVsZW07XG4gIH1cblxuICBhc3luYyBsb2FkRGF0YSAoKSB7XG4gICAgLy8gVE9ETzog0LjQvdC00LjQutCw0YLQvtGAINC30LDQs9GA0YPQt9C60LhcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGZldGNoSnNvbih0aGlzLmZldGNoVXJsKTtcblxuICAgICAgcmV0dXJuIHsgY2F0ZWdvcmllcyB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBTaG93IGVycm9yIG1lc3NhZ2UgdG8gdXNlclxuICAgICAgY29uc3QgbWVzc2FnZSA9IG5ldyBQYWdlTWVzc2FnZSh7IGVycm9yIH0pO1xuXG4gICAgICByZXR1cm4geyBtZXNzYWdlIH07XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlTGlzdCAoaXRlbXMsIGlzU3ViY2F0ID0gZmFsc2UpIHtcbiAgICBsZXQgaXRlbXNTdHIgPSAnJztcbiAgICBsZXQgbGlzdENsYXNzID0gY2xzLmxpc3RUb3A7XG4gICAgbGV0IGl0ZW1DbGFzcyA9IGNscy5pdGVtO1xuICAgIGxldCBpc0RyYWdnYWJsZUF0dHIgPSAnJztcblxuICAgIGlmIChpc1N1YmNhdCkge1xuICAgICAgbGlzdENsYXNzID0gY2xzLmxpc3RTdWJjYXRzO1xuICAgICAgaXRlbUNsYXNzICs9IGAgJHtjbHMuaXRlbVN1Yn1gO1xuICAgICAgaXNEcmFnZ2FibGVBdHRyID0gJ2lzPVwiZHJhZ2dhYmxlLWxpc3RcIic7XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZW1DbGFzcyArPSBgICR7Y2xzLml0ZW1Ub3B9YDtcbiAgICB9XG5cbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICBsZXQgc3ViQ2F0c0xpc3QgPSAnJztcbiAgICAgIGxldCB0aXRsZSA9IGl0ZW0udGl0bGU7XG4gICAgICBjb25zdCBzdWJDYXRzID0gaXRlbS5zdWJjYXRlZ29yaWVzO1xuICAgICAgbGV0IGNvdW50ZXIgPSAnJztcblxuICAgICAgaWYgKGlzU3ViY2F0KSB7XG4gICAgICAgIGNvbnN0IGNvdW50ZXJUZXh0ID0gdGhpcy5nZXRQbHVyYWwoaXRlbS5jb3VudCwgWydwcm9kdWN0JywgJ3Byb2R1Y3RzJ10pO1xuICAgICAgICBjb3VudGVyID0gYDxzcGFuIGNsYXNzPVwiJHtjbHMuY291bnRlcn1cIj4ke2NvdW50ZXJUZXh0fTwvc3Bhbj5gO1xuICAgICAgfVxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhpdGVtKVxuXG4gICAgICBpZiAoc3ViQ2F0cykge1xuICAgICAgICB0aXRsZSA9IGAgPGJ1dHRvbiBjbGFzcz1cIiR7Y2xzLnRvZ2dsZXJ9XCI+JHtpdGVtLnRpdGxlfTwvYnV0dG9uPmA7XG4gICAgICAgIHN1YkNhdHNMaXN0ID0gdGhpcy5jcmVhdGVMaXN0KHN1YkNhdHMsIHRydWUpO1xuICAgICAgfVxuXG4gICAgICBpdGVtc1N0ciArPSBgPGxpIGNsYXNzPVwiJHtpdGVtQ2xhc3N9XCI+XG4gICAgICAgICR7dGl0bGV9XG4gICAgICAgICR7Y291bnRlcn1cbiAgICAgICAgJHtzdWJDYXRzTGlzdH1cbiAgICAgIDwvbGk+YDtcbiAgICB9XG5cbiAgICByZXR1cm4gYDx1bFxuICAgICAgY2xhc3M9XCIke2Nscy5saXN0fSAke2xpc3RDbGFzc31cIiAke2lzRHJhZ2dhYmxlQXR0cn1cbiAgICAgID5cbiAgICAgICR7aXRlbXNTdHJ9XG4gICAgPC91bD5gO1xuICB9XG5cbiAgYWRkRXZlbnRzICgpIHtcbiAgICBjb25zdCBsaXN0ID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoYC4ke2Nscy5saXN0VG9wfWApO1xuICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmxpc3RDbGljayk7XG4gIH1cblxuICBsaXN0Q2xpY2sgKCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBldmVudC50YXJnZXQuY2xvc2VzdChgLiR7Y2xzLnRvZ2dsZXJ9YCk7XG4gICAgaWYgKCFjb250cm9sKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaXRlbVRvcCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KGAuJHtjbHMuaXRlbVRvcH1gKTtcbiAgICBpdGVtVG9wLmNsYXNzTGlzdC50b2dnbGUoY2xzLml0ZW1PcGVuKTtcbiAgfVxuXG4gIGdldFBsdXJhbCAobnVtLCB2YXJpYW50cykge1xuICAgIGxldCB2YXJpYW50ID0gdmFyaWFudHNbMF07XG4gICAgaWYgKG51bSAhPT0gMSkge1xuICAgICAgdmFyaWFudCA9IHZhcmlhbnRzWzFdO1xuICAgIH1cblxuICAgIHJldHVybiBgJHtudW19ICR7dmFyaWFudH1gO1xuICB9XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKG1vZHVsZS5pZCwgY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==