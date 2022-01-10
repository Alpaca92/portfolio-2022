import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    padding-top: 9rem;
    background: ${(props) => props.theme.bgColor} 100%;
  }

  * {
    box-sizing: border-box;
    font-family: 'NanumSquare', sans-serif;
    color: ${(props) => props.theme.mainColor};
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
