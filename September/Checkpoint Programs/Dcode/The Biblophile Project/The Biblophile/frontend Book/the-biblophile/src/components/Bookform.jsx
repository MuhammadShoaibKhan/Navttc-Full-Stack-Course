import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookForm = () => {
  const { id } = useParams(); // Extract the 'id' from the URL
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null); // This will hold the image URL for existing image

  // Fetch book details if 'id' is present in the URL
  useEffect(() => {
    if (id) {
      const fetchBookDetails = async () => {
        try {
          const res = await fetch(`http://localhost:5000/book/${id}`);
          if (!res.ok) {
            throw new Error(`Error: ${res.status}`);
          }
          const resData = await res.json();
          setBookName(resData.bookName);
          setAuthor(resData.author);
          setPrice(resData.price);
          setImageUrl(`http://localhost:5000/${resData.image}`); // Assuming `image` contains the relative path to the image
        } catch (error) {
          console.error('Error fetching book details:', error);
        }
      };
      fetchBookDetails();
    }
  }, [id]);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('bookName', bookName);
    formData.append('author', author);
    formData.append('price', price);
    formData.append('image', image); // The file from <input type="file" />

    try {
      const res = await fetch(id ? `http://localhost:5000/book/update/${id}` : "http://localhost:5000/book/submit", {
        method: id ? "PUT" : "POST", // PUT if updating, POST if creating
        body: formData,
      });

      const resData = await res.json();
      console.log(resData);
      alert(id ? 'Book updated successfully' : 'Book added successfully');
    } catch (error) {
      console.error('Error submitting book:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center">
      <h2 style={{ color: 'GrayText', marginTop: "10px" , marginBottom:"10px", fontSize:"3rem", fontFamily:"serif"}} >{id ? 'Update Book' : 'Add Book'}</h2>     
      </div>   
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bookName">Book Name:</label>
          <input
            type="text"
            id="bookName"
            className="form-control"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            placeholder="Enter the book name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter the author's name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter the price"
            required
          />
        </div>

        {/* Show existing image if available */}
        {imageUrl && (
          <div className="form-group">
            <label>Current Image:</label>
            <img src={imageUrl} alt="Book cover" className="img-fluid mb-3" style={{ maxWidth: '200px' }} />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="file">Upload New Image</label>
          <input
            type="file"
            id="file"
            className="form-control-file"
            onChange={handleFileChange}
            required={!id} // Required only for new books
          />
        </div>

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-dark">{id ? 'Update' : 'Submit'}</button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
