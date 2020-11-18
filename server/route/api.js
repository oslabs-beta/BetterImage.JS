const express = require('express');
const imageController = require('../Controller/imageController.js')
const router = express.Router()

router.get('/convert', imageController.convertWebp, (req, res) => {
  return res.status(200).json({result: res.locals.convert})

})
module.exports = router;