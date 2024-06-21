import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import BookingsPage from './pages/BookingsPage';
import MembershipPage from './pages/MembershipPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/bookings" component={BookingsPage} />
        <Route path="/membership" component={MembershipPage} />
      </Switch>
    </Router>
  );
}

export default App;
