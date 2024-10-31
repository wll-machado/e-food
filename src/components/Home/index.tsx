
import { Link } from 'react-router-dom';
// import ProductList from '../ProductList';
import { HomeContainer, Title } from './styles';
import logo from '../../assets/logo.png'


const Home = () => {
  return (
    <HomeContainer>
      <Link to="/" >
            <img src={logo} alt="logo" />
        </Link>
      {/* <ProductList addToCart={addToCart} /> */}
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </HomeContainer>
  );
};

export default Home;
