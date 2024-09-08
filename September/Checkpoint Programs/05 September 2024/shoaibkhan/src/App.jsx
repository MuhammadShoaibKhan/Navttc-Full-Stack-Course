import { Component, useState } from 'react'
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from './components/Home';
import Form from './components/Form';
import FriendList from './components/FriendList';
import { useEffect} from 'react';


function App() {
 // const friends = ['Ahmed', 'Areeb', 'Nimra'];

 const[friends, setFriends] = useState([])

 useEffect(()=>{
   const getFriends = async() =>{
    try{
     const res= await fetch('http://localhost:4000/friend/');
     if (!res.ok) {
      throw new Error(`Error: ${res.statusText}`);
    }
     const resData = await res.json();
     setFriends(resData);
     console.log(resData);
    }catch(error){
      console.error('Failed to fetch friends:', error.message);
    }
   };
   getFriends()
 },[])
 

  return (
    <>
      <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Form" element={<Form/>} />
        <Route path="/Form/:id" element={<Form/>} />
        <Route path="/FriendList" element={<FriendList friends = {friends}/>} />
      </Routes>
      </BrowserRouter>

    </div>

    </>
  );
}

export default App
