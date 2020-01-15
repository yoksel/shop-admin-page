import cls from './classes.js';
import statusText from './statusText.js';
import fields from './fields.js';
import {fetchJson, throttle} from '../../helpers/index.js';
import {getDirectionText} from './helpers.js';
import Message from '../Message/index.js';

import './styles.scss';

export default class SortableTable extends HTMLElement {
  constructor() {
    super();
    this.sorting = {
      current: null,
      isAsc: true,
    };

    this.page = {
      items: 20,
      current: 0,
      isDataEnded: false
    };
  }

  async connectedCallback() {
    const {url, fieldsList, orderField, orderDirection, isDynamic} = this.dataset;

    this.url = url;
    this.fieldsList = JSON.parse(fieldsList.replace(/'/g,'"'));
    this.isDynamic = +isDynamic;
    this.order =  {
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
  }

  async loadData() {
    this.isLoading = true;
    this.elem.dataset.loading = 1;

    return new Promise(async (resolve, reject) => {
      try {
        let tableData = await fetchJson(this.fetchUrl);

        this.isLoading = false;
        this.elem.dataset.loading = 0;

        resolve(tableData);
      } catch (error) {
        // Show error message to user
        const message = new Message({error});

        this.elem = message.elem;
        this.tBody.insertAdjacentHTML(
          'beforeEnd',
          `<tr class="${cls.row}"><td class="${cls.cellError}">${message.elem.outerHTML}</tr>`
        );
        reject(error.message);
      }
    });
  }

  initTable() {
    this.createLayout();
    this.addElemHeader();
    this.addTableEvents();

    this.fillTBody();
  }

  async fillTBody() {
    if(this.page.isDataEnded) {
      return;
    }

    this.tableRows = await this.loadData();

    // Last page
    if(this.tableRows.length < this.page.items) {
      this.page.isDataEnded = true;

      if(this.tableRows.length === 0) {
        return;
      }
    }

    if (!this.isDynamic && this.order && this.order.field) {
      this.sortRows(this.order.field);
      return;
    }

    this.renderTBody();
  }

  getFetchUrl() {
    const params = {
      start: this.page.current * this.page.items,
      end: (this.page.current + 1) * this.page.items,
      sort: this.order.field,
      order: getDirectionText(this.sorting.isAsc),
    };

    let paramsStr = '';
    for (let key in params) {
      paramsStr += `&_${key}=${params[key]}`;
    }
    return this.url + paramsStr;
  }

  createLayout() {
    this.classList.add(cls.elem);
    this.elem = document.createElement('table');
    this.elem.classList.add(cls.table);
    this.tBody = document.createElement('tbody');
    this.elem.append(this.tBody);
    this.elem.insertAdjacentHTML('beforeEnd', `<tfoot><tr><td colspan="${this.fieldsList.length}"><div class="spinner"></div></td></tr></tfoot>`);

    this.append(this.elem);
  }

  // Fill table header with content
  addElemHeader() {
    let headerContent = '';

    this.fieldsList.forEach(field => {
      let thClass = cls.cell;
      let data = {
        sorter: '',
        sortDirection: '',
      };
      if (fields[field].compare) {
        thClass += ` ${cls.cellSorter}`;
        data.sorter = 'data-sorter="1"';
      }
      if (field === this.order.field) {
        const direction = getDirectionText(this.sorting.isAsc);
        data.sortDirection = `data-sort-direction="${direction}"`;
      }
      headerContent += `<th class="${thClass}"
        data-name="${field}"
        ${data.sorter}
        ${data.sortDirection}
        >${fields[field].title}</th>`;
    });

    const theadStr = `<thead><tr class="${cls.header} ${cls.row}">
      ${headerContent}
    </tr></thead>`;

    this.elem.insertAdjacentHTML('afterBegin', theadStr);

    this.sorting.current = this.elem.querySelector(`[data-sort-direction]`);
  }

  // Sorter
  sorterOnClick(th) {
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

    if(this.isDynamic) {
      this.sortRowsDynamic(name);
      return;
    }

    this.sortRows(name);
  }

  // Sorting
  sortRows(field) {
    this.tableRows.sort(fields[field].compare);

    if (!this.sorting.isAsc) {
      this.tableRows.reverse();
    }

    this.tBody.innerHTML = '';
    this.renderTBody();
  }

  // Sorting
  sortRowsDynamic(field) {
    this.order.field = field;
    this.page.current = 0;
    this.page.isDataEnded = false;
    this.fetchUrl = this.getFetchUrl();
    this.tBody.innerHTML = '';
    this.fillTBody();
  }

  // Adding delegated events to table
  addTableEvents() {
    this.elem.addEventListener('click', this);
    window.addEventListener('scroll', this.onBodyScrollThrottle);
  }

  // Handles all events for table
  handleEvent() {
    // Sorting events
    if (event.target.dataset.sorter) {
      this.sorterOnClick(event.target);
    }
  }

  onBodyScroll() {
    if(this.isLoading) {
      return;
    }

    const htmlCoords = document.documentElement.getBoundingClientRect();
    let scrollDelta = htmlCoords.bottom - window.innerHeight;

    if (scrollDelta < 100) {
      this.page.current++;
      this.fetchUrl = this.getFetchUrl();
      this.fillTBody();
    }
  }

  // Fill table body cells with content
  renderTBody() {
    let tBodyContent = '';

    this.pageYOffset = window.pageYOffset;

    this.tableRows.forEach(row => {
      let rowContent = '';
      const { status } = row;

      this.fieldsList.forEach(field => {
        const tdClasses = [
          cls.cell,
          `${cls.cell}--${field}`,
          `${cls.cell}--${statusText[status].toLowerCase()}`,
        ];
        const renderField = fields[field].render;
        let renderedContent = renderField(row[field]);

        if (renderedContent) {
          rowContent += `<td class="${tdClasses.join(' ')}">${renderedContent}</td>`;
        }
      });

      this.tBody.insertAdjacentHTML(
        'beforeEnd',
        `<tr class="${cls.row}">${rowContent}</tr>`
      );
    });

    if(this.pageYOffset) {
      window.scrollTo(0, this.pageYOffset);
    }
  }
}
