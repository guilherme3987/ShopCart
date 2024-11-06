import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartProducts } from '../components/CartProducts';
import '../styles/ProductDetailsPage.css';

export default function ProductDetailsPage() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { AddToCart } = useContext(CartProducts);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    const handleAddToCart = () => {
        AddToCart(product);
        alert('Produto adicionado ao carrinho');
        const goToCheckout = window.confirm("Continuar comprando?");
        if (!goToCheckout) {
            navigate("/checkout");
        }else{navigate("/products")}
    };

    if (loading) return <div>Carregando detalhes do produto...</div>;
    if (error) return <div>Erro: {error}</div>;

    return (
        <>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} className="product-image" />
            <h5 className='description'>{product.description}</h5>
            <h5>Estoque: {product.rating.count}</h5>
            <h5 className='rating-product'>Avaliação: {product.rating.rate}</h5>
            <h3 className='price'>Preço: R$ {product.price}</h3>
            <button onClick={handleAddToCart} className="add-to-cart">Adicionar ao Carrinho</button>
        </>
    );
}
