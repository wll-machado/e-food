import styled from 'styled-components'

export const Card = styled.div`
background-color: red;
width: 101%;
padding: 11px;

display: flex;
flex-direction: column;
align-items: center;
 h1{
    color: white;
 }

 img{
    width: 70%;
 }

 h3 {
    color: white;
    font-size: 36px;
 }

 ul{display: flex;
    gap: 10px;
}
 li{
    list-style: none;
    color: white;
    font-size: 24px;
    font-style: italic;
 }
`