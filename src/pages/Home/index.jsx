import Header from "../../components/Header";
import {
    SectionHome,
    DivBanner,
    SectionOurTeam,
    SectionFoods,
    SectionCarousel,
} from "./style";
import ImageOurTeam from "../../images/image-ourteam.svg";
import CarouselContainer from "../../components/Carousel";
import ButtonDefault from "../../components/Button";

const Home = () => {
    return (
        <SectionHome>
            <Header />
            <DivBanner />
            <SectionOurTeam>
                <div className="left">
                    <img src={ImageOurTeam} alt="" />
                </div>
                <div className="right">
                    <div className="texts">
                        <div>
                            <small>About us</small>
                            <h2>Go fresh in your home</h2>
                        </div>

                        <p>
                            Go fresh in your home Go fresh in your home Go fresh
                            in your home Go fresh in your home Go fresh in your
                            home Go fresh in your home Go fresh in your home.
                        </p>
                    </div>
                    <ButtonDefault>NOSSO TIME</ButtonDefault>
                </div>
            </SectionOurTeam>
            <SectionFoods>
                <div>
                    <small>Cardápio</small>
                    <h2>Conheça nossos pratos</h2>
                    <ButtonDefault>PRATOS</ButtonDefault>
                </div>
            </SectionFoods>
            <SectionCarousel>
                <CarouselContainer></CarouselContainer>
            </SectionCarousel>
        </SectionHome>
    );
};

export default Home;
