import styled from 'styled-components'

export const MainMenu = styled.div`

margin: 80px auto;
display: flex;
flex-wrap: wrap;
justify-content: center;

gap: 80px;
width: 1024px;
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
background-color: white;

`

export const Subtext = styled.div`
display: flex;
justify-content: space-between;
max-height: 21px ;
border: none;
h2{
    font-family: 'Roboto';
    color: #E66767;
    font-size: 18px;
}

div {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 8px;
    width: 50%;
    height: 100%;
    span{
        font-family: 'Roboto';
        font-size: 18px;
        font-weight: 700;
        color: #E66767;
    }
    img{
        width: 21px;
        height: 21px;
    }
}
`

export const MenuOrder = styled.div`
max-height: 141px;
display: flex;
flex-direction: column;
justify-content: space-between;

p{
    padding-top: 14px;
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