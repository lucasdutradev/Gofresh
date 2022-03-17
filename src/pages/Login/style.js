import styled from "styled-components";
import { keyframes } from "styled-components";
import svgLogin from "../../images/login.svg";

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
    transform: translateX(100px);
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
  align-items: flex-end;
  animation: ${fadeIn} 2s;

  .error {
    font-size: 13px;
    color: red;
  }
`;

export const ContainerBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const SocialBox = styled.div`
  animation: ${fadeIn} 2s;
  margin-top: 20px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media screen and (min-width: 700px) {
    width: 50%;
  }
`;

export const SocialBoxIcon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const BoxIcon = styled.div`
  cursor: pointer;
  background-color: ${(props) => (props.initColor ? "#405d9a" : "#fff")};
  color: white;
  border: 1px solid black;
  width: 35px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`;

export const LineBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100%;
`;

export const Line = styled.span`
  width: 100px;
  height: 1px;
  background-color: black;
  margin-bottom: 0;
`;

export const RigthBox = styled.div`
  @media screen and (min-width: 700px) {
    width: 50%;
    height: 100%;
    padding-right: 50px;
  }

  @media screen and (min-width: 900px) {
    width: 50%;
    height: 100%;
    padding-right: 164px;
  }
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  h3 {
    animation: ${fadeIn} 2s;
    width: 78%;
    font-size: 13px;
    text-align: right;
    @media screen and (min-width: 700px) {
      font-size: 16px;
    }
  }
  h1 {
    animation: ${fadeIn} 2s;
    width: 78%;
    font-size: 18px;
    margin-bottom: 32px;
    font-weight: 500;
    text-align: right;
    @media screen and (min-width: 700px) {
      font-size: 20px;
    }
  }
  .register-box {
    font-size: 13px;
    display: flex;
    gap: 5px;
    margin-bottom: 11px;

    p {
      color: #f44335;
    }
  }
  .box-logo {
    animation: ${fadeIn} 2s;
    width: 50%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    @media screen and (min-width: 700px) {
      margin-bottom: 40px;
    }
  }
  img {
    width: 100px;
    @media screen and (min-width: 700px) {
      width: 158px;
    }
  }
`;

export const LeftBox = styled.div`
  animation: ${fadeInLeft} 2s;
  @media screen and (min-width: 700px) {
    width: 50%;
    height: 100%;
    background-color: #ffdd00;
    background-image: url(${svgLogin});
    background-repeat: no-repeat;
    background-position: center;
  }
`;
