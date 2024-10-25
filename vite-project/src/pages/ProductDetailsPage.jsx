import React, { useEffect, useState } from 'react';
import '../styles/ProductDetailsPage.css';
import {Link} from 'react-router-dom'
export default function ProductDetailsPage() {
    // pegar API com ids 
    // https://fakestoreapi.com/products/1
    // anexar id para API buscar o id
    const [product, setProduct] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');   

    
    const fetchProductsDetail = () =>{
        fetch('https://fakestoreapi.com/products/1')  
        .then(response => {
            return response.json();
        }).then(data => {
            setProduct(data);
            setLoading(false);
        }).catch(err => {
            setError(err.message);
            setLoading(false);
        });
    };

    useEffect(() => {
        fetchProductsDetail();
    }, []);

    if (loading) {
        <div className="loading">Carregando detalhes do produto...</div>;
      }
    
    if (error) {
        <div className="error">Erro: {error}</div>;
      }
    
    return (
            <>
                <h1>{product.title}</h1>
                <img src={product.image} alt={product.title} style={{ width: '300px' }} />
                <h5 className='description'>{product.description}</h5>
                <h3 className='price'>Preço: R$ {product.price}</h3>
                <Link to={"/checkout"}>
                        <button div="add-to-cart">Adicionar ao Carrinho</button>
                </Link>
            </>
      );
}