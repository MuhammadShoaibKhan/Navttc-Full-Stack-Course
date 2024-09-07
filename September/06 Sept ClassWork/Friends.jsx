import { useNavigate } from 'react-router-dom';
import React from 'react';


const Friends = ({ friends }) => {
    const navigate = useNavigate()
    const handleClick = (id)=>{
        navigate(`/bemyfriend/${id}`)
    }
    return (
        <div>
            <h1>Friends</h1>
            {friends.map((friend, index) => (
                <div>
                    <h1>{friend.name}</h1>
                    <h1>{friend.age}</h1>
                    <button onClick={()=>handleClick(friend._id)}>Edit</button>
                </div>
            ))}
        </div>
    );
};

export default Friends;
