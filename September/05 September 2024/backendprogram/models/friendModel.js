const mongoose = require('mongoose')

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
},
{
timestamps: true,
}
)

module.exports = mongoose.model('Friend', friendSchema);
