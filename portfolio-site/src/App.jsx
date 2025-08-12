import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Router>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <button className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </Router>
    </div>
  );
}

export default App;