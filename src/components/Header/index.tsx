
import { Link } from 'react-router-dom';
import { HeaderContainer, Nav, CartBadge } from './styles';
import cart from '../../assets/cart.svg'

const Header = ({ cartItemCount }:any) => {
  return (
    <HeaderContainer>
      <Nav>
        <Link to="/" style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>E-Food</Link>
        <Link className='cart' to="/cart" style={{ position: 'relative', color: 'white' }}>
          <img src={cart} alt="cart icon" />
          {cartItemCount > 0 && (
            <CartBadge>{cartItemCount}</CartBadge>
          )}
        </Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
