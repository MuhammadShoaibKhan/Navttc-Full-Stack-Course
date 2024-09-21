import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'

function ColorSchemesExample() {
  return (
    <>
     
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
        <Nav.Link href="#home">Home</Nav.Link>
            <LinkContainer to="/">
            <Navbar.Brand>Friends Page</Navbar.Brand>
            </LinkContainer>
            <Nav className="me-auto">
           
         
           
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
      
    </>
  );
}

export default ColorSchemesExample;