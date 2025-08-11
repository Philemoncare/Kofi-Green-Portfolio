import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header style={{ padding: '1rem', backgroundColor: '#f4f4f4' }}>
    <nav style={{ display: 'flex', gap: '1rem' }}>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;