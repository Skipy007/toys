'use strict'

const express = require('express');
const router = express.Router();

router.get('/users', function(req, res, next) {
    console.log('get users');
    return res.json({getUsers: true})
});
router.post('/users', function(req, res, next) {
    console.log('post users');
    return res.json({posttUsers: true})
});

module.exports = router;