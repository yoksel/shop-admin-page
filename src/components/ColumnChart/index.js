import fetchJson from '../../lib/fetchJson.js';
import formatDate from '../../helpers/formatDate.js';
import escapeHTML from '../../helpers/escapeHTML.js';
import formatTotal from '../../helpers/formatTotal.js';

import './styles.scss';

const today = new Date();
const monthAgo = new Date();
monthAgo.setMonth(monthAgo.getMonth() - 1);

const dates = {
  from: monthAgo.toISOString(),
  to: today.toISOString()
};

export default class ColumnChart extends HTMLElement {
  constructor() {
    super();

    this.listMouseOver = this.listMouseOver.bind(this);
    this.listMouseOut = this.listMouseOut.bind(this);

    this.cls = {
      elem: 'column-chart',
      header: 'column-chart__header',
      title: 'column-chart__title',
      total: 'column-chart__total',
      list: 'column-chart__list',
      listFaded: 'column-chart__list--faded',
      item: 'column-chart__item',
      tooltip: 'column-chart__tooltip',
      tooltipDate: 'column-chart__tooltip-date',
      tooltipQuantity: 'column-chart__tooltip-quantity',
    };

    this.elem = document.createElement('div');
  }

  async connectedCallback() {
    const {type, isMoney} = this.dataset;
    this.type = type;
    this.formatTotal = isMoney ? formatTotal : null;
    this.elem.classList.add(this.cls.elem, `${this.cls.elem}--${type}`);
    this.title = `Total ${type}`;
    this.url = `https://course-js.javascript.ru/api/dashboard/${type}?from=${dates.from}&to=${dates.to}`;

    const elem = await this.render();
    console.log('elem', elem);
    this.append(this.elem);
  }

  async getData() {
    console.log('this.url', this.url)
    try {
      return await fetchJson(this.url);
    }
    catch(error) {
      console.log(error);
    }
  }

  async render() {
    this.data = await this.getData();

    console.log('this.data', this.data);

    if(!this.data) {
      this.elem.insertAdjacentHTML('beforeEnd', 'No data for this chart');
      return;
    }

    this.values = Object.values(this.data);

    const headerStr = this.getHeaderStr();
    const listStr = this.getListStr();
    const toolTipStr = this.getToolTipStr();

    this.elem.insertAdjacentHTML('beforeEnd', headerStr + listStr + toolTipStr);

    this.addActions();
  }

  getHeaderStr() {
    this.total = this.values.reduce((prev, current) => prev + current);
    if(this.formatTotal) {
      this.total = this.formatTotal(this.total);
    }
    let chartStr = '';

    return `<header class="${this.cls.header}">
      <h3 class="${this.cls.title}">${this.title}</h3>
      <div class="${this.cls.total}">${this.total}</div>
    </header>`;
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

      const tootipContent = `<small class="${this.cls.tooltipDate}">${date}</small><div class="${this.cls.tooltipQuantity}">${value}</div>`;

      chartStr += `<li
        class="${this.cls.item}"
        data-content="${escapeHTML(tootipContent)}"
        style="height: ${height}"></li>`
    }

    return `<ul class="${this.cls.list}">${chartStr}</ul>`;
  }

  getToolTipStr() {
    return `<div class="${this.cls.tooltip}"></div>`
  }

  addActions(){
    this.list = this.elem.querySelector(`.${this.cls.list}`);
    this.tooltip = this.elem.querySelector(`.${this.cls.tooltip}`);

    this.list.addEventListener('mouseover', this.listMouseOver);
    this.list.addEventListener('mouseout', this.listMouseOut);
  }

  listMouseOver() {
    if(event.target.tagName !== 'LI') {
      this.tooltip.dataset.visible = 0;
      this.list.classList.remove(this.cls.listFaded);
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
    this.list.classList.add(this.cls.listFaded);
  }

  listMouseOut() {
    if(event.target.tagName !== 'UL' || event.target.tagName !== 'LI') {
      this.tooltip.dataset.visible = 0;
      this.list.classList.remove(this.cls.listFaded);
      return;
    }
  }
}
