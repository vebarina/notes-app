import { render, screen, fireEvent } from "@testing-library/react";
import Note from "../components/Note";

function MockNote(note, deleteNote, updateNote) {
  return <Note note={note} deleteNote={deleteNote} updateNote={updateNote} />;
}

describe("Note", () => {
  test("Should render note component", () => {
    render(<MockNote />);
    const noteComponent = screen.getByTestId("note-test");
    expect(noteComponent).toBeInTheDocument();
  });

  test("Should show note component on the screen", () => {
    render(<MockNote />);
    const noteComponent = screen.getByTestId("note-test");
    expect(noteComponent).toBeVisible();
  });

  test("Should be able to type into title input", () => {
    render(<MockNote />);
    const titleInputElement = screen.getByPlaceholderText(/note title/i);
    fireEvent.change(titleInputElement, {
      target: { value: "Shopping list" },
    });
    expect(titleInputElement.value).toBe("Shopping list");
  });

  test("Should be able to type into body input", () => {
    render(<MockNote />);
    const bodyInputElement = screen.getByPlaceholderText(/write here.../i);
    fireEvent.change(bodyInputElement, {
      target: { value: "apples, bananas" },
    });
    expect(bodyInputElement.value).toBe("apples, bananas");
  });
});
