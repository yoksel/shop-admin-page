import { inputText, inputNumber, inputTextarea, inputSelect } from './templates.js';
import statusText from './statusText.js';
import { fillTemplate } from '../../../helpers/index.js';
import cls from './classes.js';

// Rendering methods for product inputs
export default {
  images: {
    render ({ images }) {
      if (!images || !images[0].url) {
        return '';
      }
      const src = images[0].url;
      return `List + upload || <div class="${cls.imgWrapper}">
      <img src="${src}" class="${cls.img}">
      <span style="background-image: url(${src})" class="${cls.preview}"><span>
      <div>`;
    },
    compare: null
  },
  title: {
    render ({ title }) {
      const data = {
        id: 'title',
        fieldName: 'Name',
        value: title
      };
      return fillTemplate({
        tmpl: inputText,
        data
      });
    }
  },
  description: {
    render ({ description }) {
      const data = {
        id: 'description',
        fieldName: 'Description',
        value: description
      };

      return fillTemplate({
        tmpl: inputTextarea,
        data
      });
    }
  },
  subcategory: {
    render ({ categories, subcategory }) {
      const data = {
        id: 'subcategory',
        fieldName: 'Category',
        options: getOptions(categoriesToFlatList(categories), subcategory)
      };

      return fillTemplate({
        tmpl: inputSelect,
        data
      });
    }
  },
  quantity: {
    render ({ quantity }) {
      const data = {
        id: 'quantity',
        fieldName: 'Quantity',
        value: quantity
      };
      return fillTemplate({
        tmpl: inputNumber,
        data
      });
    }
  },
  price: {
    render ({ price }) {
      const data = {
        id: 'price',
        fieldName: 'Price',
        value: price
      };
      return fillTemplate({
        tmpl: inputNumber,
        data
      });
    }
  },
  discount: {
    render ({ discount }) {
      const data = {
        id: 'discount',
        fieldName: 'Discount',
        value: discount
      };
      return fillTemplate({
        tmpl: inputNumber,
        data
      });
    }
  },
  status: {
    render ({ status }) {
      const data = {
        id: 'status',
        fieldName: 'Status',
        value: status,
        options: getOptions(Object.values(statusText), status)
      };

      return fillTemplate({
        tmpl: inputSelect,
        data
      });
    }
  }
};

function categoriesToFlatList (categories) {
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

function getOptions (list, selected) {
  return list
    .map((item, index) => {
      const value = item.value || index;
      const text = item.text || item;
      const isSelected = value === selected ? 'selected' : '';

      return `<option value="${value}" ${isSelected}>${text}</option>`;
    })
    .join('');
}
