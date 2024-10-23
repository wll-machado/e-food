
import { Link } from 'react-router-dom';
import { HeaderContainer, Nav, CartBadge } from './styles';


const Header = ({ cartItemCount }:any) => {
  return (
    <HeaderContainer>
      <Nav>
        <Link to="/" style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>E-Food</Link>
        <Link to="/cart" style={{ position: 'relative', color: 'white' }}>
          Carrinho
          {cartItemCount > 0 && (
            <CartBadge>{cartItemCount}</CartBadge>
          )}
        </Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
