// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';
import products from '../data/products'; 
import './ProductList.css';

export default function ProductList({ addToCart }) {
  return (
    <div className="product-list">
      {products.map(p => (
        <ProductCard key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
}
