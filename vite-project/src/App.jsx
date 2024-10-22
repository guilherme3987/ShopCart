import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import LoginPage from './pages/LoginPage';
import IniPage from './pages/IniPage';

//import {Link} from 'react-router-dom'

import ProductsPage from './pages/ProductsPage';

// import Navigate from './components/Navigate';

import ProductDetailsPage from './pages/ProductDetailsPage';
// import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <BrowserRouter>
      <div>
      <IniPage></IniPage>
        {/*
        <nav>
          <Link to="/products">Produtos</Link>
        </nav> */}
        
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/products" element={<ProductsPage />} /> 
          <Route path='/productsDetails' element={<ProductDetailsPage/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App


