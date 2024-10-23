
import { Link } from 'react-router-dom';
import { ProductCard, ProductName, ProductPrice, AddButton } from './styles';


const Product = ({ product, addToCart }:any) => {
  return (
    <ProductCard backgroundImage={product.url}>
      <div className="cover"></div>
      <ProductName>{product.name}</ProductName>
      <ProductPrice>R$ {product.price}</ProductPrice>
      <AddButton onClick={() => addToCart(product)}>
        Adicionar ao carrinho
      </AddButton>
      <Link to={`/product/${product.id}`}>
        <AddButton>Saiba Mais</AddButton>
      </Link>
    </ProductCard>
    
  );
};

export default Product;
