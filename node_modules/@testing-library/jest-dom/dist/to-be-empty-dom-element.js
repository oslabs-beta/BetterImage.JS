"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBeEmptyDOMElement = toBeEmptyDOMElement;

var _utils = require("./utils");

function toBeEmptyDOMElement(element) {
  (0, _utils.checkHtmlElement)(element, toBeEmptyDOMElement, this);
  return {
    pass: element.innerHTML === '',
    message: () => {
      return [this.utils.matcherHint(`${this.isNot ? '.not' : ''}.toBeEmptyDOMElement`, 'element', ''), '', 'Received:', `  ${this.utils.printReceived(element.innerHTML)}`].join('\n');
    }
  };
}