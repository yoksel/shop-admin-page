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
      return `<li class="${cls.imgsItem}">
        <div class="${cls.imgWrapper}">
          <img src="${item.url}" class="${cls.img}">
          <span style="background-image: url(${item.url})" class="${cls.preview}"><span>
        </div>
        <span class="${cls.imgSource}">${item.source}</span>
        <button type="button" class="${cls.imgRemove}">Remove</button>
      </li>`;
    });

  return ` + upload
    <ul class="${cls.imgsList}" is="draggable-list">${imagesItems.join(' ')}</ul>`;
}
