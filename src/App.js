import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from 'Pages/Home';
import About from 'Pages/NewAbout';
import Career from 'Pages/Career';
import Contact from 'Pages/Contact';
import Blog from 'Pages/Blog';
import Packages from 'Pages/Packages';
import ScrollToTop from 'Components/ScrollToTop';
import SinglePackage from 'Pages/SinglePackage';
import Login from 'Pages/Login';
import CreateAccount from 'Pages/CreateAccount';
import MyAccount from 'Pages/MyAccount';
import ShoppingCart from 'Pages/ShoppingCart';
import Checkout from 'Pages/Checkout';
import ExpressCheckout from 'Pages/ExpressCheckout';
import { CartProvider } from 'Context/cart.context';
import PrivateRoute from 'Components/PrivateRoute';
import { UserProvider } from 'Context/user.context';
import PaymentSuccess from 'Pages/PaymentSuccess';
import SingleBlog from 'Pages/SingleBlogPost';
import ResetEmail from 'Pages/ResetPassword/ResetEmail';
import UpdatePassword from 'Pages/ResetPassword/UpdatePassword';

export default function App() {
  return (
    <UserProvider>
      <CartProvider>
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

            <PrivateRoute path="/account">
              <MyAccount />
            </PrivateRoute>
            <Route path="/articles/:id">
              <SingleBlog />
            </Route>

            <Route path="/cart">
              <ShoppingCart />
            </Route>

            <PrivateRoute path="/checkout/regular">
              <Checkout />
            </PrivateRoute>
            <PrivateRoute path="/checkout/express">
              <ExpressCheckout />
            </PrivateRoute>

            <Route path="/payment-success">
              <PaymentSuccess />
            </Route>

            <Route path="/reset-password/update">
              <UpdatePassword />
            </Route>

            <Route path="/reset-password" exact>
              <ResetEmail />
            </Route>
          </Switch>
          <ScrollToTop />
        </Router>
      </CartProvider>
    </UserProvider>
  );
}
