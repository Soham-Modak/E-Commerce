import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();
const WishlistContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const incrementQuantity = (productId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
  };

  const decrementQuantity = (productId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCartItems);
  };

  const handleAddToWishlist = (product) => {
    if (!wishlistItems.some((item) => item.id === product.id)) {
      setWishlistItems([...wishlistItems, product]);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cartItems, handleAddToCart, removeFromCart, incrementQuantity, decrementQuantity }}>
      <WishlistContext.Provider value={{ wishlistItems, handleAddToWishlist, removeFromWishlist }}>
        {children}
      </WishlistContext.Provider>
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a CartProvider');
  }
  return context;
};

export default CartProvider;