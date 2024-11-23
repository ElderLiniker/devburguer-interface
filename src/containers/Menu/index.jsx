import { useEffect, useState } from "react";
import { Container, Banner, CategoryMenu, ProductContainer, CategoryButton } from "./styles"

import { api } from "../../services/api"
import { FormatPrice } from "../../utils/formatprice";
import { CardProduct } from "../../components/CardProduct";
import { useNavigate } from "react-router-dom";


export function Menu() {


    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([])

    const navigate = useNavigate()

    useEffect(() => {

        async function loadCategories() {

            const { data } = await api.get("/categories")


            const newCategories = [{
                id: 0, name: "Todas"
            }, ...data
            ]

            setCategories(newCategories)


        }


        async function loadProducts() {

            const { data } = await api.get("/products")

            const newProducts = data.map(product => ({ currencyvalue: FormatPrice(product.price), ...product, }))



            setProducts(newProducts)
        }

        loadCategories();


        loadProducts();


    }, []);



    return (

        <Container>
            <Banner>
                <h1>O MELHOR
                    <br />
                    HAMBURGUER
                    <br />
                    ESTÁ AQUI!

                    <span>Esse cardápio está irresistível</span>
                </h1>



            </Banner>


            <CategoryMenu>
                {categories.map((category) => (

                    <CategoryButton key={category.id}
                        onClick={() => {
                            navigate({
                                pathname:"/cardapio",
                                search: `?categoria=${category.id}` ,
                            }
                        ,
                    {
                      replace:true,  
                    })
                        }}

                    >{category.name}</CategoryButton>
                ))}


            </CategoryMenu>


            <ProductContainer>
                {products.map(product => (
                    <CardProduct key={product.id} product={product} />
                ))}

            </ProductContainer>




        </Container>

    )

}
