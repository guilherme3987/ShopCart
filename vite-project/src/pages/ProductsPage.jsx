import '../styles/ProductsPage.css';
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { useCart } from '../context/CartProducts';


export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { addToCart } = useCart();

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

    if (loading) {
        return <div>Carregando produtos...</div>;
    }

    if (error) {
        return <div>Erro: {error}</div>;
    }

    return (
        <>
        <div className='box'>
            <nav class="navbar">
                    <div class="navbar-brand">
                        <Link to={"/checkout"}>
                            <a href="">Carrinho de compras</a>
                        </Link>
                        
                    </div>
                </nav>
                
                <h1>Página de Produtos</h1>
                <div id="box-products">
                    {products.map(product => (
                        <div className="product-item">
                            
                            <h2>{product.title}</h2>
                            <div id='products-image'>
                                {/* Atualiza a rota para incluir o ID do produto */}
                                <Link to={`/products/${product.id}`}>
                                    <img src={product.image} alt={product.title} className="product-image" />
                                </Link>
                                
                            </div>
                            
                            {/*<div id='products-description'>
                                <h2>{product.title}</h2>
                                <p>{product.description}</p>
                                <p div="product-price">R$ {product.price}</p>
                            </div>*/} 
                            <Link to={"/checkout"}>
                                <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>

                            </Link>  
                        </div>
                    ))}
                </div>

        </div>
        
        </>
    );
}