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
        width:100vw;
        height: 100vh;
        scroll-behavior: smooth;
    }

    body {
    width: 100vw;    
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


    
    li {
    list-style: none;
    }

    *::-webkit-scrollbar {
        width: 8px; 
        height: 8px;             
    }

    *::-webkit-scrollbar-track {
        background: var(--Black-olive);   
        border-radius: 20px;     
    }

    *::-webkit-scrollbar-thumb {
        background-color: var(--Verdigris);    
        border-radius: 20px;
    } 
    
    .hidden {
        display: none;
    }

     /* * {
        border: solid 1px red;
    }  */
`;