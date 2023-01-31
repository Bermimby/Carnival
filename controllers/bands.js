const band = require('../models/band');
const Band = require('../models/band');
const Carnival = require('../models/band');
const { move } = require('../routes/carnivals');

module.exports = {
    new: newBand,
    create,
    show,
    index,
    addReview,
    addBand,

    
}

function index(req, res) {
  console.log('hi')
  Band.find ({},(err,bands)=>{
    console.log('hi',bands)
    res.render("bands/index", { title: "All Bands",bands });
  })

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
      Band.findById(req.params.id,function(err, band){
        
        console.log(band.reviews)
        res.render("bands/new", {title:"Band Details",band}) 
      })
      
    }
  

  function addBand (req,res){
    Band.find({}, function (err, bands) {
      console.log('bands;',bands)
      res.render("bands", { title: "All Bands",bands });
    });
  }
  
  function addReview(req, res) {
  Band.findById(req.params.id,(err,band)=>{
    console.log('test',band)
  band.reviews.push(req.body)
  band.save()
  res.redirect('/bands')
})
      }
 
    
  


    