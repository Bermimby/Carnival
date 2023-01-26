const Band = require('../models/band');
const Carnival = require('../models/band');

module.exports = {
    new: newBand,
    create,
    show,
    index,
}


function newBand(req, res) {
    Band.find({})
    
      .sort('name')
      .exec(function (err, bands) {
        res.render('bands/new', {
          title: 'Add Band',
          bands
        });
      });
  }

function create(req, res) {
  Band.create(req.body, function (err, band) {
  console.log(req.body)
  res.redirect('/bands');
});
  }

  function show (req,res){
    function show(req,res){
      Band.findById(req.params.id)
      res.render("bands/show")
    }
  }

  function index (req,res){
    Band.find({}, function (err, bands) {
      console.log('bands;',bands)
      res.render("bands/index", { title: "All Bands",bands });
    });
  }
  
  