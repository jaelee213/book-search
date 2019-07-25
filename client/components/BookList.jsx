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
import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from 'react-virtualized';
import 'react-virtualized/styles.css';
import ReactLoading from 'react-loading';
import BookItem from './BookItem';

const mapStateToProps = store => ({
  isFetching: store.isFetching,
  searchResults: store.searchResults,
});

const BookList = ({ isFetching, searchResults }) => {
  // specifications required for virtualized list
  const ROW_HEIGHT = 150;
  const cache = new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: ROW_HEIGHT,
  });

  // method that renders BookItem components in each cell of list
  const rowRenderer = ({ index, key, style, parent }) => {
    const currentBook = searchResults[index];
    return(
      // cell measurer allows each cell to dynamically adjust its 
      // width and height depending on the size of its inner content
      <CellMeasurer
        key={key}
        cache={cache}
        parent={parent}
        columnIndex={0}
        rowIndex={index}
      >
        <div className="book-item" key={key} style={style}>
          <BookItem 
            title={currentBook.title}
            isbn={currentBook.isbn[0]}
            publishedYear={currentBook.first_publish_year}
            index={index}
            />
        </div> 
      </CellMeasurer>
    );
  };

  return(
    <div className="book-list">
      {isFetching 
        // render a loading screen when fetching from api
        ? (<div className="other-display">
            <ReactLoading t
              type="bubbles" 
              color="#000000" 
              width={50}
              height={50}
            />
            <p>Loading...</p>
          </div>)
        // render text when there is no results to display
        : !searchResults.length
        ? <div className="other-display">
            <p>No results to display</p>
          </div>
        // otherwise render the list of book results
        /* AutoSizer allows list to dynamically adjust dimensions based on window size */
        : <AutoSizer> 
            {({ height, width }) => (
              <List 
              width={width}
              height={height}
              rowHeight={ROW_HEIGHT}
              rowRenderer={rowRenderer}
              rowCount={searchResults.length}
              />
            )}
          </AutoSizer>
      }
    </div>
  );
}

export default connect(mapStateToProps, null)(BookList);
