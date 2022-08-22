import cars from "../../assets/data.json";
import Card from "../card/Card";
import "./Cards.scss";

const Cards = (props) => {
  return (
    <>
      <div className="cards">
        {cars
          .filter((car) =>
            car.name.toLowerCase().includes(props.searchByName.toLowerCase())
          )
          .map((carObject) => {
            return <Card cardInfo={carObject} />;
          })}
      </div>
    </>
  );
};

export default Cards;
