import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/man.jpeg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundColor: "#2e7d32" // fallback color if image fails
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content fade-in">
          <h1>Welcome to Kofi Green's Farm</h1>
          <p>Organic farming from the heart of Ghana. Fresh, sustainable, and proudly local.</p>
          <Link to="/products" className="cta-button">Explore Our Products</Link>
        </div>
      </section>

      {/* Featured Products/Services */}
      <section className="featured">
        <div className="container">
          <h2>What We Offer</h2>
          <div className="featured-grid">
            <div className="feature-card">
              <img
                src={`${process.env.PUBLIC_URL}/images/cabbage.jpeg`}
                alt="Organic cabbage freshly harvested"
                loading="lazy"
              />
              <h3>Organic Cabbage</h3>
              <p>Freshly harvested, pesticide-free organic cabbage.</p>
            </div>
            <div className="feature-card">
              <img
                src={`${process.env.PUBLIC_URL}/images/ingredient.jpeg`}
                alt="Assorted fresh vegetables and herbs"
                loading="lazy"
              />
              <h3>Fresh Ingredients</h3>
              <p>Assorted fresh vegetables and herbs from our garden.</p>
            </div>
            <div className="feature-card">
              <img
                src={`${process.env.PUBLIC_URL}/images/logo.jpeg`}
                alt="Bottle of goat milk from the farm"
                loading="lazy"
              />
              <h3>Goat Milk</h3>
              <p>Pure, nutritious goat milk from our farm.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Kofi Green</h2>
              <p>With over 20 years of farming experience, Kofi Green has been at the forefront of sustainable agriculture in Ghana. Our farm combines traditional farming methods with modern organic practices to deliver the highest quality produce.</p>
              <p>We believe in farming that respects the earth, supports our community, and provides nutritious food for families across the region.</p>
            </div>
            <div className="about-image">
              <img
                src={`${process.env.PUBLIC_URL}/images/man.jpeg`}
                alt="Kofi Green standing proudly on his farm"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;