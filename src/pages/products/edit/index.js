import { createElement, fetchJson, fillTemplate } from '../../../helpers/index.js';
import PageMessage from '../../../components/PageMessage/index.js';
import fields from './fields.js';
import fieldsOrder from './fieldsOrder.js';
import cls from './classes.js';
import { header, imgListItem } from './templates';

import './icon-trash.svg';
import './style.scss';

const CLIENT_ID = 'e2b5c366b2d23fb';

export default class {
  constructor (match) {
    this.id = match[0].replace('products/', '');

    if (!match[0]) {
      this.id = '3d-ochki-optoma-zd302';
    }

    this.apiUrl = process.env.API_URL || 'https://course-js.javascript.ru';
    this.fetchProductUrl = this.apiUrl + `/api/rest/products?id=${this.id}`;
    this.fetchCategoriesUrl = this.apiUrl + '/api/rest/categories?_sort=weight&_refs=subcategory';

    this.uploadImage = this.uploadImage.bind(this);
  }

  async render () {
    const { productData, categories, errorMessage } = await this.loadData();

    if (errorMessage) {
      return createElement(`<div class="page-content">
        ${header}

        ${errorMessage.outerHTML}
      </div>
      `);
    }

    const product = productData[0];
    const inputs = this.getInputsList({ product, categories });

    this.elem = createElement(`<div class="page-content">
      ${header}

      <form action="" class="${cls.form}}">
        <ul class="${cls.list}">
          ${inputs.join('\n')}
        </ul>

        <footer class="${cls.footer}">
          <button class="${cls.submit}">Save</button>
        </footer>
      </form>
    </div>`);

    this.imgUploadButton = this.elem.querySelector(`.${cls.inputUpload}`);
    this.imgList = this.elem.querySelector(`.${cls.imgsList}`);

    this.addEvents();

    return this.elem;
  }

  getInputsList ({ product, categories }) {
    const inputs = [];

    for (const { name, mods } of fieldsOrder) {
      if (fields[name]) {
        let params = product;

        if (name === 'subcategory') {
          params = {
            ...params,
            categories
          };
        }

        const input = fields[name].render(params);
        let classes = [cls.item];

        if (mods) {
          classes = classes.concat(mods);
        }

        inputs.push(`<li class="${classes.join(' ')}">${input}</li>`);
      }
    }

    return inputs;
  }

  addEvents () {
    this.imgUploadButton.addEventListener('click', this.uploadImage);
  }

  async uploadImage () {
    this.fileInput = this.fileInputCreate();
    this.fileInput.click();
    let imageData;

    const runUpload = async () => {
      this.imgUploadButton.classList.add(cls.inputUploadLoading);
      this.imgUploadButton.disabled = true;

      const file = this.fileInput.files[0];

      if (!file) {
        return;
      }

      const formData = new FormData();
      formData.append('image', file);

      try {
        const result = await fetchJson('https://api.imgur.com/3/image', {
          method: 'POST',
          headers: {
            Authorization: `Client-ID ${CLIENT_ID}`
          },
          body: formData
        });

        imageData = result.data;
      } finally {
        this.imgUploadButton.classList.remove(cls.inputUploadLoading);
        this.imgUploadButton.disabled = false;
        this.fileInput.remove();
      }

      this.addImageItem(imageData);
    };

    this.fileInput.addEventListener('change', runUpload);
  }

  fileInputCreate () {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    // must be in body for IE
    document.body.append(fileInput);
    fileInput.hidden = true;

    return fileInput;
  }

  addImageItem ({ id, link, type }) {
    const ext = type.split('/')[1];
    const item = fillTemplate({
        tmpl: imgListItem,
        data: {
          url: link,
          source: `${id}.${ext}`
        }
      });
    this.imgList.insertAdjacentHTML('beforeEnd', item);
  }

  async loadData () {
    // TODO: add loading indicator
    try {
      const data = await Promise.all([
        fetchJson(this.fetchProductUrl),
        fetchJson(this.fetchCategoriesUrl)
      ]);

      return { productData: data[0], categories: data[1] };
    } catch (error) {
      const message = new PageMessage({ error });
      return { errorMessage: message.elem };
    }
  }
}
