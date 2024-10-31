
import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  min-width: 100%;
  height: 200vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &.open {
    visibility: visible;
    opacity: 1;
  }
`;

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  padding: 40px 16px;
  background: #E66767;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  z-index: 1000;

  &.open {
    transform: translateX(0);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #FFEBD9;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
  align-self: center;
`;

export const CartList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CartItem = styled.li`
  background-color: #FFEBD9;
  padding: 6px;
  display: flex;
  img{
    width: 80px;
    height: 80px;
  }

  h2{
    color: #E66767;
    font-size: 18px;
    font-family: 'Roboto';
    font-weight: 900;
  }

  div{
    padding: 10px;

    span{
      color: #E66767;
    font-size: 14px;
    font-family: 'Roboto';
    font-weight: 400;
    }
  }
`;

export const Total = styled.h2`
width: 264px;
display: flex;
justify-content: space-between;
margin-bottom: 15px;
  font-size: 14px;
  font-weight: 700;
  font-family: 'Roboto';
  margin-top: 25vh;
  color: #FFEBD9;
`;

export const BtnCart = styled.button`
width: 264px;
height: 24px;
border: none;
background-color: #FFEBD9;
color: #E66767;
font-weight: 700;
font-family: 'Roboto';
font-size: 14px;
cursor: pointer;
`
export const Formulario = styled(CartContainer)`
position: absolute;
left: -330px;
top: 0;
width: 330px;
display: none;
 
`

export const Entrega = styled.form`

  display:flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;
  height: 100%;

h3{
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 700;
  color: #FFEBD9;
  margin-bottom: 15px;
}

.Label{
  display: flex;
  flex-direction: column;
  height: 56px;
  
  span{
    font-family: 'Roboto';
  font-size: 14px;
  font-weight: 700;
  color: #FFEBD9;
  }
  input{
    width: 264px;
    height: 32px;
    border: none;
    color: #E66767;
    background-color: #FFEBD9;
    padding: 0 4px;
    &:focus{
      outline: none;
    }
  }
}

`

export const Pagamento = styled.form`
display:flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;
  height: 100%;
  
  div{
    width: 270px;

    span{
      color: #FFEBD9;
      font-family: 'Roboto';
      font-weight: 700;
      font-size: 16px;
    }
  }

  h3{
    margin-top: 15px;
    color: #FFEBD9;
      font-family: 'Roboto';
      font-weight: 700;
      font-size: 14px;
  }

  label{
    margin-top: 15px;
  display: flex;
  flex-direction: column;
  height: 56px;

  span{
    font-family: 'Roboto';
  font-size: 14px;
  font-weight: 700;
  color: #FFEBD9; 
  }

  input{
    width: 264px;
    height: 32px;
    border: none;
    color: #E66767;
    background-color: #FFEBD9;
    padding: 0 4px;
    &:focus{
      outline: none;
    }
  }
  }
`
export const Message = styled.p`
 font-family: 'Roboto';
  font-size: 14px;
  font-weight: 700;
  color: #FFEBD9; 
`