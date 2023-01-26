const Band = require('../models/band');
const Carnival = require('../models/band');

module.exports = {
    new: newBand,
    create,
    show,
}


function newBand(req, res) {
    Band.find({})
      //Sort performers by their name
      .sort('name')
      .exec(function (err, performers) {
        res.render('bands/new', {
          title: 'Add Band',
          bands
        });
      });
  }

  function create(req, res) {
   
    req.body;
Band.create(req.body, function (err, band) {
  res.redirect('bands/new');
});
  }

  function show (req,res){
    function show(req,res){
      Carnival.findById(req.params.id)
      res.render("bands/show")
    }
  }