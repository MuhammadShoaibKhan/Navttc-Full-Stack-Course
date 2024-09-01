// src/components/BookList.js
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import Book from './Book'; // Import the Book component

function BookList({ books }) {
    return (
        <div className="book-list">
            {books.map((book, index) => (
                <Book key={index} book={book} />
            ))}
        </div>
    );
}

// Define Prop Types
// BookList.propTypes = {
//     books: PropTypes.arrayOf(
//         PropTypes.shape({
//             bookName: PropTypes.string.isRequired,
//             author: PropTypes.string.isRequired,
//             bookDetails: PropTypes.string.isRequired
//         })
//     ).isRequired
// };

export default BookList;