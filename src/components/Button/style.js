import styled from "styled-components";

export const ButtonRed = styled.button`
    cursor: pointer;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 700;
    line-height: 0px;
    background-color: var(--red);
    border: 2px solid var(--red);
    color: var(--white);
    width: 100%;
    max-width: 130px;
    min-height: 34px;
    transition: 0.2s ease-in-out;

    :hover {
        background-color: transparent;
        color: var(--red);
    }

    @media screen and (min-width: 500px) {
        font-size: 17px;
        max-width: 150px;
        min-height: 40px;
    }

    @media screen and (min-width: 769px) {
        font-size: 21px;
        max-width: 200px;
        min-height: 50px;
    }

    @media screen and (min-width: 1400px) {
        font-size: 24px;
        max-width: 230px;
        min-height: 57px;
    }
`;
