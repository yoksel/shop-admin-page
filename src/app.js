import Layout from './components/Layout/index.js';
import Router from './lib/Router.js';

import './assets/scss/styles.scss';

// Routing
let router = Router.instance();

router
  .addRoute(/^$/, 'dashboard')
  .addRoute(/^products$/, 'products')
  .addRoute(/^dashboard$/, 'dashboard')
  .setNotFoundPage('error404')
  .addListener();

// Init custom elements
window.customElements.define('page-layout', Layout);
