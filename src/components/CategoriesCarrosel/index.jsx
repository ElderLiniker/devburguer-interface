import { useEffect, useState } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"





import { api } from "../../services/api"   //preciso umporta minha api para buscar minha sinfromçãoes de categorias da minha api//



import { Container, ContainerItens, Title } from "./styles"



export function Categoriescarrosel() {

    const [categories, setCategories] = useState([])


    useEffect(() => {

        async function loadCategories() {

            const { data } = await api.get("/categories")

            setCategories(data)
            console.log(data)



        }
        loadCategories();
    }, []);



    const responsive = {
        superLargeDesktop: {

            breakpoint: { máx: 4000, mín: 3000 },
            itens: 4,
        },
        desktop: {
            breakpoint: { máx: 3000, mín: 1280 },
            itens: 4,
        },
        tablet: {
            breakpoint: { máx: 1280, mín: 690 },
            itens: 3,
        },
        celular: {
            breakpoint: { máx: 690, mín: 0 },
            itens: 2,
        },
    }
    return (


        <Container>

            <Title>Categorias</Title>

            <Carousel
                responsive={responsive}
                infinite={true}
                partialVisible={false}
                itemClass="carousel-item">

                {categories.map((category) => (
                    <ContainerItens key={category.id} imageUrl={category.url}>
                        {category.name}

                    </ContainerItens>
                ))}


            </Carousel>
        </Container>
    )
}