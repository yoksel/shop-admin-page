import cls from './classes.js';

export const input = `<button class="${cls.input}" data-elem="input" type="button">
  <span
    class="${cls.from}"
    data-elem="from">{from}</span> -
  <span
    class="${cls.to}"
    data-elem="to"
    >{to}</span>
</button>`;

export const selector = `
<div class="${cls.selector}" data-elem="selector">
  <div class="${cls.selectorArrow}"></div>
  <button
    type="button"
    class="${cls.selectorControl} ${cls.selectorControl}--left"
    data-direction="prev"
  ></button>
  <button
    type="button"
    class="${cls.selectorControl} ${cls.selectorControl}--right"
    data-direction="next"
  ></button>
  <div class="${cls.calendars}"></div>
</div>
`;

export const calendar = `
<div class="${cls.calendar}">
  <div class="${cls.monthIndicator}">
    <time datetime="{month}">{month}</time>
  </div>
  <div class="${cls.dayOfWeek}">
    {weekdays}
  </div>
  <div class="${cls.dateGrid}">
    {days}
  </div>
</div>
`;

export const day = `
<button type="button" class="${cls.cell} {mod}" data-value="{dateTime}" style="{style}">{dateNum}</button>
`;

export default {
  input,
  selector,
  calendar,
  day
};
