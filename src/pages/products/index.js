import { createElement } from '../../helpers/index.js';

export default class {
  async render () {
    return createElement(`<div class="page-content">
      <header class="page-content__header">
        <h1 class="page-content__title">Dashboard/Products</h1>
      </header>

      <section class="page-section">
        <h2 class="page-section__title">Products</h2>

        <sortable-table
          data-url="/api/rest/products?_embed=subcategory.category",
          data-is-dynamic="1"
          data-fields-list="['images', 'title', 'subcategory', 'quantity', 'price', 'status']"
          data-order-field='title',
          data-order-direction="1"
          ></sortable-table>
      </section>
    </div>`);
  }
}
