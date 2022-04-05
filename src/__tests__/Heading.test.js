import { render, screen } from "@testing-library/react";
import Heading from "../components/Heading";

test("Should render div component on the screen", () => {
  render(<Heading />);
  const divElement = screen.getByTitle(/heading/i);
  expect(divElement).toBeInTheDocument();
});

test("Should render button on the screen", () => {
  render(<Heading />);
  const btnElement = screen.getByRole("button");
  expect(btnElement).toBeInTheDocument();
});
