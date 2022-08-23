import { Link } from "react-router-dom";
import "./Nav.scss";
import logo from "../../assets/logo.jpg";
import cartimage from "../../assets/cart-icon.png";
import { CartState } from "../../context/cartContext";

const Nav = () => {
  const { numberOfItems } = CartState();
  return (
    <>
      <div className="nav">
        <Link to="/">
          <div className="logo">
            <img src={logo} className="image-logo" alt="Image" />
          </div>
        </Link>
        <Link to="cart">
          <div className="cart">
            <img src={cartimage} alt="" />
            <div className="cart-counter">({numberOfItems})</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Nav;
