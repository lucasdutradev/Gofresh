import styled from "styled-components";

export const CartEndStyles = styled.div`
  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }

  h1 {
    margin-top: 20px;
    font-size: 52px;
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
    margin-bottom: 20px;
  }

  p {
    text-align: left;
  }

  p select {
    margin-left: 15px;
    border-style: none;
  }

  .lunchPrices {
    margin-top: 50px;
  }

  .lunchPrices p {
    text-align: left;
    font-size: 17px;
    color: grey;
  }

  h3 {
    text-align: left;
    font-size: 32px;
    color: grey;
  }

  .container input {
    margin-top: 15px;
    margin-bottom: 15px;
    height: 35px;
    border: 2px solid black;
    border-radius: 8px;
  }

  .container input::placeholder {
    font-size: 15px;
  }

  .containerButton {
    display: flex;
    margin-left: -12px;
    width: 100%;
    justify-content: center;
  }

  @media screen and (min-width: 800px) {
    .container {
      display: flex;
      justify-content: space-between;
    }

    .container1 {
      width: 30%;
    }
    .container1 Button {
      margin-top: 20px;
      width: 100%;
      margin-right: auto;
    }

    .container input {
      margin-bottom: 15px;
      margin-top: 20px;
    }
  }
`;
