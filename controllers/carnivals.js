const Carnival = require('../models/carnival')

module.exports = {
    index,
   
    
};

function index(req, res) {
  {
res.render("carnivals/index", { title: "All Carnivals" });
  };
}








  