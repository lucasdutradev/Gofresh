import styled from "styled-components";
import Banner from "../../images/headerHome.svg";

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
    height: 1000px;
    background-image: url(${Banner});
    background-position: top;
    background-size: contain;
    background-repeat: no-repeat;
`;

export const SectionOurTeam = styled.section`
    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;

    .left {
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-right: 15px;

        img {
            width: 100%;
            border-radius: 10px;
            object-fit: cover;
        }
    }

    .right {
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        margin-left: 15px;

        div {
            width: 100%;
            height: 70%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
        }

        small {
            font-family: "Comic Neue";
            font-size: 1rem;
            color: var(--gray);
            text-align: left;
            width: 100%;
        }

        h2 {
            font-size: 2rem;
        }

        p {
            font-size: 1rem;
        }
    }
`;
