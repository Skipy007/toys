'use strict'

const express = require('express');
const router = express.Router();
const toysCtrl = require('../controllers/toys');

router.get('/toys', 
    toysCtrl.getToys,
    toysCtrl.responseToJSON('toys'),
);

router.get('/toysById', 
    toysCtrl.getToysById,
    toysCtrl.responseToJSON('toys'),
);

router.post('/toys', 
    toysCtrl.createToy,
    toysCtrl.responseToJSON('addToy'),
);
router.delete('/deleteOneToy', 
    toysCtrl.deleteToysById,
    toysCtrl.responseToJSON('deleteToy'),
);
module.exports = router;