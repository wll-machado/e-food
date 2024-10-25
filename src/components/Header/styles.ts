import styled from 'styled-components';

export const HeaderContainer = styled.header`
width: 100%;
  background-color: #e50914;
  padding: 16px;
  color: white;
  border-radius:0 0 12px 12px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .cart  {
    width: 3.75rem;
  }
  img{
    width: 1.6rem;
  }
`;

export const CartBadge = styled.span`
  background-color: white;
  color: #e50914;
  border-radius: 50%;
  padding: 4px 8px;
  font-size: 0.75rem;
  position: relative;
  top: -10px;
  right: -10px;
  
 
`;