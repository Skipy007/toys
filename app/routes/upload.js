'use strict'

const express = require('express');
const path = require('path');
const router = express.Router();
const usersController = require('../controllers/upload');

router.post('/upload',
    usersController.upload.single('avatar'),
    function(req, res, next) {
        console.log('route', req.file);
        return res.json({fileName: req.file.filename});
    }
);

router.get('/download-file',
  function(req, res, next) {
    let filename = req.query.filename;
    let pathPrefix = path.resolve(__dirname, `../files/${filename}`);
    res.download(pathPrefix)
  }
);

module.exports = router;