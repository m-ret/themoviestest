import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Routes
import Home from './pages/home';
import Detail from './pages/detail';

// Styles
import './App.scss';

function App() {
  return (
    <div className="App container">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:id">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
