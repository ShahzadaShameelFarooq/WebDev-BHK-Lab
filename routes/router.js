const express = require('express');
const router = express.Router();
const test = require('./api/test');

router.get('/test', test.test);


module.exports = router;