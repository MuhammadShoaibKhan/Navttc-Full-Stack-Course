import BioData from './components/BioData';
import Friends from './components/Friends';
import Myform from './components/Myform';
import Signup from './pages/Signup';
import React, {useEffect, useState} from "react";
import Login from './pages/Login';
import ColorSchemesExample from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
export const Context = React.createContext();

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './style.css'
function App() {
  //const friend = ['umer', 'shoiab', 'khalid'];
  const[friends ,setFriends]= useState([])
  const [loading, setLoading] = useState(true)
  const [login, setLogin] = useState(false)
 
  useEffect(()=>{
    try {
      const getFriends = async ()=>{
        const res = await fetch('http://localhost:5000/friend/get')
        const resData =await res.json()
        setFriends(resData)
      }
      getFriends()
    } catch (err) {
      console.log(err);
      setLoading(false)
    }
   setTimeout(() =>{
    setLoading(false)
   },2000);
     
  },[]);
  
  return (
    <>
    <Context.Provider value = {[login, setLogin]}>
      <BrowserRouter>
    <ColorSchemesExample/>
        <Routes>
          <Route path='/' element={<BioData />} />
          <Route path='/login' element={<Login  />}  />
          <Route path='/signup' element={<Signup  />}  />
          <Route path='/friends' element={<Friends friends={friends} loading={loading} />} />
          <Route path='/forms' element={<Myform />} />
          <Route path='/forms/:id' element={<Myform friends={friends}/>} />
        </Routes>
      </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
