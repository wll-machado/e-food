import { createGlobalStyle } from "styled-components";
import cover from './src/assets/cover restaurant.jpg'

 const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    overflow-y: hidden;
}

body{
    background-image: url(${cover});
    height: 100vh;
}
`;

export default GlobalStyle;