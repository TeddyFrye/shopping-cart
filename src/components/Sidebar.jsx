import { useCart } from "./CartSummary";
import PropTypes from "prop-types";
import "../styles/Sidebar.css";
import shoppingCartImg from "../../public/shoppingcartimg.png";

const Sidebar = ({ isExpanded, toggleCart }) => {
  const { cartItems, removeFromCart } = useCart();

  const renderCartItems = () => {
    return cartItems.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <span> - </span>
            <span>{item.quantity}</span>
            <span> x ${item.price.toFixed(2)}</span>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className={`sidebar ${isExpanded ? "expanded" : ""}`}>
      <button onClick={toggleCart}>
        {isExpanded ? (
          "Hide Cart"
        ) : (
          <img src={shoppingCartImg} alt={`View Cart (${totalItems})`} />
        )}
      </button>
      {isExpanded && (
        <>
          <h2>Your Cart</h2>
          {renderCartItems()}
          <p>Total: ${calculateTotal().toFixed(2)}</p>
        </>
      )}
    </div>
  );
};

// Props validation
Sidebar.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  toggleCart: PropTypes.func.isRequired,
};

export default Sidebar;
