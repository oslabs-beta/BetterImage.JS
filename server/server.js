const express = require('express');
const app = express();
const path = require('path');
const webp = require('webp-converter');

const PORT = 9000;

app.use(express.static(path.resolve(__dirname, '../public')))

app.get("/", function(req, res, next) { 
  res.send(path.resolve(__dirname, '../public/index.html'));
});

const result = webp.cwebp(path.resolve(__dirname, '../src/components/App/images/bestPhotoEver.png'), path.resolve(__dirname, '../src/components/BetterImage/convertedImage/bestPhotoEver.webp'),"-q 80");
result.then((response) => {
  console.log(response);
});



  // function formatFunc() {
  //     const result = webp.cwebp("../../public/images/bestPhotoEver.png","/convertedImages/bestPhotoEver.webp", "-q 80");
  // }
  

app.listen(PORT, () => {
  console.log(`server on port ${PORT}`)
})

  module.exports = app;