import styled from "styled-components";

export const HeaderStyled = styled.section`
    width: 100%;
    min-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 100px;
        margin-left: 30px;
    }
`;

export const StyledBurger = styled.div`
    width: 2rem;
    height: 1.9rem;
    position: fixed;
    top: 15px;
    right: 30px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 20;
    cursor: pointer;

    div {
        width: 2rem;
        height: 4px;
        background-color: var(--red);
        border-radius: 10px;
        transform-origin: 1.5px;
        transition: all 0.3s linear;

        :nth-child(1) {
            transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
        }

        :nth-child(2) {
            transform: ${({ open }) =>
                open ? "translateX(100%)" : "translateX(0)"};
            opacity: ${({ open }) => (open ? 0 : 1)};
        }

        :nth-child(3) {
            transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
        }
    }
`;

export const Nav = styled.nav`
    list-style: none;
    flex-flow: column nowrap;
    background-color: rgb(18, 18, 20, 0.95);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s linear;
    z-index: 19;

    li {
        padding: 18px 20px;
        font-size: 23px;
        color: var(--white);
        cursor: pointer;
        transition: 0.2s ease-in-out;

        :hover {
            color: var(--red);
        }
    }
`;
