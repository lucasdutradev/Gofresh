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

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
        color: #e64d34;
    }
`;
