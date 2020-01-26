import { fillTemplate } from '../../../helpers/index.js';
import { imgListItem } from './templates.js';
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
    <button type="button" class="${cls.inputUpload}">Upload</button>
  `;
}

export function strToNum (str) {
  return +str;
}
