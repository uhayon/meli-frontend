import React from 'react';

const ItemDetailDescription = ({ description }) => {
  return (
    <div className='item-detail-description'> 
      <span>Descripción del producto</span>
      <span>{description}</span>
    </div>
  );
};
export default ItemDetailDescription;
