const express = require('express')
const router = express.Router();
const headphoneController = require('../controller/headphonesController')

//Headphones Routes
router.get('/', headphoneController.headphone_index);
router.get('/xx99-mark-two-headphones', headphoneController.headphone_xx99_two);
router.get('/xx99-mark-one-headphones', headphoneController.headphone_xx99_one);


module.exports = router;