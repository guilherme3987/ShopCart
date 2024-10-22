import '../styles/ProductsPage.css';
import React, { useEffect, useState } from 'react';

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    },[]);

    //aplicar ternário
    if (loading) {
        return <div>Carregando produtos...</div>;
    }

    if (error) {
        return <div>Erro: {error}</div>;
    }

    return (
        <>
            <nav class="navbar">
                <div class="navbar-brand">
                    <a href="">Carrinho de compras</a>
                </div>
                <div class="navbar-brand">
                    <a href="">Categoria de produtos</a>
                </div>
            </nav>
            
            <h1>Página de Produtos</h1>
            <div id="box-products">
                {products.map(product => (
                    <div className="product-item">
                        
                        <div id='products-image'>
                            <img src={product.image} alt={product.title} className="product-image" />
                        </div>
                        
                        {/*<div id='products-description'>
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <p div="product-price">R$ {product.price}</p>
                        </div>*/}   
                        <button div="add-to-cart">Adicionar ao Carrinho</button>
                    </div>
                ))}
            </div>
        </>
    );
}