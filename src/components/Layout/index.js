import { createElement } from '../../helpers/index.js';
import './styles.scss';

const baseUrl = process.env.BASE_URL || '/';

export default class Layout extends HTMLElement {
  connectedCallback () {
    this.classList.add('page');
    this.append(this.render());
  }

  render () {
    return createElement(`<div class="page-container">
      <aside class="page-aside">
        <h1 class="page-aside__title">
          <a href="${baseUrl}">Shop admin</a>
        </h1>

        <nav class="page-aside__nav">
          <ul class="page-aside__list">
            <li class="page-aside__item">
              <a
                class="page-aside__link page-aside__link--dashboard"
                href="${baseUrl}">
                <span class="page-aside__link-text">
                  Dashboard
                </span>
              </a>
            </li>
            <li class="page-aside__item">
              <a
                class="page-aside__link page-aside__link--products"
                href="${baseUrl}products">
                <span class="page-aside__link-text">
                  Products
                </span>
              </a>
            </li>
            <li class="page-aside__item">
              <a
                class="page-aside__link page-aside__link--categories"
                href="${baseUrl}categories">
                <span class="page-aside__link-text">
                  Categories
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <main class="page-main" id="content">
        <!-- main content will be here -->
      </main>
    </div>`);
  }
}
