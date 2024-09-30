
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };
  return (
    <CartContext.Provider value={{ cart, addToCart,setCart }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);

