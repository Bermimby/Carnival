const express = require('express');
const router = express.Router();
const bands = require('../controllers/bands');
const bandsCtrl = require('../controllers/bands')

// This router is mounted to a "starts with" path of '/'

router.get('/bands',bandsCtrl.index)
router.get('/bands/new', bandsCtrl.new);
// router.get('/bands',)

router.post('/bands', bandsCtrl.create);
router.get('/bands/:id', bandsCtrl.show);
router.post('/bands/:id',bandsCtrl.addReview)
router.delete('/bands/:id/:reviewId', bandsCtrl.delete)



module.exports = router;