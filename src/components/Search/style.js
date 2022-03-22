import styled from "styled-components";

export const SearchIcon = styled.img`
  width: 13px;
  height: 11px;
  object-fit: cover;
`;

export const ContainerSearch = styled.div`
  width: 224px;
  height: 23px;
  background: #ffffff;
  box-sizing: border-box;
  border: none;
  display: flex;
  justify-content: space-between;
`;

export const InputSearch = styled.input`
  width: 90%;
  height: 100%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 11px;
  color: rgba(31, 48, 0, 0.5);
  padding-left: 5%;
  border: 0.5px solid #000000;
  border-radius: 5px 0 0 5px;

  ::placeholder {
    color: black;
  }
`;

export const ButtonSearch = styled.button`
  width: 10%;
  height: 100%;
  border: none;
  background-color: #f44335;
  border-radius: 0 5px 5px 0;
  border: 0.5px solid #000000;
  transition: 0.2s ease-in-out;

  :hover {
    background-color: transparent;
  }
`;
