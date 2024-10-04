import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Buyer',
        reqruied: true
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller',
        required: true
    },
    items: [{
        book: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    totalPrice: {
        type: Number,
        required: true
    },
    shippingAddress: {
        street: String,
        city: String,
        state: String,
        country: String,
        required: true
    },
    paymentMethod: {
        type: String,
        enum: ['Credit Card', 'Paypal','Bank Transfer','COD'],
        required: true
    },
    paymentStatus: {
        type: String,
        enum: ['Pending','Completed','Failed'],
        default: 'Pending'
    },
    orderStatus: {
        type: String,
        enum: ['Processing', 'Shipped','Delivered','Cancelled'],
        default: 'Processing'
    },
    orderDate:{
        type: Date,
        default: Date.now
    },
    deliveryDate:{
        type: Date
    
    },
},

{
    timestamps: true,
})

const Order = mongoose.model('Order', orderSchema);
export default Order;