import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Packages from './components/Packages';
import Contact from './components/Contact';
import PaymentPage from './components/PaymentPage';
import './App.css';


const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      );
    } else {
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };
  

  return (
    <div className="App">
      <Router>
        <Navigation cart={cart} clearCart={clearCart} />
        <Routes>
          {/* الصفحة الرئيسية */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Products addToCart={addToCart} />
                <Packages />
                <Contact />
              </>
            }
          />

          {/* صفحة الدفع */}
          <Route path="/payment" element={<PaymentPage />} />

          
         
        </Routes>
      </Router>
    </div>
  );
};

export default App;