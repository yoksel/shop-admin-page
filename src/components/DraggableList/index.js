import {fetchJson} from '../../helpers/index.js';

export default class DraggableList extends HTMLElement {
  constructor() {
    super();

    this.apiUrl = process.env.API_URL || 'https://course-js.javascript.ru';
  }

  async connectedCallback() {
    const {url} = this.dataset;
    this.innerHTML = 'sdfsdfsdfsdf';

    this.url = this.apiUrl + url;
    await this.render();
  }

  async getData() {
    try {
      return await fetchJson(this.url);
    }
    catch(error) {
      console.log(error);
    }
  }

  async render() {
    this.data = await this.getData();

    if(!this.data) {
      this.insertAdjacentHTML('beforeEnd', 'No data for this list');
      return;
    }

    console.log(this.data);

    // this.values = Object.values(this.data);

    // if(this.values.length === 0) {
    //   this.values.push('No data');
    // }

    // const headerStr = this.getHeaderStr();

    let listStr = this.getListStr();
    this.elem.insertAdjacentHTML('beforeEnd', listStr);

    // this.addActions();
  }

  getListStr() {
    const items = this.data
      .map(item => {
        console.log(item);
      })
  }
}
