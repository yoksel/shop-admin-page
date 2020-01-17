export default async function renderPage (path, match) {
  const { default: Page } = await import(`../pages/${path}/index.js`);
  const page = new Page(match);
  const renderedPage = await page.render();

  const contentElem = document.getElementById('content');
  contentElem.innerHTML = '';
  contentElem.append(renderedPage);
}
