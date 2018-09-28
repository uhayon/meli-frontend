import React from 'react';

const CategoriesBreadcrumb = ({ categories }) => {
  const lastCategory = categories.pop();
  return (
    <div className='breadcrumbContainer'>
      <span>{categories.join(' > ')} >  </span>
      <span className='currentCategory'>{lastCategory}</span>
    </div>
  );
};
export default CategoriesBreadcrumb;
