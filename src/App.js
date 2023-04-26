import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Main from "./components/Main";
import Board from "./components/wholeSignUp/Board";
import SignUp from "./components/wholeSignUp/SignUp";
import Login from "./components/wholeSignUp/Login";
import Products from "./components/Products";




function App() {

 
  return (
    <div className="App">
      
      
      

      <Routes>
          <Route path="/Main" element={<Main/>} />
          <Route path="/Board" element={<Board/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/*" element={<Navigate to='/Main' />} />
        </Routes>

    </div>
  );
}

export default App;
