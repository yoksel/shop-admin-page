(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcHJvZHVjdHMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBdUQ7O0FBRXhDO0FBQ2Y7QUFDQSxXQUFXLHVFQUFhO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiI0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBhc3luYyByZW5kZXIgKCkge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KGA8ZGl2IGNsYXNzPVwicGFnZS1jb250ZW50XCI+XG4gICAgICA8aGVhZGVyIGNsYXNzPVwicGFnZS1jb250ZW50X19oZWFkZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzPVwicGFnZS1jb250ZW50X190aXRsZVwiPkRhc2hib2FyZC9Qcm9kdWN0czwvaDE+XG4gICAgICA8L2hlYWRlcj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwYWdlLXNlY3Rpb25cIj5cbiAgICAgICAgPGgyIGNsYXNzPVwicGFnZS1zZWN0aW9uX190aXRsZVwiPlByb2R1Y3RzPC9oMj5cblxuICAgICAgICA8c29ydGFibGUtdGFibGVcbiAgICAgICAgICBkYXRhLXVybD1cIi9hcGkvcmVzdC9wcm9kdWN0cz9fZW1iZWQ9c3ViY2F0ZWdvcnkuY2F0ZWdvcnlcIixcbiAgICAgICAgICBkYXRhLWlzLWR5bmFtaWM9XCIxXCJcbiAgICAgICAgICBkYXRhLWZpZWxkcy1saXN0PVwiWydpbWFnZXMnLCAndGl0bGUnLCAnc3ViY2F0ZWdvcnknLCAncXVhbnRpdHknLCAncHJpY2UnLCAnc3RhdHVzJ11cIlxuICAgICAgICAgIGRhdGEtb3JkZXItZmllbGQ9J3RpdGxlJyxcbiAgICAgICAgICBkYXRhLW9yZGVyLWRpcmVjdGlvbj1cIjFcIlxuICAgICAgICAgID48L3NvcnRhYmxlLXRhYmxlPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PmApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9