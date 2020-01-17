import renderPage from './renderPage.js'

export default class Router {
  constructor() {
    this.routes = []

    this.documentClick = this.documentClick.bind(this)

    document.addEventListener('click', this.documentClick)
  }

  static instance() {
    if (!this._instance) {
      this._instance = new Router()
    }
    return this._instance
  }

  addRoute(pattern, path) {
    this.routes.push({ pattern, path })
    return this
  }

  setNotFoundPage(path) {
    this.notFoundPagePath = path
    return this
  }

  navigate(href) {
    history.pushState(null, null, href)
    this.route()
  }

  async route() {
    const strippedPath = cleanPath(window.location.pathname)
    let match

    for (const route of this.routes) {
      match = strippedPath.match(route.pattern)
      if (match) {
        this.page = await this.changePage(route.path, match)
        break
      }
    }

    if (!match) {
      this.page = await this.changePage(this.notFoundPagePath)
    }

    // custom event here
  }

  async changePage(path, match) {
    if (this.page && this.page.destroy) {
      this.page.destroy()
    }

    this.page = await renderPage(path, match)
  }

  addListener() {
    window.addEventListener('popstate', () => this.route())
    this.route()
  }

  documentClick(event) {
    const link = event.target.closest('a')

    if (!link) {
      return
    }

    const href = link.getAttribute('href')

    if (href && href.startsWith('/')) {
      event.preventDefault()
      this.navigate(href)
    }
  }
}

function cleanPath(path) {
  return decodeURI(path)
    .replace(/^\/|\/$/, '')
    .replace(/\?.*$/, '')
    .replace(/#.*$/, '')
}
