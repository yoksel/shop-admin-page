import Layout from './components/Layout/index.js';
import ColumnChart from './components/ColumnChart/index.js';
import RangePicker from './components/RangePicker/index.js';
import Router from './lib/Router.js';

import './assets/scss/styles.scss';

// Routing
let router = Router.instance();

router
  .addRoute(/^$/, 'dashboard')
  .addRoute(/^products$/, 'products')
  .setNotFoundPage('error404')
  .addListener();

// Init custom elements
window.customElements.define('page-layout', Layout);
window.customElements.define('column-chart', ColumnChart);
window.customElements.define('range-picker', RangePicker);
