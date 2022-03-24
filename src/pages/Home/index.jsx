import Header from "../../components/Header";
import {
    SectionHome,
    DivBanner,
    SectionOurTeam,
    SectionFoods,
    SectionCarousel,
} from "./style";
import ImageOurTeam from "../../images/image-ourteam.svg";
import ButtonDefault from "../../components/Button";
import Symbol from "../../images/quotationMarks.svg";
import { HomeContext } from "../../Providers/home";
import { useContext } from "react";
import RatingIcon from "../../components/RatingIcon";
import ModalTeam from "../../components/ModalTeam";

const Home = () => {
    const { rating, count, addCount, subCount, modal, setModal } =
        useContext(HomeContext);

    return (
        <>
            {modal && <ModalTeam />}
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
                                Go fresh in your home Go fresh in your home Go
                                fresh in your home Go fresh in your home Go
                                fresh in your home Go fresh in your home Go
                                fresh in your home.
                            </p>
                        </div>
                        <ButtonDefault onClick={() => setModal(true)}>
                            NOSSO TIME
                        </ButtonDefault>
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
                    <div className="Carousel">
                        <h3 onClick={subCount}>&#706;</h3>
                        <div className="texts">
                            <img src={Symbol} alt="Aspas" />
                            <h2>{rating[count].title}</h2>
                            <p>{rating[count].description}</p>
                            <div className="stars">
                                {[1, 2, 3, 4, 5].map((index) => (
                                    <RatingIcon
                                        key={index}
                                        index={index}
                                        rating={rating}
                                    />
                                ))}
                            </div>
                        </div>
                        <h3 onClick={addCount}>&#707;</h3>
                    </div>
                </SectionCarousel>
            </SectionHome>
        </>
    );
};

export default Home;
