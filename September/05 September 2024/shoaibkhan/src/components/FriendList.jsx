
import React from 'react';



function FriendList({ friends }) {
  return (
    <>
    <h1>My Friend List</h1>
    <ul>
      {friends.map((friend, index) => (
        <li key={index}>{friend.name}<br/>
        {friend.age}<br/>
        {friend.loyalty}
        </li>
        
      ))}
    </ul>
   
    
    <div>
     
    </div>
    </>
  );
}

export default FriendList;


