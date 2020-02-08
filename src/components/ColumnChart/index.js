import Tooltips from '../Tooltips/index.js';
import {
  fillTemplate,
  formatDate,
  escapeHTML,
  formatTotal,
  fetchJson
} from '../../helpers/index.js';
import cls from './classes.js';
import templates from './templates.js';

import './styles.scss';

export default class ColumnChart extends HTMLElement {
  constructor () {
    super();

    this.elem = document.createElement('div');
    this.apiUrl = process.env.API_URL || 'https://course-js.javascript.ru';

    this.changeDate = this.changeDate.bind(this);
  }

  async connectedCallback () {
    const { type, isMoney, from, to } = this.dataset;

    this.dates = {
      from: from,
      to: to
    };

    this.type = type;
    this.formatTotal = isMoney ? formatTotal : null;
    this.classList.add(cls.elem, `${cls.elem}--${type}`);
    this.elem.classList.add(cls.content);
    this.title = `Total ${type}`;
    this.url = this.getUrl();

    await this.render();
    this.append(this.elem);

    document.addEventListener('changeDate', this.changeDate);
  }

  disconnectedCallback() {
    document.removeEventListener('changeDate', this.changeDate);
  }

  getUrl () {
    return `${this.apiUrl}/api/dashboard/${this.type}?from=${this.dates.from}&to=${this.dates.to}`;
  }

  async getData () {
    try {
      const data = await fetchJson(this.url);
      return { data };
    } catch (error) {
      return { error };
    }
  }

  async render () {
    const { data, error } = await this.getData();
    this.data = data;

    if (error) {
      this.elem.insertAdjacentHTML('beforeEnd', `<div class="${cls.error}">${error}</div>`);
      return;
    }

    this.values = Object.values(this.data);

    if (this.values.length === 0) {
      this.values.push('No data');
    }

    const headerStr = this.getHeaderStr();

    const listStr = this.getListStr();
    this.elem.insertAdjacentHTML(
      'beforeEnd',
      headerStr + listStr
    );

    this.addActions();
  }

  getHeaderStr () {
    this.total = this.values.reduce((prev, current) => prev + current, 0);

    if (this.formatTotal) {
      this.total = this.formatTotal(this.total);
    }

    return fillTemplate({
      tmpl: templates.header,
      data: this
    });
  }

  getListStr () {
    const max = Math.max(...this.values);
    let chartStr = '';

    for (const key in this.data) {
      const date = formatDate(key);
      let value = this.data[key];
      const heightValue = ((value / max) * 100).toFixed(2);
      const height = `${heightValue}%`;

      if (this.formatTotal) {
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

  addActions () {
    this.tooltips = new Tooltips({
      elem: this.elem,
      dimSiblings: true
    });
  }

  async changeDate (event) {
    if (!event.detail || !event.detail.dates) {
      return;
    }

    const { from, to } = event.detail.dates;
    this.dates = {
      from: from,
      to: to
    };

    this.url = this.getUrl();
    this.elem.innerHTML = '';
    await this.render();
    this.append(this.elem);
  }
}
