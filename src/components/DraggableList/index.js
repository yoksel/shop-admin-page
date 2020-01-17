import { fetchJson } from '../../helpers/index.js';

import './styles.scss';
import './grab-icon.svg';

const cls = {
  elem: 'draggable-list',
  items: 'draggable-list__items',
  item: 'draggable-list__item',
  dragging: 'draggable-list__item--dragging',
  itemTitle: 'draggable-list__item-title',
  itemCounter: 'draggable-list__item-counter',
  placeholder: 'draggable-list__item--placeholder'
};

export default class DraggableList extends HTMLElement {
  constructor () {
    super();

    this.apiUrl = process.env.API_URL || 'https://course-js.javascript.ru';

    this.classList.add(cls.elem);
    this.list = document.createElement('ul');
    this.list.classList.add(cls.items);
    this.placeholder = document.createElement('li');
    this.placeholder.classList.add(
      cls.item,
      cls.placeholder
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

    const itemElem = event.target.closest(`.${cls.item}`);

    itemElem.replaceWith(this.placeholder);
    this.list.append(itemElem);

    itemElem.classList.add(cls.dragging);
    itemElem.style.top = `${event.clientX}px`;
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
      return `<li class="${cls.item}">
          <h3 class="${cls.itemTitle}">${item.title}</h3>

          <span class="${cls.itemCounter}">
            ${item.count} items
          </span>
        </li>`;
    });

    return items.join('');
  }
}
