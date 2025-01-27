import React from "react";
import "./CartModal.css";

const CartModal = ({ cart, isOpen, onClose, onCheckout }) => {
  if (!isOpen) return null;

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal">
        <div className="cart-modal-header">
          <h2>Your Cart</h2>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="cart-modal-body">
          {cart.length === 0 ? (
            <p className="empty-cart-message">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p className="cart-item-total">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="cart-modal-footer">
          <div className="cart-total">
            <h3>Total:</h3>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button className="checkout-button" onClick={onCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;