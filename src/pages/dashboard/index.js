import { createElement } from '../../helpers/index.js';
import RangePicker from '../../components/RangePicker/index.js';
import ColumnChart from '../../components/ColumnChart/index.js';
import SortableTable from '../../components/SortableTable/index.js';

const from = new Date();
from.setMonth(from.getMonth() - 1);
const to = new Date();

const dates = {
  from: from.toISOString(),
  to: to.toISOString()
};

export default class {
  constructor () {
    this.datePickerElem = this.getDatePicker();
    this.chartsElems = this.getCharts();
    this.tableElem = this.getTable();
  }

  async render () {
    const page = createElement(`<div class="page-content">
      <header class="page-content__header">
        <h2 class="page-content__title">Dashboard</h2>
      </header>
    </div>`);
    const headerContentElem = page.querySelector('.page-content__header');

    const sectionCharts = createElement('<section class="page-section page-section--column-charts"></section>');
    sectionCharts.append(...this.chartsElems);

    const sectionBestsellers = createElement(`<section class="page-section page-section--column-charts"><section class="page-section">
          <h3 class="page-section__title">Bestsellers</h3>
      </section>`);
    sectionBestsellers.append(this.tableElem);

    headerContentElem.append(this.datePickerElem);
    page.append(sectionCharts);
    page.append(sectionBestsellers);

    return page;
  }

  getDatePicker () {
    const datePicker = new RangePicker({ ...dates });
    return datePicker.elem;
  }

  getCharts () {
    const chartsTypes = [
      {
        type: 'orders'
      },
      {
        type: 'sales',
        isMoney: true
      },
      {
        type: 'customers'
      }
    ];
    const chartsElems = chartsTypes
      .map(params => {
        const chart = new ColumnChart({
          ...params,
          ...dates
        });

        return chart.elem;
      });

    return chartsElems;
  }

  getTable () {
    const table = new SortableTable({
      url: '/api/dashboard/bestsellers?_embed=subcategory.category',
      isDynamic: 0,
      fieldsList: ['images', 'title', 'subcategory', 'quantity', 'price', 'status'],
      orderField: 'title',
      orderDirection: 1,
      ...dates
    });

    return table.elem;
  }
}
