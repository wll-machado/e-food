import styled from 'styled-components'

export const MainMenu = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;

padding: 50px;
gap: 50px;
width: 100%;
height: auto;

`
export const Card = styled.div`
width: 472px;
height: 398px;
border: 1px solid #E66767;

cursor: pointer;
overflow: hidden;

div {
    
    width: 100%;
    height: 217px;
    overflow: hidden;

    img{
    width: 100%;
    height: 100%;

    transition: all .5s ease;}
     
    &:hover img{
    transform: scale(1.1);
}


}


`

export const Texts = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 181px;
padding: 10px;


`

export const Subtext = styled.div`
display: flex;
justify-content: space-between;
max-height: 20px;
border: none;
h2{
    font-family: 'Roboto';
    color: #E66767;
    font-size: 18px;
}
`

export const MenuOrder = styled.div`
max-height: 141px;
display: flex;
flex-direction: column;
justify-content: space-between;
padding-top: 10px;
p{
font-size: 14px;
font-family: 'Roboto';
color: #E66767;
}

.BTN{
    width: 82px;
    height: 24px;
    color: white;
    font-size: 14px;
    font-family: 'Roboto';
    background-color: #E66767;
    
    display: flex;
    justify-content: center;
    align-items: center;
}
`