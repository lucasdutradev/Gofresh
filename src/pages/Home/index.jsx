import Header from "../../components/Header";
import { SectionHome, DivBanner, SectionOurTeam } from "./style";
import ImageOurTeam from "../../images/image-ourteam.svg";
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
                    <div>
                        <small>About us</small>
                        <h2>Go fresh in your home</h2>
                        <p>
                            Go fresh in your home Go fresh in your home Go fresh
                            in your home Go fresh in your home Go fresh in your
                            home Go fresh in your home Go fresh in your home.
                        </p>
                    </div>
                    <ButtonDefault>NOSSO TIME</ButtonDefault>
                </div>
            </SectionOurTeam>
        </SectionHome>
    );
};

export default Home;
