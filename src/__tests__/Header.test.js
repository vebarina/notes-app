import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header", () => {
  test("Should render the header on the screen", () => {
    render(<Header />);
    const headerComponent = screen.getByTitle("header");
    expect(headerComponent).toBeInTheDocument();
  });
});
