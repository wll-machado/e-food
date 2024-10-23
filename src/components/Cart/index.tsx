import { CartContainer, Title, CartList, CartItem, Total } from "./styles";

const Cart = ({ cartItems }:any) => {
  const total = cartItems.reduce((acc: any, item: { price: any; }) => acc + item.price, 0);

  return (
    <CartContainer>
      <Title>Carrinho</Title>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <div>
          <CartList>
            {cartItems.map((item:any, index:any) => (
              <CartItem key={index}>
                {item.name} - R$ {item.price}
              </CartItem>
            ))}
          </CartList>
          <Total>Total: R$ {total}</Total>
        </div>
      )}
    </CartContainer>
  );
};

export default Cart;
