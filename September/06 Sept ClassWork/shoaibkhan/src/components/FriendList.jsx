
import React from 'react';
import { useNavigate } from 'react-router-dom';


function FriendList({ friends }) {
  const navigate = useNavigate()
  const handleClick = (id) => {
    navigate('/Form/${id}')
  }
  return (
    <>
    <h1>My Friend List</h1>
    <ul >
      {friends.map((friend, index) => (
        <div className='friend' key={index} >
        <li >{friend.name}<br/>
        {friend.age}<br/>
        {friend.loyalty}
        <button onClick={()=>handleClick(friend._id)}>Edit </button>
       
        </li>
        </div>
        
      ))}
    </ul>
   
    
    {/* <div>
    <button Linkto="/Home">Back</button>
    </div> */}
    </>
  );
}

export default FriendList;


