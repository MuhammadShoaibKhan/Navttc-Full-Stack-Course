import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function MyCard({ book }) {
  const [bookList, setBookList] = useState(book || []); // Initialize state with the book prop
  const navigate = useNavigate();



  const handleClick = (id) => {
    navigate(`/createbook/${id}`);
  };

  const handleDelete = async (bookIdDel) => {
    const res = await fetch(`http://localhost:5000/book/delete/${bookIdDel}`, {
      method: "DELETE",
    });
    const resData = await res.json();
    console.log(resData);

    // Update the book list by removing the deleted book
    const updatedBookList = bookList.filter((books) => books._id !== bookIdDel);
    setBookList(updatedBookList); // Update state with the new book list
  };
  useEffect(() => {
    // Update bookList when the book prop changes
    if (book) {
      setBookList(book);
    }
  }, [book]);

  return (
    <div className=" container">
      <div className="d-flex justify-content-center">
        <h1 style={{ color: 'GrayText', marginTop: "10px" , marginBottom:"10px", fontSize:"3rem", fontFamily:"serif"}}>Book List</h1>
      </div>

      <Row>
        {bookList.map((item, index) => {
          const imageUrl = `http://localhost:5000/${item.image}`;
          return (
            <Col key={index} md={4} className="mb-4">
              <Card>
                <Card.Img className="card-img-top" variant="top" src={imageUrl} />
                <Card.Body className='card-body'>
                 <h1><Card.Title onClick={() => handleDelete(item._id)}> <h2>{item.bookName}</h2> </Card.Title></h1> 
                  <Card.Text>
                    <h6 onClick={() => handleClick(item._id)}> Price: {item.price} $</h6>

                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default MyCard;
