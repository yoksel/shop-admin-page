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

    this.current = {};

    this.startDrag = this.startDrag.bind(this);
    this.stopDrag = this.stopDrag.bind(this);
    this.move = this.move.bind(this);
    this.setPlaceholderHeight = this.setPlaceholderHeight.bind(this);
  }

  async connectedCallback () {
    this.classList.add(cls.elem);
    this.items = this.querySelectorAll('li');
    this.placeholder = this.createPlaceholder();

    this.addClassToItems();
    this.disableDefaultDragstart();
    this.addEventListener('pointerdown', this.startDrag);
    this.addEventListener('pointerdown', this.setPlaceholderHeight, { once: true });

    this.addMutationObserver();
  }

  startDrag (event) {
    this.current.elem = event.target.closest('.draggable-list__item');
    if (!this.current.elem) {
      return;
    }

    event.preventDefault();

    this.current.height = this.current.elem.offsetHeight;
    this.current.half = this.current.height / 2;
    this.current.offset = this.getCurrentOffset(event);
    this.current.scrollSteps = 0;
    this.coords = this.getListCoords();
    this.setCurrentItemTop(event);

    this.current.elem.replaceWith(this.placeholder);
    this.current.elem.classList.add(cls.dragged);
    this.append(this.current.elem);

    this.addEventListener('pointermove', this.move);
    this.addEventListener('pointerup', this.stopDrag);
    document.addEventListener('pointerup', this.stopDrag);
  }

  getCurrentOffset (event) {
    const { top } = this.current.elem.getBoundingClientRect();
    return event.clientY - top;
  }

  getListCoords () {
    return this.getBoundingClientRect();
  }

  move (event) {
    event.preventDefault();
    this.setCurrentItemTop(event);

    this.scrollOnMove(event);

    const elemTop = event.clientY - this.coords.top - this.current.half;
    const checkLine = elemTop + this.current.half;

    // Check intersection
    for (const item of this.items) {
      if (item.classList.contains(cls.dragged)) {
        continue;
      }

      const top = item.offsetTop;
      const bottom = top + item.offsetHeight;
      const middle = top + item.offsetHeight / 2;

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

  setCurrentItemTop (event) {
    this.coords = this.getListCoords();
    let elemTop = event.clientY - this.coords.top - this.current.offset;
    const min = -this.current.half;
    const max = this.coords.height - this.current.half;

    if (elemTop < min) {
      elemTop = min;
    } else if (elemTop > max) {
      elemTop = max;
    }
    this.current.elem.style.top = `${elemTop}px`;
  }

  scrollOnMove (event) {
    const { top, bottom } = this.current.elem.getBoundingClientRect();
    const documentOverflow = {
      bottom: bottom - document.documentElement.clientHeight,
      top: document.documentElement.clientTop - top
    };

    let scrollSize = 0;
    if (documentOverflow.bottom > 0) {
      scrollSize = this.current.half;
    } else if (documentOverflow.top > 0) {
      scrollSize = -this.current.half;
    }

    if (!scrollSize) {
      return;
    }

    window.scrollBy(0, scrollSize);
    this.setCurrentItemTop(event);
    this.current.offset = this.getCurrentOffset(event);
  }

  stopDrag () {
    this.placeholder.replaceWith(this.current.elem);
    this.current.elem.classList.remove(cls.dragged);
    this.current.elem.style.top = '';
    this.removeEventListener('pointermove', this.move);
    this.removeEventListener('pointerup', this.stopDrag);
  }

  createPlaceholder () {
    const firstItem = this.items[0];
    const placeholder = firstItem.cloneNode(true);
    placeholder.classList.add(cls.placeholder, cls.item);
    placeholder.innerHTML = '';

    return placeholder;
  }

  setPlaceholderHeight () {
    const firstItem = this.items[0];
    this.placeholder.style.minHeight = `${firstItem.offsetHeight}px`;
  }

  addClassToItems () {
    this.items.forEach(item => item.classList.add(cls.item));
  }

  addMutationObserver () {
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach(({type}) => {
        if (type === 'childList') {
          this.items = this.querySelectorAll('li');
          this.addClassToItems();
        }
      });
    });

    mutationObserver.observe(this, {
      childList: true
    });
  }

  disableDefaultDragstart () {
    this.items.forEach(item => {
      item.ondragstart = () => false;
    });
  }
}
