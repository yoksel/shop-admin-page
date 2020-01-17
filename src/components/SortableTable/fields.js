import { formatTotal } from '../../helpers/index.js';
import statusText from './statusText.js';
import cls from './classes.js';

// Info & sorting methods for table columns
export default {
  images: {
    title: 'Image',
    render (list) {
      if (!list || !list[0].url) {
        return '';
      }
      const src = list[0].url;
      return `<div class="${cls.imgWrapper}">
      <img src="${src}" class="${cls.img}">
      <span style="background-image: url(${src})" class="${cls.preview}"><span>
      <div>`;
    },
    compare: null
  },
  title: {
    title: 'Name',
    render (text) {
      return text;
    },
    compare (a, b) {
      return a.title.localeCompare(b.title);
    }
  },
  subcategory: {
    title: 'Category',
    render (categoryData) {
      const subcategory = categoryData;
      const category = subcategory.category;
      return `<span title="${category.title}/${subcategory.title}">${subcategory.title}</span>`;
    },
    compare (a, b) {
      // Sorting by russian titles
      const aCatName = a.subcategory.title;
      const bCatName = b.subcategory.title;
      return aCatName.localeCompare(bCatName);
    }
  },
  quantity: {
    title: 'Quantity',
    render (text) {
      return text;
    },
    compare (a, b) {
      return a.quantity - b.quantity;
    }
  },
  price: {
    title: 'Price',
    render (price) {
      return formatTotal(price);
    },
    compare (a, b) {
      return a.price - b.price;
    }
  },
  status: {
    title: 'Status',
    render (status) {
      return statusText[status];
    },
    compare (a, b) {
      return a.status - b.status;
    }
  }
};
