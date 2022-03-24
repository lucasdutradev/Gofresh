import styled from "styled-components";

export const ConfigsContains = styled.div`
  margin-top: 40px;
  h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  h3 {
    font-size: 14px;
  }

  .mapContainer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
    button {
      width: 60px;
      margin: 3px 5px;
      border: none;
      border-radius: 4px;
      background-color: #ccc;
      color: #000;
    }

    button.payment {
      background-color: transparent;
      img {
        width: 63px;
      }
    }
  }
`;
