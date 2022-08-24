import "./CartItem.scss";

const CartItem = ({ cardInfo }) => {
  return (
    <>
      <div>
        <img src={cardInfo.image} alt={cardInfo.name} />
      </div>
    </>
  );
};

export default CartItem;
