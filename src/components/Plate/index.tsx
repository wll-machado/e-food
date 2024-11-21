
import { Modal, ModalContent } from './styled'

const Plate = ({items, cart, closeModal}:any) => {
    if (!items.isVisible) return null; 

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
            cart({
              id: items.id,
              name: items.nome,
              price: items.preco,
              img: items.url,
            });
            closeModal(); 
          }}>Adicionar ao carrinho - R$ {items.preco}</button>
            </div>
          </div>
        </ModalContent>
        <div className="overlay" onClick={() => {
          console.log('Overlay clicado');
          closeModal();
        }}></div>
      </Modal>
    );
  };
  
  export default Plate;
