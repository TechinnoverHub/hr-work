import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from 'Pages/Home';
import About from 'Pages/NewAbout/about';
import Career from 'Pages/Career/career';
import Contact from 'Pages/Contact.js/contact';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}>
          <Home />
        </Route>
        <Route path="/about" component={About}>
          <About />
        </Route>
        <Route path="/career" component={Career}>
          <Career />
        </Route>
        <Route path="/contact" component={Contact}>
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}
