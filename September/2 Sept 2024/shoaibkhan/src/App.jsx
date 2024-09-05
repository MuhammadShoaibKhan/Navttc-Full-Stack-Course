import { Component, useState } from 'react'
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from './components/Home';

function App() {
 

  return (
    <>
      <div>
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<home/>} />
       
      </Routes>
      </BrowserRouter>

    </div>
    </>
  );
}

export default App
