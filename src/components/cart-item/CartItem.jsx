import "./CartItem.scss";

const CartItem = ({ cardInfo }) => {
  return (
    <>
      <div className="cart-cards">
        <img className="cart-image" src={cardInfo.image} alt={cardInfo.name} />
        <div className="cart-name">{cardInfo.name}</div>
        <div className="cart-quantity">Quantity: {cardInfo.quantity} </div>
        <div className="cart-price">Price: {cardInfo.price} $</div>
      </div>
    </>
  );
};

export default CartItem;
