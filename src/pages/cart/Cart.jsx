import { CartState } from "../../contexts/cartContext";
import "./Cart.scss";

const Cart = () => {
  const { cartItems } = CartState();
  console.log("cartItems = ", cartItems);
  return <></>;
};

export default Cart;
