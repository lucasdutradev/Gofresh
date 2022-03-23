import styled from "styled-components";

export const ContainerCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    width: 80%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    text-align: center;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.8);
  }

  .containerHeader {
    width: 100vw;
    height: 115px;
    text-align: left;
    padding-top: 20px;
    padding-left: 20px;
    background-color: var(--white-gray);
    border-radius: 0 0 35px 35px;
  }

  .containerHeader button {
    padding: 5px 15px;
    color: white;
    border-radius: 12px;
    font-weight: 700;
    border-style: none;
    background-color: var(--lima);
  }

  h1 {
    margin-top: 25px;
    font-size: 52px;
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
    margin-bottom: 20px;
  }

  .containerCart {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    max-width: 1000px;
    align-items: center;
    justify-content: space-evenly;
  }

  .containerCart button {
    width: 85%;
    max-width: 350px;
    height: 50px;
    margin-top: 20px;
    cursor: pointer;
    color: var(--white);
    border-radius: 5px;
    background-color: var(--red);
    font-size: 18px;
    font-weight: bolder;
    border: 3px solid var(--red);
    transition: 0.3s ease-in;

    :hover {
      background-color: transparent;
      color: var(--red);
    }
  }
  .containerCartButton {
    display: flex;
    width: 100vw;
    justify-content: center;
  }
`;
