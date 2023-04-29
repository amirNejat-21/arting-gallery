import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Main from "./components/Main";
import Board from "./components/wholeSignUp/Board";
import SignUp from "./components/wholeSignUp/SignUp";
import Login from "./components/wholeSignUp/Login";
import Store from "./components/Store";
import ProductReview from "./components/shared/ProductReview";
import ShopCart from "./components/ShopCart";

// context
import CartContextProvider from "./context/CartContextProvider";



function App() {

 
  return (
    <div className="App">
      
      
      
<CartContextProvider>

      <Routes>
          <Route path="/Main" element={<Main/>} />
          <Route path="/Board" element={<Board/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Store" element={<Store/>} />
          <Route path="/Cart" element={<ShopCart/>} />
          <Route path="/ProductReview/:id" element={<ProductReview/>} />
          <Route path="/*" element={<Navigate to='/Main' />} />
        </Routes>
        
</CartContextProvider>

    </div>
  );
}

export default App;
