import React, {useState} from 'react';
import '../styles/note.css';

function Note(props) {
	const {deleteNote, updateNote} = props;
	const [onHover, setHover] = useState(false);
	const [note, setNote] = useState(props.note);

	function handleTitleChange(event) {
		const value = event.target.value;
		const updatedNote = {
			...note,
			title: value
		};

		updateNote(updatedNote);
		setNote(updatedNote);
	}

	function handleBodyChange(event) {
		const value = event.target.value;
		const updatedNote = {
			...note,
			body: value
		};
		
		updateNote(updatedNote);
		setNote(updatedNote);
	}

	return (
		<div 
			className="note"
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<div className="note-heading">
				<input 
					className="note-title" 
					defaultValue={note.title} 
					onInput={handleTitleChange}
					placeholder="Note title"
				/>
				{onHover && 
					<button 
						className="delete-btn" 
						onClick={() => deleteNote(note)} 
					>
						X
					</button>
				}
			</div>
			<textarea 
				className="note-body" 
				defaultValue={note.body} 
				onInput={handleBodyChange}
				placeholder="Write here..."
			/>
		</div>
	);
}

export default Note;