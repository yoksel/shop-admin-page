import { createElement, fetchJson } from '../../helpers/index.js';
import PageMessage from '../../components/PageMessage/index.js';

import './styles.scss';

const cls = {
  elem: 'categories',
  list: 'categories__list',
  listTop: 'categories__list--topcategories',
  listSubcats: 'categories__list--subcategories',
  item: 'categories__item',
  itemTop: 'categories__item--topcategory',
  itemSub: 'categories__item--subcategory',
  itemOpen: 'categories__item--open',
  toggler: 'categories__toggler',
  counter: 'categories__counter'
};

export default class {
  constructor () {
    this.apiUrl = process.env.API_URL || 'https://course-js.javascript.ru';
    this.fetchUrl = `${this.apiUrl}/api/rest/categories?_sort=weight&_refs=subcategory`;

    this.listClick = this.listClick.bind(this);
  }

  async render () {
    const { categories, message } = await this.loadData();
    const header = `<header class="page-content__header">
        <h1 class="page-content__title">Dashboard/Categories</h1>
      </header>`;

    if (message) {
      return createElement(`<div class="page-content">
        ${header}

        ${message.elem.outerHTML}
      </div>
      `);
    }

    const list = this.createList(categories);
    this.elem = createElement(`<div class="page-content">
      ${header}

      <section class="page-section categories">
        <h2 class="page-section__title">Categories</h2>

        ${list}
      </section>
    </div>`);

    this.addEvents();

    return this.elem;
  }

  async loadData () {
    // TODO: индикатор загрузки
    try {
      const categories = await fetchJson(this.fetchUrl);

      return { categories };
    } catch (error) {
      // Show error message to user
      const message = new PageMessage({ error });

      return { message };
    }
  }

  createList (items, isSubcat = false) {
    let itemsStr = '';
    let listClass = cls.listTop;
    let itemClass = cls.item;
    let isDraggableAttr = '';

    if (isSubcat) {
      listClass = cls.listSubcats;
      itemClass += ` ${cls.itemSub}`;
      isDraggableAttr = 'is="draggable-list"';
    } else {
      itemClass += ` ${cls.itemTop}`;
    }

    if (items.length === 0) {
      return '';
    }

    for (const item of items) {
      let subCatsList = '';
      let title = item.title;
      const subCats = item.subcategories;
      let counter = '';

      if (isSubcat) {
        const counterText = this.getPlural(item.count, ['product', 'products']);
        counter = `<span class="${cls.counter}">${counterText}</span>`;
      }

      // console.log(item)

      if (subCats) {
        title = ` <button class="${cls.toggler}">${item.title}</button>`;
        subCatsList = this.createList(subCats, true);
      }

      itemsStr += `<li class="${itemClass}">
        ${title}
        ${counter}
        ${subCatsList}
      </li>`;
    }

    return `<ul
      class="${cls.list} ${listClass}" ${isDraggableAttr}
      >
      ${itemsStr}
    </ul>`;
  }

  addEvents () {
    const list = this.elem.querySelector(`.${cls.listTop}`);
    list.addEventListener('click', this.listClick);
  }

  listClick () {
    const control = event.target.closest(`.${cls.toggler}`);
    if (!control) {
      return;
    }

    const itemTop = event.target.closest(`.${cls.itemTop}`);
    itemTop.classList.toggle(cls.itemOpen);
  }

  getPlural (num, variants) {
    let variant = variants[0];
    if (num !== 1) {
      variant = variants[1];
    }

    return `${num} ${variant}`;
  }
}
