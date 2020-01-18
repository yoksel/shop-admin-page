import './styles.scss';

const cls = {
  elem: 'notification',
  warning: 'notification--warning',
  error: 'notification--error'
};

const second = 1000;

export default class Notification {
  constructor ({ message, container, type }) {
    this.message = message;
    this.container = container;
    this.type = type;
    this.duration = this.getDuration();
    this.classNames = this.getClasses();
    this.addElem();
    this.isFinished = false;
  }

  addElem () {
    this.elem = document.createElement('div');
    this.elem.classList.add(...this.classNames);
    this.elem.dataset.state = 'shown';
    this.elem.innerHTML = this.message;
    this.container.prepend(this.elem);

    setTimeout(() => { this.hideElem(); }, this.duration);
  }

  async hideElem (params = {}) {
    this.isFinished = true;
    this.elem.dataset.state = 'hidden';

    return new Promise((resolve, reject) => {
      this.elem.addEventListener('animationend', () => {
        this.elem.remove();
        resolve();
      });
    });
  }

  getDuration() {
    if(this.type === 'error') {
      return 5 * second;
    }

    return 3 * second;
  }

  getClasses() {
    const classes = [cls.elem];

    if(this.type && cls[this.type]) {
      classes.push(cls[this.type]);
    }

    return classes;
  }
}
