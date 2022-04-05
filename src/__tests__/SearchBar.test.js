import { render, screen } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

test("Should render the search bar on the screen", () => {
  render(<SearchBar />);
  const searchComponent = screen.getByTitle("search");
  expect(searchComponent).toBeInTheDocument();
});
