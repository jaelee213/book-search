/**
 * *************************************
 * 
 * @module store.js
 * @description centralized state of app 
 * 
 * *************************************
 */

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import bookReducer from './reducers/bookReducer';

const store = createStore(
  bookReducer,
  // apply thunk middleware to allow for async actions
  composeWithDevTools(applyMiddleware(thunk)),
)

export default store;
