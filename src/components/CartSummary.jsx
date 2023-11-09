import { createContext, useState, useContext } from 'react';

// Define the type for items in the cart
interface CartItem {
  title: string;
  id: number;
  quantity: number;
  price: number;
}

// Create a context for the cart
export const CartContext = createContext<{
  cartItems: CartItem[];
  addToCart: () => void;
}>({ cartItems: [], addToCart: () => {} });

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = () => {
    setCartItems((prevItems) => {
      // Check if product is already in the cart
      const existingItem = prevItems.find(item => item.id === product.id);
  
      if (existingItem) {
        // If it is, increase its quantity
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If not, add the new product with a quantity of 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });


  // Other cart functions: removeFromCart, clearCart

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};}