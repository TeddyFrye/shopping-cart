// CartSummary.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CartProvider, useCart } from "../src/components/CartSummary";

// Test component that uses the CartSummary context
const TestComponent = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  return (
    <div>
      <button
        onClick={() => addToCart({ id: 1, title: "Product 1", price: 10 })}
      >
        Add Product
      </button>
      <button onClick={() => removeFromCart(1)}>Remove Product</button>
      <div>Cart Count: {cartItems.length}</div>
    </div>
  );
};

describe("CartSummary", () => {
  it("should add item to cart", () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    const addButton = screen.getByText("Add Product");
    fireEvent.click(addButton);

    expect(screen.getByText("Cart Count: 1")).toBeInTheDocument();
  });

  it("should remove item from cart", () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    const addButton = screen.getByText("Add Product");
    const removeButton = screen.getByText("Remove Product");

    // Add and then remove an item
    fireEvent.click(addButton);
    fireEvent.click(removeButton);

    expect(screen.getByText("Cart Count: 0")).toBeInTheDocument();
  });
});
