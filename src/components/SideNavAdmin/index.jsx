import { navLinks } from "./navLinks"
import Logo from "../../assets/logo.png"
import { SignOut } from "@phosphor-icons/react"
import { Footer, NavLink, NavLinkContainer, Container } from "./styles"

import { userUser } from "../../hooks/UserContext"
import { useResolvedPath } from "react-router-dom"


export function SideNavAdmin() {

    const { logout } = userUser()


    const {pathName} = useResolvedPath()


    

    return (
        <Container>
            <img src={Logo} alt="Hamburguer Logo Devburguer" />
            <NavLinkContainer>
                {navLinks.map(link =>
                (

                    <NavLink
                     key={link.id}
                      to={link.path}
                      $isActive={pathName === link.path}>

                        {link.icon}

                        <span>{link.label}</span>

                    </NavLink>))}

            </NavLinkContainer>


            <Footer>

                <NavLink to="/login" onClick={logout} >

                    <SignOut />
                    <span>Sair</span>

                </NavLink>
            </Footer>





        </Container>
    )


}