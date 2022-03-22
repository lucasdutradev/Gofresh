import styled from "styled-components";

export const ContainerCategoryTitle = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  .selected {
    text-decoration: underline;
    text-decoration-color: #000000;
    text-decoration-style: solid;
  }
`;

export const ButtonTittle = styled.h3`
  font-family: "Inter";
  font-style: italic;
  font-weight: 400;
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
  margin-left: 10vw;
  margin-right: 10vw;
  margin-bottom: 3vh;
  width: 4vw;
  font-size: 3.5vw;
  @media screen and (min-width: 700px) {
    font-size: 3vh;
  }
`;
