const path = require('path')
const webp = require('webp-converter');
const imageController = {}

imageController.convertWebp = (req, res, next) => {
<<<<<<< HEAD
  console.log("in middleware");

  const { originalImageType, imageName, quality } = req.body;
  console.log("imageName", imageName)

  const result = webp.cwebp(path.resolve(__dirname, `../../src/components/App/images/${imageName}.${originalImageType}`), path.resolve(__dirname, `../../src/components/BetterImage/convertedImage/${imageName}.webp`),`-q ${quality}`);
=======
  let { imageName, quality } = req.body;
  const result = webp.cwebp(path.resolve(__dirname, `../../src/components/App/images/${imageName}.png`), path.resolve(__dirname, `../../src/components/BetterImage/convertedImage/${imageName}.webp`),`-q ${quality}`);
>>>>>>> 24b79851fb7334e0e914ff5bf8f131bbc275feb0
  
  next()
}



module.exports = imageController