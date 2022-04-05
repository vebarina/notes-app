import React from "react";
import SearchBar from "./SearchBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/heading.css";

function Heading(props) {
  const { addNote, searchNote, notesLimit } = props;
  const toastModal = () =>
    toast("Sorry! You have reached the maximum number of notes.");

  return (
    <div className="heading" title="heading">
      <SearchBar searchNote={searchNote} />
      <button className="add-btn" onClick={notesLimit ? toastModal : addNote}>
        + Add Note
      </button>
      <ToastContainer />
    </div>
  );
}

export default Heading;
