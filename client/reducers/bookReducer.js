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
  isFetching: false, // bool indicator to utilize loading screen during fetch
  searchResults: [], // array to hold book search results
};

const bookReducer = (state=initialState, { type, payload }) => {
  switch (type) {

    case types.FETCH_IN_PROGRESS:
      return {
        ...state, 
        isFetching: true,
        searchResults: [],
      };

    case types.FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        searchResults: payload,
      };
    
    case types.FETCH_ERROR:
      // throw an error message for any fetch errors that occur
      console.error('Following problem occured while fetching - ', payload);
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
};

export default bookReducer;
