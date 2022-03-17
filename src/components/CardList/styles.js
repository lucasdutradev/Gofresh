import styled from "styled-components";

export const ContainerCardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 279px;
  height: 137px;
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 60px;
  margin-top: 60px;
`;

export const ImageCard = styled.img`
  width: 280px;
  height: 137px;
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  object-fit: cover;
`;

export const ContainerInformation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RatingStar = styled.div`
  width: 51px;
  height: 14px;
  display: flex;
`;

export const TitleName = styled.h3`
  font-family: "Comic Neue";
  font-style: italic;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: rgba(0, 0, 0, 0.8);
`;

export const DescriptionCard = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 7px;
  line-height: 8px;
  letter-spacing: 0.01em;
  color: rgba(0, 0, 0, 0.8);
`;
