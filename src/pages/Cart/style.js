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
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 85px;
    background-color: #eeeeee;
    border-radius: 0 0 30px 30px;
  }

  .containerHeader button {
    margin: 9px;
    width: 64px;
    height: 21px;
    background-color: #cfdf6e;
    color: #ffffff;
    border-radius: 5px 5px 5px 5px;
    font-size: 7px;
    border: none;
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
