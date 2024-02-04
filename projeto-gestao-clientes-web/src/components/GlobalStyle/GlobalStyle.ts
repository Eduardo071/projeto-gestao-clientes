import { createGlobalStyle } from "styled-components";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const GlobalStyle = createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    list-style-type: none;
    text-decoration: none;
    overflow-x: hidden;
    ::-webkit-scrollbar{
      display: none;
    }
  }

  html, body {
    width: 100vw;
    height: 100vh;
  }
`;