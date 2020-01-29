import { inputSearch, inputSelect, doubleRange } from './templates.js';
import statusText from './statusText.js';
import { fillTemplate } from '../../helpers/index.js';
import { getOptions, strToNum } from './helpers';

// Rendering methods for product inputs
export default {
  search: {
    render () {
      const data = {
        id: 'search',
        fieldName: 'Search',
        value: ''
      };
      return fillTemplate({
        tmpl: inputSearch,
        data
      });
    }
  },
  price: {
    render ({ price }) {
      return doubleRange;
    },
    formatForRequest: strToNum
  },
  status: {
    render ({ status }) {
      const statuses = [
        {
          value: '',
          text: 'Any'
        },
        ...statusText
      ];

      const data = {
        id: 'status',
        fieldName: 'Status',
        value: status,
        options: getOptions(statuses, '')
      };

      return fillTemplate({
        tmpl: inputSelect,
        data
      });
    },
    formatForRequest: strToNum
  }
};
