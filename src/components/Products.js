import React, { useState } from 'react';
import './Products.css';


const Products = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Fresh Salmon', price: 24.99, image: '/images/salmon-1881522_640.jpg' },
    { id: 2, name: 'Yellowfin Tuna', price: 29.99, image: '/images/tuna-fish-954073_640.jpg' },
    { id: 3, name: 'Tilapia', price: 32.99, image: '/images/seafood-6864248_1280.jpg' },
    { id: 4, name: 'Fresh Sardines', price: 19.99, image: '/images/morocco-3429264_640.jpg' },
    { id: 5, name: 'Oysters', price: 27.99, image: '/images/oyster-1522835_640.jpg' },
    { id: 6, name: 'Jumbo Shrimp', price: 21.99, image: '/images/shrimp-2833264_640.jpg' },
    { id: 7, name: 'Live Lobster', price: 34.99, image: '/images/lobster-1527602_640.jpg' },
    { id: 8, name: 'Fresh Mussels', price: 20.99, image: '/images/mussel-3734219_640.jpg' },
    { id: 9, name: 'Trout', price: 39.99, image: './images/fish-220010_640.jpg' },
    { id: 10, name: 'Squid', price: 22.99, image: '/images/squid-1522985_640.jpg' },
    { id: 11, name: 'Crab', price: 28.99, image: '/images/crab-4416155_640.jpg' },
    { id: 12, name: 'Clams', price: 18.99, image: '/images/noodles-3029166_640.jpg' },
    { id: 13, name: 'Barramundi', price: 26.99, image: './images/barramundi-6928456_640.jpg' },
    { id: 14, name: ' Anchovies', price: 23.99, image: './images/anchovy-5549405_640.jpg' },
    { id: 15, name: 'Snapper', price: 49.99, image: './images/cooler-742667_640.jpg' },
    { id: 16, name: 'Scallops', price: 31.99, image: './images/scallop-platter-2495968_640.jpg' },
  ];

  const [quantities, setQuantities] = useState({});
  const [visibleProducts, setVisibleProducts] = useState(8); // عرض 8 منتجات في البداية

  const handleQuantityChange = (productId, quantity) => {
    if (quantity < 1) quantity = 1; // التأكد من أن الكمية لا تقل عن 1
    setQuantities({
      ...quantities,
      [productId]: quantity,
    });
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1; // إذا لم يتم تحديد الكمية، نستخدم 1 كقيمة افتراضية
    addToCart({ ...product, quantity });
  };

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 8); // زيادة عدد المنتجات المعروضة بمقدار 8
  };

  return (
    <section id="products" className="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.slice(0, visibleProducts).map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img alt={product.name} src={product.image} />
              <div className="image-overlay"></div>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <span className="price">${product.price}/kg</span>
              <div className="quantity-input">
                <label htmlFor={`quantity-${product.id}`}>Quantity (kg):</label>
                <div className="input-container">
                  <button onClick={() => handleQuantityChange(product.id, (quantities[product.id] || 1) - 1)}>
                    -
                  </button>
                  <input
                    type="number"
                    id={`quantity-${product.id}`}
                    min="1"
                    value={quantities[product.id] || 1}
                    onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                  />
                  <button onClick={() => handleQuantityChange(product.id, (quantities[product.id] || 1) + 1)}>
                    +
                  </button>
                </div>
              </div>
              <button className="product-button" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {visibleProducts < products.length && (
        <div className="voir-plus-container">
          <button className="voir-plus-button" onClick={loadMoreProducts}>
            Voir Plus
          </button>
        </div>
      )}
    </section>
  );
};

export default Products;