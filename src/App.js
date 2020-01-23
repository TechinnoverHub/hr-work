import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from 'Pages/Home';
import About from 'Pages/NewAbout';
<<<<<<< HEAD
import Career from 'Pages/Career';
import Contact from 'Pages/Contact';
=======
import Blog from 'Pages/Blog/blog';
>>>>>>> blog-page

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
        <Route path="/careers">
          <Career />
        </Route>
        <Route path="/contact">
          <Contact />
=======
        <Route path="/blog">
          <Blog />
>>>>>>> blog-page
        </Route>
      </Switch>
    </Router>
  );
}
