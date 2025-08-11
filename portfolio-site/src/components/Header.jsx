import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header style={{ padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
    <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
      <h1>My Portfolio</h1>
      <div>
        <Link to="/" style={{ margin: '0 1rem', color: '#fff' }}>Home</Link>
        <Link to="/products" style={{ margin: '0 1rem', color: '#fff' }}>Products</Link>
        <Link to="/contact" style={{ margin: '0 1rem', color: '#fff' }}>Contact</Link>
      </div>
    </nav>
  </header>
);

export default Header;