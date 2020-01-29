import { createElement } from '../../helpers/index.js';
import DoubleRange from '../DoubleRange/index.js';

import fields from './fields.js';
import cls from './classes.js';

import './styles.scss';

export default class Filter extends HTMLElement {
  async connectedCallback () {
    const {
      fieldsList,
      targetSelector
    } = this.dataset;
    this.targetElem = document.querySelector(targetSelector);

    this.classList.add(cls.elem);
    this.form = document.createElement('form');
    this.form.classList.add(cls.form);
    this.list = document.createElement('ul');
    this.list.classList.add(cls.list);
    this.form.append(this.list);
    this.fieldsList = JSON.parse(fieldsList.replace(/'/g, '"'));

    this.append(this.form);
    this.addForm();
    this.addEvents();
  }

  addForm () {
    this.fieldsList.forEach(field => {
      if (fields[field]) {
        const fieldMarkup = fields[field].render({});
        const fieldItem = createElement(`<li class="${cls.item}">${fieldMarkup}</li>`);

        this.list.append(fieldItem);
      }
    });

    const doubleRangeElem = this.form.querySelector('[data-elem="double-range"]');

    if (doubleRangeElem) {
      /* eslint-disable-next-line */
      new DoubleRange(doubleRangeElem);
    }
  }

  addEvents () {
    this.inputs = this.querySelectorAll('input, select');

    this.inputs.forEach(input => {
      input.addEventListener('input', () => {
        this.updateTargetQueryParams();
      });
    });
  }

  updateTargetQueryParams () {
    const params = Object.fromEntries(new FormData(this.form));
    this.targetElem.dataset.queryParams = JSON.stringify(params);
  }
}
