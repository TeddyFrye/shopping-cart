import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../src/pages/Home";

describe("Home Component", () => {
  it("renders without crashing", () => {
    render(<Home />);
    expect(screen.getByText(/welcome to the shopping/i)).toBeInTheDocument();
  });
});
