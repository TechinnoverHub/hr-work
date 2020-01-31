import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from 'Pages/Home';
import About from 'Pages/NewAbout';
import Career from 'Pages/Career';
import Contact from 'Pages/Contact';
import Blog from 'Pages/Blog';
import Packages from 'Pages/Packages';
import ScrollToTop from 'Components/ScrollToTop';
<<<<<<< HEAD
import SinglePackage from 'Pages/SinglePackage';
import Login from 'Pages/Login';
import CreateAccount from 'Pages/CreateAccount';
=======
import MyAccount from 'Pages/MyAccount';
>>>>>>> myaccount-page done

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
        <Route path="/careers">
          <Career />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path={['/packages/:id', '/packages']}>
          <Packages />
        </Route>
        <Route path="/package/:slug">
          <SinglePackage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/create-account">
          <CreateAccount />
        </Route>
        <Route path="/myaccount">
          <MyAccount />
        </Route>
      </Switch>
      <ScrollToTop />
    </Router>
  );
}
