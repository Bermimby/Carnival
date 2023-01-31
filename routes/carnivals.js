var express = require('express');
var router = express.Router();
const carnivalsCtrl = require('../controllers/carnivals');

router.get('/', carnivalsCtrl.index);



module.exports = router;


