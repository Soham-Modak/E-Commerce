import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartProvider';
import {BsFillTrashFill} from "react-icons/bs";

const Cart = () => {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useCart();

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleIncrement = (productId) => {
    incrementQuantity(productId);
    const updatedItem = cartItems.find((item) => item.id === productId);
    if (updatedItem && updatedItem.quantity === 0) {
      removeFromCart(productId);
    }
  };

  const handleDecrement = (productId) => {
    decrementQuantity(productId);
    const updatedItem = cartItems.find((item) => item.id === productId);
    if (updatedItem && updatedItem.quantity === 1) {
      removeFromCart(productId);
    }
  };

  const getUniqueItems = () => {
    const uniqueItems = cartItems.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        acc.push({ ...item });
      }
      return acc;
    }, []);
    return uniqueItems;
  };

  const getTotalPrice = () => {
    return cartItems.map((item) => item.price * item.quantity).reduce((total, item) => total + item, 0);
  };

  return (
    <div>
      <img src="/image/Cart-c.png" style={{ marginLeft: "0rem", width: "94.9rem", height: "23rem" }} />
      <div style={{backgroundColor:"#f7b7b3", marginTop:"0rem"}}>
        <h1 style={{ color: "white", marginLeft: "44.5rem" }}> Cart </h1>
      </div>
      <div>
      {getUniqueItems().map((item) => (
        <div key={item.id} className='atc'>
          <div className='row g-0'>
            <img src={item.img} alt='Product' style={{marginLeft:"32rem", height:"19rem", width:"29rem",marginTop:"5rem"}} />
          </div>
          <div className='det' style={{marginLeft:"41rem"}}>
            <h2> <p>{item.title}</p> </h2>
            <h2> <p>{item.description}</p> </h2>
            <h2> <p>Price: {item.price}</p></h2>
          </div>
          <div className='inde'style={{marginLeft:"41rem"}}>
            <button onClick={() => handleDecrement(item.id)} id='inde'>-</button>&nbsp;
            {item.quantity}
            <button onClick={() => handleIncrement(item.id)} id='inde'>+</button>
          </div>
          <div className='rem'style={{marginLeft:"59rem"}}>
            <button onClick={() => handleRemoveFromCart(item.id)} id='rem'><BsFillTrashFill/></button>
          </div>
        </div>
      ))}
    </div>
      <p style={{marginLeft:"59rem"}}>Total Price: ₹{getTotalPrice()}</p>
    </div>
  );
};

export default Cart;