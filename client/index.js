/**
 * ************************************
 * 
 * @module index.js
 * @description entry point of react/redux application
 * 
 * ************************************
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

render(
  // wrap the react app with Provider to give access to the store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
