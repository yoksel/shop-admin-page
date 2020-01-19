import cls from './classes.js';

export const header = `<header class="${cls.header}">
  <h3 class="${cls.title}">{title}</h3>
  <div class="${cls.total}">{total}</div>
</header>`;

export const chartItem = `<li
  class="${cls.item}"
  data-tooltip-content="{tootipContent}"
  style="height: {height}"></li>`;

export default {
  header,
  chartItem
};
