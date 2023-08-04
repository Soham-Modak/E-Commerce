import React, { useState } from "react";
import Product from "./Product";
import Modal from "./Modal";

const Ccakes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredProduct = Product.filter(
    (course) =>
      course.id >= 21 &&
      course.id <= 25 &&
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

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...product, quantity: 1 }
      ]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    );
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

  const clearCart = () => {
    setCartItems([]);
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
      <img src="/image/birthday-background.png" id="banner-c" />

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
                <button onClick={() => addToCart(product)} id='modal-b1'>Add to Cart</button>
              </div>
            </div>
          ))
        ) : (
          <div className="card">
            <h3>No search results found.</h3>
          </div>
        )}
      </div>

      {selectedProduct && (
        <Modal isOpen={true} onRequestClose={handleCloseModal}>
          <h2>{selectedProduct.title}</h2>
          <p>{selectedProduct.description}</p>
          <button onClick={() => addToCart(selectedProduct)}>Add to Cart</button>
          <button onClick={handleCloseModal}>Close</button>
        </Modal>
      )}

      {cartItems.length > 0 && (
        <div className="cart">
          <h2>Cart</h2>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
              <button onClick={() => increaseQuantity(item.id)}>
                +
              </button>
              <button onClick={() => decreaseQuantity(item.id)}>
                -
              </button>
            </div>
          ))}
          <h3>Total: {calculateTotalAmount()}</h3>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Ccakes;
