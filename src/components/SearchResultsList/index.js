import React from 'react';
import SearchResultRow from '../SearchResultRow';

const SearchResultsList = ({ items }) => {
  return (
    <div className='search-result-list'>
      {
        items.map(item => <SearchResultRow item={item} key={item.id} />)
      }
    </div>
  );
};
export default SearchResultsList;
