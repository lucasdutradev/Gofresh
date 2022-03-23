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
  cursor: pointer;
  padding: 0 30px;
  font-family: "Inter";
  font-style: italic;
  font-weight: 400;
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
  font-size: 10px;
  @media screen and (min-width: 700px) {
    font-size: 16px;
  }
`;
