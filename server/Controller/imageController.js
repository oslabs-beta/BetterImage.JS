const fs = require('fs');
const path = require('path')
const webp = require('webp-converter');
const imageController = {}

imageController.convertWebp = async (req, res, next) => {
  const { imageName, quality} = req.body;
  const result = await webp.cwebp(path.resolve(__dirname, `../../src/components/App/images/${imageName}.png`), path.resolve(__dirname, `../../src/components/BetterImage/convertedImage/${imageName}.webp`),`-q ${quality}`);
  res.locals.invocation = true;
  next()
}




module.exports = imageController