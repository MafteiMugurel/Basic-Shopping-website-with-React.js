import "./CartItem.scss";

const CartItem = ({ cardInfo }) => {
  return (
    <>
      <div>
        <img src={cardInfo.image} alt={cardInfo.name} />
        <div>{cardInfo.name}</div>
        <div>Quantity: {cardInfo.quantity} </div>
        <div>Price: {cardInfo.price} $</div>
      </div>
    </>
  );
};

export default CartItem;
