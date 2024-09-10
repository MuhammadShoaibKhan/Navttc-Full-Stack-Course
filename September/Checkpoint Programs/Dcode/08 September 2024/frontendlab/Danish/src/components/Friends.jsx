import { useState,useEffect } from "react";

import { useNavigate } from "react-router-dom";
const Friends = ({friends}) => {
    const[frienList,setFriendList] = useState([])
    const navigate = useNavigate()
    const handleclick=(id)=>{
       

    }
    const handledelete= async(id)=>{
        const res = await fetch(`http://localhost:5000/friend/delete/${id}`,{
            method:"DELETE",          
           })
           const resData = await res.json()
           console.log(resData);
           //const updatedfriend = frienList.filter(()=>)
        
                  

    }
     useEffect(()=>{
        if(friends){
            setFriendList(friends)
        }

     },[friends])
    return (
        <ol>
            {friends.map((friend) => (
               <>
               <div className="friend">
               <h3> {friend.name}</h3>
               <h3>{friend.contact}</h3>
               <button className="btn btn-primary" onClick={()=>handleclick(friend._id)}>Edit</button>
               <button className="btn btn-primary" onClick={()=>handledelete(friend._id)}>Delete</button>
               </div>
               </>
               
              
            ))}
            
        </ol>
    );
};
export default Friends
