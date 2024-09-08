
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friends = ({friends}) =>{
  const navigate = useNavigate()
  const handleClick = (id) => {
    navigate('/Form/${id}')
  }
}


function FriendList({ friends }) {
  return (
    <>
    <h1>My Friend List</h1>
    <ul>
      {friends.map((friend, index) => (
        <div onClick={()=>handleClick(friend._id)}>
        <li key={index}>{friend.name}<br/>
        {friend.age}<br/>
        {friend.loyalty}
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


