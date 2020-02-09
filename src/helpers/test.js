import {
  createElement,
  escapeHTML,
  fillTemplate,
  formatDate,
  formatTotal,
  getDateFromString,
  getWeekDays,
  throttle,
  fetchJson
} from './index';

describe('Check formatTotal()', function () {
  it('formatTotal returns num with $', function () {
    expect(formatTotal(5)).toBe('$5');
  });

  it('formatTotal returns $1,200 for 1000', function () {
    expect(formatTotal(1200)).toBe('$1,200');
  });

  it('formatTotal returns "" for ""', function () {
    expect(formatTotal('')).toBe('');
  });

  it('formatTotal returns "" for undefined', function () {
    expect(formatTotal()).toBe(undefined);
  });
});

describe('Check escapeHTML()', function () {
  it('escapeHTML escapes HTML', function () {
    expect(escapeHTML(`&"'<>`)).toBe('&amp;&quot;&#39;&lt;&gt;');
  });
});
