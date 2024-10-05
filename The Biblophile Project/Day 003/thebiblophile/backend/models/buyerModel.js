import mongoose, { mongo } from 'mongoose';
import bcrypt from 'bcryptjs';

const buyerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        street: String,
        city: String,
        state: String,
        country: String,
    },
    wishlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }],
    cart: [{
        book: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book'
        },
        quantity: {
            type: Number,
            default: 1
        }
    }],
    orders: [{
        type: mongoose.Schema.Typess.ObjectId,
        ref: 'Order'
    }],
},
{
    timestamp: true,
  }
)

buyerSchema.methods.matchPassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

buyerSchema.pre('save', async function (next){

    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
});


const Buyer = mongoose.model('Buyer', buyerSchema);
export default Buyer;