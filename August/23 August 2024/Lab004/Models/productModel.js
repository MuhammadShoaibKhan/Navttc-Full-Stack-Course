//Date 24 August 2024

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    name:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    type:{
        type:String,
        required: true,
    
},
creator:{
    
    type:mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required:true
}
},
{
timestamps: true,
})


//const Product = mongoose.model('Product',productSchema);
//export default Product;
//const Product = mongoose.model('Product',productSchema)
module.exports = mongoose.model('Product',productSchema);