import { createElement } from '../../helpers/index.js';
import cls from './classes.js';
import './styles.scss';

export default class Tooltips {
  constructor (elem) {
    this.elem = elem;
    this.elem.classList.add(cls.elem);

    this.tooltip = createElement(`<div class="${cls.tooltip}"></div>`);
    this.elem.append(this.tooltip);

    this.listMouseOver = this.listMouseOver.bind(this);
    this.listMouseOut = this.listMouseOut.bind(this);

    this.elem.addEventListener('mouseover', this.listMouseOver);
    this.elem.addEventListener('mouseleave', this.listMouseOut);
  }

  listMouseOver () {
    if (!event.target.dataset.tooltipContent) {
      this.tooltip.dataset.visible = 0;
      this.elem.classList.remove(cls.faded);
      return;
    }

    this.elemCoords = this.elem.getBoundingClientRect();
    const coords = {
      x: event.clientX - this.elemCoords.x,
      y: event.clientY - this.elemCoords.y
    };

    this.tooltip.style = `transform: translate(${coords.x}px, ${coords.y}px)`;

    const { tooltipContent } = event.target.dataset;
    this.tooltip.innerHTML = tooltipContent;
    this.tooltip.dataset.visible = 1;
    this.elem.classList.add(cls.faded);
  }

  listMouseOut () {
    if (!event.target.dataset.tooltipContent) {
      this.tooltip.dataset.visible = 0;
      this.elem.classList.remove(cls.faded);
    }
  }
}
