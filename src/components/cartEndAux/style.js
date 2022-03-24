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
