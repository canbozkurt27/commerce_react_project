// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header({ cartItemCount }) {
  return (
    <header className="site-header">
      <h1 className="logo">MyShop</h1>
      <nav>
        
        <ul className="nav-list">
          <li><Link to="/">Ana Sayfa</Link></li>
          <li><Link to="/cart">🛒 Sepet ({cartItemCount})</Link></li>
        </ul>
      </nav>
    </header>
  );
}
