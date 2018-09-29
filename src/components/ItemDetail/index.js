import React, { Component } from 'react';
import axios from 'axios';
import CategoriesBreadcrumb from '../CategoriesBreadcrumb';
import ItemDetailHeader from '../ItemDetailHeader';
import ItemDetailDescription from '../ItemDetailDescription';

class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    } 
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`http://localhost:3000/api/items/${id}`)
    .then(response => {
      const { data } = response;
      this.setState(data);
    });
  }

  render() {
    const { categories, description } = this.state;
    return (
      <div className='item-detail-container'>
        <div>
          <CategoriesBreadcrumb categories={categories} />
          <div className='item-detail'>
            <ItemDetailHeader {...this.state} />
            <ItemDetailDescription description={description} />
          </div>
        </div>
      </div>
    );
  }
};

export default ItemDetail;
