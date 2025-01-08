import { useEffect, useState } from "react";
import { Container, Banner, CategoryMenu, ProductContainer, CategoryButton, Buttonvoltar } from "./styles"

import Voltar from "../../assets/de-volta.png"


import { api } from "../../services/api"
import { FormatPrice } from "../../utils/formatprice";
import { CardProduct } from "../../components/CardProduct";
import { useLocation, useNavigate } from "react-router-dom";


export function Menu() {


    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([])

    const [filterProducts, setFilterProducts] = useState([])


    const navigate = useNavigate()

    const { search } = useLocation()

    const queryparams = new URLSearchParams(search)



    const [activeCategory, setActiveCategory] = useState(() => {

        const categoryId = +queryparams.get("categoria");

        if (categoryId) {
            return categoryId
        }

        return 0


    })

    useLocation()

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


    useEffect(() => {
        if (activeCategory === 0) {
            setFilterProducts(products)
        }
        else {
            const newFilterRedProducts = products.filter(product => product.category_id === activeCategory)


            setFilterProducts(newFilterRedProducts)


        }

    }, [products, activeCategory])

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

                <Buttonvoltar>
                    
                  

                    <img onClick={() => {
                        setTimeout(() => {
                            navigate({
                                pathname: "/home",
    
                            })
                            
                        },500);



                       
                    }} src={Voltar} alt="" />


                </Buttonvoltar>



                {categories.map((category) => (

                    <CategoryButton key={category.id}
                        $isActiveCategory={category.id === activeCategory}
                        onClick={() => {
                            navigate({
                                pathname: "/cardapio",
                                search: `?categoria=${category.id}`,
                            }
                                ,
                                {
                                    replace: true,
                                },

                            )


                            setActiveCategory(category.id)
                        }}

                    >{category.name}</CategoryButton>
                ))}


            </CategoryMenu>


            <ProductContainer>
                {filterProducts.map(product => (
                    <CardProduct key={product.id} product={product} />
                ))}

            </ProductContainer>




        </Container>

    )

}




