/**
 * ************************************
 * 
 * @module BookList.jsx
 * @description renders each book
 * 
 * ************************************
 */

import React, { Fragment } from 'react';

const BookItem = ({ title, isbn, publishedYear }) => {
	// utilize Fragment to avoid wrapping in unnecessary div
	return(
		<Fragment>
			<br />
			<p>{title}</p>
			<p>Published: {publishedYear}</p>
			<p>isbn: {isbn}</p>
		</Fragment>
	);
};

export default BookItem;
