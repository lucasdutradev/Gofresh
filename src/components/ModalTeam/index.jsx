import { SectionModal, Card, ExitIcon, DivCards } from "./style";
import Linkedin from "../../images/SocialMedia/linkedin-logo.svg";
import GitHub from "../../images/SocialMedia/github-logo.svg";
import Email from "../../images/SocialMedia/email.svg";
import { useContext } from "react";
import { HomeContext } from "../../Providers/home";
import CarlosPhoto from "../../images/PersonalPhotos/CarlosPhoto.jpg";
import AndrePhoto from "../../images/PersonalPhotos/AndrePhoto.png";
import BarbaraPhoto from "../../images/PersonalPhotos/BarbaraPhoto.png";
import DanielPhoto from "../../images/PersonalPhotos/DanielPhoto.png";
import JoaoPhoto from "../../images/PersonalPhotos/JoaoPhoto.png";
import LucasPhoto from "../../images/PersonalPhotos/LucasPhoto.png";

const ModalTeam = () => {
    const { setModal } = useContext(HomeContext);
    return (
        <SectionModal>
            <ExitIcon onClick={() => setModal(false)}>
                <div />
                <div />
            </ExitIcon>
            <DivCards>
                <Card>
                    <div className="blob" />
                    <img src={CarlosPhoto} alt="" className="img" />
                    <h2>Carlos Henrique</h2>
                    <small>Product Owner</small>
                    <p>
                        <a
                            href="https://www.linkedin.com/in/carlos-henrique-santana-santos-552b77181/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <img src={Linkedin} alt="Linkedin Logo" />
                        </a>
                        <a
                            href="https://www.github.com/carlos-hss"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <img src={GitHub} alt="GitHub Logo" />
                        </a>

                        <a
                            href="mailto:<nowiki>carloshenriquesantanas19@gmail.com?"
                            subject="subject text"
                        >
                            <img src={Email} alt="Email Logo" />
                        </a>
                    </p>
                </Card>
                <Card>
                    <div className="blob" />
                    <img src={LucasPhoto} alt="" className="img" />
                    <h2>Lucas Dutra</h2>
                    <small>Tech Lead</small>
                    <p>
                        <a
                            href="https://www.linkedin.com/in/lucas-dutradev/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <img src={Linkedin} alt="Linkedin Logo" />
                        </a>
                        <a
                            href="https://github.com/lucasdutradev"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <img src={GitHub} alt="GitHub Logo" />
                        </a>

                        <a
                            href="mailto:<nowiki>lucasbryan0217@gmail.com?"
                            subject="subject text"
                        >
                            <img src={Email} alt="Email Logo" />
                        </a>
                    </p>
                </Card>
                <Card>
                    <div className="blob" />
                    <img src={BarbaraPhoto} alt="" className="img" />
                    <h2>Bárbara Barbosa</h2>
                    <small>Scrum Master</small>
                    <p>
                        <a
                            href="https://www.linkedin.com/in/b%C3%A1rbara-barbosa-2b251b153/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <img src={Linkedin} alt="Linkedin Logo" />
                        </a>
                        <a
                            href="https://github.com/Babifbarbosa"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <img src={GitHub} alt="GitHub Logo" />
                        </a>

                        <a
                            href="mailto:<nowiki>babiferreirab15@gmail.com?"
                            subject="subject text"
                        >
                            <img src={Email} alt="Email Logo" />
                        </a>
                    </p>
                </Card>
                <Card>
                    <div className="blob" />
                    <img src={JoaoPhoto} alt="" className="img" />
                    <h2>João Gayer</h2>
                    <small>Quality Assurance</small>
                    <p>
                        <a
                            href="https://www.Linkedin.com/carlos_henriq17/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <img src={Linkedin} alt="Linkedin Logo" />
                        </a>
                        <a
                            href="https://github.com/occasum13"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <img src={GitHub} alt="GitHub Logo" />
                        </a>

                        <a
                            href="mailto:<nowiki>jpassissgayer@gmail.com?"
                            subject="subject text"
                        >
                            <img src={Email} alt="Email Logo" />
                        </a>
                    </p>
                </Card>
                <Card>
                    <div className="blob" />
                    <img src={DanielPhoto} alt="" className="img" />
                    <h2>Daniel Rodrigues</h2>
                    <small>Quality Assurance</small>
                    <p>
                        <a
                            href="https://www.linkedin.com/in/danielrodriguesdnl/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <img src={Linkedin} alt="Linkedin Logo" />
                        </a>
                        <a
                            href="https://github.com/danielrodriguesdnl"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <img src={GitHub} alt="GitHub Logo" />
                        </a>

                        <a
                            href="mailto:<nowiki>dnll.srodrigues@gmail.com?"
                            subject="subject text"
                        >
                            <img src={Email} alt="Email Logo" />
                        </a>
                    </p>
                </Card>
                <Card>
                    <div className="blob" />
                    <img src={AndrePhoto} alt="" className="img" />
                    <h2>André Rodrigues</h2>
                    <small>Quality Assurance</small>
                    <p>
                        <a
                            href="https://www.linkedin.com/in/andr%C3%A9-rodrigues-da-silveira-dev/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <img src={Linkedin} alt="Linkedin Logo" />
                        </a>
                        <a
                            href="https://github.com/andrejubi"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <img src={GitHub} alt="GitHub Logo" />
                        </a>

                        <a
                            href="mailto:<nowiki>andrerodriguessil@hotmail.com?"
                            subject="subject text"
                        >
                            <img src={Email} alt="Email Logo" />
                        </a>
                    </p>
                </Card>
            </DivCards>
        </SectionModal>
    );
};

export default ModalTeam;
