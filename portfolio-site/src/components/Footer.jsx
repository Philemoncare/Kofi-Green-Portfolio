import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h3>Kofi Green's Farm</h3>
        <p>Organic farming from the heart of Ghana. Fresh, sustainable, and proudly local.</p>
      </div>
      
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      
      <div className="footer-section">
        <h4>Contact Info</h4>
        <p>📍 Accra, Ghana</p>
        <p>📞 +233 XX XXX XXXX</p>
        <p>✉️ info@kofigreenfarm.com</p>
      </div>
      
      <div className="footer-section">
        <h4>Follow Us</h4>
        <div className="social-links">
          <a href="#" className="social-link">📘 Facebook</a>
          <a href="#" className="social-link">📷 Instagram</a>
          <a href="#" className="social-link">💬 WhatsApp</a>
        </div>
      </div>
    </div>
    
    <div className="footer-bottom">
      <p>&copy; 2025 Kofi Green's Farm. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;