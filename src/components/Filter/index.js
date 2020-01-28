import { createElement } from '../../helpers/index.js';

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
    this.fieldsList = JSON.parse(fieldsList.replace(/'/g, '"'));

    this.append(this.form);
    this.addForm();
    this.addEvents();
  }

  addForm () {
    this.fieldsList.forEach(field => {
      if (fields[field]) {
        const fieldMarkup = fields[field].render({});
        let fieldElem = fieldMarkup;

        if (typeof fieldMarkup === 'string') {
          fieldElem = createElement(fieldMarkup);
        }
        this.form.append(fieldElem);
      }
    });
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
