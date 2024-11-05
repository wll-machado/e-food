// ProductDetails.tsx
import { Link, useParams } from 'react-router-dom';
import { MenuList } from '../Menu';
import {  Background, HomeContainer, Lista, MainHome } from './style';
import logo from '../../assets/logo.png';
import Cart from '../Cart';

const ProductDetails = ({ cartItems, addToCart, clearCart, isCartOpen, setIsCartOpen }: any) => {
  const { id } = useParams<{ id: string }>();
  const menuItem = MenuList.find((item:any) => item.id === parseInt(id || '', 10));

  if (!menuItem) {
    return <p>Item não encontrado</p>;
  }

  return (
    <MainHome>
      <HomeContainer>
        <Link to="/">
          <h2>Restaurantes</h2>
        </Link>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <button onClick={() => setIsCartOpen(!isCartOpen)}>
          <p>Itens no carrinho: {cartItems.length}</p>
        </button>
      </HomeContainer>
      
      <Background img={menuItem.url}  >
        <h2>{menuItem.name}</h2>
      </Background>
     
      <Lista>
        {menuItem.menu.map((menuItem:any) => (
          <li key={menuItem.name}>
            <img src={menuItem.img} alt={menuItem.name} />
            <h3>{menuItem.name}</h3>
            <p>{menuItem.description}</p>
            <button type="button" onClick={() => addToCart(menuItem)}>
              Adicionar ao Carrinho
            </button>
          </li>
        ))}
      </Lista>
      <Cart cartItems={cartItems} clearCart={clearCart} isOpen={isCartOpen} isClose={() => setIsCartOpen(false)} />
    </MainHome>
  );
};

export default ProductDetails;
