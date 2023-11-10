import { useCart } from "./CartSummary";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const NavBar = () => {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="navbar">
      <Link to="/" className="navbar-link">
        Home
      </Link>
      <Link to="/shop" className="navbar-link">
        Shop
      </Link>
      <div className="cart-summary">
        <p>Cart Items: {totalItems > 0 ? totalItems : "0"}</p>
      </div>
    </div>
  );
};

export default NavBar;
