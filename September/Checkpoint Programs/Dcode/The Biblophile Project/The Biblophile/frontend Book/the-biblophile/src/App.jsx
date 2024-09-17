import { useState, useEffect } from "react";
import BookForm from "./components/Bookform";
import Getbook from "./components/Getbook";
import Header from "./components/header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Login_Sign from "./components/login_Sign";


import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [book, setBook] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getBooks = async () => {
      const res = await fetch('http://localhost:5000/book/get');
      const resData = await res.json();
      setBook(resData);
    };
    getBooks();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  // Filtering books based on the search term
  let filteredBooks = [];
  
  if (book && book.length > 0) {
    filteredBooks = book.filter(b =>
      b.bookName && b.bookName.toLowerCase().startsWith(searchTerm)
    );

    // Check if there are no results after filtering
     if (filteredBooks.length === 0) {
       alert('No books found');
     }
  } 

  return (
    <>
      <BrowserRouter>
        <Header onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Getbook book={filteredBooks} />} />
          <Route path="/createbook" element={<BookForm />} />
          <Route path="/createbook/:id" element={<BookForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login_Sign />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
