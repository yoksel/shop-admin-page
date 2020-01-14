import createElement from '../../helpers/createElement.js';

export default class {
  async render() {
    return createElement(`<div class="404">
        <h1>Page not found</h1>
        <p>No such page</p>
      </div>`
    );
  }
};

