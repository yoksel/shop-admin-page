import createElement from '../../helpers/createElement.js';
import './styles.scss';

export default class Layout extends HTMLElement  {
  connectedCallback() {
    this.append(this.render());
  }

  render() {
    return createElement(`<div class="page">
      <div class="page-container">
        <aside class="page-aside">
          (navigation will be here)
        </aside>

        <main class="page-main" id="content">
          main content here
        </main>
      </div>
      <footer class="page-footer">
        <a href="/products">test link</a>
        <a href="/dashboard">test link</a>
        <a href="/">test link</a>
      </footer>
    </div>`);
  }
};
