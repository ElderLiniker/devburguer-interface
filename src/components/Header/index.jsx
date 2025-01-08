import { Container, Content, HeaderLink, LinkContainer, Logout, Navigation, Options, Profile } from "./styles";


import { useNavigate, useResolvedPath } from "react-router-dom";


import {userUser} from "../../hooks/UserContext"


import { FaUser, FaCartPlus } from "react-icons/fa";






export function Header() {

    const Navigate = useNavigate()
    const {logout, userInfo} = userUser()
    const { pathname } = useResolvedPath()



    function logoutUser (){

        logout()
        Navigate("/login")



    }


    return (
        <Container>

            <Content>

                <Navigation>
                    <div>
                        <HeaderLink to="/home" $isActive={pathname === "/home"}  >Home</HeaderLink>

                        <hr></hr>

                        <HeaderLink to="/cardapio" $isActive={pathname === "/cardapio"}>Cardápio</HeaderLink>
                    </div>
                </Navigation>
                <Options>

                    <Profile>
                        <FaUser color="#fff" size={25} />
                        <div>
                            <p>Olá, <span>{userInfo.name}</span>
                            </p>


                            <Logout onClick={logoutUser}>
                                Sair
                            </Logout>
                        </div>

                    </Profile>

                    <LinkContainer>

                        <FaCartPlus color="#fff" size={25} />
                        <HeaderLink  to="/carrinho">
                            Carrinho
                        </HeaderLink>
                    </LinkContainer>



                </Options>




            </Content>

        </Container>
    )
}