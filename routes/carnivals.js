var express = require('express');
var router = express.Router();
const carnivalsCtrl = require('../controllers/carnivals');

router.get('/', carnivalsCtrl.index);
router.get('/new', carnivalsCtrl.new);
router.get('/:id', carnivalsCtrl.show);
router.post('/',carnivalsCtrl.create);

module.exports = router;
