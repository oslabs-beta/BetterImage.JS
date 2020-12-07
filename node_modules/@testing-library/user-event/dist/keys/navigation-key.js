"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navigationKey = navigationKey;

var _dom = require("@testing-library/dom");

var _utils = require("../utils");

const keys = {
  ArrowLeft: {
    keyCode: 37
  },
  ArrowRight: {
    keyCode: 39
  }
};

function getSelectionRange(currentElement, key) {
  const {
    selectionStart,
    selectionEnd
  } = currentElement();
  const cursorChange = Number(key in keys) * (key === 'ArrowLeft' ? -1 : 1);
  return {
    selectionStart: selectionStart + cursorChange,
    selectionEnd: selectionEnd + cursorChange
  };
}

function navigationKey(key) {
  const event = {
    key,
    keyCode: keys[key].keyCode,
    which: keys[key].keyCode
  };
  return ({
    currentElement,
    eventOverrides
  }) => {
    _dom.fireEvent.keyDown(currentElement(), { ...event,
      ...eventOverrides
    });

    const range = getSelectionRange(currentElement, key);
    (0, _utils.setSelectionRangeIfNecessary)(currentElement(), range.selectionStart, range.selectionEnd);

    _dom.fireEvent.keyUp(currentElement(), { ...event,
      ...eventOverrides
    });
  };
}