import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    description:{
        type:String,
        required: true
    },
    author: {
      type: String,
      required: true
    },
    genre: {
        type: String,
        enum: ['Fiction','Non-fiction','Science','Histroy'],
        required: true
      },
   publicationDate:{
    type:String,
    required: true
   },
   reviews:{
    type:String,
    required: true
   },
   coverImage:{
    type: String,
    required: true
   },
   stock: {
    type: Number,
    required: true
   },
   seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Seller',
    required: true
   },

  },
  {
    timestamp: true,
  }
)



const Book = mongoose.model('Book', bookSchema);
export default Book;


// mongodb+srv://shoaib:12345@cluster0.i17dz.mongodb.net/