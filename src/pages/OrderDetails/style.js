import styled from "styled-components";

export const PrincipalContainer = styled.div``;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 85px;
  background-color: #eeeeee;
  border-radius: 0 0 30px 30px;

  button {
    margin: 9px;
    width: 64px;
    height: 21px;
    background-color: #cfdf6e;
    color: #ffffff;
    border-radius: 5px 5px 5px 5px;
    font-size: 7px;
    border: none;
  }
`;
export const Main = styled.div`
  
section1 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px;
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        h1{
            width: 220px;
            height: 78px;
            display: flex;
            align-items: center;
            justify-content: center;
            font size: 24px;
            color: rgba(0, 0, 0, 0.5);
        }
    }
   
}
  
section2 {
    display: flex;
    font-size: 10px;
    justify-content: space-between;
    margin: 10px 10px 10px 10px;
    p {
        color: rgba(31, 48, 0, 0.5);
        span{
            color: #111111;
        }
    }
}
section3 {
    display: flex;
    justify-content: space-around;
    border: solid 1px #cccccc;
   
  button{
    font-size: 15px;
    margin:5px;
    background-color:#ffffff;
    border: none;
    color: rgba(31, 48, 0, 0.5);

  }
}

  section4 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: rgba(31, 48, 0, 0.8);
  p{
    margin: 45px;
  }
  span{
    margin:1px;
    color: rgba(31, 48, 0, 0.5);
  }
  div1{
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
  }
  button{
   
    display:flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 50px;
    border-radius:50%;
    border: none;
    background-color: #F44335;
  }
  @media(min-width: 769px){
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 50px;
  }
    }

  section5 {
    display: flex;
    justify-content: center;
    button{
        background-color: #F44335;
        color: #ffffff; 
        width: 279px;
        height: 38px;
        border-radius:5px;
        border: none;
        margin-top: 70px;
    }
}
section6{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    div{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 279px;
        height: 137px;
        background-color: rgba(241, 241, 241, 1);
        border-radius:5px;
        margin: 70px;
        p{
            font-size: 12px;
            margin:12px;
        }
        span{
            font-size: 12px;
            font-style: italic;
        }
    }
    
}
`;
