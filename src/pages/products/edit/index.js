import { createElement, fetchJson } from '../../../helpers/index.js';
import Message from '../../../components/Message/index.js';
import fields from './fields.js';
import fieldsOrder from './fieldsOrder.js';
import cls from './classes.js';
import { header } from './templates';

import './icon-trash.svg';
import './style.scss';

export default class {
  constructor (match) {
    this.id = match[0].replace('products/', '');

    if (!match[0]) {
      this.id = '3d-ochki-optoma-zd302';
    }

    this.apiUrl = process.env.API_URL || 'https://course-js.javascript.ru';
    this.fetchProductUrl = this.apiUrl + `/api/rest/products?id=${this.id}`;
    this.fetchCategoriesUrl = this.apiUrl + '/api/rest/categories?_sort=weight&_refs=subcategory';
  }

  async render () {
    const { productData, categories, errorMessage } = await this.loadData();

    if (errorMessage) {
      return createElement(`<div class="page-content">
        ${header}

        ${errorMessage.outerHTML}
      </div>
      `);
    }

    const product = productData[0];
    const inputs = [];

    for (const { name, mods } of fieldsOrder) {
      if (fields[name]) {
        let params = product;

        if (name === 'subcategory') {
          params = {
            ...params,
            categories
          };
        }

        const input = fields[name].render(params);
        let classes = [cls.item];

        if (mods) {
          classes = classes.concat(mods);
        }

        inputs.push(`<li class="${classes.join(' ')}">${input}</li>`);
      }
    }

    return createElement(`<div class="page-content">
      ${header}

      <form action="" class="${cls.form}}">
        <ul class="${cls.list}">
          ${inputs.join('\n')}
        </ul>

        <footer class="${cls.footer}">
          <button class="${cls.submit}">Save</button>
        </footer>
      </form>
    </div>`);
  }

  async loadData () {
    // TODO: add loading indicator
    try {
      const productData = await fetchJson(this.fetchProductUrl);
      const categories = await fetchJson(this.fetchCategoriesUrl);

      return { productData, categories };
    } catch (error) {
      const message = new Message({ error });
      return { errorMessage: message.elem };
    }
  }
}
