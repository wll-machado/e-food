
import styled from 'styled-components';

export const CartContainer = styled.div`
  padding: 16px;
  background-color: rgba(246, 247, 218);
  margin: 5vh 0;
  width: 50%;
  height: 60vh;
  
  display: flex;
  flex-direction: column;
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
`;

export const CartItem = styled.li`
  padding-bottom: 8px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 8px;
`;

export const Total = styled.h2`
  font-size: 24px;
  font-weight: bold;

  margin-top: 25vh;
`;

export const Formulario = styled(CartContainer)`
position: absolute;
left: 55vw;
top: 10vh;
width: 33vw;

  form {
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    height: 100%;
     
    button{
      border: none;
      border-radius: 15px;
      color: white;
      font-weight: bold;
      background-color: green;
      padding: .5rem;
    }
    div{
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;

      h3{width: 100%; text-align: center; font-size:1.5rem;}

      label {
        font-weight: bold;
        flex-basis: 200px;
      }

      input{
        border: none;
        border-bottom: 2px solid red;
        background: none ;
        height: 1.3rem;

        &:focus{
          background: red;
          outline: none;
          color: white;
          padding: 0 .5rem;
        }
      }
    }
  }
`