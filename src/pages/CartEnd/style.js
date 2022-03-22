import styled from "styled-components";

export const CartEndStyles = styled.div`
  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }

  header {
    height: 115px;
    text-align: left;
    padding-top: 20px;
    padding-left: 20px;
    background-color: rgba(238, 238, 238, 1);
    border-radius: 0 0 35px 35px;
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
    padding-left: 30px;
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
    padding-left: 30px;
  }

  h3 {
    text-align: left;
    font-size: 32px;
    color: grey;
    padding-left: 30px;
  }

  .container button {
    margin-top: 20px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: rgba(244, 67, 53, 1);
    color: #fff;
    width: 85%;
    height: 50px;
    font-size: 18px;
    font-weight: bolder;
  }

  .container input {
    margin-top: 15px;
    margin-left: 30px;
    height: 35px;
    border: 2px solid black;
    border-radius: 8px;
  }

  .container input::placeholder {
    font-size: 15px;
  }

  .containerButton {
    display: flex;
    width: 100vw;
    justify-content: center;
  }

  @media screen and (min-width: 800px) {
    .container {
      display: flex;
      justify-content: space-between;
    }

    .container1 {
      width: 33%;
    }
    .container Button {
      margin-top: 20px;
      width: 20%;
      margin-right: auto;
    }
    .containerButton {
      margin-left: 30px;
    }
    .container input {
      margin-bottom: 15px;
      margin-top: 20px;
    }
  }
`;
