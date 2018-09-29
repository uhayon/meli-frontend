import React, { Component } from 'react';
import queryString from 'query-string';
import Logo from './Logo_ML.png';
import SearchIcon from './ic_Search.png';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    }
  }

  onSearchTextChange = (event) => {
    this.setState({
      searchText: event.target.value
    })
  }

  onSearchConfirm = () => {
    const { history } = this.props;
    const { searchText } = this.state;

    history.push(`/items?search=${searchText}`);
  }

  componentDidMount() {
    this.setQueryStringSearch();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.setQueryStringSearch()
    }
  }

  setQueryStringSearch = () => {
    const { search } = queryString.parse(this.props.location.search);
    const validSearch = search && search.trim();
    const searchText = validSearch ? search : '';

    this.setState({searchText});
  }

  onInputKeyPress = (event) => {
    const { charCode } = event;
    if (charCode === 13)
      this.onSearchConfirm();
  }

  render() {
    const { state: {searchText}, onSearchTextChange, onSearchConfirm, onInputKeyPress } = this;
    const { history } = this.props;

    return (
      <div className='search-bar'>
        <div>
          <img
            src={Logo}
            alt='Logo'
            onClick={() => history.push('/') }
            className='meliLogo'/>
          <div className='searchInput'>
            <input
              type='text'
              placeholder='Nunca dejes de buscar'
              value={searchText}
              onChange={onSearchTextChange}
              onKeyPress={onInputKeyPress} />
            <div
              className='searchIconContainer'
              onClick={onSearchConfirm} >
              <img src={SearchIcon} alt='Search'/>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SearchBar;

// import React from 'react';
// import Logo from './Logo_ML.png';
// import SearchIcon from './ic_Search.png';
//
// const SearchBar = (props) => {
//   const { value, onSearchTextChange } = props;
//   return (
//     <div className='search-bar'>
//       <img src={Logo} alt='Logo'/>
//       <div className='searchInput'>
//         <input type='text' placeholder='Nunca dejes de buscar' value={value} onChange={onSearchTextChange}/>
//         <div className='searchIconContainer'>
//           <img src={SearchIcon} alt='Search'/>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default SearchBar;
