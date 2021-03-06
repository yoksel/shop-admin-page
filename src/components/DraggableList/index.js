import './styles.scss';
import './grab-icon.svg';

const cls = {
  elem: 'draggable-list',
  items: 'draggable-list__items',
  item: 'draggable-list__item',
  pressed: 'draggable-list__item--pressed',
  dragged: 'draggable-list__item--dragged',
  placeholder: 'draggable-list__item--placeholder'
};

export default class DraggableList {
  constructor (params = {}) {
    const { elem } = params;
    this.elem = elem;
    this.current = {};
    this.startDrag = this.startDrag.bind(this);
    this.stopDrag = this.stopDrag.bind(this);
    this.move = this.move.bind(this);
    this.setPlaceholderHeight = this.setPlaceholderHeight.bind(this);
    this.isDragging = false;

    this.elem.classList.add(cls.elem);
    this.items = this.elem.querySelectorAll('li');

    this.initList();

    this.elem.addEventListener('pointerdown', this.startDrag);

    this.addMutationObserver();
  }

  async connectedCallback () {
    this.classList.add(cls.elem);
    this.items = this.elem.querySelectorAll('li');

    this.initList();

    this.elem.addEventListener('pointerdown', this.startDrag);

    this.addMutationObserver();
  }

  initList () {
    if (this.items.length === 0) {
      return;
    }

    this.addClassToItems();
    this.disableDefaultDragstart();
    this.placeholder = this.createPlaceholder();

    this.elem.addEventListener('pointerdown', this.setPlaceholderHeight, { once: true });
  }

  startDrag (event) {
    if (event.target.tagName === 'BUTTON') {
      return;
    }
    this.current.elem = event.target.closest('.draggable-list__item');
    if (!this.current.elem) {
      return;
    }

    this.isDragging = true;

    event.preventDefault();
    this.elem.dataset.isDragging = 1;
    this.current.height = this.current.elem.offsetHeight;
    this.current.half = this.current.height / 2;
    this.current.offset = this.getCurrentOffset(event);
    this.current.scrollSteps = 0;
    this.coords = this.getListCoords();
    this.setCurrentItemTop(event);
    this.current.elem.classList.add(cls.pressed);

    this.isJustStarted = true;

    this.elem.addEventListener('pointermove', this.move);
    this.elem.addEventListener('pointerup', this.stopDrag);
    document.addEventListener('pointerup', this.stopDrag);
  }

  getCurrentOffset (event) {
    const { top } = this.current.elem.getBoundingClientRect();
    return event.clientY - top;
  }

  getListCoords () {
    return this.elem.getBoundingClientRect();
  }

  move (event) {
    event.preventDefault();

    // Run after click only if mouse was moved
    // to prevent triggering observer
    if (this.isJustStarted) {
      this.current.elem.classList.add(cls.dragged);
      this.current.elem.replaceWith(this.placeholder);
      this.elem.append(this.current.elem);
      this.isJustStarted = false;
    }

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
    const documentHeight = document.documentElement.clientHeight;
    const currentHalf = this.current.half;
    const documentOverflow = {
      bottom: event.clientY > documentHeight - currentHalf,
      top: event.clientY < currentHalf
    };

    let scrollSize = 0;
    if (documentOverflow.bottom) {
      scrollSize = this.current.half;
    } else if (documentOverflow.top) {
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
    this.current.elem.classList.remove(cls.pressed);
    this.current.elem.style.top = '';
    this.isDragging = false;
    this.elem.dataset.isDragging = 0;
    this.elem.removeEventListener('pointermove', this.move);
    this.elem.removeEventListener('pointerup', this.stopDrag);
    document.removeEventListener('pointerup', this.stopDrag);
  }

  createPlaceholder () {
    if (this.placeholder) {
      return this.placeholder;
    }

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
      mutations.forEach(({ type }) => {
        if (type === 'childList' && !this.isDragging) {
          // If new item was added, update list
          this.items = this.elem.querySelectorAll('li');
          this.initList();
        }
      });
    });

    mutationObserver.observe(this.elem, {
      childList: true
    });
  }

  disableDefaultDragstart () {
    this.items.forEach(item => {
      item.ondragstart = () => false;
    });
  }
}
