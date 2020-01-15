import createElement from '../../helpers/createElement.js';
import './styles.scss';

export default class Layout extends HTMLElement  {
  connectedCallback() {
    this.append(this.render());
  }

  render() {
    return createElement(`<div class="page">
      <div class="page__container">
        <aside class="page__aside">
          (navigation will be here)
        </aside>

        <main class="page__main" id="content">
          main content here
        </main>
      </div>
      <footer class="page__footer">
        <a href="/products">test link</a>
        <a href="/dashboard">test link</a>
        <a href="/">test link</a>
      </footer>
    </div>`);
  }
};
