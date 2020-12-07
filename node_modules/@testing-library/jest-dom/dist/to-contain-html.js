"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toContainHTML = toContainHTML;

var _utils = require("./utils");

function toContainHTML(container, htmlText) {
  (0, _utils.checkHtmlElement)(container, toContainHTML, this);
  return {
    pass: container.outerHTML.includes(htmlText),
    message: () => {
      return [this.utils.matcherHint(`${this.isNot ? '.not' : ''}.toContainHTML`, 'element', ''), '', 'Received:', `  ${this.utils.printReceived(container.cloneNode(true))}`].join('\n');
    }
  };
}