import Layout from './components/Layout/index.js';
import ColumnChart from './components/ColumnChart/index.js';
import RangePicker from './components/RangePicker/index.js';
import SortableTable from './components/SortableTable/index.js';
import DraggableList from './components/DraggableList/index.js';
import Router from './lib/Router.js';

import './assets/scss/styles.scss';

// Routing
const router = Router.instance();

router
  .addRoute(/^$/, 'dashboard')
  .addRoute(/^categories$/, 'categories')
  .addRoute(/^products\/([\S()-]+)/g, 'products/edit')
  .addRoute(/^products\/add$/, 'products/edit')
  .addRoute(/^products$/, 'products')
  .setNotFoundPage('error404')
  .addListener();

// Init custom elements
window.customElements.define('page-layout', Layout);
window.customElements.define('column-chart', ColumnChart);
window.customElements.define('range-picker', RangePicker);
window.customElements.define('sortable-table', SortableTable);
window.customElements.define('draggable-list', DraggableList, { extends: 'ul' });
