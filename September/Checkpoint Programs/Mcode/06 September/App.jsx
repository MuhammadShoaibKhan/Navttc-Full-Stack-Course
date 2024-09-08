import Friends from "./Friends"
import BeMyFriend from "./BeMyFriend"
// import Component from "./Component"
import { useEffect,useState } from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';


function App() {
  // const friends = ['Shanzy', "Khadija", "haleema"];
  const [friends, setFriends] = useState([])

  useEffect(()=>{
  const getFriends = async() =>{
    const res = await fetch('http://localhost:5000/friend')
  const resData = await res.json()
  setFriends(resData)
  console.log(resData)
  
}
getFriends()  

  },[])
  return (
<>
<Router>
    <Routes>
      {/* <Route path="/" element={<Component/>} /> */}
      <Route path="/friends" element={<Friends friends={friends}/>} />
      <Route path="/bemyfriend" element={<BeMyFriend/>} />
      <Route path="/bemyfriend/:id" element={<BeMyFriend friends = {friends}/>} />

    </Routes>
    </Router>
    </>
  )
}


export default App
