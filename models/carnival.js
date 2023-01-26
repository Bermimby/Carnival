const mongoose = require('mongoose')
const Schema = mongoose.Schema;



const reviewSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  }
}, {
  timestamps: true
});


const carnivalSchema = new Schema({
    band: String,
    carnivalYear: Number,
    reviews: [reviewSchema]
},
{
    timestamps: true
})





module.exports = mongoose.model("Carnival",carnivalSchema)