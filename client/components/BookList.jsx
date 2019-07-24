/**
 * ********************************************
 * 
 * @module BookList.jsx
 * @description renders BookItem components
 * 
 * ********************************************
 */

import React from 'react';
import { connect } from 'react-redux';
import { List } from 'react-virtualized';
import BookItem from './BookItem';

const mapStateToProps = store => ({
  isFetching: store.isFetching,
  searchResults: store.searchResults,
});

const BookList = ({ isFetching, searchResults }) => {
  // specifications required for virtualized list
  const LIST_HEIGHT = 600; 
  const ROW_HEIGHT = 100;
  const ROW_WIDTH = 600;

  // method that renders BookItem components
  const rowRenderer = ({ index, key, style }) => {
    const currentBook = searchResults[index];
    return(
      <div className="book-item" key={key} style={style}>
        <BookItem 
          title={currentBook.title}
          isbn={currentBook.isbn[0]}
          publishedYear={currentBook.first_publish_year}
        />
      </div> 
    );
  };

  return(
    <div className="book=list">
      {isFetching 
        ? <p>Loading...</p>
        : !searchResults.length
        ? <p>No results to display</p>
        : <List 
            width={ROW_WIDTH}
            height={LIST_HEIGHT}
            rowHeight={ROW_HEIGHT}
            rowRenderer={rowRenderer}
            rowCount={searchResults.length}
          />
      }
    </div>
  );

  /**  the non-ternary way to write the above code **/
  // if (isFetching) {
  //   return(
  //     <div>
  //       <p>Loading...</p>
  //     </div>
  //   );
  // } else if (!searchResults.length) {
  //   return(
  //     <div>
  //       <p>No results to display</p>
  //     </div>
  //   );
  // } else {
  //   return(
  //     <div className="book-list">
  //       <List 
  //         width={ROW_WIDTH}
  //         height={LIST_HEIGHT}
  //         rowHeight={ROW_HEIGHT}
  //         rowRenderer={rowRenderer}
  //         rowCount={searchResults.length}
  //       />
  //     </div>
  //   );
  // }
}

export default connect(mapStateToProps, null)(BookList);
