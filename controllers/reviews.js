const Carnival = require('../models/carnival')

module.exports ={
    create,
    show,
    deleteCarnival,

    
    
}


function create(req, res) {
    
    Carnival.findById(req.params.id, function(err, carnival) {
      req.body.user = req.user._id;
      req.body.userName = req.user.name;
      req.body.userAvatar = req.user.avatar;
       carnival.reviews.push(req.body);
       carnival.save(function(err) {
        console.log(reviews)
        res.render('/carnivals');
      });
    });
  }
function show (req,res){
      Review.findById(req.params.id)
      res.render("carnivals/show")
    }
  
    function deleteCarnival(req, res) {
      Review.findById(req.params.id, function(err, carnival) {
       carnival.review.remove(req.params.reviewId);
          carnival.save();
          res.redirect(`/carnivals/${carnival._id}`);
      });
  }

