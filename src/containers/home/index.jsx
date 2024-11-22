
import { CategoriesCarrosel } from "../../components/CategoriesCarrosel";
import { OfferCarousel } from "../../components/OffersCarousel";
import { Banner, Container } from "./styles";








export function Home() {




    return (

        <main>
            <Banner>
                <h1>Bem-vindo!(a)</h1>

            </Banner>

            <Container>
                <div>

                    <CategoriesCarrosel>
                    </CategoriesCarrosel>

                    <OfferCarousel>

</OfferCarousel>
                   
                </div>




            </Container>
        </main>
    )

}


