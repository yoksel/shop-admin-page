import { createElement } from '../../helpers/index.js';
import './styles.scss';

export default class Layout extends HTMLElement {
  connectedCallback () {
    this.append(this.render());
    this.classList.add('page');
  }

  render () {
    return createElement(`<div class="page-container">
      <aside class="page-aside">
        <h1 class="page-aside__title">
          <a href="/">Shop admin</a>
        </h1>

        <nav class="page-aside__nav">
          <ul class="page-aside__list">
            <li class="page-aside__item">
              <a
                class="page-aside__link page-aside__link--dashboard"
                href="./">
                <span class="page-aside__link-text">
                  Dashboard
                </span>
              </a>
            </li>
            <li class="page-aside__item">
              <a
                class="page-aside__link page-aside__link--products"
                href="./products">
                <span class="page-aside__link-text">
                  Products
                </span>
              </a>
            </li>
            <li class="page-aside__item">
              <a
                class="page-aside__link page-aside__link--categories"
                href="./categories">
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
