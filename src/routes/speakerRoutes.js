const express = require('express')
const router = express.Router()
const speakerController = require('../controller/speakersController')

router.get('/', speakerController.speaker_index);

module.exports = router;