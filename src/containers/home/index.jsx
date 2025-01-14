
import { OfferCarousel,CategoriesCarrosel } from "../../components";

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


