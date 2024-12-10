import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContainer, CartList, CartItem, Total, Formulario, MainContainer, CloseButton, BtnCart, Entrega, Pagamento, Message, Wrapper, CardWrapper } from './styles';

import trash from '../../assets/delete.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';
import { remove } from '../../store/reducers/cart';

const Cart = ({  clearCart, isClose, isOpen}: any) => {

  const dispatch = useDispatch()
  const itensCart = useSelector((state: RootReducer) => state.cart.item)
  const [step, setStep] = useState(1); // Controla a etapa atual
  const [address, setAddress] = useState({ name: '', street: '', city: '', zip: '', complement: ''});
  const [payment, setPayment] = useState({ method: '', cardNumber: '', cardName: '', Cvv: '', validation: '' });
  const [orderMessage, setOrderMessage] = useState('');
  const navigate = useNavigate();

  const total = itensCart.reduce((acc: number, item: { preco: number }) => acc + item.preco, 0);

  const format = (value: number): string => {
    return value.toFixed(2);
  };

 
  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2); 
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    
    const orderData = {
      products: itensCart.map((item: any) => ({
        id: item.id,
        price: item.preco,
      })),
      delivery: {
        receiver: address.name,
        address: {
          description: address.street,
          city: address.city,
          zipCode: address.zip,
          number: parseInt(address.zip, 8), 
          complement: address.complement,
        },
      },
      payment: {
        card: {
          name: payment.cardName,
          number: payment.cardNumber,
          code: parseInt(payment.Cvv, 3),
          expires: {
            month: new Date(payment.validation).getMonth() + 1, 
            year: new Date(payment.validation).getFullYear(), 
          },
        },
      },
    };
  
    try {
      const response = await fetch('https://fake-api-tau.vercel.app/api/efood/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
  
      if (!response.ok) {
        throw new Error('Erro ao processar o pedido.');
      }
  
      const result = await response.json();
      console.log('Resposta da API:', result);
  
      setOrderMessage(`
      Pedido realizado - ${result.orderId}\n
      Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.\n
  Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.\n
  Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.\n
  Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
    `);
    
    setTimeout(() => {
      clearCart();
      navigate('/');
        setOrderMessage('');
      }, 3500);
    } catch (error) {
      console.error('Erro:', error);
      setOrderMessage('Erro ao concluir o pedido. Tente novamente.');
    }
  };
  
  
  const back = ()=>{
    const form:any = document.getElementById('form');
    
    form.style.display = 'none'
  };
  
  const next = ()=>{
    const form:any = document.getElementById('form');
    
    form.style.display = 'flex'
  };

  const removeItem = (id:number) => {
    dispatch(remove(id))
  }
  return (
    <MainContainer  className={isOpen ? 'open' : ''}>
      <CartContainer className={isOpen ? 'open' : ''}> 
      <CloseButton onClick={isClose}>X</CloseButton>
      {itensCart.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : orderMessage ? (
        <Message style={{ whiteSpace: 'pre-line' }}>{orderMessage}</Message>
      ) : (
        <div>
          <CartList>
            {itensCart.map((item: any, index: any) => (
              <CartItem key={index}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h2>{item.nome}</h2> <span>R$ {item.preco}</span>
                  <img src={trash} alt="delete" onClick={() => removeItem(item.id)}/>
                </div>
              </CartItem>
            ))}
          </CartList>
          <Total><span>Valor Total:</span> <span>R$ {format(total)}</span></Total>
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
                <span>Pagamento - Valor a pagar:</span> <span>R$ {format(total)}</span>
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


