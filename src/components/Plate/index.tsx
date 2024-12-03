
import { useDispatch } from 'react-redux';
import { Modal, ModalContent } from './styled';
import { adicionar} from '../../store/reducers/cart';

const Plate = ({items, closeModal, openCart}:any) => {
    if (!items.isVisible) return null; 

    const dispatch = useDispatch();

   

    return (
      <Modal className={items.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <span onClick={() => {
              console.log('Fechar clicado');
              closeModal();
            }}>X</span> 
          </header>
          <div className="boxContent">
            <img src={items.url} alt={items.nome} />
            <div className="boxText">
                <h4>{items.nome}</h4>
                <p>{items.descricao}</p>
                <p>Serve:  de 2 a 3 pessoas </p>
                <button type='button' onClick={() => {
            dispatch(adicionar({
              id: items.id,
              nome: items.nome,
              preco: items.preco,
              foto: items.url,
              descricao: items.descricao
             
            }));
            openCart();
            closeModal(); 
          }}>Adicionar ao carrinho - R$ {items.preco}</button>
            </div>
          </div>
        </ModalContent>
        <div className="overlay" onClick={() => {
          closeModal();
        }}></div>
      </Modal>
    );
  };
  
  export default Plate;
