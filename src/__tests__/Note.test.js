import { render, screen } from "@testing-library/react";
import Note from "../components/Note";

function MockNote(note, deleteNote, updateNote) {
  return <Note note={note} deleteNote={deleteNote} updateNote={updateNote} />;
}

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
