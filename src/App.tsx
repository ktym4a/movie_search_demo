import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'styles/tailwind.output.css';

import Top from 'pages/Top';
import Search from 'pages/Search';
import Background from 'components/Background';

function App() {
  return (
    <Background>
      <Router>
        <Switch>
          <Route exact path='/' component={Top}></Route>
          <Route exact path='/search' component={Search}></Route>
        </Switch>
      </Router>
    </Background>
  );
}

export default App;
