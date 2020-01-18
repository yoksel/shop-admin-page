import cls from './classes.js';

export const header = `<header class="page-content__header">
  <h1 class="page-content__title">
  <a href="/products">Products</a>
  /Edit Product</h1>
</header>`;

export const inputText = `<label class="${cls.label}">
  {fieldName}

  <input
    class="${cls.input} ${cls.inputText}"
    type="text"
    name="{id}"
    value="{value}"/>
</label>`;

export const inputNumber = `<label class="${cls.label}">
  {fieldName}

  <input
    class="${cls.input} ${cls.inputNumber}"
    type="number"
    name="{id}"
    value="{value}"/>
</label>`;

export const inputTextarea = `<label class="${cls.label}">
  {fieldName}

  <textarea
    class="${cls.input} ${cls.inputTextarea}"
    name="{id}">{value}</textarea>
</label>`;

export const inputSelect = `<label class="${cls.label}">
  {fieldName}

  <select
    class="${cls.input} ${cls.inputSelect}"
    name="{id}">
    {options}
  </select>
</label>`;
