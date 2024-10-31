import styled from "styled-components";

export const FooterContainer = styled.div`
position: relative;

 display: flex;
 padding: 60px 20px;
 align-items: center;
 flex-direction: column;
 width: 100%;
 height: 298px;
 background-color: #FFEBD9;
;

p{
    color: #E66767;
    width: 480px;
    height: 26px;
    font-size: 10px;
    text-align: center;
    position: absolute;
    bottom: 10px;
}

`

export const FooterLogo = styled.div`
margin-bottom: 2vh;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 50px;

img{
    width: 125px;
    height: 57.5px;
    
}
`

export const FooterSocial = styled.div`
display: flex;

ul{
    display: flex;
    gap: 8px;
    
    li{
        cursor: pointer;
    }
    img{ 
        width: 24px;
    }
}
`