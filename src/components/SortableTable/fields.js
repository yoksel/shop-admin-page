import { formatTotal, escapeHTML } from '../../helpers/index.js';

import { formatPriceForQuery } from './helpers.js';
import statusText from './statusText.js';
import cls from './classes.js';

// Info & sorting methods for table columns
export default {
  images: {
    title: 'Image',
    render ({ images }) {
      if (!images || !images[0]) {
        return '';
      }
      const src = images[0].url;
      return `<div class="${cls.imgWrapper}">
      <img src="${src}" class="${cls.img}">
      <span style="background-image: url(${src})" class="${cls.preview}"><span>
      </div>`;
    },
    compare: null
  },
  title: {
    title: 'Name',
    render ({ title, id }) {
      return `
      ${title}
      `;
    },
    compare (a, b) {
      return a.title.localeCompare(b.title);
    }
  },
  subcategory: {
    title: 'Category',
    render ({ subcategory }) {
      const category = subcategory.category;
      const tootipContent = `<span class="${cls.tooltipCategory}">${category.title}</span>/<span class="${cls.tooltipSubcategory}">${subcategory.title}</span>`;
      return `<span class="${cls.category}" data-tooltip-content="${escapeHTML(tootipContent)}">${subcategory.title}</span>`;
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
    render ({ quantity }) {
      return quantity;
    },
    compare (a, b) {
      return a.quantity - b.quantity;
    }
  },
  price: {
    title: 'Price',
    render ({ price }) {
      return formatTotal(price);
    },
    compare (a, b) {
      return a.price - b.price;
    }
  },
  status: {
    title: 'Status',
    render ({ status }) {
      return statusText[status];
    },
    compare (a, b) {
      return a.status - b.status;
    },
    formatForQuery ({ key, value }) {
      if (!isFinite(value) || value === '') {
        return;
      }

      return {
        key,
        value: +value
      };
    }
  },
  search: {
    title: 'Search',
    formatForQuery ({ key, value }) {
      if (!value.trim()) {
        return;
      }
      return {
        key: 'title_like',
        value: value.trim()
      };
    }
  },
  price_gte: {
    formatForQuery: formatPriceForQuery
  },
  price_lte: {
    formatForQuery: formatPriceForQuery
  }
};
