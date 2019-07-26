/**
 * ********************************************
 * 
 * @module BookInput.jsx
 * @description renders search input field
 * 
 * ********************************************
 */

import React from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import * as actions from '../actions/actions'

const mapStateToProps = store => ({
  // prev subscription -- indicating if there is an existing fetch process
  prevSubs: store.subscription, 
});

const mapDispatchToProps = dispatch => ({
  getBooks: (title, prevSubs) => { dispatch(actions.getBooks(title, prevSubs)) },
});

const BookInput = ({ getBooks, prevSubs }) => {
  // wait 300ms to invoke getBooks (until user finishes typing)
  const getBooksDebounced = debounce(getBooks, 300);
  return(
    <div className="book-input">
      <input
        placeholder="Enter book title"
        onChange={e => getBooksDebounced(e.target.value, prevSubs)}
      />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(BookInput);
