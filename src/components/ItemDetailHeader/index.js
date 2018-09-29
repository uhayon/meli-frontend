import React from 'react';

const ItemDetailHeader = ({ picture, condition, sold_quantity, price, title }) => {
  const amount = price ? price.amount : 0;
  return (
    <div className='item-detail-header'>
      <img src={picture} alt='Product'/>
      <div className='buy-box'>
        <span>{`${condition === 'new' ? 'Nuevo' : 'Usado'} - ${sold_quantity} vendidos`}</span>
        <span className='buy-box-title'>{title}</span>
        <span className='buy-box-price'>{`$ ${amount}`}</span>
        <a href='' className='buy-button'>Comprar</a>
      </div>
    </div>
  );
};
export default ItemDetailHeader;
