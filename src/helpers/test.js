import {
  createElement,
  escapeHTML,
  fillTemplate,
  formatDate,
  formatTotal,
  getWeekDays,
  throttle,
  fetchJson
} from './index';

// createElement
describe('Check createElement()', function () {
  const elem = createElement(`<div class="hello-world"></div>`);

  it('createElement returns DOMElement', function () {
    expect(elem instanceof HTMLDivElement).toBe(true);
  });
  it('createElement returns element with expected class', function () {
    expect(elem.classList.contains('hello-world')).toBe(true);
  });
});

// escapeHTML
describe('Check escapeHTML()', function () {
  it('escapeHTML() escapes HTML', function () {
    expect(escapeHTML(`&"'<>`)).toBe('&amp;&quot;&#39;&lt;&gt;');
  });
});

// fillTemplate
describe('Check fillTemplate()', function () {
  const tmpl = `<div class="{class}">{text}</div>`;
  const data = {
    class: 'block',
    text: 'Hello!'
  };

  const filledTemplate = fillTemplate({tmpl, data});
  const filledTemplateNoTemplate = fillTemplate({tmpl: '', data});
  const filledTemplateNoData = fillTemplate({tmpl, data: ''});

  it('fillTemplate() returns string with replacements', function () {
    expect(filledTemplate).toBe('<div class="block">Hello!</div>');
  });

  it('fillTemplate() returns undefined when tmpl is empty', function () {
    expect(filledTemplateNoTemplate).toBe(undefined);
  });

  it('fillTemplate() returns undefined when data is empty', function () {
    expect(filledTemplateNoData).toBe(undefined);
  });
});

// formatDate
describe('Check formatDate()', function () {
  it('formatDate() returns formatted date from string', function () {
    expect(formatDate('2020-01-28')).toBe('Jan 28, 2020');
  });

  it('formatDate() returns undefined for empty string', function () {
    expect(formatDate()).toBe(undefined);
  });
});

// formatTotal
describe('Check formatTotal()', function () {
  it('formatTotal() returns num with $', function () {
    expect(formatTotal(5)).toBe('$5');
  });

  it('formatTotal() returns $1,200 for 1000', function () {
    expect(formatTotal(1200)).toBe('$1,200');
  });

  it('formatTotal() returns "" for ""', function () {
    expect(formatTotal('')).toBe('');
  });

  it('formatTotal() returns "" for undefined', function () {
    expect(formatTotal()).toBe(undefined);
  });
});


// getWeekDays
describe('Check getWeekDays()', function () {
  it('getWeekDays(div) returns weekdays wrapped with given tag', function () {
    expect(getWeekDays('div')).toBe('<div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div><div>S</div>');
  });

  it('getWeekDays() returns only weekdays', function () {
    expect(getWeekDays()).toBe('MTWTFSS');
  });
});
