import { createElement, throttle } from '../../helpers/index.js';
import DoubleRange from '../DoubleRange/index.js';

import fields from './fields.js';
import cls from './classes.js';

import './styles.scss';

export default class Filter {
  constructor (params) {
    const {
      fieldsList,
      targetElem
    } = params;

    this.elem = document.createElement('div');
    this.elem.classList.add(cls.elem);
    this.form = document.createElement('form');
    this.form.classList.add(cls.form);
    this.list = document.createElement('ul');
    this.list.classList.add(cls.list);
    this.form.append(this.list);
    this.fieldsList = fieldsList;
    this.targetElem = targetElem;

    this.updateParamsThrottle = throttle(this.updateTargetQueryParams, this, 1000);

    this.elem.append(this.form);
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
    this.inputs = this.elem.querySelectorAll('input, select');

    this.inputs.forEach(input => {
      input.addEventListener('input', this.updateParamsThrottle);
    });
  }

  updateTargetQueryParams () {
    const params = Object.fromEntries(new FormData(this.form));
    if (this.updateProps) {
      this.updateProps(params);
    }
  }
}
