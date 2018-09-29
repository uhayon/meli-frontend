import React from 'react';
import FreeShippingLogo from './ic_shipping.png';

const SearchResultRow = ({ item, history }) => {
  const { id, picture, price: {amount}, free_shipping, title } = item;
  return (
    <div className='search-result-row' onClick={() => history.push(`/items/${id}`)}>
      <img src={picture} alt='Producto'/>
      <div>
        <div className='price-container'>
          <h2>{`$ ${amount}`}</h2>
          {free_shipping ? <img src={FreeShippingLogo} alt='Free shipping'/> : null}
        </div>
        <span>{title}</span>
      </div>
    </div>
  );
};
export default SearchResultRow;
