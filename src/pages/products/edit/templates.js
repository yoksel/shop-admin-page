import cls from './classes.js';
const baseUrl = process.env.BASE_URL || '/';

export const header = `<header class="page-content__header">
  <h2 class="${cls.pageContentTitle}">
    <a
      class="page-content__title-link"
      href="${baseUrl}products">Products</a>
    /
    <span class="${cls.pageContentTitleMain}">{title}</span>
  </h2>

  <a
    class="page-content__header-create control control--green"
    href="${baseUrl}products/add">Add Product
  </a>
</header>`;

export const inputHidden = `<input
    type="hidden"
    name="{id}"
    value="{value}"/>
`;

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

export const imgListItem = `<li class="${cls.imgsItem}">
  <input type="hidden" name="image-{source}" value="{url}"/>
  <input type="hidden" name="image-{source}" value="{source}"/>
  <div class="${cls.imgWrapper}">
    <img src="{url}" class="${cls.img}">
    <span style="background-image: url({url})" class="${cls.preview}"><span>
  </div>
  <span class="${cls.imgSource}">{source}</span>
  <button type="button" class="${cls.imgRemove}">Remove</button>
</li>`;
