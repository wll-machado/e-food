import styled from "styled-components";

export const FooterContainer = styled.div`
position: absolute;
bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 width: 1024px;
 height: 20vh;
 background-color: red;

`

export const FooterLogo = styled.div`
color: white;
padding-top: 2vh;
margin-bottom: 2vh;
display: flex;
flex-direction: column;
align-items: center;
gap: 4px;

img{
    width: 80px;
    height: 50px;
}
`

export const FooterSocial = styled.div`
display: flex;

ul{
    display: flex;
    gap: 4px;

    li{
        cursor: pointer;
    }
    img{ 
        width: 30px;
    }
}
`