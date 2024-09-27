import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ali from "./pages/Ali";
import Friends from "./pages/Friends";
import BeMyFriend from "./pages/BeMyFriend";
import React, { useEffect, useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Login from "./pages/Login";
import { Signup } from "./pages/Signup";

export const Context = React.createContext();

function App() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [login, setLogin] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    if(user){
      setLogin(true)
    }
    try {
      const getFriends = async () => {
        const res = await fetch("http://localhost:5000/friend");
        const resData = await res.json();
        setFriends(resData);
      };
      getFriends();
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Context.Provider value={[login, setLogin]}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Ali />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/friends"
            element={<Friends friends={friends} loading={loading} />}
          />
          <Route
            path="/bemyfriend"
            element={<BeMyFriend loading={loading} />}
          />
          <Route
            path="/bemyfriend/:id"
            element={<BeMyFriend friends={friends} loading={loading} />}
          />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
