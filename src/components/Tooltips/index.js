import { createElement } from '../../helpers/index.js';
import cls from './classes.js';
import './styles.scss';

export default class Tooltips {
  constructor ({ elem, dimSiblings }) {
    this.elem = elem;
    this.elem.classList.add(cls.elem);
    this.dimSiblings = dimSiblings;

    this.tooltip = createElement(`<div class="${cls.tooltip}"></div>`);
    this.elem.append(this.tooltip);

    this.listMouseMove = this.listMouseMove.bind(this);
    this.listMouseOut = this.listMouseOut.bind(this);

    this.elem.addEventListener('mousemove', this.listMouseMove);
    this.elem.addEventListener('mouseleave', this.listMouseOut);
  }

  listMouseMove () {
    if (!event.target.dataset.tooltipContent) {
      this.hideTooltip();
      return;
    }

    const { tooltipContent } = event.target.dataset;
    this.tooltip.innerHTML = tooltipContent;
    this.tooltip.dataset.visible = 1;

    // Parent container coords
    this.elemCoords = this.elem.getBoundingClientRect();
    const coords = {
      x: event.clientX - this.elemCoords.x,
      y: event.clientY - this.elemCoords.y
    };

    this.tooltip.style = `transform: translate(${coords.x}px, ${coords.y}px)`;

    // Fix cutting by window
    this.tooltipCoords = this.tooltip.getBoundingClientRect();
    const hiddenByWindow = this.tooltipCoords.right - document.documentElement.clientWidth;

    if (hiddenByWindow > 0) {
      coords.x -= hiddenByWindow;
      this.tooltip.style = `transform: translate(${coords.x}px, ${coords.y}px)`;
    }

    if (this.dimSiblings) {
      this.elem.classList.add(cls.dimmed);
    }
  }

  listMouseOut () {
    if (!event.target.dataset.tooltipContent) {
      this.hideTooltip();
    }
  }

  hideTooltip () {
    this.tooltip.dataset.visible = 0;
    this.elem.classList.remove(cls.dimmed);
  }
}
