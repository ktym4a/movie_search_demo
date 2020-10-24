import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'styles/tailwind.output.css';

import Top from 'pages/Top';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Top}></Route>
      </Switch>
    </Router>
  );
}

export default App;
