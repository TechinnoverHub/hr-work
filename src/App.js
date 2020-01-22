import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from 'Pages/Home';
<<<<<<< HEAD
import About from 'Pages/NewAbout';
import Career from 'Pages/Career';
=======
import About from 'Pages/NewAbout/about';
import Contact from 'Pages/Contact/contact';
>>>>>>> contact-page

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
<<<<<<< HEAD
        <Route path="/career">
          <Career />
=======
        <Route path="/contact" component={Contact}>
          <Contact />
>>>>>>> contact-page
        </Route>
      </Switch>
    </Router>
  );
}
