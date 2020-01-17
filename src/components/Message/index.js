import './styles.scss'

export default class Message {
  constructor({ title, text, callback, callbackText, error }) {
    this.title = title
    this.text = text || 'Something went wrong'
    this.callback = callback
    this.callbackText = callbackText
    this.error = error

    if (!this.title && this.error) {
      this.title = 'Error'
    }

    this.createElement()
  }

  createElement() {
    this.elem = document.createElement('div')
    this.elem.classList.add('message')

    if (this.error) {
      this.elem.classList.add('message--error')
    }

    this.content = `<h3>${this.title}</h3><p>${this.text}</p>`

    if (this.error) {
      this.content += `<div class="message__error">
        <div class="message__error-text">
          <strong>${this.error.name}</strong>: ${this.error.message}</div>
      </div>`
    }

    this.elem.insertAdjacentHTML('afterBegin', this.content)
  }
}
