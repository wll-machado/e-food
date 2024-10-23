import styled from 'styled-components';

interface Props {
  backgroundImage?: string;
}

export const ProductCard = styled.div<Props>`
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;

  background-image: url(${props => props.backgroundImage}); 
  background-size: cover;
  background-position: center;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .cover{
    background-color: black;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: .5;
    z-index: 1;
  }
`;

export const ProductName = styled.h2`
  font-size: 36px;
  position: relative;
  margin-bottom: 8px;
  color: white;
  font-weight: bold;
  z-index:2;
`;

export const ProductPrice = styled.p`
  font-size: 18px;
  position: relative;
  color: #eee;
  z-index: 2;
`;

export const AddButton = styled.button`
  background-color: #e50914;
  position: relative;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 8px;
  z-index: 2;

  &:hover {
    background-color: #d40812;
  }
`;