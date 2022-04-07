import React from "react";
import SearchBar from "./SearchBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/note-header.css";

function NoteHeader(props) {
  const { addNote, searchNote, notesLimit } = props;
  const toastModal = () =>
    toast("Sorry! You have reached the maximum number of notes.");

  return (
    <div className="note-header" title="note-header">
      <SearchBar searchNote={searchNote} />
      <button className="add-btn" onClick={notesLimit ? toastModal : addNote}>
        + Add Note
      </button>
      <ToastContainer />
    </div>
  );
}

export default NoteHeader;
