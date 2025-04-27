// src/components/Cart.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

export default function Cart({ cart, removeFromCart, updateQuantity }) {
  // Toplam fiyatı hesapla
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
         <img
          src="https://media.istockphoto.com/id/829878366/tr/vekt%C3%B6r/b%C3%BCy%C3%BCte%C3%A7i-d%C3%BCz-simgesi-vekt%C3%B6r-%C3%A7izim.jpg?s=612x612&w=0&k=20&c=n7uxBWiLqWUaXAc8o99Qp1tEZXv4nuUeVkYQbbsr2lw="
          alt="Empty cart icon"
          className="empty-icon"
        />
        <h2>Your cart is empty</h2>

        <Link to="/">Go back to products</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <ul className="cart-list">
        {cart.map(item => (
          <li key={item.id} className="cart-item">
            <img
              src={item.img}
              alt={item.name}
              className="cart-item-img"
            />
            <div className="cart-item-info">
              <p className="cart-item-name">{item.name}</p>
              <p className="cart-item-price">
                ${item.price.toFixed(2)}
              </p>

              {/* Adet seçimi */}
              <div className="quantity-controls">
                <button
                  onClick={() =>
                    updateQuantity(item.id, item.quantity - 1)
                  }
                >
                  –
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>

              {/* Ürünü listeden sil */}
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Sepet özeti */}
      <div className="cart-summary">
        <p>
          <strong>Total:</strong> ${total.toFixed(2)}
        </p>
        <Link to="/" className="continue-shopping">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
