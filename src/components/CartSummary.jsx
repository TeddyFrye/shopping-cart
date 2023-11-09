import { createContext, useState, useContext } from "react";
import propTypes from "prop-types";

// Create a cart context
export const CartContext = createContext();

// Custom hook for consuming the context
export const useCart = () => useContext(CartContext);

const CartSummary = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if product is already in the cart
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // Increase its quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new product with a quantity of 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === productId);

      if (existingItem && existingItem.quantity > 1) {
        // Decrease the quantity
        return prevItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        // Remove the item from the cart
        return prevItems.filter((item) => item.id !== productId);
      }
    });
  };

  // Render the cart summary UI
  const renderCartSummary = () => {
    if (cartItems.length === 0) {
      return <p>Your cart is empty.</p>;
    }

    return (
      <div>
        <h2>Your Cart</h2>
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
        <p>Total: ${calculateTotal().toFixed(2)}</p>
      </div>
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {renderCartSummary()}
      {children}
    </CartContext.Provider>
  );
};

CartSummary.propTypes = {
  children: propTypes.node.isRequired,
};

export default CartSummary;
