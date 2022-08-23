import { CartState } from "../../context/cartContext";
import "./Cart.scss";

const Cart = () => {
  const { cartItems } = CartState();
  console.log("cartItems = ", cartItems);
  return <></>;
};

export default Cart;
