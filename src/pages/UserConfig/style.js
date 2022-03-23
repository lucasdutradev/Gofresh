import styled from "styled-components";

export const UserConfigStyles = styled.div`
  .icon {
    margin: -60px auto 15px auto;
    height: 90px;
    width: 90px;
    border-radius: 50%;
    background-color: rgba(196, 196, 196, 1);
    font-size: 42px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 700px) {
      height: 120px;
      width: 120px;
    }
  }

  h1 {
    font-size: 17px;
    text-align: center;
    font-weight: 300;
  }

  .toCartEnd {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: rgba(244, 67, 53, 1);
    color: #fff;
    height: 50px;
    width: 100%;
    max-width: 320px;
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
