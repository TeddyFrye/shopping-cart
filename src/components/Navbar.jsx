import { useCart } from "./CartSummary";
import { Link } from "react-router-dom";

const CartSummary = () => {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <p>Cart Items: {totalItems > 0 ? totalItems : "0"}</p>
      <Link to="/">Home </Link>
      <p> </p>
      <Link to="/shop">Shop</Link>
    </div>
  );
};

export default CartSummary;
