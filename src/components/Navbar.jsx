import { useCart } from "./CartSummary";

const CartSummary = () => {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <p>Cart Items: {totalItems}</p>
      {/* Other cart summary info */}
    </div>
  );
};

export default CartSummary;
