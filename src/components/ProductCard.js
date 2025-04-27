// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      {/* Detay sayfasına yönlendiren link */}
      <Link to={`/product/${product.id}`}>
        <img src={product.img} alt={product.name} className="card-img" />
        <h2 className="card-title">{product.name}</h2>
      </Link>
      <p className="card-price">${product.price.toFixed(2)}</p>
      <button
        className="card-btn"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}
