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
