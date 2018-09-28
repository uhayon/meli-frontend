import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import SearchResultsList from '../SearchResultsList';
import CategoriesBreadcrumb from '../CategoriesBreadcrumb';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      categories: [],
      validSearch: true,
      searchFinished: false
    }
  }

  componentDidMount() {
    const validSearch = this.searchIsValid();
    this.setSearchState(validSearch);
    this.searchItems(validSearch);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      const validSearch = this.searchIsValid();
      this.setSearchState(validSearch);
      this.searchItems(validSearch);
    }
  }

  searchItems = (searchValid) => {
    if (searchValid) {
      const { search } = queryString.parse(this.props.location.search);
      axios.get(`http://localhost:3000/api/items?q=${search}`)
      .then(response => {
        const { data } = response;
        this.setState({
          ...data,
          searchFinished: true
        })
      })
      .catch(err => {
        console.log(err.data);
        this.setState({
          categories: [],
          items: [],
          searchFinished: true
        })
      });
    }
  }

  setSearchState = (validSearch) => {
    this.setState({validSearch});
  }

  searchIsValid = () => {
    const { search } = queryString.parse(this.props.location.search);
    return typeof search !== 'undefined' && search.trim() !== '';
  }

  render() {
    const { items, validSearch, searchFinished, categories } = this.state;
    return (
      <div className='search-result-container'>
        {
          !validSearch
          ? <h1>Criterio de búsqueda inválido</h1>
          : (
            items.length > 0
            ? <div>
                <CategoriesBreadcrumb categories={categories} />
                <SearchResultsList items={items} />
              </div>
            : (
              searchFinished
              ? <h1>No se encontraron productos con tu criterio de búsqueda</h1>
              : null
            )
          )
        }
      </div>
    );
  }
};

export default SearchResults;
