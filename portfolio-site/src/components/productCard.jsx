import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { image, name, price, category, description } = product;

  return (
    <div className="product-card">
      <img 
        src={image} 
        alt={name} 
        className="product-image" 
        loading="lazy"
      />
      <div className="product-info">
        <h3 className="product-title">{name}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">GHS {price.toFixed(2)}</p>
        <p className="product-category">{category}</p>
        <button className="product-button">View Details</button>
      </div>
    </div>
  );
};

export default ProductCard;