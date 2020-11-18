const express = require('express');
const app = express();
const path = require('path');
const webp = require('webp-converter');
const convertRouter = require(path.join(__dirname, './route/api.js'))
const bodyParser = require('body-parser')
const PORT = 9000;

app.use(express.json())
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../public')))

app.use('/api/convert',convertRouter)

app.get("/", function(req, res, next) { 
  res.send(path.resolve(__dirname, '../public/index.html'));
});



app.post('/convert',  (req, res, next) => {
  console.log(res.locals.convert)
  res.send(res.locals.convert)

})



  // function formatFunc() {
  //     const result = webp.cwebp("../../public/images/bestPhotoEver.png","/convertedImages/bestPhotoEver.webp", "-q 80");
  // }
  

app.listen(PORT, () => {
  console.log(`server on port ${PORT}`)
})

  module.exports = app;