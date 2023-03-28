const express = require('express');
const router = express.Router();
const test = require('./api/test');
const celllines = require('./api/celllines')

router.get('/test', test.test);
router.get('/celllines', celllines.get);


module.exports = router;