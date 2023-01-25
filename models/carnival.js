const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const carnivalSchema = new Schema({
    band: String,
    carnivalYear: Number,
},{
    timestamps: true
})

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
  


module.exports = mongoose.model("Carnival",carnivalSchema)