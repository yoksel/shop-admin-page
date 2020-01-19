import { inputText, inputNumber, inputTextarea, inputSelect } from './templates.js';
import statusText from './statusText.js';
import { fillTemplate } from '../../../helpers/index.js';
import { categoriesToFlatList, getOptions, getImgsListMarkup } from './helpers';

// Rendering methods for product inputs
export default {
  images: {
    render ({ images }) {
      if (!images) {
        return '';
      }

      return getImgsListMarkup(images);
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
