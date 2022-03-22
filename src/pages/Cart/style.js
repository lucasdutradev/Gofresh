import styled from "styled-components";

export const ContainerCart = styled.div`
  .containerBody {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }

  .containerHeader {
    height: 115px;
    text-align: left;
    padding-top: 20px;
    padding-left: 20px;
    background-color: rgba(238, 238, 238, 1);
    border-radius: 0 0 35px 35px;
  }

  .containerHeader button {
    height: 35px;
    width: 94px;
    color: white;
    border-radius: 12px;
    border-style: none;
    background-color: rgba(207, 223, 110, 1);
  }

  h1 {
    font-size: 52px;
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
    margin-bottom: 20px;
  }

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 8px;
    letter-spacing: 0.01em;
    color: rgba(0, 0, 0, 0.8);
  }

  .containerCart button {
    width: 280px;
    height: 50px;
    margin-top: 20px;
    cursor: pointer;
    color: #fff;
    border: none;
    border-radius: 5px;
    background-color: rgba(244, 67, 53, 1);
    font-size: 18px;
    font-weight: bolder;
  }
  .containerCartButton {
    display: flex;
    width: 100vw;
    justify-content: center;
  }
`;
