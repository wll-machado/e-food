import { Link } from "react-router-dom";
import { MainMenu, Card, Texts, Subtext, MenuOrder, Highlights, Cover } from "./styles";
import estrela from '../../assets/estrela.svg'
import { useEffect, useState } from "react";


const Menu = () => {

  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes').
    then( res => res.json()).
    then( data => setMenuList(data));
  }, []);

  return (
    <MainMenu>
      { menuList.map((menu: any) => (
        <Card key={menu.id}>
          <div>
            <Highlights>
              { menu.destacado ? (
                <p>Destaque da semana</p>
              ) : ''}
              <p>{menu.tipo}</p>
            </Highlights>
           <Cover src={menu.capa} alt={menu.titulo} />
          </div>
          <Texts>
           <Subtext>
             <h2>{menu.titulo}</h2>
              <div>
               <span >{ menu.avaliacao} </span>
               <img src={estrela} alt="estrela" />
             </div>
           </Subtext>
            <MenuOrder>
            <p>{menu.descricao}</p>
            <Link to={`/menu/${menu.id}`} className="BTN">Saiba mais</Link>
            </MenuOrder>
          </Texts>
         </Card>
      )
        
        )}
            
    </MainMenu>
  )
}

export default Menu
