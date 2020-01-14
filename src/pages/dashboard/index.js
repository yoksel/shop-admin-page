import createElement from '../../helpers/createElement.js';

export default class {
  async render() {
    return createElement(`<div>
        <h1>Dashboard</h1>
        <p>Hello</p>
      </div>`
    );
  }
};

