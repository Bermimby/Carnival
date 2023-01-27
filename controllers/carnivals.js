const Carnival = require('../models/carnival')

module.exports = {
    index,
    new: newCarnival,
    create,
    show,
    
};

function index(req, res) {
  Carnival.find({}, function (err, carnivals) {
    console.log('carnivals;',carnivals)
    res.render("carnivals/index", { title: "All Carnivals",carnivals });
  });
}




function newCarnival(req, res) {
  Carnival.find({})
    .sort('name')
    .exec(function (err, carnival) {
      res.render('carnivals/new', {
        title: 'Add Carnival',
        carnival
      });
    });
}



  function create(req, res) {
    Carnival.create(req.body, function (err, carnival) {
    console.log(req.body)
    res.redirect('/carnivals/show');
  });
    }


  function show(req,res){
    Carnival.findById(req.params.id)
    res.render('new', { title: "All Carnivals" });

  }


  