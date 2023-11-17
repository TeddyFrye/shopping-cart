import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="tarcetlogo2.svg" alt="tarcet logo" className="logo"></img>
        <h1 className="navbar-title">TARCET</h1>
      </div>
      <Link to="/" className="navbar-link">
        Home
      </Link>
      <Link to="/shop" className="navbar-link">
        Shop
      </Link>
      <Link to="/terms" className="navbar-link">
        Terms
      </Link>
    </div>
  );
};

export default NavBar;
