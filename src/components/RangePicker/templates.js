export const input = `<button class="rangepicker__input" data-elem="input" type="button">
  <span
    class="rangepicker__from"
    data-elem="from">{from}</span> -
  <span
    class="rangepicker__to"
    data-elem="to"
    >{to}</span>
</button>`;

export const selector = `
<div class="rangepicker__selector" data-elem="selector">
  <div class="rangepicker__selector-arrow"></div>
  <button
    type="button"
    class="rangepicker__selector-control rangepicker__selector-control--left"
    data-direction="prev"
  ></button>
  <button
    type="button"
    class="rangepicker__selector-control rangepicker__selector-control--right"
    data-direction="next"
  ></button>
  <div class="rangepicker__calendars"></div>
</div>
`;

export const calendar = `
<div class="rangepicker__calendar">
  <div class="rangepicker__month-indicator">
    <time datetime="November">{month}</time>
  </div>
  <div class="rangepicker__day-of-week">
    {weekdays}
  </div>
  <div class="rangepicker__date-grid">
    {days}
  </div>
</div>
`;

export const day = `
<button type="button" class="rangepicker__cell {mod}" data-value="{dateTime}" style="{style}">{dateNum}</button>
`;

export default {
  input,
  selector,
  calendar,
  day
};
