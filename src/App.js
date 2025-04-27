// src/App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './App.css';

function App() {
  // cart: [{ id, name, price, img, quantity }, ...]
  const [cart, setCart] = useState([]);
  // Ürünü sepete ekle veya sayısını 1 artır
  const addToCart = product => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // Belirli ürünü sepetten tamamen kaldır
  const removeFromCart = id => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // Belirli ürünü sepetteki quantity’sini güncelle (0 olursa çıkar)
  const updateQuantity = (id, newQty) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, quantity: newQty } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  // Header’daki sepet sayısı
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="App">
      <Header cartItemCount={totalItems} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} />} />
          <Route
            path="/product/:id"
            element={<ProductDetail addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
