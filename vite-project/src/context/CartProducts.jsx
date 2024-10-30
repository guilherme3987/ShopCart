import React, { createContext, useContext, useState } from 'react';

const CartProducts = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    return (
        <CartProducts.Provider value={{ cart, addToCart }}>
            {children}
        </CartProducts.Provider>
    );
};

export const useCart = () => useContext(CartProducts);
