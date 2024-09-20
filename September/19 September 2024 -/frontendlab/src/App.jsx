import BioData from './components/BioData';
import Friends from './components/Friends';
import Myform from './components/Myform';
import Signup from './pages/Signup';
import Login from './pages/Login';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect,useState } from 'react';
import './style.css'
function App() {
  //const friend = ['umer', 'shoiab', 'khalid'];
  const[friends ,setFriends]= useState([])
  const [loading, setLoading] = useState(true)
  const [login, setLogin] = useState(true)
 
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
      <BrowserRouter>
      {/* <Header login={login} setLogin={setLogin}/> */}
        <Routes>
          <Route path='/' element={<BioData />} />
          <Route path='/login' element={<Login login={login} setLogin={setLogin} />}  />
          <Route path='/signup' element={<Signup login={login} setLogin={setLogin} />}  />
          <Route path='/friends' element={<Friends friends={friends} loading={loading} login={Login} setLogin={setLogin}/>} />
          <Route path='/forms' element={<Myform />} />
          <Route path='/forms/:id' element={<Myform friends={friends}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
