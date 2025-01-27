import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PAY.css';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { package: pkg } = location.state || {};

  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);

  // تحقق من صحة البيانات
  const validateForm = () => {
    const newErrors = {};

    if (!cardNumber.match(/^\d{16}$/)) {
      newErrors.cardNumber = 'Card number must be 16 digits.';
    }

    if (!expiryMonth.match(/^(0[1-9]|1[0-2])$/)) {
      newErrors.expiryMonth = 'Invalid month.';
    }

    if (!expiryYear.match(/^\d{2}$/)) {
      newErrors.expiryYear = 'Invalid year.';
    }

    if (!cvv.match(/^\d{3}$/)) {
      newErrors.cvv = 'CVV must be 3 digits.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setShowConfirmation(true);
    }
  };

  const confirmPayment = () => {
    alert('Payment Successful!');
    navigate('/');
  };

  return (
    <div className="payment-page">
      <h1>Payment Page</h1>
      {pkg && (
        <div className="package-details">
          <h2>{pkg.name}</h2>
          <p>Price: {pkg.price}</p>
        </div>
      )}

      {!showConfirmation ? (
        <form onSubmit={handlePayment}>
          <label>
            Card Number:
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234 5678 9012 3456"
              required
            />
            {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
          </label>

          <div className="expiry-date">
            <label>
              Expiry Date:
              <div className="expiry-inputs">
                <input
                  type="text"
                  value={expiryMonth}
                  onChange={(e) => setExpiryMonth(e.target.value)}
                  placeholder="MM"
                  maxLength="2"
                  required
                />
                <span>/</span>
                <input
                  type="text"
                  value={expiryYear}
                  onChange={(e) => setExpiryYear(e.target.value)}
                  placeholder="YY"
                  maxLength="2"
                  required
                />
              </div>
              {(errors.expiryMonth || errors.expiryYear) && (
                <span className="error">{errors.expiryMonth || errors.expiryYear}</span>
              )}
            </label>
          </div>

          <label>
            CVV:
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="123"
              required
            />
            {errors.cvv && <span className="error">{errors.cvv}</span>}
          </label>

          <button type="submit">Pay Now</button>
        </form>
      ) : (
        <div className="confirmation">
          <h2>Confirm Your Payment</h2>
          <p>Package: {pkg.name}</p>
          <p>Price: {pkg.price}</p>
          <p>Card Number: **** **** **** {cardNumber.slice(-4)}</p>
          <p>Expiry Date: {expiryMonth}/{expiryYear}</p>
          <p>CVV: ***</p>
          <button onClick={confirmPayment}>Confirm Payment</button>
          <button onClick={() => setShowConfirmation(false)}>Edit Details</button>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;