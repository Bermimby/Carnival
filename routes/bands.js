const express = require('express');
const router = express.Router();
const bands = require('../controllers/bands');
const bandsCtrl = require('../controllers/bands')

// This router is mounted to a "starts with" path of '/'

router.get('/bands',bandsCtrl.index)
router.get('/bands', bandsCtrl.new);

router.post('/bands', bandsCtrl.create);
router.get('/carnivals/bands/:id', bandsCtrl.show);



module.exports = router;