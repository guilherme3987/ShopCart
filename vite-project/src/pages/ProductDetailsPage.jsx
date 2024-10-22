import React, { useEffect, useState } from 'react';
import '../styles/ProductDetailsPage.css';

export default function ProductDetailsPage() {
    // pegar API com ids 
    // https://fakestoreapi.com/products/1
    // anexar id para API buscar o id
    const [product, setProduct] = useState('')
    const [loading, setLoading] = useState('')
    const [error, setError] = useState('')
    
    const fetchProductsDetail = () =>{
        fetch('https://fakestoreapi.com/products/1')
        .then(response =>{
            if(!response.ok){
                console.log(response);
            }
            return response.json()
        }).then(data =>{
            setProduct(data)
            setLoading(false)
        }).catch(error => {
            setError(error.message)
            setLoading(false)
        });
    };

    useEffect(() => {
        fetchProductsDetail();
    });

    return (
        <div>
          {product && (
            <>
              <h1>{product.title}</h1>
              <img src={product.image} alt={product.title} style={{ width: '300px' }} />
              <h4 className='description'>{product.description}</h4>
              <h3 className='price'>Preço: R$ {product.price}</h3>
              <button>Adicionar ao Carrinho</button>
            </>
          )}
        </div>
      );
}