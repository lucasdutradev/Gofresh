import styled from "styled-components";

export const ContainerBag = styled.div`
  position: fixed;
  bottom: 15px;
  right: 30px;
  background-color: var(--red);
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  .counter {
    font-weight: 700;
    background-color: var(--white);
    width: 23px;
    height: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    border: 1px solid var(--red);
    transform: translate(3px, -15px);
  }
  img {
    width: 27px;
    transform: translate(11.5px, 0);
  }
`;
