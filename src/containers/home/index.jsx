
import { CategoriesCarrosel } from "../../components/CategoriesCarrosel";
import { OfferCarousel } from "../../components/OffersCarousel";
import { Banner, Container, Content } from "./styles";








export function Home() {




    return (

        <main>
            <Banner>
                <h1>Bem-vindo!(a)</h1>

            </Banner>

            <Container>
                <Content>

                    <CategoriesCarrosel>
                    </CategoriesCarrosel>

                    <OfferCarousel>

</OfferCarousel>
                   
                </Content>




            </Container>
        </main>
    )

}


