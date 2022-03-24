import Header from "../../components/Header";
import {
    SectionHome,
    DivBanner,
    SectionOurTeam,
    SectionFoods,
    SectionCarousel,
    DivTextsBanner,
} from "./style";
import ImageOurTeam from "../../images/image-ourteam.png";
import ButtonDefault from "../../components/Button";
import Symbol from "../../images/quotationMarks.svg";
import { HomeContext } from "../../Providers/home";
import { useContext } from "react";
import YellowStar from "../../images/yellowStar.svg";
import ModalTeam from "../../components/ModalTeam";
import WhiteLogo from "../../images/whitelogo.png";
import { useHistory } from "react-router-dom";

const Home = () => {
    const history = useHistory();
    const { rating, count, addCount, subCount, modal, setModal } =
        useContext(HomeContext);

    return (
        <>
            {modal && <ModalTeam />}
            <SectionHome>
                <Header />
                <DivBanner>
                    <DivTextsBanner>
                        <img src={WhiteLogo} alt="" />
                        <h1>Pratos frescos e saudáveis</h1>
                        <small>Trasforme a sua experiência</small>
                        <div>
                            <ButtonDefault
                                onClick={() => history.push("/register")}
                            >
                                Registre-se
                            </ButtonDefault>
                            <button
                                onClick={() => history.push("/login")}
                                className="button-transparent"
                            >
                                Login
                            </button>
                        </div>
                    </DivTextsBanner>
                </DivBanner>
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
                            Nosso Time
                        </ButtonDefault>
                    </div>
                </SectionOurTeam>
                <SectionFoods>
                    <div>
                        <small>Cardápio</small>
                        <h2>Conheça nossos pratos</h2>
                        <ButtonDefault>Pratos</ButtonDefault>
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
                                    <img
                                        src={YellowStar}
                                        alt="star"
                                        key={index}
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
