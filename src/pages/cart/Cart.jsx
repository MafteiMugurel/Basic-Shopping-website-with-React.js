import CartItem from "../../components/cart-item/CartItem";
import { CartState } from "../../context/cartContext";
import "./Cart.scss";

const Cart = () => {
  const { cartItems } = CartState();

  console.log("cartItems = ", cartItems);

  return (
    <>
      <div className="cart-page">
        {cartItems.map((cartItem) => {
          return <CartItem cardInfo={cartItem} />;
        })}
      </div>
    </>
  );
};

export default Cart;
