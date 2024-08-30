const mongoose = require('mongoose');

const siteSchema = new mongoose.Schema({

    sitename:{
        type:String,
        required: true
    },
    sitecreator:{
        type:String,
        require: true
    },
    year:{
        type:Number,
        required: true
    }
},
{
    timestamps: true,
}
)

module.exports = mongoose.model('sitedb',siteSchema);