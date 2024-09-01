import Book from "../components/Book";



const books = [
    {
      title: "The Great Gatsby",
      description: "A novel about the American dream.",
      publishedDate: "1925-04-10" // Correct format
    },
    {
      title: "1984",
      description: "A dystopian novel about totalitarianism.",
      publishedDate: "1949-06-08" // Correct format
    },
    {
      title: "To Kill a Mockingbird",
      description: "A novel about racial injustice in the American South.",
      publishedDate: "1960-07-11" // Correct format
    }
  ];



function BookList() {
    return (
      <div>
        {books.map((book, index) => (
          <Book 
            key={index} 
            title={book.title} 
            description={book.description} 
            publishedDate={book.publishedDate} 
          />
        ))}
      </div>
    );
  }

  export default BookList
  