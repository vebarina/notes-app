import React from 'react';
import Note from './Note';
import '../styles/notes.css'

function Notes(props) {
	const {notes, deleteNote, updateNote} = props;

	return (
			<div className="notes">
				{notes.map(note => 
					<Note 
						note={note} 
						deleteNote={deleteNote} 
						updateNote={updateNote} 
						key={note.id} 
					/>
				)}
			</div>
	);
}

export default Notes;