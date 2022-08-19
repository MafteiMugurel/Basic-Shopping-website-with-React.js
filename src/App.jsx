import "./App.scss";
import Nav from "./components/nav/Nav";
import Homepage from "./pages/homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import React from "react";
const CartListContext = React.createContext();

const App = () => {
  return (
    <>
      <CartListContext.Provider>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </CartListContext.Provider>
    </>
  );
};
export default App;
