const express = require('express');
const imageController = require('../Controller/imageController.js')
const router = express.Router()


router.post('/convert', imageController.convertWebp,  (req, res, next) => {
  console.log('in api', res.locals.convert)
  res.send(res.locals.convert)

})
module.exports = router;