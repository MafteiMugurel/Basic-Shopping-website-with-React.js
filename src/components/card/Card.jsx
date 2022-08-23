import { CartState } from "../../context/cartContext";
import "./Card.scss";

const Card = ({ cardInfo }) => {
  const { addCartItem } = CartState();

  return (
    <>
      <div className="card">
        <img src={cardInfo.image} alt={cardInfo.name} className="card-image" />
        <div className="card-title">{cardInfo.name}</div>
        <div className="card-price">{cardInfo.price} $</div>
        <button
          className="card-button"
          onClick={() => {
            addCartItem(cardInfo);
          }}
        >
          Add to cart
        </button>
      </div>
    </>
  );
};

export default Card;
