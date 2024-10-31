import styled from 'styled-components';
import fundo from '../../assets/fundo.svg';
export const HomeContainer = styled.div`
width: 100%;
height: 384px;
  padding: 16px;
  background-image: url(${fundo});
 
  display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h1`
width: 539px;
  font-size: 32px;
  text-align: center;
  margin-bottom: 16px;
  font-weight: bold;
  color: #E66767;
  font-family: 'Roboto';
`;