import React, { useState } from "react";
import Product from "./Product";
import { useCart } from './CartProvider';
import { useWishlist } from './CartProvider';


const CakesB = () => {
  const { handleAddToCart } = useCart();

  const [searchQuery, setSearchQuery] = useState("");
  const filteredProduct = Product.filter(
    (course) =>
      course.id >= 16 &&
      course.id <= 30 &&
      (course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const increaseQuantity = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: Math.max(item.quantity - 1, 0)
            }
          : item
      ).filter((item) => item.quantity > 0)
    );
  };


  const calculateTotalAmount = () => {
    const totalAmount = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return totalAmount.toFixed(2);
  };

  return (
    <div className="cakes">
      <div><input id="search2" type="text" placeholder="Search..." value={searchQuery} onChange={handleSearch} /></div>
      <img src="/image/birthday-background.png" id="banner-c" />

      <input id="search2" type="text" placeholder="Search..." value={searchQuery} onChange={handleSearch} />

      <div className="Products">
        {filteredProduct.length > 0 ? (
          filteredProduct.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.img} className="card-img-top" alt={product.title} onClick={() => handleProductClick(product)} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <h5>
                  <p className="card-text">{product.price}</p>
                </h5>
                <button onClick={() => handleAddToCart(product)} id='modal-b1'>Add to Cart</button>
              </div>
            </div>
          ))
        ) : (
          <div className="card">
            <h3>No search results found.</h3>
          </div>
        )}
      </div>

      )
    </div>
  );
};

export default CakesB;
