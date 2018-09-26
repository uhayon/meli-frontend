import React, { Component } from 'react';
import queryString from 'query-string';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      invalidSearch: false
    }
  }

  componentDidMount() {
    const { search } = queryString.parse(this.props.location.search);
    const validSearch = search && search.trim();

    if (validSearch) {
      this.getItems(search);
    }

    this.setState({
      invalidSearch: !validSearch
    });
  }

  getItems = (search) => {

  }

  render() {
    const { items, invalidSearch } = this.state;
    return (
      <div>
        {
          invalidSearch
          ? <h1>Criterio de búsqueda inválido</h1>
          : (
            items.length > 0
            ? <h1>Acá van los items papá</h1>
            : <h1>No se encontraron productos con tu criterio de búsqueda</h1>
          )
        }
      </div>
    );
  }
};

export default SearchResults;
