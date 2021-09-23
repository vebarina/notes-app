import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../styles/searchBar.css';

function SearchBar(props) {
	const {searchNote} = props;

	return (
		<div className="search-bar">
			<div className="container">
				<FontAwesomeIcon icon={faSearch} className="search-icon" />
				<input 
					type="text" 
					placeholder="Search..."
					onChange={e => searchNote(e.currentTarget.value)} />
			</div>
		</div>
	)
}

export default SearchBar;