import styled from "styled-components";

export const BoxContainer = styled.div`
  a {
    color: white;
  }
  @media screen and (min-width: 700px) {
    h1 {
      font-size: 100px;
      color: #f44335;
    }
    p {
      font-size: 30px;
    }
  }
  h1 {
    color: #f44335;
  }
  img {
    margin-top: -80px;
    width: 100%;
    max-width: 300px;
  }
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  p {
    margin-bottom: 30px;
  }
`;
