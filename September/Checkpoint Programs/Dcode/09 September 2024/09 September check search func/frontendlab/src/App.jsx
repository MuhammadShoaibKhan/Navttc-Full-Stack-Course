import BioData from './components/BioData';
import Friends from './components/Friends';
import Myform from './components/Myform';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect,useState } from 'react';
import './style.css'
function App() {
  //const friend = ['umer', 'shoiab', 'khalid'];
  const[friends ,setFriends]= useState([])
 
  useEffect(()=>{
    const getFriends = async ()=>{
      const res = await fetch('http://localhost:5000/friend/get')
      const resData =await res.json()
      setFriends(resData)
      console.log(resData);
      
    }
    getFriends()
  },[])
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BioData />} />
          <Route path='/friends' element={<Friends friends={friends}/>} />
          <Route path='/forms' element={<Myform />} />
          <Route path='/forms/:id' element={<Myform friends={friends}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
