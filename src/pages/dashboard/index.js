import {createElement} from '../../helpers/index.js';

const from = new Date();
from.setMonth(from.getMonth() - 1);
const to = new Date();
const dateOptions = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric'
};

const dates = {
  from: from.toLocaleString('en-GB', dateOptions),
  to: to.toLocaleString('en-GB', dateOptions)
};

export default class {
  async render() {
    return createElement(`<div class="page-content">
      <header class="page-content__header">
        <h1 class="page-content__title">Dashboard</h1>

        <range-picker
          class="range-picker"
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

        <section class="page-section page-section--best-cellers">
          <h2 class="page-section__title">Best sellers</h2>

          <sortable-table
            data-url="/api/dashboard/bestsellers?_embed=subcategory.category",
            data-is-dynamic="1"
            data-fields-list="['images', 'title', 'subcategory', 'quantity', 'price', 'status']"
            data-order-field='title',
            data-order-direction="1"
            ></sortable-table>
        </section>
      </div>`
    );
  }
};

