const router = require('express').Router();
const controller = require('./auth.controller');

router.post('/', controller.authenticate);

module.exports = router;
