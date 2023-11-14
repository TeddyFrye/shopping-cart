import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import App from "../src/App";
import ProductCard from "../src/components/ProductCard";

// Mocks
vi.mock("react-router-dom", async () => {
  const actualRouterDom = await vi.importActual("react-router-dom");
  return {
    ...actualRouterDom,
    BrowserRouter: ({ children }) => <div>{children}</div>,
  };
});

vi.mock("node-fetch", async () => {
  return {
    default: async () => ({
      json: async () => [{ id: 1, title: "Test Product", price: 9.99 }],
    }),
  };
});

vi.mock('../src/components/CartSummary.jsx', async () => {
  useCart:  () => {
    addToCart: vi.fn(),
    removeFromCart: vi.fn(),
    cartItems: [],
  }
});

// Test cases
describe("App Component", () => {
  it("renders without crashing", () => {
    render(<App />, { wrapper: MemoryRouter });
    // Assertions...
  });
});

describe("App Navigation", () => {
  it("renders the home page content", () => {
    render(<App />, { wrapper: MemoryRouter });
    expect(screen.getByText(/welcome to the shopping/i)).toBeInTheDocument();
  });

  it("renders the shop link", () => {
    render(<App />, { wrapper: MemoryRouter });
    expect(screen.getByRole("link", { name: /shop/i })).toBeInTheDocument();
  });
});

describe("Route Navigation", () => {
  it("navigates to the shop page when shop link is clicked", async () => {
    render(<App />, { wrapper: MemoryRouter });
    const shopLink = screen.getByRole("link", { name: /shop/i });
    fireEvent.click(shopLink);
  });
});

//  Test product card
describe("ProductCard Component", () => {
  const mockProduct = {
    id: 1,
    title: "Test Product",
    price: 9.99,
    image: "test-image-url",
  };

  it("renders product information", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$9.99")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "test-image-url");
  });

  it("enlarges the image on click", () => {
    render(<ProductCard product={mockProduct} />);
    const image = screen.getByRole("img");
    fireEvent.click(image);
    expect(image).toHaveClass("enlarged");
  });
});
