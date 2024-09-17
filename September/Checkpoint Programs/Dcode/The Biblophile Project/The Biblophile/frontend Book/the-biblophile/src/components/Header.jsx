import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';  // Import your custom CSS file

function Header({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();  // Initialize useNavigate

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value);
  };

  const handleLoginSignupClick = () => {
    navigate('/login');  // Navigate to the login page
  };

  return (
    <>
      <Navbar className="custom-navbar py-3" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>BookStore</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to="/createbook">
              <Nav.Link>Create Book</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact us</Nav.Link>
            </LinkContainer>
          </Nav>

          {/* Search form */}
          <Form className="form-inline">
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  value={searchValue}
                  onChange={handleChange}
                  className="mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button
                  variant="light"
                  onClick={handleLoginSignupClick}
                >
                  Login/Signup
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
