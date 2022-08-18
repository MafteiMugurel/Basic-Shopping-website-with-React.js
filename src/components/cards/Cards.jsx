import "./Cards.scss";
import cars from "../../assets/data.json";
import Card from "../card/Card";
const Cards = () => {
  
  return (
    <>
      <div className="cards">
        {cars.map((carObject) => {
         return (
         <Card cardInfo={carObject}/>
          )
        })}
      </div>
    </>
  );
};

export default Cards;
