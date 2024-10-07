import { name } from 'body-parser'
import Book from '../models/bookModel.js'
import Seller from '../models/sellerModel.js'

const createBook = async(req,res) =>{
    const {title,price,description,author,genre,publicationDate,reviews,stock,seller}=req.body
    const book = new Book({
        title: title,
        price: price,
        description: description,
        author: author,
        genre: genre,
        publicationDate: publicationDate,
        reviews: reviews,
        coverImage: '../images/book.jpg',
        stock: stock,
        seller: seller
    })
    const existingSeller = await Seller.findById(seller)
    existingSeller.books.push(book._id);
    await existingSeller.save();
    if(existingSeller && book){
        const createdBook = await book.save()
        res.status (201).json({book:{
            title : createdBook.title,
            price : createdBook.price,
            description : createdBook.description,
            seller : createdBook.seller,
            author : createdBook.author,
            genre : createdBook.genre,
            publicationDate : createdBook.publicationDate,
            reviews : createdBook.reviews,
            coverImage : createdBook.coverImage,
            stock : createdBook.stock,
        }})
    }else{
        res.status(500).json('Book not created')
    }

    }

const updateBook = asyncHandler(async(req,res)=>{
    const {title,price,description,author,genre,publicationDate,reviews,stock} = req.body
    const book = await Book.findById(req.params.id)

    if(book){
       book.title = title || book.title
       book.price = price || book.price
       book.description = description || book.description
       book.author = author || book.author 
       book.genre = genre || book.genre
       book.publicationDate = publicationDate || book.publicationDate
       book.reviews = reviews || book.reviews
       book.stock = stock || book.stock

       const updatedBook = await book.save()
       res.json(updatedBook)
    } else {
        res.status(404).json("book not found!")
    }
})

export{
createBook,
updateBook
}