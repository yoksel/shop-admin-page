import fillTemplate from './helpers/fillTemplate.js';
import getWeekDays from './helpers/getWeekDays.js';
import {input, selector, calendar,day}  from './templates.js';

export default class RangePicker {
  constructor({dates}) {
    this.togglePicker = this.togglePicker.bind(this);
    this.selectorOnClick = this.selectorOnClick.bind(this);
    this.bodyOnClick = this.bodyOnClick.bind(this);
    this.updateRange = this.updateRange.bind(this);

    this.isOpened = false;
    this.elem = document.createElement('div');
    this.elem.classList.add('rangepicker');
    this.templates = getTemplates([
      'rangepicker-input',
      'rangepicker-selector',
      'rangepicker-calendar',
      'rangepicker-day'
    ]);
    this.dates = dates;
    this.monthes = this.getDisplayedMonthes();
    this.newDates = [];

    this.cls = {
      elem: 'rangepicker',
      elemOpen: 'rangepicker--open',
      input: 'rangepicker__input',
      from: 'rangepicker__from',
      to: 'rangepicker__to',
      selector: 'rangepicker__selector',
      calendars: 'rangepicker__calendars',
      calendar: 'rangepicker__calendar',
      cell: 'rangepicker__cell',
      selectedFrom: 'rangepicker__selected-from',
      selectedBetween: 'rangepicker__selected-between',
      selectedTo: 'rangepicker__selected-to',
    };

    this.addInput();
    this.elem.addEventListener('updateRange', this.updateRange);
  }

  getDisplayedMonthes() {
    const currentMonth = new Date(this.dates.from);
    let month = currentMonth.getMonth();
    let currentDay = 1;
    currentMonth.setDate(currentDay);

    const nextMonth = new Date(currentMonth);
    nextMonth.setMonth(++month);

    return [
      currentMonth,
      nextMonth
    ];
  }

  addInput() {
    const data = {
      from: this.dates.from.toLocaleDateString(),
      to: this.dates.to.toLocaleDateString()
    }
    const tmpl = this.templates['rangepicker-input'];
    const inputStr = fillTemplate({
      tmpl,
      data
    });

    this.elem.insertAdjacentHTML('afterBegin', inputStr);
    this.input = this.elem.querySelector(`.${this.cls.input}`);
    this.inputFrom = this.input.querySelector(`.${this.cls.from}`);
    this.inputTo = this.input.querySelector(`.${this.cls.to}`);

    this.input.addEventListener('pointerdown', this.togglePicker);
    // capture: true reverses order of events
    // click on body fires first
    document.body.addEventListener('pointerdown', this.bodyOnClick, {capture: true});
  }

  bodyOnClick() {
    const parentRangePicker = event.target.closest(`.${this.cls.elem}`);

    if(!parentRangePicker && this.isOpened) {
      this.hidePicker();
    }
  }

  updateInput() {
    this.inputFrom.innerHTML = this.dates.from.toLocaleDateString();
    this.inputTo.innerHTML = this.dates.to.toLocaleDateString();
  }

  updateRange() {
    this.newDates.sort((a, b) => {
      return a.valueOf() - b.valueOf()
    });
    this.dates = {
      from: this.newDates[0],
      to: this.newDates[1]
    }
    this.monthes = this.getDisplayedMonthes();
    this.newDates = [];
    this.updateInput();
    this.hidePicker();
  }

  togglePicker() {
    if(this.isOpened) {
      this.hidePicker();
      return;
    }

    this.showPicker();
    this.isOpened = true;
  }

  showPicker() {
    if(!this.selector) {
      this.addSelector();

      this.selector = this.elem.querySelector(`.${this.cls.selector}`);
      this.calendars = this.elem.querySelector(`.${this.cls.calendars}`);

      this.selector.addEventListener('click', this.selectorOnClick)
    }
    else {
      this.calendars.innerHTML = "";
    }

    this.addCalendars();
    this.elem.classList.add(this.cls.elemOpen);
  }

  hidePicker() {
    this.elem.classList.remove(this.cls.elemOpen);
    this.isOpened = false;
    this.newDates = [];
  }

  addSelector() {
    const selectorStr = this.templates['rangepicker-selector'];
    this.elem.insertAdjacentHTML('beforeEnd', selectorStr);
  }

  selectorOnClick() {
    const {dataset} = event.target;
    if(dataset.value) {
      this.setDay(event.target);
    }
    else if(dataset.direction){
      this.moveMonth(dataset.direction);
    }
  }

  setDay(elem) {
    const date = elem.dataset.value;

    if(this.newDates.length === 0) {
      this.newDates.push(new Date(date));
      this.updateSelected(elem);
      return;
    }

    this.newDates.push(new Date(date));
    this.elem.dispatchEvent(new CustomEvent('updateRange'));
  }

  moveMonth(direction) {
    const {from, to} = this.dates;

    let step = 1;
    if(direction == 'prev') {
      step = -1;
    }

    this.monthes.forEach(date => {
      date.setMonth(date.getMonth() + step);
    });

    this.updateCalendars();
  }

  addCalendars() {
    this.monthes.forEach(date => {
      this.calendars.insertAdjacentHTML('beforeEnd', this.getCalendar(date));
    });
  }

  updateCalendars() {
    this.calendars.innerHTML = '';
    this.addCalendars();
  }

  updateSelected(elem) {
    const cells = this.elem.querySelectorAll(`.${this.cls.cell}`);
    const classes = [
      this.cls.selectedBetween,
      this.cls.selectedFrom,
      this.cls.selectedTo
    ];

    cells.forEach(cell => {
      cell.classList.remove(...classes);
    });

    elem.classList.add(this.cls.selectedFrom);
  }

  getCalendar(date) {
    const data = {
      month: date.toLocaleString('default', { month: 'long' }),
      weekdays: getWeekDays('div'),
      days: this.getCells(date)
    };

    const tmpl = this.templates['rangepicker-calendar'];
    const calendarStr = fillTemplate({
      tmpl,
      data
    });

    return calendarStr;
  }

  getCells(date) {
    const tmpl = this.templates['rangepicker-day'];
    const currentDate = new Date(date);
    let month = currentDate.getMonth();
    let currentDay = 1;
    let daysStr = '';

    while(currentDate.getMonth() === month) {
      let style = this.getCellStartStyle(currentDate);
      let mod = this.getCellMod(currentDate);

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

  getCellStartStyle(date) {
    let style = '';
    let day = date.getDate();

    if(day > 1) {
      return style;
    }

    let weekdayNum = date.getDay();
    if(weekdayNum == 0) {
      weekdayNum = 7;
    }

    style = `grid-column-start: ${weekdayNum}`;

    return style;
  }

  getCellMod(date) {
    let mod = '';

    if(this.newDates.length > 0) {
      return mod;
    }

    const dateMs = date.valueOf();
    const dateFromMs = this.dates.from.valueOf();
    const dateToMs = this.dates.to.valueOf();

    if(dateMs > dateFromMs && dateMs < dateToMs){
      mod = this.cls.selectedBetween;
    }
    else if(dateMs === dateFromMs) {
      mod = this.cls.selectedFrom;
    }
    else if(dateMs === dateToMs) {
      mod = this.cls.selectedTo;
    }

    return mod;
  }
}
