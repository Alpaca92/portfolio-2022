import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  html {
    padding-top: 9rem;
    background: ${(props) => props.theme.bgColor} 100%;
    color: ${(props) => props.theme.mainColor};
    font-family: 'NanumSquare', sans-serif;
  }

  body {
    overflow-y: 
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
