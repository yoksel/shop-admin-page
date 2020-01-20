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
        <nav>
          <ul>
            <li>
              <a href="./">Dashboard</a>
            </li>
            <li>
              <a href="./products">Products</a>
            </li>
            <li>
              <a href="./categories">Categories</a>
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
