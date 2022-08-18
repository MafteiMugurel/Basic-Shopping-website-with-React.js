import "./Cards.scss";
import cars from "../../assets/data.json";
const Cards = () => {
  
  return (
    <>
      <div className="cards">
        {cars.map((carObject) => {
         return (
         <div className="card">
            <img
              src={carObject.image}
              alt={carObject.name}
              className="card-image"
            />
            <div className="card-title">{carObject.name}</div>
            <div className="card-price">{carObject.price} $</div>
            <button className="card-button">Add to card</button>
          </div>
          )
        })}
      </div>
    </>
  );
};

export default Cards;
