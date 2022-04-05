import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";

test("Should render the Navigation Bar on the screen", () => {
  render(<NavBar />);
  const navBarComponent = screen.getByTitle("navbar");
  expect(navBarComponent).toBeInTheDocument();
});
