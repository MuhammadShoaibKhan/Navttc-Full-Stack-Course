
import React from 'react';



function FriendList({ friends }) {
  return (
    <>
    <h1>My Friend List</h1>
    <ul>
      {friends.map((friend, index) => (
        <li key={index}>{friend}</li>
      ))}
    </ul>
    </>
  );
}

export default FriendList;


