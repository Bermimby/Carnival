const mongoose = require('mongoose')
const Schema = mongoose.Schema;



const reviewSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  
}, {
  timestamps: true
});



const bandSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    reviews: [reviewSchema]
   
    }
  }
, {
  timestamps: true
});





const carnivalSchema = new Schema({
    band: String,
    carnivalYear: Number,
    bands: [bandSchema],
    
},
{
    timestamps: true
})





module.exports = mongoose.model("Carnival",carnivalSchema)