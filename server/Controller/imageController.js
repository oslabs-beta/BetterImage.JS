const fs = require('fs');
const path = require('path')
const webp = require('webp-converter');
const imageController = {}

imageController.convertWebp = (req, res, next) => {
  const { imageName, quality} = req.body;
  console.log("conversion to webp triggered")

   const result = webp.cwebp(path.resolve(__dirname, `../../src/components/App/images/${imageName}.png`), path.resolve(__dirname, `../../src/components/BetterImage/convertedImage/${imageName}.webp`),`-q ${quality}`);

  return next()
}



module.exports = imageController