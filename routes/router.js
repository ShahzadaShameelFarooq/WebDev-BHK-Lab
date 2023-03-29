const express = require('express');
const router = express.Router();
const test = require('./api/test');
const celllines = require('./api/celllines')
const psets = require('./api/psets')

router.get('/test', test.test);
router.get('/celllines', celllines.get);
router.get('/psets', psets.get)

module.exports = router;