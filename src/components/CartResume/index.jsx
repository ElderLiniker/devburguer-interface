import { Button } from "../button"

import { Container } from "./styles"

import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"



import { useEffect, useState } from "react"
import { FormatPrice } from "../../utils/formatprice"

import { useCart } from "../../hooks/CardContext"
import { api } from "../../services/api"

export function CartResume() {


    const [finalPrice, setFinalPrice] = useState(0)

    const [deliveryTax] = useState(500)

    const navigate = useNavigate()

    const { cartProducts, clearCart } = useCart()

    useEffect(() => {
        const sumAllItems = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc
        }, 0)

        setFinalPrice(sumAllItems)


    }, [cartProducts])

    const submitOrder = async () => {
        const products = cartProducts.map((product) => {
            return { id: product.id, quantity: product.quantity,price: product.price }
        })

        try {
            const {data} = await api.post("/create-payment-intent",{products})

           navigate("/checkout", {
            state: data,

           })
        } catch (error) {
            toast.error('Erro, tente novamente!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                
                });
            
        }















      /*  try {
            const { status } = await api.post("/orders", {products},
                {
                    validateStatus: () => true,
                },
            )


            if (status === 200 || status === 201) {
                
                setTimeout(() => {
                    navigate("/home")//para caso dê sucesso ao criar conta ir para tela de login//

                }, 2000);
                clearCart()
                toast.success("Pedido Realizado com Sucesso!")
            }
            else if (status === 400) {
                toast.error("Falha ao realizar seu pedido.")
            }

            else {
                throw new Error()
            }

        }

        catch (error) {

            toast.error("🥹 Falha no sistema ! Tente novamente")

        }*/
    }




    return (
        <div>

            <Container>

                <div className="container-top"> <h2 className="title">Resumo do pedido</h2>
                    <p className="items">Itens</p>
                    <p className="items-price">{FormatPrice(finalPrice)}</p>
                    <p className="delivery-tax">{FormatPrice(deliveryTax)}</p>
                    <p className="delivery-tax-price">R$ 5,00</p>

                </div>


                <div className="container-botton">

                    <p>Total</p>
                    <p>{FormatPrice(finalPrice + deliveryTax)}</p>


                </div>

            </Container>
            <Button onClick={submitOrder} >Finalizar Pedido</Button>

        </div>
    )
}