const express = require('express');
const router = express.Router();
const bands = require('../controllers/bands');
const bandsCtrl = require('../controllers/bands')

// This router is mounted to a "starts with" path of '/'


router.get('/new', bandsCtrl.new);

router.post('/bands/show', bandsCtrl.create);
router.get('/:id', bandsCtrl.show);



module.exports = router;