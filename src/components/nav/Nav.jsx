import "./Nav.scss";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <div className="nav">
        <Link to="/">
          <div className="title">Auto Rulate</div>
        </Link>
        <Link to="cart">
          <div className="cart">Cart</div>
        </Link>
      </div>
    </>
  );
};

export default Nav;
