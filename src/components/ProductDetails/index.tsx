import { Link, useParams } from 'react-router-dom';
import {  Background, HomeContainer, Lista, MainHome } from './style';
import logo from '../../assets/logo.png';
import Cart from '../Cart';
import { useEffect, useState } from 'react';
import Plate from '../Plate';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../store';

export interface Cardapio  {
  foto:string 
  preco:number
  id:number
  nome:string
  descricao:string
  
}

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa:string
  cardapio: Cardapio[]
}

export interface Modal  {
  isVisible: boolean
  url: string 
  preco:number
  id:number
  nome:string
  descricao:string
  porcao:string
}

const getDescription = (description:string) => {
  if(description.length > 95){
    return description.slice(0,92) + '...'
  }
  return description
}

const ProductDetails = ({ clearCart, isCartOpen, setIsCartOpen }: any) => {

  const itensCart = useSelector((state: RootReducer) => state.cart.item)

  const [modal, setModal] = useState<Modal>({
    isVisible: false,
    url: '', 
    preco:0,
    id:0,
    nome:'',
    descricao:'',
    porcao:''
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      url: '', 
      preco:0,
      id:0,
      nome:'',
      descricao:'',
      porcao:''})
  }
  
  const {id} = useParams()

  const [menuItem, setmenuItem] = useState<Restaurant>()

  useEffect(() => { 
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
    .then(res => res.json())
    .then(res => setmenuItem(res))
  },[id])
  

  if (!menuItem) {
    return <p>Item não encontrado</p>;
  }

  return (
    <MainHome>
      <HomeContainer>
        <div>
        <Link to="/">
          <h2>Restaurantes</h2>
        </Link>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <button onClick={() => setIsCartOpen(!isCartOpen)}>
          <p>Itens no carrinho: {itensCart.length}</p>
        </button>
        </div>
      </HomeContainer>
      
      <Background img={menuItem.capa}  >
        <div className="wrapper">
          <span>{menuItem.tipo}</span>
          <h2>{menuItem.titulo}</h2>
        </div>        
      </Background>
     
      <Lista>
        {menuItem.cardapio.map((menuItem:any) => (
          <li key={menuItem.nome}>
            <img src={menuItem.foto} alt={menuItem.nome} />
            <h3>{menuItem.nome}</h3>
            <p>{getDescription(menuItem.descricao)}</p>
            <button type="button" onClick={() => {
              setModal({
                isVisible: true,
                url: menuItem.foto, 
                preco: menuItem.preco,
                 id: menuItem.id, 
                 nome: menuItem.nome, 
                 descricao: menuItem.descricao, 
                 porcao: menuItem.porcaourl})}}>
              Adicionar ao Carrinho
            </button>
          </li>
        ))}
      </Lista>
      <Plate items={modal} menuItem={menuItem}  closeModal={closeModal}/>
      
      <Cart clearCart={clearCart} isOpen={isCartOpen} isClose={() => setIsCartOpen(false)} />
    </MainHome>
  );
};

export default ProductDetails;
