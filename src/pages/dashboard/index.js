import createElement from '../../helpers/createElement.js';
import formatTotal from '../../helpers/formatTotal.js';

const from = new Date();
from.setMonth(from.getMonth() - 1);
const to = new Date().toLocaleString({
  year: 'numeric',
  month: 'numeric',
  day: 'numeric'
});

const dates = {
  from: from.toLocaleString({
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    }),
  to: to.toLocaleString({
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  })
};

export default class {
  async render() {
    return createElement(`<div>
        <h1>Dashboard</h1>

        <section class="column-charts">
          <column-chart data-type="orders" data-from="${dates.from}"  data-to="${dates.to}"></column-chart>
          <column-chart data-type="sales" data-is-money="true"></column-chart>
          <column-chart data-type="customers"></column-chart>
        </section>

        <section class="best-cellers">
          best-sellers
        </section>
      </div>`
    );
  }
};

