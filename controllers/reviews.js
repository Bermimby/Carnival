const Carnival = require('../models/carnival')

module.exports ={
    create
}


function create(req, res) {
    
    Movie.findById(req.params.id, function(err, carnival) {
  
      // Add the user-centric info to req.body (the new review)
      req.body.user = req.user._id;
      req.body.userName = req.user.name;
      req.body.userAvatar = req.user.avatar;
  
      // Push the subdoc for the review
      carnival.reviews.push(req.body);
      // Always save the top-level document (not subdocs)
      carnival.save(function(err) {
        res.redirect(`/carnivals/${carnival._id}`);
      });
    });
  }