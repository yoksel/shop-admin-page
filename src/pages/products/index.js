import { createElement } from '../../helpers/index.js';
const baseUrl = process.env.BASE_URL || '/';

export default class {
  async render () {
    return createElement(`
<div class="page-content">
  <header class="page-content__header">
    <h2 class="page-content__title">Products</h2>

    <a
      class="page-content__header-create control control--green"
      href="${baseUrl}products/add">Add Product
    </a>
  </header>

  <sortable-table
    data-url="/api/rest/products?_embed=subcategory.category",
    data-is-dynamic="1"
    data-fields-list="['images', 'title', 'subcategory', 'quantity', 'price', 'status']"
    data-order-field='title',
    data-order-direction="1"
    ></sortable-table>
  </section>
</div>
  `);
  }
}
