/**
 * **************************************
 * 
 * @module BookItem.jsx
 * @description renders each book result
 * 
 * **************************************
 */

import React, { Fragment } from 'react';

const BookItem = ({ index, title, isbn, publishedYear, author }) => {
  return(
    // utilize Fragment to avoid wrapping in unnecessary div
    <Fragment>
      <p className="book-title">{index + 1}. {title}</p>
      <p className="book-info"><b><i>{author}</i></b></p>
      <p className="book-info">Published: {publishedYear}</p>
      <p className="book-info">ISBN: {isbn}</p>
    </Fragment>
  );
};

export default BookItem;
