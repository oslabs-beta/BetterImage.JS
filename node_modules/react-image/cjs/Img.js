'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _objectWithoutPropertiesLoose = _interopDefault(require('@babel/runtime/helpers/objectWithoutPropertiesLoose'));
var React = require('react');
var React__default = _interopDefault(React);
require('@babel/runtime/helpers/defineProperty');
var useImage = require('./useImage-6b41e609.js');

var passthroughContainer = function passthroughContainer(x) {
  return x;
};

function Img(_ref) {
  var _ref$decode = _ref.decode,
      decode = _ref$decode === void 0 ? true : _ref$decode,
      _ref$src = _ref.src,
      srcList = _ref$src === void 0 ? [] : _ref$src,
      _ref$loader = _ref.loader,
      loader = _ref$loader === void 0 ? null : _ref$loader,
      _ref$unloader = _ref.unloader,
      unloader = _ref$unloader === void 0 ? null : _ref$unloader,
      _ref$container = _ref.container,
      container = _ref$container === void 0 ? passthroughContainer : _ref$container,
      _ref$loaderContainer = _ref.loaderContainer,
      loaderContainer = _ref$loaderContainer === void 0 ? passthroughContainer : _ref$loaderContainer,
      _ref$unloaderContaine = _ref.unloaderContainer,
      unloaderContainer = _ref$unloaderContaine === void 0 ? passthroughContainer : _ref$unloaderContaine,
      imgPromise = _ref.imgPromise,
      crossorigin = _ref.crossorigin,
      _ref$useSuspense = _ref.useSuspense,
      useSuspense = _ref$useSuspense === void 0 ? false : _ref$useSuspense,
      imgProps = _objectWithoutPropertiesLoose(_ref, ["decode", "src", "loader", "unloader", "container", "loaderContainer", "unloaderContainer", "imgPromise", "crossorigin", "useSuspense"]);

  imgPromise = imgPromise || useImage.imagePromiseFactory({
    decode: decode,
    crossOrigin: crossorigin
  });

  var _useImage = useImage.useImage({
    srcList: srcList,
    imgPromise: imgPromise,
    useSuspense: useSuspense
  }),
      src = _useImage.src,
      isLoading = _useImage.isLoading; // console.log({src, isLoading, resolvedSrc, useSuspense})
  // show img if loaded


  if (src) return container( /*#__PURE__*/React__default.createElement("img", Object.assign({
    src: src
  }, imgProps))); // show loader if we have one and were still trying to load image

  if (!useSuspense && isLoading) return loaderContainer(loader); // show unloader if we have one and we have no more work to do

  if (!useSuspense && unloader) return unloaderContainer(unloader);
  return null;
}

module.exports = Img;
//# sourceMappingURL=Img.js.map
