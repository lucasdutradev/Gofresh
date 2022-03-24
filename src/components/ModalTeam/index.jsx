import { SectionModal, Card, ExitIcon } from "./style";
import Instagram from "../../images/SocialMedia/instagram-logo.svg";
import GitHub from "../../images/SocialMedia/github-logo.svg";
import Email from "../../images/SocialMedia/email.svg";
import { useContext } from "react";
import { HomeContext } from "../../Providers/home";
import CarlosPhoto from "../../images/PersonalPhotos/CarlosPhoto.png";

const ModalTeam = () => {
    const { setModal } = useContext(HomeContext);
    return (
        <SectionModal>
            <ExitIcon onClick={() => setModal(false)}>
                <div />
                <div />
            </ExitIcon>
            <Card>
                <div className="blob" />
                <img src={CarlosPhoto} alt="" className="img" />
                <h2>Carlos Henrique</h2>
                <small>Product Owner</small>
                <p>
                    <a
                        href="https://www.instagram.com/carlos_henriq17/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <img src={Instagram} alt="Instagram Logo" />
                    </a>
                    <a
                        href="https://www.github.com/carlos-hss"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <img src={GitHub} alt="GitHub Logo" />
                    </a>

                    <img src={Email} alt="Email Logo" />
                </p>
            </Card>
            <Card>
                <div className="blob" />
                <span className="img" />
                <h2>Lucas Dutra</h2>
                <small>Tech Lead</small>
                <p>
                    <a
                        href="https://www.instagram.com/carlos_henriq17/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <img src={Instagram} alt="Instagram Logo" />
                    </a>
                    <a
                        href="https://www.github.com/carlos-hss"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <img src={GitHub} alt="GitHub Logo" />
                    </a>

                    <img src={Email} alt="Email Logo" />
                </p>
            </Card>
            <Card>
                <div className="blob" />
                <span className="img" />
                <h2>Bárbara Barbosa</h2>
                <small>Scrum Master</small>
                <p>
                    <a
                        href="https://www.instagram.com/carlos_henriq17/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <img src={Instagram} alt="Instagram Logo" />
                    </a>
                    <a
                        href="https://www.github.com/carlos-hss"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <img src={GitHub} alt="GitHub Logo" />
                    </a>

                    <img src={Email} alt="Email Logo" />
                </p>
            </Card>
            <Card>
                <div className="blob" />
                <span className="img" />
                <h2>João Gayer</h2>
                <small>Quality Assurance</small>
                <p>
                    <a
                        href="https://www.instagram.com/carlos_henriq17/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <img src={Instagram} alt="Instagram Logo" />
                    </a>
                    <a
                        href="https://www.github.com/carlos-hss"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <img src={GitHub} alt="GitHub Logo" />
                    </a>

                    <img src={Email} alt="Email Logo" />
                </p>
            </Card>
            <Card>
                <div className="blob" />
                <span className="img" />
                <h2>Daniel Rodrigues</h2>
                <small>Quality Assurance</small>
                <p>
                    <a
                        href="https://www.instagram.com/carlos_henriq17/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <img src={Instagram} alt="Instagram Logo" />
                    </a>
                    <a
                        href="https://www.github.com/carlos-hss"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <img src={GitHub} alt="GitHub Logo" />
                    </a>

                    <img src={Email} alt="Email Logo" />
                </p>
            </Card>
            <Card>
                <div className="blob" />
                <span className="img" />
                <h2>André Rodrigues</h2>
                <small>Quality Assurance</small>
                <p>
                    <a
                        href="https://www.instagram.com/carlos_henriq17/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <img src={Instagram} alt="Instagram Logo" />
                    </a>
                    <a
                        href="https://www.github.com/carlos-hss"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <img src={GitHub} alt="GitHub Logo" />
                    </a>

                    <img src={Email} alt="Email Logo" />
                </p>
            </Card>
        </SectionModal>
    );
};

export default ModalTeam;
