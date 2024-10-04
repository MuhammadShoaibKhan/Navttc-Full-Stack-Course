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
   image:{
    type: String,
    required: true
   },

  },
  {
    timestamp: true,
  }
)


const Book = mongoose.model('Book', bookSchema);
export default User;


// mongodb+srv://shoaib:12345@cluster0.i17dz.mongodb.net/