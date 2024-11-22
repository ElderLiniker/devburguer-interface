import PropTypes from "prop-types"
import { CardImagem,  Container } from "./styles"
import { CardButton } from "../CardButton"





export function CardProduct({product}){

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


<CardButton></CardButton>
            
        </Container>
    )



}


CardProduct.propTypes = {
    product: PropTypes.object,
}