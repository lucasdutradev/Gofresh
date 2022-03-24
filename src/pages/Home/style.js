import styled from "styled-components";
import Banner from "../../images/headerHome.svg";
import FoodImage from "../../images/yellowDiv.png";

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
    max-width: 1920px;
    min-height: 250px;
    background-image: url(${Banner});
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
    padding-left: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

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

export const DivTextsBanner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 70%;

    img {
        width: 80px;
    }
    h1 {
        width: 100%;
        text-align: left;
        font-size: 28px;
        color: var(--white);
        margin: 5% 0 0;
    }
    small {
        width: 100%;
        text-align: left;
        font-size: 12px;
        color: var(--white);
        margin-bottom: 5%;
    }

    div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
    }

    .button-transparent {
        cursor: pointer;
        border: none;
        border-radius: 5px;
        font-size: 15px;
        font-weight: 700;
        background-color: transparent;
        color: var(--white);
        border: 2px solid var(--red);
        width: 100%;
        max-width: 130px;
        min-height: 34px;
        margin-left: 8%;
        transition: 0.2s ease-in;

        :hover {
            background-color: var(--red);
            color: var(--white);
        }
    }

    @media screen and (min-width: 500px) {
        min-height: 350px;
        width: 50%;

        img {
            width: 100px;
        }
        h1 {
            font-size: 30px;
        }
        small {
            font-size: 15px;
        }
        .button-transparent {
            font-size: 17px;
            max-width: 150px;
            min-height: 40px;
        }
    }

    @media screen and (min-width: 769px) {
        min-height: 420px;

        img {
            width: 100px;
        }
        h1 {
            font-size: 40px;
        }
        small {
            font-size: 17px;
        }

        .button-transparent {
            font-size: 21px;
            max-width: 200px;
            min-height: 50px;
        }
    }

    @media screen and (min-width: 950px) {
        img {
            width: 130px;
        }
        h1 {
            font-size: 45px;
        }
        small {
            font-size: 19px;
        }
        min-height: 500px;
    }

    @media screen and (min-width: 1100px) {
        min-height: 570px;

        img {
            width: 170px;
        }
        h1 {
            font-size: 55px;
        }
        small {
            font-size: 21px;
        }
    }

    @media screen and (min-width: 1200px) {
        min-height: 640px;
        margin-bottom: 30px;

        h1 {
            font-size: 60px;
        }
    }

    @media screen and (min-width: 1400px) {
        min-height: 740px;
        margin-bottom: 50px;

        img {
            width: 230px;
        }
        h1 {
            font-size: 65px;
        }
        small {
            font-size: 25px;
        }

        .button-transparent {
            font-size: 24px;
            max-width: 230px;
            min-height: 57px;
        }
    }

    @media screen and (min-width: 1600px) {
        min-height: 740px;
        margin-bottom: 50px;

        img {
            width: 230px;
        }
        h1 {
            font-size: 75px;
        }
        small {
            font-size: 28px;
        }

        .button-transparent {
            font-size: 27px;
            max-width: 250px;
            min-height: 63px;
        }
    }
`;

export const SectionOurTeam = styled.section`
    width: 100%;
    max-width: 1920px;
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
    max-width: 1920px;
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
        font-size: 14px;
        color: var(--gray);
        text-align: left;
        width: 100%;
    }

    h2 {
        font-size: 22px;
        width: 50%;
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
            width: 70%;
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
        min-height: 180px;
        background-color: var(--lima);
        border: 2px solid var(--green);
        border-radius: 15px;

        .texts {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            width: 80%;
            min-height: 160px;

            img {
                width: 20px;
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
                color: var(--green);
                margin: 0;
            }

            p {
                font-size: 20px;
                color: var(--green);
                margin: 0;
            }
        }

        h3 {
            text-align: center;
            font-weight: 700;
            width: 10%;
            color: var(--black);
            cursor: pointer;
            margin: 0;
        }
    }

    @media screen and (min-width: 500px) {
        min-height: 300px;

        .Carousel {
            min-height: 210px;

            .texts {
                min-height: 180px;
            }

            h3 {
                text-align: center;
                font-weight: 700;
                width: 10%;
                color: var(--black);
                cursor: pointer;
            }
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

        .Carousel {
            min-height: 300px;
            .texts {
                min-height: 260px;

                img {
                    width: 30px;
                }

                .stars {
                    div {
                        width: 25px;
                    }

                    svg {
                        width: 25px;
                    }
                }

                h2 {
                    font-weight: 400;
                    font-size: 30px;
                }

                p {
                    font-size: 25px;
                }
            }
        }
    }
`;
