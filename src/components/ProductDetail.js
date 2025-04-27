// src/components/ProductDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products';  // ← aynı dosyayı burada da kullan
import './ProductDetail.css';

export default function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id, 10));

  if (!product) {
    return (
      <div className="product-detail">
        <h2>Ürün bulunamadı.</h2>
        <Link to="/">Ana sayfaya dön</Link>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div className="detail-image-container">
        <img src={product.img} alt={product.name} className="detail-img" />
      </div>
      <div className="detail-info">
        <h2>{product.name}</h2>
        <p className="detail-price">${product.price.toFixed(2)}</p>
        <p className="detail-desc">{product.desc}</p>
        <p className="detail-stock">
          {product.stock > 0 ? `Stok: ${product.stock}` : 'Stokta yok'}
        </p>
        <button
          className="detail-btn"
          onClick={() => addToCart(product)}
          disabled={product.stock === 0}
        >
          Sepete Ekle
        </button>
        <Link to="/cart" className="go-cart">Sepete Git</Link>
      </div>
    </div>
  );
}
