const fs = require('fs');
const path = require('path')
const webp = require('webp-converter');
const imageController = {}

imageController.convertWebp = (req, res, next) => {
  console.log(req.body)
  
  const result = webp.cwebp(path.resolve(__dirname, '../../src/components/App/images/bestPhotoEver.png'), path.resolve(__dirname, '../../src/components/BetterImage/convertedImage/bestPhotoEver.webp'),"-q 80");
result.then((response) => {
  console.log(response)
  res.locals.convert = response
  return next()
})


}




module.exports = imageController