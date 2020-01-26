import { fillTemplate } from '../../../helpers/index.js';
import { header, imgListItem } from './templates.js';
import fields from './fields.js';
import fieldsOrder from './fieldsOrder.js';
import cls from './classes.js';

export function categoriesToFlatList (categories) {
  const flatList = [];

  for (const category of categories) {
    for (const subcategory of category.subcategories) {
      flatList.push({
        value: subcategory.id,
        text: `${category.title} > ${subcategory.title}`
      });
    }
  }

  return flatList;
}

export function getOptions (list, selected) {
  return list
    .map((item, index) => {
      const value = item.value || index;
      const text = item.text || item;
      const isSelected = value === selected ? 'selected' : '';

      return `<option value="${value}" ${isSelected}>${text}</option>`;
    })
    .join('');
}

export function getImgsListMarkup (images) {
  const imagesItems = images
    .map(item => {
      return fillTemplate({
        tmpl: imgListItem,
        data: item
      });
    });

  return `
    <ul class="${cls.imgsList}" is="draggable-list">${imagesItems.join(' ')}</ul>
    <button type="button" class="${cls.inputUpload} ${cls.inputUploadColored}">Upload</button>
  `;
}

export function getHeaderStr(id) {
  let title = 'Edit Product';

  if(!id) {
    title = 'Create Product';
  }

  const headerStr = fillTemplate({
    tmpl: header,
    data: {title}
  });

  return headerStr;
}

export function getInputsList ({ product, categories }) {
  const inputs = [];

  for (const { name, mods } of fieldsOrder) {
    if (fields[name]) {
      let params = product || {};

      if (name === 'subcategory') {
        params = {
          ...params,
          categories
        };
      }

      const input = fields[name].render(params);
      let classes = [cls.item];

      if (mods) {
        classes = classes.concat(mods);
      }

      inputs.push(`<li class="${classes.join(' ')}">${input}</li>`);
    }
  }

  return inputs;
}

export function strToNum (str) {
  return +str;
}
