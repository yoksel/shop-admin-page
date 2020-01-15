import {createElement} from '../../helpers/index.js';
import './styles.scss';

export default class Layout extends HTMLElement  {
  connectedCallback() {
    this.append(this.render());
  }

  render() {
    return createElement(`<div class="page">
      <div class="page-container">
        <aside class="page-aside">
          <nav>
            <ul>
              <li>
                <a href="/products">test link</a>
              </li>
              <li>
                <a href="/dashboard">test link</a>
              </li>
              <li>
                <a href="/">test link</a>
              </li>
            </ul>
          </nav>
        </aside>

        <main class="page-main" id="content">
          <!-- main content will be here -->
        </main>
      </div>
    </div>`);
  }
};
