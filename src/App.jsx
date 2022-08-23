import React from "react";
import Cart from "./pages/cart/Cart";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import Nav from "./components/nav/Nav";
import Homepage from "./pages/homepage/Homepage";
import "./App.scss";

const App = () => {
  return (
    <>
      <CartProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </>
  );
};

export default App;
