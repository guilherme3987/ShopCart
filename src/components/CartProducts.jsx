import React, { createContext, useState } from 'react';

export const CartProducts = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const AddToCart = (product) => {
        setCartItems((items) => {
            const existingItem = items.find((item) => item.id === product.id);
            
            if (existingItem) {
                return items.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...items, { ...product, quantity: 1 }];
            }
        });
    };

    const updateQuantity = (productId, newQuantity) => {
        setCartItems((items) =>
            items.map((item) =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const removeFromCart = (productId) => {
        setCartItems((items) => items.filter((item) => item.id !== productId));
    };

    return (
        <CartProducts.Provider value={{ cartItems, AddToCart, updateQuantity, removeFromCart }}>
            {children}
        </CartProducts.Provider>
    );
}
