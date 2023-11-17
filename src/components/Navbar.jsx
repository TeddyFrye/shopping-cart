import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-link">
        Home
      </Link>
      <Link to="/shop" className="navbar-link">
        Shop
      </Link>
    </div>
  );
};

export default NavBar;
