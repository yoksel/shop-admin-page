import renderLayout from './lib/renderLayout/index.js';
import Router from './lib/Router.js';

import './assets/scss/styles.scss';

// Add layout
document.body.append(renderLayout());

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
