import Tooltips from '../Tooltips/index.js';
import cls from './classes.js';
import statusText from './statusText.js';
import fields from './fields.js';
import { fetchJson, throttle } from '../../helpers/index.js';
import { getDirectionText } from './helpers.js';
import PageMessage from '../PageMessage/index.js';

import './styles.scss';

const baseUrl = process.env.BASE_URL || '/';

export default class SortableTable extends HTMLElement {
  constructor () {
    super();
    this.sorting = {
      current: null,
      isAsc: true
    };

    this.page = {
      items: 20,
      current: 0,
      isDataEnded: false
    };

    this.apiUrl = process.env.API_URL || 'https://course-js.javascript.ru';

    this.changeDate = this.changeDate.bind(this);
  }

  async connectedCallback () {
    const {
      url,
      fieldsList,
      orderField,
      orderDirection,
      queryParams,
      isDynamic,
      from,
      to
    } = this.dataset;

    this.dates = {
      from,
      to
    };

    this.url = this.apiUrl + url;
    this.fieldsList = JSON.parse(fieldsList.replace(/'/g, '"'));
    this.queryParams = queryParams ? JSON.parse(queryParams) : {};
    this.isDynamic = +isDynamic;
    this.order = {
      field: orderField,
      direction: orderDirection
    };
    this.initTable = this.initTable.bind(this);
    this.isLoading = false;

    if (this.order && this.order.direction !== undefined) {
      this.sorting.isAsc = this.order.direction;
    }

    this.fetchUrl = this.getFetchUrl();
    // Try to throttle loading on scroll
    this.onBodyScrollThrottle = throttle(this.onBodyScroll, this, 500);

    this.initTable();

    document.addEventListener('changeDate', this.changeDate);
  }

  disconnectedCallback () {
    document.removeEventListener('changeDate', this.changeDate);
  }

  static get observedAttributes () {
    return ['data-query-params'];
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (name === 'data-query-params') {
      if (!newValue ||
          oldValue === null ||
          newValue === oldValue) {
        return;
      }

      this.queryParams = JSON.parse(newValue);
      this.page.current = 0;
      this.page.isDataEnded = false;
      this.fetchUrl = this.getFetchUrl();
      this.tBody.innerHTML = '';
      this.fillTBody();
    }
  }

  async loadData () {
    this.isLoading = true;
    this.dataset.loading = 1;

    try {
      const tableData = await fetchJson(this.fetchUrl);
      this.isLoading = false;

      if (!tableData.length) {
        this.addPageMessage({
          title: 'Nothing found 🤷‍♀️',
          text: 'Try to change search params'
        });
      }

      return tableData;
    } catch (error) {
      // Show error message to user
      this.addPageMessage({ error });
    } finally {
      this.dataset.loading = 0;
    }
  }

  initTable () {
    this.createLayout();
    this.addElemHeader();
    this.addTableEvents();

    this.fillTBody();
  }

  async fillTBody () {
    if (this.page.isDataEnded) {
      return;
    }

    this.tableRows = await this.loadData();

    // Last page
    if (this.tableRows.length < this.page.items) {
      this.page.isDataEnded = true;

      if (this.tableRows.length === 0) {
        return;
      }
    }

    if (!this.isDynamic && this.order && this.order.field) {
      this.sortRows(this.order.field);
      return;
    }

    this.renderTBody();
  }

  getFetchUrl () {
    const noPrefix = new Set([
      'title_like',
      'price_lte',
      'price_gte',
      'from',
      'to',
      'status']);

    const filteredParams = this.filterQueryParams();
    const params = {
      start: this.page.current * this.page.items,
      end: (this.page.current + 1) * this.page.items,
      sort: this.order.field,
      order: getDirectionText(this.sorting.isAsc),
      ...filteredParams
    };

    if (this.dates && this.dates.from) {
      params.from = this.dates.from;
      params.to = this.dates.to;
    }

    let paramsStr = '';
    for (const key in params) {
      let prefix = '_';

      if (noPrefix.has(key)) {
        prefix = '';
      }

      paramsStr += `&${prefix}${key}=${params[key]}`;
    }
    return this.url + paramsStr;
  }

  createLayout () {
    this.classList.add(cls.elem);
    this.table = document.createElement('div');
    this.table.classList.add(cls.table);
    this.tBody = document.createElement('div');
    this.tBody.classList.add(cls.tbody);
    this.table.append(this.tBody);

    this.append(this.table);

    this.insertAdjacentHTML(
      'beforeEnd',
      '<div class="spinner"></div>'
    );
  }

  // Fill table header with content
  addElemHeader () {
    let headerContent = '';

    this.fieldsList.forEach(field => {
      let thClass = cls.cell;
      const data = {
        sorter: '',
        sortDirection: ''
      };
      if (fields[field].compare) {
        thClass += ` ${cls.cellSorter}`;
        data.sorter = 'data-sorter="1"';
      }
      if (field === this.order.field) {
        const direction = getDirectionText(this.sorting.isAsc);
        data.sortDirection = `data-sort-direction="${direction}"`;
      }
      headerContent += `<div class="${thClass} ${cls.cell}--${field}"
        data-name="${field}"
        ${data.sorter}
        ${data.sortDirection}
        >${fields[field].title}</div>`;
    });

    const theadStr = `<div class="${cls.thead}"><div class="${cls.header} ${cls.row}">
      ${headerContent}
    </div></div>`;

    this.table.insertAdjacentHTML('afterBegin', theadStr);

    this.sorting.current = this.table.querySelector('[data-sort-direction]');
  }

  // Sorter
  sorterOnClick (th) {
    const { name } = th.dataset;

    if (th.dataset.sortDirection) {
      this.sorting.isAsc = !this.sorting.isAsc;
    } else {
      if (this.sorting.current) {
        delete this.sorting.current.dataset.sortDirection;
      }
      this.sorting.isAsc = true;
      this.sorting.current = th;
    }

    th.dataset.sortDirection = getDirectionText(this.sorting.isAsc);

    if (this.isDynamic) {
      this.sortRowsDynamic(name);
      return;
    }

    this.sortRows(name);
  }

  // Sorting
  sortRows (field) {
    this.tableRows.sort(fields[field].compare);

    if (!this.sorting.isAsc) {
      this.tableRows.reverse();
    }

    this.tBody.innerHTML = '';
    this.renderTBody();
  }

  // Sorting
  sortRowsDynamic (field) {
    this.order.field = field;
    this.page.current = 0;
    this.page.isDataEnded = false;
    this.fetchUrl = this.getFetchUrl();
    this.tBody.innerHTML = '';
    this.fillTBody();
  }

  // Adding delegated events to table
  addTableEvents () {
    this.table.addEventListener('click', this);
    window.addEventListener('scroll', this.onBodyScrollThrottle);
    this.tooltips = new Tooltips({ elem: this });
  }

  // Handles all events for table
  handleEvent () {
    // Sorting events
    if (event.target.dataset.sorter) {
      this.sorterOnClick(event.target);
    }
  }

  onBodyScroll () {
    if (this.isLoading) {
      return;
    }

    const htmlCoords = document.documentElement.getBoundingClientRect();
    const scrollDelta = htmlCoords.bottom - window.innerHeight;

    if (scrollDelta < 100) {
      this.page.current++;
      this.fetchUrl = this.getFetchUrl();
      this.fillTBody();
    }
  }

  // Fill table body cells with content
  renderTBody () {
    this.pageYOffset = window.pageYOffset;

    this.tableRows.forEach(row => {
      let rowContent = '';
      const { status } = row;

      this.fieldsList.forEach(field => {
        const tdClasses = [
          cls.cell,
          `${cls.cell}--${field}`,
          `${cls.cell}--${statusText[status].toLowerCase()}`
        ];
        const renderField = fields[field].render;
        const renderedContent = renderField(row);

        if (renderedContent !== undefined) {
          rowContent += `<div class="${tdClasses.join(' ')}">
            ${renderedContent}
          </div>`;
        }
      });

      this.tBody.insertAdjacentHTML(
        'beforeEnd',
        `<a
          class="${cls.link}"
          href="${baseUrl}products/${row.id}">
          <div class="${cls.row}">${rowContent}</div>
        </a>`
      );
    });

    if (this.pageYOffset) {
      window.scrollTo(window.scrollX, this.pageYOffset);
    }
  }

  async changeDate (event) {
    if (!event.detail || !event.detail.dates) {
      return;
    }

    this.dates = event.detail.dates;
    this.fetchUrl = this.getFetchUrl();
    this.tBody.innerHTML = '';
    this.fillTBody();
  }

  filterQueryParams () {
    const filteredParams = {};
    for (const key in this.queryParams) {
      const value = this.queryParams[key];

      if (value === undefined) {
        continue;
      }

      if (fields[key] && fields[key].formatForQuery) {
        const formatted = fields[key].formatForQuery({ key, value });
        if (formatted) {
          filteredParams[formatted.key] = formatted.value;
        }
      } else {
        filteredParams[key] = value;
      }
    }

    return filteredParams;
  }

  addPageMessage (params) {
    const message = new PageMessage(params);

    this.tBody.insertAdjacentHTML(
      'beforeEnd',
      `<div class="${cls.row}">
        <div class="${cls.cellMessage}">${message.elem.outerHTML}</div>
      </div>`
    );
  }
}
