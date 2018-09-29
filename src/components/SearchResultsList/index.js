import React from 'react';
import SearchResultRow from '../SearchResultRow';

const SearchResultsList = ({ items, history }) => {
  return (
    <div className='search-result-list'>
      {
        items.map(item => <SearchResultRow item={item} key={item.id} history={history} />)
      }
    </div>
  );
};
export default SearchResultsList;
