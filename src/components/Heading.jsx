import React from "react";
import SearchBar from "./SearchBar";
import "../styles/heading.css";

function Heading(props) {
  const { addNote, searchNote } = props;

  return (
    <div className="heading" title="heading">
      <SearchBar searchNote={searchNote} />
      <button className="add-btn" onClick={addNote}>
        + Add Note
      </button>
    </div>
  );
}

export default Heading;
