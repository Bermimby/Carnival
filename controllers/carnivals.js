const Carnival = require('../models/carnival')

module.exports = {
    index,
    new: newCarnival,
    create,
    show,
    delete: deleteCarnival
};

function index(req, res) {
  Carnival.find({}, function (err, carnivals) {
    res.render("carnivals/index", { title: "All Carnivals" });
  });
}



function newCarnival(req,res){
    res.render("carnivals/new",);
}


function create(req, res) {
   
    if (req.body.review) req.body.review = req.body.review.split(/\s*,\s*/);
    const carnival = new Carnival(req.body);
    carnival.save(function(err) {
        if (err) console.log(err)
     if (err) return res.redirect('/carnivals/new');
      console.log(carnival);
      res.redirect('/carnivals');
    });
  }


  function show(req,res){
    Carnival.findById(req.params.id)
    res.redirect("carnivals/show")
  }

  function deleteCarnivl(req, res) {
    Carnival.deleteOne(req.params.id);
    res.redirect('/todos');
  }
  