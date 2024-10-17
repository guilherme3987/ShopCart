import React from 'react';
import {Route, Routes} from 'react-router-dom'
import './App.css';
import LoginPage from './pages/LoginPage';
import IniPage from './pages/IniPage';
import {Link} from 'react-router-dom'
// import ProductsPage from './pages/ProductsPage';
// import ProductDetailsPage from './pages/ProductDetailsPage';
// import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <>
      <div>
        <IniPage></IniPage>
        <LoginPage></LoginPage>
      </div>
    </>
  );
}

export default App


