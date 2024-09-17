const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String, // URL or file path for the uploaded image
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
