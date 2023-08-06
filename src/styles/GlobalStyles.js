import {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
   @font-face {
    font-family:Donau;
    src: url("../assets/Fonts/Donau\ Neue_Uppercase.otf");
   }
   
   :root {
        --Black: #010400;
        --Black-olive: #30332e;
        --Snow: #fffbfc;
        --Verdigris: #62bbc1;
        --Hollywood-cerise: #ec058e;
        --btn-gradient: linear-gradient(83deg, #ffa100, #fb103d);
        --btn-gradient-secondary: linear-gradient(140deg, #3B3022, #3B2329);
    }

    html {
        scroll-behavior: smooth;
    }

    body {
    /* width: 100vw;     */
    margin: 0;
    padding: 0;
    background: var(--Black-olive);
    font-family: 'Libre Franklin', sans-serif;
    color: var(--Snow);
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden
    }

    a {
    text-decoration: none;
    color: var(--Snow);
    }

    /* a:visited {
    color: white;
    } */
    
    li {
    list-style: none;
    }

    /* * {
        border: solid 1px red;
    } */
`;