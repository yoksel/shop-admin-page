import cls from './classes.js';

export const inputText = `<label class="${cls.label}">
  {fieldName}

  <input
    class="${cls.input} ${cls.inputText}"
    type="text"
    name="{id}"
    value="{value}"/>
</label>`;

export const inputSearch = `<label class="${cls.label}">
  {fieldName}

  <input
    class="${cls.input} ${cls.inputText} ${cls.inputSearch}"
    type="search"
    name="{id}"
    value="{value}"/>
</label>`;

export const inputSelect = `<label class="${cls.label}">
  {fieldName}

  <select
    class="${cls.input} ${cls.inputSelect}"
    name="{id}">
    {options}
  </select>
</label>`;

export const doubleRange = `<div
  data-elem="double-range"
  data-min="0"
  data-max="4000"
  data-step="1"
  data-value-min="0"
  data-value-max="4000"
  data-name-min="price_gte"
  data-name-max="price_lte"
  class="${cls.range}"
></div>`;
