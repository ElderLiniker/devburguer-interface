import Cart from "../../assets/Vector.svg"
import { ContainerButton } from "./styles"


export function CardButton ({...props}){



    return(
<div>
<ContainerButton>
    <img src= {Cart}   alt="carrinho-de-compras"/>
    </ContainerButton>
</div>



    )
}