import './styles.scss';
import './grab-icon.svg';

const cls = {
  elem: 'draggable-list',
  items: 'draggable-list__items',
  item: 'draggable-list__item',
  dragged: 'draggable-list__item--dragged',
  placeholder: 'draggable-list__item--placeholder'
};

export default class DraggableList extends HTMLUListElement {
  constructor () {
    super();

    this.startDrag = this.startDrag.bind(this);
    this.stopDrag = this.stopDrag.bind(this);
    this.move = this.move.bind(this);
  }

  async connectedCallback () {
    this.classList.add(cls.elem);
    this.items = this.querySelectorAll('li');
    this.placeholder = this.items[0].cloneNode(true);
    this.placeholder.classList.add(cls.placeholder, cls.item);
    this.placeholder.innerHTML = '';

    this.addClassToItems();
    this.addEventListener('pointerdown', this.startDrag);
    this.addEventListener('pointerup', this.stopDrag);
  }

  startDrag (event) {
    this.addEventListener('pointermove', this.move);

    this.currentElem = event.target.closest('li');
    this.currentElem.replaceWith(this.placeholder);
    this.currentElem.classList.add(cls.dragged);
    this.append(this.currentElem);

    const { top } = this.getBoundingClientRect();
    this.top = top;
    this.elemHalf = this.currentElem.offsetHeight / 2;

    const elemTop = event.clientY - this.top - this.elemHalf;
    this.currentElem.style.top = `${elemTop}px`;
  }

  move (event) {
    const elemTop = event.clientY - this.top - this.elemHalf;
    this.currentElem.style.top = `${elemTop}px`;

    // Check intersection
    for (const item of this.items) {
      if (item.classList.contains(cls.dragged)) {
        continue;
      }

      const top = item.offsetTop;
      const bottom = top + item.offsetHeight;
      const middle = top + item.offsetHeight / 2;
      const checkLine = elemTop + this.elemHalf;

      if (checkLine > top && checkLine < bottom) {
        if (checkLine <= middle) {
          item.after(this.placeholder);
        } else {
          item.before(this.placeholder);
        }
        break;
      }
    }
  }

  stopDrag () {
    this.placeholder.replaceWith(this.currentElem);
    this.currentElem.classList.remove(cls.dragged);
    this.currentElem.style.top = '';
    this.removeEventListener('pointermove', this.move);
  }

  addClassToItems () {
    this.items.forEach(item => item.classList.add(cls.item));
  }
}
