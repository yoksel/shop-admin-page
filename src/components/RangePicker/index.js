import {
  fillTemplate,
  getWeekDays
} from '../../helpers/index.js';
import templates from './templates.js';
import cls from './classes.js';

import './styles.scss';
import './arrow-icon.svg';
import './calendar-icon.svg';

export default class RangePicker {
  constructor (params) {
    this.togglePicker = this.togglePicker.bind(this);
    this.selectorOnClick = this.selectorOnClick.bind(this);
    this.bodyOnClick = this.bodyOnClick.bind(this);
    this.updateRange = this.updateRange.bind(this);

    this.isOpened = false;
    this.elem = document.createElement('div');
    this.elem.classList.add('rangepicker');

    const { from, to } = params;

    this.dates = {
      from: new Date(from),
      to: new Date(to)
    };

    this.monthes = this.getDisplayedMonthes();
    this.newDates = [];

    this.addInput();
    document.addEventListener('changeDate', this.updateRange);
  }

  destroy () {
    document.removeEventListener('changeDate', this.updateRange);
  }

  getDisplayedMonthes () {
    const currentMonth = new Date(this.dates.from);
    let month = currentMonth.getMonth();
    const currentDay = 1;
    currentMonth.setDate(currentDay);

    const nextMonth = new Date(currentMonth);
    nextMonth.setMonth(++month);

    return [currentMonth, nextMonth];
  }

  addInput () {
    const data = {
      from: this.dates.from.toLocaleDateString(),
      to: this.dates.to.toLocaleDateString()
    };
    const tmpl = templates.input;
    const inputStr = fillTemplate({
      tmpl,
      data
    });

    this.elem.insertAdjacentHTML('afterBegin', inputStr);
    this.input = this.elem.querySelector(`.${cls.input}`);
    this.inputFrom = this.input.querySelector(`.${cls.from}`);
    this.inputTo = this.input.querySelector(`.${cls.to}`);

    this.input.addEventListener('pointerdown', this.togglePicker);
    // capture: true reverses order of events
    // click on body fires first
    document.body.addEventListener('pointerdown', this.bodyOnClick, {
      capture: true
    });
  }

  bodyOnClick () {
    const parentRangePicker = event.target.closest(`.${cls.elem}`);

    if (!parentRangePicker && this.isOpened) {
      this.hidePicker();
    }
  }

  updateInput () {
    this.inputFrom.innerHTML = this.dates.from.toLocaleDateString();
    this.inputTo.innerHTML = this.dates.to.toLocaleDateString();
  }

  updateRange () {
    this.monthes = this.getDisplayedMonthes();
    this.newDates = [];
    this.updateInput();
    this.hidePicker();
  }

  togglePicker () {
    if (this.isOpened) {
      this.hidePicker();
      return;
    }

    this.showPicker();
    this.isOpened = true;
  }

  showPicker () {
    if (!this.selector) {
      this.addSelector();

      this.selector = this.elem.querySelector(`.${cls.selector}`);
      this.calendars = this.elem.querySelector(`.${cls.calendars}`);

      this.selector.addEventListener('click', this.selectorOnClick);
    } else {
      this.calendars.innerHTML = '';
    }

    this.addCalendars();
    this.elem.classList.add(cls.elemOpen);
  }

  hidePicker () {
    this.elem.classList.remove(cls.elemOpen);
    this.isOpened = false;
    this.newDates = [];
  }

  addSelector () {
    const selectorStr = templates.selector;
    this.elem.insertAdjacentHTML('beforeEnd', selectorStr);
  }

  selectorOnClick () {
    const { dataset } = event.target;
    if (dataset.value) {
      this.setDay(event.target);
    } else if (dataset.direction) {
      this.moveMonth(dataset.direction);
    }
  }

  setDay (elem) {
    const date = elem.dataset.value;

    if (this.newDates.length === 0) {
      this.newDates.push(new Date(date));
      this.updateSelected(elem);
      return;
    }

    this.newDates.push(new Date(date));

    this.newDates.sort((a, b) => {
      return a - b;
    });
    this.dates = {
      from: this.newDates[0],
      to: this.newDates[1]
    };

    document.dispatchEvent(
      new CustomEvent('changeDate', {
        detail: {
          dates: {
            from: this.dates.from.toISOString(),
            to: this.dates.to.toISOString()
          }
        }
      })
    );
  }

  moveMonth (direction) {
    let step = 1;
    if (direction === 'prev') {
      step = -1;
    }

    this.monthes.forEach(date => {
      date.setMonth(date.getMonth() + step);
    });

    this.updateCalendars();
  }

  addCalendars () {
    this.monthes.forEach(date => {
      this.calendars.insertAdjacentHTML('beforeEnd', this.getCalendar(date));
    });
  }

  updateCalendars () {
    this.calendars.innerHTML = '';
    this.addCalendars();
  }

  updateSelected (elem) {
    const cells = this.elem.querySelectorAll(`.${cls.cell}`);
    const classes = [cls.selectedBetween, cls.selectedFrom, cls.selectedTo];

    cells.forEach(cell => {
      cell.classList.remove(...classes);
    });

    elem.classList.add(cls.selectedFrom);
  }

  getCalendar (date) {
    const data = {
      month: date.toLocaleString('default', { month: 'long' }),
      weekdays: getWeekDays('div'),
      days: this.getCells(date)
    };

    const tmpl = templates.calendar;
    const calendarStr = fillTemplate({
      tmpl,
      data
    });

    return calendarStr;
  }

  getCells (date) {
    const tmpl = templates.day;
    const currentDate = new Date(date);
    const month = currentDate.getMonth();
    let currentDay = 1;
    let daysStr = '';

    while (currentDate.getMonth() === month) {
      const style = this.getCellStartStyle(currentDate);
      const mod = this.getCellMod(currentDate);

      const data = {
        dateTime: currentDate.toISOString(),
        dateNum: currentDate.getDate(),
        style,
        mod
      };
      daysStr += fillTemplate({
        tmpl,
        data
      });

      currentDate.setDate(++currentDay);
    }

    return daysStr;
  }

  getCellStartStyle (date) {
    let style = '';
    const day = date.getDate();

    if (day > 1) {
      return style;
    }

    let weekdayNum = date.getDay();
    if (weekdayNum === 0) {
      weekdayNum = 7;
    }

    style = `grid-column-start: ${weekdayNum}`;

    return style;
  }

  getCellMod (date) {
    let mod = '';

    if (this.newDates.length > 0) {
      return mod;
    }

    const dateMs = date.valueOf();
    const dateFromMs = this.dates.from.valueOf();
    const dateToMs = this.dates.to.valueOf();

    if (dateMs > dateFromMs && dateMs < dateToMs) {
      mod = cls.selectedBetween;
    } else if (dateMs === dateFromMs) {
      mod = cls.selectedFrom;
    } else if (dateMs === dateToMs) {
      mod = cls.selectedTo;
    }

    return mod;
  }
}
