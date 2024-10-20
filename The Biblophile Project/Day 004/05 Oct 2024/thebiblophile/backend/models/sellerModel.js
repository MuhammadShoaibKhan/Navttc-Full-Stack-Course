import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const sellerSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    storeName: {
        type: String,
        required: true
    },
    address: {
        street: String,
        city: String,
        state: String,
        country: String
    },
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }],
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }],
},
{
    timestamps: true,
}
)

sellerSchema.methods.matchPassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

sellerSchema.pre('save', async function (next){

    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
});

const Seller = mongoose.model('Seller',sellerSchema);
export default Seller;
