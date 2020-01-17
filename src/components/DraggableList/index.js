import { fetchJson } from '../../helpers/index.js';

import './styles.scss';
import './grab-icon.svg';

export default class DraggableList extends HTMLElement {
  constructor () {
    super();

    this.apiUrl = process.env.API_URL || 'https://course-js.javascript.ru';

    this.classList.add('draggable-list');
    this.list = document.createElement('ul');
    this.list.classList.add('draggable-list__list');
    this.placeholder = document.createElement('li');
    this.placeholder.classList.add(
      'draggable-list__item',
      'draggable-list__item--placeholder'
    );
    this.append(this.list);

    this.startDrag = this.startDrag.bind(this);
    this.stopDrag = this.stopDrag.bind(this);
    this.move = this.move.bind(this);
  }

  async connectedCallback () {
    const { url } = this.dataset;
    this.url = this.apiUrl + url;
    await this.render();

    this.addEventListener('pointerdown', this.startDrag);
    this.addEventListener('pointerup', this.stopDrag);
  }

  async getData () {
    try {
      return await fetchJson(this.url);
    } catch (error) {
      console.log(error);
    }
  }

  async render () {
    this.data = await this.getData();

    if (!this.data) {
      this.list.insertAdjacentHTML('beforeEnd', 'No data for this list');
      return;
    }

    const itemsStr = this.getItemsStr();
    this.list.insertAdjacentHTML('beforeEnd', itemsStr);
  }

  startDrag () {
    console.log('Start');
    this.addEventListener('pointermove', this.move);

    const itemElem = event.target.closest('.draggable-list__item');

    itemElem.replaceWith(this.placeholder);
  }

  move () {
    console.log('— Move');
  }

  stopDrag () {
    console.log('Stop');
    this.removeEventListener('pointermove', this.move);
  }

  getItemsStr () {
    const items = this.data.map(item => {
      return `<li class="draggable-list__item">
          <h3 class="draggable-list__item-title">
            ${item.title}
          </h3>

          <span class="draggable-list__item-counter">
            ${item.count} items
          </span>
        </li>`;
    });

    return `<ul class="draggable-list__items">${items.join('')}</ul>`;
  }
}
