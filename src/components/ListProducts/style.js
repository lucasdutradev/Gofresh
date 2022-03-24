import styled from "styled-components";

export const ContainerListProducts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
`;

export const ContainerTitleCardapio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  margin: 30px 0;
  @media screen and (min-width: 768px) {
    width: 67%;
  }
`;

export const TitleCardapio = styled.h2`
  font-family: "Comic Neue";
  font-style: italic;
  font-weight: 400;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.8);
`;

export const SubTitleCardapio = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 29px;
  color: #1f3000;
`;

export const ContainerCardListMap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 15px;
`;

export const ContainerPageSelector = styled.div`
  display: flex;
  width: 60px;
  justify-content: space-between;
  margin: 0 auto;
`;

export const ButtonPage = styled.button`
  height: 0px;
  border: transparent;
  box-sizing: border-box;
  font-family: "Comic Neue";
  font-style: italic;
  font-weight: 700;
  font-size: 29px;
  line-height: 28px;
`;

export const NumberPage = styled.p`
  width: 10px;
  height: 28px;
  font-family: "Comic Neue";
  font-style: italic;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
`;
