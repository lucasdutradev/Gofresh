import styled from "styled-components";

export const ContainerMain = styled.section`
  .container {
    width: 70%;

    .container1 {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
  .lunchPrices {
    p {
      font-size: 13px;
    }
  }

  h3 {
    font-size: 25px;
    font-weight: 700;
  }

  .codeInput {
    input {
      border: 1px solid var(--white-gray);
      text-align: center;
    }
  }

  select {
    border-radius: 10px;
  }
`;

export const ContainerButton = styled.div`
  a {
    width: 100%;
    max-width: 300px;
  }
`;

export const ContainerImg = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  img {
    width: 500px;
  }
`;
