import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

const mockSearchBar = jest.fn();

describe("SearchBar", () => {
  test("Should render the search bar", () => {
    render(<SearchBar searchNote={mockSearchBar} />);
    const searchComponent = screen.getByTitle("search");
    expect(searchComponent).toBeInTheDocument();
  });

  test("Should render input element", () => {
    render(<SearchBar searchNote={mockSearchBar} />);
    const inputElement = screen.getByPlaceholderText(/search.../i);
    expect(inputElement).toBeInTheDocument();
  });

  test("Should be able to type into input", () => {
    render(<SearchBar searchNote={mockSearchBar} />);
    const inputElement = screen.getByPlaceholderText(/search.../i);
    fireEvent.change(inputElement, {
      target: { value: "Shopping list" },
    });
    expect(inputElement.value).toBe("Shopping list");
  });
});
