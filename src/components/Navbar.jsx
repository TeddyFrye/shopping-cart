import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const NavBar = ({ toggleCart }) => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-link">
        Home
      </Link>
      <Link to="/shop" className="navbar-link">
        Shop
      </Link>
      <button onClick={toggleCart} className="navbar-link">
        Cart
      </button>
    </div>
  );
};

export default NavBar;
