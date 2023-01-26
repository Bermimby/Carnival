const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews')


router.post('/carnivals/:id/reviews', reviewsCtrl.create)




module.exports = router;