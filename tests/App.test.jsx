import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import App from "../src/App";

vi.mock("react-router-dom", async () => {
  const actualRouterDom = await vi.importActual("react-router-dom");
  return {
    ...actualRouterDom,
    BrowserRouter: ({ children }) => <div>{children}</div>,
  };
});

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
