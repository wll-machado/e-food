
import { useParams } from 'react-router-dom';
import { products } from '../ProductList';
import { Card } from './style';

const productsIngridient = [
  { ingredients: ['Massa', 'Molho de tomate', 'Queijo', 'Pepperoni'] },
  {  ingredients: ['Pão', 'Carne', 'Queijo', 'Alface', 'Tomate'] },
  {  ingredients: ['Arroz', 'Peixe', 'Alga', 'Molho de Soja'] },
];

const combinedProducts = products.map((product, index) => ({
    ...product,
    ingredients: productsIngridient[index].ingredients, 
  }));

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const product = combinedProducts.find(p => p.id === Number(id));

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <Card>
      <h1>{product.name}</h1>
      <img src={product.url} alt={product.name} />
      <h3>Ingredientes:</h3>
      <ul>
        {product.ingredients.map((ingredient, index) => (
          <li key={index}>-{ingredient}</li>
        ))}
      </ul>
    </Card>
  );
};

export default ProductDetails;
