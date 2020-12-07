"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upload = upload;

var _dom = require("@testing-library/dom");

var _click = require("./click");

var _blur = require("./blur");

var _focus = require("./focus");

function upload(element, fileOrFiles, init) {
  if (element.disabled) return;
  let files;
  let input = element;
  (0, _click.click)(element, init);

  if (element.tagName === 'LABEL') {
    files = element.control.multiple ? fileOrFiles : [fileOrFiles];
    input = element.control;
  } else {
    files = element.multiple ? fileOrFiles : [fileOrFiles];
  } // blur fires when the file selector pops up


  (0, _blur.blur)(element, init); // focus fires when they make their selection

  (0, _focus.focus)(element, init); // the event fired in the browser isn't actually an "input" or "change" event
  // but a new Event with a type set to "input" and "change"
  // Kinda odd...

  const inputFiles = {
    length: files.length,
    item: index => files[index],
    ...files
  };
  (0, _dom.fireEvent)(input, (0, _dom.createEvent)('input', input, {
    target: {
      files: inputFiles
    },
    bubbles: true,
    cancelable: false,
    composed: true,
    ...init
  }));

  _dom.fireEvent.change(input, {
    target: {
      files: inputFiles
    },
    ...init
  });
}