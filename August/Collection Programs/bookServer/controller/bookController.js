const Book   = require('../model/bookModel.js')
const createBook = async(req,res)=>{
   
   try {
      const  {bookName,author,price} = req.body
      const book = new Book( {bookName,author,price});
      const bookcreated =  await book.save();
      res.status(201).json({book:bookcreated});
    } catch (err) {
      res.status(500).json('book is not created');
    }
  };
//get all data
const getBook = async(req,res)=>{
   try {
      const book = await Book.find({})
      res.status(200).json(book)
      
   } catch (err) {
      res.status(500).json('book not found')
      
   }

} 
//get by id
const getBookById = async(req,res)=>{
   const id = req.params.id
   try {
      const bookById = await Book.findById(id)
      res.status(200).json(bookById)
      
   } catch (err) {
      res.status(500).json('book not found')
      
   }

}
const updateBook = async (req, res) => {
   const { bookName, author, price } = req.body;
   const id = req.params.id;
   const book = await Book.findById(id);
 
   if (book) {
     try {
       book.bookName = bookName || book.bookName;
       book.author = author || book.author;
       book.price = price || book.price;
       const updatedBook = await book.save();
       res.status(200).json({ book: updatedBook });
     } catch (err) {
       res.status(500).json('Book is not updated');
     }
   } 
 };
 
const deleteBook = async(req,res)=>{
   const id = req.params.id
   try {
      const book = await Book.findById(id);
      if (book) {
        await book.deleteOne({ _id: id })
        res.status(200).json('book is deleted')
      }
  
      
    } catch (err) {
      res.status(500).json('book is not deleted');
    }
  };


exports.createBook = createBook
exports.updateBook = updateBook
exports.getBook = getBook
exports.getBookById = getBookById
exports.deleteBook = deleteBook




