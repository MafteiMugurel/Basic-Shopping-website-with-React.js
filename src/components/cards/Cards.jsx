import "./Cards.scss";

const Cards = () => {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img
            src="https://www.ssangyong.ro/images/midi/uj-korando.png"
            alt=""
            className="card-image"
          />
          <div className="card-title">Korando</div>
          <div className="card-price">10.000$</div>
          <button className="card-button">Add to card</button>
        </div>
      </div>
    </>
  );
};

export default Cards;
