import React, { useState } from 'react';
import '../styles/CheckoutPage.css';
import { useLocation } from 'react-router-dom';

  //Armazenar todos os itens adicionados ao carrinhO
  //Adicionar ao carrinho na página ProductsPage e em ProductsDetailsPage
  //Atualizar quantidade e preço
  //Adicionar div com os dados finais de compra 

export default function CheckoutPage() {
  const [showPayOp, setshowPayOp] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const location = useLocation();
  const product = location.state?.product;

  const handleBuyClick = () => {
    setshowPayOp(true); 
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value); 
  };

  return (
    <>
      <h1>Página de carrinhos de produtos</h1>
      {product ? (
                <>
                    <h2>{product.title}</h2>
                    <img src={product.image} alt={product.title} className="product-image" />
                    <h3>Preço: R$ {product.price}</h3>
                </>
            ) : (
                <p>Nenhum produto adicionado ao carrinho.</p>
            )}
      <button onClick={handleBuyClick}>Comprar</button>

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
        </div>
      )}
    </>
  );
}
