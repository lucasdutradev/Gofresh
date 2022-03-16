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
    background-color: grey;
  }

  header button {
    height: 35px;
    width: 94px;
    border-style: none;
    background-color: #cfdf6e;
    color: white;
  }

  .icon {
    margin-top: -60px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 15px;
    height: 120px;
    width: 120px;
    border-radius: 50%;
    background-color: #c4c4c4;
    font-size: 42px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .configsContainer {
    text-align: left;
    padding-left: 30px;
  }

  .configsContainer p {
    color: grey;
  }

  .configsContainer h2 {
    font-size: 20px;
  }

  .configsContainer button {
    border-style: none;
    margin-right: 10px;
    width: fit-content;
    height: 30px;
    padding: 5px;
    border-radius: 10px;
  }

  .configsContainer button:active {
    background-color: red;
  }
`;
