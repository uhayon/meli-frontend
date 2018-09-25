import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import SearchBar from './Components/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      items: []
    }
  }

  onSearchTextChange = (event) => {
    this.setState({searchText: event.target.value});
  }

  render() {
    return (
      <div>
        <SearchBar />
        <BrowserRouter>

        </BrowserRouter>
      </div>
    );
  }
};

export default App;
