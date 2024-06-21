import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/bookings">Bookings</Link></li>
        <li><Link to="/membership">Membership</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
