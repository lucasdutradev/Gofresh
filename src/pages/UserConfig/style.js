import styled from "styled-components";

export const UserConfigStyles = styled.div`
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

  header button {
    cursor: pointer;
    height: 35px;
    width: 94px;
    border-style: none;
    background-color: rgba(207, 223, 110, 1);
    color: white;
    border-radius: 12px;
  }

  .icon {
    margin-top: -60px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 15px;
    height: 120px;
    width: 120px;
    border-radius: 50%;
    background-color: rgba(196, 196, 196, 1);
    font-size: 42px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 18px;
    text-align: center;
    font-weight: lighter;
  }

  .configsContainer {
    margin-top: 30px;
    text-align: left;
    padding-left: 30px;
  }

  .configsContainer p {
    color: grey;
  }

  .configsContainer h2 {
    font-size: 18px;
    font-weight: lighter;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .configsContainer button {
    cursor: pointer;

    border-style: none;
    margin-right: 10px;
    width: fit-content;
    height: 30px;
    padding: 5px;
    border-radius: 10px;
  }

  .payment {
    cursor: pointer;

    background-color: white;
    height: fit-content;
    width: fit-content;
  }

  .payment img {
    width: 80px;
  }

  .configsContainer button:active {
    background-color: red;
  }

  .toCartEnd {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .toCartEnd a {
    font-weight: bold;
    font-size: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: red;
    width: 90%;
    height: 80px;
  }
`;
