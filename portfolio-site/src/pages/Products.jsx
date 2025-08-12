import React, { useState } from 'react';
import productsData from '../data/products';
import ProductCard from '../components/ProductCard';
import './Products.css';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');

  const filteredProducts = productsData.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'All' || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="products-page">
      {/* Products Hero Section */}
      <div className="products-hero">
        <div className="products-hero-content">
          <h1>Our Farm Products</h1>
          <p>Discover fresh, organic produce and sustainable farming services from Kofi Green's Farm</p>
        </div>
      </div>

      <div className="products-container">
        <div className="products-header">
          <h2 className="products-title">Browse Our Collection</h2>
          <p className="products-subtitle">Fresh from our fields to your table</p>
        </div>

        <div className="products-filter">
          <div className="search-container">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search products by name..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filter-container">
            <span className="filter-icon">📂</span>
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="category-select"
            >
              <option value="All">All Categories</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Dairy">Dairy</option>
              <option value="Services">Services</option>
            </select>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="no-products">
            <div className="no-products-icon">🌱</div>
            <h3>No products found</h3>
            <p>Try adjusting your search or category filter</p>
          </div>
        ) : (
          <div className="product-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        <div className="products-footer">
          <p>Showing {filteredProducts.length} of {productsData.length} products</p>
        </div>
      </div>
    </div>
  );
};

export default Products;