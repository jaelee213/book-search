/**
 * ********************************************
 * 
 * @module App.jsx
 * @description renders BookInput and BookList
 * 
 * ********************************************
 */

import React from 'react';
import BookInput from './components/BookInput';
import BookList from './components/BookList';

const App = () => {
  return (
    <div className="main-container">
      <h1>Book Search</h1>
      <BookInput />
      <BookList />
    </div>
  )
};

export default App;
