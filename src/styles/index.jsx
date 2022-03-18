import { createGlobalStyle } from "styled-components";

export const DefaultStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
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
        --gray: #333333;
        --lima: #CFDF6E;
    }
`;
