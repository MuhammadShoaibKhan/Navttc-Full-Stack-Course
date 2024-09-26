import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const Friends = ({friends,loading}) => {
  const[friendList, setFriendList] = useState([])
  const [searchVal, setSearchVal] = useState()
  const user = JSON.parse(localStorage.getItem("user"))
  const [hideButton, setHideButton] = useState(true)
 

  const navigate = useNavigate()

  const handleClick = (id)=>{
    navigate(`/bemyfriend/${id}`)
  }
  const handleDelete = async(friendDelId)=>{
    const friend = friendList.find((friend)=> friend._id === friendDelId)
    if(friend.friend === user._id){

      const res = await fetch(`http://localhost:5000/friend/deletefriend/${friendDelId}`,{
        method:'DELETE',
    })
    const resData = await res.json()
    console.log(resData)
    const updatedFriendList = friendList.filter((friend)=> friend._id !== friendDelId)
    setFriendList(updatedFriendList)
    }else{
      alert('You Cannot delete this friend')
    }
  
  }

  useEffect(()=>{
    if(friends){
      setFriendList(friends)
    }
    const friend = friendList.find((friend) => friend.friend === user._id)
    if(friend){
      
      setHideButton(false)
    }
  },[friends])

  const handleChange = (e) => {
    if(e.target.value === ""){
      setFriendList(friends); 
    }else{
      const filteredFriend = friendList.filter((friend) =>
      friend.name.toLowerCase().startsWith(e.target.value.toLowerCase())
    );  
    setFriendList(filteredFriend);
    }
  };

  return (
    <Container>
    <div className='mt-5'>

      <Form>
      <Form.Group className="mb-3">
      <Form.Label>Find your Friends</Form.Label>
      <Form.Control type='text' value={searchVal} onChange={handleChange} placeholder="Find your friends" />
      </Form.Group>
      </Form>
    { 
      loading ?  <>
      <Spinner animation="border" variant="dark" />
     
      </> :  friendList.length === 0 ? <h1>No Friends Found</h1> :
        <>
      <h1 className='mt-5'>My Friends</h1>
     {   friendList.map((friend)=>(
      <Card style={{ width: '18rem',marginBottom: '10px' }} key={friend._id}>
              <Card.Body>
              <Card.Title>{friend.name}</Card.Title>
              <Card.Text> {friend.age} </Card.Text> 
                {!hideButton ? (
                 <Button variant="dark" onClick={()=>handleClick(friend._id)} style={{marginRight: '10px'}}>Edit</Button>
                ):(
                  <></>
                )}
            
           
           
            <Button variant="dark" onClick={()=>handleDelete(friend._id)}>Delete</Button>
            </Card.Body>
            </Card>
        )) 
      }
        </>
        
    }

      
    </div>
    </Container>
  )
}

export default Friends