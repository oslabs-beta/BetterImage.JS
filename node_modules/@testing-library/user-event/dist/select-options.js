"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deselectOptions = exports.selectOptions = void 0;

var _dom = require("@testing-library/dom");

var _click = require("./click");

var _focus = require("./focus");

var _hover = require("./hover");

function selectOptionsBase(newValue, select, values, init) {
  if (!newValue && !select.multiple) {
    throw (0, _dom.getConfig)().getElementError(`Unable to deselect an option in a non-multiple select. Use selectOptions to change the selection instead.`, select);
  }

  const valArray = Array.isArray(values) ? values : [values];
  const allOptions = Array.from(select.querySelectorAll('option, [role="option"]'));
  const selectedOptions = valArray.map(val => {
    if (allOptions.includes(val)) {
      return val;
    } else {
      const matchingOption = allOptions.find(o => o.value === val || o.innerHTML === val);

      if (matchingOption) {
        return matchingOption;
      } else {
        throw (0, _dom.getConfig)().getElementError(`Value "${val}" not found in options`, select);
      }
    }
  }).filter(option => !option.disabled);
  if (select.disabled || !selectedOptions.length) return;

  if (select.multiple) {
    for (const option of selectedOptions) {
      // events fired for multiple select are weird. Can't use hover...
      _dom.fireEvent.pointerOver(option, init);

      _dom.fireEvent.pointerEnter(select, init);

      _dom.fireEvent.mouseOver(option);

      _dom.fireEvent.mouseEnter(select);

      _dom.fireEvent.pointerMove(option, init);

      _dom.fireEvent.mouseMove(option, init);

      _dom.fireEvent.pointerDown(option, init);

      _dom.fireEvent.mouseDown(option, init);

      (0, _focus.focus)(select, init);

      _dom.fireEvent.pointerUp(option, init);

      _dom.fireEvent.mouseUp(option, init);

      selectOption(option);

      _dom.fireEvent.click(option, init);
    }
  } else if (selectedOptions.length === 1) {
    (0, _click.click)(select, init);
    selectOption(selectedOptions[0]);
  } else {
    throw (0, _dom.getConfig)().getElementError(`Cannot select multiple options on a non-multiple select`, select);
  }

  function selectOption(option) {
    if (option.getAttribute('role') === 'option') {
      option == null ? void 0 : option.setAttribute == null ? void 0 : option.setAttribute('aria-selected', newValue);
      (0, _hover.hover)(option, init);
      (0, _click.click)(option, init);
      (0, _hover.unhover)(option, init);
    } else {
      option.selected = newValue;
      (0, _dom.fireEvent)(select, (0, _dom.createEvent)('input', select, {
        bubbles: true,
        cancelable: false,
        composed: true,
        ...init
      }));

      _dom.fireEvent.change(select, init);
    }
  }
}

const selectOptions = selectOptionsBase.bind(null, true);
exports.selectOptions = selectOptions;
const deselectOptions = selectOptionsBase.bind(null, false);
exports.deselectOptions = deselectOptions;