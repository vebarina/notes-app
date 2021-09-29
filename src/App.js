import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Notes from './components/Notes';
import Heading from './components/Heading';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes") || "[]"));
  const [searchQuery, setSearchQuery] = useState("");
  
  function addNote() {
    const note = {
      id: uuidv4(),
      title: "",
      body: "",
    }
   const updatedNotes = [note, ...notes];
   setNotes(updatedNotes);
  }

  function updateNote(note) {
    const updatedNotes = notes.map(n => {
      if (n.id === note.id) {
        return note;
      } else {
        return n;
      }
   });

    setNotes(updatedNotes);
  }

  function deleteNote(note) {
    const updatedNotes = notes.filter(n => n.id !== note.id);
    setNotes(updatedNotes);
  }

  function filterPredicate(note) {
    if (
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      note.body.toLowerCase().includes(searchQuery.toLowerCase())) {
        return true;
      }
      return false;
  }

  const filteredNotes = (searchQuery === "") ? notes : notes
    .filter(filterPredicate);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <NavBar />
      <Heading 
        addNote={addNote} 
        searchNote={setSearchQuery} 
        value={searchQuery}
      />
      {notes.length ? (
        <Notes 
            notes={filteredNotes} 
            deleteNote={deleteNote} 
            updateNote={updateNote} 
          />
      ) : <p className="no-notes">You don't have any notes. To add a new note, click on the <span>add note</span> button.</p>}
    </div>
  );
}

export default App;
