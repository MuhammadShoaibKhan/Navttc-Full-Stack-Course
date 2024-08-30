const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    prodname:{
        type:String,
        required: true
    },
    color:{
        type:String,
        require: true
    },
    category:{
        type:Number,
        required: true
    }
},
{
    timestamps: true,
}
)

//const Product = mongoose.model('Product',productSchema);
//export default Product;

module.exports = mongoose.model('Product',productSchema);