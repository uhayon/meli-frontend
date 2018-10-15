import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import ItemDetail from './components/ItemDetail';

const App = () => {
  //Cambio para commitear con ssh
  return (
    <BrowserRouter>
      <div>
        <Route path='/'
          component={SearchBar} />
        <Switch>
          <Route exact path='/items'
            render={props =>
              <SearchResults
                {...props} />
            } />
          <Route exact path='/items/:id'
            component={ItemDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;
