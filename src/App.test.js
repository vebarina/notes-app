import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders NavBar h1", () => {
  render(<App />);
  const navbarElement = screen.getByText(/my notes app/i);
  expect(navbarElement).toBeInTheDocument();
});
