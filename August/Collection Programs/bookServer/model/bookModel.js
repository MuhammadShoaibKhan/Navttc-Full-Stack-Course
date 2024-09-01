const mongoose = require('mongoose')
 const bookSchema = new mongoose.Schema({
    bookName:{
        type:String,
        require:true
    },author:{
        type:String,
        require:true
    },price:{
        type:Number,
        require:true
    }
 },
 {timestamps:true}
)
module.exports = mongoose.model('Book',bookSchema)