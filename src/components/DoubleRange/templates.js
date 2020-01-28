export const inputMarkup = `
<div class="double-range">
  <span
    class="double-range__line"
  ></span>

  <label class="double-range__label">
    <span
      class="
        double-range__label-text
        double-range__label-text--from"></span>
    <input
      class="
        double-range__input
        double-range__input--from"
      type="range"
      min="{min}"
      max="{max}"
      step="{step}"
      value="{value_min}"
      name="doube-range"
      data-key="from"
    >
    <span
      class="
        double-range__thumb
        double-range__thumb--from"
      data-key="from"
    ></span>
  </label>

  <label class="double-range__label">
    <span
      class="
        double-range__label-text
        double-range__label-text--to"></span>
    <input
      class="
        double-range__input
        double-range__input--to"
      type="range"
      min="{min}"
      max="{max}"
      step="{step}"
      value="{value_max}"
      name="doube-range"
      data-key="to"
    >
    <span
      class="
        double-range__thumb
        double-range__thumb--to"
      data-key="to"
    ></span>
  </label>
</div>
`;
