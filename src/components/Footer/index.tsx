import { FooterContainer, FooterLogo, FooterSocial } from "./styles"
import instagram from '../../assets/instagram.svg'
import x from '../../assets/twitter.svg'
import facebook from '../../assets/facebook.svg'
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <FooterContainer>
        <FooterLogo>
        <Link to="/" >
            <img src={logo} alt="logo" />
        </Link>
            <p>E-food &copy; 2024 Todos os direitos reservados</p>
        </FooterLogo>
        <FooterSocial>
            <ul>
                <li>
                    <img src={instagram} alt="intagram logo" />
                </li>
                <li>
                    <img src={x} alt="X logo" />
                </li>
                <li>
                    <img src={facebook} alt="facebook logo" />
                </li>
            </ul>
        </FooterSocial>
    </FooterContainer>
  )
}

export default Footer
