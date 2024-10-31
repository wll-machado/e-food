import styled from 'styled-components';
import fundo from '../../assets/fundo.svg';

export const MainHome = styled.div`
overflow: hidden;

/* img{
      background-color: red;
      height: 80px;
    } */
`
interface DivProps {
  img?: string;
}
export const Background = styled.div<DivProps>`
background-image: ${({ img }) => img ? `url(${img})` : 'none'};
width: 100%;
min-height: 400px;
background-position:  center ;
background-repeat: no-repeat;
background-size:cover;

padding:10px 80px;
font-family:'Roboto';
color: #e50914;
`
export const HomeContainer = styled.div`
   width: 100%;
   height:163px;
   padding: 16px;
   background-image: url(${fundo});
   
 
      display: flex;
    justify-content: space-between;
    align-items: center;

    button{
      background: none;
      color: #E66767;
      font-family: 'Roboto';
      font-size: 14px;
      border: none;
      font-weight: 900;

      cursor: pointer;
    }
`;

export const Lista = styled.ul`
  display: flex;
 justify-content: space-between;
 align-items: center;
  padding: 50px 80px;
 

 li{
  width: 320px;
  height: 338px;
  background-color: #E66767;
  padding: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    width: 100%;
    height: 167px;
  }

  h3{
    color: #FFEBD9;
    font-size: 16px;
    font-family: 'Roboto';
    margin: 10px;
    align-self: flex-start;

  }

  p{
    color: #FFEBD9;
    font-size: 14px;
    font-family: 'Roboto';
    margin: 10px;
  }

  button{
    width: 304px;
    height: 24px;
    background: #FFEBD9;
    color: #E66767;
    font-family: 'Roboto';
    font-size: 14px;
    border: none;
    cursor: pointer;
  }
 }
`