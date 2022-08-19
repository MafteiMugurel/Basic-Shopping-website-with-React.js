import "./App.scss";
import Nav from "./components/nav/Nav";
import Homepage from "./pages/homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/cart/Cart"
const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
};
export default App;
