import styled from "styled-components";
import { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    transform: translateY(-30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Span = styled.span`
  width: 50%;
  text-align: right;
  background-color: ${(props) =>
    props.isFavor === "Favoritos" ? "#F44335" : "#FFE600"};
  color: ${(props) => (props.isFavor === "Favoritos" ? "#FFFF" : "#000")};
  border-radius: 0 10px 0 10px;
  box-shadow: -1px 3px 3px 0px #ccc;
  padding: 0 5px;
  box-sizing: border-box;
`;

export const ContainerCardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  height: 300px;
  animation: ${fadeIn} 2s;

  .containerSpan {
    display: flex;
    justify-content: flex-end;
    transform: translateY(23px);
    width: 100%;
    z-index: 1;
  }

  @media screen and (min-width: 558px) {
    margin: 0 100px;
  }
`;

export const ImageCard = styled.img`
  width: 100%;
  max-width: 280px;
  height: 170px;
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  object-fit: cover;
`;

export const ContainerInformation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RatingStar = styled.div`
  width: 71px;
  display: flex;
  margin: 5px 0;
`;

export const TitleName = styled.h3`
  margin: 5px 0;
  font-family: "Comic Neue";
  font-style: italic;
  font-weight: 400;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.8);
`;

export const DescriptionCard = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 9px;
  letter-spacing: 0.01em;
  color: rgba(0, 0, 0, 0.8);
`;

export const ContainerTitleRatingButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerTitleRating = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonAdd = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
  font-size: 18px;
  background: var(--red);
  color: var(--white);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  border: 1px solid var(--red);
  transition: 0.3s;
  :hover {
    background-color: transparent;
    color: var(--red);
  }
`;
