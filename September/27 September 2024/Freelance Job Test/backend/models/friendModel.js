
//import mongoose
const mongoose = require('mongoose')

//creating schema usign mongoose.Schema
const friendSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    friendliness:{
        type: Number,
        required: true
    },
    toxicity:{
        type: Number,
        required: true
    },
    loyalty:{
        type: Number,
        required: true
    },
    friend:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    }
},
{
timestamps: true,
}
)

//exporting schema 
module.exports = mongoose.model('Friend', friendSchema);
