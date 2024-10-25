import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContainer, Title, CartList, CartItem, Total, Formulario } from "./styles";

const Cart = ({ cartItems, clearCart }: any) => {
  const [step, setStep] = useState(1); 
  const [address, setAddress] = useState({ street: '', city: '', zip: '' });
  const [payment, setPayment] = useState({ method: '', cardNumber: '' });
  const [orderMessage, setOrderMessage] = useState('');
  const navigate = useNavigate();

  const total = cartItems.reduce((acc: any, item: { price: any }) => acc + item.price, 0);

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2); 
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderMessage('Compra concluída com sucesso!');
    clearCart(); 
    setTimeout(() => {
      setOrderMessage(''); 
      navigate('/'); 
    }, 3000);
  };

  return (
    <CartContainer>
      <Title>Carrinho</Title>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : orderMessage ? (
        <p>{orderMessage}</p>
      ) : (
        <div>
          <CartList>
            {cartItems.map((item: any, index: any) => (
              <CartItem key={index}>
                {item.name} - R$ {item.price}
              </CartItem>
            ))}
          </CartList>
          <Total>Total: R$ {total}</Total>

          <Formulario>
          {step === 1 ? (
            <form onSubmit={handleAddressSubmit}>
              <div>
              <h3>Endereço de Entrega</h3> 
              <label>
                Rua:
                <input
                  type="text"
                  value={address.street}
                  onChange={(e) => setAddress({ ...address, street: e.target.value })}
                  required
                />
              </label>
              <label>
                Cidade:
                <input
                  type="text"
                  value={address.city}
                  onChange={(e) => setAddress({ ...address, city: e.target.value })}
                  required
                />
              </label>
              <label>
                CEP:
                <input
                  type="text"
                  value={address.zip}
                  onChange={(e) => setAddress({ ...address, zip: e.target.value })}
                  required
                />
              </label>
              </div>
              <button type="submit">Confirmar Endereço</button>
            </form>
          ) : (
            <form  onSubmit={handlePaymentSubmit}>
              <h3>Forma de Pagamento</h3>
              <label>
                Método:
                <select
                  value={payment.method}
                  onChange={(e) => setPayment({ ...payment, method: e.target.value })}
                  required
                >
                  <option value="">Escolha...</option>
                  <option value="credit">Cartão de Crédito</option>
                  <option value="debit">Cartão de Débito</option>
                </select>
              </label>
              {payment.method && (
                <label>
                  Número do Cartão:
                  <input
                    type="text"
                    value={payment.cardNumber}
                    onChange={(e) => setPayment({ ...payment, cardNumber: e.target.value })}
                    required
                  />
                </label>
              )}
              <button type="submit">Confirmar Pagamento</button>
            </form>
          )}
          </Formulario>
        </div>
      )}
    </CartContainer>
  );
};

export default Cart;
