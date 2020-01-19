(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvZGFzaGJvYXJkL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQXVEOztBQUV2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBLFdBQVcsdUVBQWE7QUFDeEI7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixXQUFXO0FBQ2xDLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFdBQVc7QUFDcEMsdUJBQXVCLFNBQVM7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFdBQVc7QUFDcEMsdUJBQXVCLFNBQVM7QUFDaEM7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixXQUFXO0FBQ3BDLHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsV0FBVztBQUNsQyxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiMi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vaGVscGVycy9pbmRleC5qcyc7XG5cbmNvbnN0IGZyb20gPSBuZXcgRGF0ZSgpO1xuZnJvbS5zZXRNb250aChmcm9tLmdldE1vbnRoKCkgLSAxKTtcbmNvbnN0IHRvID0gbmV3IERhdGUoKTtcblxuY29uc3QgZGF0ZXMgPSB7XG4gIGZyb206IGZyb20udG9JU09TdHJpbmcoKSxcbiAgdG86IHRvLnRvSVNPU3RyaW5nKClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgYXN5bmMgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChgPGRpdiBjbGFzcz1cInBhZ2UtY29udGVudFwiPlxuICAgICAgPGhlYWRlciBjbGFzcz1cInBhZ2UtY29udGVudF9faGVhZGVyXCI+XG4gICAgICAgIDxoMSBjbGFzcz1cInBhZ2UtY29udGVudF9fdGl0bGVcIj5EYXNoYm9hcmQ8L2gxPlxuXG4gICAgICAgIDxyYW5nZS1waWNrZXJcbiAgICAgICAgICBkYXRhLWZyb209XCIke2RhdGVzLmZyb219XCJcbiAgICAgICAgICBkYXRhLXRvPVwiJHtkYXRlcy50b31cIlxuICAgICAgICA+PC9yYW5nZS1waWNrZXI+XG4gICAgICA8L2hlYWRlcj5cblxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInBhZ2Utc2VjdGlvbiBwYWdlLXNlY3Rpb24tLWNvbHVtbi1jaGFydHNcIj5cbiAgICAgICAgICA8Y29sdW1uLWNoYXJ0XG4gICAgICAgICAgICBkYXRhLXR5cGU9XCJvcmRlcnNcIlxuICAgICAgICAgICAgZGF0YS1mcm9tPVwiJHtkYXRlcy5mcm9tfVwiXG4gICAgICAgICAgICBkYXRhLXRvPVwiJHtkYXRlcy50b31cIlxuICAgICAgICAgID48L2NvbHVtbi1jaGFydD5cblxuICAgICAgICAgIDxjb2x1bW4tY2hhcnRcbiAgICAgICAgICAgIGRhdGEtdHlwZT1cInNhbGVzXCJcbiAgICAgICAgICAgIGRhdGEtaXMtbW9uZXk9XCJ0cnVlXCJcbiAgICAgICAgICAgIGRhdGEtZnJvbT1cIiR7ZGF0ZXMuZnJvbX1cIlxuICAgICAgICAgICAgZGF0YS10bz1cIiR7ZGF0ZXMudG99XCJcbiAgICAgICAgICA+PC9jb2x1bW4tY2hhcnQ+XG5cbiAgICAgICAgICA8Y29sdW1uLWNoYXJ0XG4gICAgICAgICAgICBkYXRhLXR5cGU9XCJjdXN0b21lcnNcIlxuICAgICAgICAgICAgZGF0YS1mcm9tPVwiJHtkYXRlcy5mcm9tfVwiXG4gICAgICAgICAgICBkYXRhLXRvPVwiJHtkYXRlcy50b31cIlxuICAgICAgICAgID48L2NvbHVtbi1jaGFydD5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicGFnZS1zZWN0aW9uXCI+XG4gICAgICAgICAgPGgyIGNsYXNzPVwicGFnZS1zZWN0aW9uX190aXRsZVwiPkJlc3RzZWxsZXJzPC9oMj5cblxuICAgICAgICA8c29ydGFibGUtdGFibGVcbiAgICAgICAgICBkYXRhLXVybD1cIi9hcGkvZGFzaGJvYXJkL2Jlc3RzZWxsZXJzP19lbWJlZD1zdWJjYXRlZ29yeS5jYXRlZ29yeVwiLFxuICAgICAgICAgIGRhdGEtaXMtZHluYW1pYz1cIjBcIlxuICAgICAgICAgIGRhdGEtZmllbGRzLWxpc3Q9XCJbJ2ltYWdlcycsICd0aXRsZScsICdzdWJjYXRlZ29yeScsICdxdWFudGl0eScsICdwcmljZScsICdzdGF0dXMnXVwiXG4gICAgICAgICAgZGF0YS1vcmRlci1maWVsZD0ndGl0bGUnLFxuICAgICAgICAgIGRhdGEtb3JkZXItZGlyZWN0aW9uPVwiMVwiXG4gICAgICAgICAgZGF0YS1mcm9tPVwiJHtkYXRlcy5mcm9tfVwiXG4gICAgICAgICAgZGF0YS10bz1cIiR7ZGF0ZXMudG99XCJcbiAgICAgICAgICA+PC9zb3J0YWJsZS10YWJsZT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+YCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=