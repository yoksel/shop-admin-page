import { createElement } from '../../helpers/index.js';
import Filter from '../../components/Filter/index.js';
import SortableTable from '../../components/SortableTable/index.js';

const baseUrl = process.env.BASE_URL || '/';

export default class {
  async render () {
    this.table = this.getTable();
    this.filter = this.getFilter();
    this.filter.updateProps = this.table.updateProps;

    const page = createElement(`
<div class="page-content">
  <header class="page-content__header">
    <h2 class="page-content__title">Products</h2>

    <a
      class="page-content__header-create control control--green"
      href="${baseUrl}products/add">Add Product
    </a>
  </header>
</div>
  `);

    page.append(this.filter.elem);
    page.append(this.table.elem);

    return page;
  }

  getTable () {
    const table = new SortableTable({
      id: 'products-table',
      url: '/api/rest/products?_embed=subcategory.category',
      isDynamic: 1,
      fieldsList: ['images', 'title', 'subcategory', 'quantity', 'price', 'status'],
      orderField: 'title',
      orderDirection: 1
    });

    return table;
  }

  getFilter () {
    const filter = new Filter({
      targetElem: this.filterElem,
      fieldsList: ['search', 'price', 'status']
    });

    return filter;
  }
}
