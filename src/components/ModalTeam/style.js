import styled from "styled-components";

export const SectionModal = styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 29;
    background-color: rgb(0, 0, 0, 9.5);
`;

export const ExitIcon = styled.div`
    width: 2rem;
    height: 1.3rem;
    position: fixed;
    top: 20px;
    right: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 32;
    cursor: pointer;

    div {
        width: 2rem;
        height: 4px;
        background-color: var(--red);
        border-radius: 10px;
        transform-origin: 9px;
        transition: all 0.3s linear;

        :nth-child(1) {
            transform: rotate(45deg);
        }

        :nth-child(2) {
            transform: rotate(-45deg);
        }
    }
`;

export const Card = styled.div`
    width: 190px;
    height: 254px;
    position: relative;
    background: #f0f0f0;
    border-radius: 10px;
    text-align: center;
    transition: all 0.5s;
    margin: 50px;

    :hover {
        box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.623);
        background-color: var(--red);
    }

    .blob {
        height: 10px;
        width: 75%;
        border-radius: 0 0 30px 30px;
        margin: 0 auto;
        background-color: var(--red);
        visibility: visible;
        transition: all 0.3s;
    }
    :hover > .blob {
        height: 0;
    }

    .img {
        display: flex;
        margin: 30px auto 10px auto;
        width: 90px;
        height: 90px;
        background-color: var(--red);
        border-radius: 20px;
        font-size: 11px;
        justify-content: center;
        align-items: center;
        transition: all 0.5s;
    }

    :hover > .img {
        width: 100%;
        height: 70%;
        border-radius: 10px;
        margin: 0 auto;
        background-color: #f0f0f0;
        z-index: 30;
    }

    h2 {
        padding: 10px 15px 3px;
        font-size: 22px;
        transition: all 0.1s;
        z-index: -99;
    }
    :hover > h2 {
        opacity: 0;
        position: absolute;
        transition: all 0.5s;
    }

    small {
        font-size: 16px;
        font-style: italic;
        transition: all 0.1s;
        z-index: -99;
    }
    :hover > small {
        opacity: 0;
        position: absolute;
        transition: all 0.5s;
    }

    span {
        font-size: 24px;
    }

    p {
        opacity: 0;
        display: none;

        img {
            width: 38px;
            height: 38px;
            padding: 10px 5px 5px 5px;
            cursor: pointer;
        }
    }

    :hover > p {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        width: 100%;
        opacity: 1;
        transition: all 0.1s;
        z-index: 31;
    }
`;
