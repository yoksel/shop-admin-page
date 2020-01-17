import { createElement } from '../../helpers/index.js';

export default class {
  async render () {
    return createElement(`<div class="page-content">
      <header class="page-content__header">
        <h1 class="page-content__title">Dashboard/Categories</h1>
      </header>

      <section class="page-section">
        <h2 class="page-section__title">Categories</h2>

        <p>http://localhost:8080/api/rest/subcategories?_embed=subcategory.category</p>

        <draggable-list
          data-url="/api/rest/subcategories?_embed=subcategory.category"
          ></draggable-list>
      </section>
    </div>`);
  }
}
