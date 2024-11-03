import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import LoginPage from './pages/LoginPage';
import IniPage from './pages/IniPage';

//import {Link} from 'react-router-dom'

import ProductsPage from './pages/ProductsPage';

// import Navigate from './components/Navigate';

import ProductDetailsPage from './pages/ProductDetailsPage';
import CheckoutPage from './pages/CheckoutPage';

import {CartProvider} from './components/CartProducts'

function App() {
  return (
    <BrowserRouter>
      <CartProvider> 
        <div>
          <IniPage />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;


