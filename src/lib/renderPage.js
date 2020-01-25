// from https://github.com/js-tasks-ru/course-js-frontend/blob/master/lib/render-page.js

export default async function renderPage (path, match) {
  const { default: Page } = await import(/* webpackMode: "eager" */ `../pages/${path}/index.js`);
  const page = new Page(match);
  const renderedPage = await page.render();

  const contentElem = document.getElementById('content');
  contentElem.innerHTML = '';
  contentElem.append(renderedPage);
}
