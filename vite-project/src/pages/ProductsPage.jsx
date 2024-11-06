import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartProducts } from '../components/CartProducts';
import '../styles/ProductsPage.css';

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { AddToCart } = useContext(CartProducts);  // Importando o AddToCart

    const navigate = useNavigate();

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
    }, []);

    const handleAddToCart = (product) => {
        AddToCart(product);  // Chamada correta para adicionar ao carrinho
        alert('Produto adicionado ao carrinho');
        const goToCheckout = window.confirm("Continuar comprando?");
        if (!goToCheckout) {
            navigate("/checkout");
        }
    };

    if (loading) {
        return <div>Carregando produtos...</div>;
    }

    if (error) {
        return <div>Erro: {error}</div>;
    }

    return (
        <div className='box'>
            
            <div className='link-cart'>
                <Link to={"/checkout"}>
                    <a href="">Carrinho de compras</a>
                </Link>
            </div>

            <div id='title-page-products'>
                <h1>Página de Produtos</h1>
            </div>
            

            
            <div id="box-products">
                {products.map(product => (
                    <div className="product-item" key={product.id}>
                        <h2>{product.title}</h2>
                        <div id='products-image'>
                            <Link to={`/products/${product.id}`}>
                                <img src={product.image} alt={product.title} className="product-image" />
                            </Link>
                        </div>
                        <div id='products-price'>
                            <h3 className='price'>Preço: R$ {product.price}</h3>
                        </div>
                        <button onClick={() => handleAddToCart(product)} className="add-to-cart">Adicionar ao Carrinho</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
