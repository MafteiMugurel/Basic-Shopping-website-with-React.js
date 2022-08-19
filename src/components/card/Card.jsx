import "./Card.scss";
const Card = (props) => {
  console.log(props);
  return (
    <>
      <div className="card">
        <img
          src={props.cardInfo.image}
          alt={props.cardInfo.name}
          className="card-image"
        />
        <div className="card-title">{props.cardInfo.name}</div>
        <div className="card-price">{props.cardInfo.price} $</div>
        <button className="card-button">Add to card</button>
      </div>
    </>
  );
};
export default Card;
