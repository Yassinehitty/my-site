import React, { useState } from "react";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import CartModal from "./CartModal";
import "./Navigation.css";

const Navbar = ({ cart, clearCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const handleCheckout = () => {
    alert("Payment successful! Thank you for your purchase.");
    clearCart();
    closeCart();
  };

  return (
    <nav>
      <div className="logo">Moga Fish</div>

      {/* قائمة التنقل */}
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <a href="#home" onClick={toggleMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={toggleMenu}>
            About Us
          </a>
        </li>
        <li>
          <a href="#products" onClick={toggleMenu}>
            Products
          </a>
        </li>
        <li>
          <a href="#packages" onClick={toggleMenu}>
            Packages
          </a>
        </li>
        <li>
          <a href="#contact" onClick={toggleMenu}>
            Contact Us
          </a>
        </li>
      </ul>

      {/* أيقونة السلة */}
      <div className="cart-icon" onClick={openCart}>
        <FaShoppingCart />
        {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
      </div>

      {/* أيقونة القائمة المتنقلة (للأجهزة الصغيرة) */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* نافذة السلة */}
      <CartModal
        cart={cart}
        isOpen={isCartOpen}
        onClose={closeCart}
        onCheckout={handleCheckout}
      />
    </nav>
  );
};

export default Navbar;