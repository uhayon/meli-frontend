import React from 'react';
import Logo from './Logo_ML.png';
import SearchIcon from './ic_Search.png';

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <img src={Logo} alt='Logo'/>
      <div className='searchInput'>
        <input type='text' placeholder='Nunca dejes de buscar'/>
        <div className='searchIconContainer'>
          <img src={SearchIcon} alt='Search'/>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
