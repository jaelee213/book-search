/**
 * ******************************************
 *
 * @module  bookReducer
 * @description reducer for book/search data
 *
 * ******************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  isFetching: false, // bool to indicate processing fetch request
  subscription: null, // observable to wrap each fetch process
  searchResults: [], // array to hold book search results
};

const bookReducer = (state=initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_IN_PROGRESS:
      return {
        ...state,
        isFetching: true,
        subscription: payload,
      };

    case types.FETCH_SUCCESS:
      return {
        isFetching: false,
        subscription: null,
        searchResults: payload,
      };

    case types.FETCH_ERROR:
      // throw an error message for any fetch errors that occur
      console.error('Following problem occured while fetching - ', payload);
      return {
        ...state,
        isFetching: false,
        subscription: null,
      };

    default:
      return state;
  }
};

export default bookReducer;
