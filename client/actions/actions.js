/**
 * ************************************
 *
 * @module  actions.js
 * @description action creators
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';
import { Observable } from 'rxjs';

export const getBooks = (title, prevSubs) => dispatch => {
  // no need to fetch if title is empty string
  if (!title.length) dispatch(fetchSuccess([]));
  else {
    // if previous fetch subscription exists, unsubscribe from it
    if (prevSubs !== null) {
      prevSubs.unsubscribe();
    }
    // wrap the fetch process in observable so each fetch request can 
    // easily be subscribed / unsubscribed to --> avoid stale data
    const fetchData$ = Observable.create((observer) => {
      const queryString = title.split(' ').join('+');
      fetch(`http://openlibrary.org/search.json?title=${queryString}`)
      .then(res => res.json()) // convert response to json
      .then(({ docs }) => {
        observer.next(docs); // emit the docs that was returned from api
      })
      .catch(err => {
        observer.error(err); // emit upon encountered error (stops process)
      });
    });
    // subscribe to fetchData$ to start fetch process
    const subscription = fetchData$.subscribe(
      // first param is callback that listens to values emitted from observer.next
      (docs) => {
        // filter result by books that have title, isbn #, first publish year
        const searchResults = docs.filter(book => {
          return book.title && book.isbn && book.first_publish_year && book.author_name;
        });
        dispatch(fetchSuccess(searchResults));
      },
      // second param is callback that listens to values emitted from observer.error
      (err) => dispatch(fetchError(err)),
      // third param is callback that listens to the invocation of observer.complete
      null,
    );
     // dispatch action to indicate existing subscription (fetch in progress)
     dispatch(fetchInProgress(subscription));
    return;
  }
};
  
export const fetchInProgress = (subscription) => ({
  type: types.FETCH_IN_PROGRESS,
  payload: subscription,
});

export const fetchSuccess = searchResults => ({
  type: types.FETCH_SUCCESS,
  payload: searchResults,
});

export const fetchError = err => ({
  type: types.FETCH_ERROR,
  payload: err,
});
