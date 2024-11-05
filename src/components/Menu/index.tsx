import { Link } from "react-router-dom";
import { MainMenu, Card, Texts, Subtext, MenuOrder } from "./styles";
import star from '../../assets/estrela.svg'



export const MenuList: any = [
    { id: 1, note: 4.5, name: 'Hioki Sushi' , menu: [
        {
            name: 'Sashimi',
            price: 28,
            description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!' ,
            img: 'https://images.tcdn.com.br/img/img_prod/842178/salmao_fresco_fatiado_tipo_sashimi_77_1_20200903170409.jpg' ,
        },
        {
            name: 'Sushi',
            price: 37,
            description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!' ,
            img: 'https://www.receiteria.com.br/wp-content/uploads/sushi-730x450.jpg' ,
        },
        {
            name: 'Temaki',
            price: 22,
            description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!' ,
            img: 'https://www.saboresajinomoto.com.br/uploads/images/recipes/temaki-de-salmao.jpg' ,
        },
        

    ], url : 'https://images.squarespace-cdn.com/content/v1/63fc9d916fb0b31ab06c0ead/34ff468e-3358-4e3f-ac4d-9d9b717e29bb/restaurante-japones-morumbi.jpg' , description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!' },
    { id: 2, note: 4.9, name: 'Steak House' , menu: [
      {
          name: 'Picanha',
          price: 65,
          description: ' um corte de carne bovina muito apreciado e popular no Brasil. A picanha é caracterizada por sua camada de gordura que a envolve, o que contribui para seu sabor único e suculência quando preparada.' ,
          img: 'https://lirp.cdn-website.com/33406c6e/dms3rep/multi/opt/picanha-aa0c51c6-640w.jpg' ,
      },
      {
          name: 'Costela',
          price: 57,
          description: 'Quer uma carne molinha e saborosa? Então você tem tudo para se apaixonar por essa versão simples da costela assada no bafo.' ,
          img: 'https://www.sabornamesa.com.br/media/k2/items/cache/8a7eacb7a228abdc187ecece4128652b_XL.jpg' ,
      },
      {
          name: 'Medalhão de Filé Mignon',
          price: 42,
          description: 'Saiba que essa carne nada mais é do que o filé, em rodelas e espessura grossa de 2 cm, extremamente suculento e saboroso' ,
          img: 'https://www.sabornamesa.com.br/media/k2/items/cache/0c84ab19d43307514d9470b51a44e5d3_XL.jpg' ,
      },
      

  ], url : 'https://clube-static.clubegazetadopovo.com.br/images/parceiros/1607623886555.jpeg' , description: 'Peça já as melhores carnes no conforto da sua casa! Carnes frescas, temperos deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!' },
  { id: 3, note: 4.8, name: 'La Dolce Vita Trattoria' , menu: [
    {
        name: 'Pizza',
        price: 28,
        description: 'A pizza é um dos alimentos mais famosos do mundo, e isso não seria diferente no Brasil, não é mesmo? Por isso, por aqui, temos um dia só para ela: 10 de julho, conhecido como dia da pizza' ,
        img: 'https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2023/07/10/dia-da-pizza-skkhweuqjcrq.jpg' ,
    },
    {
        name: 'Macarronada',
        price: 37,
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!' ,
        img: 'https://i.pinimg.com/564x/ae/96/42/ae9642746b51a31590711784d2cb4ee1.jpg' ,
    },
    {
        name: 'Lasanha',
        price: 22,
        description: 'A lasanha é outro prato tradicional italiano mundialmente popular, que foi adaptado em diversas culturas.' ,
        img: 'https://romapravoce.com/wp-content/uploads/2020/09/parmigiana-comidas-tipicas-italianas.jpg' ,
    },
    

], url :'https://www.sarahbrito.com.br/wp-content/uploads/2017/01/fachada-noite-bistro-culinaria-italiana-bravissimo-1024x565.png' , description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!' },
,
  { id: 3, note: 4.8, name: 'La Dolce Vita Trattoria' , menu: [
    {
        name: 'Pizza',
        price: 28,
        description: 'A pizza é um dos alimentos mais famosos do mundo, e isso não seria diferente no Brasil, não é mesmo? Por isso, por aqui, temos um dia só para ela: 10 de julho, conhecido como dia da pizza' ,
        img: 'https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2023/07/10/dia-da-pizza-skkhweuqjcrq.jpg' ,
    },
    {
        name: 'Macarronada',
        price: 37,
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!' ,
        img: 'https://i.pinimg.com/564x/ae/96/42/ae9642746b51a31590711784d2cb4ee1.jpg' ,
    },
    {
        name: 'Lasanha',
        price: 22,
        description: 'A lasanha é outro prato tradicional italiano mundialmente popular, que foi adaptado em diversas culturas.' ,
        img: 'https://romapravoce.com/wp-content/uploads/2020/09/parmigiana-comidas-tipicas-italianas.jpg' ,
    }
    

], url :'https://www.sarahbrito.com.br/wp-content/uploads/2017/01/fachada-noite-bistro-culinaria-italiana-bravissimo-1024x565.png' , description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!' }
  ];

const Menu = () => {
  return (
    <MainMenu>
      { MenuList.map((menu: any) => (
        <Card>
          <div>
           <img src={menu.url} alt={menu.name} />
          </div>
          <Texts>
           <Subtext>
             <h2>{menu.name}</h2>
              <div>
               <span >{ menu.note} </span>
               <img src={star} alt="estrela" />
             </div>
           </Subtext>
            <MenuOrder>
            <p>{menu.description}</p>
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
