import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {Context} from '../App'
import { useContext } from "react"
import Badge from 'react-bootstrap/Badge'


function Header() {
  const [login, setLogin] = useContext(Context)
  const navigate = useNavigate()
  const localData = localStorage.getItem('user')
  const user = JSON.parse(localData);
  const userName = user?.name?.toUpperCase()

  function handlesignup(){
    navigate('/signup')
  }

  function handleLogin(){
    navigate('/login')
  }
  function handleLogout(){
    localStorage.removeItem('user')
    setLogin(false)
    navigate('/login')
  }
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <LinkContainer to='/'>
          <Navbar.Brand >FriendHub</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
          <LinkContainer to="/friends">
            <Nav.Link >See my Friends</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/bemyfriend">
            <Nav.Link >Be my Friends</Nav.Link>
            </LinkContainer>
          </Nav>
          {
            !login? <>

            <Button onClick={handlesignup} varient="light" className='mx-3'>Sign up</Button>
            <Button onClick={handleLogin} varient="light">Login</Button>
            <Button  onClick={handleLogout} varient="light">Logout</Button>
            </>: 
            <>
            <Badge bg="primary" className="mx-2">{userName}</Badge>
            <Button onClick={handleLogout} varient="light">Logout</Button>
            </>
          }
          
        </Container>
      </Navbar>
    </>
  );
}

export default Header;