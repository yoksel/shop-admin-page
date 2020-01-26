import { createElement, fetchJson, fillTemplate } from '../../../helpers/index.js';
import PageMessage from '../../../components/PageMessage/index.js';
import fields from './fields.js';
import cls from './classes.js';
import { imgListItem } from './templates';
import notifier from '../../../lib/notifier.js';
import { getPageTitle, getHeaderStr, getInputsList } from './helpers.js';

import './icon-trash.svg';
import './style.scss';

const CLIENT_ID = 'e2b5c366b2d23fb';
const baseUrl = process.env.BASE_URL || '/';

export default class {
  constructor (match) {
    this.id = match[0]
      .replace('products/', '')
      .replace(/^add$/, '');

    if (!match[0]) {
      // this.id = '3d-ochki-optoma-zd302';
    }

    this.apiUrl = process.env.API_URL || 'https://course-js.javascript.ru';
    this.fetchProductUrl = this.apiUrl + `/api/rest/products?id=${this.id}`;
    this.fetchCategoriesUrl = this.apiUrl + '/api/rest/categories?_sort=weight&_refs=subcategory';
    this.fetchSaveUrl = this.apiUrl + '/api/rest/products';

    this.uploadImage = this.uploadImage.bind(this);
    this.deleteImage = this.deleteImage.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  async render () {
    const headerStr = getHeaderStr(this.id);

    const { productData, categories, errorMessage } = await this.loadData();

    if (errorMessage) {
      return createElement(`<div class="page-content">
        ${headerStr}

        ${errorMessage.outerHTML}
      </div>
      `);
    }

    const product = productData[0];
    const getIdInput = fields.id.render({ id: this.id });
    const inputs = getInputsList({ product, categories });

    this.elem = createElement(`<div class="page-content">
      ${headerStr}

      <form class="${cls.form}">
        ${getIdInput}
        <ul class="${cls.list}">
          ${inputs.join('\n')}
        </ul>

        <footer class="${cls.footer}">
          <button class="${cls.submit} ${cls.submitColored}">Save</button>
        </footer>
      </form>
    </div>`);

    this.imgUploadButton = this.elem.querySelector(`.${cls.inputUpload}`);
    this.imgList = this.elem.querySelector(`.${cls.imgsList}`);
    this.submitBtn = this.elem.querySelector(`.${cls.submit}`);
    this.form = this.elem.querySelector(`.${cls.form}`);
    this.idInput = this.elem.querySelector('input[name="id"]');
    this.pageContentTitleMain = this.elem.querySelector(`.${cls.pageContentTitleMain}`);

    if (!this.id) {
      this.elem.classList.add(cls.pageContentCreate);
    }

    this.addEvents();

    return this.elem;
  }

  addEvents () {
    this.imgUploadButton.addEventListener('click', this.uploadImage);
    this.form.addEventListener('submit', this.submitForm);
    this.imgList.addEventListener('click', this.deleteImage);
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
    notifier('Image was loaded');
  }

  deleteImage (event) {
    const item = event.target.closest(`.${cls.imgsItem}`);
    if (!item) {
      return;
    }

    item.remove();
  }

  async submitForm (event) {
    event.preventDefault();
    const data = this.collectFormData();

    const params = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    const result = await fetchJson(this.fetchSaveUrl, params);

    let notificationText = 'Product saved';

    if (!data.id) {
      notificationText = 'Product created';
      this.idInput.value = result.id;
      this.elem.classList.remove(cls.pageContentCreate);
      this.pageContentTitleMain.innerHTML = getPageTitle(result.id);

      const href = `${baseUrl}product/${result.id}`;
      history.pushState(null, null, href);
    }

    notifier(notificationText, 'success');
  }

  collectFormData () {
    const data = {};
    const images = {};
    const initialFormData = Array.from(new FormData(this.form));

    for (const item of initialFormData) {
      const key = item[0];
      let value = item[1];

      if (fields[key]) {
        if (fields[key] && fields[key].formatForRequest) {
          value = fields[key].formatForRequest(value);
        }

        data[key] = value;
      } else if (key.includes('image-')) {
        if (!images[key]) {
          images[key] = {
            url: value
          };
        } else {
          images[key].source = value;
        }
      }
    }

    data.images = Object.values(images);

    return data;
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
