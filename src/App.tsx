import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'styles/tailwind.output.css';

import { Provider } from 'store';

import Top from 'pages/Top';
import Search from 'pages/Search';
import SearchDetail from 'pages/SearchDetail';

import Background from 'components/Background';

function App() {
  return (
    <Provider>
      <Background>
        <Router>
          <Switch>
            <Route exact path='/' component={Top}></Route>
            <Route exact path='/search' component={Search}></Route>　
            <Route path='/search/:imdbID' component={SearchDetail}></Route>
          </Switch>
        </Router>
      </Background>
    </Provider>
  );
}

export default App;
