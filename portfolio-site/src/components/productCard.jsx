import React from 'react';

const ProductCard = ({ product }) => (
  <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
    <img src={`/images/${product.image}`} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
    <h3>{product.name}</h3>
    <p>${product.price.toFixed(2)}</p>
    <p style={{ fontStyle: 'italic' }}>{product.category}</p>
  </div>
);

export default ProductCard;