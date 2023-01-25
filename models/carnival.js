const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const carnivalSchema = new Schema({
    band: String,
    carnivalYear: Number,
},{
    timestamps: true
})




module.exports = mongoose.model("Carnival",carnivalSchema)