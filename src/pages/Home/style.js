import styled from "styled-components";
import Banner from "../../images/headerHome.svg";
import FoodImage from "../../images/yellowDiv.svg";

export const SectionHome = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const DivBanner = styled.div`
    width: 100%;
    max-width: 1600px;
    min-height: 250px;
    background-image: url(${Banner});
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;

    @media screen and (min-width: 500px) {
        min-height: 350px;
    }

    @media screen and (min-width: 769px) {
        min-height: 420px;
    }

    @media screen and (min-width: 950px) {
        min-height: 500px;
    }

    @media screen and (min-width: 1100px) {
        min-height: 570px;
    }

    @media screen and (min-width: 1200px) {
        min-height: 640px;
        margin-bottom: 30px;
    }

    @media screen and (min-width: 1400px) {
        min-height: 740px;
        margin-bottom: 50px;
    }
`;

export const SectionOurTeam = styled.section`
    width: 100%;
    min-height: 330px;
    display: flex;
    align-items: center;
    justify-content: center;

    .left {
        width: 40%;
        margin-right: 15px;
        display: none;
        img {
            width: 100%;
            border-radius: 10px;
            object-fit: cover;
        }
    }

    .right {
        width: 90%;
        height: 70%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        margin-left: 15px;

        .texts {
            width: 100%;
            height: 60%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
        }

        small {
            font-family: "Comic Neue";
            font-size: 16px;
            color: var(--gray);
            text-align: left;
            width: 100%;
        }

        h2 {
            font-size: 25px;
        }

        p {
            font-size: 16px;
        }
    }

    @media screen and (min-width: 769px) {
        min-height: 380px;

        .left {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
        }

        .right {
            width: 40%;

            small {
                font-size: 19px;
            }

            h2 {
                font-size: 30px;
            }

            p {
                font-size: 19px;
            }
        }
    }

    @media screen and (min-width: 1000px) {
        min-height: 430px;
    }

    @media screen and (min-width: 1200px) {
        min-height: 480px;

        .right {
            small {
                font-size: 23px;
            }

            h2 {
                font-size: 37px;
            }

            p {
                font-size: 23px;
            }
        }
    }

    @media screen and (min-width: 1400px) {
        min-height: 580px;

        .right {
            small {
                font-size: 28px;
            }

            h2 {
                font-size: 42px;
            }

            p {
                font-size: 28px;
            }
        }
    }
`;

export const SectionFoods = styled.section`
    width: 100%;
    max-width: 1600px;
    min-height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${FoodImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    div {
        width: 88%;
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }

    small {
        font-family: "Comic Neue";
        font-size: 16px;
        color: var(--gray);
        text-align: left;
        width: 100%;
    }

    h2 {
        font-size: 25px;
    }

    @media screen and (min-width: 500px) {
        min-height: 280px;
    }

    @media screen and (min-width: 769px) {
        min-height: 350px;

        div {
            height: 35%;
        }

        small {
            font-size: 19px;
        }

        h2 {
            font-size: 30px;
        }
    }

    @media screen and (min-width: 950px) {
        min-height: 430px;
    }

    @media screen and (min-width: 1100px) {
        min-height: 480px;
    }

    @media screen and (min-width: 1200px) {
        min-height: 550px;

        div {
            height: 30%;
        }

        small {
            font-size: 23px;
        }

        h2 {
            font-size: 37px;
        }
    }

    @media screen and (min-width: 1400px) {
        min-height: 610px;

        small {
            font-size: 27px;
        }

        h2 {
            font-size: 42px;
        }
    }
`;

export const SectionCarousel = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 250px;

    .Carousel {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        max-width: 800px;
        min-height: 200px;
        background-color: var(--lima);

        .texts {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            width: 80%;
            min-height: 270px;

            img {
                width: 30px;
            }

            .stars {
                display: flex;
                align-items: center;
                justify-content: space-around;
                div {
                    width: 20px;
                }

                svg {
                    width: 20px;
                }
            }

            h2 {
                font-weight: 400;
                font-size: 25px;
            }

            p {
                font-size: 20px;
            }
        }

        h3 {
            text-align: center;
            font-weight: 700;
            width: 10%;
            color: var(--black);
            cursor: pointer;
        }
    }

    @media screen and (min-width: 500px) {
        min-height: 300px;

        .Carousel {
            min-height: 250px;
        }
    }

    @media screen and (min-width: 769px) {
        min-height: 340px;

        .Carousel {
            min-height: 300px;
        }
    }

    @media screen and (min-width: 950px) {
        min-height: 370px;
    }
`;
