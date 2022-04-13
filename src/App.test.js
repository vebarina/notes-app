import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

function addNote(notes) {
  const addButton = screen.getByRole("button", { name: /add note/i });
  notes.forEach((note) => {
    fireEvent.click(addButton);
  });
}

describe("App", () => {
  test("Renders NavBar h1", () => {
    render(<App />);
    const navbarElement = screen.getByText(/my notes app/i);
    expect(navbarElement).toBeInTheDocument();
  });

  test("Should add notes", () => {
    render(<App />);
    addNote(["Shopping list", "Interview info", "Recipe"]);
    const notesElement = screen.getByTestId("notes-test");
    expect(notesElement).toBeInTheDocument();
  });

  test("Should search for notes", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/search.../i);
    fireEvent.change(inputElement, { target: { value: /shopping list/i } });
  });

  test("Should display only the notes searched for", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/search.../i);
    addNote(["Shopping list", "Interview info"]);
    const noteElement = screen.queryByDisplayValue(/interview info/i);
    fireEvent.change(inputElement, { target: { value: /shopping list/i } });
    expect(noteElement).not.toBeInTheDocument();
  });
});
