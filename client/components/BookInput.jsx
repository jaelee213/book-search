/**
 * ********************************************
 * 
 * @module BookInput.jsx
 * @description renders search input field
 * 
 * ********************************************
 */

import React from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import * as actions from '../actions/actions'

const mapDispatchToProps = dispatch => ({
	getBooks: title => { dispatch(actions.getBooks(title)) },
});

const BookInput = ({ getBooks }) => {
	// wait 300ms to invoke getBooks (until user finishes typing)
	const getBooksDebounced = debounce(getBooks, 300);
	return(
		<div className="book-input">
			<input
				placeholder="Enter book title"
				onChange={e => getBooksDebounced(e.target.value)}
			/>
		</div>
	);
}

export default connect(null, mapDispatchToProps)(BookInput);
