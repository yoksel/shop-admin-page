import {fillTemplate, formatDate, escapeHTML, formatTotal, getDateFromString, fetchJson} from '../../helpers/index.js';
import cls from './classes.js';
import templates from './templates.js';

import './styles.scss';

export default class ColumnChart extends HTMLElement {
  constructor() {
    super();

    this.listMouseOver = this.listMouseOver.bind(this);
    this.listMouseOut = this.listMouseOut.bind(this);

    this.elem = document.createElement('div');
  }

  async connectedCallback() {
    const {type, isMoney, from, to} = this.dataset;

    this.dates = {
      from: getDateFromString(from),
      to: getDateFromString(to)
    };

    this.type = type;
    this.formatTotal = isMoney ? formatTotal : null;
    this.classList.add(cls.elem, `${cls.elem}--${type}`);
    this.elem.classList.add(cls.content);
    this.title = `Total ${type}`;
    this.url = `https://course-js.javascript.ru/api/dashboard/${type}?from=${this.dates.from}&to=${this.dates.to}`;

    const elem = await this.render();
    this.append(this.elem);
  }

  async getData() {
    try {
      return await fetchJson(this.url);
    }
    catch(error) {
      console.log(error);
    }
  }

  async render() {
    this.data = await this.getData();

    if(!this.data) {
      this.elem.insertAdjacentHTML('beforeEnd', 'No data for this chart');
      return;
    }

    this.values = Object.values(this.data);

    const headerStr = this.getHeaderStr();
    const listStr = this.getListStr();

    this.elem.insertAdjacentHTML('beforeEnd', headerStr + listStr + templates.toolTip);

    this.addActions();
  }

  getHeaderStr() {
    this.total = this.values.reduce((prev, current) => prev + current);
    if(this.formatTotal) {
      this.total = this.formatTotal(this.total);
    }
    let chartStr = '';

    return fillTemplate({
      tmpl: templates.header,
      data: this
    });
  }

  getListStr() {
    const max = Math.max(...this.values);
    let chartStr = '';

    for(let key in this.data){
      const date = formatDate(key);
      let value = this.data[key];
      let height = `${value / max * 100}%`;

      if(this.formatTotal) {
        value = this.formatTotal(value);
      }

      const tootipContent = `<small class="${cls.tooltipDate}">${date}</small><div class="${cls.tooltipQuantity}">${value}</div>`;

      chartStr += fillTemplate({
        tmpl: templates.chartItem,
        data: {
          ...this,
          height,
          tootipContent: escapeHTML(tootipContent)
        }
      });
    }

    return `<ul class="${cls.list}">${chartStr}</ul>`;
  }

  addActions(){
    this.list = this.elem.querySelector(`.${cls.list}`);
    this.tooltip = this.elem.querySelector(`.${cls.tooltip}`);

    this.list.addEventListener('mouseover', this.listMouseOver);
    this.list.addEventListener('mouseout', this.listMouseOut);
  }

  listMouseOver() {
    if(event.target.tagName !== 'LI') {
      this.tooltip.dataset.visible = 0;
      this.list.classList.remove(cls.listFaded);
      return;
    }

    this.elemCoords = this.elem.getBoundingClientRect();
    const coords = {
      x: event.clientX - this.elemCoords.x,
      y: event.clientY - this.elemCoords.y
    };

    this.tooltip.style = `transform: translate(${coords.x}px, ${coords.y}px)`;

    const {content} = event.target.dataset;
    this.tooltip.innerHTML = content;
    this.tooltip.dataset.visible = 1;
    this.list.classList.add(cls.listFaded);
  }

  listMouseOut() {
    if(event.target.tagName !== 'UL' || event.target.tagName !== 'LI') {
      this.tooltip.dataset.visible = 0;
      this.list.classList.remove(cls.listFaded);
      return;
    }
  }
}
