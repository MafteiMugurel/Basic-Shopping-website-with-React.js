import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <img src="require('../../assets/logo.jpg')" alt="Image" />
        </div>
        <Link to="/">
          <div className="title">Car Dealer</div>
        </Link>
        <Link to="cart">
          <div className="cart">Cart</div>
        </Link>
      </div>
    </>
  );
};

export default Nav;
