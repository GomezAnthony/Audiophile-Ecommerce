const express = require('express')
const router = express.Router();
const earphoneController = require('../controller/earphonesController')

router.get('/', earphoneController.earphone_index);

module.exports = router;