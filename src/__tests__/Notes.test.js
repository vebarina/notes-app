import { render, screen, fireEvent } from "@testing-library/react";
import Notes from "../components/Notes";

function MockNotes(notes, deleteNote, updateNote) {
  return (
    <Notes notes={notes} deleteNote={deleteNote} updateNote={updateNote} />
  );
}

describe("Notes", () => {
  test("Should render notes component on the screen", () => {
    render(<MockNotes />);
    const notesComponent = screen.getByTestId("notes-test");
    expect(notesComponent).toBeInTheDocument();
  });
});
