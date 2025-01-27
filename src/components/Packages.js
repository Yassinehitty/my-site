import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // استيراد أيقونة السلة
import './Packages.css';

const Packages = () => {
  const packages = [
    {
      id: 1,
      name: 'Family Pack',
      image: './images/pach.jpg',
      items: ['2kg Sardines', '2kg Tilapia', '1kg Shrimp'],
      price: '$89.99',
    },
    {
      id: 2,
      name: 'Grill Master Pack',
      image: './images/istockphoto-1644727881-1024x1024.jpg',
      items: ['2kg Tuna Steaks', '2kg Salmon', '1kg Mussels', '1kg Lobster', '1kg Oysters'],
      price: '$129.99',
    },
    {
      id: 3,
      name: 'Seafood Feast',
      image: './images/ppll.jpg',
      items: ['1kg Lobster', '2kg Mussels', '1.5kg Shrimp'],
      price: '$99.99',
    },
  ];

  return (
    <section id="packages" className="packages">
      <div className="container">
        <h2 className="section-title">Our Packages</h2>
        <div className="packages-grid">
          {packages.map((pkg) => (
            <div key={pkg.id} className="package-card">
              <div className="package-image">
                <img src={pkg.image} alt={pkg.name} />
              </div>
              <div className="package-content">
                <h3 className="package-name">{pkg.name}</h3>
                <ul className="package-items">
                  {pkg.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="package-price">{pkg.price}</div>
                <Link to="/payment" state={{ package: pkg }} className="package-button">
                  <FaShoppingCart className="cart-icon" /> Order Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;