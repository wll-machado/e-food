import styled from "styled-components";

export const Modal = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 20;

display: none;
justify-content: center;
align-items: center;

&.visivel{
  display: flex;
}

.overlay{
  position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.53);

}

`
export const ModalContent = styled.div`
max-width: 1024px;
height: 344px;
position: relative;
z-index: 20;
background-color: #E66767;

span{
  display: block;
  position: absolute;
  font-family: 'Roboto';
  right: 0;
  width: 1rem;
  height: 1rem;
  font-weight: lighter;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #FFFFFF;
}
header{
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
}

.boxContent{
    display: flex;
    gap: 20px;
    padding: 0 24px;
    img{
    width: 280px;
    height: 280px;
    object-fit: cover;
    }

    .boxText{
        display: flex;
        flex-direction: column;
        gap: 16px;
        h4{
    font-size: 18px;
    font-weight: 900;
    font-family: 'Roboto';
    color: #FFFFFF;
  }

  p{
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 400;
    color: #FFFFFF;
  }

  button {
    width: 218px;
    height: 24px;
    color: #E66767;
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 700;
    border: none;
  }

    }
}




`