const express = require('express')
const router = express.Router()
const {handelUrlAnalytics} = require('../controllers/url')

router.get('/:shortId', handelUrlAnalytics);

module.exports = router;