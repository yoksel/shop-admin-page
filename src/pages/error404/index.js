import { createElement } from '../../helpers/index.js';

export default class {
  async render () {
    return createElement(`<div class="page-content">
        <section class="page-section page-section--404">
          <h2 class="page-section__title">Page not found</h2>
          <p>No such page</p>
        </section>
      </div>`);
  }
}
