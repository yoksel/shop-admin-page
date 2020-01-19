(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

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
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _helpers_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/index.js */ "./src/helpers/index.js");
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

    this.apiUrl = process.env.API_URL || 'https://course-js.javascript.ru';
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcHJvZHVjdHMvZWRpdC9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9wcm9kdWN0cy9lZGl0L2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Byb2R1Y3RzL2VkaXQvZmllbGRzLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9wcm9kdWN0cy9lZGl0L2ZpZWxkc09yZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9wcm9kdWN0cy9lZGl0L2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Byb2R1Y3RzL2VkaXQvaWNvbi10cmFzaC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Byb2R1Y3RzL2VkaXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Byb2R1Y3RzL2VkaXQvc3RhdHVzVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcHJvZHVjdHMvZWRpdC9zdHlsZS5zY3NzP2QzMTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Byb2R1Y3RzL2VkaXQvdGVtcGxhdGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsOEdBQXlEO0FBQ25HLHNDQUFzQyxtQkFBTyxDQUFDLG9IQUE0RDtBQUMxRyxvQ0FBb0MsbUJBQU8sQ0FBQyxrRUFBa0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFTLGtCQUFrQix3QkFBd0IsRUFBRSxpREFBaUQsa0JBQWtCLDBDQUEwQyxtQkFBbUIsRUFBRSx5QkFBeUIsY0FBYyxlQUFlLDBCQUEwQixFQUFFLHlCQUF5Qiw0QkFBNEIsRUFBRSwrQkFBK0IsOEJBQThCLEVBQUUsK0JBQStCLDhCQUE4QixFQUFFLGlDQUFpQyw4QkFBOEIsRUFBRSwrQ0FBK0MsdUJBQXVCLEVBQUUseUJBQXlCLHVCQUF1QixXQUFXLGFBQWEs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ZCxZQUFZLE1BQU07QUFDbEI7O0FBRU8scUNBQXFDLG1EQUFHLE9BQU87QUFDdEQsR0FBRzs7QUFFSDtBQUNBLGFBQWEsbURBQUcsT0FBTyxHQUFHLG1EQUFHLGFBQWE7QUFDMUM7QUFDQSxXQUFXLEdBQUc7QUFDZCxZQUFZLE1BQU07QUFDbEI7O0FBRU8sdUNBQXVDLG1EQUFHLE9BQU87QUFDeEQsR0FBRzs7QUFFSDtBQUNBLGFBQWEsbURBQUcsT0FBTyxHQUFHLG1EQUFHLGVBQWU7QUFDNUMsV0FBVyxHQUFHLEdBQUcsTUFBTTtBQUN2Qjs7QUFFTyxxQ0FBcUMsbURBQUcsT0FBTztBQUN0RCxHQUFHOztBQUVIO0FBQ0EsYUFBYSxtREFBRyxPQUFPLEdBQUcsbURBQUcsYUFBYTtBQUMxQyxXQUFXLEdBQUc7QUFDZCxLQUFLO0FBQ0w7QUFDQSIsImZpbGUiOiIwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi9pY29uLXRyYXNoLnN2Z1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnByb2R1Y3QtZm9ybSB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtOyB9XFxuXFxuLnByb2R1Y3QtZm9ybV9fbGlzdCxcXG4ucHJvZHVjdC1mb3JtX19mb290ZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBncmlkLWdhcDogMXJlbTsgfVxcblxcbi5wcm9kdWN0LWZvcm1fX2xpc3Qge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgfVxcblxcbi5wcm9kdWN0LWZvcm1fX2l0ZW0ge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7IH1cXG4gIC5wcm9kdWN0LWZvcm1fX2l0ZW0tLWZ1bGwge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMzsgfVxcbiAgLnByb2R1Y3QtZm9ybV9faXRlbS0tdGlueSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAxOyB9XFxuICAucHJvZHVjdC1mb3JtX19pdGVtLS1mb2xsb3cge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogYXV0bzsgfVxcbiAgLnByb2R1Y3QtZm9ybV9faXRlbSArIC5wcm9kdWN0LWZvcm1fX2l0ZW0ge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtOyB9XFxuXFxuLnByb2R1Y3QtZm9ybV9fbGluayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7IH1cXG5cXG4ucHJvZHVjdC1mb3JtX19pbnB1dC0tdGV4dGFyZWEge1xcbiAgbWluLWhlaWdodDogMjAwcHg7IH1cXG5cXG4ucHJvZHVjdC1mb3JtX19pbWFnZXMtbGlzdCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XFxuXFxuLnByb2R1Y3QtZm9ybV9faW1hZ2VzLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAuNXJlbTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyZXktZXh0cmEtbGlnaHQpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTsgfVxcbiAgLnByb2R1Y3QtZm9ybV9faW1hZ2VzLWl0ZW0gKyAucHJvZHVjdC1mb3JtX19pbWFnZXMtaXRlbSB7XFxuICAgIG1hcmdpbi10b3A6IC41cmVtOyB9XFxuXFxuLnByb2R1Y3QtZm9ybV9faW1hZ2Utd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4ucHJvZHVjdC1mb3JtX19pbWFnZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA4MHB4O1xcbiAgbWluLXdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXktbGlnaHQpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTsgfVxcblxcbi5wcm9kdWN0LWZvcm1fX3ByZXZpZXcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9wYWNpdHk6IDA7XFxuICBwYWRkaW5nOiAuMjVlbTtcXG4gIGJhY2tncm91bmQtb3JpZ2luOiBjb250ZW50LWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleS1saWdodCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjI1czsgfVxcblxcbi5wcm9kdWN0LWZvcm1fX3ByZXZpZXc6aG92ZXIge1xcbiAgd2lkdGg6IDMwMCU7XFxuICBoZWlnaHQ6IDMwMCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTM1JSkgdHJhbnNsYXRlWSgtMzUlKTtcXG4gIG9wYWNpdHk6IDE7IH1cXG5cXG4ucHJvZHVjdC1mb3JtX19pbWFnZS1zb3VyY2Uge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07IH1cXG5cXG4ucHJvZHVjdC1mb3JtX19pbWFnZS1yZW1vdmUge1xcbiAgd2lkdGg6IDNyZW07XFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIDUwJSA1MCUgbm8tcmVwZWF0O1xcbiAgZm9udC1zaXplOiAwO1xcbiAgYm9yZGVyOiBub25lOyB9XFxuXFxuLnByb2R1Y3QtZm9ybV9fZm9vdGVyIHtcXG4gIG1hcmdpbi10b3A6IDJyZW07IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBmb3JtOiAncHJvZHVjdC1mb3JtJyxcbiAgbGlzdDogJ3Byb2R1Y3QtZm9ybV9fbGlzdCcsXG4gIGl0ZW06ICdwcm9kdWN0LWZvcm1fX2l0ZW0nLFxuICBpdGVtVGlueTogJ3Byb2R1Y3QtZm9ybV9faXRlbS0tdGlueScsXG4gIGl0ZW1Gb2xsb3c6ICdwcm9kdWN0LWZvcm1fX2l0ZW0tLWZvbGxvdycsXG4gIGl0ZW1GdWxsOiAncHJvZHVjdC1mb3JtX19pdGVtLS1mdWxsJyxcbiAgbGFiZWw6ICdwcm9kdWN0LWZvcm1fX2xhYmVsJyxcbiAgaW5wdXQ6ICdwcm9kdWN0LWZvcm1fX2lucHV0JyxcbiAgaW5wdXRUZXh0OiAncHJvZHVjdC1mb3JtX19pbnB1dC0tdGV4dCcsXG4gIGlucHV0TnVtYmVyOiAncHJvZHVjdC1mb3JtX19pbnB1dC0tbnVtYmVyJyxcbiAgaW5wdXRTZWxlY3Q6ICdwcm9kdWN0LWZvcm1fX2lucHV0LS1zZWxlY3QnLFxuICBpbnB1dFRleHRhcmVhOiAncHJvZHVjdC1mb3JtX19pbnB1dC0tdGV4dGFyZWEnLFxuICBpbWdzTGlzdDogJ3Byb2R1Y3QtZm9ybV9faW1hZ2VzLWxpc3QnLFxuICBpbWdzSXRlbTogJ3Byb2R1Y3QtZm9ybV9faW1hZ2VzLWl0ZW0nLFxuICBpbWc6ICdwcm9kdWN0LWZvcm1fX2ltYWdlJyxcbiAgaW1nV3JhcHBlcjogJ3Byb2R1Y3QtZm9ybV9faW1hZ2Utd3JhcHBlcicsXG4gIGltZ1NvdXJjZTogJ3Byb2R1Y3QtZm9ybV9faW1hZ2Utc291cmNlJyxcbiAgaW1nUmVtb3ZlOiAncHJvZHVjdC1mb3JtX19pbWFnZS1yZW1vdmUnLFxuICBwcmV2aWV3OiAncHJvZHVjdC1mb3JtX19wcmV2aWV3JyxcbiAgZm9vdGVyOiAncHJvZHVjdC1mb3JtX19mb290ZXInLFxuICBzdWJtaXQ6ICdwcm9kdWN0LWZvcm1fX3N1Ym1pdCdcbn07XG4iLCJpbXBvcnQgeyBpbnB1dFRleHQsIGlucHV0TnVtYmVyLCBpbnB1dFRleHRhcmVhLCBpbnB1dFNlbGVjdCB9IGZyb20gJy4vdGVtcGxhdGVzLmpzJztcbmltcG9ydCBzdGF0dXNUZXh0IGZyb20gJy4vc3RhdHVzVGV4dC5qcyc7XG5pbXBvcnQgeyBmaWxsVGVtcGxhdGUgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2luZGV4LmpzJztcbmltcG9ydCB7IGNhdGVnb3JpZXNUb0ZsYXRMaXN0LCBnZXRPcHRpb25zLCBnZXRJbWdzTGlzdE1hcmt1cCB9IGZyb20gJy4vaGVscGVycyc7XG5cbi8vIFJlbmRlcmluZyBtZXRob2RzIGZvciBwcm9kdWN0IGlucHV0c1xuZXhwb3J0IGRlZmF1bHQge1xuICBpbWFnZXM6IHtcbiAgICByZW5kZXIgKHsgaW1hZ2VzIH0pIHtcbiAgICAgIGlmICghaW1hZ2VzKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdldEltZ3NMaXN0TWFya3VwKGltYWdlcyk7XG4gICAgfSxcbiAgICBjb21wYXJlOiBudWxsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgcmVuZGVyICh7IHRpdGxlIH0pIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGlkOiAndGl0bGUnLFxuICAgICAgICBmaWVsZE5hbWU6ICdOYW1lJyxcbiAgICAgICAgdmFsdWU6IHRpdGxlXG4gICAgICB9O1xuICAgICAgcmV0dXJuIGZpbGxUZW1wbGF0ZSh7XG4gICAgICAgIHRtcGw6IGlucHV0VGV4dCxcbiAgICAgICAgZGF0YVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBkZXNjcmlwdGlvbjoge1xuICAgIHJlbmRlciAoeyBkZXNjcmlwdGlvbiB9KSB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBpZDogJ2Rlc2NyaXB0aW9uJyxcbiAgICAgICAgZmllbGROYW1lOiAnRGVzY3JpcHRpb24nLFxuICAgICAgICB2YWx1ZTogZGVzY3JpcHRpb25cbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBmaWxsVGVtcGxhdGUoe1xuICAgICAgICB0bXBsOiBpbnB1dFRleHRhcmVhLFxuICAgICAgICBkYXRhXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHN1YmNhdGVnb3J5OiB7XG4gICAgcmVuZGVyICh7IGNhdGVnb3JpZXMsIHN1YmNhdGVnb3J5IH0pIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGlkOiAnc3ViY2F0ZWdvcnknLFxuICAgICAgICBmaWVsZE5hbWU6ICdDYXRlZ29yeScsXG4gICAgICAgIG9wdGlvbnM6IGdldE9wdGlvbnMoY2F0ZWdvcmllc1RvRmxhdExpc3QoY2F0ZWdvcmllcyksIHN1YmNhdGVnb3J5KVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGZpbGxUZW1wbGF0ZSh7XG4gICAgICAgIHRtcGw6IGlucHV0U2VsZWN0LFxuICAgICAgICBkYXRhXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHF1YW50aXR5OiB7XG4gICAgcmVuZGVyICh7IHF1YW50aXR5IH0pIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGlkOiAncXVhbnRpdHknLFxuICAgICAgICBmaWVsZE5hbWU6ICdRdWFudGl0eScsXG4gICAgICAgIHZhbHVlOiBxdWFudGl0eVxuICAgICAgfTtcbiAgICAgIHJldHVybiBmaWxsVGVtcGxhdGUoe1xuICAgICAgICB0bXBsOiBpbnB1dE51bWJlcixcbiAgICAgICAgZGF0YVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBwcmljZToge1xuICAgIHJlbmRlciAoeyBwcmljZSB9KSB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBpZDogJ3ByaWNlJyxcbiAgICAgICAgZmllbGROYW1lOiAnUHJpY2UnLFxuICAgICAgICB2YWx1ZTogcHJpY2VcbiAgICAgIH07XG4gICAgICByZXR1cm4gZmlsbFRlbXBsYXRlKHtcbiAgICAgICAgdG1wbDogaW5wdXROdW1iZXIsXG4gICAgICAgIGRhdGFcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgZGlzY291bnQ6IHtcbiAgICByZW5kZXIgKHsgZGlzY291bnQgfSkge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgaWQ6ICdkaXNjb3VudCcsXG4gICAgICAgIGZpZWxkTmFtZTogJ0Rpc2NvdW50JyxcbiAgICAgICAgdmFsdWU6IGRpc2NvdW50XG4gICAgICB9O1xuICAgICAgcmV0dXJuIGZpbGxUZW1wbGF0ZSh7XG4gICAgICAgIHRtcGw6IGlucHV0TnVtYmVyLFxuICAgICAgICBkYXRhXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHN0YXR1czoge1xuICAgIHJlbmRlciAoeyBzdGF0dXMgfSkge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgaWQ6ICdzdGF0dXMnLFxuICAgICAgICBmaWVsZE5hbWU6ICdTdGF0dXMnLFxuICAgICAgICB2YWx1ZTogc3RhdHVzLFxuICAgICAgICBvcHRpb25zOiBnZXRPcHRpb25zKE9iamVjdC52YWx1ZXMoc3RhdHVzVGV4dCksIHN0YXR1cylcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBmaWxsVGVtcGxhdGUoe1xuICAgICAgICB0bXBsOiBpbnB1dFNlbGVjdCxcbiAgICAgICAgZGF0YVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuIiwiaW1wb3J0IGNscyBmcm9tICcuL2NsYXNzZXMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gIHtcbiAgICBuYW1lOiAndGl0bGUnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZGVzY3JpcHRpb24nLFxuICAgIG1vZHM6IFtjbHMuaXRlbUZ1bGxdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnaW1hZ2VzJyxcbiAgICBtb2RzOiBbY2xzLml0ZW1GdWxsXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ3N1YmNhdGVnb3J5J1xuICB9LFxuICB7XG4gICAgbmFtZTogJ3ByaWNlJyxcbiAgICBtb2RzOiBbY2xzLml0ZW1UaW55XVxuICB9LFxuICB7XG4gICAgbmFtZTogJ2Rpc2NvdW50JyxcbiAgICBtb2RzOiBbY2xzLml0ZW1UaW55LCBjbHMuaXRlbUZvbGxvd11cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdxdWFudGl0eScsXG4gICAgbW9kczogW2Nscy5pdGVtVGlueV1cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdzdGF0dXMnLFxuICAgIG1vZHM6IFtjbHMuaXRlbVRpbnldXG4gIH1cbl07XG4iLCJpbXBvcnQgY2xzIGZyb20gJy4vY2xhc3Nlcy5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXRlZ29yaWVzVG9GbGF0TGlzdCAoY2F0ZWdvcmllcykge1xuICBjb25zdCBmbGF0TGlzdCA9IFtdO1xuXG4gIGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xuICAgIGZvciAoY29uc3Qgc3ViY2F0ZWdvcnkgb2YgY2F0ZWdvcnkuc3ViY2F0ZWdvcmllcykge1xuICAgICAgZmxhdExpc3QucHVzaCh7XG4gICAgICAgIHZhbHVlOiBzdWJjYXRlZ29yeS5pZCxcbiAgICAgICAgdGV4dDogYCR7Y2F0ZWdvcnkudGl0bGV9ID4gJHtzdWJjYXRlZ29yeS50aXRsZX1gXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmxhdExpc3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPcHRpb25zIChsaXN0LCBzZWxlY3RlZCkge1xuICByZXR1cm4gbGlzdFxuICAgIC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGl0ZW0udmFsdWUgfHwgaW5kZXg7XG4gICAgICBjb25zdCB0ZXh0ID0gaXRlbS50ZXh0IHx8IGl0ZW07XG4gICAgICBjb25zdCBpc1NlbGVjdGVkID0gdmFsdWUgPT09IHNlbGVjdGVkID8gJ3NlbGVjdGVkJyA6ICcnO1xuXG4gICAgICByZXR1cm4gYDxvcHRpb24gdmFsdWU9XCIke3ZhbHVlfVwiICR7aXNTZWxlY3RlZH0+JHt0ZXh0fTwvb3B0aW9uPmA7XG4gICAgfSlcbiAgICAuam9pbignJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbWdzTGlzdE1hcmt1cCAoaW1hZ2VzKSB7XG4gIGNvbnN0IGltYWdlc0l0ZW1zID0gaW1hZ2VzXG4gICAgLm1hcChpdGVtID0+IHtcbiAgICAgIHJldHVybiBgPGxpIGNsYXNzPVwiJHtjbHMuaW1nc0l0ZW19XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCIke2Nscy5pbWdXcmFwcGVyfVwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiJHtpdGVtLnVybH1cIiBjbGFzcz1cIiR7Y2xzLmltZ31cIj5cbiAgICAgICAgICA8c3BhbiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgke2l0ZW0udXJsfSlcIiBjbGFzcz1cIiR7Y2xzLnByZXZpZXd9XCI+PHNwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cIiR7Y2xzLmltZ1NvdXJjZX1cIj4ke2l0ZW0uc291cmNlfTwvc3Bhbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCIke2Nscy5pbWdSZW1vdmV9XCI+UmVtb3ZlPC9idXR0b24+XG4gICAgICA8L2xpPmA7XG4gICAgfSk7XG5cbiAgcmV0dXJuIGAgKyB1cGxvYWRcbiAgICA8dWwgY2xhc3M9XCIke2Nscy5pbWdzTGlzdH1cIiBpcz1cImRyYWdnYWJsZS1saXN0XCI+JHtpbWFnZXNJdGVtcy5qb2luKCcgJyl9PC91bD5gO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjkyNjc5MTU0YWZkZTA4MTVjNjIyMmM3YzA0MDFmNDQyLnN2Z1wiOyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGZldGNoSnNvbiB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvaW5kZXguanMnO1xuaW1wb3J0IFBhZ2VNZXNzYWdlIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvUGFnZU1lc3NhZ2UvaW5kZXguanMnO1xuaW1wb3J0IGZpZWxkcyBmcm9tICcuL2ZpZWxkcy5qcyc7XG5pbXBvcnQgZmllbGRzT3JkZXIgZnJvbSAnLi9maWVsZHNPcmRlci5qcyc7XG5pbXBvcnQgY2xzIGZyb20gJy4vY2xhc3Nlcy5qcyc7XG5pbXBvcnQgeyBoZWFkZXIgfSBmcm9tICcuL3RlbXBsYXRlcyc7XG5cbmltcG9ydCAnLi9pY29uLXRyYXNoLnN2Zyc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IgKG1hdGNoKSB7XG4gICAgdGhpcy5pZCA9IG1hdGNoWzBdLnJlcGxhY2UoJ3Byb2R1Y3RzLycsICcnKTtcblxuICAgIGlmICghbWF0Y2hbMF0pIHtcbiAgICAgIHRoaXMuaWQgPSAnM2Qtb2Noa2ktb3B0b21hLXpkMzAyJztcbiAgICB9XG5cbiAgICB0aGlzLmFwaVVybCA9IHByb2Nlc3MuZW52LkFQSV9VUkwgfHwgJ2h0dHBzOi8vY291cnNlLWpzLmphdmFzY3JpcHQucnUnO1xuICAgIHRoaXMuZmV0Y2hQcm9kdWN0VXJsID0gdGhpcy5hcGlVcmwgKyBgL2FwaS9yZXN0L3Byb2R1Y3RzP2lkPSR7dGhpcy5pZH1gO1xuICAgIHRoaXMuZmV0Y2hDYXRlZ29yaWVzVXJsID0gdGhpcy5hcGlVcmwgKyAnL2FwaS9yZXN0L2NhdGVnb3JpZXM/X3NvcnQ9d2VpZ2h0Jl9yZWZzPXN1YmNhdGVnb3J5JztcbiAgfVxuXG4gIGFzeW5jIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBwcm9kdWN0RGF0YSwgY2F0ZWdvcmllcywgZXJyb3JNZXNzYWdlIH0gPSBhd2FpdCB0aGlzLmxvYWREYXRhKCk7XG5cbiAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChgPGRpdiBjbGFzcz1cInBhZ2UtY29udGVudFwiPlxuICAgICAgICAke2hlYWRlcn1cblxuICAgICAgICAke2Vycm9yTWVzc2FnZS5vdXRlckhUTUx9XG4gICAgICA8L2Rpdj5cbiAgICAgIGApO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0RGF0YVswXTtcbiAgICBjb25zdCBpbnB1dHMgPSBbXTtcblxuICAgIGZvciAoY29uc3QgeyBuYW1lLCBtb2RzIH0gb2YgZmllbGRzT3JkZXIpIHtcbiAgICAgIGlmIChmaWVsZHNbbmFtZV0pIHtcbiAgICAgICAgbGV0IHBhcmFtcyA9IHByb2R1Y3Q7XG5cbiAgICAgICAgaWYgKG5hbWUgPT09ICdzdWJjYXRlZ29yeScpIHtcbiAgICAgICAgICBwYXJhbXMgPSB7XG4gICAgICAgICAgICAuLi5wYXJhbXMsXG4gICAgICAgICAgICBjYXRlZ29yaWVzXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZmllbGRzW25hbWVdLnJlbmRlcihwYXJhbXMpO1xuICAgICAgICBsZXQgY2xhc3NlcyA9IFtjbHMuaXRlbV07XG5cbiAgICAgICAgaWYgKG1vZHMpIHtcbiAgICAgICAgICBjbGFzc2VzID0gY2xhc3Nlcy5jb25jYXQobW9kcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dHMucHVzaChgPGxpIGNsYXNzPVwiJHtjbGFzc2VzLmpvaW4oJyAnKX1cIj4ke2lucHV0fTwvbGk+YCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoYDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRlbnRcIj5cbiAgICAgICR7aGVhZGVyfVxuXG4gICAgICA8Zm9ybSBhY3Rpb249XCJcIiBjbGFzcz1cIiR7Y2xzLmZvcm19fVwiPlxuICAgICAgICA8dWwgY2xhc3M9XCIke2Nscy5saXN0fVwiPlxuICAgICAgICAgICR7aW5wdXRzLmpvaW4oJ1xcbicpfVxuICAgICAgICA8L3VsPlxuXG4gICAgICAgIDxmb290ZXIgY2xhc3M9XCIke2Nscy5mb290ZXJ9XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIiR7Y2xzLnN1Ym1pdH1cIj5TYXZlPC9idXR0b24+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PmApO1xuICB9XG5cbiAgYXN5bmMgbG9hZERhdGEgKCkge1xuICAgIC8vIFRPRE86IGFkZCBsb2FkaW5nIGluZGljYXRvclxuICAgIHRyeSB7XG4gICAgICBjb25zdCBwcm9kdWN0RGF0YSA9IGF3YWl0IGZldGNoSnNvbih0aGlzLmZldGNoUHJvZHVjdFVybCk7XG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZmV0Y2hKc29uKHRoaXMuZmV0Y2hDYXRlZ29yaWVzVXJsKTtcblxuICAgICAgcmV0dXJuIHsgcHJvZHVjdERhdGEsIGNhdGVnb3JpZXMgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IG5ldyBQYWdlTWVzc2FnZSh7IGVycm9yIH0pO1xuICAgICAgcmV0dXJuIHsgZXJyb3JNZXNzYWdlOiBtZXNzYWdlLmVsZW0gfTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgMDogJ0Rpc2FibGVkJyxcbiAgMTogJ0VuYWJsZWQnXG59O1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKG1vZHVsZS5pZCwgY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IGNscyBmcm9tICcuL2NsYXNzZXMuanMnO1xuXG5leHBvcnQgY29uc3QgaGVhZGVyID0gYDxoZWFkZXIgY2xhc3M9XCJwYWdlLWNvbnRlbnRfX2hlYWRlclwiPlxuICA8aDEgY2xhc3M9XCJwYWdlLWNvbnRlbnRfX3RpdGxlXCI+XG4gIDxhIGhyZWY9XCIvcHJvZHVjdHNcIj5Qcm9kdWN0czwvYT5cbiAgL0VkaXQgUHJvZHVjdDwvaDE+XG48L2hlYWRlcj5gO1xuXG5leHBvcnQgY29uc3QgaW5wdXRUZXh0ID0gYDxsYWJlbCBjbGFzcz1cIiR7Y2xzLmxhYmVsfVwiPlxuICB7ZmllbGROYW1lfVxuXG4gIDxpbnB1dFxuICAgIGNsYXNzPVwiJHtjbHMuaW5wdXR9ICR7Y2xzLmlucHV0VGV4dH1cIlxuICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICBuYW1lPVwie2lkfVwiXG4gICAgdmFsdWU9XCJ7dmFsdWV9XCIvPlxuPC9sYWJlbD5gO1xuXG5leHBvcnQgY29uc3QgaW5wdXROdW1iZXIgPSBgPGxhYmVsIGNsYXNzPVwiJHtjbHMubGFiZWx9XCI+XG4gIHtmaWVsZE5hbWV9XG5cbiAgPGlucHV0XG4gICAgY2xhc3M9XCIke2Nscy5pbnB1dH0gJHtjbHMuaW5wdXROdW1iZXJ9XCJcbiAgICB0eXBlPVwibnVtYmVyXCJcbiAgICBuYW1lPVwie2lkfVwiXG4gICAgdmFsdWU9XCJ7dmFsdWV9XCIvPlxuPC9sYWJlbD5gO1xuXG5leHBvcnQgY29uc3QgaW5wdXRUZXh0YXJlYSA9IGA8bGFiZWwgY2xhc3M9XCIke2Nscy5sYWJlbH1cIj5cbiAge2ZpZWxkTmFtZX1cblxuICA8dGV4dGFyZWFcbiAgICBjbGFzcz1cIiR7Y2xzLmlucHV0fSAke2Nscy5pbnB1dFRleHRhcmVhfVwiXG4gICAgbmFtZT1cIntpZH1cIj57dmFsdWV9PC90ZXh0YXJlYT5cbjwvbGFiZWw+YDtcblxuZXhwb3J0IGNvbnN0IGlucHV0U2VsZWN0ID0gYDxsYWJlbCBjbGFzcz1cIiR7Y2xzLmxhYmVsfVwiPlxuICB7ZmllbGROYW1lfVxuXG4gIDxzZWxlY3RcbiAgICBjbGFzcz1cIiR7Y2xzLmlucHV0fSAke2Nscy5pbnB1dFNlbGVjdH1cIlxuICAgIG5hbWU9XCJ7aWR9XCI+XG4gICAge29wdGlvbnN9XG4gIDwvc2VsZWN0PlxuPC9sYWJlbD5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==