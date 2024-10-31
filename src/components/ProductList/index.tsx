
import Product from '../Product';
import { GridContainer } from './styles';

export const products = [
  { id: 1, name: 'Pizza', price: 20 , url: 'https://static.itdg.com.br/images/640-440/47d6583c93d77edac5244cab67ba660b/253447-378226756-original.jpg' },
  { id: 2, name: 'Hamburger', price: 15 , url: 'https://blog.colombo.com.br/wp-content/uploads/2021/05/hamburguer-artesanal.jpg'},
  { id: 3, name: 'Sushi', price: 30 , url: 'https://blogsakura.com.br/wp-content/uploads/2021/11/Blog1_01NOV21.jpg'},
];



const ProductList = ({ addToCart }:any) => {
  return (
    <GridContainer>
      {/* {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))} */} <p>teste</p>
    </GridContainer>
  );
};

export default ProductList;
