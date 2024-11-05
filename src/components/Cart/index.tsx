import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContainer, CartList, CartItem, Total, Formulario, MainContainer, CloseButton, BtnCart, Entrega, Pagamento, Message, Wrapper, CardWrapper } from './styles';

import trash from '../../assets/delete.svg';

const Cart = ({ cartItems, clearCart, isClose, isOpen}: any) => {
  const [step, setStep] = useState(1); // Controla a etapa atual
  const [address, setAddress] = useState({ name: '', street: '', city: '', zip: '', complement: ''});
  const [payment, setPayment] = useState({ method: '', cardNumber: '', cardName: '', Cvv: '', validation: '' });
  const [orderMessage, setOrderMessage] = useState('');
  const navigate = useNavigate();

  const total = cartItems.reduce((acc: any, item: { price: any }) => acc + item.price, 0);

 
  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2); // Muda para a etapa de pagamento
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderMessage('Compra concluída com sucesso!');
    
    setTimeout(() => {
      clearCart();// Redireciona para a página principal
      navigate('/');
      setOrderMessage('');
    }, 2000);
  };
  
  const back = ()=>{
    const form:any = document.getElementById('form');
    
    form.style.display = 'none'
  };
  
  const next = ()=>{
    const form:any = document.getElementById('form');
    
    form.style.display = 'flex'
  };

  return (
    <MainContainer  className={isOpen ? 'open' : ''}>
      <CartContainer className={isOpen ? 'open' : ''}> 
      <CloseButton onClick={isClose}>X</CloseButton>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : orderMessage ? (
        <Message>{orderMessage}</Message>
      ) : (
        <div>
          <CartList>
            {cartItems.map((item: any, index: any) => (
              <CartItem key={index}>
                <img src={item.img} alt={item.name} />
                <div>
                  <h2>{item.name}</h2> <span>R$ {item.price}</span>
                  <img src={trash} alt="delete" />
                </div>
              </CartItem>
            ))}
          </CartList>
          <Total><span>Valor Total:</span> <span>R$ {total}</span></Total>
          <BtnCart type='button' onClick={()=> next()}>continuar com a entrega</BtnCart>

          <Formulario id='form'>
            {step === 1 ? (
              <Entrega onSubmit={handleAddressSubmit}>
                
                  <h3>Entrega</h3>
                  
                  <label className='Label'>
                    <span>Quem irá receber:</span>
                    <input
                      type="text"
                      value={address.name}
                      onChange={(e) => setAddress({ ...address, name: e.target.value })}
                      required
                    />
                  </label>

                  <label className='Label'>
                    <span>Endereço:</span>
                    <input
                      type="text"
                      value={address.street}
                      onChange={(e) => setAddress({ ...address, street: e.target.value })}
                      required
                    />
                  </label>

                  <label className='Label'>
                    <span>Cidade:</span>
                    <input
                      type="text"
                      value={address.city}
                      onChange={(e) => setAddress({ ...address, city: e.target.value })}
                      required
                    />
                  </label>

                  <Wrapper>
                  <label className='Label'>
                    <span>CEP:</span>
                    <input
                      type="text"
                      value={address.zip}
                      onChange={(e) => setAddress({ ...address, zip: e.target.value })}
                      required
                    />
                  </label>
                  <label className='Label'>
                    <span>Número:</span>
                    <input
                      type="text"
                      value={address.zip}
                      onChange={(e) => setAddress({ ...address, zip: e.target.value })}
                      required
                    />
                  </label>
                  </Wrapper>

                  <label className='Label'>
                    <span>Complemento (opcional):</span>
                    <input
                      type="text"
                      value={address.complement}
                      onChange={(e) => setAddress({ ...address, complement: e.target.value })}
                      
                    />
                  </label>
                
                <BtnCart type="submit">Confirmar Endereço</BtnCart>
                <BtnCart onClick={back} type="button">Voltar para o carrinho</BtnCart>
              </Entrega>
            ) : (
              <Pagamento onSubmit={handlePaymentSubmit}>
                <div>
                <span>Pagamento - Valor a pagar:</span> <span>R$ {total}</span>
                </div>
                <h3>Forma de Pagamento</h3>
                <label>
                  <span>Método:</span>
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
                  
                <>
                  <label>
                    <span>Nome no Cartão:</span>
                    <input
                      type="text"
                      value={payment.cardName}
                      onChange={(e) => setPayment({ ...payment, cardName: e.target.value })}
                      required
                    />
                  </label>

                  <CardWrapper>
                   <label >
                    <span>Número do Cartão:</span>
                    <input className='labelCard'
                      type="text"
                      value={payment.cardNumber}
                      onChange={(e) => setPayment({ ...payment, cardNumber: e.target.value })}
                      required
                    />
                    </label>
                    <label >
                    <span>CVV:</span>
                    <input className='labelCvv'
                      type="number"
                      value={payment.Cvv}
                      onChange={(e) => setPayment({ ...payment, Cvv: e.target.value })}
                      required
                    />
                    </label>
                  </CardWrapper>
                  <label>
                    <span>Validade do Cartão:</span>
                    <input
                      type="date"
                      value={payment.validation}
                      onChange={(e) => setPayment({ ...payment, validation: e.target.value })}
                      required
                    />
                  </label>
                  </>
                )}
                <BtnCart type="submit">Confirmar Pagamento</BtnCart>
              </Pagamento>
            )}
          </Formulario>
        </div>
      )}
    </CartContainer>
    </MainContainer>
  );
};

export default Cart;


