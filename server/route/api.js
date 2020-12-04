const express = require('express');
const imageController = require('../Controller/imageController.js')
const router = express.Router()


router.post('/convert', imageController.convertWebp,  (req, res, next) => {
<<<<<<< HEAD
  console.log('in api', res.locals.convert)
  res.send(res.locals.convert)

=======
  res.send("hi")
>>>>>>> 24b79851fb7334e0e914ff5bf8f131bbc275feb0
})
module.exports = router;