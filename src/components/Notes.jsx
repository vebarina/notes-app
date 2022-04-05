import React from "react";
import Note from "./Note";
import "../styles/notes.css";

function Notes(props) {
  const { notes, deleteNote, updateNote } = props;
  const arrayOfNotes = Array.from(notes);

  return (
    <div data-testid="notes-test" className="notes">
      {arrayOfNotes.map((note) => (
        <Note
          note={note}
          deleteNote={deleteNote}
          updateNote={updateNote}
          key={note.id}
        />
      ))}
    </div>
  );
}

export default Notes;
