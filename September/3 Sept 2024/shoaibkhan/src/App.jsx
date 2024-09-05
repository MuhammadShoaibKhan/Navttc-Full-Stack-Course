import { Component, useState } from 'react'
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from './components/Home';
import Form from './components/Form';
import FriendList from './components/FriendList';

function App() {
  const friends = ['Ahmed', 'Areeb', 'Nimra'];
  return (
    <>
      <div>
      <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/Form" element={<Form/>} />
        <Route path="/FriendList" element={<FriendList friends = {friends}/>} />
      </Routes>
      </BrowserRouter>

    </div>

    </>
  );
}

export default App
