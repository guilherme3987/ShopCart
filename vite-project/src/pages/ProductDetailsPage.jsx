import React, { useEffect, useState } from 'react';
import '../styles/ProductDetailsPage.css';
import {Link, useNavigate, useParams} from 'react-router-dom'
export default function ProductDetailsPage() {
    // pegar API com ids 
    // https://fakestoreapi.com/products/1
    // anexar id para API buscar o produto clicado 
    const [product, setProduct] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const {id} = useParams();   

    const navigate = useNavigate();
    
    const fetchProductsDetail = () =>{
        fetch(`https://fakestoreapi.com/products/${id}`)  
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
    }, [id]);

    if (loading) {
        <div className="loading">Carregando detalhes do produto...</div>;
      }
    
    if (error) {
        <div className="error">Erro: {error}</div>;
      }
    
    const handleAddToCart = () => {
        alert('Produto adicionado ao carrinho')
        const goToCheckout = window.confirm("Continuar comprando ? ")
        //alert(goToCheckout)
        if (goToCheckout === false) {
            navigate("/checkout", { state: { product } });
        }
        if (goToCheckout === true){
            navigate("/products")
        }
    };//handleAddToCart para manipular  estado local 

    return (
            <>
                <h1>{product.title}</h1>
                <img src={product.image} alt={product.title} className="product-image"  />
                <h5 className='description'>{product.description}</h5>
                <h3 className='price'>Preço: R$ {product.price}</h3>
                
                <button onClick={handleAddToCart} className="add-to-cart">Adicionar ao Carrinho</button>

                {/*<Link to={"/checkout"}>
                        <button  onClick={handleAddToCart} div="add-to-cart">Adicionar ao Carrinho</button>
                </Link>*/}
            </>
      );
}