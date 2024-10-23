
import ProductList from '../ProductList';
import { HomeContainer, Title } from './styles';



const Home = ({ addToCart }:any) => {
  return (
    <HomeContainer>
      <Title>Menu</Title>
      <ProductList addToCart={addToCart} />
    </HomeContainer>
  );
};

export default Home;
