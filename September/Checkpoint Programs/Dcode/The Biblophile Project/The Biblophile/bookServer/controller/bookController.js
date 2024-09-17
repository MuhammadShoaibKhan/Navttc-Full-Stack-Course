const Book = require('../model/bookModel.js');

const createBook = async (req, res) => {
  try {
     const { bookName, author, price } = req.body;
     if (!req.file) {
        return res.status(400).json({ error: 'Image is required' });
     }

     const image = req.file.path;
     const book = new Book({ bookName, author, price, image });
     const bookCreated = await book.save();
     res.status(201).json({ book: bookCreated });
  } catch (err) {
     console.error(err);
     res.status(500).json('Book is not created');
  }
};



const getBook = async (req, res) => {
   try {
      const books = await Book.find({});
      res.status(200).json(books);
   } catch (err) {
      console.error(err);
      res.status(500).json('Books not found');
   }
};


// Update a book and its image
const updateBook = async (req, res) => {
   const { bookName, author, price } = req.body;
   const id = req.params.id;
   const image = req.file ? req.file.path : null; // Handle new image if uploaded

   try {
      const book = await Book.findById(id);
      if (book) {
         book.bookName = bookName || book.bookName;
         book.author = author || book.author;
         book.price = price || book.price;
         if (image) {
            book.image = image; // Update image if a new one is uploaded
         }

         const updatedBook = await book.save();
         res.status(200).json({ book: updatedBook });
      } else {
         res.status(404).json('Book not found');
      }
   } catch (err) {
      console.error(err);
      res.status(500).json('Book is not updated');
   }
};


const deleteBook = async (req, res) => {
   const id = req.params.id;
   try {
      const book = await Book.findById(id);
      if (book) {
         await book.deleteOne({ _id: id });
         res.status(200).json('Book is deleted');
      } else {
         res.status(404).json('Book not found');
      }
   } catch (err) {
      console.error(err);
      res.status(500).json('Book is not deleted');
   }
};

const getBookById = async (req, res) => {
   const { id } = req.params;
 
   try {
     const book = await Book.findById(id);
     if (book) {
       res.status(200).json(book);
     } else {
       res.status(404).json({ message: 'Book not found' });
     }
   } catch (err) {
     console.error(err);
     res.status(500).json({ message: 'Server error' });
   }
 };
 
 
exports.getBookById = getBookById;
exports.createBook = createBook;
exports.updateBook = updateBook;
exports.getBook = getBook;
exports.deleteBook = deleteBook;
