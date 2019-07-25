/**
 * ************************************
 *
 * @module  actions.js
 * @description action creators
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

export const getBooks = title => dispatch => {
  // no need to fetch if title is empty string
  if (!title.length) dispatch(fetchSuccess([]));
  else {
    // action to fire up loading splash screen while fetching to api
    dispatch(fetchInProgress());
    const queryString = title.split(' ').join('+');
    return fetch(`http://openlibrary.org/search.json?title=${queryString}`)
    .then(res => res.json()) // convert response to json
    .then(({ docs }) => {
      // filter result by books that have title, isbn #, first publish year
      const searchResults = docs.filter(book => book.title && book.isbn && book.first_publish_year);
      dispatch(fetchSuccess(searchResults));
    })
    .catch(err => {
      // fire the error handler action
      dispatch(fetchError(err));
    });
  }
};
  
export const fetchInProgress = () => ({
  type: types.FETCH_IN_PROGRESS,
});

export const fetchSuccess = searchResults => ({
  type: types.FETCH_SUCCESS,
  payload: searchResults,
});

export const fetchError = err => ({
  type: types.FETCH_ERROR,
  payload: err,
});
