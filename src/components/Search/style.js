import styled from "styled-components";

export const SearchIcon = styled.img`
  width: 20px;
  height: 16px;
  object-fit: cover;
`;

export const ContainerSearch = styled.div`
  width: 100%;
  max-width: 254px;
  height: 26px;
  background: #ffffff;
  box-sizing: border-box;
  border: none;
  display: flex;
`;

export const InputSearch = styled.input`
  width: 90%;
  height: 100%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: rgba(31, 48, 0, 0.5);
  padding: 0 10px;
  border: 0.5px solid #000;
  border-radius: 8px 0 0 8px;

  ::placeholder {
    color: #ccc;
  }
`;

export const ButtonSearch = styled.button`
  width: 12%;
  height: 100%;
  border: none;
  background-color: #f44335;
  border-radius: 0 8px 8px 0;
  border: 0.5px solid #000000;
  border-left: 0;
  transition: 0.2s ease-in-out;

  :hover {
    background-color: transparent;
  }
`;
