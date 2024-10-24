import React, { useState } from 'react';

export default function CheckoutPage() {
  const [showPayOp, setshowPayOp] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleBuyClick = () => {
    setshowPayOp(true); 
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value); 
  };

  return (
    <>
      <h1>Página de carrinhos de produtos</h1>

      <button onClick={handleBuyClick}>Comprar</button>

      {showPayOp && (
        <div className="payment-options-container">
          <h2>Escolha a forma de pagamento</h2>
          
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value="">Selecione uma opção</option>
            <option value="cartao">Cartão de Crédito</option>
            <option value="debito">Cartão de Débito</option>
            <option value="pix">Pix</option>
            <option value="boleto">Boleto Bancário</option>
          </select>

          {selectedOption && (
            <div className="selected-info">
              <p>Opção selecionada: <strong>{selectedOption}</strong></p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
