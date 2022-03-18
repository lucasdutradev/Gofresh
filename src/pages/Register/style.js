import styled from "styled-components";
import { keyframes } from "styled-components";
import svgRegister from "../../images/security.svg";

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const FormBox = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  animation: ${fadeInLeft} 2s;
  .error {
    font-size: 13px;
    color: red;
  }
`;

export const ContainerBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const RigthBox = styled.div`
  @media screen and (min-width: 700px) {
    width: 50%;
    height: 100%;
    padding-left: 50px;
  }

  @media screen and (min-width: 900px) {
    width: 50%;
    height: 100%;
    padding-left: 164px;
  }
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  h3 {
    width: 78%;
    font-size: 16px;
    margin-top: 30px;
    animation: ${fadeInLeft} 2s;
  }
  h1 {
    width: 78%;
    font-size: 20px;
    margin-bottom: 32px;
    font-weight: 500;
    animation: ${fadeInLeft} 2s;
  }
  span {
    font-size: 13px;
    display: flex;
    gap: 5px;
    margin-bottom: 11px;

    p {
      color: #f44335;
    }
  }
  .box-logo {
    width: 50%;
    display: flex;
    justify-content: center;
    animation: ${fadeInLeft} 2s;
  }
  img {
    width: 100px;
    @media screen and (min-width: 700px) {
      width: 158px;
    }
  }
`;

export const LeftBox = styled.div`
  animation: ${fadeIn} 2s;
  @media screen and (min-width: 700px) {
    width: 50%;
    height: 100%;
    background-color: #cfdf6e;
    background-image: url(${svgRegister});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80%;
  }
`;
