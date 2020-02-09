import renderLayout from './index';

describe('Test rendering page layout', function () {
  const layout = renderLayout();

  it('Layout exists', function () {
    expect(layout instanceof HTMLDivElement).toBe(true);
  });
  it("Layout has class 'page-container'", function () {
    expect(layout.classList.contains('page-container')).toBe(true);
  });
});
