/**
 * ************************************
 * 
 * @module BookList.jsx
 * @description renders each book
 * 
 * ************************************
 */

import React, { Fragment } from 'react';

const BookItem = ({ index, title, isbn, publishedYear }) => {
	// utilize Fragment to avoid wrapping in unnecessary div
	return(
		<Fragment>
			<p className="book-title">{index + 1}. {title}</p>
			<p className="book-info">Published: {publishedYear}</p>
			<p className="book-info">ISBN: {isbn}</p>
		</Fragment>
	);
};

export default BookItem;
