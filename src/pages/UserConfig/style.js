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
    margin-top: 20px;
    text-align: left;
    padding-left: 30px;
  }

  .configsContainer p {
    color: grey;
  }

  .configsContainer h2 {
    font-size: 17.5px;
    font-weight: lighter;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .configsContainer button {
    cursor: pointer;
    border-style: none;
    margin-bottom: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    width: 60px;
    height: 30px;
    padding: 5px 20px 5px 20px;
    border-radius: 10px;
    font-size: 18px;
  }

  ul {
    width: 90%;
    display: flex;
    list-style: none;
    flex-wrap: wrap;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 54px;
    height: 35px;
    margin: 5px 10px 5px 10px;
  }

  .payment {
    cursor: pointer;
    background-color: white;
  }

  .payment img {
    width: 60px;
  }

  .configsContainer button:active {
    background-color: red;
  }

  .toCartEnd {
    width: 100vw;
    display: flex;
    justify-content: center;
  }

  .toCartEnd a {
    display: flex;
    align-items: center;
    justify-content: center;

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

  @media screen and (min-width: 800px) {
    .toCartEnd a {
      margin-top: 20px;
      width: 50%;
    }
  }
`;
