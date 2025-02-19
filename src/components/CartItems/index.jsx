import { Table } from "../index"

import { useCart } from "../../hooks/CardContext"
import { FormatPrice } from "../../utils/formatprice"
import { ButtonGroup, EmptyCart, ProductImage, ProductTotalPrince, TrashImage } from "./styles"

import TrashIcon from "../../assets/trash.svg"



export function CartItems() {
    const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } = useCart()


    return (
        <Table.Root>
            <Table.Haeder>

                <Table.Tr>
                    <Table.Th></Table.Th>

                    <Table.Th>Itens</Table.Th>

                    <Table.Th> Preço</Table.Th>

                    <Table.Th>Quantidade</Table.Th>

                    <Table.Th>Total</Table.Th>
                    <Table.Th></Table.Th>

                </Table.Tr>


            </Table.Haeder>


            <Table.Body>
                {cartProducts?.length ? (cartProducts.map(product => (
                    <Table.Tr key={product.id}>

                        <Table.Td>
                            <ProductImage src={product.url} alt="" />
                        </Table.Td>

                        <Table.Td>
                            {product.name}
                        </Table.Td>

                        <Table.Td>
                            {product.currencyvalue}
                        </Table.Td>

                        <Table.Td>
                            <ButtonGroup>
                                <button onClick={() => decreaseProduct(product.id)} >-</button>
                                {product.quantity}

                                <button onClick={() => increaseProduct(product.id)} >+</button>
                                /</ButtonGroup>


                        </Table.Td>

                        <Table.Td>
                            <ProductTotalPrince>
                                {FormatPrice(product.quantity * product.price)}
                            </ProductTotalPrince>


                        </Table.Td>
                        <Table.Td >
                            <TrashImage src={TrashIcon} alt="lixeira" onClick={() =>  deleteProduct(product.id) } />
                        </Table.Td>

                    </Table.Tr>
                ))) : <EmptyCart>Carrinho vazio</EmptyCart>

                } </Table.Body>
        </Table.Root>
    )
}