import PropTypes from "prop-types"

import { useCart } from "../../hooks/CardContext"
import { CardImagem,  Container } from "./styles"
import { CardButton } from "../CardButton"






export function CardProduct({product}){

    const {putProductInCart} = useCart()

console.log(product)


    return(

        <Container>
            <CardImagem img src={product.url} alt={product.name}/>

                <div>
                    <p>
                        {product.name}
                    </p>

                    <strong>

                    {product.currencyvalue}

                    </strong>
                </div>


<CardButton onClick={()=>putProductInCart(product)}></CardButton>
            
        </Container>
    )



}


CardProduct.propTypes = {
    product: PropTypes.object,
}