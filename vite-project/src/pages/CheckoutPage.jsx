import React, { useState, useContext } from 'react';
import '../styles/CheckoutPage.css';
import { useLocation } from 'react-router-dom';
import { CartProducts } from '../components/CartProducts';

export default function CheckoutPage() {
    const [showPayOp, setshowPayOp] = useState(false);
    const [showBuyCart,setshowBuyCart] = useState(false)
    const [selectedOption, setSelectedOption] = useState('');
    const location = useLocation();
    const product = location.state?.product;

    const { cartItems, updateQuantity, removeFromCart } = useContext(CartProducts);

    const handleQuantityChange = (productId, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            updateQuantity(productId, newQuantity);
        }
    };

    const handleBuyClick = () => {
        setshowPayOp(true);
    };

    const handleBuyCart = () => {
        setshowBuyCart(true)
        alert("Compra efetuada")
    }

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const totalValue = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <>
            <h1>Página de Carrinho de Compras</h1>

            {product ? (
                <>
                    <h2>{product.title}</h2>
                    <img src={product.image} alt={product.title} className="product-image" />
                    <h3>Preço: R$ {product.price}</h3>
                </>
            ) : (
                <p>Nenhum produto adicionado ao carrinho.</p>
            )}

            {cartItems.length === 0 ? (                
                  <div>
                    <a href="/products">Vá para página de produtos</a>
                  </div>
                  
            ) : (
                <div>
                    {cartItems.map((product) => (
                        <div key={product.id} className="cart-item">
                            <img src={product.image} alt={product.title} style={{ width: '100px' }} />
                            <h2>{product.title}</h2>
                            <p>Preço unitário: R$ {product.price}</p>
                            <p>Quantidade:</p>
                            <input
                                type="number"
                                min="1"
                                value={product.quantity}
                                onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                            />
                            <p>Total: R$ {(product.price * product.quantity).toFixed(2)}</p>
                            <button onClick={() => removeFromCart(product.id)}>Remover {product.title.split(" ")[0]}</button>
                        </div>
                    ))}
                    <h3>Valor Total da Compra: R$ {totalValue.toFixed(2)}</h3>
                </div>
            )}
            <button onClick={handleBuyClick}disabled={cartItems.length === 0}>Comprar</button>
            {showPayOp && (
                <div className="options">
                    <h2>Escolha a forma de pagamento</h2>

                    <select value={selectedOption} onChange={handleSelectChange}>
                        <option value="">Selecione uma opção</option>
                        <option value="cartao">Cartão de Crédito</option>
                        <option value="debito">Cartão de Débito</option>
                        <option value="pix">Pix</option>
                        <option value="boleto">Boleto Bancário</option>
                    </select>

                    {selectedOption && (
                        <p>Opção selecionada: <strong>{selectedOption}</strong></p>
                    )}
                    <div>
                        <button className='BuyAllCart' onClick={handleBuyCart} disabled={!selectedOption}>Finalizar compra</button>
                    </div>
                    {setshowBuyCart && (
                      <div className='purchase-description'>
                        <h2>Resumo do pedido</h2>
                        <p>Forma de pagamento: <strong>{selectedOption}</strong></p>

                        {cartItems.map((product) =>(
                            <div>
                                <p><strong>{product.title.split(" ")[0]} - Quantidade: {product.quantity} - Total: R$ {(product.price * product.quantity).toFixed(2)}</strong></p>
                            </div>
                        ))}

                      </div>  
                    )}
                </div>
            )}
        </>
    );
}
