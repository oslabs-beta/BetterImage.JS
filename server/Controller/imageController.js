const path = require('path')
const webp = require('webp-converter');
const imageController = {}

imageController.convertWebp = (req, res, next) => {
  const { originalImageType, imageName, quality } = req.body;
  const result = webp.cwebp(path.resolve(__dirname, `../../src/components/App/images/${imageName}.${originalImageType}`), path.resolve(__dirname, `../../src/components/BetterImage/convertedImage/${imageName}.webp`),`-q ${quality}`);
  next()
}

module.exports = imageController