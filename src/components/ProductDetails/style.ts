import styled from 'styled-components';
import fundo from '../../assets/fundo.svg';

export const MainHome = styled.div`
overflow: hidden;

`
interface DivProps {
  img?: string;
}
export const Background = styled.div<DivProps>`
background-image: ${({ img }) => img ? `url(${img})` : 'none'};
width: 100%;
min-height: 380px;
background-position:  center bottom ;
background-repeat: no-repeat;
background-size:cover;

padding:10px 120px;
font-family:'Roboto';
color: #e50914;
position: relative;

display: flex;
flex-direction: column;
justify-content: space-between;
div{
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  width: 100%;
min-height: 380px;
opacity: .3;
}

span{
  font-family:'Roboto';
  font-weight: 100;
  font-size:32px;
  color: white;
}

h2{
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 900;
  color: #ffffff;
  z-index:5;
}
`
export const HomeContainer = styled.div`
   width: 100%;
   height:163px;
   padding:10px 120px;
   background-image: url(${fundo});
   
 
  display: flex;
  justify-content: space-between;
  align-items: center;
    h2{
      color: #E66767;
      font-family: 'Roboto';
      font-size: 18px;
    }
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

export const Lista = styled.ul`display: flex;
 justify-content: space-between;
 align-items: center;
 margin: 50px auto;
 flex-wrap: wrap;
 max-width: 1024px;
 gap: 32px;

 li{
  width: 320px;
  height: 338px;
  background-color: #E66767;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  img{
    width: 304px;
    height: 167px;
  }

  h3{
    color: #FFEBD9;
    font-size: 16px;
    font-family: 'Roboto';
    height: 19px;
    align-self: flex-start;

  }

  p{
    color: #FFEBD9;
    font-size: 14px;
    font-family: 'Roboto';
    height: 88px;
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


 
  @media (max-width: 1024px) {
    justify-content: center;
    gap: 16px;

    
  }

  
  @media (max-width: 480px) {
    margin: 20px auto;
    gap: 8px;

    li {
      width: 90%;
      padding: 4px;

      h3 {
        font-size: 14px;
      }

      p {
        font-size: 12px;
      }

      button {
        font-size: 12px;
      }
    }
  }

`