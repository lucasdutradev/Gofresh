import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        width: 100%;
            height: 100%;
        #root {
            width: 100%;
            height: 100%;
        }
    }
    
    h3{
        font-family: 'Comic Neue', cursive;
        font-style: italic;
        font-weight: lighter;
    }

    h1, h2, span, p{
        font-family: 'Inter', sans-serif;
    }

    :root {
        --white: #FFFFFF;
        --red: #F44335;
        --green: #1F3000;
        --white-gray: #EEEEEE;
        --gray: #333333;
        --lima: #CFDF6E;
        --black: #000;
    }
    
    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
        color: #e64d34;
    }
`;
