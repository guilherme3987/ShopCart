import '../styles/ProductsPage.css';
import React, { useEffect, useState } from 'react';

export default function ProductsPage() {
    
    {/**Depois tem que implementar a lógica para tratar a API */}
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    //fetch async

    return(
        <>
           
            <h1>Página de Produtos</h1>

            <div id="box-products">
                <div class="product-item"></div>

                <div class="product-item"></div>

                <div class="product-item"></div>

                <div class="product-item"></div>

                <div class="product-item"></div>

                <div class="product-item"></div>
            </div>

        </>
    )
}