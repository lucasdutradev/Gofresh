import styled from "styled-components";

export const CartEndStyles = styled.div`
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

  .container button {
    margin-top: 20px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: rgba(244, 67, 53, 1);
    color: #fff;
    height: 50px;
    width: 100%;
    font-size: 18px;
    font-weight: bolder;
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
    width: 100%;
    justify-content: flex-start;
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
