import styled from "styled-components";

export const FormBox = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;

  h3 {
    width: 78%;
    font-size: 16px;
  }
  h1 {
    width: 78%;
    font-size: 20px;
    margin-bottom: 32px;
    font-weight: 500;
  }
  span {
    font-weight: lighter;
    font-size: 15px;
    display: flex;
    gap: 5px;
    margin-bottom: 11px;

    p {
      color: #f44335;
    }
  }
`;
