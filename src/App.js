import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from 'Pages/Home';
import About from 'Pages/NewAbout';
import Career from 'Pages/Career/career';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/career" component={Career}>
          <Career />
        </Route>
      </Switch>
    </Router>
  );
}
